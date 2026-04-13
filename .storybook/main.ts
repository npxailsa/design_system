import type { StorybookConfig } from '@storybook/react-vite';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';
import { fileURLToPath } from 'url';

// __filename is not available in ESM scope — derive it from import.meta.url
const __filename = fileURLToPath(import.meta.url);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    "storybook-addon-code-editor"
  ],
  "framework": {
    name: "@storybook/react-vite",
    options: {},
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
      '@mui/icons-material',
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

    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }

    return config;
  }
};
export default config;
