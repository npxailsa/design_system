/**
 * Figma Code Connect — ElementHeader
 * Storybook path: "Atoms/Layout/ElementHeader"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ElementHeader component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ElementHeader } from './ElementHeader';

export default {
  component: ElementHeader,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [AllSizes, SizeLarge, SizeDefault, SizeSmall],
      props: {
          size: figma.enum('Size', {
            'Sm': 'sm',
            'Default': 'default',
            'Lg': 'lg',
          }),
          title: figma.string('Title'),
          backLabel: figma.string('Back Label'),
          showBack: figma.boolean('Show Back'),
      },
    },
  },
};

/** All Sizes variant. */
export function AllSizes() {
  return <ElementHeader />;
}

/** Size Large variant. */
export function SizeLarge() {
  return <ElementHeader />;
}

/** Size Default variant. */
export function SizeDefault() {
  return <ElementHeader />;
}

/** Size Small variant. */
export function SizeSmall() {
  return <ElementHeader />;
}
