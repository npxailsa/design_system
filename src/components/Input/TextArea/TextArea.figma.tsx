/**
 * Figma Code Connect — TextArea
 * Storybook path: "Atoms/Input/TextArea"
 *
 * SETUP: Replace the `url` with the real Figma component link:
 *   1. Open the NPX White-label Design System Figma file.
 *   2. Right-click the TextArea component → "Copy link to selection".
 *   3. Paste it as the `url` value below.
 *
 * PUBLISH: npm run figma:publish
 */
import figma from '@figma/code-connect';
import React from 'react';
import { TextArea } from './TextArea';

export default {
  component: TextArea,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME',
      examples: [Default, FilledDefault, ErrorState, WarningState, SuccessState],
      props: {
        label:       figma.string('Label'),
        placeholder: figma.string('Placeholder'),
        helperText:  figma.string('Helper Text'),
        clearable:   figma.boolean('Clearable'),
        disabled:    figma.boolean('Disabled'),
        size: figma.enum('Size', {
          Small:   'small',
          Default: 'default',
          Large:   'large',
        }),
        state: figma.enum('State', {
          Default: 'default',
          Error:   'error',
          Warning: 'warning',
          Success: 'success',
        }),
      },
    },
  },
};

/** Default placeholder state. */
export function Default() {
  return <TextArea label="Input name" placeholder="Placeholder text" clearable />;
}

/** Filled with a value. */
export function FilledDefault({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  return <TextArea label="Input name" value="This is a filled input" size={size} clearable />;
}

/** Error state with helper text. */
export function ErrorState({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  return (
    <TextArea
      label="Input name"
      value="This is a filled input"
      size={size}
      state="error"
      helperText="This is an error associated with the input"
      clearable
    />
  );
}

/** Warning state with helper text. */
export function WarningState({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  return (
    <TextArea
      label="Input name"
      value="This is a filled input"
      size={size}
      state="warning"
      helperText="This is a warning associated with the input"
      clearable
    />
  );
}

/** Success state with helper text. */
export function SuccessState({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  return (
    <TextArea
      label="Input name"
      value="This is a filled input"
      size={size}
      state="success"
      helperText="This is a success associated with the input"
      clearable
    />
  );
}
