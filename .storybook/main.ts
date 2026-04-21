import type { StorybookConfig } from '@storybook/react-vite';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

// __filename is not available in ESM scope — derive it from import.meta.url
const __filename = fileURLToPath(import.meta.url);

// Absolute paths to the CJS builds — resolved once at config load time.
const reactDomCjsProd = fileURLToPath(
  new URL('../node_modules/react-dom/cjs/react-dom.production.min.js', import.meta.url)
);
const reactTransitionGroupCjs = fileURLToPath(
  new URL('../node_modules/react-transition-group/cjs/index.js', import.meta.url)
);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-mcp",
    "@storybook/addon-storysource",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    "storybook-addon-code-editor"
  ],
  "framework": {
    name: "@storybook/react-vite",
    options: {},
  },
  "features": {
    "componentsManifest": true
  },
  "staticDirs": [
    "../public",
    ...getCodeEditorStaticDirs(__filename),
  ],
  async viteFinal(config) {
    process.env.EDITOR = 'nano';
    config.optimizeDeps = config.optimizeDeps || {};

    // Pre-bundle everything Storybook needs at startup so Vite never
    // discovers a new dep mid-session and triggers a re-optimization
    // (which deletes the chunks the browser already has references to).
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      'hoist-non-react-statics',
      'storybook/internal/docs-tools',
      'storybook/internal/preview-api',
      'storybook/internal/core-events',
      'storybook/internal/channels',
      'storybook/internal/client-logger',
      'storybook/internal/csf',
      'storybook/internal/theming',
      'storybook/internal/components',
    ];

    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@storybook/addon-docs',
      '@storybook/addon-docs/blocks',
    ];

    // Force Vite to complete all dep discovery before serving the first request,
    // preventing the stale-chunk problem.
    (config.optimizeDeps as Record<string, unknown>).holdUntilCrawlEnd = true;

    config.build = config.build || {};
    config.build.commonjsOptions = {
      ...(config.build.commonjsOptions || {}),
      include: [/hoist-non-react-statics/, /node_modules/],
      transformMixedEsModules: true,
    };

    // ─── Chunk size warning threshold ────────────────────────────────────────
    // Storybook's preview iframe will always include a sizeable runtime; raise
    // the limit so the build log is not polluted with false-alarm warnings.
    // Individual vendor splits below keep the real bundle sizes in check.
    config.build.chunkSizeWarningLimit = 2000; // kB

    // ─── Code splitting — manualChunks ───────────────────────────────────────
    //
    // The default Rollup output bundles everything into one iframe chunk
    // (~4 MB). Splitting by vendor / subsystem gives the browser parallel
    // downloads and better long-term caching (vendor code changes rarely).
    config.build.rollupOptions = {
      ...(config.build.rollupOptions || {}),
      output: {
        ...((config.build.rollupOptions as Record<string, unknown>)?.output || {}),
        manualChunks(id: string) {
          // ── @mui/icons-material ─────────────────────────────────────────
          // Largest single vendor (~1 MB+). Each icon is a separate file in
          // the package; grouping them avoids hundreds of tiny chunks while
          // still isolating them from the rest of MUI.
          if (id.includes('node_modules/@mui/icons-material')) {
            return 'vendor-mui-icons';
          }

          // ── MUI core + system ───────────────────────────────────────────
          // @mui/material, @mui/system, @mui/base, @mui/utils
          if (
            id.includes('node_modules/@mui/material') ||
            id.includes('node_modules/@mui/system') ||
            id.includes('node_modules/@mui/base') ||
            id.includes('node_modules/@mui/utils') ||
            id.includes('node_modules/@mui/styled-engine')
          ) {
            return 'vendor-mui-core';
          }

          // ── Emotion ─────────────────────────────────────────────────────
          if (id.includes('node_modules/@emotion')) {
            return 'vendor-emotion';
          }

          // ── React core ──────────────────────────────────────────────────
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-is/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }

          // ── Syntax highlighting (very large) ────────────────────────────
          if (
            id.includes('node_modules/refractor') ||
            id.includes('node_modules/prismjs') ||
            id.includes('node_modules/react-syntax-highlighter')
          ) {
            return 'vendor-syntax';
          }

          // ── Storybook docs renderer ─────────────────────────────────────
          if (
            id.includes('node_modules/@storybook/addon-docs') ||
            id.includes('node_modules/@storybook/blocks') ||
            id.includes('storybook/internal/docs-tools')
          ) {
            return 'vendor-storybook-docs';
          }

          // ── Storybook test / a11y ───────────────────────────────────────
          if (
            id.includes('node_modules/axe-core') ||
            id.includes('node_modules/@axe-core') ||
            id.includes('node_modules/@storybook/addon-a11y')
          ) {
            return 'vendor-a11y';
          }

          // ── Storybook core runtime ──────────────────────────────────────
          if (
            id.includes('node_modules/@storybook') ||
            id.includes('node_modules/storybook')
          ) {
            return 'vendor-storybook';
          }

          // ── General node_modules ────────────────────────────────────────
          // Anything else in node_modules goes into a shared vendor chunk.
          if (id.includes('node_modules/')) {
            return 'vendor-misc';
          }

          // Application code (src/) is handled by Rollup's default entry
          // splitting — no explicit chunk needed.
          return undefined;
        },
      },
    };

    // ─── Rollup CJS/ESM interop fixes ────────────────────────────────────────
    //
    // Problem 1 — react-transition-group ESM default import:
    //   react-transition-group's ESM build (esm/Transition.js) does
    //   `import ReactDOM from 'react-dom'` (default import). react-dom exposes
    //   only named CJS exports; Rollup's static analysis cannot find a `default`.
    //   Fix: alias react-transition-group to its CJS build (require, not ESM import).
    //
    // Problem 2 — react-dom named exports in production build:
    //   react-dom/index.js is a CJS conditional wrapper:
    //     if (NODE_ENV === 'production') module.exports = require('./cjs/react-dom.production.min.js')
    //   The @rollup/plugin-commonjs cannot resolve named exports (createPortal,
    //   flushSync …) through that conditional. User code and MUI both import
    //   these names and Rollup fails with "not exported by react-dom/index.js".
    //   Fix: intercept the transform of react-dom/index.js and swap in the
    //   production CJS bundle content directly (which has top-level exports.*).
    config.plugins = [
      {
        name: 'cjs-interop-fix',
        enforce: 'pre' as const,
        transform(_code: string, id: string) {
          // When react-dom resolves to its conditional wrapper (index.js),
          // replace the content with the production CJS bundle so the
          // @rollup/plugin-commonjs can find all named exports statically.
          if (/[/\\]react-dom[/\\]index\.js$/.test(id)) {
            return { code: readFileSync(reactDomCjsProd, 'utf-8'), map: null };
          }
          // Similarly, keep react-transition-group on its CJS path.
          if (/[/\\]react-transition-group[/\\]esm[/\\]/.test(id)) {
            const cjsId = id.replace(/[/\\]esm[/\\]/, '/cjs/');
            try {
              return { code: readFileSync(cjsId, 'utf-8'), map: null };
            } catch {
              return null;
            }
          }
          return null;
        },
      },
      ...(config.plugins ?? []),
    ];

    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }

    return config;
  }
};
export default config;
