import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { CardContent } from './CardContent';
import type { CardContentStatus, CardContentSize, CardContentVariant } from './CardContent';

/* ── Shared demo helpers ─────────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

const ALL_STATUSES: CardContentStatus[] = ['error', 'warning', 'success', 'info'];
const ALL_SIZES: CardContentSize[] = ['small', 'default', 'large'];

const STATUS_LABELS: Record<CardContentStatus, string> = {
  error:   'Error',
  warning: 'Warning',
  success: 'Success',
  info:    'Info',
};

export const CardContentDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="CardContent"
      subtitle="An atomic content card with two layout variants — notification (status) and image — across three sizes. Actions are rendered using the ButtonGroup component."
    />

    <DocsTemplate.BodyText>
      <strong>CardContent</strong> is an Atom-level card component that wraps content inside a
      styled card shell (white background, rounded corners, drop-shadow). Two layout variants are
      provided: <code>notification</code> for status-driven alerts (error, warning, success, info)
      and <code>image</code> for media-led content cards with ratings. All variants scale cleanly
      across <em>small</em>, <em>default</em>, and <em>large</em> sizes.
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      The action area of each card uses the <strong>ButtonGroup</strong> component
      (<code>Atoms/Buttons/ButtonGroup</code>) instead of standalone buttons. This ensures
      visual and behavioural consistency across the design system. ButtonGroup props
      (<code>buttonGroupVariant</code>, <code>buttonGroupLayout</code>,
      <code>buttonGroupCount</code>, <code>buttonGroupButtons</code>) allow full customisation
      of the button row within each card.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <CardContent
              variant="notification"
              status="error"
              size="default"
              heading="This is an error heading"
              body="This is a body description providing useful context for the notification."
              count={4}
            />
            <CardContent
              variant="image"
              size="default"
              heading="This is a heading"
              body="This is a body description providing useful context for the card content."
              rating={4}
              ratingCount={128}
            />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Card shell',
            token: '--card-content-bg, --card-content-border-radius, --card-content-shadow',
            description:
              'White background container with 6px border-radius, 0.5px border and drop-shadow.',
          },
          {
            id: 2,
            name: 'Status icon',
            token: '--card-content-error-icon / --card-content-warning-icon / etc.',
            description:
              'Status-coloured SVG icon representing severity: error ✕, warning ⚠, success ✓, info ℹ.',
          },
          {
            id: 3,
            name: 'Image area',
            token: '--card-content-image-height-default, --card-content-image-bg',
            description:
              'Full-width image or grey placeholder occupying the top portion of image cards.',
          },
          {
            id: 4,
            name: 'Heading',
            token: '--card-content-heading-color, --card-content-heading-size-default',
            description:
              'Primary label text. In notification cards the colour inherits from the status type.',
          },
          {
            id: 5,
            name: 'Body text',
            token: '--card-content-body-color, --card-content-body-size-default',
            description: 'Secondary description in neutral gray — light weight, small type scale.',
          },
          {
            id: 6,
            name: 'ButtonGroup',
            token: 'Uses ButtonGroup component tokens (see Atoms/Buttons/ButtonGroup)',
            description:
              'Action area rendered via the ButtonGroup component. Supports separate and joined layouts, all ButtonGroup variants (primary, secondary, tertiary, ghost), and responsive sizing mapped from CardContent size.',
          },
          {
            id: 7,
            name: 'Count badge',
            token: '--card-content-count-bg, --card-content-count-color',
            description: 'Optional numeric badge beside the ButtonGroup in notification cards.',
          },
          {
            id: 8,
            name: 'Star rating',
            token: '--card-content-star-color, --card-content-star-empty-color',
            description: 'Optional 5-star rating with an optional numeric count.',
          },
          {
            id: 9,
            name: 'Border',
            token: '--card-content-border-width, --card-content-border-color',
            description: 'Optional visible border (0.5px stroke) and drop shadow. Set border={false} to suppress both, producing a flat borderless card.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Notification variant — all statuses ── */}
    <DocsTemplate.Section
      title="Notification Variant — Status Types"
      subtitle="Four status types: error, warning, success, and info. Each adjusts the icon, heading colour, background tint, and border accent."
    >
      {ALL_STATUSES.map((status) => (
        <DocsTemplate.Subsection key={status} title={STATUS_LABELS[status]}>
          <div style={previewWrap}>
            {ALL_SIZES.map((size) => (
              <CardContent
                key={size}
                variant="notification"
                status={status}
                size={size}
                heading={`This is an ${status} heading`}
                body="This is a body description providing useful context."
                count={4}
              />
            ))}
          </div>
        </DocsTemplate.Subsection>
      ))}
    </DocsTemplate.Section>

    {/* ── Image variant — all sizes ── */}
    <DocsTemplate.Section
      title="Image Variant — All Sizes"
      subtitle="Image cards scale across small, default, and large. A grey placeholder is shown when no image URL is provided."
    >
      <div style={previewWrap}>
        {ALL_SIZES.map((size) => (
          <CardContent
            key={size}
            variant="image"
            size={size}
            heading="This is a heading"
            body="This is a body description providing useful context for the card content."
            rating={4}
            ratingCount={128}
          />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Notification — all sizes ── */}
    <DocsTemplate.Section
      title="Notification Variant — All Sizes"
      subtitle="Notification cards scale consistently across all three size options."
    >
      <div style={previewWrap}>
        {ALL_SIZES.map((size) => (
          <CardContent
            key={size}
            variant="notification"
            status="info"
            size={size}
            heading="This is an info heading"
            body="This is a body description providing useful context."
            count={4}
          />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Border toggle ── */}
    <DocsTemplate.Section
      title="Border Variants — With vs Without"
      subtitle="The border prop controls the card's outline and drop shadow. Border: True renders the status-accent border; Border: False suppresses it for a flat, ghost-like appearance."
    >
      <DocsTemplate.Subsection title="Notification — Border: True">
        <div style={previewWrap}>
          {ALL_STATUSES.map((status) => (
            <CardContent
              key={status}
              variant="notification"
              status={status}
              size="default"
              heading={`${status.charAt(0).toUpperCase() + status.slice(1)} — with border`}
              body="This is a body description providing useful context."
              count={4}
              border={true}
            />
          ))}
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Notification — Border: False">
        <div style={previewWrap}>
          {ALL_STATUSES.map((status) => (
            <CardContent
              key={status}
              variant="notification"
              status={status}
              size="default"
              heading={`${status.charAt(0).toUpperCase() + status.slice(1)} — no border`}
              body="This is a body description providing useful context."
              count={4}
              border={false}
            />
          ))}
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Image — Border: True vs False">
        <div style={previewWrap}>
          {ALL_SIZES.map((size) => (
            <CardContent key={`${size}-b`} variant="image" size={size} heading="With border" body="Bordered card with drop shadow." rating={4} ratingCount={128} border={true} />
          ))}
          {ALL_SIZES.map((size) => (
            <CardContent key={`${size}-nb`} variant="image" size={size} heading="No border" body="Flat card, border suppressed." rating={4} ratingCount={128} border={false} />
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Full matrix ── */}
    <DocsTemplate.Section
      title="Full Variant Matrix"
      subtitle="All 4 statuses × 3 sizes × border (True/False) — 24 notification card variants total."
    >
      {ALL_STATUSES.map((status) => (
        <DocsTemplate.Subsection key={status} title={`${STATUS_LABELS[status]} — all sizes × border`}>
          <div style={previewWrap}>
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
        </DocsTemplate.Subsection>
      ))}
    </DocsTemplate.Section>

    {/* ── ButtonGroup variants ── */}
    <DocsTemplate.Section
      title="ButtonGroup Variants"
      subtitle="The action area uses the ButtonGroup component. All four ButtonGroup variants are supported: primary, secondary, tertiary, and ghost."
    >
      <div style={previewWrap}>
        {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((bgVariant) => (
          <CardContent
            key={bgVariant}
            variant="notification"
            status="info"
            size="default"
            heading={`${bgVariant} buttons`}
            body="ButtonGroup variant demonstration."
            count={4}
            buttonGroupVariant={bgVariant}
          />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── ButtonGroup layouts ── */}
    <DocsTemplate.Section
      title="ButtonGroup Layouts"
      subtitle="Cards support both 'separate' (default, 2 buttons with gap) and 'joined' (connected buttons, no gap) layouts."
    >
      <div style={previewWrap}>
        <CardContent
          variant="notification"
          status="info"
          size="default"
          heading="Separate layout"
          body="Default layout with 2 spaced buttons."
          count={4}
          buttonGroupLayout="separate"
        />
        <CardContent
          variant="notification"
          status="info"
          size="default"
          heading="Joined layout"
          body="Connected buttons with shared borders."
          count={4}
          buttonGroupLayout="joined"
          buttonGroupCount={4}
        />
        <CardContent
          variant="image"
          size="default"
          heading="Image + joined"
          body="Image card with joined ButtonGroup."
          rating={4}
          ratingCount={128}
          buttonGroupLayout="joined"
          buttonGroupCount={4}
        />
      </div>
    </DocsTemplate.Section>

    {/* ── Image with custom image ── */}
    <DocsTemplate.Section
      title="Image Variant — With Custom Image"
      subtitle="Pass an imageSrc to replace the grey placeholder with a real image."
    >
      <div style={previewWrap}>
        <CardContent
          variant="image"
          size="small"
          heading="Landscape"
          body="A scenic view from the mountains."
          rating={5}
          ratingCount={312}
          imageSrc="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          imageAlt="Mountain landscape"
        />
        <CardContent
          variant="image"
          size="default"
          heading="City Views"
          body="Explore the best spots across the skyline."
          rating={4}
          ratingCount={87}
          imageSrc="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          imageAlt="City skyline"
        />
        <CardContent
          variant="image"
          size="large"
          heading="Ocean Escapes"
          body="Discover pristine beaches and coastal adventures."
          rating={5}
          ratingCount={543}
          imageSrc="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          imageAlt="Ocean beach"
        />
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Card Shell">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-bg', description: 'Card background colour — resolves to var(--global-color-base-white)' },
            { name: '--card-content-border-radius', description: 'Corner radius — resolves to var(--global-spacing-radius-6px) / 6px' },
            { name: '--card-content-border-width', description: 'Border stroke width — 0.5px' },
            { name: '--card-content-border-color', description: 'Default border colour — var(--global-color-neutral-gray-300)' },
            { name: '--card-content-shadow', description: 'Drop shadow — 0px 5px 10px 0px rgba(39,39,39,0.1)' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Sizes">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-width-sm', description: 'Small card width — 160px' },
            { name: '--card-content-width-default', description: 'Default card width — 220px' },
            { name: '--card-content-width-lg', description: 'Large card width — 300px' },
            { name: '--card-content-padding-sm', description: 'Small card padding — var(--global-spacing-sizing-12px)' },
            { name: '--card-content-padding-default', description: 'Default card padding — var(--global-spacing-sizing-16px)' },
            { name: '--card-content-padding-lg', description: 'Large card padding — var(--global-spacing-sizing-20px)' },
            { name: '--card-content-image-height-sm', description: 'Small image area height — 80px' },
            { name: '--card-content-image-height-default', description: 'Default image area height — 110px' },
            { name: '--card-content-image-height-lg', description: 'Large image area height — 150px' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Status Colours">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-error-bg', description: 'Error card background — var(--global-color-status-red-light)' },
            { name: '--card-content-error-border', description: 'Error border colour — var(--global-color-status-red)' },
            { name: '--card-content-error-icon', description: 'Error icon colour — var(--global-color-status-red)' },
            { name: '--card-content-error-heading', description: 'Error heading colour — var(--global-color-status-red)' },
            { name: '--card-content-warning-bg', description: 'Warning card background — var(--global-color-status-orange-light)' },
            { name: '--card-content-warning-border', description: 'Warning border colour — var(--global-color-status-orange)' },
            { name: '--card-content-warning-icon', description: 'Warning icon colour — var(--global-color-status-orange)' },
            { name: '--card-content-warning-heading', description: 'Warning heading colour — var(--global-color-status-dark-orange)' },
            { name: '--card-content-success-bg', description: 'Success card background — var(--global-color-status-green-light)' },
            { name: '--card-content-success-border', description: 'Success border colour — var(--global-color-status-dark-green)' },
            { name: '--card-content-info-bg', description: 'Info card background — var(--global-color-status-info-blue-light)' },
            { name: '--card-content-info-border', description: 'Info border colour — var(--global-color-status-info-blue)' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="ButtonGroup (action area)">
        <DocsTemplate.BodyText>
          The action area uses the <strong>ButtonGroup</strong> component and inherits its tokens.
          See the <code>Atoms/Buttons/ButtonGroup</code> documentation for the full ButtonGroup
          token reference. Card sizes map to ButtonGroup sizes as follows:
          <code>small → xs</code>, <code>default → sm</code>, <code>large → md</code>.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { CardContent } from './CardContent';

// Notification card — with border (default)
<CardContent
  variant="notification"
  status="error"
  size="default"
  heading="This is an error heading"
  body="This is a body description providing useful context."
  count={4}
  border={true}
  buttonGroupVariant="primary"
  buttonGroupLayout="separate"
  buttonGroupCount={2}
/>

// Notification card — no border (flat)
<CardContent
  variant="notification"
  status="error"
  size="default"
  heading="This is an error heading"
  body="This is a body description providing useful context."
  count={4}
  border={false}
  buttonGroupVariant="primary"
  buttonGroupLayout="separate"
  buttonGroupCount={2}
/>

// Image content card with ButtonGroup (joined layout)
<CardContent
  variant="image"
  size="default"
  heading="This is a heading"
  body="This is a body description providing useful context."
  rating={4}
  ratingCount={128}
  imageSrc="https://example.com/photo.jpg"
  imageAlt="Example image"
  buttonGroupVariant="primary"
  buttonGroupLayout="joined"
  buttonGroupCount={4}
/>

// With per-button configuration
<CardContent
  variant="notification"
  status="info"
  size="large"
  heading="Custom buttons"
  body="Per-button onClick and ariaLabel configuration."
  buttonGroupButtons={[
    { ariaLabel: 'Edit', onClick: () => console.log('Edit') },
    { ariaLabel: 'Delete', onClick: () => console.log('Delete') },
  ]}
/>`}</DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Semantic status colours">
          Notification cards use established status colour tokens (error = red, warning = amber, success = green, info = blue) ensuring accessible, consistent meaning across the product.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Composable actions via ButtonGroup">
          Card actions use the shared ButtonGroup component rather than bespoke buttons. This ensures consistent sizing, spacing, and interaction patterns across the design system, and allows full customisation of variant, layout, and button count.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Content-first sizing">
          Card widths grow from 160px → 220px → 300px across sizes. All internal spacing, typography, icon dimensions, and ButtonGroup sizes scale proportionally using design tokens.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Token-driven theming">
          All colours, spacing, typography, and decoration values reference design tokens so global theme updates propagate automatically to every card instance.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardContentDocs;
