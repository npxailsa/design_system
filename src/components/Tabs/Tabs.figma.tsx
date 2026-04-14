/**
 * Figma Code Connect — Tabs
 * Storybook path: "Atoms/Tabs"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Tabs component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Tabs } from './Tabs';

export default {
  component: Tabs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [TypeDefault, TypeSecondary, TypeContained, TypeDarkContained],
      props: {
          type: figma.enum('Type', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          showBadge: figma.boolean('Show Badge'),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          activeId: figma.string('Active Id'),
      },
    },
  },
};

/** Type Default variant. */
export function TypeDefault() {
  return <Tabs />;
}

/** Type Secondary variant. */
export function TypeSecondary() {
  return <Tabs />;
}

/** Type Contained variant. */
export function TypeContained() {
  return <Tabs />;
}

/** Type Dark Contained variant. */
export function TypeDarkContained() {
  return <Tabs />;
}
