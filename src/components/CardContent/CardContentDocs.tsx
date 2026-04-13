import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { CardContent } from './CardContent';
import type { CardContentStatus, CardContentSize } from './CardContent';

/* ── Shared demo helpers ─────────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

// Representative sample sets (reduce snapshot height for Chromatic)
const SAMPLE_STATUSES: CardContentStatus[] = ['error', 'success'];
const SAMPLE_SIZES: CardContentSize[] = ['small', 'default', 'large'];
const STATUS_STATUSES: CardContentStatus[] = ['error', 'warning', 'success', 'info'];

const STATUS_LABELS: Record<CardContentStatus, string> = {
  error:        'Error',
  warning:      'Warning',
  success:      'Success',
  info:         'Info',
  default:      'Default',
  'light-gray': 'Light Gray',
  navy:         'Navy',
  purple:       'Purple',
  white:        'White',
};

export const CardContentDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="CardContent"
      subtitle="A versatile card component with status notifications, image layouts, and horizontal variants — driven entirely by design tokens."
    />

    <DocsTemplate.BodyText>
      <strong>CardContent</strong> is an Atom-level card component. The{' '}
      <code>notification</code> variant renders a <strong>StatusCard</strong> — either in a
      vertical layout (large circular icon badge above heading, body text, and ButtonGroup) or
      a compact <strong>horizontal layout</strong> (icon on the left, content on the right).
      The <code>image</code> variant renders a media-led card with image, heading, body,
      ButtonGroup, and star rating. All nine status types and three sizes are supported.
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      Nine colour/status types are supported: <code>error</code>, <code>warning</code>,{' '}
      <code>success</code>, <code>info</code>, <code>default</code>, <code>light-gray</code>,{' '}
      <code>navy</code>, <code>purple</code>, <code>white</code>. Sub-elements are individually
      toggled with boolean props (<code>showIcon</code>, <code>showBody</code>,{' '}
      <code>showActions</code>, <code>showDismiss</code>, <code>showRating</code>,{' '}
      <code>showImage</code>).
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>ButtonBase</strong> for the interactive action area. The{' '}
        <strong>dismiss button</strong> (close ×) is a <code>ButtonBase</code> element,
        ensuring accessible keyboard activation and semantics. The card shell, layout
        zones, heading, body text, and icon badge are plain <code>&lt;div&gt;</code> /
        semantic HTML elements. The <strong>ButtonGroup</strong> and status-specific buttons
        (ErrorButton, SuccessButton, etc.) embedded in the card are also built on{' '}
        <code>ButtonBase</code>. All card styles — status colour, padding, border, shadow —
        are driven by CSS Modules and the <code>--card-content-*</code> token family.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import (dismiss button only)\nimport ButtonBase from '@mui/material/ButtonBase';\n\n// Dismiss button inside the card:\n{showDismiss && (\n  <ButtonBase component="button" className={styles['card-content__dismiss']} onClick={onDismiss}>\n    {/* × close icon SVG */}\n  </ButtonBase>\n)}`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <CardContent variant="notification" status="error" size="default" heading="Error heading" body="Body description." showDismiss={true} />
            <CardContent variant="image" size="default" heading="Image heading" body="Body description." rating={4} ratingCount={128} />
          </div>
        }
        parts={[
          { id: 1, name: 'Card shell', token: '--card-content-bg, --card-content-border-radius, --card-content-shadow', description: 'White background card with 6px border-radius (8px for sm/lg), 0.5px status-coloured border and drop-shadow.' },
          { id: 2, name: 'Circular icon badge (vertical)', token: '--card-content-icon-badge-size-*, --card-content-error-icon / etc.', description: 'Large circular badge with status-coloured background and white SVG icon. Vertical sizes: 80px (sm), 140px (default), 180px (lg). Controlled by showIcon prop.' },
          { id: 3, name: 'Icon badge (horizontal)', token: '--global-spacing-sizing-40/60/80px', description: 'Compact square badge in horizontal layout. Sizes: 40px (sm), 60px (default), 80px (lg). Same status-coloured background and white icon.' },
          { id: 4, name: 'Heading', token: '--card-content-heading-size-*, --card-content-error-heading / etc.', description: 'Status-coloured heading. Typography: H4 24px (sm), H3 28px (default), H2 32px (lg), weight 400.' },
          { id: 5, name: 'Body text', token: '--card-content-body-size-*, --card-content-body-color', description: 'Body text in black, weight 300. 14px/16px (sm), 16px/20px (default), 18px/22px (lg). Controlled by showBody prop.' },
          { id: 6, name: 'ButtonGroup', token: 'Uses ButtonGroup component tokens', description: 'Status-coloured primary button + ghost secondary. Controlled by showActions prop.' },
          { id: 7, name: 'Dismiss button', token: 'Inherits status colour', description: 'Absolute-positioned close button top-right. Controlled by showDismiss prop. Fires onDismiss callback.' },
          { id: 8, name: 'Image area', token: '--card-content-image-height-*', description: 'Full-width image or grey placeholder at top of image cards. Controlled by showImage prop.' },
          { id: 9, name: 'Star rating', token: '--card-content-star-color, --card-content-star-empty-color', description: 'Optional 5-star rating row (image variant). Controlled by showRating prop.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Notification Layout ── */}
    <DocsTemplate.Section
      title="Notification Layout — Vertical vs Horizontal"
      subtitle="The notification variant supports two layout directions via the notificationLayout prop."
    >
      <DocsTemplate.BodyText>
        Set <code>notificationLayout="vertical"</code> (the default) for the classic stacked
        status card with a large circular badge. Set <code>notificationLayout="horizontal"</code>{' '}
        for a compact landscape card with the icon badge on the left and heading, body text, and
        actions on the right. The horizontal layout is ideal for notification banners, inline
        alerts, and side-by-side status comparisons.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Vertical (default)">
        <DocsTemplate.BodyText>
          Large circular icon badge above the content. Card width is flexible — grows with its
          container. Use for standalone modal-style status cards.
        </DocsTemplate.BodyText>
        <div style={previewWrap}>
          {SAMPLE_STATUSES.map((status) => (
            <CardContent
              key={status}
              variant="notification"
              notificationLayout="vertical"
              status={status}
              size="default"
              heading={`${STATUS_LABELS[status]} heading`}
              body="Body text describing the status."
              showDismiss={true}
            />
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Horizontal">
        <DocsTemplate.BodyText>
          Compact icon on the left, all content to the right. Fixed widths per size:{' '}
          400px (small), 480px (default), 560px (large). Use for notification bars and inline banners.
        </DocsTemplate.BodyText>
        <div style={{ ...previewWrap, flexDirection: 'column' }}>
          {SAMPLE_STATUSES.map((status) => (
            <CardContent
              key={status}
              variant="notification"
              notificationLayout="horizontal"
              status={status}
              size="default"
              heading={`${STATUS_LABELS[status]} heading`}
              body="Body text that can span multiple lines within the card."
              showDismiss={true}
            />
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Horizontal — All Sizes">
        <DocsTemplate.BodyText>
          Icon badge scales with card size: 40px (small), 60px (default), 80px (large).
          Card width adjusts accordingly: 400px / 480px / 560px.
        </DocsTemplate.BodyText>
        <div style={{ ...previewWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {SAMPLE_SIZES.map((size) => (
            <CardContent
              key={size}
              variant="notification"
              notificationLayout="horizontal"
              status="info"
              size={size}
              heading={`Info — ${size}`}
              body="This is body text that can span multiple lines."
              showDismiss={true}
            />
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Side-by-Side Grid">
        <DocsTemplate.BodyText>
          Horizontal cards pair naturally in a two-column grid, matching the status-card design pattern.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
          {SAMPLE_STATUSES.map((status) => (
            <div key={status} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-16px)' }}>
              <CardContent variant="notification" notificationLayout="horizontal" status={status} size="default" heading="This is a heading" body="Body text that can span multiple lines." showDismiss={true} />
              <CardContent variant="notification" notificationLayout="horizontal" status={status} size="default" heading="This is a heading" body="Body text that can span multiple lines." showDismiss={true} />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── All Status Types (2-column, compact) ── */}
    <DocsTemplate.Section
      title="All 9 Status / Colour Types"
      subtitle="Each status type sets the icon badge background, heading colour, card background tint, and border accent."
    >
      <div style={previewWrap}>
        {(['error', 'warning', 'success', 'info', 'default', 'light-gray', 'navy', 'purple', 'white'] as CardContentStatus[]).map((status) => (
          <CardContent key={status} variant="notification" status={status} size="default" heading={`${STATUS_LABELS[status]} heading`} showBody={false} showActions={false} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="All Sizes" subtitle="Three sizes — small (80px badge), default (140px badge), large (180px badge).">
      <DocsTemplate.Subsection title="Error — small / default / large">
        <div style={previewWrap}>
          {SAMPLE_SIZES.map((size) => (
            <CardContent key={size} variant="notification" status="error" size={size} heading="Error heading" showBody={false} showActions={false} />
          ))}
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Success — small / default / large">
        <div style={previewWrap}>
          {SAMPLE_SIZES.map((size) => (
            <CardContent key={size} variant="notification" status="success" size={size} heading="Success heading" showBody={false} showActions={false} />
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Toggleable Sub-Elements ── */}
    <DocsTemplate.Section
      title="Toggleable Sub-Elements"
      subtitle="Each sub-element can be independently shown or hidden using boolean props."
    >
      <DocsTemplate.Subsection title="Notification — Toggle Combinations">
        <div style={previewWrap}>
          <CardContent variant="notification" status="info" heading="All visible" />
          <CardContent variant="notification" status="info" heading="No icon" showIcon={false} />
          <CardContent variant="notification" status="info" heading="No body" showBody={false} />
          <CardContent variant="notification" status="info" heading="No actions" showActions={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Image — Toggle Combinations">
        <div style={previewWrap}>
          <CardContent variant="image" heading="All visible" rating={4} ratingCount={128} />
          <CardContent variant="image" heading="No image" rating={4} ratingCount={128} showImage={false} />
          <CardContent variant="image" heading="No rating" showRating={false} />
          <CardContent variant="image" heading="Heading only" showImage={false} showBody={false} showActions={false} showRating={false} />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Dismiss Button ── */}
    <DocsTemplate.Section title="Dismiss Button" subtitle="Set showDismiss={true} to add an absolute-positioned close button (top-right). Fires onDismiss callback.">
      <div style={previewWrap}>
        {SAMPLE_STATUSES.map((status) => (
          <CardContent key={status} variant="notification" status={status} size="default" heading={`${STATUS_LABELS[status]} — dismiss`} showDismiss={true} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Border toggle ── */}
    <DocsTemplate.Section title="Border Variants" subtitle="border={true} shows the status-coloured border + shadow; border={false} suppresses both.">
      <div style={previewWrap}>
        {(['error', 'default'] as CardContentStatus[]).map((status) => (
          <React.Fragment key={status}>
            <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — border`} border={true} showBody={false} showActions={false} />
            <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — no border`} border={false} showBody={false} showActions={false} />
          </React.Fragment>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Image variant ── */}
    <DocsTemplate.Section title="Image Variant — All Sizes" subtitle="Image cards use the standard card layout with an image or placeholder at top.">
      <div style={previewWrap}>
        {SAMPLE_SIZES.map((size) => (
          <CardContent key={size} variant="image" size={size} heading="This is a heading" body="Body description." rating={4} ratingCount={128} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Card Shell">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-bg', description: 'Card background — var(--global-color-base-white)' },
            { name: '--card-content-border-radius', description: 'Corner radius — var(--global-spacing-radius-6px) (8px for sm/lg)' },
            { name: '--card-content-border-width', description: 'Border stroke — 0.5px' },
            { name: '--card-content-shadow', description: 'Drop shadow — 0px 5px 10px 0px rgba(39,39,39,0.1)' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Icon Badge — Vertical Layout">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-icon-badge-size-sm', description: 'Small badge — var(--global-spacing-sizing-80px) = 80px' },
            { name: '--card-content-icon-badge-size-default', description: 'Default badge — var(--global-spacing-sizing-140px) = 140px' },
            { name: '--card-content-icon-badge-size-lg', description: 'Large badge — var(--global-spacing-sizing-180px) = 180px' },
            { name: '--card-content-icon-size-sm / default / lg', description: 'SVG icon inside badge — 40px / 72px / 90px' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Icon Badge — Horizontal Layout">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--global-spacing-sizing-40px', description: 'Horizontal badge size — small (40 × 40px)' },
            { name: '--global-spacing-sizing-60px', description: 'Horizontal badge size — default (60 × 60px)' },
            { name: '--global-spacing-sizing-80px', description: 'Horizontal badge size — large (80 × 80px)' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Horizontal Card Widths &amp; Padding">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--global-spacing-sizing-400px', description: 'Horizontal card width — small (400px)' },
            { name: '--global-spacing-sizing-480px', description: 'Horizontal card width — default (480px)' },
            { name: '--global-spacing-sizing-560px', description: 'Horizontal card width — large (560px)' },
            { name: '--card-content-padding-sm / default / lg', description: 'Padding for each horizontal card size' },
            { name: '--global-spacing-sizing-12 / 16 / 20px', description: 'Gap between icon and content — sm / default / lg' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Typography">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-heading-size-sm / default / lg', description: 'Heading — 24px / 28px / 32px' },
            { name: '--card-content-heading-weight', description: 'Heading weight — 400' },
            { name: '--card-content-body-size-sm / default / lg', description: 'Body — 14px / 16px / 18px' },
            { name: '--card-content-body-weight', description: 'Body weight — 300 (light)' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Status Colours">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-error-icon / heading / bg / border / btn-bg', description: 'Error — red (#CE2031)' },
            { name: '--card-content-warning-icon / heading / bg / border / btn-bg', description: 'Warning — orange (#F4A403 / #D07C06)' },
            { name: '--card-content-success-icon / heading / bg / border / btn-bg', description: 'Success — dark green (#227F1A)' },
            { name: '--card-content-info-icon / heading / bg / border / btn-bg', description: 'Info — info blue (#366F97)' },
            { name: '--card-content-default-icon / heading / bg / border / btn-bg', description: 'Default — secondary navy (#3A3282)' },
            { name: '--card-content-light-gray-* / navy-* / purple-* / white-*', description: 'Additional status colour sets' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── API Props ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'variant', description: '"notification" | "image" — selects card layout type. Default: "notification".' },
          { name: 'status', description: '"error" | "warning" | "success" | "info" | "default" | "light-gray" | "navy" | "purple" | "white". Default: "default".' },
          { name: 'size', description: '"small" | "default" | "large". Default: "default".' },
          { name: 'notificationLayout', description: '"vertical" | "horizontal" — layout direction for notification variant. Default: "vertical".' },
          { name: 'heading', description: 'string — heading text displayed inside the card.' },
          { name: 'body', description: 'string — body text. Controlled by showBody prop.' },
          { name: 'border', description: 'boolean — shows the status-coloured border and shadow. Default: true.' },
          { name: 'showIcon', description: 'boolean — shows/hides the status icon badge. Default: true.' },
          { name: 'showBody', description: 'boolean — shows/hides body text. Default: true.' },
          { name: 'showActions', description: 'boolean — shows/hides the ButtonGroup. Default: true.' },
          { name: 'showDismiss', description: 'boolean — shows/hides the dismiss button. Default: false.' },
          { name: 'showRating', description: 'boolean — shows/hides star rating (image variant). Default: true.' },
          { name: 'showImage', description: 'boolean — shows/hides the image area (image variant). Default: true.' },
          { name: 'imageSrc', description: 'string — URL for image variant src.' },
          { name: 'imageAlt', description: 'string — alt text for image.' },
          { name: 'imagePosition', description: '"top" | "left" | "right" — image position for image variant. Default: "top".' },
          { name: 'rating', description: 'number (0–5) — star rating value.' },
          { name: 'ratingCount', description: 'number — review count shown next to stars.' },
          { name: 'onDismiss', description: '() => void — callback fired when dismiss button is clicked.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { CardContent } from './CardContent';

// Vertical notification card (default layout)
<CardContent
  variant="notification"
  status="error"
  size="default"
  heading="This is an error heading"
  body="Body text that can span multiple lines."
  border={true}
  showDismiss={true}
  onDismiss={() => console.log('dismissed')}
/>

// Horizontal notification card (compact landscape)
<CardContent
  variant="notification"
  notificationLayout="horizontal"
  status="success"
  size="default"
  heading="Action completed"
  body="Your changes have been saved successfully."
  showDismiss={true}
/>

// Image card
<CardContent
  variant="image"
  size="default"
  heading="Photo card"
  body="Description text."
  imageSrc="/photo.jpg"
  rating={4}
  ratingCount={128}
/>`}</DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Vertical for standalone emphasis">
          Use the <strong>vertical</strong> layout when the status card is the main focal
          point — a modal confirmation, a full-width error state, or a prominent success
          message. The large circular badge commands attention.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Horizontal for compact inline alerts">
          Use the <strong>horizontal</strong> layout for banners, sidebars, notification
          lists, and side-by-side comparisons. Fixed widths (400/480/560px) ensure clean
          grid alignment at every size.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Toggleable sub-elements">
          Each card element — icon badge, body, actions, dismiss, rating, image — can be
          independently shown or hidden via boolean props, enabling flexible configurations
          without creating new component variants.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="9 semantic colour types">
          Nine status types provide full semantic colour coverage: error, warning, success,
          info, default, light-gray, navy, purple, and white — each setting the badge bg,
          heading, tint, and border consistently.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={5} title="Token-driven theming">
          All colours, sizes, spacing, and typography reference design tokens so global
          theme updates propagate automatically. No hardcoded values are used anywhere
          in the component.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardContentDocs;
