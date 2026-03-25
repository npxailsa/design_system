import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-vitest"
  ],
  "framework": "@storybook/react-vite",
  "staticDirs": [
    "../public"
  ],
  async viteFinal(config) {
    process.env.EDITOR = 'nano';
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
      'hoist-non-react-statics'
    ];
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@mui/icons-material',
      '@storybook/addon-docs',
      '@storybook/addon-docs/blocks'
    ];
    config.build = config.build || {};
    config.build.commonjsOptions = {
      ...(config.build.commonjsOptions || {}),
      include: [/hoist-non-react-statics/, /node_modules/],
      transformMixedEsModules: true,
    };

    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }

    // Removed exclude for icons-material as it caused runtime errors with its dependencies
    return config;
  }
};
export default config;
