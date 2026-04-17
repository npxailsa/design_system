import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Toggle } from './Toggle';
import { ToggleDocs } from './ToggleDocs';
import type { ToggleSize, ToggleVariant } from './Toggle';

const ALL_VARIANTS: ToggleVariant[] = ['primary', 'blue', 'dark', 'status'];
const ALL_SIZES: ToggleSize[] = ['large', 'default', 'small'];

const meta: Meta<typeof Toggle> = {
  title: 'Foundation/BuildingBlocks/Toggles',
  component: Toggle,
  parameters: {
    docs: { page: () => <ToggleDocs /> },
  },
  argTypes: {
    checked:       { control: 'boolean' },
    disabled:      { control: 'boolean' },
    size:          { control: 'select', options: ['small', 'default', 'large'] },
    variant:       { control: 'select', options: ALL_VARIANTS },
    label:         { control: 'text' },
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
  args: {
    checked:       false,
    disabled:      false,
    size:          'default',
    variant:       'primary',
    label:         'Toggle label',
    labelPosition: 'right',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/* ══════════════════════════════════════════════════════════════
   1. DOCUMENTATION
   ══════════════════════════════════════════════════════════════ */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ToggleDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, layout: 'fullscreen' },
};

/* ══════════════════════════════════════════════════════════════
   2. PLAYGROUND
   ══════════════════════════════════════════════════════════════ */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const Demo = () => {
      const [on, setOn] = useState(args.checked ?? false);
      return (
        <div style={{ padding: '40px 24px' }}>
          <Toggle {...args} checked={on} onChange={setOn} />
        </div>
      );
    };
    return <Demo />;
  },
};

/* ══════════════════════════════════════════════════════════════
   3. DEFAULT
   ══════════════════════════════════════════════════════════════ */
export const Default: Story = {
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return (
        <div style={{ padding: '40px 24px' }}>
          <Toggle checked={on} onChange={setOn} label="Toggle" />
        </div>
      );
    };
    return <Demo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   4. SIZES
   ══════════════════════════════════════════════════════════════ */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => {
    const SizesDemo = () => {
      const [vals, setVals] = useState<Record<ToggleSize, boolean>>({
        small: false, default: true, large: false,
      });
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '40px 24px' }}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--global-color-neutral-gray-500)',
                width: '60px',
                textTransform: 'capitalize',
              }}>
                {size}
              </span>
              <Toggle
                size={size}
                checked={vals[size]}
                onChange={(v) => setVals((p) => ({ ...p, [size]: v }))}
                label={`${size}`}
              />
            </div>
          ))}
        </div>
      );
    };
    return <SizesDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   5. STATUS — PRIMARY
   ══════════════════════════════════════════════════════════════ */
export const StatusPrimary: Story = {
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 24px' }}>
          <Toggle variant="primary" checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
          <Toggle variant="primary" checked={true} label="On (static)" />
          <Toggle variant="primary" checked={false} label="Off (static)" />
          <Toggle variant="primary" checked={true} disabled label="On — Disabled" />
          <Toggle variant="primary" checked={false} disabled label="Off — Disabled" />
        </div>
      );
    };
    return <Demo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   6. STATUS — ALL VARIANTS
   ══════════════════════════════════════════════════════════════ */
export const StatusAllVariants: Story = {
  name: 'Status — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '40px 24px' }}>
      {ALL_VARIANTS.map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '60px',
            textTransform: 'capitalize',
          }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={true} label="On" />
          <Toggle variant={variant} checked={false} label="Off" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   7. STATUS — DISABLED
   ══════════════════════════════════════════════════════════════ */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 24px' }}>
      {ALL_VARIANTS.map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '60px',
            textTransform: 'capitalize',
          }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={false} disabled label="Off" />
          <Toggle variant={variant} checked={true} disabled label="On" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   8. ALL INTERACTIVE STATES
   ══════════════════════════════════════════════════════════════ */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', padding: '40px 24px' }}>
      {ALL_VARIANTS.map((variant) => (
        <div key={variant}>
          <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'capitalize',
            marginBottom: '12px',
          }}>
            {variant}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Toggle variant={variant} checked={false} label="Off" />
            <Toggle variant={variant} checked={true} label="On" />
            <Toggle variant={variant} checked={false} disabled label="Off — Disabled" />
            <Toggle variant={variant} checked={true} disabled label="On — Disabled" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   9. FULL DESIGN MATRIX
   Matches the screenshot: rows = sizes (large→small),
   columns = variants (primary, blue, dark, status) + disabled,
   pairs of checked / unchecked per cell
   ══════════════════════════════════════════════════════════════ */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const VARIANT_LABELS: Record<ToggleVariant, string> = {
      primary: 'Primary',
      blue: 'Blue',
      dark: 'Dark',
      status: 'Status',
    };

    const labelStyle: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      fontWeight: 600,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'capitalize',
      textAlign: 'center',
    };

    const sizeLabel: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '11px',
      color: 'var(--global-color-neutral-gray-700)',
      textTransform: 'capitalize',
      display: 'flex',
      alignItems: 'center',
    };

    return (
      <div style={{ padding: '32px 24px', overflowX: 'auto' }}>
        {/* Grid: 6 rows × 6 cols (sizeLabel + 4 variants + 1 disabled) */}
        {/* For each size: 2 sub-rows (checked / unchecked) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '72px repeat(4, 96px) 96px',
          gap: '0 16px',
          alignItems: 'center',
        }}>
          {/* Header row */}
          <div />
          {ALL_VARIANTS.map((v) => (
            <div key={v} style={labelStyle}>{VARIANT_LABELS[v]}</div>
          ))}
          <div style={labelStyle}>Disabled</div>

          {/* Size rows */}
          {ALL_SIZES.map((size, si) => (
            <React.Fragment key={size}>
              {/* Checked row */}
              <div style={{ ...sizeLabel, paddingTop: si === 0 ? '20px' : '8px' }}>
                {si === 0 ? size : ''}
              </div>
              {ALL_VARIANTS.map((variant) => (
                <div key={`${size}-${variant}-on`} style={{ paddingTop: si === 0 ? '20px' : '8px', display: 'flex', justifyContent: 'center' }}>
                  <Toggle size={size} variant={variant} checked={true} />
                </div>
              ))}
              {/* Disabled checked */}
              <div style={{ paddingTop: si === 0 ? '20px' : '8px', display: 'flex', justifyContent: 'center' }}>
                <Toggle size={size} variant="primary" checked={true} disabled />
              </div>

              {/* Unchecked row */}
              <div style={{ paddingBottom: '16px', display: 'flex', alignItems: 'center', paddingTop: '4px' }}>
                {si !== 0 ? <span style={{ ...sizeLabel }}>{size}</span> : null}
              </div>
              {ALL_VARIANTS.map((variant) => (
                <div key={`${size}-${variant}-off`} style={{ paddingBottom: '16px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                  <Toggle size={size} variant={variant} checked={false} />
                </div>
              ))}
              {/* Disabled unchecked */}
              <div style={{ paddingBottom: '16px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                <Toggle size={size} variant="primary" checked={false} disabled />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
