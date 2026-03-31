import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { CardContent } from './CardContent';
import type { CardContentStatus, CardContentSize } from './CardContent';

/* ── Shared demo helpers ─────────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const imagePreviewWrap: React.CSSProperties = {
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
      subtitle="An alert banner component with nine colour types across three sizes, plus an image card variant. Maps to the Figma 'alert' component."
    />

    <DocsTemplate.BodyText>
      <strong>CardContent</strong> is an Atom-level component with two layout variants.
      The <code>notification</code> variant renders an inline <strong>alert banner</strong>:
      a horizontal row with a leading status icon (at 50% opacity), title + description text,
      and an optional trailing dismiss/close icon. The <code>image</code> variant provides a
      media-led content card with ratings. Both variants support <em>small</em>,
      <em>default</em>, and <em>large</em> sizes.
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      Sub-elements map directly to Figma component properties:
      <code>showIcon</code> = <code>leading-icon</code>,
      <code>showBody</code> = <code>subtext</code>,
      <code>showDismiss</code> = <code>trailing-icon</code>.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <CardContent status="default" size="large" />
            <CardContent status="error" size="default" />
            <CardContent variant="image" size="default" heading="Image heading" body="Body description." rating={4} ratingCount={128} />
          </div>
        }
        parts={[
          { id: 1, name: 'Leading icon (toggleable)', token: '--card-content-icon-size-*, --card-content-icon-opacity', description: 'Status-coloured SVG icon at 0.5 opacity. Controlled by showIcon prop. Icon varies by status: ✕ error, ⚠ warning, ✓ success, ℹ info/navy, ◎ default/light-gray/white, 📄 purple.' },
          { id: 2, name: 'Title / heading', token: '--card-content-heading-size-*, --card-content-heading-weight', description: 'Primary title text coloured by status. 12px (sm), 14px (default), 16px (lg), weight 400.' },
          { id: 3, name: 'Description / body (toggleable)', token: '--card-content-body-size-*, --card-content-body-color', description: 'Secondary description in neutral gray-700, weight 300. Controlled by showBody prop.' },
          { id: 4, name: 'Trailing dismiss icon (toggleable)', token: '--card-content-dismiss-size-*, --card-content-dismiss-opacity', description: 'Close button at 0.5 opacity in status colour. Controlled by showDismiss prop. Fires onDismiss callback.' },
          { id: 5, name: 'Border (toggleable)', token: '--global-spacing-stroke-1px', description: '1px solid border in the status colour. Set border={false} to hide.' },
          { id: 6, name: 'Image area (image variant)', token: '--card-content-image-height-*', description: 'Full-width image or grey placeholder (image variant only).' },
          { id: 7, name: 'ButtonGroup (image variant)', token: 'Uses ButtonGroup component tokens', description: 'Action buttons rendered via ButtonGroup (image variant only).' },
          { id: 8, name: 'Star rating (image variant)', token: '--card-content-star-color', description: '5-star rating row (image variant only).' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── All 9 Status Types ── */}
    <DocsTemplate.Section
      title="All 9 Status / Colour Types"
      subtitle="Each status sets the icon colour, heading colour, and dismiss colour. No background tint — the alert is transparent with status-coloured accents."
    >
      <div style={previewWrap}>
        {ALL_STATUSES.map((status) => (
          <CardContent
            key={status}
            status={status}
            heading={status === 'navy' ? 'This is an info alert banner for the Echo app' : 'This is an alert banner for the Echo app'}
          />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Sizes ── */}
    <DocsTemplate.Section title="All Sizes" subtitle="Small (16px icon, 12px text), default (22px icon, 14/16px text), large (28px icon, 16px text).">
      {ALL_SIZES.map((size) => (
        <DocsTemplate.Subsection key={size} title={`${size.charAt(0).toUpperCase()}${size.slice(1)}`}>
          <div style={previewWrap}>
            <CardContent status="default" size={size} border={true} />
            <CardContent status="default" size={size} border={false} />
          </div>
        </DocsTemplate.Subsection>
      ))}
    </DocsTemplate.Section>

    {/* ── Toggleable Sub-Elements ── */}
    <DocsTemplate.Section
      title="Toggleable Sub-Elements"
      subtitle="Each sub-element maps to a Figma component property and can be independently toggled."
    >
      <div style={previewWrap}>
        <CardContent status="default" showIcon={true} showBody={true} showDismiss={true} />
        <CardContent status="default" showIcon={false} showBody={true} showDismiss={true} />
        <CardContent status="default" showIcon={true} showBody={false} showDismiss={true} />
        <CardContent status="default" showIcon={true} showBody={true} showDismiss={false} />
        <CardContent status="default" showIcon={false} showBody={false} showDismiss={false} />
      </div>
    </DocsTemplate.Section>

    {/* ── Border toggle ── */}
    <DocsTemplate.Section title="Border Variants" subtitle="border={true} renders a 1px solid border in the status colour. border={false} removes it.">
      <div style={previewWrap}>
        {(['error', 'default', 'navy', 'purple'] as CardContentStatus[]).map((status) => (
          <React.Fragment key={status}>
            <CardContent status={status} border={true} />
            <CardContent status={status} border={false} />
          </React.Fragment>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Image variant ── */}
    <DocsTemplate.Section title="Image Variant — All Sizes" subtitle="Image cards retain the card-style layout from the previous design.">
      <div style={imagePreviewWrap}>
        {ALL_SIZES.map((size) => (
          <CardContent key={size} variant="image" size={size} heading="Image heading" body="Body description." rating={4} ratingCount={128} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Alert Layout">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-min-width', description: 'Alert minimum width — 400px' },
            { name: '--card-content-max-width', description: 'Alert maximum width — 1920px' },
            { name: '--card-content-outer-gap', description: 'Gap between content group and dismiss — var(--global-spacing-sizing-12px)' },
            { name: '--card-content-inner-gap', description: 'Gap between leading icon and text — var(--global-spacing-sizing-8px)' },
            { name: '--card-content-text-gap-sm / default / lg', description: 'Gap between title and description — 2px / 2px / 1px' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Icon Sizes">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-icon-size-sm', description: 'Leading icon — 16px' },
            { name: '--card-content-icon-size-default', description: 'Leading icon — 22px' },
            { name: '--card-content-icon-size-lg', description: 'Leading icon — 28px' },
            { name: '--card-content-icon-opacity', description: 'Leading icon opacity — 0.5' },
            { name: '--card-content-dismiss-size-sm', description: 'Dismiss icon — 14px' },
            { name: '--card-content-dismiss-size-default', description: 'Dismiss icon — 16px' },
            { name: '--card-content-dismiss-size-lg', description: 'Dismiss icon — 18px' },
            { name: '--card-content-dismiss-opacity', description: 'Dismiss icon opacity — 0.5' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Typography">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-heading-size-sm / default / lg', description: 'Title font sizes — label-xs (12px) / label-sm (14px) / label (16px)' },
            { name: '--card-content-heading-weight', description: 'Title weight — var(--global-type-weight-default) (400)' },
            { name: '--card-content-body-size-sm / default / lg', description: 'Description font sizes — label-xs (12px) / label (16px) / label (16px)' },
            { name: '--card-content-body-weight', description: 'Description weight — var(--global-type-weight-light) (300)' },
            { name: '--card-content-body-color', description: 'Description colour — var(--global-color-neutral-gray-700) (#374151)' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Status Colours">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--card-content-error-color', description: 'Error — var(--global-color-status-red) (#CE2031)' },
            { name: '--card-content-warning-icon-color', description: 'Warning icon fill — var(--global-color-status-orange) (#F4A403)' },
            { name: '--card-content-warning-color', description: 'Warning heading/dismiss — var(--global-color-status-dark-orange) (#D07C06)' },
            { name: '--card-content-success-color', description: 'Success — var(--global-color-status-dark-green) (#227F1A)' },
            { name: '--card-content-info-color', description: 'Info — var(--global-color-status-info-blue) (#366F97)' },
            { name: '--card-content-default-color', description: 'Default — var(--global-color-secondary-navy) (#3A3282)' },
            { name: '--card-content-light-gray-icon-color', description: 'Light Gray icon — var(--global-color-neutral-gray-700) (#374151)' },
            { name: '--card-content-light-gray-color', description: 'Light Gray heading/dismiss — var(--global-color-base-black) (#1C1C1C)' },
            { name: '--card-content-navy-color', description: 'Navy — var(--global-color-status-info-blue) (#366F97)' },
            { name: '--card-content-purple-color', description: 'Purple — var(--global-color-status-purple) (#5D2C82)' },
            { name: '--card-content-white-color', description: 'White — var(--global-color-base-black) (#1C1C1C)' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { CardContent } from './CardContent';

// Default alert banner (all elements visible)
<CardContent
  variant="notification"
  status="default"
  size="default"
  heading="This is an alert banner for the Echo app"
  body="This is a description for an alert banner in the Echo app"
  border={true}
  showIcon={true}
  showBody={true}
  showDismiss={true}
  onDismiss={() => console.log('dismissed')}
/>

// Warning alert — no dismiss
<CardContent
  status="warning"
  showDismiss={false}
/>

// Title-only alert
<CardContent
  status="error"
  showIcon={false}
  showBody={false}
  showDismiss={false}
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
        <DocsTemplate.PrincipleCard number={1} title="Inline alert pattern">
          The notification variant is a flat, inline alert banner — not a card. It has no background, no shadow, and no border-radius. This matches the Figma alert component precisely.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="9 semantic colour types">
          Matching the Figma colour property, nine status types are supported. Each status sets the icon fill, heading text colour, and dismiss icon colour consistently.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Figma property mapping">
          Boolean props map directly to Figma component properties: showIcon = leading-icon, showBody = subtext, showDismiss = trailing-icon. This ensures 1:1 parity between design and code.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Token-driven theming">
          All colours, spacing, typography, and decoration values reference design tokens from tokens.css, ensuring global theme updates propagate automatically.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardContentDocs;
