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
  render: () => <ErrorButtonDocs />,
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
    label: 'Error button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

/**
 * Solid variant — filled red background, white text and icon.
 * Use as the primary CTA in error state components.
 */
export const Solid: Story = {
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Ghost / alt variant — white background, red border and text.
 * Use as the secondary CTA alongside the solid error button.
 */
export const Ghost: Story = {
  args: {
    label: 'Error button',
    variant: 'ghost',
    size: 'default',
  },
};

/**
 * Both variants side by side — as they appear in an error CardContent ButtonGroup.
 */
export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <ErrorButton variant="solid" label="Error button" />
      <ErrorButton variant="ghost" label="Error button" />
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

/**
 * Loading state — spinner replaces the leading icon.
 */
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
 * Disabled state — grey background, grey text, not interactive.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <ErrorButton variant="solid" size="small" label="Label" disabled />
      <ErrorButton variant="solid" size="default" label="Label" disabled />
      <ErrorButton variant="solid" size="large" label="Label" disabled />
      <ErrorButton variant="ghost" size="small" label="Label" disabled />
      <ErrorButton variant="ghost" size="default" label="Label" disabled />
      <ErrorButton variant="ghost" size="large" label="Label" disabled />
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
