import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Breadcrumbs } from './Breadcrumbs';
import type { BreadcrumbsSize } from './Breadcrumbs';

const ALL_SIZES: BreadcrumbsSize[] = ['sm', 'default', 'lg'];

const SIZE_LABELS: Record<BreadcrumbsSize, string> = {
  sm: 'Small',
  default: 'Default',
  lg: 'Large',
};

const EXAMPLE_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Finance', href: '#' },
  { label: 'Reports' },
];

const SINGLE_LINK = [{ label: 'Finance', href: '#' }, { label: 'Reports' }];

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-100)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const rowWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-12px)',
};

export const BreadcrumbsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Breadcrumbs"
      subtitle="An accessible, token-driven breadcrumb trail with three size variants. Used to communicate location within a hierarchical navigation structure."
    />

    <DocsTemplate.BodyText>
      The <strong>Breadcrumbs</strong> component renders an ordered list of navigation
      links that reflect the current page's position within the site hierarchy. All
      preceding items are interactive links; the last item is the current page and is
      rendered as non-interactive bold text with an <code>aria-current="page"</code>{' '}
      attribute. Three size variants — <em>Small</em>, <em>Default</em>, and{' '}
      <em>Large</em> — map directly to design tokens for font size, separator size, and
      item gap.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <Breadcrumbs items={EXAMPLE_ITEMS} size="lg" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Nav Landmark',
            token: 'aria-label="Breadcrumb"',
            description:
              'Wraps the entire trail in a <nav> element, making it discoverable by assistive technology as a landmark region.',
          },
          {
            id: 2,
            name: 'Link Crumb',
            token:
              '--breadcrumbs-link-color\n--breadcrumbs-link-hover\n--breadcrumbs-link-weight (400)',
            description:
              'Each non-current item rendered as an anchor or button. Colour and hover state are token-driven. Provides underline on hover.',
          },
          {
            id: 3,
            name: 'Separator',
            token:
              '--breadcrumbs-separator-color\n--breadcrumbs-separator-size-{size}',
            description:
              'Chevron-right SVG icon positioned between items. Size scales with the chosen size variant.',
          },
          {
            id: 4,
            name: 'Current Crumb',
            token:
              '--breadcrumbs-current-color\n--breadcrumbs-current-weight (700)',
            description:
              'The last item — the active/current page. Rendered in bold, dark text. Carries aria-current="page" for accessibility.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Size Variants ── */}
    <DocsTemplate.Section title="Size Variants">
      <DocsTemplate.BodyText>
        Three sizes are available. Each maps to a specific type size, separator icon
        size, and gap token. Choose the size that best fits the surrounding typographic
        hierarchy.
      </DocsTemplate.BodyText>

      <div style={rowWrap}>
        {ALL_SIZES.map((size) => (
          <DocsTemplate.Example
            key={size}
            label={SIZE_LABELS[size]}
            preview={
              <div style={previewWrap}>
                <Breadcrumbs items={EXAMPLE_ITEMS} size={size} />
              </div>
            }
          />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Sizes Side-by-Side ── */}
    <DocsTemplate.Section title="All Sizes — Side by Side">
      <div style={{ ...previewWrap, flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            <span
              style={{
                width: '60px',
                flexShrink: 0,
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                fontFamily: 'var(--font-family-primary)',
              }}
            >
              {SIZE_LABELS[size]}
            </span>
            <Breadcrumbs items={EXAMPLE_ITEMS} size={size} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Single link + current ── */}
    <DocsTemplate.Section title="Two-Level Trail">
      <DocsTemplate.BodyText>
        A minimal trail with one ancestor link and the current page. This is the most
        common pattern for first-level page navigation.
      </DocsTemplate.BodyText>
      <div style={previewWrap}>
        <Breadcrumbs items={SINGLE_LINK} size="default" />
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          {
            token: '--breadcrumbs-font-family',
            value: 'var(--font-family-primary)',
            description: 'Typeface used for all breadcrumb text.',
          },
          {
            token: '--breadcrumbs-letter-spacing',
            value: 'var(--global-type-letter-spacing-primary-label)',
            description: 'Letter spacing applied to all text nodes.',
          },
          {
            token: '--breadcrumbs-font-size-sm',
            value: 'var(--global-type-size-primary-label-xs) — 12px',
            description: 'Font size for the small size variant.',
          },
          {
            token: '--breadcrumbs-font-size-default',
            value: 'var(--global-type-size-primary-label-sm) — 14px',
            description: 'Font size for the default size variant.',
          },
          {
            token: '--breadcrumbs-font-size-lg',
            value: 'var(--global-type-size-primary-label) — 16px',
            description: 'Font size for the large size variant.',
          },
          {
            token: '--breadcrumbs-gap-sm',
            value: 'var(--global-spacing-sizing-4px)',
            description: 'Gap between items and separator for small.',
          },
          {
            token: '--breadcrumbs-gap-default',
            value: 'var(--global-spacing-sizing-6px)',
            description: 'Gap between items and separator for default.',
          },
          {
            token: '--breadcrumbs-gap-lg',
            value: 'var(--global-spacing-sizing-8px)',
            description: 'Gap between items and separator for large.',
          },
          {
            token: '--breadcrumbs-separator-size-sm',
            value: 'var(--global-spacing-sizing-10px)',
            description: 'Chevron icon size for small.',
          },
          {
            token: '--breadcrumbs-separator-size-default',
            value: 'var(--global-spacing-sizing-12px)',
            description: 'Chevron icon size for default.',
          },
          {
            token: '--breadcrumbs-separator-size-lg',
            value: 'var(--global-spacing-sizing-14px)',
            description: 'Chevron icon size for large.',
          },
          {
            token: '--breadcrumbs-link-color',
            value: 'var(--global-color-neutral-gray-500)',
            description: 'Colour for inactive/link crumbs.',
          },
          {
            token: '--breadcrumbs-link-hover',
            value: 'var(--global-color-neutral-gray-700)',
            description: 'Colour for link crumbs on hover.',
          },
          {
            token: '--breadcrumbs-separator-color',
            value: 'var(--global-color-neutral-gray-400)',
            description: 'Colour of the chevron separator.',
          },
          {
            token: '--breadcrumbs-current-color',
            value: 'var(--global-color-base-black)',
            description: 'Colour of the current/active page crumb.',
          },
          {
            token: '--breadcrumbs-link-weight',
            value: 'var(--global-type-weight-default) — 400',
            description: 'Font weight for link crumbs.',
          },
          {
            token: '--breadcrumbs-current-weight',
            value: 'var(--global-type-weight-bold) — 700',
            description: 'Font weight for the current page crumb.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Props ── */}
    <DocsTemplate.Section title="Props">
      <DocsTemplate.PropsTable
        props={[
          {
            name: 'items',
            type: 'BreadcrumbItem[]',
            default: '—',
            required: true,
            description:
              'Ordered array of breadcrumb items. The last entry is always the current page. Each item may have label, href, and/or onClick.',
          },
          {
            name: 'size',
            type: '"sm" | "default" | "lg"',
            default: '"default"',
            required: false,
            description: 'Controls font size, separator size, and item gap.',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: '"Breadcrumb"',
            required: false,
            description:
              'Accessible label applied to the wrapping <nav> landmark element.',
          },
          {
            name: 'className',
            type: 'string',
            default: '""',
            required: false,
            description: 'Additional CSS class applied to the root element.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.Do
        items={[
          'Place breadcrumbs at the top of a page, above the page title.',
          'Keep labels concise — use single nouns or short noun phrases.',
          'Always include the current page as the last non-linked item.',
          'Use href for traditional navigation; use onClick for SPA routing without href.',
          'Choose a size consistent with surrounding typographic hierarchy.',
        ]}
      />
      <DocsTemplate.Dont
        items={[
          'Do not link the current page item — it should be static text.',
          'Do not use breadcrumbs for flat navigation structures with no hierarchy.',
          'Do not exceed 5–6 levels; collapse middle levels if the trail is very deep.',
          'Do not mix sizes within the same trail.',
          'Do not use breadcrumbs as a replacement for primary navigation.',
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.BodyText>
        <strong>Hierarchy first.</strong> Breadcrumbs exist to communicate depth, not
        to duplicate a side-nav. Only render them when there are two or more levels of
        hierarchy above the current page.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        <strong>Accessible by default.</strong> The component wraps content in a{' '}
        <code>&lt;nav&gt;</code> landmark and applies <code>aria-current="page"</code>{' '}
        to the current item. Separators are hidden from assistive technology via{' '}
        <code>aria-hidden="true"</code>.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        <strong>Token-driven.</strong> Every visual attribute — colour, weight, size,
        gap — is driven by a design token, ensuring global updates to the system
        propagate automatically. Never override these values with hard-coded styles.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>
  </DocsTemplate>
);

export default BreadcrumbsDocs;
