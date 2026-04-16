import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { WarningButton } from './WarningButton';
import { WarningButtonDocs } from './WarningButtonDocs';

const meta: Meta<typeof WarningButton> = {
  title: 'Atoms/Buttons/StatusButton/WarningButton',
  component: WarningButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <WarningButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'ghost'],
      description: 'Visual style — solid (amber filled) or ghost (outline with hover fill)',
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
type Story = StoryObj<typeof WarningButton>;

/**
 * Full documentation — design specs, token table, and usage examples.
 */
export const Documentation: Story = {
  render: () => <WarningButtonDocs />,
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
export const Playground: Story = {
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

export const Default: Story = {
  name: 'Default',
  args: { label: 'Warning button', variant: 'solid', size: 'default' },
};

/**
 * Solid variant — amber filled (#F4A403) background, black text and icons.
 * Use as the primary CTA in warning-status CardContent cards.
 */
export const Solid: Story = {
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Ghost / alt variant — white background, orange border, dark-orange text.
 * Hover shifts the background to orange-light (#FEF4DA).
 * Use as the secondary CTA alongside the solid warning button.
 */
export const Ghost: Story = {
  args: {
    label: 'Warning button',
    variant: 'ghost',
    size: 'default',
  },
};

/**
 * Both variants side by side — as they appear in a warning CardContent ButtonGroup.
 */
export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <WarningButton variant="solid" label="Warning button" />
      <WarningButton variant="ghost" label="Warning button" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

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
            <WarningButton variant={variant} size="small" label="Warning button" />
            <WarningButton variant={variant} size="default" label="Warning button" />
            <WarningButton variant={variant} size="large" label="Warning button" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};

/**
 * Loading state — spinner replaces the leading icon, trailing icon is hidden.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}>
      <WarningButton variant="solid" size="small" label="Warning button" loading />
      <WarningButton variant="solid" size="default" label="Warning button" loading />
      <WarningButton variant="solid" size="large" label="Warning button" loading />
      <WarningButton variant="ghost" size="small" label="Warning button" loading />
      <WarningButton variant="ghost" size="default" label="Warning button" loading />
      <WarningButton variant="ghost" size="large" label="Warning button" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state — grey background, grey text, not interactive.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}>
      <WarningButton variant="solid" size="small" label="Label" disabled />
      <WarningButton variant="solid" size="default" label="Label" disabled />
      <WarningButton variant="solid" size="large" label="Label" disabled />
      <WarningButton variant="ghost" size="small" label="Label" disabled />
      <WarningButton variant="ghost" size="default" label="Label" disabled />
      <WarningButton variant="ghost" size="large" label="Label" disabled />
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
                <WarningButton variant={variant} size={size} label="Warning button" />
                <WarningButton variant={variant} size={size} label="Warning button" loading />
                <WarningButton variant={variant} size={size} label="Label" disabled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};
