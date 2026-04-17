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
   Mirrors the Figma screenshot exactly:
     Rows  (top→bottom): large ON, large OFF, default ON, default OFF,
                         small ON, small OFF
     Cols  (left→right): primary, blue, dark, status, disabled
   ══════════════════════════════════════════════════════════════ */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const COL_LABELS = ['Primary', 'Blue', 'Dark', 'Status', 'Disabled'];

    const headerCell: React.CSSProperties = {
      fontFamily:    'var(--brand-font-primary)',
      fontSize:      '10px',
      fontWeight:    700,
      color:         'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      textAlign:     'center',
      padding:       '0 4px 8px',
    };

    const rowLabel: React.CSSProperties = {
      fontFamily:    'var(--brand-font-primary)',
      fontSize:      '10px',
      color:         'var(--global-color-neutral-gray-400)',
      textAlign:     'right',
      paddingRight:  '12px',
      whiteSpace:    'nowrap',
    };

    const cell: React.CSSProperties = {
      /* Generous padding so the track's 2px outer box-shadow border
         is fully visible and never clipped by the table cell. */
      padding:  '14px 16px',
      overflow: 'visible',
    };

    const cellInner: React.CSSProperties = {
      display:        'flex',
      justifyContent: 'center',
      alignItems:     'center',
      overflow:       'visible',
    };

    // 6 data rows: [size, checked]
    const rows: Array<[ToggleSize, boolean]> = [
      ['large',   true],
      ['large',   false],
      ['default', true],
      ['default', false],
      ['small',   true],
      ['small',   false],
    ];

    return (
      <div style={{ padding: '40px 32px', overflowX: 'auto', overflowY: 'visible' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: '4px' }}>
          <thead>
            <tr>
              {/* empty corner */}
              <th style={{ width: '80px' }} />
              {COL_LABELS.map((l) => (
                <th key={l} style={headerCell}>{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([size, checked]) => (
              <tr key={`${size}-${checked ? 'on' : 'off'}`}>
                <td style={rowLabel}>
                  {size}&nbsp;<span style={{ opacity: 0.6 }}>{checked ? '✓' : '✕'}</span>
                </td>
                {/* primary */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} />
                  </div>
                </td>
                {/* blue */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="blue" checked={checked} />
                  </div>
                </td>
                {/* dark */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="dark" checked={checked} />
                  </div>
                </td>
                {/* status */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="status" checked={checked} />
                  </div>
                </td>
                {/* disabled */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} disabled />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
