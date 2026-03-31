import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardContent } from './CardContent';
import { CardContentDocs } from './CardContentDocs';
import type { CardContentStatus, CardContentSize, CardContentVariant } from './CardContent';

const ALL_STATUSES: CardContentStatus[] = [
  'error', 'warning', 'success', 'info',
  'default', 'light-gray', 'navy', 'purple', 'white',
];
const ALL_SIZES: CardContentSize[] = ['small', 'default', 'large'];

const meta: Meta<typeof CardContent> = {
  title: 'Atoms/CardContent',
  component: CardContent,
  parameters: {
    docs: {
      page: () => <CardContentDocs />,
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['notification', 'image'] as CardContentVariant[] },
    status: { control: 'select', options: ALL_STATUSES },
    size: { control: 'select', options: ALL_SIZES },
    heading: { control: 'text' },
    body: { control: 'text' },
    border: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showBody: { control: 'boolean' },
    showDismiss: { control: 'boolean' },
    showActions: { control: 'boolean' },
    showRating: { control: 'boolean' },
    showImage: { control: 'boolean' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    ratingCount: { control: 'number' },
    buttonGroupType: {
      control: 'select',
      options: ['label', 'icon'],
    },
    buttonGroupVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    buttonGroupSpecial: {
      control: 'select',
      options: ['default', 'alt'],
    },
    buttonGroupLayout: {
      control: 'select',
      options: ['joined', 'separate'],
    },
    buttonGroupCount: { control: { type: 'number', min: 1, max: 6 } },
    buttonGroupDisabled: { control: 'boolean' },
  },
  args: {
    variant: 'notification',
    status: 'default',
    size: 'default',
    heading: 'This is an alert banner for the Echo app',
    body: 'This is a description for an alert banner in the Echo app',
    border: true,
    showIcon: true,
    showBody: true,
    showDismiss: true,
    showActions: true,
    showRating: true,
    showImage: true,
    rating: 4,
    ratingCount: 128,
    buttonGroupType: 'label',
    buttonGroupVariant: 'primary',
    buttonGroupSpecial: 'default',
    buttonGroupLayout: 'separate',
    buttonGroupCount: 2,
    buttonGroupDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof CardContent>;

/* ── Shared layout styles ───────────────────────────────────────────────── */

const gridWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
};

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--global-color-neutral-gray-500)',
  marginBottom: '8px',
};

/* ── Documentation ──────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <CardContentDocs />,
  parameters: { controls: { disable: true } },
};

/* ── Playground ─────────────────────────────────────────────────────────── */

export const Playground: Story = { name: 'Playground' };

/* ── Individual status stories ──────────────────────────────────────────── */

export const NotificationError: Story = {
  name: 'Notification / Error',
  args: { status: 'error' },
};

export const NotificationWarning: Story = {
  name: 'Notification / Warning',
  args: { status: 'warning' },
};

export const NotificationSuccess: Story = {
  name: 'Notification / Success',
  args: { status: 'success' },
};

export const NotificationInfo: Story = {
  name: 'Notification / Info',
  args: { status: 'info' },
};

export const NotificationDefault: Story = {
  name: 'Notification / Default',
  args: { status: 'default' },
};

export const NotificationLightGray: Story = {
  name: 'Notification / Light Gray',
  args: { status: 'light-gray' },
};

export const NotificationNavy: Story = {
  name: 'Notification / Navy',
  args: { status: 'navy', heading: 'This is an info alert banner for the Echo app' },
};

export const NotificationPurple: Story = {
  name: 'Notification / Purple',
  args: { status: 'purple' },
};

export const NotificationWhite: Story = {
  name: 'Notification / White',
  args: { status: 'white' },
};

/* ── All 9 Status Types ─────────────────────────────────────────────────── */

