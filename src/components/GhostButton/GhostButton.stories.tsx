import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { GhostButton } from './GhostButton';
import { GhostButtonDocs } from './GhostButtonDocs';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';

const meta: Meta<typeof GhostButton> = {
  title: 'Atoms/Ghost Button',
  component: GhostButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <GhostButtonDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    label: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Add', 'Download', 'Edit'],
      mapping: {
        None: undefined,
        Person: PersonIcon,
        Check: CheckIcon,
        Add: AddIcon,
        Download: DownloadIcon,
        Edit: EditIcon,
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
type Story = StoryObj<typeof GhostButton>;

/**
 * Full documentation page for the Ghost Button component.
 */
export const Documentation: Story = {
  render: () => <GhostButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

/**
 * Default ghost button with trailing icon.
 */
export const Default: Story = {
  args: {
    label: 'Label',
    size: 'default',
    showTrailingIcon: true,
    trailingIcon: ArrowForwardIcon,
  },
};

/**
 * All three sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default" label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * With a leading icon.
 */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * With a trailing icon only.
 */
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only ghost buttons — square, no label.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={AddIcon} ariaLabel="Add" />
      <GhostButton iconOnly leadingIcon={EditIcon} ariaLabel="Edit" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Loading state — spinner replaces the leading icon area.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Loading…" loading size="small" />
      <GhostButton label="Loading…" loading />
      <GhostButton label="Loading…" loading size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state — explicit gray colours per the Figma spec (no opacity reduction).
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Disabled" disabled />
      <GhostButton label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full state matrix across all sizes and configurations.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-24px)' }}>

      {/* Label + trailing icon — all sizes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
        <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Label + Trailing Icon
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
        </div>
      </div>

      {/* Leading + label + trailing — all sizes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
        <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Leading + Label + Trailing
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
        </div>
      </div>

      {/* Icon-only — all sizes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
        <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Icon Only
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
          <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
        </div>
      </div>

      {/* States — default size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
        <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          States
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
          <GhostButton label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          <GhostButton label="Loading" loading />
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
          <GhostButton iconOnly loading ariaLabel="Loading" />
        </div>
      </div>

    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};
