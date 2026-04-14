/**
 * Figma Code Connect — TertiaryButton
 * Storybook path: "Atoms/Buttons/Tertiary Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the TertiaryButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { TertiaryButton } from './TertiaryButton';

export default {
  component: TertiaryButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Variants, Sizes, WithLeadingIcon],
      props: {
          variant: figma.enum('Variant', {
            'Solid': 'solid',
            'Alt': 'alt',
          }),
          size: figma.enum('Size', {
            'ExtraSmall': 'extra-small',
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          label: figma.string('Label'),
          leadingIcon: figma.enum('Leading Icon', {
            'None': 'None',
            'Person': 'Person',
            'Check': 'Check',
            'Add': 'Add',
            'Download': 'Download',
          }),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          trailingIcon: figma.enum('Trailing Icon', {
            'None': 'None',
            'Arrowforward': 'ArrowForward',
            'Check': 'Check',
            'Add': 'Add',
          }),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          iconOnly: figma.boolean('Icon Only'),
          loading: figma.boolean('Loading'),
          disabled: figma.boolean('Disabled'),
          fullWidth: figma.boolean('Full Width'),
          type: figma.enum('Type', {
            'Button': 'button',
            'Submit': 'submit',
            'Reset': 'reset',
          }),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <TertiaryButton />;
}

/** Variants variant. */
export function Variants() {
  return <TertiaryButton />;
}

/** Sizes variant. */
export function Sizes() {
  return <TertiaryButton />;
}

/** With Leading Icon variant. */
export function WithLeadingIcon() {
  return <TertiaryButton />;
}
