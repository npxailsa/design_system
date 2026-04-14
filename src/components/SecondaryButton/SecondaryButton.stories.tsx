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
const ROW: React.CSSProperties = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' };
const LBL = (text: string) => (
  <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-500)', display: 'block', marginBottom: '8px' }}>{text}</span>
);

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SecondaryButtonDocs />,
  parameters: { layout: 'fullscreen', controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

/**
 * Default secondary button — solid variant with label.
 */
export const Playground: Story = {
  name: 'Playground',
  args: { label: 'Label', variant: 'solid', size: 'default', showLeadingIcon: true, leadingIcon: PersonIcon, disabled: false, loading: false },
};

export const Default: Story = {
  name: 'Default',
  args: { label: 'Label', variant: 'solid', size: 'default' },
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

export const StatusSolid: Story = {
  name: 'Status / Solid',
  render: () => (
    <div style={ROW}>
      <SecondaryButton variant="solid" size="extra-small" label="XS" />
      <SecondaryButton variant="solid" size="small" label="Small" />
      <SecondaryButton variant="solid" size="default" label="Default" />
      <SecondaryButton variant="solid" size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusAlt: Story = {
  name: 'Status / Alt',
  render: () => (
    <div style={ROW}>
      <SecondaryButton variant="alt" size="extra-small" label="XS" />
      <SecondaryButton variant="alt" size="small" label="Small" />
      <SecondaryButton variant="alt" size="default" label="Default" />
      <SecondaryButton variant="alt" size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusIconOnly: Story = {
  name: 'Status / Icon Only',
  render: () => (
    <div style={ROW}>
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusLoading: Story = {
  name: 'Status / Loading',
  render: () => (
    <div style={ROW}>
      <SecondaryButton label="Loading…" loading size="small" />
      <SecondaryButton label="Loading…" loading />
      <SecondaryButton variant="alt" label="Loading…" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => (
    <div style={ROW}>
      <SecondaryButton label="Disabled" disabled />
      <SecondaryButton variant="alt" label="Disabled" disabled />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '600px' }}>
      {LBL('Sub-atoms')}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {[['Label only', <SecondaryButton label="Label" />, '--btn-secondary-font-size / --btn-secondary-label-color'], ['Leading icon', <SecondaryButton showLeadingIcon leadingIcon={PersonIcon} label="Icon" />, '--btn-secondary-icon-size-default'], ['Icon only', <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-secondary-icon-only-size-default'], ['Alt variant', <SecondaryButton variant="alt" label="Alt" />, '--btn-secondary-alt-bg']].map(([lbl, el, token]) => (
          <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', fontFamily: 'var(--brand-font-primary)' }}>{lbl as string}</span>
            {el as React.ReactElement}
            <code style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-500)', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>{token as string}</code>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px' }}>
      {LBL('Solid')}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['Default', 'Loading', 'Disabled'] as const).map((s) => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SecondaryButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
            <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span>
          </div>
        ))}
      </div>
      {LBL('Alt')}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['Default', 'Loading', 'Disabled'] as const).map((s) => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SecondaryButton variant="alt" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
            <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span>
          </div>
        ))}
      </div>
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
