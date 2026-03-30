import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { FilterSortButton } from './FilterSortButton';
import type { FilterSortVariant, FilterSortSize } from './FilterSortButton';

const VARIANTS: Array<{ variant: FilterSortVariant; label: string; description: string }> = [
  {
    variant: 'primary',
    label: 'Primary',
    description: 'Navy filled button. Used for the primary action (e.g. Filter) in a toolbar. High visual weight — use once per toolbar.',
  },
  {
    variant: 'secondary',
    label: 'Secondary',
    description: 'Sky-blue tint with sky-blue border. Moderate visual weight — suitable for a supporting action like secondary filter or sort.',
  },
  {
    variant: 'tertiary',
    label: 'Tertiary',
    description: 'Yellow tint with yellow-dark border. Matches the Tertiary Button colour scheme — ideal for additional toolbar options.',
  },
  {
    variant: 'ghost',
    label: 'Ghost',
    description: 'White background with gray border. Lowest visual weight — use for supplementary actions like "More actions".',
  },
];

const SIZES: Array<{ size: FilterSortSize; label: string; pad: string; font: string }> = [
  { size: 'lg', label: 'Large', pad: '8px / 20px–16px', font: '18px' },
  { size: 'md', label: 'Default', pad: '6px / 16px–12px', font: '16px' },
  { size: 'sm', label: 'Small', pad: '4px / 16px–12px', font: '14px' },
  { size: 'xs', label: 'Extra-small', pad: '2px / 12px–8px', font: '12px' },
];

