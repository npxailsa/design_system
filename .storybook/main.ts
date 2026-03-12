import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-vitest"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@mui/material',
      '@mui/icons-material',
      'vitest',
      '@vitest/runner',
      '@vitest/browser',
      '@storybook/addon-vitest'
    ];
    return config;
  }
};
export default config;
