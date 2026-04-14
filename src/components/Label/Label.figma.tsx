/**
 * Figma Code Connect — Label
 * Storybook path: "Foundation/Label"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the Label component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { Label } from './Label';

export default {
  component: Label,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, Sizes, Weights, Alignments],
      props: {
          size: figma.enum('Size', {
            'Large': 'large',
            'Default': 'default',
            'Small': 'small',
            'XSmall': 'x-small',
            '2xSmall': '2x-small',
          }),
          weight: figma.enum('Weight', {
            'Bold': 'bold',
            'Medium': 'medium',
            'Light': 'light',
            'Thin': 'thin',
          }),
          font: figma.enum('Font', {
            'Primary': 'primary',
            'Secondary': 'secondary',
          }),
          align: figma.enum('Align', {
            'Left': 'left',
            'Centre': 'centre',
            'Right': 'right',
          }),
          leadingIcon: figma.enum('Leading Icon', {
            'Person': 'Person',
            'Mail': 'Mail',
            'Settings': 'Settings',
            'None': 'None',
          }),
          showLeadingIcon: figma.boolean('Show Leading Icon'),
          showTrailingIcon: figma.boolean('Show Trailing Icon'),
          dropdown: figma.boolean('Dropdown'),
          showSplit: figma.boolean('Show Split'),
      },
    },
  },
};

/** Default variant. */
export function Default() {
  return <Label />;
}

/** Sizes variant. */
export function Sizes() {
  return <Label />;
}

/** Weights variant. */
export function Weights() {
  return <Label />;
}

/** Alignments variant. */
export function Alignments() {
  return <Label />;
}
