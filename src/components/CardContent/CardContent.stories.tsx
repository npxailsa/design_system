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
const ALL_VARIANTS: CardContentVariant[] = ['notification', 'image'];

const meta: Meta<typeof CardContent> = {
  title: 'Atoms/CardContent',
  component: CardContent,
  parameters: {
    docs: {
      page: () => <CardContentDocs />,
    },
  },
  argTypes: {
    variant: { control: 'select', options: ALL_VARIANTS },
    status: { control: 'select', options: ALL_STATUSES },
    size: { control: 'select', options: ALL_SIZES },
    heading: { control: 'text' },
    body: { control: 'text' },
    count: { control: 'number' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    ratingCount: { control: 'number' },
    border: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    showBody: { control: 'boolean' },
    showActions: { control: 'boolean' },
    showDismiss: { control: 'boolean' },
    showRating: { control: 'boolean' },
    showImage: { control: 'boolean' },
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'vertical — icon above text (default); horizontal — icon left, content right',
    },
    buttonGroupType: {
      control: 'select',
      options: ['label', 'icon'],
      description: 'Button type: label (icon + text + arrow) or icon (square icon-only)',
    },
    buttonGroupVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    buttonGroupSpecial: {
      control: 'select',
      options: ['default', 'alt'],
      description: 'Label style: default (solid) or alt (tinted/outlined)',
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
    status: 'info',
    size: 'default',
    heading: 'This is a heading',
    body: 'This is a body description providing useful context for the card content.',
    count: 4,
    rating: 4,
    ratingCount: 128,
    border: true,
    showIcon: true,
    showBody: true,
    showActions: true,
    showDismiss: false,
    showRating: true,
    showImage: true,
    alignment: 'vertical',
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
  flexWrap: 'wrap',
  alignItems: 'flex-start',
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
  args: { variant: 'notification', status: 'error', heading: 'Error heading', count: 4 },
};

export const NotificationWarning: Story = {
  name: 'Notification / Warning',
  args: { variant: 'notification', status: 'warning', heading: 'Warning heading', count: 4 },
};

export const NotificationSuccess: Story = {
  name: 'Notification / Success',
  args: { variant: 'notification', status: 'success', heading: 'Success heading', count: 4 },
};

export const NotificationInfo: Story = {
  name: 'Notification / Info',
  args: { variant: 'notification', status: 'info', heading: 'Info heading', count: 4 },
};

export const NotificationDefault: Story = {
  name: 'Notification / Default',
  args: { variant: 'notification', status: 'default', heading: 'Default heading', count: 4 },
};

export const NotificationLightGray: Story = {
  name: 'Notification / Light Gray',
  args: { variant: 'notification', status: 'light-gray', heading: 'Light gray heading', count: 4 },
};

export const NotificationNavy: Story = {
  name: 'Notification / Navy',
  args: { variant: 'notification', status: 'navy', heading: 'Navy heading', count: 4 },
};

export const NotificationPurple: Story = {
  name: 'Notification / Purple',
  args: { variant: 'notification', status: 'purple', heading: 'Purple heading', count: 4 },
};

export const NotificationWhite: Story = {
  name: 'Notification / White',
  args: { variant: 'notification', status: 'white', heading: 'White heading', count: 4 },
};

/* ── Image card ─────────────────────────────────────────────────────────── */

export const ImageCard: Story = {
  name: 'Image Card / Default',
  args: { variant: 'image', size: 'default', rating: 4, ratingCount: 128 },
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

/* ── All 9 Status Types ─────────────────────────────────────────────────── */

export const AllStatusTypes: Story = {
  name: 'All 9 Status Types',
  render: (args) => (
    <div style={gridWrap}>
      {ALL_STATUSES.map((status) => (
        <CardContent
          key={status}
          {...args}
          variant="notification"
          status={status}
          heading={`${status} heading`}
          count={4}
        />
      ))}
    </div>
  ),
  args: { size: 'default', border: true },
  parameters: { controls: { include: ['size', 'border', 'showIcon', 'showBody', 'showActions', 'showDismiss'] } },
};

/* ── All Sizes — Notification ────────────────────────────────────────────── */

export const AllSizesNotification: Story = {
  name: 'All Sizes / Notification',
  render: (args) => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <CardContent key={size} {...args} variant="notification" size={size} />
      ))}
    </div>
  ),
  args: { status: 'info', heading: 'Info heading', count: 4 },
};

