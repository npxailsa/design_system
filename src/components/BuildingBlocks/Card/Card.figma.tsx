/**
 * Figma Code Connect — Card
 * Storybook path: "Foundation/BuildingBlocks/Card"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Card component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Card } from './Card';

export default {
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Small, Large, WithShadow],
      props: {
          size: figma.enum('Size', { /* add options */ }),
          bg: figma.enum('Bg', { /* add options */ }),
          mode: figma.enum('Mode', { /* add options */ }),
          dropShadow: figma.boolean('Drop Shadow'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Card />;
}

/** Small variant. */
export function Small() {
  return <Card />;
}

/** Large variant. */
export function Large() {
  return <Card />;
}

/** With Shadow variant. */
export function WithShadow() {
  return <Card />;
}
