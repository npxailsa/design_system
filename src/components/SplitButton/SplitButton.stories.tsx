import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { SplitButton } from './SplitButton';
import { SplitButtonDocs } from './SplitButtonDocs';
import type { SplitButtonType, SplitButtonVariant, SplitButtonSize } from './SplitButton';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

const sampleMenu = [
  { label: 'Edit', leadingIcon: EditIcon, onClick: () => {} },
  { label: 'Duplicate', leadingIcon: ContentCopyIcon, onClick: () => {} },
  { label: 'Archive', leadingIcon: ArchiveIcon, onClick: () => {} },
  { label: 'Delete', leadingIcon: DeleteIcon, onClick: () => {} },
];

const meta: Meta<typeof SplitButton> = {
  title: 'Atoms/Buttons/Split Button',
  component: SplitButton,
  parameters: {
    docs: {
      page: () => <SplitButtonDocs />,
    },
  },
  argTypes: {
    buttonType: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      description: 'Button family (controls the colour family)',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'solid', 'alt', 'ghost', 'link'],
      description: 'Visual sub-variant — must match the selected buttonType',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    label: { control: 'text' },
    showLeadingIcon: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    buttonType: 'primary',
    variant: 'filled',
    size: 'default',
    label: 'Label',
    showLeadingIcon: false,
    loading: false,
    disabled: false,
    menuItems: sampleMenu,
  },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

/* ── Documentation (always first) ── */
export const Documentation: Story = {
  render: () => <SplitButtonDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Default (interactive controls) ── */
export const Default: Story = {};

/* ════════════════════════════════════════════════════════════
   PRIMARY
   ════════════════════════════════════════════════════════════ */
export const PrimaryFilled: Story = {
  name: 'Primary — Filled',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="primary" variant="filled" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const PrimaryOutline: Story = {
  name: 'Primary — Outline',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="primary" variant="outline" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   SECONDARY
   ════════════════════════════════════════════════════════════ */
export const SecondarySolid: Story = {
  name: 'Secondary — Solid',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="secondary" variant="solid" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const SecondaryAlt: Story = {
  name: 'Secondary — Alt (white bg)',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="secondary" variant="alt" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   TERTIARY
   ════════════════════════════════════════════════════════════ */
export const TertiarySolid: Story = {
  name: 'Tertiary — Solid (yellow)',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="tertiary" variant="solid" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const TertiaryAlt: Story = {
  name: 'Tertiary — Alt (seafoam bg)',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="tertiary" variant="alt" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   GHOST
   ════════════════════════════════════════════════════════════ */
export const GhostBordered: Story = {
  name: 'Ghost — Ghost (bordered)',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="ghost" variant="ghost" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const GhostLink: Story = {
  name: 'Ghost — Link variant',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
        <SplitButton key={size} buttonType="ghost" variant="link" size={size} label={size} menuItems={sampleMenu} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   STATES
   ════════════════════════════════════════════════════════════ */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      <SplitButton buttonType="primary" variant="filled" label="Download" showLeadingIcon leadingIcon={DownloadIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Profile" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Edit" showLeadingIcon leadingIcon={EditIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Options" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      <SplitButton buttonType="primary" variant="filled" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Saving…" loading menuItems={sampleMenu} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', alignItems: 'flex-start', padding: 'var(--global-spacing-sizing-20px)' }}>
      <SplitButton buttonType="primary" variant="filled" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="primary" variant="outline" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="alt" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Disabled" disabled menuItems={sampleMenu} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   ALL VARIANTS OVERVIEW
   ════════════════════════════════════════════════════════════ */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (24 variants)',
  render: () => {
    const variants: Array<{ buttonType: SplitButtonType; variant: SplitButtonVariant; label: string }> = [
      { buttonType: 'primary', variant: 'filled', label: 'Primary / Filled' },
      { buttonType: 'primary', variant: 'outline', label: 'Primary / Outline' },
      { buttonType: 'secondary', variant: 'solid', label: 'Secondary / Solid' },
      { buttonType: 'secondary', variant: 'alt', label: 'Secondary / Alt' },
      { buttonType: 'tertiary', variant: 'solid', label: 'Tertiary / Solid' },
      { buttonType: 'tertiary', variant: 'alt', label: 'Tertiary / Alt' },
      { buttonType: 'ghost', variant: 'ghost', label: 'Ghost / Ghost' },
      { buttonType: 'ghost', variant: 'link', label: 'Ghost / Link' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)' }}>
        {variants.map(({ buttonType, variant, label }) => (
          <div key={`${buttonType}-${variant}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <span style={{
              width: 'var(--global-spacing-sizing-160px)',
              flexShrink: 0,
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              fontFamily: 'var(--brand-font-primary)',
            }}>
              {label}
            </span>
            {(['small', 'default', 'large'] as SplitButtonSize[]).map((size) => (
              <SplitButton
                key={size}
                buttonType={buttonType}
                variant={variant}
                size={size}
                label={size === 'default' ? 'Label' : size}
                menuItems={sampleMenu}
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
