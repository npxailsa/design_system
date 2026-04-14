/**
 * Figma Code Connect — ProgressDot
 * Storybook path: "Foundation/BuildingBlocks/Progress"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ProgressDot component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ProgressDot } from './ProgressDot';

export default {
  component: ProgressDot,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [StateInactive, StateActive, StateError, StatePending],
      props: {
          state: figma.enum('State', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          ariaLabel: figma.string('Aria Label'),
      },
    },
  },
};

/** State Inactive variant. */
export function StateInactive() {
  return <ProgressDot />;
}

/** State Active variant. */
export function StateActive() {
  return <ProgressDot />;
}

/** State Error variant. */
export function StateError() {
  return <ProgressDot />;
}

/** State Pending variant. */
export function StatePending() {
  return <ProgressDot />;
}
