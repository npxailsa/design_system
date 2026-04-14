/**
 * Figma Code Connect — StatusIndicator
 * Storybook path: "Foundation/BuildingBlocks/Status Indicator"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the StatusIndicator component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { StatusIndicator } from './StatusIndicator';

export default {
  component: StatusIndicator,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Online, Away, DoNotDisturb, Verified],
      props: {
          status: figma.enum('Status', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
      },
    },
  },
};

/** Online variant. */
export function Online() {
  return <StatusIndicator />;
}

/** Away variant. */
export function Away() {
  return <StatusIndicator />;
}

/** Do Not Disturb variant. */
export function DoNotDisturb() {
  return <StatusIndicator />;
}

/** Verified variant. */
export function Verified() {
  return <StatusIndicator />;
}
