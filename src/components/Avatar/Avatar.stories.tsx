import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarDocs } from './AvatarDocs';
import type { AvatarSize, AvatarType, AvatarShape } from './Avatar';

const DEMO_PHOTO =
  'https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F66ca08e7a8064c219b23a01fe8b9a4fd?format=webp&width=200&height=200';

const ALL_SIZES: AvatarSize[] = ['x-small', 'small', 'default', 'large'];
const ALL_TYPES: AvatarType[] = ['empty-state', 'profile-photo', 'initial-light', 'initial-dark'];
const ALL_SHAPES: AvatarShape[] = ['square', 'circle'];

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: () => <AvatarDocs />,
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ALL_TYPES,
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
    },
    shape: {
      control: 'select',
      options: ALL_SHAPES,
    },
    border: {
      control: 'boolean',
    },
    statusIcon: {
      control: 'boolean',
    },
    initials: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: false,
    initials: 'A',
    src: DEMO_PHOTO,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/* ── Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <AvatarDocs />,
};

/* ── Playground ── */
export const Playground: Story = {
  name: 'Playground',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: true,
    src: DEMO_PHOTO,
  },
};

/* ── Type stories ── */
export const EmptyState: Story = {
  name: 'Empty State',
  args: { type: 'empty-state', size: 'default', shape: 'square' },
};

export const ProfilePhoto: Story = {
  name: 'Profile Photo',
  args: { type: 'profile-photo', size: 'default', shape: 'square', src: DEMO_PHOTO },
};

export const InitialLight: Story = {
  name: 'Initial — Light',
  args: { type: 'initial-light', size: 'default', shape: 'square', initials: 'A' },
};

export const InitialDark: Story = {
  name: 'Initial — Dark',
  args: { type: 'initial-dark', size: 'default', shape: 'square', initials: 'A' },
};

/* ── Shape stories ── */
export const Square: Story = {
  args: { type: 'profile-photo', size: 'default', shape: 'square', src: DEMO_PHOTO },
};

export const Circle: Story = {
  args: { type: 'profile-photo', size: 'default', shape: 'circle', src: DEMO_PHOTO },
};

/* ── Border ── */
export const WithBorder: Story = {
  name: 'With Border',
  args: { type: 'profile-photo', size: 'default', shape: 'square', border: true, src: DEMO_PHOTO },
};

/* ── Status badge ── */
export const WithStatusBadge: Story = {
  name: 'With Status Badge',
  args: { type: 'profile-photo', size: 'default', shape: 'square', statusIcon: true, src: DEMO_PHOTO },
};

/* ── All sizes ── */
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', padding: '12px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar type="profile-photo" size={size} shape="square" src={DEMO_PHOTO} statusIcon />
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-600)' }}>
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
};

/* ── Full grid: type × size × shape ── */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {ALL_SHAPES.map((shape) => (
        <div key={shape}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px', textTransform: 'capitalize' }}>
            Shape: {shape}
          </div>
          {/* No border */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ALL_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '100px', flexShrink: 0 }}>
                  {type}
                </div>
                {ALL_SIZES.map((size) => (
                  <Avatar
                    key={size}
                    type={type}
                    size={size}
                    shape={shape}
                    border={false}
                    statusIcon
                    src={DEMO_PHOTO}
                    initials="A"
                  />
                ))}
                <div style={{ width: '16px' }} />
                {/* Border true */}
                {ALL_SIZES.map((size) => (
                  <Avatar
                    key={`${size}-border`}
                    type={type}
                    size={size}
                    shape={shape}
                    border
                    statusIcon
                    src={DEMO_PHOTO}
                    initials="A"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
