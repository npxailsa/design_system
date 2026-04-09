import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Milestones } from './Milestones';
import { MilestonesDocs } from './MilestonesDocs';
import type { MilestonesSize } from './Milestones';

const ALL_SIZES: MilestonesSize[] = ['sm', 'default', 'lg'];
const ALL_VALUES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const meta: Meta<typeof Milestones> = {
  title: 'Atoms/Loaders/Milestones',
  component: Milestones,
  parameters: {
    docs: { page: () => <MilestonesDocs /> },
  },
  argTypes: {
    value:     { control: { type: 'range', min: 0, max: 100, step: 10 } },
    size:      { control: 'select', options: ALL_SIZES },
    showLabel: { control: 'boolean' },
    steps:     { control: { type: 'number', min: 1, max: 20, step: 1 } },
    className: { control: false },
    ariaLabel: { control: 'text' },
  },
  args: {
    value: 60,
    size: 'default',
    showLabel: true,
    steps: 10,
    ariaLabel: 'Milestone progress',
  },
};

export default meta;
type Story = StoryObj<typeof Milestones>;

/* ── Shared layout helpers ─────────────────────────────────────────────── */

const stack: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-12px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

/* ════════════════════════════════════════════════════════════════════════════
   DOCUMENTATION
   ════════════════════════════════════════════════════════════════════════════ */

export const Documentation: Story = {
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: { page: () => <MilestonesDocs /> },
    chromatic: { disableSnapshot: true },
  },
  render: () => <MilestonesDocs />,
};

/* ════════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ════════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '480px', padding: 'var(--global-spacing-sizing-24px)' }}>
      <Milestones {...args} />
    </div>
  ),
};

/* ════════════════════════════════════════════════════════════════════════════
   SIZE VARIANTS — full value scale
   ════════════════════════════════════════════════════════════════════════════ */

export const SizeSmall: Story = {
  name: 'Size / Small',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      {ALL_VALUES.map((v) => (
        <Milestones key={v} value={v} size="sm" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const SizeDefault: Story = {
  name: 'Size / Default',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      {ALL_VALUES.map((v) => (
        <Milestones key={v} value={v} size="default" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const SizeLarge: Story = {
  name: 'Size / Large',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      {ALL_VALUES.map((v) => (
        <Milestones key={v} value={v} size="lg" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   ALL SIZES — side by side
   ════════════════════════════════════════════════════════════════════════════ */

export const AllSizes: Story = {
  name: 'Size / All (Side by Side)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
          {ALL_VALUES.map((v) => (
            <Milestones key={v} value={v} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   WITHOUT LABEL
   ════════════════════════════════════════════════════════════════════════════ */

export const WithoutLabel: Story = {
  name: 'Without Label',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      {ALL_VALUES.map((v) => (
        <Milestones key={v} value={v} showLabel={false} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   CUSTOM STEP COUNT
   ════════════════════════════════════════════════════════════════════════════ */

export const CustomSteps: Story = {
  name: 'Custom Step Count / 5 Steps',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      {[0, 20, 40, 60, 80, 100].map((v) => (
        <Milestones key={v} value={v} steps={5} size="default" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   SPECIFIC VALUES
   ════════════════════════════════════════════════════════════════════════════ */

export const ZeroPercent: Story = {
  name: 'Value / 0%',
  args: { value: 0, size: 'default' },
  render: (args) => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      <Milestones {...args} />
    </div>
  ),
};

export const HalfPercent: Story = {
  name: 'Value / 50%',
  args: { value: 50, size: 'default' },
  render: (args) => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      <Milestones {...args} />
    </div>
  ),
};

export const FullPercent: Story = {
  name: 'Value / 100%',
  args: { value: 100, size: 'default' },
  render: (args) => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
      <Milestones {...args} />
    </div>
  ),
};
