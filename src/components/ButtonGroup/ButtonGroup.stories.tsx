import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDocs } from './ButtonGroupDocs';
import type { ButtonGroupVariant, ButtonGroupSize, ButtonGroupLayout } from './ButtonGroup';

const ALL_VARIANTS: ButtonGroupVariant[] = ['primary', 'secondary', 'tertiary', 'ghost'];
const ALL_SIZES: ButtonGroupSize[] = ['lg', 'md', 'sm', 'xs'];
const ALL_LAYOUTS: ButtonGroupLayout[] = ['joined', 'separate'];

const meta: Meta<typeof ButtonGroup> = {
  title: 'Atoms/Buttons/Button Group',
  component: ButtonGroup,
  parameters: {
    docs: {
      page: () => <ButtonGroupDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      description: 'Colour variant: primary (blue), secondary (sky-blue), tertiary (yellow), ghost (outline)',
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
      description: 'Button slot size — xs (28px), sm (30px), md (42px), lg (52px)',
    },
    layout: {
      control: 'select',
      options: ALL_LAYOUTS,
      description: 'joined — connected strip, no gap; separate — 6 px gap pair (primary + ghost)',
    },
    count: {
      control: { type: 'number', min: 1, max: 8 },
      description: 'Number of button slots (default: 4 joined, 2 separate)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all buttons in the group',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'joined',
    count: 4,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ButtonGroupDocs />,
  parameters: { docs: { page: () => <ButtonGroupDocs /> } },
};

/* ── All Variants × All Sizes grid ── */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {/* Separate (2-button pair) */}
      <div>
        <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: 'var(--global-type-size-primary-label-xs)',
          color: 'var(--global-color-neutral-gray-600)',
          marginBottom: 'var(--global-spacing-sizing-12px)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          Separate layout
        </div>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'center', flexWrap: 'wrap' }}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-6px)' }}>
              <ButtonGroup variant="primary" size={size} layout="separate" />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)' }}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Joined — each variant */}
      {ALL_VARIANTS.map((variant) => (
        <div key={variant}>
          <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-600)',
            marginBottom: 'var(--global-spacing-sizing-12px)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {variant} · joined
          </div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'center', flexWrap: 'wrap' }}>
            {ALL_SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-6px)' }}>
                <ButtonGroup variant={variant} size={size} layout="joined" count={4} />
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)' }}>{size}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── Individual variant stories ── */
export const Primary: Story = {
  name: 'Primary',
  args: { variant: 'primary', layout: 'joined', count: 4 },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: { variant: 'secondary', layout: 'joined', count: 4 },
};

export const Tertiary: Story = {
  name: 'Tertiary',
  args: { variant: 'tertiary', layout: 'joined', count: 4 },
};

export const Ghost: Story = {
  name: 'Ghost',
  args: { variant: 'ghost', layout: 'joined', count: 4 },
};

/* ── Layout stories ── */
export const Joined: Story = {
  name: 'Joined Layout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_VARIANTS.map((v) => (
        <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} />
      ))}
    </div>
  ),
};

export const Separate: Story = {
  name: 'Separate Layout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_VARIANTS.map((v) => (
        <ButtonGroup key={v} variant={v} size="md" layout="separate" />
      ))}
    </div>
  ),
};

/* ── Size stories ── */
export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'flex-start' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', width: 80 }}>{size}</span>
          <ButtonGroup variant="primary" size={size} layout="joined" count={4} />
        </div>
      ))}
    </div>
  ),
};

/* ── State stories ── */
export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <ButtonGroup variant="primary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="secondary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="tertiary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="ghost" size="md" layout="joined" count={4} disabled />
    </div>
  ),
};

export const PartialDisable: Story = {
  name: 'Partial Disable',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <ButtonGroup
        variant="primary"
        size="md"
        layout="joined"
        buttons={[{}, { disabled: true }, {}, {}]}
      />
      <ButtonGroup
        variant="ghost"
        size="md"
        layout="joined"
        buttons={[{}, {}, { disabled: true }, {}]}
      />
    </div>
  ),
};
