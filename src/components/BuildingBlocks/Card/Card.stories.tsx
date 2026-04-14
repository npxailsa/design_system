import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { CardDocs } from './CardDocs';
import type { CardBg, CardSize, CardMode } from './Card';

const ALL_BG: CardBg[] = [
  'default', 'sky-blue', 'error', 'success', 'warning',
  'info-blue', 'note-purple', 'light-gray', 'black', 'blue', 'dark-gray',
];
const ALL_SIZES: CardSize[] = ['small', 'default', 'large'];
const ALL_MODES: CardMode[] = ['light', 'dark'];

const meta: Meta<typeof Card> = {
  title: 'Foundation/BuildingBlocks/Card',
  component: Card,
  parameters: {
    docs: {
      page: () => <CardDocs />,
    },
  },
  argTypes: {
    size: { control: 'select', options: ALL_SIZES },
    bg: { control: 'select', options: ALL_BG },
    mode: { control: 'select', options: ALL_MODES },
    dropShadow: { control: 'boolean' },
  },
  args: {
    size: 'default',
    bg: 'default',
    mode: 'light',
    dropShadow: true,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/* ── Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <CardDocs />,
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Playground ── */
export const Playground: Story = {
  name: 'Playground',
};

/* ── Size stories ── */
export const Small: Story = {
  name: 'Size — Small',
  args: { size: 'small', bg: 'default', dropShadow: true },
};

export const Default: Story = {
  name: 'Size — Default',
  args: { size: 'default', bg: 'default', dropShadow: true },
};

export const Large: Story = {
  name: 'Size — Large',
  args: { size: 'large', bg: 'default', dropShadow: true },
};

/* ── Shadow toggle ── */
export const WithShadow: Story = {
  name: 'With Shadow',
  args: { size: 'default', bg: 'default', dropShadow: true },
};

export const FlatNoBorder: Story = {
  name: 'Flat (No Shadow)',
  args: { size: 'default', bg: 'default', dropShadow: false },
};

/* ── Colour stories ── */
export const AllColoursLightShadow: Story = {
  name: 'All Colours — Light + Shadow',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '24px', background: 'var(--global-color-neutral-gray-100)', borderRadius: '8px' }}>
      {ALL_BG.map((bg) => (
        <Card key={bg} size="default" bg={bg} mode="light" dropShadow />
      ))}
    </div>
  ),
};

export const AllColoursLightFlat: Story = {
  name: 'All Colours — Light + Flat',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '24px', background: 'var(--global-color-neutral-gray-100)', borderRadius: '8px' }}>
      {ALL_BG.map((bg) => (
        <Card key={bg} size="default" bg={bg} mode="light" dropShadow={false} />
      ))}
    </div>
  ),
};

export const DarkModeVariants: Story = {
  name: 'Dark Mode Variants',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '24px', background: 'var(--global-color-neutral-gray-800)', borderRadius: '8px' }}>
      {(['default', 'sky-blue', 'error', 'success'] as CardBg[]).map((bg) => (
        <Card key={bg} size="default" bg={bg} mode="dark" dropShadow />
      ))}
    </div>
  ),
};

/* ── Full matrix ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (33 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize', marginBottom: '12px' }}>
            {size}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' }}>
            {ALL_BG.map((bg) => (
              <Card key={bg} size={size} bg={bg} mode="light" dropShadow />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