export const FilterSortButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Filter Sort Button"
        subtitle="Compact toolbar-action buttons for filtering, sorting, and other table or list controls"
      />

      <DocsTemplate.BodyText>
        The <strong>Filter Sort Button</strong> is a purpose-built action button for use inside
        table toolbars, list headers, and data-control panels. It comes in four visual variants
        (primary, secondary, tertiary, ghost) and four sizes (xs–lg). A leading icon provides
        instant visual context, while the label communicates the action clearly.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          Each button contains a <strong>leading icon</strong> (MUI Person) on the left and a
          <strong> label</strong> on the right. Padding is intentionally asymmetric — slightly
          more on the right to balance optical weight with the icon.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--global-spacing-sizing-16px)',
              padding: 'var(--global-spacing-sizing-32px)',
              background: 'var(--global-color-neutral-gray-50)',
              borderRadius: 'var(--global-spacing-radius-8px)',
              flexWrap: 'wrap',
            }}>
              <FilterSortButton variant="primary" size="md" label="Filter" />
              <FilterSortButton variant="secondary" size="md" label="Sort" />
              <FilterSortButton variant="tertiary" size="md" label="More actions" />
              <FilterSortButton variant="ghost" size="md" label="Filter" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-filter-radius (4px)\n--btn-filter-border-width (1px)',
              description: '4px border radius — distinct from pill-shaped buttons. Padding is asymmetric: larger on the right, smaller on the icon-leading left.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-filter-icon-size-md (18px)\n--btn-filter-gap-md (8px)',
              description: 'MUI Person icon. Size and gap scale with the button size. Colour inherits from the variant text token.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-filter-font-family (F37 Ginger Pro)\n--btn-filter-font-weight (300)\n--btn-filter-font-size-md (16px)',
              description: 'Set the label to "Filter", "Sort", "More actions", or any custom string. Font size scales with the size prop.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Four colour variants ordered by visual weight. Use only the weights needed for your
          toolbar hierarchy — avoid using all four together.
        </DocsTemplate.BodyText>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-16px)',
          maxWidth: '560px',
        }}>
          {VARIANTS.map(({ variant, label, description }) => (
            <div
              key={variant}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                alignItems: 'start',
                gap: 'var(--global-spacing-sizing-16px)',
              }}
            >
              <FilterSortButton variant={variant} size="md" label="Filter" />
              <div>
                <div style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-sm)',
                  fontWeight: 'var(--global-type-weight-default)',
                  color: 'var(--global-color-base-black)',
                  marginBottom: 'var(--global-spacing-sizing-2px)',
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  fontWeight: 'var(--global-type-weight-light)',
                  color: 'var(--global-color-neutral-gray-600)',
                  lineHeight: 'var(--global-type-line-height-label)',
                }}>
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes — choose based on the density of the surrounding UI. Extra-small works
          well in tight toolbars; large suits prominent control bars with more breathing room.
        </DocsTemplate.BodyText>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-12px)',
        }}>
          {SIZES.map(({ size, label, pad, font }) => (
            <div
              key={size}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 80px 80px 1fr',
                alignItems: 'center',
                gap: 'var(--global-spacing-sizing-16px)',
              }}
            >
              <FilterSortButton variant="primary" size={size} label="Filter" />
              <div style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-600)',
              }}>
                {label}
              </div>
              <div style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-600)',
              }}>
                {font}
              </div>
              <div style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-600)',
              }}>
                {pad}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Labels ── */}
      <DocsTemplate.Section title="Labels">
        <DocsTemplate.BodyText>
          Three standard label values are used in table and list toolbars. Any custom string
          is also supported via the <code>label</code> prop.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)' }}>
          {['Filter', 'Sort', 'More actions'].map((lbl) => (
            <FilterSortButton key={lbl} variant="primary" size="md" label={lbl} />
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Disabled ── */}
      <DocsTemplate.Section title="Disabled State">
        <DocsTemplate.BodyText>
          All variants share the same disabled appearance: gray-50 background, gray-200 border,
          and gray-400 text. The cursor switches to <code>not-allowed</code> and pointer events
          are removed. Disabled tokens override the variant colour tokens.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
          {(['primary', 'secondary', 'tertiary', 'ghost'] as FilterSortVariant[]).map((v) => (
            <FilterSortButton key={v} variant={v} size="md" label="Filter" disabled />
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Shared"
        description="Base tokens that apply to all variants and sizes:"
        tokens={[
          { name: '--btn-filter-radius', description: 'Border radius — --global-spacing-radius-4px (4px)' },
          { name: '--btn-filter-border-width', description: 'Border width — --global-spacing-stroke-1px (1px)' },
          { name: '--btn-filter-font-family', description: 'Font — --brand-font-primary (F37 Ginger Pro)' },
          { name: '--btn-filter-font-weight', description: 'Font weight — --global-type-weight-light (300)' },
          { name: '--btn-filter-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50' },
          { name: '--btn-filter-border-disabled', description: 'Disabled border — --global-color-neutral-gray-200' },
          { name: '--btn-filter-color-disabled', description: 'Disabled text — --global-color-neutral-gray-400' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Variants"
        description="Colour tokens per variant:"
        tokens={[
          { name: '--btn-filter-primary-bg', description: 'Primary background — --global-color-secondary-navy (#3A3282)' },
          { name: '--btn-filter-primary-border', description: 'Primary border — --global-color-secondary-navy' },
          { name: '--btn-filter-primary-color', description: 'Primary text — --global-color-base-white' },
          { name: '--btn-filter-primary-shadow-hover', description: 'Primary hover shadow — 2px 2px blue-400' },
          { name: '--btn-filter-secondary-bg', description: 'Secondary background — --global-color-primary-sky-blue-100 (#D6F0FB)' },
          { name: '--btn-filter-secondary-border', description: 'Secondary border — --global-color-primary-sky-blue (#0BA7EA)' },
          { name: '--btn-filter-secondary-color', description: 'Secondary text — --global-color-base-black' },
          { name: '--btn-filter-secondary-shadow-hover', description: 'Secondary hover shadow — 2px 2px sky-blue' },
          { name: '--btn-filter-tertiary-bg', description: 'Tertiary background — --global-color-primary-yellow-200' },
          { name: '--btn-filter-tertiary-border', description: 'Tertiary border — --global-color-primary-yellow-dark' },
          { name: '--btn-filter-tertiary-color', description: 'Tertiary text — --global-color-base-black' },
          { name: '--btn-filter-tertiary-shadow-hover', description: 'Tertiary hover shadow — 2px 2px yellow-dark' },
          { name: '--btn-filter-ghost-bg', description: 'Ghost background — --global-color-base-white' },
          { name: '--btn-filter-ghost-border', description: 'Ghost border — --global-color-neutral-gray-300' },
          { name: '--btn-filter-ghost-color', description: 'Ghost text — --global-color-base-black' },
          { name: '--btn-filter-ghost-shadow-hover', description: 'Ghost hover shadow — 2px 2px gray-300' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Sizes"
        description="Sizing tokens per size (xs / sm / md / lg):"
        tokens={[
          { name: '--btn-filter-padding-xs', description: 'Extra-small padding — 2px 12px 2px 8px' },
          { name: '--btn-filter-padding-sm', description: 'Small padding — 4px 16px 4px 12px' },
          { name: '--btn-filter-padding-md', description: 'Default padding — 6px 16px 6px 12px' },
          { name: '--btn-filter-padding-lg', description: 'Large padding — 8px 20px 8px 16px' },
          { name: '--btn-filter-font-size-xs', description: 'Extra-small font size — 12px (--global-type-size-primary-label-xs)' },
          { name: '--btn-filter-font-size-sm', description: 'Small font size — 14px (--global-type-size-primary-label-sm)' },
          { name: '--btn-filter-font-size-md', description: 'Default font size — 16px (--global-type-size-primary-label)' },
          { name: '--btn-filter-font-size-lg', description: 'Large font size — 18px (--global-type-size-primary-label-lg)' },
          { name: '--btn-filter-icon-size-xs', description: 'Extra-small icon — 14px' },
          { name: '--btn-filter-icon-size-sm', description: 'Small icon — 16px' },
          { name: '--btn-filter-icon-size-md', description: 'Default icon — 18px' },
          { name: '--btn-filter-icon-size-lg', description: 'Large icon — 20px' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { FilterSortButton } from '@/components/FilterSortButton';

// Default usage
<FilterSortButton variant="primary" size="md" label="Filter" onClick={handleFilter} />
<FilterSortButton variant="secondary" size="md" label="Sort" onClick={handleSort} />
<FilterSortButton variant="ghost" size="md" label="More actions" onClick={handleMore} />

// Different sizes
<FilterSortButton variant="primary" size="lg" label="Filter" />
<FilterSortButton variant="primary" size="sm" label="Filter" />
<FilterSortButton variant="primary" size="xs" label="Filter" />

// Disabled
<FilterSortButton variant="primary" size="md" label="Filter" disabled />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Limit to one primary per toolbar">
          Use a single <code>primary</code> variant button per toolbar to establish a clear visual
          anchor. Supporting actions should use secondary, tertiary, or ghost variants.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match the density of the surrounding UI">
          Choose size based on the context — <code>xs</code> and <code>sm</code> for dense data
          grids, <code>md</code> for standard toolbars, and <code>lg</code> for prominent header
          controls with generous spacing.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Keep labels short and action-oriented">
          Standard labels are "Filter", "Sort", and "More actions". Custom labels should be
          short, imperative verbs. Avoid decorative or explanatory text in toolbar buttons.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default FilterSortButtonDocs;
