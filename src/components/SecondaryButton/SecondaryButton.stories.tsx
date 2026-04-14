import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { SecondaryButton } from './SecondaryButton';
import { SecondaryButtonDocs } from './SecondaryButtonDocs';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

const meta: Meta<typeof SecondaryButton> = {
  title: 'Atoms/Buttons/Secondary Button',
  component: SecondaryButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <SecondaryButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'alt'],
    },
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
    },
    label: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Add', 'Download'],
      mapping: {
        None: undefined,
        Person: PersonIcon,
        Check: CheckIcon,
        Add: AddIcon,
        Download: DownloadIcon,
      },
    },
    showLeadingIcon: { control: 'boolean' },
    trailingIcon: {
      control: 'select',
      options: ['None', 'ArrowForward', 'Check', 'Add'],
      mapping: {
        None: undefined,
        ArrowForward: ArrowForwardIcon,
        Check: CheckIcon,
        Add: AddIcon,
      },
    },
    showTrailingIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

/**
 * Full documentation page for the Secondary Button component.
 */
export const Documentation: Story = {
  render: () => <SecondaryButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Default secondary button — solid variant with label.
 */
export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Both variants side by side.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton variant="solid" label="Solid" />
      <SecondaryButton variant="alt" label="Alt" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All four sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton size="extra-small" label="Extra Small" />
      <SecondaryButton size="small" label="Small" />
      <SecondaryButton size="default" label="Default" />
      <SecondaryButton size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with a leading icon.
 */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="extra-small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with a trailing icon.
 */
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with both leading and trailing icons.
 */
export const WithBothIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only buttons — square with 4px radius.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Loading state — spinner replaces the leading icon.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton label="Loading…" loading size="small" />
      <SecondaryButton label="Loading…" loading />
      <SecondaryButton label="Loading…" loading size="large" />
      <SecondaryButton label="Loading…" variant="alt" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <SecondaryButton label="Disabled" disabled />
      <SecondaryButton label="Disabled" variant="alt" disabled />
      <SecondaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full variant, size, and state matrix.
 */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (40 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      {(['solid', 'alt'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {variant}
          </span>
          {(['extra-small', 'small', 'default', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', width: 'var(--global-spacing-sizing-80px)' }}>
                {size}
              </span>
              <SecondaryButton variant={variant} size={size} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
              <SecondaryButton variant={variant} size={size} label="Label" />
              <SecondaryButton variant={variant} size={size} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
              <SecondaryButton variant={variant} size={size} label="Disabled" disabled />
              <SecondaryButton variant={variant} size={size} label="Loading" loading />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};
