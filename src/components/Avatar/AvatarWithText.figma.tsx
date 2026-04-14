/**
 * Figma Code Connect — AvatarWithText
 * Storybook path: "Atoms/AvatarWithText"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the AvatarWithText component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { AvatarWithText } from './AvatarWithText';

export default {
  component: AvatarWithText,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [NameOnly, WithSubtext, WithEmail, AllSizesWithSubtext],
      props: {
          variant: figma.enum('Variant', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          shape: figma.enum('Shape', { /* add options */ }),
          avatarType: figma.enum('Avatar Type', { /* add options */ }),
          statusIcon: figma.boolean('Status Icon'),
          border: figma.boolean('Border'),
          name: figma.string('Name'),
          subtext: figma.string('Subtext'),
          email: figma.string('Email'),
          initials: figma.string('Initials'),
          src: figma.string('Src'),
      },
    },
  },
};

/** Name Only variant. */
export function NameOnly() {
  return <AvatarWithText />;
}

/** With Subtext variant. */
export function WithSubtext() {
  return <AvatarWithText />;
}

/** With Email variant. */
export function WithEmail() {
  return <AvatarWithText />;
}

/** All Sizes With Subtext variant. */
export function AllSizesWithSubtext() {
  return <AvatarWithText />;
}
