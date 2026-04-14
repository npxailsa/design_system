/**
 * Figma Code Connect — Toast
 * Storybook path: "Atoms/Toast"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Toast component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Toast } from './Toast';

export default {
  component: Toast,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Colours, Sizes, WithoutDescription],
      props: {
          colour: figma.enum('Colour', {
            'Default': 'default',
            'Warning': 'warning',
            'LightGray': 'light-gray',
            'Navy': 'navy',
            'Success': 'success',
            'Error': 'error',
            'Purple': 'purple',
            'White': 'white',
          }),
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          showSubtext: figma.boolean('Show Subtext'),
          visible: figma.boolean('Visible'),
          title: figma.string('Title'),
          description: figma.string('Description'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Toast />;
}

/** Colours variant. */
export function Colours() {
  return <Toast />;
}

/** Sizes variant. */
export function Sizes() {
  return <Toast />;
}

/** Without Description variant. */
export function WithoutDescription() {
  return <Toast />;
}
