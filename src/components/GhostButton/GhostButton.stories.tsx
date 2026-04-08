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
  title: 'Atoms/Buttons/Ghost Button',
  component: GhostButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <GhostButtonDocs />,
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['ghost', 'link'] },
    size: { control: 'select', options: ['extra-small', 'small', 'default', 'large'] },
    label: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Add', 'Download', 'Edit'],
      mapping: { None: undefined, Person: PersonIcon, Check: CheckIcon, Add: AddIcon, Download: DownloadIcon, Edit: EditIcon },
    },
    showLeadingIcon: { control: 'boolean' },
    trailingIcon: {
      control: 'select',
      options: ['None', 'ArrowForward', 'Check', 'Add'],
      mapping: { None: undefined, ArrowForward: ArrowForwardIcon, Check: CheckIcon, Add: AddIcon },
    },
    showTrailingIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    borderless: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
};

export default meta;
type Story = StoryObj<typeof GhostButton>;

/* ─────────────────────────── DOCUMENTATION ─────────────────────────── */

export const Documentation: Story = {
  render: () => <GhostButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ─────────────────────────── GHOST VARIANT ─────────────────────────── */

/**
 * Default ghost button — bordered, light blue-50 background, with leading + trailing icons.
 * Matches the Figma `special=alt` default state.
 */
export const Default: Story = {
  args: {
    variant: 'ghost',
    label: 'Label',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: true,
    trailingIcon: ArrowForwardIcon,
  },
};

/**
 * All four sizes of the ghost variant, with trailing icon.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
      <GhostButton size="extra-small" label="XSmall" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small"       label="Small"  showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default"     label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large"       label="Large"  showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * With both leading and trailing icons across all sizes.
 */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small"       label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default"     label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large"       label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Trailing icon only (no leading icon) across all sizes.
 */
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default"     label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only — bordered square buttons across all sizes.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="small"       ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="default"     ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="large"       ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={AddIcon}    size="default"     ariaLabel="Add" />
      <GhostButton iconOnly leadingIcon={EditIcon}   size="default"     ariaLabel="Edit" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only borderless — icon with no border or background (Figma special=icon-only, no stroke).
 */
export const IconOnlyBorderless: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small"       ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="default"     ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large"       ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────── LINK VARIANT ─────────────────────────── */

/**
 * Link variant — text link style, no border or background. Matches Figma `special=link-only`.
 */
export const LinkVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="small"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="default"     label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="large"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────── STATES ─────────────────────────── */

/**
 * Loading state — spinner replaces leading icon.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Loading…" loading size="extra-small" />
      <GhostButton label="Loading…" loading size="small" />
      <GhostButton label="Loading…" loading />
      <GhostButton label="Loading…" loading size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state — explicit gray colours, no opacity reduction.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      <GhostButton label="Disabled" disabled />
      <GhostButton label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
      <GhostButton variant="link" label="Disabled link" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────── FULL MATRIX ─────────────────────────── */

const label = (text: string) => (
  <span style={{
    fontFamily: 'var(--brand-font-primary)',
    fontSize: '11px',
    color: 'var(--global-color-neutral-gray-500)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    paddingBottom: 'var(--global-spacing-sizing-4px)',
    display: 'block',
  }}>{text}</span>
);

const row = (content: React.ReactNode) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-10px)' }}>
    {content}
  </div>
);

/**
 * Complete variant matrix — all sizes, all types, all states.
 * Mirrors the full Figma Ghost Button component set.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-28px)', padding: 'var(--global-spacing-sizing-24px)' }}>

      {/* ── Ghost: label only + trailing ── */}
      <div>
        {label('Ghost — Trailing Icon (all sizes)')}
        {row(<>
          <GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="small"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="default"     label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="large"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── Ghost: leading + label + trailing ── */}
      <div>
        {label('Ghost — Leading + Label + Trailing (all sizes)')}
        {row(<>
          <GhostButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="small"       label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="default"     label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="large"       label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── Ghost: icon-only bordered ── */}
      <div>
        {label('Ghost — Icon Only (bordered, all sizes)')}
        {row(<>
          <GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="small"       ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="default"     ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="large"       ariaLabel="User" />
        </>)}
      </div>

      {/* ── Ghost: icon-only borderless ── */}
      <div>
        {label('Ghost — Icon Only (borderless, all sizes)')}
        {row(<>
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small"       ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="default"     ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large"       ariaLabel="User" />
        </>)}
      </div>

      {/* ── Link variant ── */}
      <div>
        {label('Link — All Sizes')}
        {row(<>
          <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="small"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="default"     label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="large"       label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── States matrix ── */}
      <div>
        {label('States (default size)')}
        {row(<>
          {/* Ghost — default */}
          <GhostButton label="Default"  showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          {/* Ghost — disabled */}
          <GhostButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          {/* Ghost — loading */}
          <GhostButton label="Loading"  loading />
          {/* Ghost icon-only — default */}
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          {/* Ghost icon-only — disabled */}
          <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
          {/* Ghost icon-only — loading */}
          <GhostButton iconOnly loading leadingIcon={PersonIcon} ariaLabel="Loading" />
          {/* Link — default */}
          <GhostButton variant="link" label="Link"     showTrailingIcon trailingIcon={ArrowForwardIcon} />
          {/* Link — disabled */}
          <GhostButton variant="link" label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          {/* Borderless icon */}
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="User (borderless)" />
        </>)}
      </div>

    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};