/* ── All Sizes — Image ───────────────────────────────────────────────────── */

export const AllSizesImage: Story = {
  name: 'All Sizes / Image',
  render: (args) => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <CardContent key={size} {...args} variant="image" size={size} />
      ))}
    </div>
  ),
  args: { rating: 4, ratingCount: 128 },
};

/* ── Border — With vs Without ────────────────────────────────────────────── */

export const BorderVariants: Story = {
  name: 'Border / With vs Without',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column' }}>
      <div>
        <p style={sectionLabel}>Notification — Border True vs False</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
          {ALL_STATUSES.map((status) => (
            <React.Fragment key={status}>
              <CardContent variant="notification" status={status} size="default" heading={`${status} — border`} count={4} border={true} />
              <CardContent variant="notification" status={status} size="default" heading={`${status} — no border`} count={4} border={false} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <p style={sectionLabel}>Image — Border True vs False</p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <CardContent variant="image" size="default" heading="With border" rating={4} ratingCount={128} border={true} />
          <CardContent variant="image" size="default" heading="No border" rating={4} ratingCount={128} border={false} />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full Status × Size × Border Matrix (notification) ───────────────────── */

export const AllStatusesAllSizes: Story = {
  name: 'All Statuses × All Sizes',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {ALL_STATUSES.map((status) => (
        <div key={status}>
          <p style={sectionLabel}>
            {status} — small · default · large (border) | small · default · large (no border)
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
            {ALL_SIZES.map((size) => (
              <CardContent key={`${size}-b`} variant="notification" status={status} size={size} heading={`${status} heading`} count={4} border={true} />
            ))}
            {ALL_SIZES.map((size) => (
              <CardContent key={`${size}-nb`} variant="notification" status={status} size={size} heading={`${status} heading`} count={4} border={false} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image — All Sizes × Both Borders ────────────────────────────────────── */

export const AllSizesImageBorderMatrix: Story = {
  name: 'All Sizes / Image × Border Matrix',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {([true, false] as const).map((hasBorder) => (
        <div key={String(hasBorder)}>
          <p style={sectionLabel}>Image — Border: {hasBorder ? 'True' : 'False'}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
            {ALL_SIZES.map((size) => (
              <CardContent key={size} variant="image" size={size} heading="This is a heading" rating={4} ratingCount={128} border={hasBorder} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image — All Sizes with photo ────────────────────────────────────────── */

export const AllSizesImageWithPhoto: Story = {
  name: 'All Sizes / Image + Photo',
  render: () => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          variant="image"
          size={size}
          heading="This is a heading"
          rating={4.5}
          ratingCount={87}
          imageSrc="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          imageAlt="City skyline"
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Horizontal Alignment ────────────────────────────────────────────────── */

export const HorizontalAlignment: Story = {
  name: 'Horizontal Alignment',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <p style={sectionLabel}>All statuses — horizontal layout (small)</p>
      {ALL_STATUSES.slice(0, 4).map((status) => (
        <CardContent
          key={status}
          variant="notification"
          status={status}
          size="small"
          alignment="horizontal"
          heading={`${status} heading`}
          body="Body text that wraps within the card alongside the action buttons."
        />
      ))}
      <p style={{ ...sectionLabel, marginTop: '16px' }}>Default size — horizontal</p>
      {ALL_STATUSES.slice(0, 4).map((status) => (
        <CardContent
          key={status}
          variant="notification"
          status={status}
          size="default"
          alignment="horizontal"
          heading={`${status} heading`}
          body="Body text that wraps within the card alongside the action buttons."
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Toggleable Sub-Elements ─────────────────────────────────────────────── */

export const ToggleableElements: Story = {
  name: 'Toggleable Sub-Elements',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {/* Notification toggles */}
      <div>
        <p style={sectionLabel}>Notification — showIcon · showBody · showActions combinations</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
          <CardContent variant="notification" status="info" heading="All visible" count={4} />
          <CardContent variant="notification" status="info" heading="No icon" count={4} showIcon={false} />
          <CardContent variant="notification" status="info" heading="No body" count={4} showBody={false} />
          <CardContent variant="notification" status="info" heading="No actions" showActions={false} />
          <CardContent variant="notification" status="info" heading="Heading only" showIcon={false} showBody={false} showActions={false} />
          <CardContent variant="notification" status="info" heading="Icon + heading" showBody={false} showActions={false} />
        </div>
      </div>
      {/* Image toggles */}
      <div>
        <p style={sectionLabel}>Image — showImage · showBody · showActions · showRating combinations</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
          <CardContent variant="image" heading="All visible" rating={4} ratingCount={128} />
          <CardContent variant="image" heading="No image" rating={4} ratingCount={128} showImage={false} />
          <CardContent variant="image" heading="No body" rating={4} ratingCount={128} showBody={false} />
          <CardContent variant="image" heading="No actions" rating={4} ratingCount={128} showActions={false} />
          <CardContent variant="image" heading="No rating" showRating={false} />
          <CardContent variant="image" heading="Heading only" showImage={false} showBody={false} showActions={false} showRating={false} />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Dismiss Button ──────────────────────────────────────────────────────── */

export const DismissButton: Story = {
  name: 'Dismiss Button',
  render: () => (
    <div style={gridWrap}>
      {ALL_STATUSES.map((status) => (
        <CardContent
          key={status}
          variant="notification"
          status={status}
          size="default"
          heading={`${status} — dismissible`}
          count={4}
          showDismiss={true}
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Dismiss + All Sizes ─────────────────────────────────────────────────── */

export const DismissAllSizes: Story = {
  name: 'Dismiss / All Sizes',
  render: () => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          variant="notification"
          status="default"
          size={size}
          heading="With dismiss"
          showDismiss={true}
          count={4}
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── ButtonGroup Variants ────────────────────────────────────────────────── */

export const ButtonGroupVariants: Story = {
  name: 'ButtonGroup Variants',
  render: () => (
    <div style={gridWrap}>
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((bgVariant) => (
        <CardContent
          key={bgVariant}
          variant="notification"
          status="info"
          heading={`${bgVariant} buttons`}
          body="ButtonGroup variant demonstration."
          count={4}
          buttonGroupVariant={bgVariant}
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── ButtonGroup Joined Layout ───────────────────────────────────────────── */

export const ButtonGroupJoined: Story = {
  name: 'ButtonGroup / Joined Layout',
  render: () => (
    <div style={gridWrap}>
      <CardContent variant="notification" status="info" heading="Joined layout" count={4} buttonGroupLayout="joined" buttonGroupCount={4} />
      <CardContent variant="image" heading="Joined layout" rating={4} ratingCount={128} buttonGroupLayout="joined" buttonGroupCount={4} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full 9-Status × Toggle Matrix ───────────────────────────────────────── */

export const FullToggleMatrix: Story = {
  name: 'Full Toggle Matrix',
  render: () => {
    const toggleCombos = [
      { label: 'All on', showIcon: true, showBody: true, showActions: true, showDismiss: false },
      { label: 'No icon', showIcon: false, showBody: true, showActions: true, showDismiss: false },
      { label: 'No body', showIcon: true, showBody: false, showActions: true, showDismiss: false },
      { label: 'No actions', showIcon: true, showBody: true, showActions: false, showDismiss: false },
      { label: 'With dismiss', showIcon: true, showBody: true, showActions: true, showDismiss: true },
      { label: 'Minimal', showIcon: false, showBody: false, showActions: false, showDismiss: true },
    ];
    return (
      <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
        {ALL_STATUSES.map((status) => (
          <div key={status}>
            <p style={sectionLabel}>{status}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
              {toggleCombos.map(({ label, ...toggles }) => (
                <CardContent
                  key={label}
                  variant="notification"
                  status={status}
                  size="default"
                  heading={label}
                  count={4}
                  {...toggles}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
