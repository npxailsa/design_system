/**
 * Figma Code Connect — GhostButton
 * Storybook path: "Atoms/Buttons/Ghost Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the GhostButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { GhostButton } from './GhostButton';

export default {
  component: GhostButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, WithLeadingIcon, WithTrailingIcon],
      props: {
          variant: figma.enum('Variant', {
            'Ghost': 'ghost',
            'Link': 'link',
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
            'Edit': 'Edit',
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
          borderless: figma.boolean('Borderless'),
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
  return <GhostButton />;
}

/** Sizes variant. */
export function Sizes() {
  return <GhostButton />;
}

/** With Leading Icon variant. */
export function WithLeadingIcon() {
  return <GhostButton />;
}

/** With Trailing Icon variant. */
export function WithTrailingIcon() {
  return <GhostButton />;
}
