import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { CardContent } from './CardContent';
import type { CardContentStatus, CardContentSize } from './CardContent';

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

const ALL_STATUSES: CardContentStatus[] = [
  'error', 'warning', 'success', 'info',
  'default', 'light-gray', 'navy', 'purple', 'white',
];
const ALL_SIZES: CardContentSize[] = ['small', 'default', 'large'];

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
      subtitle="An atomic content card with two layout variants — notification (status) and image — across three sizes and nine colour types. Sub-elements are independently toggleable."
    />

    <DocsTemplate.BodyText>
      <strong>CardContent</strong> is an Atom-level card component that wraps content inside a
      styled card shell (white background, rounded corners, drop-shadow). Two layout variants are
      provided: <code>notification</code> for status-driven alerts across <strong>9 colour types</strong>
      (error, warning, success, info, default, light-gray, navy, purple, white) and <code>image</code>
      for media-led content cards with ratings. All variants scale cleanly across <em>small</em>,
      <em>default</em>, and <em>large</em> sizes.
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      Sub-elements can be individually toggled using boolean props, following the same pattern
      as the Alert component: <code>showIcon</code> (leading status icon),
      <code>showBody</code> (description text), <code>showActions</code> (ButtonGroup row),
      <code>showDismiss</code> (trailing close button), <code>showRating</code> (star rating),
      and <code>showImage</code> (image area).
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
              heading="Error heading"
              body="Body description."
              count={4}
              showDismiss={true}
            />
            <CardContent
              variant="image"
              size="default"
              heading="Image heading"
              body="Body description."
              rating={4}
              ratingCount={128}
            />
          </div>
        }
        parts={[
          { id: 1, name: 'Card shell', token: '--card-content-bg, --card-content-border-radius, --card-content-shadow', description: 'White background container with 6px border-radius, 0.5px border and drop-shadow.' },
          { id: 2, name: 'Status icon (toggleable)', token: '--card-content-error-icon / --card-content-default-icon / etc.', description: 'Status-coloured SVG icon. Controlled by showIcon prop. Icon varies by status type: ✕ error, ⚠ warning, ✓ success, ℹ info/navy, ◎ default/light-gray/white, 📄 purple.' },
          { id: 3, name: 'Image area (toggleable)', token: '--card-content-image-height-default, --card-content-image-bg', description: 'Full-width image or grey placeholder at top of image cards. Controlled by showImage prop.' },
          { id: 4, name: 'Heading', token: '--card-content-heading-color, --card-content-heading-size-default', description: 'Primary label text. Colour inherits from the status type in notification cards.' },
          { id: 5, name: 'Body text (toggleable)', token: '--card-content-body-color, --card-content-body-size-default', description: 'Secondary description in neutral gray. Controlled by showBody prop.' },
          { id: 6, name: 'ButtonGroup (toggleable)', token: 'Uses ButtonGroup component tokens', description: 'Action area rendered via ButtonGroup. Controlled by showActions prop. Supports separate/joined layouts and all ButtonGroup variants.' },
          { id: 7, name: 'Count badge', token: '--card-content-count-bg, --card-content-count-color', description: 'Optional numeric badge beside the ButtonGroup in notification cards.' },
          { id: 8, name: 'Star rating (toggleable)', token: '--card-content-star-color, --card-content-star-empty-color', description: 'Optional 5-star rating. Controlled by showRating prop (image variant only).' },
          { id: 9, name: 'Border', token: '--card-content-border-width, --card-content-border-color', description: 'Optional visible border and drop shadow. Set border={false} to suppress both.' },
          { id: 10, name: 'Dismiss button (toggleable)', token: 'Inherits status icon colour', description: 'Trailing close/dismiss button positioned top-right. Controlled by showDismiss prop (notification variant). Fires onDismiss callback.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── All 9 Status Types ── */}
    <DocsTemplate.Section
      title="All 9 Status / Colour Types"
      subtitle="Nine colour types are supported, matching the Alert component's palette. Each sets the icon, heading colour, background tint, and border accent."
    >
      {ALL_STATUSES.map((status) => (
        <DocsTemplate.Subsection key={status} title={STATUS_LABELS[status]}>
          <div style={previewWrap}>
            {ALL_SIZES.map((size) => (
              <CardContent key={size} variant="notification" status={status} size={size} heading={`${STATUS_LABELS[status]} heading`} count={4} />
            ))}
          </div>
        </DocsTemplate.Subsection>
      ))}
    </DocsTemplate.Section>

    {/* ── Image variant — all sizes ── */}
    <DocsTemplate.Section title="Image Variant — All Sizes" subtitle="Image cards scale across small, default, and large.">
      <div style={previewWrap}>
        {ALL_SIZES.map((size) => (
          <CardContent key={size} variant="image" size={size} heading="Image heading" rating={4} ratingCount={128} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Toggleable Sub-Elements ── */}
    <DocsTemplate.Section
      title="Toggleable Sub-Elements"
      subtitle="Each sub-element can be independently shown or hidden using boolean props, following the Alert component's pattern."
    >
      <DocsTemplate.Subsection title="Notification — Toggle Combinations">
        <div style={previewWrap}>
          <CardContent variant="notification" status="info" heading="All visible" count={4} />
          <CardContent variant="notification" status="info" heading="No icon" count={4} showIcon={false} />
          <CardContent variant="notification" status="info" heading="No body" count={4} showBody={false} />
          <CardContent variant="notification" status="info" heading="No actions" showActions={false} />
          <CardContent variant="notification" status="info" heading="Icon + heading" showBody={false} showActions={false} />
          <CardContent variant="notification" status="info" heading="Heading only" showIcon={false} showBody={false} showActions={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Image — Toggle Combinations">
        <div style={previewWrap}>
          <CardContent variant="image" heading="All visible" rating={4} ratingCount={128} />
          <CardContent variant="image" heading="No image" rating={4} ratingCount={128} showImage={false} />
          <CardContent variant="image" heading="No body" rating={4} ratingCount={128} showBody={false} />
          <CardContent variant="image" heading="No actions" rating={4} ratingCount={128} showActions={false} />
          <CardContent variant="image" heading="No rating" showRating={false} />
          <CardContent variant="image" heading="Heading only" showImage={false} showBody={false} showActions={false} showRating={false} />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Dismiss Button ── */}
    <DocsTemplate.Section
      title="Dismiss Button"
      subtitle="Set showDismiss={true} to add a trailing close button (notification variant). The button inherits the status accent colour and fires onDismiss."
    >
      <div style={previewWrap}>
        {ALL_STATUSES.map((status) => (
          <CardContent key={status} variant="notification" status={status} size="default" heading={`${STATUS_LABELS[status]} — dismiss`} count={4} showDismiss={true} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Border toggle ── */}
    <DocsTemplate.Section title="Border Variants" subtitle="border={true} renders the status-accent border and shadow; border={false} suppresses both.">
      <DocsTemplate.Subsection title="Notification — Border True vs False">
        <div style={previewWrap}>
          {(['error', 'default', 'purple', 'white'] as CardContentStatus[]).map((status) => (
            <React.Fragment key={status}>
              <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — border`} count={4} border={true} />
              <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — no border`} count={4} border={false} />
            </React.Fragment>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── ButtonGroup variants ── */}
    <DocsTemplate.Section title="ButtonGroup Variants" subtitle="All four ButtonGroup variants are supported: primary, secondary, tertiary, and ghost.">
      <div style={previewWrap}>
        {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map((v) => (
          <CardContent key={v} variant="notification" status="info" heading={`${v} buttons`} body="ButtonGroup variant demo." count={4} buttonGroupVariant={v} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── ButtonGroup layouts ── */}
    <DocsTemplate.Section title="ButtonGroup Layouts" subtitle="Separate (default) and joined layout modes.">
      <div style={previewWrap}>
        <CardContent variant="notification" status="info" heading="Separate" count={4} buttonGroupLayout="separate" />
        <CardContent variant="notification" status="info" heading="Joined" count={4} buttonGroupLayout="joined" buttonGroupCount={4} />
      </div>
    </DocsTemplate.Section>

    {/* ── Image with custom image ── */}
    <DocsTemplate.Section title="Image Variant — With Custom Image" subtitle="Pass imageSrc to replace the grey placeholder.">
      <div style={previewWrap}>
        {ALL_SIZES.map((size) => (
          <CardContent key={size} variant="image" size={size} heading="Custom photo" body="Photo via imageSrc prop." rating={5} ratingCount={312} imageSrc="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" imageAlt="Mountain landscape" />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Card Shell">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-bg', description: 'Card background — var(--global-color-base-white)' },
            { name: '--card-content-border-radius', description: 'Corner radius — var(--global-spacing-radius-6px)' },
            { name: '--card-content-border-width', description: 'Border stroke — 0.5px' },
            { name: '--card-content-border-color', description: 'Default border — var(--global-color-neutral-gray-300)' },
            { name: '--card-content-shadow', description: 'Drop shadow — 0px 5px 10px 0px rgba(39,39,39,0.1)' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Status Colours (9 types)">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-error-*', description: 'Error — bg, border, icon, heading tokens using status-red' },
            { name: '--card-content-warning-*', description: 'Warning — bg, border, icon, heading tokens using status-orange' },
            { name: '--card-content-success-*', description: 'Success — bg, border, icon, heading tokens using status-dark-green' },
            { name: '--card-content-info-*', description: 'Info — bg, border, icon, heading tokens using status-info-blue' },
            { name: '--card-content-default-*', description: 'Default — bg, border, icon, heading tokens using secondary-navy' },
            { name: '--card-content-light-gray-*', description: 'Light Gray — bg, border, icon, heading tokens using neutral-gray' },
            { name: '--card-content-navy-*', description: 'Navy — bg, border, icon, heading tokens using info-blue' },
            { name: '--card-content-purple-*', description: 'Purple — bg, border, icon, heading tokens using status-purple' },
            { name: '--card-content-white-*', description: 'White — bg, border, icon, heading tokens using base-white/black' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Sizes">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-width-sm / default / lg', description: 'Card widths — 160px / 220px / 300px' },
            { name: '--card-content-padding-sm / default / lg', description: 'Internal padding — 12px / 16px / 20px' },
            { name: '--card-content-gap-sm / default / lg', description: 'Internal gap — 8px / 10px / 12px' },
            { name: '--card-content-image-height-sm / default / lg', description: 'Image area heights — 80px / 110px / 150px' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { CardContent } from './CardContent';

// Notification with all sub-elements
<CardContent
  variant="notification"
  status="error"
  size="default"
  heading="Error heading"
  body="Description text."
  count={4}
  border={true}
  showIcon={true}
  showBody={true}
  showActions={true}
  showDismiss={true}
  onDismiss={() => console.log('dismissed')}
/>

// Minimal notification (heading only + dismiss)
<CardContent
  variant="notification"
  status="info"
  heading="Quick notice"
  showIcon={false}
  showBody={false}
  showActions={false}
  showDismiss={true}
/>

// Image card with hidden rating
<CardContent
  variant="image"
  size="default"
  heading="Photo card"
  body="Description text."
  imageSrc="/photo.jpg"
  showRating={false}
/>

// Image card without image area
<CardContent
  variant="image"
  heading="Content only"
  body="No image area displayed."
  showImage={false}
  rating={4}
  ratingCount={128}
/>`}</DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="9 semantic colour types">
          Matching the Alert component palette, CardContent supports error, warning, success, info, default, light-gray, navy, purple, and white — ensuring consistent colour semantics across the design system.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Toggleable sub-elements">
          Following the Alert component pattern, each card sub-element (icon, body, actions, dismiss, rating, image) can be independently shown or hidden via boolean props, enabling flexible card configurations from a single component.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Composable actions via ButtonGroup">
          Card actions use the shared ButtonGroup component rather than bespoke buttons, ensuring consistent sizing, spacing, and interaction patterns.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Token-driven theming">
          All colours, spacing, typography, and decoration values reference design tokens so global theme updates propagate automatically.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardContentDocs;
