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
const ROW: React.CSSProperties = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)' };
const LBL = (t: string) => <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-500)', display: 'block', marginBottom: '8px' }}>{t}</span>;

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TertiaryButtonDocs />,
  parameters: { layout: 'fullscreen', controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

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
      <TertiaryButton size="extra-small" label="Extra Small" />
      <TertiaryButton size="small" label="Small" />
      <TertiaryButton size="default" label="Default" />
      <TertiaryButton size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusSolid: Story = {
  name: 'Status / Solid',
  render: () => <div style={ROW}><TertiaryButton variant="solid" size="extra-small" label="XS" /><TertiaryButton variant="solid" size="small" label="Small" /><TertiaryButton variant="solid" size="default" label="Default" /><TertiaryButton variant="solid" size="large" label="Large" /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusAlt: Story = {
  name: 'Status / Alt',
  render: () => <div style={ROW}><TertiaryButton variant="alt" size="extra-small" label="XS" /><TertiaryButton variant="alt" size="small" label="Small" /><TertiaryButton variant="alt" size="default" label="Default" /><TertiaryButton variant="alt" size="large" label="Large" /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusIconOnly: Story = {
  name: 'Status / Icon Only',
  render: () => <div style={ROW}><TertiaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusLoading: Story = {
  name: 'Status / Loading',
  render: () => <div style={ROW}><TertiaryButton label="Loading…" loading size="small" /><TertiaryButton label="Loading…" loading /><TertiaryButton variant="alt" label="Loading…" loading /></div>,
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => <div style={ROW}><TertiaryButton label="Disabled" disabled /><TertiaryButton variant="alt" label="Disabled" disabled /><TertiaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" /></div>,
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
      {[['Solid label', <TertiaryButton label="Label" />, '--btn-tertiary-bg'], ['Alt label', <TertiaryButton variant="alt" label="Alt" />, '--btn-tertiary-alt-bg'], ['Icon only', <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-tertiary-icon-only-size-default']].map(([lbl, el, tok]) => (
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px' }}>
      {LBL('Solid — states')}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['Default', 'Loading', 'Disabled'] as const).map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <TertiaryButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
            <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s.toLowerCase()}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

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
