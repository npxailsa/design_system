import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardContent } from './CardContent';
import { CardContentDocs } from './CardContentDocs';
import type { CardContentStatus, CardContentSize, CardContentVariant } from './CardContent';

const ALL_STATUSES: CardContentStatus[] = ['error', 'warning', 'success', 'info'];
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
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
    },
    status: {
      control: 'select',
      options: ALL_STATUSES,
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
    },
    heading: { control: 'text' },
    body: { control: 'text' },
    count: { control: 'number' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    ratingCount: { control: 'number' },
    border: { control: 'boolean' },
    buttonGroupVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
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
    buttonGroupVariant: 'primary',
    buttonGroupLayout: 'separate',
    buttonGroupCount: 2,
    buttonGroupDisabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof CardContent>;

/* ── Documentation ──────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <CardContentDocs />,
  parameters: { controls: { disable: true } },
};

/* ── Playground ─────────────────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
};

/* ── Notification — Error ────────────────────────────────────────────────── */

export const NotificationError: Story = {
  name: 'Notification / Error',
  args: {
    variant: 'notification',
    status: 'error',
    heading: 'This is an error heading',
    body: 'This is a body description providing useful context for the notification.',
    count: 4,
    border: true,
  },
};

/* ── Notification — Warning ──────────────────────────────────────────────── */

export const NotificationWarning: Story = {
  name: 'Notification / Warning',
  args: {
    variant: 'notification',
    status: 'warning',
    heading: 'This is a warning heading',
    body: 'This is a body description providing useful context for the notification.',
    count: 4,
    border: true,
  },
};

/* ── Notification — Success ──────────────────────────────────────────────── */

export const NotificationSuccess: Story = {
  name: 'Notification / Success',
  args: {
    variant: 'notification',
    status: 'success',
    heading: 'This is a success heading',
    body: 'This is a body description providing useful context for the notification.',
    count: 4,
    border: true,
  },
};

/* ── Notification — Info ─────────────────────────────────────────────────── */

export const NotificationInfo: Story = {
  name: 'Notification / Info',
  args: {
    variant: 'notification',
    status: 'info',
    heading: 'This is an info heading',
    body: 'This is a body description providing useful context for the notification.',
    count: 4,
    border: true,
  },
};

/* ── Image card — default ────────────────────────────────────────────────── */

export const ImageCard: Story = {
  name: 'Image Card / Default',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'This is a heading',
    body: 'This is a body description providing useful context for the card content.',
    rating: 4,
    ratingCount: 128,
    border: true,
  },
};

/* ── Image card — with photo ─────────────────────────────────────────────── */

export const ImageCardWithPhoto: Story = {
  name: 'Image Card / With Photo',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'Ocean Escapes',
    body: 'Discover pristine beaches and coastal adventures.',
    rating: 5,
    ratingCount: 543,
    border: true,
    imageSrc:
      'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    imageAlt: 'Ocean beach',
  },
};

/* ── All Status Types ────────────────────────────────────────────────────── */

export const AllStatusTypes: Story = {
  name: 'All Notification Types',
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {ALL_STATUSES.map((status) => (
        <CardContent
          key={status}
          {...args}
          variant="notification"
          status={status}
          heading={`This is an ${status} heading`}
          body="This is a body description providing useful context."
          count={4}
        />
      ))}
    </div>
  ),
  args: { size: 'default', border: true },
  parameters: { controls: { include: ['size', 'border', 'buttonGroupVariant', 'buttonGroupLayout'] } },
};

/* ── All Sizes — Notification ────────────────────────────────────────────── */

export const AllSizesNotification: Story = {
  name: 'All Sizes / Notification',
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          {...args}
          variant="notification"
          size={size}
        />
      ))}
    </div>
  ),
  args: {
    status: 'info',
    heading: 'This is an info heading',
    body: 'This is a body description providing useful context.',
    count: 4,
    border: true,
  },
  parameters: { controls: { include: ['status', 'border', 'buttonGroupVariant', 'buttonGroupLayout'] } },
};

/* ── All Sizes — Image ───────────────────────────────────────────────────── */

