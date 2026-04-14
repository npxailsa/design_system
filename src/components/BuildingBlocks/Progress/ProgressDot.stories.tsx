import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressDot } from './ProgressDot';
import { ProgressDotDocs } from './ProgressDotDocs';
import type { ProgressDotState, ProgressDotSize } from './ProgressDot';

const ALL_STATES: ProgressDotState[] = ['inactive', 'active', 'error', 'pending'];
const ALL_SIZES:  ProgressDotSize[]  = ['sm', 'default', 'lg'];

const meta: Meta<typeof ProgressDot> = {
  title: 'Foundation/BuildingBlocks/Progress',
  component: ProgressDot,
  parameters: {
    docs: { page: () => <ProgressDotDocs /> },
  },
  argTypes: {
    state:     { control: 'select', options: ALL_STATES },
    size:      { control: 'select', options: ALL_SIZES },
    className: { control: false },
    ariaLabel: { control: 'text' },
  },
  args: {
    state: 'active',
    size:  'default',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressDot>;

/* ── Shared helpers ────────────────────────────────────────────────────── */

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-12px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

/* ════════════════════════════════════════════════════════════════════════════
   DOCUMENTATION
   ════════════════════════════════════════════════════════════════════════════ */

export const Documentation: Story = {
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: { page: () => <ProgressDotDocs /> },
    chromatic: { disableSnapshot: true },
  },
  render: () => <ProgressDotDocs />,
};

/* ════════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ════════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ padding: 'var(--global-spacing-sizing-32px)', minWidth: '200px' }}>
      <ProgressDot {...args} />
    </div>
  ),
};

/* ════════════════════════════════════════════════════════════════════════════
   STATES
   ════════════════════════════════════════════════════════════════════════════ */

export const StateInactive: Story = {
  name: 'State / Inactive',
  args: { state: 'inactive', size: 'default' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const StateActive: Story = {
  name: 'State / Active',
  args: { state: 'active', size: 'default' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const StateError: Story = {
  name: 'State / Error',
  args: { state: 'error', size: 'default' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const StatePending: Story = {
  name: 'State / Pending',
  args: { state: 'pending', size: 'default' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const AllStates: Story = {
  name: 'State / All',
  render: () => (
    <div style={rowStyle}>
      {ALL_STATES.map((state) => (
        <div
          key={state}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-6px)' }}
        >
          <ProgressDot state={state} size="default" />
          <span
            style={{
              fontFamily: 'var(--font-family-secondary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              textTransform: 'capitalize',
            }}
          >
            {state}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   SIZES
   ════════════════════════════════════════════════════════════════════════════ */

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: { state: 'active', size: 'sm' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const SizeDefault: Story = {
  name: 'Size / Default',
  args: { state: 'active', size: 'default' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: { state: 'active', size: 'lg' },
  render: (args) => (
    <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'Size / All',
  render: () => (
    <div style={{ ...rowStyle, alignItems: 'flex-end' }}>
      {ALL_SIZES.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-6px)' }}
        >
          <ProgressDot state="active" size={size} />
          <span
            style={{
              fontFamily: 'var(--font-family-secondary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
            }}
          >
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   SIZE × STATE MATRIX
   ════════════════════════════════════════════════════════════════════════════ */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (12 variants)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto repeat(4, minmax(60px, 1fr))',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-24px)',
        background: 'var(--global-color-neutral-gray-50)',
        borderRadius: 'var(--global-spacing-radius-8px)',
        alignItems: 'center',
        minWidth: '200px',
        width: '100%',
      }}
    >
      {/* Header */}
      <span style={{ fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }} />
      {ALL_STATES.map((s) => (
        <span
          key={s}
          style={{
            fontFamily: 'var(--font-family-secondary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          {s}
        </span>
      ))}
      {/* Rows */}
      {ALL_SIZES.map((size) => (
        <React.Fragment key={size}>
          <span
            style={{
              fontFamily: 'var(--font-family-secondary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
            }}
          >
            {size}
          </span>
          {ALL_STATES.map((state) => (
            <div key={state} style={{ display: 'flex', justifyContent: 'center' }}>
              <ProgressDot size={size} state={state} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   IN CONTEXT
   ════════════════════════════════════════════════════════════════════════════ */

export const InContextStepProgress: Story = {
  name: 'In Context / Step Progress',
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-4px)',
        padding: 'var(--global-spacing-sizing-24px)',
        background: 'var(--global-color-base-white)',
        borderRadius: 'var(--global-spacing-radius-8px)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        minWidth: '200px',
        width: '100%',
      }}
    >
      <ProgressDot state="inactive" size="default" ariaLabel="Step 1 — completed" />
      <ProgressDot state="active"   size="default" ariaLabel="Step 2 — active" />
      <ProgressDot state="error"    size="default" ariaLabel="Step 3 — error" />
      <ProgressDot state="pending"  size="default" ariaLabel="Step 4 — pending" />
      <ProgressDot state="pending"  size="default" ariaLabel="Step 5 — pending" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const InContextPagination: Story = {
  name: 'In Context / Pagination',
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--global-spacing-sizing-4px)',
        padding: 'var(--global-spacing-sizing-16px)',
        background: 'var(--global-color-base-white)',
        borderRadius: 'var(--global-spacing-radius-8px)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        minWidth: '200px',
        width: '100%',
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <ProgressDot key={i} state={i === 2 ? 'active' : 'pending'} size="sm" ariaLabel={`Page ${i + 1}`} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
