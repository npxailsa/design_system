import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbsDocs } from './BreadcrumbsDocs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Foundation/BuildingBlocks/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: () => <BreadcrumbsDocs />,
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    ariaLabel: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    size: 'default',
    ariaLabel: 'Breadcrumb',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Reports' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <BreadcrumbsDocs />,
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Playground ── */
export const Playground: Story = {
  name: 'Playground',
};

/* ── Size / Small ── */
export const Small: Story = {
  name: 'Size / Small',
  args: {
    size: 'sm',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Reports' },
    ],
  },
};

/* ── Size / Default ── */
export const Default: Story = {
  name: 'Size / Default',
  args: {
    size: 'default',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Reports' },
    ],
  },
};

/* ── Size / Large ── */
export const Large: Story = {
  name: 'Size / Large',
  args: {
    size: 'lg',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Reports' },
    ],
  },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: '480px' }}>
      <Breadcrumbs size="default" items={[{ label: 'Home', href: '#' }, { label: 'Finance', href: '#' }, { label: 'Reports' }]} />
      <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '4px 8px', borderRadius: '4px' }}>--breadcrumbs-font-size-default / --breadcrumbs-separator-color</code>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      {(['sm', 'default', 'lg'] as const).map(size => (
        <Breadcrumbs key={size} size={size} items={[{ label: 'Home', href: '#' }, { label: 'Section', href: '#' }, { label: 'Current Page' }]} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Size / All Sizes Side-by-Side ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (9 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px' }}>
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              width: '56px',
              flexShrink: 0,
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-400)',
              fontFamily: 'var(--font-family-primary)',
            }}
          >
            {size === 'sm' ? 'Small' : size === 'lg' ? 'Large' : 'Default'}
          </span>
          <Breadcrumbs
            size={size}
            items={[
              { label: 'Home', href: '#' },
              { label: 'Finance', href: '#' },
              { label: 'Reports' },
            ]}
          />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Two-level trail ── */
export const TwoLevel: Story = {
  name: 'Trail / Two Level',
  args: {
    size: 'default',
    items: [
      { label: 'Finance', href: '#' },
      { label: 'Reports' },
    ],
  },
};

/* ── Deep trail (5 levels) ── */
export const DeepTrail: Story = {
  name: 'Trail / Deep (5 Levels)',
  args: {
    size: 'default',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'FY 2025', href: '#' },
      { label: 'Q1', href: '#' },
      { label: 'Reports' },
    ],
  },
};

/* ── Button-only (SPA, no href) ── */
export const ButtonCrumbs: Story = {
  name: 'Trail / Button Navigation',
  args: {
    size: 'default',
    items: [
      { label: 'Home', onClick: () => alert('Home clicked') },
      { label: 'Finance', onClick: () => alert('Finance clicked') },
      { label: 'Reports' },
    ],
  },
};
