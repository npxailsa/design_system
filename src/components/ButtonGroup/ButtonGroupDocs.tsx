import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupVariant, ButtonGroupSize } from './ButtonGroup';

const ALL_VARIANTS: Array<{ variant: ButtonGroupVariant; label: string; description: string }> = [
  {
    variant: 'primary',
    label: 'Primary',
    description: 'Blue filled buttons — highest visual weight. Use for the main group action in a toolbar or header.',
  },
  {
    variant: 'secondary',
    label: 'Secondary',
    description: 'Sky-blue tint buttons — moderate weight. Supporting group actions that accompany a primary control.',
  },
  {
    variant: 'tertiary',
    label: 'Tertiary',
    description: 'Yellow tint buttons — matches the Tertiary Button palette. Suitable for supplementary or contextual action groups.',
  },
  {
    variant: 'ghost',
    label: 'Ghost',
    description: 'White background with gray border — lowest visual weight. Use for secondary toolbars or de-emphasised UI zones.',
  },
];

const ALL_SIZES: Array<{ size: ButtonGroupSize; label: string; btnPx: string; iconPx: string }> = [
  { size: 'lg', label: 'Large',        btnPx: '52×52px', iconPx: '20px' },
  { size: 'md', label: 'Default (md)', btnPx: '42×42px', iconPx: '18px' },
  { size: 'sm', label: 'Small',        btnPx: '30×30px', iconPx: '16px' },
  { size: 'xs', label: 'Extra-small',  btnPx: '28×28px', iconPx: '14px' },
];

const PREVIEW_WRAP: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

