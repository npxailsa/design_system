import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AvatarWithText } from './AvatarWithText';
import { AvatarWithTextDocs } from './AvatarWithTextDocs';
import type { AvatarWithTextVariant } from './AvatarWithText';
import type { AvatarSize, AvatarShape, AvatarType } from './Avatar';

const DEMO_PHOTO_WOMAN =
  'https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const DEMO_PHOTO_MAN =
  'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const ALL_SIZES: AvatarSize[] = ['large', 'default', 'small', 'x-small'];
const ALL_VARIANTS: AvatarWithTextVariant[] = ['name-only', 'w-subtext', 'default'];
const ALL_SHAPES: AvatarShape[] = ['circle', 'square'];
const ALL_AVATAR_TYPES: AvatarType[] = ['empty-state', 'profile-photo', 'initial-light', 'initial-dark'];

const meta: Meta<typeof AvatarWithText> = {
  title: 'Atoms/AvatarWithText',
  component: AvatarWithText,
  parameters: {
    docs: {
      page: () => <AvatarWithTextDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
    },
    shape: {
      control: 'select',
      options: ALL_SHAPES,
    },
    avatarType: {
      control: 'select',
      options: ALL_AVATAR_TYPES,
    },
    statusIcon: { control: 'boolean' },
    border: { control: 'boolean' },
    name: { control: 'text' },
    subtext: { control: 'text' },
    email: { control: 'text' },
    initials: { control: 'text' },
    src: { control: 'text' },
  },
  args: {
    variant: 'name-only',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    statusIcon: false,
    border: false,
    name: 'Willow Quinn',
    subtext: 'Additional subtext (e.g role)',
    email: 'willowquin@email.com',
    initials: 'WQ',
    src: DEMO_PHOTO_WOMAN,
  },
};

export default meta;
type Story = StoryObj<typeof AvatarWithText>;

/* ── Documentation ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <AvatarWithTextDocs />,
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Playground ── */
export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'w-subtext',
    size: 'default',
    shape: 'square',
    avatarType: 'profile-photo',
    statusIcon: true,
    name: 'Damon Underwood',
    subtext: 'Additional subtext (e.g role)',
    src: DEMO_PHOTO_MAN,
  },
};

/* ── Variant stories ── */
export const NameOnly: Story = {
  name: 'Name Only',
  args: {
    variant: 'name-only',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    src: DEMO_PHOTO_WOMAN,
  },
};

export const WithSubtext: Story = {
  name: 'With Subtext',
  args: {
    variant: 'w-subtext',
    size: 'default',
    shape: 'square',
    avatarType: 'profile-photo',
    statusIcon: true,
    name: 'Damon Underwood',
    subtext: 'Additional subtext (e.g role)',
    src: DEMO_PHOTO_MAN,
  },
};

export const WithEmail: Story = {
  name: 'With Email',
  args: {
    variant: 'default',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    src: DEMO_PHOTO_WOMAN,
  },
};

/* ── All sizes — with subtext ── */
export const AllSizesWithSubtext: Story = {
  name: 'All Sizes — With Subtext',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '60px', flexShrink: 0 }}>
            {size}
          </span>
          <AvatarWithText
            variant="w-subtext"
            size={size}
            shape="square"
            avatarType="profile-photo"
            statusIcon
            name="Damon Underwood"
            subtext="Additional subtext (e.g role)"
            src={DEMO_PHOTO_MAN}
          />
        </div>
      ))}
    </div>
  ),
};

/* ── All sizes — name only ── */
export const AllSizesNameOnly: Story = {
  name: 'All Sizes — Name Only',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '60px', flexShrink: 0 }}>
            {size}
          </span>
          <AvatarWithText
            variant="name-only"
            size={size}
            shape="circle"
            avatarType="profile-photo"
            name="Willow Quinn"
            src={DEMO_PHOTO_WOMAN}
          />
        </div>
      ))}
    </div>
  ),
};

/* ── All sizes — with email ── */
export const AllSizesWithEmail: Story = {
  name: 'All Sizes — With Email',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '60px', flexShrink: 0 }}>
            {size}
          </span>
          <AvatarWithText
            variant="default"
            size={size}
            shape="circle"
            avatarType="profile-photo"
            name="Willow Quinn"
            email="willowquin@email.com"
            src={DEMO_PHOTO_WOMAN}
          />
        </div>
      ))}
    </div>
  ),
};

/* ── Full matrix ── */
export const AllVariantsAllSizes: Story = {
  name: 'All Variants × All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <AvatarWithText
            variant="w-subtext"
            size={size}
            shape="square"
            avatarType="profile-photo"
            statusIcon
            name="Damon Underwood"
            subtext="Additional subtext (e.g role)"
            src={DEMO_PHOTO_MAN}
          />
          <AvatarWithText
            variant="name-only"
            size={size}
            shape="circle"
            avatarType="profile-photo"
            name="Willow Quinn"
            src={DEMO_PHOTO_WOMAN}
          />
          <AvatarWithText
            variant="default"
            size={size}
            shape="circle"
            avatarType="profile-photo"
            name="Willow Quinn"
            email="willowquin@email.com"
            src={DEMO_PHOTO_WOMAN}
          />
        </div>
      ))}
    </div>
  ),
};
