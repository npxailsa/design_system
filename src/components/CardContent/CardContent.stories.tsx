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
    imagePosition: { control: 'select', options: ['top', 'left', 'right'] },
    buttonGroupType: { control: 'select', options: ['label', 'icon'] },
    buttonGroupVariant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost'] },
    buttonGroupSpecial: { control: 'select', options: ['default', 'alt'] },
    buttonGroupLayout: { control: 'select', options: ['joined', 'separate'] },
    buttonGroupCount: { control: { type: 'number', min: 1, max: 6 } },
    buttonGroupDisabled: { control: 'boolean' },
  },
  args: {
    variant: 'notification',
    status: 'info',
    size: 'default',
    heading: 'This is a heading',
    body: 'This is body text that can span multiple lines within the card.',
    
    rating: 4,
    ratingCount: 128,
    border: true,
    showIcon: true,
    showBody: true,
    showActions: true,
    showDismiss: false,
    showRating: true,
    showImage: true,
    imagePosition: 'top',
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
  width: '100%',
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
  args: { status: 'error', heading: 'This is an error heading' },
};

export const NotificationWarning: Story = {
  name: 'Notification / Warning',
  args: { status: 'warning', heading: 'This is a warning heading' },
};

export const NotificationSuccess: Story = {
  name: 'Notification / Success',
  args: { status: 'success', heading: 'This is a success heading' },
};

export const NotificationInfo: Story = {
  name: 'Notification / Info',
  args: { status: 'info', heading: 'This is an info heading' },
};

export const NotificationDefault: Story = {
  name: 'Notification / Default',
  args: { status: 'default', heading: 'This is a heading' },
};

export const NotificationLightGray: Story = {
  name: 'Notification / Light Gray',
  args: { status: 'light-gray', heading: 'This is a heading' },
};

export const NotificationNavy: Story = {
  name: 'Notification / Navy',
  args: { status: 'navy', heading: 'This is an info heading' },
};

export const NotificationPurple: Story = {
  name: 'Notification / Purple',
  args: { status: 'purple', heading: 'This is a heading' },
};

export const NotificationWhite: Story = {
  name: 'Notification / White',
  args: { status: 'white', heading: 'This is a heading' },
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
  args: { status: 'info', heading: 'This is an info heading' },
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
      <p style={sectionLabel}>Notification — Border True vs False</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
        {ALL_STATUSES.map((status) => (
          <React.Fragment key={status}>
            <CardContent variant="notification" status={status} size="default" heading={`${status} — border`} border={true} />
            <CardContent variant="notification" status={status} size="default" heading={`${status} — no border`} border={false} />
          </React.Fragment>
        ))}
      </div>
      <p style={sectionLabel}>Image — Border True vs False</p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <CardContent variant="image" size="default" heading="With border" rating={4} ratingCount={128} border={true} />
        <CardContent variant="image" size="default" heading="No border" rating={4} ratingCount={128} border={false} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full Status × Size × Border Matrix ──────────────────────────────────── */

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
              <CardContent key={`${size}-b`} variant="notification" status={status} size={size} heading={`${status} heading`} border={true} />
            ))}
            {ALL_SIZES.map((size) => (
              <CardContent key={`${size}-nb`} variant="notification" status={status} size={size} heading={`${status} heading`} border={false} />
            ))}
          </div>
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
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      <div>
        <p style={sectionLabel}>Notification — showIcon · showBody · showActions combinations</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
          <CardContent variant="notification" status="info" heading="All visible" />
          <CardContent variant="notification" status="info" heading="No icon" showIcon={false} />
          <CardContent variant="notification" status="info" heading="No body" showBody={false} />
          <CardContent variant="notification" status="info" heading="No actions" showActions={false} />
          <CardContent variant="notification" status="info" heading="Icon + heading" showBody={false} showActions={false} />
          <CardContent variant="notification" status="info" heading="Heading only" showIcon={false} showBody={false} showActions={false} />
        </div>
      </div>
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
          showDismiss={true}
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
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

/* ── Image Card — No Rating ──────────────────────────────────────────────── */

export const ImageCardNoRating: Story = {
  name: 'Image Card / No Rating',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'This is a heading',
    body: 'This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card.',
    showRating: false,
  },
};

/* ── Image Card — No Body ────────────────────────────────────────────────── */

export const ImageCardNoBody: Story = {
  name: 'Image Card / No Body',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'This is a heading',
    showBody: false,
    rating: 4,
    ratingCount: 128,
  },
};

/* ── Image Card — No Actions ─────────────────────────────────────────────── */

export const ImageCardNoActions: Story = {
  name: 'Image Card / No Actions',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'This is a heading',
    showActions: false,
    rating: 4,
    ratingCount: 128,
  },
};

/* ── Image Card — No Image ───────────────────────────────────────────────── */

export const ImageCardNoImage: Story = {
  name: 'Image Card / No Image',
  args: {
    variant: 'image',
    size: 'default',
    heading: 'This is a heading',
    showImage: false,
    rating: 4,
    ratingCount: 128,
  },
};

