/**
 * Figma Code Connect — ButtonGroup
 * Storybook path: "Atoms/Buttons/Button Group"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ButtonGroup component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Primary, Secondary, Tertiary, Ghost],
      props: {
          variant: figma.enum('Variant', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          layout: figma.enum('Layout', { /* add options */ }),
          buttonType: figma.enum('Button Type', {
            'Icon': 'icon',
            'Label': 'label',
          }),
          special: figma.enum('Special', { /* add options */ }),
          disabled: figma.boolean('Disabled'),
          loading: figma.boolean('Loading'),
      },
    },
  },
};

/** Primary variant. */
export function Primary() {
  return <ButtonGroup />;
}

/** Secondary variant. */
export function Secondary() {
  return <ButtonGroup />;
}

/** Tertiary variant. */
export function Tertiary() {
  return <ButtonGroup />;
}

/** Ghost variant. */
export function Ghost() {
  return <ButtonGroup />;
}
