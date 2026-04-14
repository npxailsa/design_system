import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarDocs } from './AvatarDocs';
import type { AvatarSize, AvatarType, AvatarShape } from './Avatar';

const DEMO_PHOTO_WOMAN =
  'https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const DEMO_PHOTO_MAN =
  'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

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
    src: DEMO_PHOTO_WOMAN,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/* ── Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <AvatarDocs />,
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
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
    src: DEMO_PHOTO_WOMAN,
  },
};

export const Default: Story = {
  name: 'Default',
  args: { type: 'profile-photo', size: 'default', shape: 'square', src: DEMO_PHOTO_WOMAN },
};

export const StatusEmptyState: Story = {
  name: 'Status / Empty State',
  args: { type: 'empty-state', size: 'default', shape: 'square' },
};

export const StatusProfilePhoto: Story = {
  name: 'Status / Profile Photo',
  args: { type: 'profile-photo', size: 'default', shape: 'square', src: DEMO_PHOTO_WOMAN },
};

export const StatusInitial: Story = {
  name: 'Status / Initial',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Avatar type="initial-light" size="default" shape="square" initials="A" />
      <Avatar type="initial-dark" size="default" shape="square" initials="A" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusWithBorder: Story = {
  name: 'Status / With Border',
  args: { type: 'profile-photo', size: 'default', shape: 'square', border: true, src: DEMO_PHOTO_WOMAN },
};

export const StatusWithStatusBadge: Story = {
  name: 'Status / With Status Badge',
  args: { type: 'profile-photo', size: 'default', shape: 'square', statusIcon: true, src: DEMO_PHOTO_WOMAN },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
      {[['Empty state', <Avatar type="empty-state" size="default" shape="square" />, '--avatar-size-default / --avatar-bg-empty'], ['Profile photo', <Avatar type="profile-photo" size="default" shape="square" src={DEMO_PHOTO_WOMAN} />, '--avatar-size-default'], ['Initial light', <Avatar type="initial-light" size="default" shape="square" initials="JD" />, '--avatar-initial-size-default'], ['With border', <Avatar type="profile-photo" size="default" shape="square" border src={DEMO_PHOTO_WOMAN} />, '--avatar-border'], ['With badge', <Avatar type="profile-photo" size="default" shape="square" statusIcon src={DEMO_PHOTO_WOMAN} />, '--avatar-badge-size']].map(([lbl, el, tok]) => (
        <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          {el as React.ReactElement}
          <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)', color: 'var(--global-color-neutral-gray-600)' }}>{lbl as string}</span>
          <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px', textAlign: 'center' }}>{tok as string}</code>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '24px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      <Avatar type="empty-state" size="default" shape="square" />
      <Avatar type="profile-photo" size="default" shape="square" src={DEMO_PHOTO_WOMAN} />
      <Avatar type="profile-photo" size="default" shape="circle" src={DEMO_PHOTO_WOMAN} />
      <Avatar type="initial-light" size="default" shape="square" initials="JD" />
      <Avatar type="profile-photo" size="default" shape="square" border statusIcon src={DEMO_PHOTO_WOMAN} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* Legacy stories below */
export const AllSizes: Story = {
  name: 'All Sizes (legacy)',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px', padding: '12px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Avatar type="profile-photo" size={size} shape="square" src={DEMO_PHOTO_WOMAN} statusIcon />
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-600)' }}>
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
};

/* ── With Status Icon (all types × shapes) ── */
export const WithStatusIconAllTypes: Story = {
  name: 'With Status Icon — All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {ALL_SHAPES.map((shape) => (
        <div key={shape}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px', textTransform: 'capitalize' }}>
            Shape: {shape}
          </div>
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
                    statusIcon
                    src={DEMO_PHOTO_WOMAN}
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

/* ── Without Status Indicator (all types × shapes) ── */
export const WithoutStatusIndicator: Story = {
  name: 'Without Status Indicator — All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {ALL_SHAPES.map((shape) => (
        <div key={shape}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px', textTransform: 'capitalize' }}>
            Shape: {shape}
          </div>
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
                    statusIcon={false}
                    src={DEMO_PHOTO_WOMAN}
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

/* ── Full grid: type × size × shape ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (64 variants)',
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
                    src={DEMO_PHOTO_WOMAN}
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
                    src={DEMO_PHOTO_WOMAN}
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
