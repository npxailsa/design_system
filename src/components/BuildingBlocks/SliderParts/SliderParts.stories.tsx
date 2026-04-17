import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { SliderParts } from './SliderParts';
import { SliderPartsDocs } from './SliderPartsDocs';
import type { SliderPartsSize, SliderPartsVariant } from './SliderParts';

const meta: Meta<typeof SliderParts> = {
  title: 'Foundation/BuildingBlocks/SliderParts',
  component: SliderParts,
  parameters: {
    docs: { page: () => <SliderPartsDocs /> },
  },
  argTypes: {
    value:      { control: 'number' },
    min:        { control: 'number' },
    max:        { control: 'number' },
    size:       { control: 'select', options: ['small', 'default', 'large'] },
    variant:    { control: 'select', options: ['primary', 'dark'] },
    disabled:   { control: 'boolean' },
    showMarks:  { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  args: {
    value: 40, min: 0, max: 100, size: 'default', variant: 'primary',
    disabled: false, showMarks: true, showLabels: false,
  },
};

export default meta;
type Story = StoryObj<typeof SliderParts>;

/* ── 1. Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SliderPartsDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, layout: 'fullscreen' },
};

/* ── 2. Playground ── */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const Demo = () => {
      const [val, setVal] = useState(args.value as number ?? 40);
      return (
        <div style={{ padding: '40px 24px' }}>
          <SliderParts {...args} value={val} onChange={(v) => setVal(v as number)} />
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
      const [val, setVal] = useState(40);
      return (
        <div style={{ padding: '40px 24px', maxWidth: '320px' }}>
          <SliderParts value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />
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
    const SizeDemo = () => {
      const [vals, setVals] = useState<Record<SliderPartsSize, number>>({ small: 30, default: 50, large: 70 });
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '40px 24px' }}>
          {(['small', 'default', 'large'] as SliderPartsSize[]).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', width: '56px', textTransform: 'capitalize' }}>{size}</span>
              <div style={{ flex: 1, maxWidth: '280px' }}>
                <SliderParts size={size} value={vals[size]} onChange={(v) => setVals((p) => ({ ...p, [size]: v as number }))} min={0} max={100} />
              </div>
            </div>
          ))}
        </div>
      );
    };
    return <SizeDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ── 5. Status — Primary ── */
export const StatusPrimary: Story = {
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return (
        <div style={{ padding: '40px 24px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <SliderParts variant="primary" value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="primary" value={30} min={0} max={100} disabled />
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
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return (
        <div style={{ padding: '40px 24px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <SliderParts variant="dark" value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="dark" value={30} min={0} max={100} disabled />
        </div>
      );
    };
    return <Demo />;
  },
  parameters: { controls: { disable: true } },
};

/* ── 7. Status — Disabled ── */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px 24px', maxWidth: '360px' }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map((variant) => (
        <div key={variant}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '16px', textTransform: 'capitalize' }}>
            {variant} — Disabled
          </div>
          <SliderParts variant={variant} value={40} min={0} max={100} disabled />
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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 48px', padding: '40px 24px' }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map((variant) =>
        [false, true].map((disabled) => (
          <div key={`${variant}-${disabled}`}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '16px', textTransform: 'capitalize' }}>
              {variant}{disabled ? ' — Disabled' : ''}
            </div>
            <SliderParts variant={variant} value={55} min={0} max={100} disabled={disabled} />
          </div>
        ))
      )}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 9. Full Design Matrix ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes: SliderPartsSize[] = ['small', 'default', 'large'];
    const variants: SliderPartsVariant[] = ['primary', 'dark'];
    return (
      <div style={{ padding: '24px', overflowX: 'auto' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', textTransform: 'capitalize' }}>
              Variant: {variant}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 1fr', gap: '8px 32px', alignItems: 'center' }}>
              <div />
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)' }}>Active</div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)' }}>Disabled</div>
              {sizes.map((size) => (
                <React.Fragment key={size}>
                  <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize' }}>{size}</div>
                  <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} />
                  </div>
                  <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} disabled />
                  </div>
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