export const ButtonGroupDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Button Group"
        subtitle="Horizontal clusters of icon-only square buttons in joined or separate layouts"
      />

      <DocsTemplate.BodyText>
        The <strong>Button Group</strong> component combines multiple icon-only square buttons into
        a cohesive horizontal cluster. It supports two layouts — <strong>joined</strong> (buttons
        share borders, no gap) and <strong>separate</strong> (individually spaced with a 6 px gap)
        — across four colour variants and four sizes, matching the rest of the design system's
        button family.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          Each slot in the group is a square icon-only <code>&lt;button&gt;</code> element. In
          <strong> joined</strong> mode the borders are merged (left/middle/right corner radii are
          adjusted and duplicate borders removed). In <strong>separate</strong> mode the first
          button uses the selected variant and the second is always ghost for visual contrast.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={PREVIEW_WRAP}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>Joined</span>
                <ButtonGroup variant="primary" size="md" layout="joined" count={4} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>Separate</span>
                <ButtonGroup variant="primary" size="md" layout="separate" />
              </div>
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-group-radius (4px)\n--btn-group-gap-separate (6px)',
              description: 'Flex row container. Joined layout has gap: 0 with merged button borders; separate layout has a 6 px gap between each button.',
            },
            {
              id: 2,
              name: 'Button Slot',
              token: '--btn-group-size-md (42×42px)\n--btn-group-border-width-filled (0.5px)\n--btn-group-border-width (1px)',
              description: 'Square icon-only button. Size is fixed per the size prop. Border-radius is adjusted per position in joined mode (left / middle / right).',
            },
            {
              id: 3,
              name: 'Icon',
              token: '--btn-group-icon-size-md (18px)',
              description: 'MUI Person icon centred within the button slot. Icon size scales with the size prop. Colour inherits from the variant text token.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Layouts ── */}
      <DocsTemplate.Section title="Layouts">
        <DocsTemplate.BodyText>
          Two layout modes control how buttons relate to each other.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
          {/* Joined */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', minWidth: 180 }}>
              <strong style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)' }}>Joined</strong>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 1.5 }}>
                Buttons share borders and appear as a single cohesive strip. All slots use the same variant colour. Default count: 4.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
              {ALL_VARIANTS.map(({ variant }) => (
                <ButtonGroup key={variant} variant={variant} size="md" layout="joined" count={4} />
              ))}
            </div>
          </div>

          {/* Separate */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', minWidth: 180 }}>
              <strong style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)' }}>Separate</strong>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 1.5 }}>
                Two individually spaced buttons with a 6 px gap. The first uses the selected variant; the second is always ghost for visual contrast.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
              {ALL_VARIANTS.map(({ variant }) => (
                <ButtonGroup key={variant} variant={variant} size="md" layout="separate" />
              ))}
            </div>
          </div>
        </div>
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Four colour variants ordered by visual weight. Use higher-weight variants to draw
          attention to primary groupings and lower-weight variants for supporting controls.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_VARIANTS.map(({ variant, label, description }) => (
            <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
              <div style={{ minWidth: 120 }}>
                <strong style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)', display: 'block' }}>{label}</strong>
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>{description}</span>
              </div>
              <ButtonGroup variant={variant} size="md" layout="joined" count={4} />
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes scale the button slot and icon proportionally. Choose based on the density
          of the surrounding UI — <code>xs</code> and <code>sm</code> for dense toolbars,
          <code> md</code> for standard controls, and <code>lg</code> for prominent headers.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map(({ size, label, btnPx, iconPx }) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
              <div style={{ minWidth: 140 }}>
                <strong style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)', display: 'block' }}>{label}</strong>
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>{btnPx} · icon {iconPx}</span>
              </div>
              <ButtonGroup variant="primary" size={size} layout="joined" count={4} />
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.BodyText>
          Button groups support a <strong>disabled</strong> state that applies to the entire group
          or to individual buttons. Disabled buttons use a neutral gray palette and ignore pointer
          events.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)', minWidth: 120 }}>Default (active)</span>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)', minWidth: 120 }}>Disabled (group)</span>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-base-black)', minWidth: 120 }}>Partial disable</span>
            <ButtonGroup
              variant="primary"
              size="md"
              layout="joined"
              buttons={[{}, { disabled: true }, {}, {}]}
            />
          </div>
        </div>
      </DocsTemplate.Section>

      {/* ── Full grid ── */}
      <DocsTemplate.Section title="All Variants × Sizes">
        <DocsTemplate.BodyText>
          Complete reference grid — all four variants shown at every size in joined layout.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
          {ALL_VARIANTS.map(({ variant, label }) => (
            <div key={variant}>
              <div style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                fontWeight: 'var(--global-type-weight-default)',
                color: 'var(--global-color-neutral-gray-600)',
                marginBottom: 'var(--global-spacing-sizing-8px)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {label}
              </div>
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'center', flexWrap: 'wrap' }}>
                {ALL_SIZES.map(({ size, label: sizeLabel }) => (
                  <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-6px)' }}>
                    <ButtonGroup variant={variant} size={size} layout="joined" count={4} />
                    <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)' }}>{sizeLabel}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Token Tables ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Shared"
        description="Tokens shared across all ButtonGroup variants and sizes:"
        tokens={[
          { name: '--btn-group-radius', description: 'Border radius — 4px (--global-spacing-radius-4px)' },
          { name: '--btn-group-border-width', description: 'Border width for ghost & tertiary — 1px (--global-spacing-stroke-1px)' },
          { name: '--btn-group-border-width-filled', description: 'Border width for primary & secondary — 0.5px (--global-spacing-stroke-0-5px)' },
          { name: '--btn-group-gap-separate', description: 'Gap between buttons in separate layout — 6px (--global-spacing-sizing-6px)' },
          { name: '--btn-group-transition-duration', description: 'Transition duration — var(--global-animation-duration-fast)' },
          { name: '--btn-group-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50' },
          { name: '--btn-group-border-disabled', description: 'Disabled border — --global-color-neutral-gray-200' },
          { name: '--btn-group-color-disabled', description: 'Disabled icon/text — --global-color-neutral-gray-400' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Variants"
        description="Per-variant colour tokens:"
        tokens={[
          { name: '--btn-group-primary-bg', description: 'Primary background — --brand-primary (#3776CE)' },
          { name: '--btn-group-primary-border', description: 'Primary border — --global-color-primary-blue-blue-300' },
          { name: '--btn-group-primary-color', description: 'Primary icon — --global-color-base-white' },
          { name: '--btn-group-primary-bg-hover', description: 'Primary hover — --global-color-primary-blue-blue-400' },
          { name: '--btn-group-secondary-bg', description: 'Secondary background — --global-color-primary-sky-blue-100' },
          { name: '--btn-group-secondary-border', description: 'Secondary border — --global-color-primary-sky-blue' },
          { name: '--btn-group-secondary-color', description: 'Secondary icon — --global-color-base-black' },
          { name: '--btn-group-tertiary-bg', description: 'Tertiary background — --global-color-primary-yellow-200' },
          { name: '--btn-group-tertiary-border', description: 'Tertiary border — --global-color-primary-yellow-dark' },
          { name: '--btn-group-tertiary-color', description: 'Tertiary icon — --global-color-base-black' },
          { name: '--btn-group-ghost-bg', description: 'Ghost background — --global-color-base-white' },
          { name: '--btn-group-ghost-border', description: 'Ghost border — --global-color-neutral-gray-500' },
          { name: '--btn-group-ghost-color', description: 'Ghost icon — --global-color-base-black' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Sizes"
        description="Button slot and icon sizing per size:"
        tokens={[
          { name: '--btn-group-size-xs', description: 'Extra-small button — 28×28px (--global-spacing-sizing-28px)' },
          { name: '--btn-group-icon-size-xs', description: 'Extra-small icon — 14px (--global-spacing-sizing-14px)' },
          { name: '--btn-group-size-sm', description: 'Small button — 30×30px' },
          { name: '--btn-group-icon-size-sm', description: 'Small icon — 16px (--global-spacing-sizing-16px)' },
          { name: '--btn-group-size-md', description: 'Default button — 42×42px (--global-spacing-sizing-42px)' },
          { name: '--btn-group-icon-size-md', description: 'Default icon — 18px (--global-spacing-sizing-18px)' },
          { name: '--btn-group-size-lg', description: 'Large button — 52×52px (--global-spacing-sizing-52px)' },
          { name: '--btn-group-icon-size-lg', description: 'Large icon — 20px (--global-spacing-sizing-20px)' },
        ]}
      />

      {/* ── Code Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { ButtonGroup } from '@/components/ButtonGroup';

// Joined layout — 4 buttons of the same variant
<ButtonGroup variant="primary" size="md" layout="joined" count={4} />
<ButtonGroup variant="secondary" size="md" layout="joined" count={4} />
<ButtonGroup variant="tertiary" size="md" layout="joined" count={4} />
<ButtonGroup variant="ghost" size="md" layout="joined" count={4} />

// Separate layout — 2 buttons (primary + ghost)
<ButtonGroup variant="primary" size="md" layout="separate" />

// With per-button click handlers
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[
    { ariaLabel: 'View', onClick: handleView },
    { ariaLabel: 'Edit', onClick: handleEdit },
    { ariaLabel: 'Share', onClick: handleShare },
    { ariaLabel: 'Delete', onClick: handleDelete },
  ]}
/>

// Different sizes
<ButtonGroup variant="primary" size="lg" layout="joined" count={4} />
<ButtonGroup variant="primary" size="sm" layout="joined" count={4} />
<ButtonGroup variant="primary" size="xs" layout="joined" count={4} />

// Disabled (entire group)
<ButtonGroup variant="primary" size="md" layout="joined" disabled />

// Partial disable (individual buttons)
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[{}, { disabled: true }, {}, {}]}
/>`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Use joined for cohesive action sets">
          Use <code>joined</code> layout when the buttons represent related, mutually-exclusive or
          complementary actions that belong together — e.g. view modes, pagination controls, or
          alignment options.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Limit groups to 2–6 buttons">
          Keep button groups concise. More than six icons without labels become opaque to the
          user. Consider a dropdown or menu component for larger action sets.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match the density of the surrounding UI">
          Choose size based on context — <code>xs</code> / <code>sm</code> for dense data grids,
          <code> md</code> for standard toolbars, and <code>lg</code> for prominent header areas
          with generous spacing.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default ButtonGroupDocs;
