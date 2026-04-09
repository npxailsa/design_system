import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumbs } from '../../BuildingBlocks/Breadcrumbs/Breadcrumbs';
import { BreadcrumbsDocs } from '../../BuildingBlocks/Breadcrumbs/BreadcrumbsDocs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Atoms/Navigation/Breadcrumbs',
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
      { label: 'Finance', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Finance' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

/* ── Documentation (first, as required) ── */
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

/* ── All Sizes — matches the Figma design exactly ── */
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-24px)',
        padding: 'var(--global-spacing-sizing-24px)',
      }}
    >
      <Breadcrumbs
        size="lg"
        items={[
          { label: 'Finance', href: '#' },
          { label: 'Finance', href: '#' },
          { label: 'Finance' },
        ]}
      />
      <Breadcrumbs
        size="default"
        items={[
          { label: 'Finance', href: '#' },
          { label: 'Finance', href: '#' },
          { label: 'Finance' },
        ]}
      />
      <Breadcrumbs
        size="sm"
        items={[
          { label: 'Finance', href: '#' },
          { label: 'Finance', href: '#' },
          { label: 'Finance' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Size / Small ── */
export const Small: Story = {
  name: 'Size / Small',
  args: {
    size: 'sm',
    items: [
      { label: 'Finance', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Finance' },
    ],
  },
};

/* ── Size / Default ── */
export const Default: Story = {
  name: 'Size / Default',
  args: {
    size: 'default',
    items: [
      { label: 'Finance', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Finance' },
    ],
  },
};

/* ── Size / Large ── */
export const Large: Story = {
  name: 'Size / Large',
  args: {
    size: 'lg',
    items: [
      { label: 'Finance', href: '#' },
      { label: 'Finance', href: '#' },
      { label: 'Finance' },
    ],
  },
};

/* ── Two-level trail ── */
export const TwoLevel: Story = {
  name: 'Trail / Two Level',
  args: {
    size: 'default',
    items: [
      { label: 'Finance', href: '#' },
      { label: 'Finance' },
    ],
  },
};

/* ── Deep trail ── */
export const DeepTrail: Story = {
  name: 'Trail / Deep',
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
