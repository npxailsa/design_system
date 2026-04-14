/**
 * Figma Code Connect — Accordion
 * Storybook path: "Atoms/Accordion"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Accordion component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Accordion } from './Accordion';

export default {
  component: Accordion,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, OpenState, SimpleType, NoStrokeType],
      props: {
          type: figma.enum('Type', {
            'Simple': 'simple',
            'NoStroke': 'no-stroke',
          }),
          size: figma.enum('Size', {
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          openIcon: figma.enum('Open Icon', {
            'Chevron': 'chevron',
            'Plus': 'plus',
          }),
          title: figma.string('Title'),
          description: figma.string('Description'),
          body: figma.string('Body'),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showStatusIcon: figma.boolean('Show Status Icon'),
          showDescription: figma.boolean('Show Description'),
          defaultOpen: figma.boolean('Default Open'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Accordion />;
}

/** Open State variant. */
export function OpenState() {
  return <Accordion />;
}

/** Simple Type variant. */
export function SimpleType() {
  return <Accordion />;
}

/** No Stroke Type variant. */
export function NoStrokeType() {
  return <Accordion />;
}
