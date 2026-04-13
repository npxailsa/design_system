import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Card } from './Card';
import type { CardBg, CardSize } from './Card';

const ALL_BG: CardBg[] = [
  'default',
  'sky-blue',
  'error',
  'success',
  'warning',
  'info-blue',
  'note-purple',
  'light-gray',
  'black',
  'blue',
  'dark-gray',
];

const ALL_SIZES: CardSize[] = ['small', 'default', 'large'];

const BG_LABELS: Record<CardBg, string> = {
  'default': 'Default (White)',
  'sky-blue': 'Sky Blue',
  'error': 'Error',
  'success': 'Success',
  'warning': 'Warning',
  'info-blue': 'Info Blue',
  'note-purple': 'Note Purple',
  'light-gray': 'Light Gray',
  'black': 'Black',
  'blue': 'Blue',
  'dark-gray': 'Dark Gray',
};

const previewWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-end',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-100)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

export const CardDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Card"
      subtitle="Foundational surface building block with 11 background themes, 3 sizes, light/dark mode, and optional drop-shadow."
    />

    <DocsTemplate.BodyText>
      The <strong>Card</strong> is the base surface primitive used to create contained,
      visually distinct regions of the UI. It supports multiple background colour themes
      mapped directly to status and brand tokens, three sizes for layout flexibility,
      and a drop-shadow / flat-border toggle.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        The Card is a <strong>pure React component</strong> with no MUI layout primitive as its
        base. It renders as a plain <code>&lt;div&gt;</code>, giving the design system full control
        over background, border, radius, shadow, and sizing via CSS Modules and the{' '}
        <code>--card-*</code> token family. MUI is not used for the Card container itself —
        this deliberate choice avoids inheriting MUI Paper or Card defaults that would conflict
        with the NPX visual specification. MUI icons may be placed as slot content inside a Card,
        but they are not part of the Card component API.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// No MUI base import required\n// Card renders as a plain <div>:\n<div className={styles.card} data-size={size} data-bg={bg} data-mode={mode}>\n  {children}\n</div>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <Card size="large" bg="default" dropShadow />
            <Card size="large" bg="sky-blue" dropShadow />
            <Card size="large" bg="error" mode="light" dropShadow />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Container',
            token: '--card-border-radius (6px)\n--card-bg (white)',
            description: 'The outer card surface. Background, border colour, and radius are controlled by the bg + mode token pair.',
          },
          {
            id: 2,
            name: 'Border',
            token: '--card-border-width (0.5px)\n--card-border-color (gray-300)',
            description: 'A subtle border that reinforces the card edge. Thickens to 1px and changes colour when dropShadow=false.',
          },
          {
            id: 3,
            name: 'Drop Shadow',
            token: '--card-shadow',
            description: 'A soft diffuse shadow (0 5px 10px rgba(39,39,39,0.1)) applied when dropShadow=true. Removed entirely when false.',
          },
          {
            id: 4,
            name: 'Content Slot',
            token: '--card-padding-sm / -default / -lg',
            description: 'The inner area where child content is placed. Padding scales with the size prop.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes scale both the container and the internal padding.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
            <Card size={size} bg="default" dropShadow />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', textTransform: 'capitalize' }}>
              {size}
            </span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Background colours — light mode with shadow ── */}
    <DocsTemplate.Section title="Background Colours — Light Mode (with Shadow)">
      <DocsTemplate.BodyText>
        All 11 background themes in light mode with drop-shadow enabled.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)', background: 'var(--global-color-neutral-gray-100)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
        {ALL_BG.map((bg) => (
          <div key={bg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-4px)' }}>
            <Card size="default" bg={bg} mode="light" dropShadow />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)', color: 'var(--global-color-neutral-gray-600)', textAlign: 'center', maxWidth: '80px', lineHeight: '1.3' }}>
              {BG_LABELS[bg]}
            </span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Background colours — light mode flat ── */}
    <DocsTemplate.Section title="Background Colours — Light Mode (Flat / No Shadow)">
      <DocsTemplate.BodyText>
        Same themes with dropShadow disabled. Border-width increases to 1px.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px)', background: 'var(--global-color-neutral-gray-100)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
        {ALL_BG.map((bg) => (
          <div key={bg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-4px)' }}>
            <Card size="default" bg={bg} mode="light" dropShadow={false} />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)', color: 'var(--global-color-neutral-gray-600)', textAlign: 'center', maxWidth: '80px', lineHeight: '1.3' }}>
              {BG_LABELS[bg]}
            </span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Dark mode ── */}
    <DocsTemplate.Section title="Dark Mode Variants">
      <DocsTemplate.BodyText>
        Themes that respond to mode="dark". The default, sky-blue, error, and success
        backgrounds flip to their darker counterparts.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-800)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
        {(['default', 'sky-blue', 'error', 'success'] as CardBg[]).map((bg) => (
          <div key={bg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-4px)' }}>
            <Card size="default" bg={bg} mode="dark" dropShadow />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center' }}>
              {BG_LABELS[bg]}
            </span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Sizes × All Colours ── */}
    <DocsTemplate.Section title="All Sizes × All Colours (Light, with Shadow)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', fontWeight: 'var(--global-type-weight-semibold)', color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize', marginBottom: 'var(--global-spacing-sizing-12px)' }}>
              {size}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)' }}>
              {ALL_BG.map((bg) => (
                <Card key={bg} size={size} bg={bg} mode="light" dropShadow />
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Sizes"
      description="Container dimensions and internal padding per size:"
      tokens={[
        { name: '--card-size-sm', description: 'Small container — 100 × 100px' },
        { name: '--card-size-default', description: 'Default container — 140 × 140px' },
        { name: '--card-size-lg', description: 'Large container — 180 × 180px' },
        { name: '--card-padding-sm', description: 'Small padding — --global-spacing-sizing-16px (16px)' },
        { name: '--card-padding-default', description: 'Default padding — --global-spacing-sizing-24px (24px)' },
        { name: '--card-padding-lg', description: 'Large padding — --global-spacing-sizing-32px (32px)' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Structure"
      description="Border, radius, and shadow:"
      tokens={[
        { name: '--card-border-radius', description: 'Corner radius — --global-spacing-radius-6px (6px)' },
        { name: '--card-border-width', description: 'Border width with shadow — 0.5px' },
        { name: '--card-border-width-flat', description: 'Border width without shadow — --global-spacing-stroke-1px (1px)' },
        { name: '--card-border-color', description: 'Default border colour — --global-color-neutral-gray-300' },
        { name: '--card-shadow', description: 'Drop shadow — 0px 5px 10px 0px rgba(39,39,39,0.1)' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Background Colours"
      description="Per-theme background tokens (light mode values shown):"
      tokens={[
        { name: '--card-bg-default', description: 'White — --global-color-base-white' },
        { name: '--card-bg-sky-blue', description: 'Sky Blue tint — --global-color-primary-sky-blue-50 (#F4FCFF)' },
        { name: '--card-bg-blue', description: 'Primary Blue — --global-color-primary-blue (#2F42BD)' },
        { name: '--card-bg-error-light', description: 'Error light — --global-color-status-red-light (#FBEBEB)' },
        { name: '--card-bg-error-dark', description: 'Error dark — --global-color-status-red (#CE2031)' },
        { name: '--card-bg-success-light', description: 'Success light — --global-color-status-green-light (#F2FFF1)' },
        { name: '--card-bg-success-dark', description: 'Success dark — --global-color-status-dark-green (#227F1A)' },
        { name: '--card-bg-warning', description: 'Warning — --global-color-status-orange-light (#FEF4DA)' },
        { name: '--card-bg-info-blue', description: 'Info Blue — --global-color-status-info-blue-light (#F5FCFF)' },
        { name: '--card-bg-note-purple', description: 'Note Purple — --global-color-status-purple-light (#FBF7FF)' },
        { name: '--card-bg-light-gray', description: 'Light Gray — --global-color-neutral-gray-50 (#F9FAFB)' },
        { name: '--card-bg-black', description: 'Black — --global-color-base-black (#1C1C1C)' },
        { name: '--card-bg-dark-gray', description: 'Dark Gray — --global-color-neutral-gray-600 (#4B5563)' },
      ]}
    />

    {/* ── Code ── */}
    <DocsTemplate.CodeBlock>
      {`import { Card } from '@/components/BuildingBlocks/Card';

// Default white card with shadow
<Card size="default" bg="default" dropShadow />

// Error card (light mode, with shadow)
<Card size="default" bg="error" mode="light" dropShadow />

// Success card (dark mode, flat / no shadow)
<Card size="large" bg="success" mode="dark" dropShadow={false} />

// Warning card with content
<Card size="large" bg="warning">
  <p>Card content goes here</p>
</Card>`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="Use semantic background themes">
        Match the card bg to its content purpose. Use <code>error</code>, <code>warning</code>,
        and <code>success</code> only when the card communicates a status. Use <code>default</code>
        (white) for neutral content and <code>sky-blue</code> / <code>info-blue</code> for
        informational or primary contexts.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Shadow vs flat for surface hierarchy">
        Use <code>dropShadow=true</code> to elevate a card above the page surface — ideal
        for standalone tiles, modals, or panels. Use <code>dropShadow=false</code> (flat)
        for cards nested inside another surface where additional elevation would create
        visual noise.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Reserve dark mode for intentional contrast">
        The <code>mode="dark"</code> variants are designed for use on dark backgrounds or
        as strong visual anchors. Do not mix light and dark cards in the same group —
        keep mode consistent within a surface.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={4} title="Size to the content density">
        The Card sets a fixed footprint — size it by the density of the layout around it,
        not by the amount of content inside. Use <code>small</code> for decorative swatches
        and status indicators, <code>default</code> for standard tiles, and <code>large</code>
        for prominent feature areas.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default CardDocs;
