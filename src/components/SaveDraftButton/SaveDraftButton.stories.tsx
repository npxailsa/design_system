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
  render: () => <SaveDraftButtonDocs />,
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

/* ── All States ── */
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