export const AllSizesImage: Story = {
  name: 'All Sizes / Image',
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          {...args}
          variant="image"
          size={size}
        />
      ))}
    </div>
  ),
  args: {
    heading: 'This is a heading',
    body: 'This is a body description providing useful context.',
    rating: 4,
    ratingCount: 128,
    border: true,
  },
};

/* ── Border — With vs Without ────────────────────────────────────────────── */

export const BorderVariants: Story = {
  name: 'Border / With vs Without',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-32px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {/* Notification — with/without border */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-600)', marginBottom: '12px' }}>
          Notification — Border: True (left) vs Border: False (right)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
          {ALL_STATUSES.map((status) => (
            <React.Fragment key={status}>
              <CardContent
                variant="notification"
                status={status}
                size="default"
                heading={`${status.charAt(0).toUpperCase() + status.slice(1)} — with border`}
                body="This is a body description."
                count={4}
                border={true}
              />
              <CardContent
                variant="notification"
                status={status}
                size="default"
                heading={`${status.charAt(0).toUpperCase() + status.slice(1)} — no border`}
                body="This is a body description."
                count={4}
                border={false}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Image — with/without border */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-600)', marginBottom: '12px' }}>
          Image — Border: True (left) vs Border: False (right)
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <CardContent variant="image" size="default" heading="With border" body="Card with visible border and shadow." rating={4} ratingCount={128} border={true} />
          <CardContent variant="image" size="default" heading="No border" body="Card with border suppressed." rating={4} ratingCount={128} border={false} />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── All Status Types × All Sizes × Both Borders ─────────────────────────── */

export const AllStatusesAllSizes: Story = {
  name: 'All Statuses × All Sizes',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-32px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {ALL_STATUSES.map((status) => (
        <div key={status}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>
            {status} — small · default · large (border) | small · default · large (no border)
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
            {ALL_SIZES.map((size) => (
              <CardContent
                key={`${size}-border`}
                variant="notification"
                status={status}
                size={size}
                heading={`This is an ${status} heading`}
                body="This is a body description providing useful context."
                count={4}
                border={true}
              />
            ))}
            {ALL_SIZES.map((size) => (
              <CardContent
                key={`${size}-noborder`}
                variant="notification"
                status={status}
                size={size}
                heading={`This is an ${status} heading`}
                body="This is a body description providing useful context."
                count={4}
                border={false}
              />
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-32px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {(['true', 'false'] as const).map((borderStr) => {
        const hasBorder = borderStr === 'true';
        return (
          <div key={borderStr}>
            <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>
              Image — Border: {hasBorder ? 'True' : 'False'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
              {ALL_SIZES.map((size) => (
                <CardContent
                  key={size}
                  variant="image"
                  size={size}
                  heading="This is a heading"
                  body="This is a body description providing useful context for the card."
                  rating={4}
                  ratingCount={128}
                  border={hasBorder}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image — All Sizes with photo ────────────────────────────────────────── */

export const AllSizesImageWithPhoto: Story = {
  name: 'All Sizes / Image + Photo',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          variant="image"
          size={size}
          heading="This is a heading"
          body="This is a body description providing useful context for the card."
          rating={4.5}
          ratingCount={87}
          border={true}
          imageSrc="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          imageAlt="City skyline"
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((bgVariant) => (
        <CardContent
          key={bgVariant}
          variant="notification"
          status="info"
          size="default"
          heading={`${bgVariant} buttons`}
          body="ButtonGroup variant demonstration."
          count={4}
          border={true}
          buttonGroupVariant={bgVariant}
          buttonGroupLayout="separate"
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: 'var(--global-spacing-sizing-32px)',
        background: 'var(--global-color-neutral-gray-50)',
      }}
    >
      <CardContent
        variant="notification"
        status="info"
        size="default"
        heading="Joined layout"
        body="ButtonGroup with joined layout (4 buttons)."
        count={4}
        border={true}
        buttonGroupLayout="joined"
        buttonGroupCount={4}
      />
      <CardContent
        variant="image"
        size="default"
        heading="Joined layout"
        body="Image card with joined ButtonGroup."
        rating={4}
        ratingCount={128}
        border={true}
        buttonGroupLayout="joined"
        buttonGroupCount={4}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
