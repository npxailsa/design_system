/**
 * Figma Code Connect — ButtonMenu
 * Storybook path: "Foundation/BuildingBlocks/Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ButtonMenu component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ButtonMenu } from './ButtonMenu';

export default {
  component: ButtonMenu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, WithLeadingIcons, WithTrailingIcons],
      props: {
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          fullWidth: figma.boolean('Full Width'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <ButtonMenu />;
}

/** Sizes variant. */
export function Sizes() {
  return <ButtonMenu />;
}

/** With Leading Icons variant. */
export function WithLeadingIcons() {
  return <ButtonMenu />;
}

/** With Trailing Icons variant. */
export function WithTrailingIcons() {
  return <ButtonMenu />;
}
