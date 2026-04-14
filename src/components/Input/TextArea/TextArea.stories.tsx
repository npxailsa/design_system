import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';
import TextAreaDocs from './TextAreaDocs';

/* ── Meta ────────────────────────────────────────────────────── */

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/Input/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Minimum height and typography scale',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Validation state — drives border and helper text colour',
    },
    resizable: {
      control: 'boolean',
      description: 'Show the custom resize grip at the bottom-right corner',
    },
    clearable:  { control: 'boolean' },
    disabled:   { control: 'boolean' },
    label:      { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    minRows:    { control: 'number' },
    maxRows:    { control: 'number' },
  },
  args: {
    label:       'Input name',
    placeholder: 'Placeholder text',
    size:        'default',
    state:       'default',
    clearable:   true,
    disabled:    false,
    minRows:     3,
    resizable:   true,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

/* ── Controlled wrapper ──────────────────────────────────────── */

const Controlled: React.FC<React.ComponentProps<typeof TextArea>> = (props) => {
  const [val, setVal] = useState(props.value ?? '');
  return (
    <TextArea
      {...props}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onClear={() => setVal('')}
    />
  );
};

/* ══════════════════════════════════════════════════════════════
   Stories — Documentation must be listed first
═══════════════════════════════════════════════════════════════ */

/**
 * Full documentation page for the TextArea component.
 */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TextAreaDocs />,
  parameters: {
    controls: { disable: true },
    actions:  { disable: true },
    layout:   'fullscreen',
  },
};

/**
 * Interactive playground — use the Controls panel to adjust every prop.
 */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Controlled {...args} />
    </div>
  ),
};

/**
 * Default — placeholder state, no value entered.
 */
export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <TextArea label="Input name" placeholder="Placeholder text" clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All three sizes: small, default, large.
 */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <Controlled label="Input name" placeholder="Placeholder text" size="small"   clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="default" clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="large"   clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Focused / typing — focused appearance with text value.
 */
export const Filled: Story = {
  name: 'Filled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <Controlled label="Input name" value="This is a filled input" size="small"   clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large"   clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Error state — red border, error helper text.
 */
export const Error: Story = {
  name: 'Error',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <Controlled label="Input name" value="This is a filled input" size="small"   state="error" helperText="This is an error associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="error" helperText="This is an error associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large"   state="error" helperText="This is an error associated with the input" clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Warning state — amber border, warning helper text.
 */
export const Warning: Story = {
  name: 'Warning',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <Controlled label="Input name" value="This is a filled input" size="small"   state="warning" helperText="This is a warning associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="warning" helperText="This is a warning associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large"   state="warning" helperText="This is a warning associated with the input" clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Success state — green border, success helper text.
 */
export const Success: Story = {
  name: 'Success',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <Controlled label="Input name" value="This is a filled input" size="small"   state="success" helperText="This is a success associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="success" helperText="This is a success associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large"   state="success" helperText="This is a success associated with the input" clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled — no pointer events, muted colours.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 400 }}>
      <TextArea label="Input name" placeholder="Placeholder text" size="small"   disabled />
      <TextArea label="Input name" placeholder="Placeholder text" size="default" disabled />
      <TextArea label="Input name" placeholder="Placeholder text" size="large"   disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full design matrix — all sizes × all states, matching the Figma design spec.
 */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes  = ['small', 'default', 'large'] as const;
    const states = [
      { state: 'default'  as const, helperText: undefined,                                      label: 'Default' },
      { state: 'error'    as const, helperText: 'This is an error associated with the input',   label: 'Error' },
      { state: 'warning'  as const, helperText: 'This is a warning associated with the input',  label: 'Warning' },
      { state: 'success'  as const, helperText: 'This is a success associated with the input',  label: 'Success' },
    ];

    const SECTION_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--global-color-neutral-gray-500)',
      marginBottom: 'var(--global-spacing-sizing-8px)',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)', maxWidth: 1100 }}>

        {/* Placeholder / Filled */}
        <div>
          <div style={SECTION_LABEL}>Placeholder → Filled (all sizes)</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div key={size} style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
                <div style={{ ...SECTION_LABEL, textTransform: 'none' }}>{size}</div>
                <TextArea label="Input name" placeholder="Placeholder text" size={size} clearable />
                <Controlled label="Input name" value="This is a filled input" size={size} clearable />
              </div>
            ))}
          </div>
        </div>

        {/* All states */}
        {states.filter((s) => s.state !== 'default').map(({ state, helperText, label }) => (
          <div key={state}>
            <div style={SECTION_LABEL}>{label} state</div>
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
              {sizes.map((size) => (
                <div key={size} style={{ flex: '1 1 200px' }}>
                  <Controlled
                    label="Input name"
                    value="This is a filled input"
                    size={size}
                    state={state}
                    helperText={helperText}
                    clearable
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Disabled */}
        <div>
          <div style={SECTION_LABEL}>Disabled</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div key={size} style={{ flex: '1 1 200px' }}>
                <TextArea label="Input name" placeholder="Placeholder text" size={size} disabled />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
