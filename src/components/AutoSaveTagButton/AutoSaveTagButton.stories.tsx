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
  render: () => <AutoSaveTagButtonDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Default ── */
export const Default: Story = {
  args: { status: 'default' },
};

/* ── Auto-saving ── */
export const AutoSaving: Story = {
  name: 'Auto-saving',
  args: { status: 'auto-saving' },
};

/* ── Saving ── */
export const Saving: Story = {
  args: { status: 'saving' },
};

/* ── Saved ── */
export const Saved: Story = {
  args: { status: 'saved' },
};

/* ── Error ── */
export const Error: Story = {
  args: { status: 'error' },
};

/* ── Disabled ── */
export const Disabled: Story = {
  args: { status: 'disabled' },
};

/* ── Focused ── */
export const Focused: Story = {
  args: { status: 'focused' },
};

/* ── Without Tag ── */
export const WithoutTag: Story = {
  name: 'Without Tag',
  args: {
    status: 'default',
    showTag: false,
  },
};

/* ── All States ── */
export const AllStates: Story = {
  name: 'All States',
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
