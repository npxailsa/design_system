/**
 * Figma Code Connect — AutoSaveTagButton
 * Storybook path: "Atoms/Buttons/Auto-Save Tag Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the AutoSaveTagButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { AutoSaveTagButton } from './AutoSaveTagButton';

export default {
  component: AutoSaveTagButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, AutoSaving, Saving, Saved],
      props: {
          status: figma.enum('Status', { /* add options */ }),
          label: figma.string('Label'),
          timestamp: figma.string('Timestamp'),
          showTag: figma.boolean('Show Tag'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <AutoSaveTagButton />;
}

/** Auto Saving variant. */
export function AutoSaving() {
  return <AutoSaveTagButton />;
}

/** Saving variant. */
export function Saving() {
  return <AutoSaveTagButton />;
}

/** Saved variant. */
export function Saved() {
  return <AutoSaveTagButton />;
}
