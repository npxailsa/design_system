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
  parameters: {
    docs: { page: () => <StatusIndicatorDocs /> },
  },
  render: () => <StatusIndicatorDocs />,
};

/* ── Individual status stories ── */
export const Online: Story = {
  args: { status: 'online', size: 'default' },
};

export const Away: Story = {
  args: { status: 'away', size: 'default' },
};

export const DoNotDisturb: Story = {
  name: 'Do Not Disturb',
  args: { status: 'do-not-disturb', size: 'default' },
};

export const Verified: Story = {
  args: { status: 'verified', size: 'default' },
};

export const Offline: Story = {
  args: { status: 'offline', size: 'default' },
};

/* ── All statuses × all sizes grid ── */
export const AllStates: Story = {
  name: 'All States',
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

/* ── Size comparison ── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      {ALL_SIZES.map((size) => (
        <div
          key={size}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <StatusIndicator status="online" size={size} />
          <span
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-600)',
              textTransform: 'capitalize',
            }}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
};
