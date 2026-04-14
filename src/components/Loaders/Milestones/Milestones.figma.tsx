/**
 * Figma Code Connect — Milestones
 * Storybook path: "Atoms/Loaders/Milestones"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Milestones component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Milestones } from './Milestones';

export default {
  component: Milestones,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [SizeSmall, SizeDefault, SizeLarge, AllSizes],
      props: {
          size: figma.enum('Size', { /* add options */ }),
          showLabel: figma.boolean('Show Label'),
          ariaLabel: figma.string('Aria Label'),
      },
    },
  },
};

/** Size Small variant. */
export function SizeSmall() {
  return <Milestones />;
}

/** Size Default variant. */
export function SizeDefault() {
  return <Milestones />;
}

/** Size Large variant. */
export function SizeLarge() {
  return <Milestones />;
}

/** All Sizes variant. */
export function AllSizes() {
  return <Milestones />;
}
