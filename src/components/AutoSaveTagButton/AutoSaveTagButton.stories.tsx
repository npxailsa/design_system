import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AutoSaveTagButton } from './AutoSaveTagButton';
import { AutoSaveTagButtonDocs } from './AutoSaveTagButtonDocs';
import type { AutoSaveTagStatus } from './AutoSaveTagButton';

const ALL_STATUSES: AutoSaveTagStatus[] = [
  'default',
  'auto-saving',
  'saving',
  'saved',
  'error',
  'disabled',
  'focused',
];

const meta: Meta<typeof AutoSaveTagButton> = {
  title: 'Atoms/Buttons/Auto-Save Tag Button',
  component: AutoSaveTagButton,
  parameters: {
    docs: {
      page: () => <AutoSaveTagButtonDocs />,
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ALL_STATUSES,
      description:
        'Drives the label, background, border, and text colour of the pill button',
    },
    label: {
      control: 'text',
      description: 'Overrides the auto-derived label for the current status',
    },
    timestamp: {
      control: 'text',
      description: 'Timestamp text displayed in the tag below the button',
    },
    showTag: {
      control: 'boolean',
      description: 'Toggle the timestamp tag visibility',
    },
  },
  args: {
    status: 'default',
    timestamp: '12:30 PM on 15 JAN 2025',
    showTag: true,
  },
};

export default meta;
type Story = StoryObj<typeof AutoSaveTagButton>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <AutoSaveTagButtonDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = { name: 'Playground', args: { status: 'default', showTag: true } };
export const Default: Story = { name: 'Default', args: { status: 'default' } };

export const StatusAutoSaving: Story = { name: 'Status / Auto-saving', args: { status: 'auto-saving' } };
export const StatusSaving: Story = { name: 'Status / Saving', args: { status: 'saving' } };
export const StatusSaved: Story = { name: 'Status / Saved', args: { status: 'saved' } };
export const StatusError: Story = { name: 'Status / Error', args: { status: 'error' } };
export const StatusDisabled: Story = { name: 'Status / Disabled', args: { status: 'disabled' } };
export const StatusFocused: Story = { name: 'Status / Focused', args: { status: 'focused' } };
export const StatusWithoutTag: Story = { name: 'Status / Without Tag', args: { status: 'default', showTag: false } };

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      {ALL_STATUSES.map(status => (
        <div key={status} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <AutoSaveTagButton status={status} showTag />
          <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{status}</code>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      {ALL_STATUSES.map(status => (
        <AutoSaveTagButton key={status} status={status} showTag />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (7 variants)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-32px)',
        padding: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
      }}
    >
      {ALL_STATUSES.map((status) => (
        <div
          key={status}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--global-spacing-sizing-32px)',
          }}
        >
          <AutoSaveTagButton
            status={status}
            timestamp="12:30 PM on 15 JAN 2025"
          />
          <span
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              textTransform: 'capitalize',
              paddingTop: 'var(--global-spacing-sizing-12px)',
            }}
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
