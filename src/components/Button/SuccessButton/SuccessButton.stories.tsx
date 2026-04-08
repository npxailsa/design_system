import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { SuccessButton } from './SuccessButton';
import { SuccessButtonDocs } from './SuccessButtonDocs';

const meta: Meta<typeof SuccessButton> = {
  title: 'Atoms/Buttons/StatusButton/SuccessButton',
  component: SuccessButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <SuccessButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'ghost'],
      description:
        'Visual style — solid (light-green fill; hover inverts to dark-green) or ghost (outline with green-light hover bg)',
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
type Story = StoryObj<typeof SuccessButton>;

/**
 * Full documentation — design specs, token table, interaction notes, and usage examples.
 */
export const Documentation: Story = {
  render: () => <SuccessButtonDocs />,
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
    label: 'Success button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

/**
 * Solid variant — light-green (#96F78D) background, black text.
 * Hover inverts the background to dark-green (#227F1A) and switches text to white.
 * Use as the primary CTA in success-status CardContent cards.
 */
export const Solid: Story = {
  args: {
    label: 'Success button',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Ghost / alt variant — white background, dark-green border and text.
 * Hover shifts background to green-light (#F2FFF1) + dark-green drop shadow.
 * Focus uses a distinctive 3px border (per Figma spec).
 */
export const Ghost: Story = {
  args: {
    label: 'Success button',
    variant: 'ghost',
    size: 'default',
  },
};

/**
 * Both variants side by side — as they appear in a success CardContent ButtonGroup.
 */
export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '16px' }}>
      <SuccessButton variant="solid" label="Success button" />
      <SuccessButton variant="ghost" label="Success button" />
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
            <SuccessButton variant={variant} size="small" label="Success button" />
            <SuccessButton variant={variant} size="default" label="Success button" />
            <SuccessButton variant={variant} size="large" label="Success button" />
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
    <div
      style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}
    >
      <SuccessButton variant="solid" size="small" label="Success button" loading />
      <SuccessButton variant="solid" size="default" label="Success button" loading />
      <SuccessButton variant="solid" size="large" label="Success button" loading />
      <SuccessButton variant="ghost" size="small" label="Success button" loading />
      <SuccessButton variant="ghost" size="default" label="Success button" loading />
      <SuccessButton variant="ghost" size="large" label="Success button" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state — grey background, grey text, not interactive.
 */
export const Disabled: Story = {
  render: () => (
    <div
      style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}
    >
      <SuccessButton variant="solid" size="small" label="Label" disabled />
      <SuccessButton variant="solid" size="default" label="Label" disabled />
      <SuccessButton variant="solid" size="large" label="Label" disabled />
      <SuccessButton variant="ghost" size="small" label="Label" disabled />
      <SuccessButton variant="ghost" size="default" label="Label" disabled />
      <SuccessButton variant="ghost" size="large" label="Label" disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full state matrix — all combinations of variant × size × state.
 * Hover over the solid buttons to see the unique dark-green colour inversion.
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
                <SuccessButton variant={variant} size={size} label="Success button" />
                <SuccessButton variant={variant} size={size} label="Success button" loading />
                <SuccessButton variant={variant} size={size} label="Label" disabled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};
