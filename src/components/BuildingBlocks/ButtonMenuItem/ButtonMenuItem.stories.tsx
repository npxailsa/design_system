import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ButtonMenuItem } from './ButtonMenuItem';
import { ButtonMenuItemDocs } from './ButtonMenuItemDocs';
import type { ButtonMenuItemPosition, ButtonMenuItemSize } from './ButtonMenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ArchiveIcon from '@mui/icons-material/Archive';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const meta: Meta<typeof ButtonMenuItem> = {
  title: 'Foundation/BuildingBlocks/ButtonMenuItem',
  component: ButtonMenuItem,
  parameters: {
    docs: {
      page: () => <ButtonMenuItemDocs />,
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'mid', 'bottom', 'solo'],
      description: 'Controls border-radius and visible border edges when stacked',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Controls font size, icon size, and padding',
    },
    selected: {
      control: 'boolean',
      description: 'Marks the item as the currently active option',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction; renders in a muted style',
    },
    label: {
      control: 'text',
      description: 'Visible label text',
    },
  },
  args: {
    label: 'Menu item label',
    position: 'solo',
    size: 'default',
    selected: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMenuItem>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ButtonMenuItemDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

/* ── Default ── */
export const Playground: Story = { name: 'Playground' };

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'This is the top',
    position: 'solo',
  },
};

/* ── Sizes ── */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => {
    const sizes: ButtonMenuItemSize[] = ['small', 'default', 'large'];
    return (
      <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-32px)', alignItems: 'flex-start', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-20px)' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', textTransform: 'capitalize', marginBottom: 'var(--global-spacing-sizing-4px)' }}>{size}</span>
            <ButtonMenuItem label="Top" position="top" size={size} />
            <ButtonMenuItem label="Middle" position="mid" size={size} />
            <ButtonMenuItem label="Bottom" position="bottom" size={size} />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── Status / Positions ── */
export const StatusPositions: Story = {
  name: 'Status / Positions',
  render: () => {
    const positions: ButtonMenuItemPosition[] = ['top', 'mid', 'bottom', 'solo'];
    return (
      <div
        style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-32px)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          padding: 'var(--global-spacing-sizing-20px)',
        }}
      >
        {positions.map((pos) => (
          <div
            key={pos}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-4px)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                fontFamily: 'var(--brand-font-primary)',
                textTransform: 'capitalize',
                marginBottom: 'var(--global-spacing-sizing-4px)',
              }}
            >
              {pos}
            </span>
            <ButtonMenuItem label={`Position: ${pos}`} position={pos} />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── All States ── */
export const StatusStates: Story = {
  name: 'Status / States',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: 'var(--global-spacing-sizing-20px)',
      }}
    >
      {[
        { label: 'Default', props: {} },
        { label: 'Selected', props: { selected: true } },
        { label: 'Disabled', props: { disabled: true } },
      ].map(({ label, props }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-4px)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              fontFamily: 'var(--brand-font-primary)',
              marginBottom: 'var(--global-spacing-sizing-4px)',
            }}
          >
            {label}
          </span>
          <ButtonMenuItem label="This is the top" position="top" size="default" {...props} />
          <ButtonMenuItem label="This is the middle" position="mid" size="default" {...props} />
          <ButtonMenuItem label="This is the middle" position="mid" size="default" {...props} />
          <ButtonMenuItem label="This is the bottom" position="bottom" size="default" {...props} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── All Sizes ── */
