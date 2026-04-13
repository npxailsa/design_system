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

export const BreadcrumbsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Breadcrumbs"
      subtitle="An accessible, token-driven breadcrumb trail with three size variants. Used to communicate location within a hierarchical navigation structure."
    />

    <DocsTemplate.BodyText>
      The <strong>Breadcrumbs</strong> component renders an ordered list of navigation
      links reflecting the current page's position within the site hierarchy. All
      preceding items are interactive links; the last item is the current page — rendered
      as non-interactive bold text with <code>aria-current="page"</code>. Three size
      variants — <em>Small</em>, <em>Default</em>, and <em>Large</em> — map directly to
      design tokens for font size, separator size, and item gap.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on two MUI components. The outer list container uses MUI's{' '}
        <strong>Breadcrumbs</strong> (<code>@mui/material/Breadcrumbs</code>), which provides{' '}
        <code>role="navigation"</code> / <code>aria-label</code> semantics, automatic separator
        insertion, and accessible list markup. Each individual clickable link item is a{' '}
        <strong>ButtonBase</strong> (<code>@mui/material/ButtonBase</code>), giving it keyboard
        activation, focus styles, and full-width click target semantics. The current (non-link)
        page item is a plain <code>&lt;span&gt;</code> with <code>aria-current="page"</code>.
        All sizing, spacing, and colour is applied via CSS Modules and the{' '}
        <code>--breadcrumbs-*</code> token family.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base imports\nimport MuiBreadcrumbs from '@mui/material/Breadcrumbs';\nimport ButtonBase from '@mui/material/ButtonBase';\n\n// Usage:\n<MuiBreadcrumbs className={styles.breadcrumbs} aria-label="Breadcrumb">\n  {items.map((item, i) =>\n    item.href\n      ? <ButtonBase key={i} component="a" href={item.href}>{item.label}</ButtonBase>\n      : <span key={i} aria-current="page">{item.label}</span>\n  )}\n</MuiBreadcrumbs>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

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
              '--breadcrumbs-link-color\n--breadcrumbs-link-hover\n--breadcrumbs-link-weight',
            description:
              'Each non-current item rendered as an anchor or button. Colour and hover state are token-driven.',
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
              '--breadcrumbs-current-color\n--breadcrumbs-current-weight',
            description:
              'The last item — the active/current page. Rendered in bold, dark text with aria-current="page".',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Size Variants ── */}
    <DocsTemplate.Section title="Size Variants">
      <DocsTemplate.BodyText>
        Three sizes are available. Each maps to a specific type size, separator icon size,
        and gap token. Choose the size that best fits the surrounding typographic hierarchy.
      </DocsTemplate.BodyText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size}>
            <p style={{
              margin: '0 0 var(--global-spacing-sizing-8px)',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--global-type-size-primary-label-xs)',
              color: 'var(--global-color-neutral-gray-500)',
              fontWeight: 'var(--global-type-weight-medium)' as React.CSSProperties['fontWeight'],
            }}>
              {SIZE_LABELS[size]}
            </p>
            <div style={previewWrap}>
              <Breadcrumbs items={EXAMPLE_ITEMS} size={size} />
            </div>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Sizes Side-by-Side ── */}
    <DocsTemplate.Section title="All Sizes — Side by Side">
      <div style={{ ...previewWrap, gap: 'var(--global-spacing-sizing-20px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            <span style={{
              width: '56px',
              flexShrink: 0,
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-400)',
              fontFamily: 'var(--font-family-primary)',
            }}>
              {SIZE_LABELS[size]}
            </span>
            <Breadcrumbs items={EXAMPLE_ITEMS} size={size} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Two-level trail ── */}
    <DocsTemplate.Section title="Two-Level Trail">
      <DocsTemplate.BodyText>
        A minimal trail with one ancestor link and the current page — the most common
        pattern for first-level page navigation.
      </DocsTemplate.BodyText>
      <div style={previewWrap}>
        <Breadcrumbs items={SINGLE_LINK} size="default" />
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--breadcrumbs-font-family', description: 'Typeface used for all breadcrumb text. Resolves to var(--font-family-primary).' },
          { name: '--breadcrumbs-letter-spacing', description: 'Letter spacing applied to all text nodes. Resolves to var(--global-type-letter-spacing-primary-label).' },
          { name: '--breadcrumbs-font-size-sm', description: 'Font size for the small variant — 12px via var(--global-type-size-primary-label-xs).' },
          { name: '--breadcrumbs-font-size-default', description: 'Font size for the default variant — 14px via var(--global-type-size-primary-label-sm).' },
          { name: '--breadcrumbs-font-size-lg', description: 'Font size for the large variant — 16px via var(--global-type-size-primary-label).' },
          { name: '--breadcrumbs-gap-sm', description: 'Gap between items and separator for small — 4px.' },
          { name: '--breadcrumbs-gap-default', description: 'Gap between items and separator for default — 6px.' },
          { name: '--breadcrumbs-gap-lg', description: 'Gap between items and separator for large — 8px.' },
          { name: '--breadcrumbs-separator-size-sm', description: 'Chevron icon size for small — 10px.' },
          { name: '--breadcrumbs-separator-size-default', description: 'Chevron icon size for default — 12px.' },
          { name: '--breadcrumbs-separator-size-lg', description: 'Chevron icon size for large — 14px.' },
          { name: '--breadcrumbs-link-color', description: 'Colour for inactive/link crumbs — var(--global-color-neutral-gray-500).' },
          { name: '--breadcrumbs-link-hover', description: 'Colour for link crumbs on hover — var(--global-color-neutral-gray-700).' },
          { name: '--breadcrumbs-separator-color', description: 'Colour of the chevron separator — var(--global-color-neutral-gray-400).' },
          { name: '--breadcrumbs-current-color', description: 'Colour of the current/active page crumb — var(--global-color-base-black).' },
          { name: '--breadcrumbs-link-weight', description: 'Font weight for link crumbs — 400 (var(--global-type-weight-default)).' },
          { name: '--breadcrumbs-current-weight', description: 'Font weight for the current page crumb — 700 (var(--global-type-weight-bold)).' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Props ── */}
    <DocsTemplate.Section title="Props">
      <DocsTemplate.BodyText>
        The <code>Breadcrumbs</code> component accepts the following props:
      </DocsTemplate.BodyText>
      <DocsTemplate.BulletList
        items={[
          <><strong>items</strong> <em>(BreadcrumbItem[], required)</em> — Ordered array of crumb objects. The last entry is always the current page. Each item accepts <code>label</code>, optional <code>href</code>, and optional <code>onClick</code>.</>,
          <><strong>size</strong> <em>("sm" | "default" | "lg", default: "default")</em> — Controls font size, separator icon size, and gap between items.</>,
          <><strong>ariaLabel</strong> <em>(string, default: "Breadcrumb")</em> — Accessible label applied to the wrapping &lt;nav&gt; landmark element.</>,
          <><strong>className</strong> <em>(string, default: "")</em> — Additional CSS class applied to the root element.</>,
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Breadcrumbs items={EXAMPLE_ITEMS} size="default" />,
          label: 'Do',
          description: 'Place breadcrumbs at the top of a page above the title. Keep labels concise and always include the current page as non-interactive bold text.',
        }}
        dontItem={{
          icon: <Breadcrumbs items={[{ label: 'Reports', href: '#' }]} size="default" />,
          label: "Don't",
          description: "Don't link the current page item, don't use breadcrumbs for flat navigation, and don't exceed 5–6 levels without collapsing.",
        }}
      />
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Hierarchy first">
          Breadcrumbs exist to communicate depth, not to duplicate a side-nav. Only
          render them when there are two or more levels of hierarchy above the current page.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Accessible by default">
          The component wraps content in a nav landmark and applies aria-current="page"
          to the current item. Separators are hidden from assistive technology via
          aria-hidden="true".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Token-driven">
          Every visual attribute — colour, weight, size, gap — is driven by a design
          token, ensuring global updates to the system propagate automatically. Never
          override these values with hard-coded styles.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default BreadcrumbsDocs;
