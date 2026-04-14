import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TertiaryButton } from './TertiaryButton';
import { TertiaryButtonDocs } from './TertiaryButtonDocs';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

const meta: Meta<typeof TertiaryButton> = {
  title: 'Atoms/Buttons/Tertiary Button',
  component: TertiaryButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <TertiaryButtonDocs />,
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
type Story = StoryObj<typeof TertiaryButton>;

/**
 * Full documentation page for the Tertiary Button component.
 */
export const Documentation: Story = {
  render: () => <TertiaryButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/**
 * Default tertiary button — solid variant with label.
 */
export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default',
  },
};

/**
 * Both label variants side by side.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <TertiaryButton variant="solid" label="Solid" />
      <TertiaryButton variant="alt" label="Alt" />
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
      <TertiaryButton size="extra-small" label="Extra Small" />
      <TertiaryButton size="small" label="Small" />
      <TertiaryButton size="default" label="Default" />
      <TertiaryButton size="large" label="Large" />
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
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="extra-small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="large" />
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
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
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
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only — brighter yellow fill, 4px radius.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
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
      <TertiaryButton label="Loading…" loading size="small" />
      <TertiaryButton label="Loading…" loading />
      <TertiaryButton label="Loading…" loading size="large" />
      <TertiaryButton label="Loading…" variant="alt" loading />
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
      <TertiaryButton label="Disabled" disabled />
      <TertiaryButton label="Disabled" variant="alt" disabled />
      <TertiaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
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
              <TertiaryButton variant={variant} size={size} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
              <TertiaryButton variant={variant} size={size} label="Label" />
              <TertiaryButton size={size} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
              <TertiaryButton variant={variant} size={size} label="Disabled" disabled />
              <TertiaryButton variant={variant} size={size} label="Loading" loading />
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
