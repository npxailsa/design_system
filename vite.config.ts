/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^file:\/\/.*\/node_modules\/@storybook\/addon-docs\/dist\/mdx-react-shim\.js$/,
        replacement: path.join(dirname, 'node_modules/@storybook/addon-docs/dist/mdx-react-shim.js')
      },
      {
        find: '@storybook/addon-docs/dist/mdx-react-shim.js',
        replacement: path.join(dirname, 'node_modules/@storybook/addon-docs/dist/mdx-react-shim.js')
      },
      {
        find: 'storybook/internal/theming',
        replacement: 'storybook/theming'
      },
      {
        find: 'storybook/internal/components',
        replacement: 'storybook/internal/components'
      },
      {
        find: 'storybook/internal/client-logger',
        replacement: 'storybook/internal/client-logger'
      },
      {
        find: 'storybook/internal/csf',
        replacement: 'storybook/internal/csf'
      },
      {
        find: 'storybook/internal/preview-api',
        replacement: 'storybook/internal/preview-api'
      },
      {
        find: 'storybook/internal/docs-tools',
        replacement: 'storybook/internal/docs-tools'
      },
      {
        find: 'storybook/internal/core-events',
        replacement: 'storybook/internal/core-events'
      },
      {
        find: 'storybook/internal/channels',
        replacement: 'storybook/internal/channels'
      }
    ]
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        /*
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        */
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});
