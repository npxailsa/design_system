import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleField } from './SimpleField';
import SimpleFieldDocs from './SimpleFieldDocs';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

/* ── Meta ────────────────────────────────────────────────────── */

const meta: Meta<typeof SimpleField> = {
  title: 'Atoms/Input/SimpleField',
  component: SimpleField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Height / typography size of the field',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Validation state — drives border and helper text colour',
    },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    size: 'default',
    state: 'default',
    clearable: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SimpleField>;

/* ── Controlled wrapper ──────────────────────────────────────── */

const Controlled: React.FC<React.ComponentProps<typeof SimpleField>> = (props) => {
  const [val, setVal] = useState(props.value ?? '');
  return (
    <SimpleField
      {...props}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onClear={() => setVal('')}
    />
  );
};

/* ── Stories ─────────────────────────────────────────────────── */

/* 1 — Documentation (must be first) */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SimpleFieldDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

/* 2 — Playground */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Controlled {...args} leadingIcon={LockOutlinedIcon} />
    </div>
  ),
};

/* 3 — Sizes */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      <Controlled label="Input name" placeholder="Placeholder text" size="small" leadingIcon={LockOutlinedIcon} clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="default" leadingIcon={LockOutlinedIcon} clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="large" leadingIcon={LockOutlinedIcon} clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 4 — States */
export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', maxWidth: 360 }}>
      <Controlled label="Input name" placeholder="Placeholder text" leadingIcon={LockOutlinedIcon} clearable state="default" />
      <Controlled label="Input name" value="This is a filled input" leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />
      <Controlled label="Input name" value="This is a filled input" leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />
      <Controlled label="Input name" value="This is a filled input" leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />
      <SimpleField label="Input name" placeholder="Placeholder text" leadingIcon={LockOutlinedIcon} disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 5 — Error */
export const Error: Story = {
  name: 'Error',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      <Controlled label="Input name" value="This is a filled input" size="small" leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />
      <Controlled label="Input name" value="This is a filled input" size="default" leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />
      <Controlled label="Input name" value="This is a filled input" size="large" leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 6 — Warning */
export const Warning: Story = {
  name: 'Warning',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      <Controlled label="Input name" value="This is a filled input" size="small" leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />
      <Controlled label="Input name" value="This is a filled input" size="default" leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />
      <Controlled label="Input name" value="This is a filled input" size="large" leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 7 — Success */
export const Success: Story = {
  name: 'Success',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      <Controlled label="Input name" value="This is a filled input" size="small" leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />
      <Controlled label="Input name" value="This is a filled input" size="default" leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />
      <Controlled label="Input name" value="This is a filled input" size="large" leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 8 — Tag Input */
export const TagInput: Story = {
  name: 'Tag Input',
  render: () => {
    const TagDemo = ({ size }: { size: 'small' | 'default' | 'large' }) => {
      const [val, setVal] = useState('');
      const [tags, setTags] = useState([{ id: 1, label: 'Label →' }]);
      return (
        <SimpleField
          label="Input name"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          leadingIcon={StarOutlineIcon}
          size={size}
          tags={tags}
          onTagRemove={(id) => setTags((t) => t.filter((x) => x.id !== id))}
          clearable
          onClear={() => setVal('')}
        />
      );
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
        <TagDemo size="small" />
        <TagDemo size="default" />
        <TagDemo size="large" />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* 9 — Icons */
export const Icons: Story = {
  name: 'Icons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      <Controlled label="Search" placeholder="Search…" leadingIcon={SearchIcon} clearable />
      <Controlled label="Username" placeholder="Enter username" leadingIcon={PersonOutlinedIcon} clearable />
      <Controlled label="Password" placeholder="Enter password" leadingIcon={LockOutlinedIcon} type="password" />
      <Controlled label="Preview" placeholder="Enter value" leadingIcon={VisibilityOutlinedIcon} clearable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 10 — Full Design Matrix */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const states = [
      { state: 'default' as const, helperText: undefined },
      { state: 'error' as const, helperText: 'This is an error associated with the input' },
      { state: 'warning' as const, helperText: 'This is a warning associated with the input' },
      { state: 'success' as const, helperText: 'This is a success associated with this input' },
    ];

    const LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--global-color-neutral-gray-500)',
      marginBottom: 'var(--global-spacing-sizing-8px)',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)', maxWidth: 800 }}>
        {/* Placeholder / Focused / Filled */}
        <div>
          <div style={LABEL}>Default (placeholder, focused, filled)</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div key={size} style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
                <div style={{ ...LABEL, textTransform: 'none' }}>{size}</div>
                {/* Placeholder */}
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} clearable />
                {/* Filled */}
                <Controlled label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable />
              </div>
            ))}
          </div>
        </div>

        {/* Validation states */}
        <div>
          <div style={LABEL}>Validation States</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {states.filter((s) => s.state !== 'default').map(({ state, helperText }) => (
              <div key={state} style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
                <div style={{ ...LABEL, textTransform: 'none' }}>{state}</div>
                {sizes.map((size) => (
                  <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state={state} helperText={helperText} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Disabled */}
        <div>
          <div style={LABEL}>Disabled</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div key={size} style={{ flex: '1 1 200px' }}>
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} disabled />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
