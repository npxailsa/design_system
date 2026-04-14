/**
 * Figma Code Connect — SaveDraftButton
 * Storybook path: "Atoms/Buttons/Save Draft Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the SaveDraftButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { SaveDraftButton } from './SaveDraftButton';

export default {
  component: SaveDraftButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, AutoSaving, Saving, Saved],
      props: {
          status: figma.enum('Status', { /* add options */ }),
          label: figma.string('Label'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <SaveDraftButton />;
}

/** Auto Saving variant. */
export function AutoSaving() {
  return <SaveDraftButton />;
}

/** Saving variant. */
export function Saving() {
  return <SaveDraftButton />;
}

/** Saved variant. */
export function Saved() {
  return <SaveDraftButton />;
}