/* ── Image Card — All Sizes / Placeholder ─────────────────────────────────── */

export const ImageCardAllSizes: Story = {
  name: 'Image Card / All Sizes',
  render: () => (
    <div style={gridWrap}>
      {ALL_SIZES.map((size) => (
        <CardContent
          key={size}
          variant="image"
          size={size}
          heading="This is a heading"
          body="This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card."
          rating={4}
          ratingCount={128}
        />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image Card — All Sizes / Border True vs False ────────────────────────── */

export const ImageCardBorderVariants: Story = {
  name: 'Image Card / Border Variants',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      <p style={sectionLabel}>With Border</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
        {ALL_SIZES.map((size) => (
          <CardContent
            key={size}
            variant="image"
            size={size}
            heading="This is a heading"
            body="This is body text that can span multiple lines within the card."
            rating={4}
            ratingCount={128}
            border={true}
          />
        ))}
      </div>
      <p style={sectionLabel}>Without Border</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
        {ALL_SIZES.map((size) => (
          <CardContent
            key={size}
            variant="image"
            size={size}
            heading="This is a heading"
            body="This is body text that can span multiple lines within the card."
            rating={4}
            ratingCount={128}
            border={false}
          />
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Image Card — Toggle Matrix ───────────────────────────────────────────── */

export const ImageCardToggleMatrix: Story = {
  name: 'Image Card / Toggle Matrix',
  render: () => {
    const imageCombos = [
      { label: 'All visible', showImage: true, showBody: true, showActions: true, showRating: true },
      { label: 'No image', showImage: false, showBody: true, showActions: true, showRating: true },
      { label: 'No body', showImage: true, showBody: false, showActions: true, showRating: true },
      { label: 'No actions', showImage: true, showBody: true, showActions: false, showRating: true },
      { label: 'No rating', showImage: true, showBody: true, showActions: true, showRating: false },
      { label: 'Minimal', showImage: false, showBody: false, showActions: false, showRating: false },
    ];
    return (
      <div style={gridWrap}>
        {imageCombos.map(({ label, ...toggles }) => (
          <CardContent
            key={label}
            variant="image"
            size="default"
            heading={label}
            body="This is body text that can span multiple lines within the card. This is body text."
            rating={4}
            ratingCount={128}
            {...toggles}
          />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── Image Card — Real Photo Gallery ─────────────────────────────────────── */

export const ImageCardPhotoGallery: Story = {
  name: 'Image Card / Photo Gallery',
  render: () => {
    const cards = [
      {
        heading: 'Mountain Adventures',
        body: 'Experience breathtaking peaks and alpine trails.',
        rating: 4.5,
        ratingCount: 312,
        imageSrc: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'Mountain landscape',
      },
      {
        heading: 'Ocean Escapes',
        body: 'Discover pristine beaches and coastal adventures.',
        rating: 5,
        ratingCount: 543,
        imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'Ocean beach',
      },
      {
        heading: 'City Exploration',
        body: 'Uncover the hidden gems of urban landscapes.',
        rating: 4,
        ratingCount: 187,
        imageSrc: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'City skyline',
      },
      {
        heading: 'Forest Retreats',
        body: 'Reconnect with nature in ancient woodland settings.',
        rating: 4.5,
        ratingCount: 94,
        imageSrc: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'Forest path',
      },
      {
        heading: 'Desert Journeys',
        body: 'Explore vast dunes and arid landscapes at sunrise.',
        rating: 3.5,
        ratingCount: 76,
        imageSrc: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'Desert sand dunes',
      },
      {
        heading: 'Arctic Expeditions',
        body: 'Witness the northern lights and icy tundra vistas.',
        rating: 5,
        ratingCount: 228,
        imageSrc: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
        imageAlt: 'Arctic ice and sky',
      },
    ];
    return (
      <div style={gridWrap}>
        {cards.map((card) => (
          <CardContent
            key={card.heading}
            variant="image"
            size="default"
            {...card}
          />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── Image Card — All Sizes / Photo Gallery ───────────────────────────────── */

export const ImageCardPhotoGalleryAllSizes: Story = {
  name: 'Image Card / Photo Gallery All Sizes',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={sectionLabel}>{size}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
            {[
              {
                heading: 'Mountain Adventures',
                body: 'Experience breathtaking peaks and alpine trails.',
                rating: 4.5,
                ratingCount: 312,
                imageSrc: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
                imageAlt: 'Mountain landscape',
              },
              {
                heading: 'Ocean Escapes',
                body: 'Discover pristine beaches and coastal adventures.',
                rating: 5,
                ratingCount: 543,
                imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
                imageAlt: 'Ocean beach',
              },
              {
                heading: 'City Exploration',
                body: 'Uncover the hidden gems of urban landscapes.',
                rating: 4,
                ratingCount: 187,
                imageSrc: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&fit=crop',
                imageAlt: 'City skyline',
              },
            ].map((card) => (
              <CardContent
                key={card.heading}
                variant="image"
                size={size}
                {...card}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Horizontal Image Cards — Image Left ────────────────────────────────── */

export const ImageCardHorizontalLeft: Story = {
  name: 'Image Card / Horizontal Left',
  args: {
    variant: 'image',
    imagePosition: 'left',
    size: 'default',
    heading: 'Mountain Adventures',
    body: 'Experience breathtaking peaks and alpine trails across the world.',
    rating: 4.5,
    ratingCount: 312,
    imageSrc: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    imageAlt: 'Mountain landscape',
  },
  parameters: { controls: { include: ['size', 'heading', 'body', 'rating', 'ratingCount', 'border', 'showBody', 'showActions', 'showRating', 'showImage'] } },
};

export const ImageCardHorizontalRight: Story = {
  name: 'Image Card / Horizontal Right',
  args: {
    variant: 'image',
    imagePosition: 'right',
    size: 'default',
    heading: 'Ocean Escapes',
    body: 'Discover pristine beaches and coastal adventures in warm tropical waters.',
    rating: 5,
    ratingCount: 543,
    imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    imageAlt: 'Ocean beach',
  },
  parameters: { controls: { include: ['size', 'heading', 'body', 'rating', 'ratingCount', 'border', 'showBody', 'showActions', 'showRating', 'showImage'] } },
};

/* ── Horizontal Image Cards — All Sizes ─────────────────────────────────── */

export const ImageCardHorizontalAllSizes: Story = {
  name: 'Image Card / Horizontal All Sizes',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {(['left', 'right'] as const).map((pos) => (
        <div key={pos}>
          <p style={sectionLabel}>Image {pos} — small · default · large</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
            {ALL_SIZES.map((size) => (
              <CardContent
                key={`${pos}-${size}`}
                variant="image"
                imagePosition={pos}
                size={size}
                heading="This is a heading"
                body="This is body text that can span multiple lines within the card."
                rating={4}
                ratingCount={128}
                imageSrc="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                imageAlt="Mountain landscape"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Horizontal Image Cards — Photo Gallery ─────────────────────────────── */

export const ImageCardHorizontalPhotoGallery: Story = {
  name: 'Image Card / Horizontal Photo Gallery',
  render: () => {
    const cards = [
      {
        heading: 'Mountain Adventures',
        body: 'Experience breathtaking peaks and alpine trails across stunning landscapes.',
        rating: 4.5,
        ratingCount: 312,
        imageSrc: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        imageAlt: 'Mountain landscape',
        imagePosition: 'left' as const,
      },
      {
        heading: 'Ocean Escapes',
        body: 'Discover pristine beaches and coastal adventures in warm tropical waters.',
        rating: 5,
        ratingCount: 543,
        imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        imageAlt: 'Ocean beach',
        imagePosition: 'right' as const,
      },
      {
        heading: 'City Exploration',
        body: 'Uncover the hidden gems and vibrant culture of urban landscapes.',
        rating: 4,
        ratingCount: 187,
        imageSrc: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        imageAlt: 'City skyline',
        imagePosition: 'left' as const,
      },
      {
        heading: 'Forest Retreats',
        body: 'Reconnect with nature in ancient woodland settings far from the city.',
        rating: 4.5,
        ratingCount: 94,
        imageSrc: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        imageAlt: 'Forest path',
        imagePosition: 'right' as const,
      },
    ];
    return (
      <div style={{ ...gridWrap, flexDirection: 'column' }}>
        {cards.map((card) => (
          <CardContent
            key={card.heading}
            variant="image"
            size="default"
            {...card}
          />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── Horizontal Image Cards — Border Variants ───────────────────────────── */

export const ImageCardHorizontalBorderVariants: Story = {
  name: 'Image Card / Horizontal Border Variants',
  render: () => (
    <div style={{ ...gridWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      <p style={sectionLabel}>Image Left — With / Without Border</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
        <CardContent
          variant="image"
          imagePosition="left"
          size="default"
          heading="With border"
          body="This card has a visible border and drop shadow."
          rating={4}
          ratingCount={128}
          imageSrc="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          imageAlt="City skyline"
          border={true}
        />
        <CardContent
          variant="image"
          imagePosition="left"
          size="default"
          heading="Without border"
          body="This card has no border and no drop shadow."
          rating={4}
          ratingCount={128}
          imageSrc="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          imageAlt="City skyline"
          border={false}
        />
      </div>
      <p style={sectionLabel}>Image Right — With / Without Border</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
        <CardContent
          variant="image"
          imagePosition="right"
          size="default"
          heading="With border"
          body="This card has a visible border and drop shadow."
          rating={4}
          ratingCount={128}
          imageSrc="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          imageAlt="Mountain landscape"
          border={true}
        />
        <CardContent
          variant="image"
          imagePosition="right"
          size="default"
          heading="Without border"
          body="This card has no border and no drop shadow."
          rating={4}
          ratingCount={128}
          imageSrc="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
          imageAlt="Mountain landscape"
          border={false}
        />
      </div>
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
          buttonGroupVariant={bgVariant}
        />
      ))}
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
