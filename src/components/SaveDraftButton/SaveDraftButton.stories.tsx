import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { SaveDraftButton } from './SaveDraftButton';
import { SaveDraftButtonDocs } from './SaveDraftButtonDocs';
import type { SaveDraftStatus } from './SaveDraftButton';

const ALL_STATUSES: SaveDraftStatus[] = [
  'default',
  'auto-saving',
  'saving',
  'saved',
  'error',
  'disabled',
  'focused',
];

const meta: Meta<typeof SaveDraftButton> = {
  title: 'Atoms/Buttons/Save Draft Button',
  component: SaveDraftButton,
  parameters: {
    docs: {
      page: () => <SaveDraftButtonDocs />,
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ALL_STATUSES,
      description: 'Drives the label, background, border, and text colour of the button',
    },
    label: {
      control: 'text',
      description: 'Overrides the auto-derived label for the current status',
    },
  },
  args: {
    status: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof SaveDraftButton>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SaveDraftButtonDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = { name: 'Playground', args: { status: 'default' } };
export const Default: Story = { name: 'Default', args: { status: 'default' } };

export const StatusAutoSaving: Story = { name: 'Status / Auto-saving', args: { status: 'auto-saving' } };
export const StatusSaving: Story = { name: 'Status / Saving', args: { status: 'saving' } };
export const StatusSaved: Story = { name: 'Status / Saved', args: { status: 'saved' } };
export const StatusError: Story = { name: 'Status / Error', args: { status: 'error' } };
export const StatusDisabled: Story = { name: 'Status / Disabled', args: { status: 'disabled' } };

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      {ALL_STATUSES.map(status => (
        <div key={status} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <SaveDraftButton status={status} />
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
      {ALL_STATUSES.map(status => <SaveDraftButton key={status} status={status} />)}
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
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
      }}
    >
      {ALL_STATUSES.map((status) => (
        <div
          key={status}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--global-spacing-sizing-20px)',
          }}
        >
          <SaveDraftButton status={status} />
          <span
            style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              textTransform: 'capitalize',
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
