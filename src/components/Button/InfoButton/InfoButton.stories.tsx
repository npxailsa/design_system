import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { InfoButton } from './InfoButton';
import { InfoButtonDocs } from './InfoButtonDocs';

const meta: Meta<typeof InfoButton> = {
  title: 'Atoms/Buttons/StatusButton/InfoButton',
  component: InfoButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <InfoButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'ghost'],
      description: 'Visual style — solid (info-blue fill) or ghost (outline with info-blue-light hover)',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    label: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoButton>;

/**
 * Full documentation — design specs, token table, anatomy and usage examples.
 */
export const Documentation: Story = {
  render: () => <InfoButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Interactive playground — adjust all props via the Controls panel.
 */
export const Playground: Story = { name: 'Playground', args: { label: 'Info button', variant: 'solid', size: 'default', loading: false, disabled: false } };

export const Default: Story = { name: 'Default', args: { label: 'Info button', variant: 'solid', size: 'default' } };

/**
 * All three sizes — small (34px), default (44px), large (56px).
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-400)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 10px',
            }}
          >
            {variant}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <InfoButton variant={variant} size="small" label="Info button" />
            <InfoButton variant={variant} size="default" label="Info button" />
            <InfoButton variant={variant} size="large" label="Info button" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};

export const StatusSolid: Story = { name: 'Status / Solid', args: { label: 'Info button', variant: 'solid', size: 'default' } };
export const StatusGhost: Story = { name: 'Status / Ghost', args: { label: 'Info button', variant: 'ghost', size: 'default' } };
export const StatusLoading: Story = { name: 'Status / Loading', render: () => <div style={{ display: 'flex', gap: '12px', padding: '16px' }}><InfoButton variant="solid" label="Loading" loading /><InfoButton variant="ghost" label="Loading" loading /></div>, parameters: { controls: { disable: true } } };
export const StatusDisabled: Story = { name: 'Status / Disabled', render: () => <div style={{ display: 'flex', gap: '12px', padding: '16px' }}><InfoButton variant="solid" label="Disabled" disabled /><InfoButton variant="ghost" label="Disabled" disabled /></div>, parameters: { controls: { disable: true } } };
export const ComponentBreakdown: Story = { name: 'Component Breakdown', render: () => <div style={{ display: 'flex', gap: '16px', padding: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}><span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)' }}>Solid</span><InfoButton variant="solid" label="Info button" /><code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>--btn-info-solid-bg</code></div><div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}><span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)' }}>Ghost</span><InfoButton variant="ghost" label="Info button" /><code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>--btn-info-ghost-border</code></div></div>, parameters: { controls: { disable: true } } };
export const AllInteractiveStates: Story = { name: 'All Interactive States', render: () => <div style={{ display: 'flex', gap: '12px', padding: '24px' }}>{(['Default', 'Loading', 'Disabled'] as const).map(s => <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><InfoButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} /><span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span></div>)}</div>, parameters: { controls: { disable: true } } };

/**
 * Full state matrix — all combinations of variant × size × state.
 */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (18 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px' }}>
      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--global-color-neutral-gray-500)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 16px',
              borderBottom: '1px solid var(--global-color-neutral-gray-200)',
              paddingBottom: '8px',
            }}
          >
            {variant}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div
                key={size}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: '11px',
                    color: 'var(--global-color-neutral-gray-400)',
                    minWidth: '52px',
                    textTransform: 'capitalize',
                  }}
                >
                  {size}
                </span>
                <InfoButton variant={variant} size={size} label="Info button" />
                <InfoButton variant={variant} size={size} label="Info button" loading />
                <InfoButton variant={variant} size={size} label="Label" disabled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};
