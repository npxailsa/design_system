# Design System

NPX's white-label design system built with React, MUI, and Storybook.

## Live Links

- **[Design System Documentation (GitHub Pages)](https://npxailsa.github.io/design_system)**
- **[Storybook Components (Chromatic)](https://main--69b1afa12d84753b425f1721.chromatic.com)**

## Project Structure

This project uses Design Tokens to maintain consistency across the design system.

- **[Global Design Tokens](./tokens/global_design_tokens.json)**: Core values for colors, spacing, and typography.
- **[Brand Design Tokens](./tokens/brand_design_tokens.json)**: Brand-specific values like primary colors and typefaces.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run Storybook locally:

```bash
npm run dev
```

### Build

Generate documentation and build Storybook:

```bash
npm run build-storybook
```

### Deploy to GitHub Pages

```bash
npm run build-storybook:gh-pages
```
