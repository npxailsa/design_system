/**
 * Figma Code Connect — StepperLines
 * Storybook path: "Foundation/BuildingBlocks/StepperLines"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the StepperLines component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { StepperLines } from './StepperLines';

export default {
  component: StepperLines,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [TypeSolid, TypeDashed, TypeDotted, States],
      props: {
          type: figma.enum('Type', { /* add options */ }),
          stroke: figma.enum('Stroke', { /* add options */ }),
          state: figma.enum('State', { /* add options */ }),
          ariaLabel: figma.string('Aria Label'),
      },
    },
  },
};

/** Type Solid variant. */
export function TypeSolid() {
  return <StepperLines />;
}

/** Type Dashed variant. */
export function TypeDashed() {
  return <StepperLines />;
}

/** Type Dotted variant. */
export function TypeDotted() {
  return <StepperLines />;
}

/** States variant. */
export function States() {
  return <StepperLines />;
}
