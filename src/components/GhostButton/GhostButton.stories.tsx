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

const SROW: React.CSSProperties = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' };

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <GhostButtonDocs />,
  parameters: { layout: 'fullscreen', controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Label', variant: 'ghost', size: 'default', showLeadingIcon: true, leadingIcon: PersonIcon, showTrailingIcon: true, trailingIcon: ArrowForwardIcon, disabled: false, loading: false },
};

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
      <GhostButton size="extra-small" label="Extra Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small"       label="Small"  showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default"     label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large"       label="Large"  showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusGhost: Story = {
  name: 'Status / Ghost',
  render: () => <div style={SROW}><GhostButton size="extra-small" label="XS" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton size="default" label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusLink: Story = {
  name: 'Status / Link',
  render: () => <div style={SROW}><GhostButton variant="link" size="extra-small" label="XS" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton variant="link" size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton variant="link" size="default" label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} /><GhostButton variant="link" size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusIconOnly: Story = {
  name: 'Status / Icon Only',
  render: () => <div style={SROW}><GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" /><GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" /><GhostButton iconOnly leadingIcon={PersonIcon} size="default" ariaLabel="User" /><GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusIconOnlyBorderless: Story = {
  name: 'Status / Icon Only (Borderless)',
  render: () => <div style={SROW}><GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" /><GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small" ariaLabel="User" /><GhostButton iconOnly borderless leadingIcon={PersonIcon} size="default" ariaLabel="User" /><GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large" ariaLabel="User" /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusLoading: Story = {
  name: 'Status / Loading',
  render: () => <div style={SROW}><GhostButton label="Loading…" loading size="small" /><GhostButton label="Loading…" loading /><GhostButton variant="link" label="Loading…" loading /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => <div style={SROW}><GhostButton label="Disabled" disabled /><GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" /><GhostButton variant="link" label="Disabled link" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled /></div>,
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
      {[['Ghost label', <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />, '--btn-ghost-bg / --btn-ghost-border'], ['Icon only', <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-ghost-icon-only-size-default'], ['Borderless', <GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-ghost-borderless'], ['Link', <GhostButton variant="link" label="Link" showTrailingIcon trailingIcon={ArrowForwardIcon} />, '--btn-link-color']].map(([lbl, el, tok]) => (
        <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', fontFamily: 'var(--brand-font-primary)' }}>{lbl as string}</span>
          {el as React.ReactElement}
          <code style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-500)', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{tok as string}</code>
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
          <GhostButton label={s} showTrailingIcon trailingIcon={ArrowForwardIcon} loading={s === 'Loading'} disabled={s === 'Disabled'} />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

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
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (36 variants)',
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
