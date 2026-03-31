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
      subtitle="A StatusCard component with large circular icon badges, status-coloured headings, body text, and ButtonGroups — across three sizes and nine colour types."
    />

    <DocsTemplate.BodyText>
      <strong>CardContent</strong> is an Atom-level card component that displays status information
      inside a styled white card (rounded corners, drop-shadow, status-coloured border). The
      <code>notification</code> variant renders a <strong>StatusCard</strong>: a vertical layout
      with a large circular icon badge, status-coloured heading, body text, and a ButtonGroup
      with a status-coloured primary button and ghost secondary. The <code>image</code> variant
      renders a media-led card with image, heading, body, ButtonGroup, and star rating.
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      Nine colour / status types are supported: <code>error</code>, <code>warning</code>,
      <code>success</code>, <code>info</code>, <code>default</code>, <code>light-gray</code>,
      <code>navy</code>, <code>purple</code>, <code>white</code>. Sub-elements are individually
      toggled with boolean props (<code>showIcon</code>, <code>showBody</code>,
      <code>showActions</code>, <code>showDismiss</code>, <code>showRating</code>,
      <code>showImage</code>).
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <CardContent variant="notification" status="error" size="default" heading="Error heading" body="Body description." count={4} showDismiss={true} />
            <CardContent variant="image" size="default" heading="Image heading" body="Body description." rating={4} ratingCount={128} />
          </div>
        }
        parts={[
          { id: 1, name: 'Card shell', token: '--card-content-bg, --card-content-border-radius, --card-content-shadow', description: 'White background card with 6px border-radius (8px for small/large), 0.5px status-coloured border and drop-shadow.' },
          { id: 2, name: 'Circular icon badge', token: '--card-content-icon-badge-size-*, --card-content-error-icon / etc.', description: 'Large circular badge with status-coloured background and white SVG icon. Sizes: 80px (sm), 140px (default), 180px (lg). Controlled by showIcon prop.' },
          { id: 3, name: 'Heading', token: '--card-content-heading-size-*, --card-content-error-heading / etc.', description: 'Status-coloured heading. Typography: H4 24px (sm), H3 28px (default), H2 32px (lg), weight 400.' },
          { id: 4, name: 'Body text', token: '--card-content-body-size-*, --card-content-body-color', description: 'Body text in black, weight 300. 14px/16px (sm), 16px/20px (default), 18px/22px (lg). Controlled by showBody prop.' },
          { id: 5, name: 'ButtonGroup', token: 'Uses ButtonGroup component tokens', description: 'Status-coloured primary button + ghost secondary. Uses the existing ButtonGroup component. Controlled by showActions prop.' },
          { id: 6, name: 'Count badge', token: '--card-content-count-bg, --card-content-count-color', description: 'Optional numeric badge beside the ButtonGroup. Pass the count prop to show.' },
          { id: 7, name: 'Dismiss button', token: 'Inherits status colour', description: 'Absolute-positioned close button top-right. Controlled by showDismiss prop. Fires onDismiss callback.' },
          { id: 8, name: 'Image area', token: '--card-content-image-height-*', description: 'Full-width image or grey placeholder at top of image cards. Controlled by showImage prop.' },
          { id: 9, name: 'Star rating', token: '--card-content-star-color, --card-content-star-empty-color', description: 'Optional 5-star rating row (image variant). Controlled by showRating prop.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── All 9 Status Types ── */}
    <DocsTemplate.Section
      title="All 9 Status / Colour Types"
      subtitle="Each status type sets the icon badge background, heading colour, card background tint, and border accent. The default size is shown below."
    >
      <div style={previewWrap}>
        {ALL_STATUSES.map((status) => (
          <CardContent key={status} variant="notification" status={status} size="default" heading={`${STATUS_LABELS[status]} heading`} count={4} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Sizes ── */}
    <DocsTemplate.Section title="All Sizes" subtitle="Three sizes — small (80px badge, 24px heading), default (140px badge, 28px heading), large (180px badge, 32px heading).">
      {ALL_STATUSES.slice(0, 4).map((status) => (
        <DocsTemplate.Subsection key={status} title={STATUS_LABELS[status]}>
          <div style={previewWrap}>
            {ALL_SIZES.map((size) => (
              <CardContent key={size} variant="notification" status={status} size={size} heading={`${STATUS_LABELS[status]} heading`} count={4} />
            ))}
          </div>
        </DocsTemplate.Subsection>
      ))}
    </DocsTemplate.Section>

    {/* ── Toggleable Sub-Elements ── */}
    <DocsTemplate.Section
      title="Toggleable Sub-Elements"
      subtitle="Each sub-element can be independently shown or hidden using boolean props."
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
    <DocsTemplate.Section title="Dismiss Button" subtitle="Set showDismiss={true} to add an absolute-positioned close button (top-right). Fires onDismiss callback.">
      <div style={previewWrap}>
        {ALL_STATUSES.slice(0, 4).map((status) => (
          <CardContent key={status} variant="notification" status={status} size="default" heading={`${STATUS_LABELS[status]} — dismiss`} count={4} showDismiss={true} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Border toggle ── */}
    <DocsTemplate.Section title="Border Variants" subtitle="border={true} shows the status-coloured border + shadow; border={false} suppresses both.">
      <div style={previewWrap}>
        {(['error', 'default', 'purple', 'white'] as CardContentStatus[]).map((status) => (
          <React.Fragment key={status}>
            <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — border`} count={4} border={true} />
            <CardContent variant="notification" status={status} heading={`${STATUS_LABELS[status]} — no border`} count={4} border={false} />
          </React.Fragment>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Image variant ── */}
    <DocsTemplate.Section title="Image Variant — All Sizes" subtitle="Image cards use the standard card layout with an image or placeholder at top.">
      <div style={previewWrap}>
        {ALL_SIZES.map((size) => (
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
      <DocsTemplate.Subsection title="Icon Badge">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-icon-badge-size-sm', description: 'Small badge — var(--global-spacing-sizing-80px) = 80px' },
            { name: '--card-content-icon-badge-size-default', description: 'Default badge — var(--global-spacing-sizing-140px) = 140px' },
            { name: '--card-content-icon-badge-size-lg', description: 'Large badge — var(--global-spacing-sizing-180px) = 180px' },
            { name: '--card-content-icon-size-sm / default / lg', description: 'SVG icon inside badge — 40px / 72px / 90px' },
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

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { CardContent } from './CardContent';

// Default StatusCard (notification variant)
<CardContent
  variant="notification"
  status="error"
  size="default"
  heading="This is an error heading"
  body="Body text that can span multiple lines."
  count={4}
  border={true}
  showIcon={true}
  showBody={true}
  showActions={true}
  showDismiss={false}
  onDismiss={() => console.log('dismissed')}
/>

// Minimal card (no body, no actions)
<CardContent
  status="success"
  heading="Success!"
  showBody={false}
  showActions={false}
/>

// All statuses, default size
{['error', 'warning', 'success', 'info'].map((status) => (
  <CardContent key={status} status={status} heading={\`\${status} heading\`} count={4} />
))}

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
        <DocsTemplate.PrincipleCard number={1} title="9 semantic colour types">
          Nine status types provide full semantic colour coverage: error (red), warning (orange), success (green), info (blue), default (navy), light-gray, navy, purple, and white — each setting the badge bg, heading, tint, and border consistently.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Circular icon badge scale">
          The circular badge scales with the card: 80px (small), 140px (default), 180px (large). Icon SVGs scale proportionally. The badge bg colour equals the status colour; icon is always white.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Toggleable sub-elements">
          Each card element — icon badge, heading, body, actions/ButtonGroup, dismiss, rating, image — can be independently shown or hidden via boolean props, enabling flexible configurations.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Token-driven theming">
          All colours, sizes, spacing, and typography reference design tokens so global theme updates propagate automatically.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardContentDocs;
