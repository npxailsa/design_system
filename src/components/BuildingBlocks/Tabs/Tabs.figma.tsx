/**
 * Figma Code Connect — Tabs
 * Storybook path: "Foundation/BuildingBlocks/Tabs"
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
      examples: [AllSizes, TypeDefaultSmall, TypeDefaultDefault, TypeDefaultLarge],
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

/** All Sizes variant. */
export function AllSizes() {
  return <Tabs />;
}

/** Type Default Small variant. */
export function TypeDefaultSmall() {
  return <Tabs />;
}

/** Type Default Default variant. */
export function TypeDefaultDefault() {
  return <Tabs />;
}

/** Type Default Large variant. */
export function TypeDefaultLarge() {
  return <Tabs />;
}
