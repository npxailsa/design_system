/**
 * Figma Code Connect — SplitButton
 * Storybook path: "Atoms/Buttons/Split Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the SplitButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { SplitButton } from './SplitButton';

export default {
  component: SplitButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, PrimaryFilled, PrimaryOutline, SecondarySolid],
      props: {
          buttonType: figma.enum('Button Type', {
            'Primary': 'primary',
            'Secondary': 'secondary',
            'Tertiary': 'tertiary',
            'Ghost': 'ghost',
          }),
          variant: figma.enum('Variant', {
            'Filled': 'filled',
            'Outline': 'outline',
            'Solid': 'solid',
            'Alt': 'alt',
            'Ghost': 'ghost',
            'Link': 'link',
          }),
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          label: figma.string('Label'),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          loading: figma.boolean('Loading'),
          disabled: figma.boolean('Disabled'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <SplitButton />;
}

/** Primary Filled variant. */
export function PrimaryFilled() {
  return <SplitButton />;
}

/** Primary Outline variant. */
export function PrimaryOutline() {
  return <SplitButton />;
}

/** Secondary Solid variant. */
export function SecondarySolid() {
  return <SplitButton />;
}
