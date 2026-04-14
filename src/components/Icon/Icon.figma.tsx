/**
 * Figma Code Connect — Icon
 * Storybook path: "Foundation/Iconography"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Icon component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Icon } from './Icon';

export default {
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, Colors, Gallery],
      props: {
          color: figma.enum('Color', {
            'Inherit': 'inherit',
            'Primary': 'primary',
            'Secondary': 'secondary',
            'Error': 'error',
            'Info': 'info',
            'Success': 'success',
            'Warning': 'warning',
            'Action': 'action',
            'Disabled': 'disabled',
          }),
          size: figma.enum('Size', {
            '2xSmall': '2x-small',
            'XSmall': 'x-small',
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
            'XLarge': 'x-large',
            '2xLarge': '2x-large',
            'Inherit': 'inherit',
          }),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Icon />;
}

/** Sizes variant. */
export function Sizes() {
  return <Icon />;
}

/** Colors variant. */
export function Colors() {
  return <Icon />;
}

/** Gallery variant. */
export function Gallery() {
  return <Icon />;
}
