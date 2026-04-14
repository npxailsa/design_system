/**
 * Figma Code Connect — Stepper
 * Storybook path: "Atoms/Stepper"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Stepper component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Stepper } from './Stepper';

export default {
  component: Stepper,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [States, Sizes, StepCounts, LineTypes],
      props: {
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          showLabel: figma.boolean('Show Label'),
          lineType: figma.enum('Line Type', {
            'Solid': 'solid',
            'Dashed': 'dashed',
            'Dotted': 'dotted',
          }),
          lineStroke: figma.enum('Line Stroke', {
            '1Px': '1-px',
            '2Px': '2-px',
            '3Px': '3-px',
          }),
      },
    },
  },
};

/** States variant. */
export function States() {
  return <Stepper />;
}

/** Sizes variant. */
export function Sizes() {
  return <Stepper />;
}

/** Step Counts variant. */
export function StepCounts() {
  return <Stepper />;
}

/** Line Types variant. */
export function LineTypes() {
  return <Stepper />;
}
