import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterSortButton } from './FilterSortButton';
import { FilterSortButtonDocs } from './FilterSortButtonDocs';
import type { FilterSortVariant, FilterSortSize } from './FilterSortButton';

const ALL_VARIANTS: FilterSortVariant[] = ['primary', 'secondary', 'tertiary', 'ghost'];
const ALL_SIZES: FilterSortSize[] = ['lg', 'md', 'sm', 'xs'];
const ALL_LABELS = ['Filter', 'Sort', 'More actions'];

const meta: Meta<typeof FilterSortButton> = {
  title: 'Atoms/Buttons/Sort & Filter Button',
  component: FilterSortButton,
  parameters: {
    docs: {
      page: () => <FilterSortButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      description: 'Visual colour variant: primary (navy), secondary (sky-blue), tertiary (yellow), ghost (outline)',
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
      description: 'Button size — xs, sm, md, lg',
    },
    label: {
      control: 'text',
      description: 'Button label text (Filter / Sort / More actions)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Filter',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof FilterSortButton>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <FilterSortButtonDocs />,
  parameters: { docs: { page: () => <FilterSortButtonDocs /> }, controls: { disable: true }, chromatic: { disableSnapshot: true } },
};

/* ── All Variants × All Sizes grid ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (32 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
      {ALL_LABELS.map((label) => (
        <div key={label}>
          <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            fontWeight: 'var(--global-type-weight-default)',
            color: 'var(--global-color-neutral-gray-600)',
            marginBottom: 'var(--global-spacing-sizing-12px)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {label}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
            {ALL_VARIANTS.map((variant) => (
              <div key={variant} style={{ display: 'flex', gap: 'var(--global-spacing-sizing-12px)', alignItems: 'center' }}>
                {ALL_SIZES.map((size) => (
                  <FilterSortButton key={size} variant={variant} size={size} label={label} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── Individual playground stories ── */
export const Primary: Story = {
  name: 'Primary',
  args: { variant: 'primary', label: 'Filter' },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: { variant: 'secondary', label: 'Filter' },
};

export const Tertiary: Story = {
  name: 'Tertiary',
  args: { variant: 'tertiary', label: 'Filter' },
};

export const Ghost: Story = {
  name: 'Ghost',
  args: { variant: 'ghost', label: 'Filter' },
};

export const FilterLabel: Story = {
  name: 'Filter',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_VARIANTS.map((variant) => (
        <FilterSortButton key={variant} variant={variant} size="md" label="Filter" />
      ))}
    </div>
  ),
};

export const SortLabel: Story = {
  name: 'Sort',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_VARIANTS.map((variant) => (
        <FilterSortButton key={variant} variant={variant} size="md" label="Sort" />
      ))}
    </div>
  ),
};

export const MoreActionsLabel: Story = {
  name: 'More Actions',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_VARIANTS.map((variant) => (
        <FilterSortButton key={variant} variant={variant} size="md" label="More actions" />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
      {ALL_VARIANTS.map((variant) => (
        <FilterSortButton key={variant} variant={variant} size="md" label="Filter" disabled />
      ))}
    </div>
  ),
};
