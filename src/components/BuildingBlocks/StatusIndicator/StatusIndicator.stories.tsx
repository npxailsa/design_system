import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StatusIndicator } from './StatusIndicator';
import { StatusIndicatorDocs } from './StatusIndicatorDocs';
import type { StatusIndicatorStatus, StatusIndicatorSize } from './StatusIndicator';

const ALL_STATUSES: StatusIndicatorStatus[] = [
  'away',
  'do-not-disturb',
  'verified',
  'offline',
  'online',
];

const ALL_SIZES: StatusIndicatorSize[] = ['default', 'large', 'small'];

const meta: Meta<typeof StatusIndicator> = {
  title: 'Foundation/BuildingBlocks/Status Indicator',
  component: StatusIndicator,
  parameters: {
    docs: {
      page: () => <StatusIndicatorDocs />,
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ALL_STATUSES,
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
    },
  },
  args: {
    status: 'online',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof StatusIndicator>;

/* ── Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  parameters: { docs: { page: () => <StatusIndicatorDocs /> }, controls: { disable: true }, chromatic: { disableSnapshot: true } },
  render: () => <StatusIndicatorDocs />,
};

export const Playground: Story = { name: 'Playground', args: { status: 'online', size: 'default' } };

export const Default: Story = { name: 'Default', args: { status: 'online', size: 'default' } };

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '16px', alignItems: 'center' }}>
      <StatusIndicator status="online" size="small" />
      <StatusIndicator status="online" size="default" />
      <StatusIndicator status="online" size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusOnline: Story = { name: 'Status / Online', args: { status: 'online', size: 'default' } };
export const StatusAway: Story = { name: 'Status / Away', args: { status: 'away', size: 'default' } };
export const StatusDoNotDisturb: Story = { name: 'Status / Do Not Disturb', args: { status: 'do-not-disturb', size: 'default' } };
export const StatusVerified: Story = { name: 'Status / Verified', args: { status: 'verified', size: 'default' } };
export const StatusOffline: Story = { name: 'Status / Offline', args: { status: 'offline', size: 'default' } };

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {(['online', 'away', 'do-not-disturb', 'verified', 'offline'] as const).map(status => (
        <div key={status} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          <StatusIndicator status={status} size="default" />
          <span style={{ fontSize: '10px', fontFamily: 'var(--brand-font-secondary)', color: 'var(--global-color-neutral-gray-600)' }}>{status}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
      {(['online', 'away', 'do-not-disturb', 'verified', 'offline'] as const).map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
          <StatusIndicator status={s} size="default" />
          <span style={{ fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{s}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── All statuses × all sizes grid ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (15 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {ALL_SIZES.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
        >
          {/* size label */}
          <div
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-600)',
              width: '56px',
              flexShrink: 0,
              textTransform: 'capitalize',
            }}
          >
            {size}
          </div>
          {/* dots */}
          {ALL_STATUSES.map((status) => (
            <StatusIndicator key={status} status={status} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};

/* (duplicate Sizes removed — canonical Sizes story is defined above) */
