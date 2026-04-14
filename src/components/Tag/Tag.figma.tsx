/**
 * Figma Code Connect — Tag
 * Storybook path: "Foundation/Tag"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Tag component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Tag } from './Tag';

export default {
  component: Tag,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, ColourVariants, OutlineVariants, Sizes],
      props: {
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          colour: figma.enum('Colour', {
            'Default': 'default',
            'Blue': 'blue',
            'Seafoam': 'seafoam',
            'Yellow': 'yellow',
            'Dark': 'dark',
            'Navy': 'navy',
            'Red': 'red',
            'Green': 'green',
            'Purple': 'purple',
            'Info': 'info',
          }),
          variant: figma.enum('Variant', {
            'Filled': 'filled',
            'Outline': 'outline',
          }),
          leadingIcon: figma.enum('Leading Icon', {
            'None': 'None',
            'Person': 'Person',
            'Check': 'Check',
            'Star': 'Star',
            'Tag': 'Tag',
          }),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          trailingIcon: figma.enum('Trailing Icon', {
            'None': 'None',
            'Person': 'Person',
            'Check': 'Check',
            'Star': 'Star',
            'Tag': 'Tag',
          }),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          showRemove: figma.boolean('Show Remove'),
          showCount: figma.boolean('Show Count'),
          count: figma.string('Count'),
          selected: figma.boolean('Selected'),
          disabled: figma.boolean('Disabled'),
          label: figma.string('Label'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Tag />;
}

/** Colour Variants variant. */
export function ColourVariants() {
  return <Tag />;
}

/** Outline Variants variant. */
export function OutlineVariants() {
  return <Tag />;
}

/** Sizes variant. */
export function Sizes() {
  return <Tag />;
}
