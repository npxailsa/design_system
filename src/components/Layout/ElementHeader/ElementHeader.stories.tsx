import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ElementHeader } from './ElementHeader';
import { ElementHeaderDocs } from './ElementHeaderDocs';

const EXAMPLE_BREADCRUMBS = [
  { label: 'Business', href: '#' },
  { label: 'Equipment risk', href: '#' },
  { label: 'Edit' },
];

const meta: Meta<typeof ElementHeader> = {
  title: 'Atoms/Layout/ElementHeader',
  component: ElementHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A structured page-header layout block combining a breadcrumb trail, a contextual Back button, and a prominent element/page title.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
      description: 'Size scale — affects typography and spacing.',
    },
    title: {
      control: 'text',
      description: 'Page / element title displayed below the Back button.',
    },
    backLabel: {
      control: 'text',
      description: 'Label shown on the Back button.',
    },
    showBack: {
      control: 'boolean',
      description: 'Whether to show the Back button.',
    },
    breadcrumbs: {
      control: false,
      description: 'Array of breadcrumb items.',
    },
  },
  args: {
    title: 'This is the Element name for the user to see',
    backLabel: 'Back',
    showBack: true,
    size: 'default',
    breadcrumbs: EXAMPLE_BREADCRUMBS,
  },
};

export default meta;
type Story = StoryObj<typeof ElementHeader>;

/* ── Documentation ──────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ElementHeaderDocs />,
  parameters: {
    controls: { disable: true },
    docs: { canvas: { sourceState: 'hidden' } },
  },
};

/* ── Playground ─────────────────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
};

/* ── All Sizes ──────────────────────────────────────────────────────────── */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (12 variants)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-32px)',
        padding: 'var(--global-spacing-sizing-24px)',
      }}
    >
      {(['lg', 'default', 'sm'] as const).map((size) => (
        <div key={size}>
          <p
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              marginBottom: 'var(--global-spacing-sizing-8px)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {size === 'lg' ? 'Large' : size === 'default' ? 'Default' : 'Small'}
          </p>
          <ElementHeader
            size={size}
            title="This is the Element name for the user to see"
            breadcrumbs={EXAMPLE_BREADCRUMBS}
          />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Size / Large ───────────────────────────────────────────────────────── */

export const SizeLarge: Story = {
  name: 'Size / Large',
  args: { size: 'lg' },
};

/* ── Size / Default ─────────────────────────────────────────────────────── */

export const SizeDefault: Story = {
  name: 'Size / Default',
  args: { size: 'default' },
};

/* ── Size / Small ───────────────────────────────────────────────────────── */

export const SizeSmall: Story = {
  name: 'Size / Small',
  args: { size: 'sm' },
};

/* ── Without Back Button ─────────────────────────────────────────────────── */

export const WithoutBack: Story = {
  name: 'Without Back Button',
  args: { showBack: false },
};

/* ── Without Breadcrumbs ─────────────────────────────────────────────────── */

export const WithoutBreadcrumbs: Story = {
  name: 'Without Breadcrumbs',
  args: { breadcrumbs: [] },
};

/* ── Deep Trail ─────────────────────────────────────────────────────────── */

export const DeepTrail: Story = {
  name: 'Deep Trail',
  args: {
    breadcrumbs: [
      { label: 'Home', href: '#' },
      { label: 'Business', href: '#' },
      { label: 'Equipment risk', href: '#' },
      { label: 'Edit' },
    ],
    title: 'Edit equipment risk assessment',
  },
};
