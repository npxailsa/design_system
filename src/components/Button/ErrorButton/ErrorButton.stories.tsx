import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ErrorButton } from './ErrorButton';
import { ErrorButtonDocs } from './ErrorButtonDocs';

const meta: Meta<typeof ErrorButton> = {
  title: 'Atoms/Buttons/StatusButton/ErrorButton',
  component: ErrorButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <ErrorButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'ghost'],
      description: 'Visual style — solid (filled red) or ghost (outline)',
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
type Story = StoryObj<typeof ErrorButton>;

/**
 * Full documentation — design specs, token table, and usage examples.
 */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ErrorButtonDocs />,
  parameters: { layout: 'fullscreen', controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

/**
 * Interactive playground — adjust all props via the Controls panel.
 */
export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Error button', variant: 'solid', size: 'default', loading: false, disabled: false },
};

export const Default: Story = {
  name: 'Default',
  args: { label: 'Error button', variant: 'solid', size: 'default' },
};

/**
 * All three sizes — small (34px), default (44px), large (56px).
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>
            {variant}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <ErrorButton variant={variant} size="small" label="Error button" />
            <ErrorButton variant={variant} size="default" label="Error button" />
            <ErrorButton variant={variant} size="large" label="Error button" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};

export const StatusSolid: Story = {
  name: 'Status / Solid',
  args: { label: 'Error button', variant: 'solid', size: 'default' },
};

export const StatusGhost: Story = {
  name: 'Status / Ghost',
  args: { label: 'Error button', variant: 'ghost', size: 'default' },
};

export const StatusLoading: Story = {
  name: 'Status / Loading',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px' }}>
      <ErrorButton variant="solid" label="Loading" loading />
      <ErrorButton variant="ghost" label="Loading" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px' }}>
      <ErrorButton variant="solid" label="Disabled" disabled />
      <ErrorButton variant="ghost" label="Disabled" disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      {[['Solid variant', <ErrorButton variant="solid" label="Label" />, '--btn-error-solid-bg / --btn-error-solid-color'], ['Ghost variant', <ErrorButton variant="ghost" label="Label" />, '--btn-error-ghost-border / --btn-error-ghost-color']].map(([lbl, el, tok]) => (
        <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)', color: 'var(--global-color-neutral-gray-600)' }}>{lbl as string}</span>
          {el as React.ReactElement}
          <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: 'var(--global-color-neutral-gray-500)' }}>{tok as string}</code>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      {(['Default', 'Loading', 'Disabled'] as const).map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <ErrorButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <ErrorButton variant="solid" size="small" label="Error button" loading />
      <ErrorButton variant="solid" size="default" label="Error button" loading />
      <ErrorButton variant="solid" size="large" label="Error button" loading />
      <ErrorButton variant="ghost" size="small" label="Error button" loading />
      <ErrorButton variant="ghost" size="default" label="Error button" loading />
      <ErrorButton variant="ghost" size="large" label="Error button" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full state matrix — all combinations of variant × size × state.
 */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (18 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '32px' }}>
      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 300, color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 16px', borderBottom: '1px solid var(--global-color-neutral-gray-200)', paddingBottom: '8px' }}>
            {variant}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', minWidth: '52px', textTransform: 'capitalize' }}>
                  {size}
                </span>
                <ErrorButton variant={variant} size={size} label="Error button" />
                <ErrorButton variant={variant} size={size} label="Error button" loading />
                <ErrorButton variant={variant} size={size} label="Label" disabled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};
