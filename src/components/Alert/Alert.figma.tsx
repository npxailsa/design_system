/**
 * Figma Code Connect — Alert
 * Storybook path: "Atoms/Alert"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Alert component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Alert } from './Alert';

export default {
  component: Alert,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, Colours, NoBorder],
      props: {
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
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
          border: figma.boolean('Border'),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          showSubtext: figma.boolean('Show Subtext'),
          title: figma.string('Title'),
          description: figma.string('Description'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Alert />;
}

/** Sizes variant. */
export function Sizes() {
  return <Alert />;
}

/** Colours variant. */
export function Colours() {
  return <Alert />;
}

/** No Border variant. */
export function NoBorder() {
  return <Alert />;
}
