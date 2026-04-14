/**
 * Figma Code Connect — Button
 * Storybook path: "Atoms/Buttons/Primary Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Button component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Variants, Sizes, WithLeadingIcon],
      props: {
          variant: figma.enum('Variant', {
            'Filled': 'filled',
            'Outline': 'outline',
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
  return <Button />;
}

/** Variants variant. */
export function Variants() {
  return <Button />;
}

/** Sizes variant. */
export function Sizes() {
  return <Button />;
}

/** With Leading Icon variant. */
export function WithLeadingIcon() {
  return <Button />;
}
