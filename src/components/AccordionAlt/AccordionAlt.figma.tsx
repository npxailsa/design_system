/**
 * Figma Code Connect — AccordionAlt
 * Storybook path: "Atoms/Accordion (alt.)"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the AccordionAlt component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { AccordionAlt } from './AccordionAlt';

export default {
  component: AccordionAlt,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, DecorativeType, NumberedType, LabelType],
      props: {
          type: figma.enum('Type', {
            'Decorative': 'decorative',
            'Numbered': 'numbered',
            'Label': 'label',
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
          number: figma.string('Number'),
          label: figma.string('Label'),
          body: figma.string('Body'),
          showIcon: figma.boolean('Show Icon'),
          showNumber: figma.boolean('Show Number'),
          defaultOpen: figma.boolean('Default Open'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <AccordionAlt />;
}

/** Decorative Type variant. */
export function DecorativeType() {
  return <AccordionAlt />;
}

/** Numbered Type variant. */
export function NumberedType() {
  return <AccordionAlt />;
}

/** Label Type variant. */
export function LabelType() {
  return <AccordionAlt />;
}