export const AllStatusTypes: Story = {
  name: 'All 9 Status Types',
  render: (args) => (
    <div style={gridWrap}>
      {ALL_STATUSES.map((status) => (
        <CardContent
          key={status}
          {...args}
          status={status}
          heading={status === 'navy' ? 'This is an info alert banner for the Echo app' : 'This is an alert banner for the Echo app'}
        />
      ))}
    </div>
  ),
  args: { size: 'default', border: true },
  parameters: { controls: { include: ['size', 'border', 'showIcon', 'showBody', 'showDismiss'] } },
};

/* ── All Sizes ───────────────────────────────────────────────────────────── */

export const AllSizesNotification: Story = {
  name: 'All Sizes / Notification',
  render: (args) => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={sectionLabel}>{size}</p>
          <CardContent {...args} size={size} />
        </div>
      ))}
    </div>
  ),
  args: { status: 'default' },
};

/* ── Border — With vs Without ────────────────────────────────────────────── */

export const BorderVariants: Story = {
  name: 'Border / With vs Without',
  render: () => (
    <div style={gridWrap}>
      {ALL_STATUSES.map((status) => (
        <React.Fragment key={status}>
          <CardContent status={status} border={true} />
          <CardContent status={status} border={false} />
        </React.Fragment>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full Status × Size × Border Matrix ──────────────────────────────────── */

export const AllStatusesAllSizes: Story = {
  name: 'All Statuses × All Sizes',
  render: () => (
    <div style={{ ...gridWrap, gap: 'var(--global-spacing-sizing-32px)' }}>
      {ALL_STATUSES.map((status) => (
        <div key={status}>
          <p style={sectionLabel}>{status} — small · default · large (with border + without)</p>
          {ALL_SIZES.map((size) => (
            <React.Fragment key={size}>
              <CardContent status={status} size={size} border={true} />
              <div style={{ height: '4px' }} />
              <CardContent status={status} size={size} border={false} />
              <div style={{ height: '12px' }} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Toggleable Sub-Elements ─────────────────────────────────────────────── */

export const ToggleableElements: Story = {
  name: 'Toggleable Sub-Elements',
  render: () => (
    <div style={gridWrap}>
      <p style={sectionLabel}>All visible (icon + body + dismiss)</p>
      <CardContent status="default" showIcon={true} showBody={true} showDismiss={true} />

      <p style={sectionLabel}>No leading icon</p>
      <CardContent status="default" showIcon={false} showBody={true} showDismiss={true} />

      <p style={sectionLabel}>No body / subtext</p>
      <CardContent status="default" showIcon={true} showBody={false} showDismiss={true} />

      <p style={sectionLabel}>No trailing dismiss icon</p>
      <CardContent status="default" showIcon={true} showBody={true} showDismiss={false} />

      <p style={sectionLabel}>Heading only</p>
      <CardContent status="default" showIcon={false} showBody={false} showDismiss={false} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image card ─────────────────────────────────────────────────────────── */

export const ImageCard: Story = {
  name: 'Image Card / Default',
  args: { variant: 'image', size: 'default', rating: 4, ratingCount: 128, heading: 'This is a heading', body: 'This is a body description providing useful context for the card content.' },
};

export const ImageCardWithPhoto: Story = {
  name: 'Image Card / With Photo',
  args: {
    variant: 'image',
    heading: 'Ocean Escapes',
    body: 'Discover pristine beaches and coastal adventures.',
    rating: 5,
    ratingCount: 543,
    imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    imageAlt: 'Ocean beach',
  },
};

/* ── All Sizes — Image ───────────────────────────────────────────────────── */

export const AllSizesImage: Story = {
  name: 'All Sizes / Image',
  render: (args) => (
    <div style={{ ...gridWrap, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {ALL_SIZES.map((size) => (
        <CardContent key={size} {...args} variant="image" size={size} heading="This is a heading" body="This is a body description providing useful context for the card content." />
      ))}
    </div>
  ),
  args: { rating: 4, ratingCount: 128 },
};
