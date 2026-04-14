/**
 * Figma Code Connect — ErrorButton
 * Storybook path: "Atoms/Buttons/StatusButton/ErrorButton"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ErrorButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ErrorButton } from './ErrorButton';

export default {
  component: ErrorButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Solid, Ghost, BothVariants, Sizes],
      props: {
          variant: figma.enum('Variant', {
            'Solid': 'solid',
            'Ghost': 'ghost',
          }),
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          label: figma.string('Label'),
          loading: figma.boolean('Loading'),
          disabled: figma.boolean('Disabled'),
          type: figma.enum('Type', {
            'Button': 'button',
            'Submit': 'submit',
            'Reset': 'reset',
          }),
      },
    },
  },
};

/** Solid variant. */
export function Solid() {
  return <ErrorButton />;
}

/** Ghost variant. */
export function Ghost() {
  return <ErrorButton />;
}

/** Both Variants variant. */
export function BothVariants() {
  return <ErrorButton />;
}

/** Sizes variant. */
export function Sizes() {
  return <ErrorButton />;
}
