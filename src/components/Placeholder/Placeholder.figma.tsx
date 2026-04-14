/**
 * Figma Code Connect — Placeholder
 * Storybook path: "Foundation/Placeholder"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Placeholder component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Placeholder } from './Placeholder';

export default {
  component: Placeholder,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, Types, Alignments],
      props: {
          size: figma.enum('Size', {
            'Large': 'large',
            'Default': 'default',
            'Small': 'small',
            'XSmall': 'x-small',
          }),
          align: figma.enum('Align', {
            'Left': 'left',
            'Centre': 'centre',
            'Right': 'right',
          }),
          type: figma.enum('Type', {
            'Default': 'default',
            'Italic': 'italic',
            'TagsSelected': 'tags-selected',
            'Number': 'number',
          }),
          text: figma.string('Text'),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          showTrailingIcon2: figma.boolean('Show Trailing Icon2'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Placeholder />;
}

/** Sizes variant. */
export function Sizes() {
  return <Placeholder />;
}

/** Types variant. */
export function Types() {
  return <Placeholder />;
}

/** Alignments variant. */
export function Alignments() {
  return <Placeholder />;
}
