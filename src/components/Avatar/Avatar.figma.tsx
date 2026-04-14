/**
 * Figma Code Connect — Avatar
 * Storybook path: "Atoms/Avatar"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Avatar component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [EmptyState, ProfilePhotoEmpty, ProfilePhotoWoman, ProfilePhotoMan],
      props: {
          type: figma.enum('Type', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          shape: figma.enum('Shape', { /* add options */ }),
          border: figma.boolean('Border'),
          statusIcon: figma.boolean('Status Icon'),
          initials: figma.string('Initials'),
          src: figma.string('Src'),
      },
    },
  },
};

/** Empty State variant. */
export function EmptyState() {
  return <Avatar />;
}

/** Profile Photo Empty variant. */
export function ProfilePhotoEmpty() {
  return <Avatar />;
}

/** Profile Photo Woman variant. */
export function ProfilePhotoWoman() {
  return <Avatar />;
}

/** Profile Photo Man variant. */
export function ProfilePhotoMan() {
  return <Avatar />;
}
