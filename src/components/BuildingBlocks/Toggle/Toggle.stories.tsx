import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Toggle } from './Toggle';
import { ToggleDocs } from './ToggleDocs';
import type { ToggleSize, ToggleVariant } from './Toggle';

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
    variant:       { control: 'select', options: ['primary', 'dark'] },
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

/* ── 1. Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ToggleDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, layout: 'fullscreen' },
};

/* ── 2. Playground ── */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const Demo = () => {
      const [on, setOn] = useState(args.checked ?? false);
      return (
        <div style={{ padding: '24px' }}>
          <Toggle {...args} checked={on} onChange={setOn} />
        </div>
      );
    };
    return <Demo />;
  },
};

/* ── 3. Default ── */
export const Default: Story = {
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return (
        <div style={{ padding: '24px' }}>
          <Toggle checked={on} onChange={setOn} label="Toggle" />
        </div>
      );
    };
    return <Demo />;
  },
  parameters: { controls: { disable: true } },
};

/* ── 4. Sizes ── */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => {
    const SizesDemo = () => {
      const [vals, setVals] = useState<Record<ToggleSize, boolean>>({ small: false, default: true, large: false });
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px' }}>
          {(['small', 'default', 'large'] as ToggleSize[]).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', width: '56px', textTransform: 'capitalize' }}>{size}</span>
              <Toggle size={size} checked={vals[size]} onChange={(v) => setVals((p) => ({ ...p, [size]: v }))} label={`${size} size`} />
            </div>
          ))}
        </div>
      );
    };
    return <SizesDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ── 5. Status — Primary ── */
export const StatusPrimary: Story = {
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
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

/* ── 6. Status — Dark ── */
export const StatusDark: Story = {
  name: 'Status — Dark',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Toggle variant="dark" checked={true} label="On — Dark" />
      <Toggle variant="dark" checked={false} label="Off — Dark" />
      <Toggle variant="dark" checked={true} disabled label="On — Dark Disabled" />
      <Toggle variant="dark" checked={false} disabled label="Off — Dark Disabled" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 7. Status — Disabled ── */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {(['primary', 'dark'] as ToggleVariant[]).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: '24px' }}>
          <Toggle variant={variant} checked={false} disabled label={`${variant} — off disabled`} />
          <Toggle variant={variant} checked={true} disabled label={`${variant} — on disabled`} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 8. All Interactive States ── */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '24px' }}>
      {(['primary', 'dark'] as ToggleVariant[]).map((variant) => (
        <div key={variant}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '12px' }}>
            Variant: {variant}
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

/* ── 9. Full Design Matrix ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes: ToggleSize[] = ['small', 'default', 'large'];
    const variants: ToggleVariant[] = ['primary', 'dark'];
    const states: Array<{ label: string; checked: boolean; disabled?: boolean }> = [
      { label: 'Off', checked: false },
      { label: 'On', checked: true },
      { label: 'Off — Disabled', checked: false, disabled: true },
      { label: 'On — Disabled', checked: true, disabled: true },
    ];
    return (
      <div style={{ padding: '24px', overflowX: 'auto' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', textTransform: 'capitalize' }}>
              Variant: {variant}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `80px repeat(${states.length}, 1fr)`, gap: '8px', alignItems: 'center' }}>
              <div />
              {states.map((s) => (
                <div key={s.label} style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)' }}>{s.label}</div>
              ))}
              {sizes.map((size) => (
                <React.Fragment key={size}>
                  <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize' }}>{size}</div>
                  {states.map((s) => (
                    <Toggle key={s.label} size={size} variant={variant} checked={s.checked} disabled={s.disabled} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
