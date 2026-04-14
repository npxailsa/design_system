/**
 * Figma Code Connect — Breadcrumbs
 * Storybook path: "Atoms/Navigation/Breadcrumbs"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Breadcrumbs component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
  component: Breadcrumbs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, AllSizes, Small, Large],
      props: {
          size: figma.enum('Size', {
            'Sm': 'sm',
            'Default': 'default',
            'Lg': 'lg',
          }),
          ariaLabel: figma.string('Aria Label'),
          className: figma.string('Class Name'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Breadcrumbs />;
}

/** All Sizes variant. */
export function AllSizes() {
  return <Breadcrumbs />;
}

/** Small variant. */
export function Small() {
  return <Breadcrumbs />;
}

/** Large variant. */
export function Large() {
  return <Breadcrumbs />;
}
