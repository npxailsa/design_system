/**
 * Figma Code Connect — Divider
 * Storybook path: "Atoms/Divider"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Divider component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Divider } from './Divider';

export default {
  component: Divider,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [HorizontalSolid, HorizontalDashed, HorizontalDotted, HorizontalAllStyles],
      props: {
          line: figma.enum('Line', { /* add options */ }),
          thickness: figma.enum('Thickness', { /* add options */ }),
          alignment: figma.enum('Alignment', { /* add options */ }),
          ariaLabel: figma.string('Aria Label'),
      },
    },
  },
};

/** Horizontal Solid variant. */
export function HorizontalSolid() {
  return <Divider />;
}

/** Horizontal Dashed variant. */
export function HorizontalDashed() {
  return <Divider />;
}

/** Horizontal Dotted variant. */
export function HorizontalDotted() {
  return <Divider />;
}

/** Horizontal All Styles variant. */
export function HorizontalAllStyles() {
  return <Divider />;
}
