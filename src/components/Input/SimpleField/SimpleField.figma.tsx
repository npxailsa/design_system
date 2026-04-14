/**
 * Figma Code Connect — SimpleField
 * Storybook path: "Atoms/Input/SimpleField"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the SimpleField component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { SimpleField } from './SimpleField';

export default {
  component: SimpleField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Sizes, States, Error, Warning],
      props: {
          size: figma.enum('Size', {
            'ExtraSmall': 'extra-small',
            'Small': 'small',
            'Default': 'default',
            'Large': 'large',
          }),
          state: figma.enum('State', {
            'Default': 'default',
            'Error': 'error',
            'Warning': 'warning',
            'Success': 'success',
          }),
          clearable: figma.boolean('Clearable'),
          disabled: figma.boolean('Disabled'),
          label: figma.string('Label'),
          placeholder: figma.string('Placeholder'),
          helperText: figma.string('Helper Text'),
      },
    },
  },
};

/** Sizes variant. */
export function Sizes() {
  return <SimpleField />;
}

/** States variant. */
export function States() {
  return <SimpleField />;
}

/** Error variant. */
export function Error() {
  return <SimpleField />;
}

/** Warning variant. */
export function Warning() {
  return <SimpleField />;
}
