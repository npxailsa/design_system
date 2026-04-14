/**
 * Figma Code Connect — StepperSteps
 * Storybook path: "Foundation/BuildingBlocks/StepperSteps"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the StepperSteps component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { StepperSteps } from './StepperSteps';

export default {
  component: StepperSteps,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [AllSizes, StateDefault, StateActive, StateComplete],
      props: {
          size: figma.enum('Size', { /* add options */ }),
          showLabel: figma.boolean('Show Label'),
      },
    },
  },
};

/** All Sizes variant. */
export function AllSizes() {
  return <StepperSteps />;
}

/** State Default variant. */
export function StateDefault() {
  return <StepperSteps />;
}

/** State Active variant. */
export function StateActive() {
  return <StepperSteps />;
}

/** State Complete variant. */
export function StateComplete() {
  return <StepperSteps />;
}
