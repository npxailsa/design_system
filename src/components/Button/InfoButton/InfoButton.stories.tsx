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
export const Playground: Story = {
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

/**
 * Solid variant — info-blue (#366F97) background, white text and icons.
 * Hover adds a 2×2px info-blue drop shadow; background stays unchanged.
 * Use as the primary CTA in info-status CardContent cards.
 */
export const Solid: Story = {
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Ghost / alt variant — white background, info-blue border and text.
 * Hover shifts background to info-blue-light (#F5FCFF) + info-blue drop shadow.
 * Use as the secondary CTA alongside the solid variant.
 */
export const Ghost: Story = {
  args: {
    label: 'Info button',
    variant: 'ghost',
    size: 'default',
  },
};

/**
 * Both variants side by side — as they appear in an info CardContent ButtonGroup.
 */
export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <InfoButton variant="solid" label="Info button" />
      <InfoButton variant="ghost" label="Info button" />
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

/**
 * Loading state — spinner replaces the leading icon, trailing icon hidden.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}>
      <InfoButton variant="solid" size="small" label="Info button" loading />
      <InfoButton variant="solid" size="default" label="Info button" loading />
      <InfoButton variant="solid" size="large" label="Info button" loading />
      <InfoButton variant="ghost" size="small" label="Info button" loading />
      <InfoButton variant="ghost" size="default" label="Info button" loading />
      <InfoButton variant="ghost" size="large" label="Info button" loading />
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
      <InfoButton variant="solid" size="small" label="Label" disabled />
      <InfoButton variant="solid" size="default" label="Label" disabled />
      <InfoButton variant="solid" size="large" label="Label" disabled />
      <InfoButton variant="ghost" size="small" label="Label" disabled />
      <InfoButton variant="ghost" size="default" label="Label" disabled />
      <InfoButton variant="ghost" size="large" label="Label" disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full state matrix — all combinations of variant × size × state.
 */
export const AllStates: Story = {
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
