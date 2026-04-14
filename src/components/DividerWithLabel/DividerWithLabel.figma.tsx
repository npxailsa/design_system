/**
 * Figma Code Connect — DividerWithLabel
 * Storybook path: "Atoms/DividerWithLabel"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the DividerWithLabel component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { DividerWithLabel } from './DividerWithLabel';

export default {
  component: DividerWithLabel,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [LabelPositionCenter, LabelPositionLeft, LabelPositionRight, AllPositions],
      props: {
          label: figma.string('Label'),
          labelPosition: figma.enum('Label Position', { /* add options */ }),
          labelSize: figma.enum('Label Size', { /* add options */ }),
          line: figma.enum('Line', { /* add options */ }),
          thickness: figma.enum('Thickness', { /* add options */ }),
          ariaLabel: figma.string('Aria Label'),
      },
    },
  },
};

/** Label Position Center variant. */
export function LabelPositionCenter() {
  return <DividerWithLabel />;
}

/** Label Position Left variant. */
export function LabelPositionLeft() {
  return <DividerWithLabel />;
}

/** Label Position Right variant. */
export function LabelPositionRight() {
  return <DividerWithLabel />;
}

/** All Positions variant. */
export function AllPositions() {
  return <DividerWithLabel />;
}
