import { create } from 'storybook/theming';

/**
 * NPX Design System — Storybook UI Theme
 *
 * Uses design token values directly (colour, spacing, radius) so the
 * Storybook chrome matches the design system's visual language.
 *
 * Token references (from global_design_tokens.json / tokens.css):
 *   Primary blue    → --global-color-primary-blue-blue-500  (#4A58CC)
 *   Navy            → --global-color-secondary-navy         (#3a3282)
 *   Black           → --global-color-base-black             (#1C1C1C)
 *   Gray-50         → --global-color-neutral-gray-50        (#f9fafb)
 *   Gray-200        → --global-color-neutral-gray-200       (#e5e7eb)
 *   Gray-300        → --global-color-neutral-gray-300       (#d2d5da)
 *   Gray-500        → --global-color-neutral-gray-500       (#6d7280)
 *   Gray-600        → --global-color-neutral-gray-600       (#4b5563)
 *   White           → --global-color-base-white             (#ffffff)
 *   Radius-sm       → --global-spacing-radius-sm            (4px)
 */
export const npxTheme = create({
  base: 'light',

  // ── Brand ──────────────────────────────────────────────────────────────────
  brandTitle: 'NPX Design System',
  brandUrl: 'https://npxinnovation.github.io/design_system',
  brandImage: '/npx-ds-logo.png',
  brandTarget: '_self',

  // ── Typography ─────────────────────────────────────────────────────────────
  // Matches --font-family-primary and --font-family-secondary from tokens.css
  fontBase: '"F37GingerPro", "Calibri", system-ui, sans-serif',
  fontCode: '"Courier New", Courier, monospace',

  // ── Colors ─────────────────────────────────────────────────────────────────
  colorPrimary: '#4A58CC',   // --global-color-primary-blue-blue-500
  colorSecondary: '#3a3282', // --global-color-secondary-navy

  // ── App chrome ─────────────────────────────────────────────────────────────
  appBg: '#f9fafb',          // --global-color-neutral-gray-50
  appContentBg: '#ffffff',   // --global-color-base-white
  appPreviewBg: '#ffffff',   // --global-color-base-white
  appBorderColor: '#e5e7eb', // --global-color-neutral-gray-200
  appBorderRadius: 4,        // --global-spacing-radius-sm

  // ── Text ───────────────────────────────────────────────────────────────────
  textColor: '#1C1C1C',      // --global-color-base-black
  textInverseColor: '#ffffff',

  // ── Toolbar ────────────────────────────────────────────────────────────────
  barTextColor: '#4b5563',   // --global-color-neutral-gray-600
  barSelectedColor: '#4A58CC', // --global-color-primary-blue-blue-500
  barHoverColor: '#3a3282',  // --global-color-secondary-navy
  barBg: '#ffffff',          // --global-color-base-white

  // ── Input / Form ───────────────────────────────────────────────────────────
  inputBg: '#ffffff',
  inputBorder: '#d2d5da',    // --global-color-neutral-gray-300
  inputTextColor: '#1C1C1C', // --global-color-base-black
  inputBorderRadius: 4,      // --global-spacing-radius-sm

  // ── Buttons ────────────────────────────────────────────────────────────────
  buttonBg: '#ffffff',
  buttonBorder: '#d2d5da',   // --global-color-neutral-gray-300
});