export const StatusAllSizes: Story = {
  name: 'Status / All Sizes',
  render: () => {
    const sizes: ButtonMenuItemSize[] = ['small', 'default', 'large'];
    return (
      <div
        style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-32px)',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          padding: 'var(--global-spacing-sizing-20px)',
        }}
      >
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-4px)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                fontFamily: 'var(--brand-font-primary)',
                textTransform: 'capitalize',
                marginBottom: 'var(--global-spacing-sizing-4px)',
              }}
            >
              {size}
            </span>
            <ButtonMenuItem label="This is the top" position="top" size={size} />
            <ButtonMenuItem label="This is the middle" position="mid" size={size} />
            <ButtonMenuItem label="This is the middle" position="mid" size={size} />
            <ButtonMenuItem label="This is the bottom" position="bottom" size={size} />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── With Icons ── */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-32px)', alignItems: 'flex-start', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-20px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', marginBottom: 'var(--global-spacing-sizing-4px)' }}>Leading icons</span>
        <ButtonMenuItem label="Edit" position="top" leadingIcon={EditIcon} />
        <ButtonMenuItem label="Duplicate" position="mid" leadingIcon={ContentCopyIcon} />
        <ButtonMenuItem label="Download" position="mid" leadingIcon={DownloadIcon} />
        <ButtonMenuItem label="Delete" position="bottom" leadingIcon={DeleteIcon} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', marginBottom: 'var(--global-spacing-sizing-4px)' }}>Trailing icon</span>
        <ButtonMenuItem label="View options" position="top" trailingIcon={ChevronRightIcon} />
        <ButtonMenuItem label="Sort by" position="mid" trailingIcon={ChevronRightIcon} />
        <ButtonMenuItem label="Group by" position="bottom" trailingIcon={ChevronRightIcon} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'flex-start', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-20px)' }}>
      {[{ label: 'Default', props: {} }, { label: 'Selected', props: { selected: true } }, { label: 'Disabled', props: { disabled: true } }].map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
          <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', marginBottom: 'var(--global-spacing-sizing-4px)' }}>{label}</span>
          <ButtonMenuItem label="Top" position="top" size="default" {...props} />
          <ButtonMenuItem label="Middle" position="mid" size="default" {...props} />
          <ButtonMenuItem label="Bottom" position="bottom" size="default" {...props} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusWithIcons: Story = {
  name: 'Status / With Icons',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-32px)',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: 'var(--global-spacing-sizing-20px)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', marginBottom: 'var(--global-spacing-sizing-4px)' }}>Leading icons</span>
        <ButtonMenuItem label="Edit" position="top" leadingIcon={EditIcon} />
        <ButtonMenuItem label="Duplicate" position="mid" leadingIcon={ContentCopyIcon} />
        <ButtonMenuItem label="Download" position="mid" leadingIcon={DownloadIcon} />
        <ButtonMenuItem label="Archive" position="mid" leadingIcon={ArchiveIcon} />
        <ButtonMenuItem label="Delete" position="bottom" leadingIcon={DeleteIcon} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', marginBottom: 'var(--global-spacing-sizing-4px)' }}>Trailing icons</span>
        <ButtonMenuItem label="View options" position="top" trailingIcon={ChevronRightIcon} />
        <ButtonMenuItem label="Sort by" position="mid" trailingIcon={ChevronRightIcon} />
        <ButtonMenuItem label="Group by" position="bottom" trailingIcon={ChevronRightIcon} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full Grid (Screenshot match) ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (24 variants)',
  render: () => {
    const sizes: ButtonMenuItemSize[] = ['small', 'default', 'large'];
    const stateGroups = [
      { label: 'Default', props: {} },
      { label: 'Hover (interact)', props: {} },
      { label: 'Selected', props: { selected: true } },
      { label: 'Disabled', props: { disabled: true } },
    ];
    const positions = [
      { pos: 'top' as const, label: 'This is the top' },
      { pos: 'mid' as const, label: 'This is the middle' },
      { pos: 'bottom' as const, label: 'This is the bottom' },
    ];

    return (
      <div style={{ padding: 'var(--global-spacing-sizing-20px)', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)' }}>
        {positions.map(({ pos, label: posLabel }) => (
          <div key={pos}>
            <p
              style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-sm)',
                fontWeight: 'var(--global-type-weight-medium)',
                color: 'var(--global-color-neutral-gray-700)',
                margin: '0 0 var(--global-spacing-sizing-12px)',
                textTransform: 'capitalize',
              }}
            >
              Position: {pos}
            </p>
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-40px)', flexWrap: 'wrap' }}>
              {sizes.map((size) => (
                <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
                  <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-primary)', textTransform: 'capitalize' }}>{size}</span>
                  {stateGroups.map(({ label: stateLabel, props }) => (
                    <div key={stateLabel}>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'monospace', marginBottom: '2px' }}>{stateLabel}</span>
                      <ButtonMenuItem label={posLabel} position={pos} size={size} {...props} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
