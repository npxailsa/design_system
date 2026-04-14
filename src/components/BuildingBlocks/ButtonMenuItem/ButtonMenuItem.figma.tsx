/**
 * Figma Code Connect — ButtonMenuItem
 * Storybook path: "Foundation/BuildingBlocks/Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ButtonMenuItem component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ButtonMenuItem } from './ButtonMenuItem';

export default {
  component: ButtonMenuItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [ButtonMenuItemDocumentation, ButtonMenuItemDefault, ButtonMenuItemPositions, ButtonMenuItemStates],
      props: {
          position: figma.enum('Position', {
            'Top': 'top',
            'Mid': 'mid',
            'Bottom': 'bottom',
            'Solo': 'solo',
          }),
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          selected: figma.boolean('Selected'),
          disabled: figma.boolean('Disabled'),
          label: figma.string('Label'),
      },
    },
  },
};

/** Button Menu Item Documentation variant. */
export function ButtonMenuItemDocumentation() {
  return <ButtonMenuItem />;
}

/** Button Menu Item Default variant. */
export function ButtonMenuItemDefault() {
  return <ButtonMenuItem />;
}

/** Button Menu Item Positions variant. */
export function ButtonMenuItemPositions() {
  return <ButtonMenuItem />;
}

/** Button Menu Item States variant. */
export function ButtonMenuItemStates() {
  return <ButtonMenuItem />;
}
