/**
 * Figma Code Connect — FilterSortButton
 * Storybook path: "Atoms/Buttons/Sort & Filter Button"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the FilterSortButton component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { FilterSortButton } from './FilterSortButton';

export default {
  component: FilterSortButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Primary, Secondary, Tertiary, Ghost],
      props: {
          variant: figma.enum('Variant', { /* add options */ }),
          size: figma.enum('Size', { /* add options */ }),
          label: figma.string('Label'),
          disabled: figma.boolean('Disabled'),
      },
    },
  },
};

/** Primary variant. */
export function Primary() {
  return <FilterSortButton />;
}

/** Secondary variant. */
export function Secondary() {
  return <FilterSortButton />;
}

/** Tertiary variant. */
export function Tertiary() {
  return <FilterSortButton />;
}

/** Ghost variant. */
export function Ghost() {
  return <FilterSortButton />;
}
