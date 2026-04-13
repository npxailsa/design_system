import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupVariant, ButtonGroupSize, ButtonGroupSpecial } from './ButtonGroup';

const ALL_VARIANTS: ButtonGroupVariant[] = ['primary', 'secondary', 'tertiary', 'ghost'];
const ALL_SIZES: ButtonGroupSize[] = ['lg', 'md', 'sm', 'xs'];

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

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-600)',
  marginBottom: 'var(--global-spacing-sizing-8px)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};

export const ButtonGroupDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Button Group"
      subtitle="Horizontal clusters of icon-only or label-type buttons in joined or separate layouts. Supports two button types, four colour variants, four sizes, and two special styles."
    />

    <DocsTemplate.BodyText>
      The <strong>Button Group</strong> component combines multiple buttons into a cohesive
      horizontal cluster. Two <strong>button types</strong> are available:
    </DocsTemplate.BodyText>

    <DocsTemplate.BodyText>
      <strong>Icon type</strong> (<code>buttonType="icon"</code>) — square icon-only buttons
      matching the density requirements of toolbars and data views.
      <br />
      <strong>Label type</strong> (<code>buttonType="label"</code>) — rectangular buttons with
      a leading icon, text label, and trailing arrow — ideal for navigation, filter controls,
      and action triggers that benefit from explicit labels.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>ButtonBase</strong> — every individual button within the group
        is a <code>ButtonBase</code> element, ensuring consistent keyboard interaction, accessible
        focus handling, and disabled support across all buttons in the cluster. MUI icons from{' '}
        <code>@mui/icons-material</code> are used for the leading icons in label-type groups and
        the icon-only slots. No MUI layout container (ButtonGroup) is used — the joined/separate
        layout is implemented via CSS Modules and flex, giving full control over spacing and borders.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base imports\nimport ButtonBase from '@mui/material/ButtonBase';\nimport PersonIcon from '@mui/icons-material/Person'; // example icon\n\n// Each button in the group:\n<ButtonBase component="button" className={styles['btn-group__item']} onClick={onClick}>\n  <PersonIcon />\n</ButtonBase>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={PREVIEW_WRAP}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-600)' }}>Icon / Joined</span>
              <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-600)' }}>Icon / Separate</span>
              <ButtonGroup variant="primary" size="md" layout="separate" buttonType="icon" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-600)' }}>Label / Default</span>
              <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-600)' }}>Label / Alt</span>
              <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
            </div>
          </div>
        }
        parts={[
          { id: 1, name: 'Container', token: '--btn-group-radius, --btn-group-gap-separate', description: 'Flex row. Joined: gap:0, merged borders. Separate: 6px gap, full radius on each button.' },
          { id: 2, name: 'Button slot (icon)', token: '--btn-group-size-md (42×42px)', description: 'Square icon-only button. Border-radius adjusted per position in joined mode.' },
          { id: 3, name: 'Icon', token: '--btn-group-icon-size-md (18px)', description: 'PersonIcon centred in the slot. Scales with size prop.' },
          { id: 4, name: 'Button slot (label)', token: '--btn-group-label-height-md (44px), --btn-group-label-padding-md', description: 'Rectangular button with leading icon + text + trailing arrow.' },
          { id: 5, name: 'Label text', token: '--btn-group-label-font-size-md, --btn-group-label-font-weight', description: 'F37 Ginger, light weight. Scales with size prop.' },
          { id: 6, name: 'Trailing arrow', token: 'Inherits button color', description: 'Arrow-right icon indicating action/navigation.' },
          { id: 7, name: 'Loading spinner', token: 'Replaces icon when loading=true', description: 'Animated arc spinner. Shown on all buttons when loading=true, or per-button via buttons[n].loading.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Button Types ── */}
    <DocsTemplate.Section title="Button Types">
      <DocsTemplate.Subsection title="Icon Type (default)">
        <div style={PREVIEW_WRAP}>
          {ALL_VARIANTS.map((v) => (
            <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} buttonType="icon" />
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Label Type — special=default (solid)">
        <DocsTemplate.BodyText>
          Solid filled style. The button colour follows the <code>variant</code> prop.
          Defined in Figma as <em>special=default</em>.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
          {(['primary', 'secondary', 'ghost'] as ButtonGroupVariant[]).map((v) => (
            <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ ...sectionLabel, marginBottom: 0, width: 80 }}>{v}</span>
              <ButtonGroup variant={v} size="md" layout="separate" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Label Type — special=alt (tinted/outlined)">
        <DocsTemplate.BodyText>
          Tinted outline style: light blue background (<code>#F9F9FE</code>), blue border
          (<code>#95A0E5</code>), blue-gray text. Defined in Figma as <em>special=alt</em>.
          Use when you need a softer, secondary feel for label buttons.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          {ALL_SIZES.map((size) => (
            <ButtonGroup key={size} variant="primary" size={size} layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Layouts ── */}
    <DocsTemplate.Section title="Layouts">
      <DocsTemplate.Subsection title="Joined">
        <DocsTemplate.BodyText>
          Buttons share borders — no gap, merged border-radius per position (left/middle/right).
        </DocsTemplate.BodyText>
        <div style={PREVIEW_WRAP}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" />
            <ButtonGroup variant="primary" size="md" layout="joined" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
          </div>
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Separate">
        <DocsTemplate.BodyText>
          6px gap between each button. In icon mode, the second button is always ghost for visual contrast.
        </DocsTemplate.BodyText>
        <div style={PREVIEW_WRAP}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ButtonGroup variant="primary" size="md" layout="separate" buttonType="icon" />
            <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
            <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
          </div>
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.Subsection title="Icon Type — All Sizes">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ ...sectionLabel, marginBottom: 0, width: 40 }}>{size}</span>
              <ButtonGroup variant="primary" size={size} layout="joined" count={4} buttonType="icon" />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Label Type — All Sizes">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ ...sectionLabel, marginBottom: 0, width: 40 }}>{size}</span>
              <ButtonGroup variant="primary" size={size} layout="separate" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
              <ButtonGroup variant="primary" size={size} layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── States ── */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.Subsection title="Icon Type">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end' }}>
          {[
            { label: 'Default', el: <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" /> },
            { label: 'Loading', el: <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" loading /> },
            { label: 'Disabled', el: <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" disabled /> },
            { label: 'Ghost disabled', el: <ButtonGroup variant="ghost" size="md" layout="joined" count={4} buttonType="icon" disabled /> },
          ].map(({ label, el }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
              {el}
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)' }}>{label}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Label Type">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end' }}>
          {([
            { label: 'Default (solid)', el: <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} /> },
            { label: 'Default (alt)', el: <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} /> },
            { label: 'Loading', el: <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" loading buttons={[{ label: 'Saving…' }, { label: 'Loading' }]} /> },
            { label: 'Disabled (solid)', el: <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" disabled buttons={[{ label: 'Label' }, { label: 'Label' }]} /> },
            { label: 'Disabled (alt)', el: <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" disabled buttons={[{ label: 'Label' }, { label: 'Label' }]} /> },
          ] as { label: string; el: React.ReactNode }[]).map(({ label, el }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
              {el}
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textAlign: 'center' }}>{label}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Shared">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--btn-group-radius', description: 'Border radius — var(--global-spacing-radius-4px)' },
            { name: '--btn-group-border-width', description: 'Outline/ghost border — var(--global-spacing-stroke-1px)' },
            { name: '--btn-group-border-width-filled', description: 'Filled variant border — var(--global-spacing-stroke-0-5px)' },
            { name: '--btn-group-gap-separate', description: 'Gap in separate layout — var(--global-spacing-sizing-6px)' },
            { name: '--btn-group-bg-disabled', description: 'Disabled background — var(--global-color-neutral-gray-50)' },
            { name: '--btn-group-border-disabled', description: 'Disabled border — var(--global-color-neutral-gray-200)' },
            { name: '--btn-group-color-disabled', description: 'Disabled icon/text — var(--global-color-neutral-gray-400)' },
            { name: '--btn-group-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px)' },
            { name: '--btn-group-focus-outline-color', description: 'Focus outline colour — var(--global-color-primary-blue)' },
            { name: '--btn-group-focus-outline-width', description: 'Focus outline width — var(--global-spacing-stroke-2px)' },
            { name: '--btn-group-focus-outline-offset', description: 'Focus outline offset — var(--global-spacing-sizing-2px)' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Icon Variant Hover Shadows (separate layout)">
        <DocsTemplate.BodyText>
          In <code>separate</code> layout, each button receives a <code>box-shadow</code> on hover
          matching the Primary Button hover pattern — a 2px offset shadow in the variant colour.
        </DocsTemplate.BodyText>
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--btn-group-primary-shadow-hover', description: 'Primary icon hover shadow — 2px 2px blue-400' },
            { name: '--btn-group-secondary-shadow-hover', description: 'Secondary icon hover shadow — 2px 2px sky-blue' },
            { name: '--btn-group-tertiary-shadow-hover', description: 'Tertiary icon hover shadow — 2px 2px yellow-dark' },
            { name: '--btn-group-ghost-shadow-hover', description: 'Ghost icon hover shadow — 2px 2px gray-300' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Label Type">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--btn-group-label-min-width', description: 'Min width — var(--global-spacing-sizing-80px)' },
            { name: '--btn-group-label-inner-gap', description: 'Gap between icon/text/arrow — var(--global-spacing-sizing-8px)' },
            { name: '--btn-group-label-font-weight', description: 'Label text weight — var(--global-type-weight-light)' },
            { name: '--btn-group-label-height-md', description: 'Default height — var(--global-spacing-sizing-44px)' },
            { name: '--btn-group-label-padding-md', description: 'Default padding — 4px 16px (tokens)' },
            { name: '--btn-group-label-primary-bg', description: 'Solid primary bg — var(--global-color-primary-blue)' },
            { name: '--btn-group-label-primary-color', description: 'Solid primary text/icon — white' },
            { name: '--btn-group-label-primary-shadow-hover', description: 'Primary label hover shadow (separate) — 2px 2px blue-400' },
            { name: '--btn-group-label-alt-bg', description: 'Alt bg — var(--global-color-primary-blue-blue-50)' },
            { name: '--btn-group-label-alt-border', description: 'Alt border — var(--global-color-primary-blue-blue-300)' },
            { name: '--btn-group-label-alt-color', description: 'Alt text/icon — var(--global-color-secondary-blue-gray)' },
            { name: '--btn-group-label-alt-shadow-hover', description: 'Alt label hover shadow (separate) — 2px 2px blue-300' },
            { name: '--btn-group-label-alt-color-hover', description: 'Alt text colour on hover — var(--global-color-base-black)' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Code Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { ButtonGroup } from '@/components/ButtonGroup';

// Icon type — joined (default)
<ButtonGroup variant="primary" size="md" layout="joined" count={4} />

// Icon type — separate (primary + ghost pair)
<ButtonGroup variant="primary" size="md" layout="separate" />

// Label type — solid (special=default)
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  special="default"
  buttons={[{ label: 'Filter' }, { label: 'Sort' }]}
/>

// Label type — tinted/outlined (special=alt)
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  special="alt"
  buttons={[{ label: 'Filter' }, { label: 'Sort' }]}
/>

// Loading state
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  loading
  buttons={[{ label: 'Saving…' }, { label: 'Label' }]}
/>

// Disabled
<ButtonGroup variant="primary" size="md" layout="joined" count={4} disabled />

// With per-button config
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[
    { ariaLabel: 'View', onClick: handleView },
    { ariaLabel: 'Edit', onClick: handleEdit, disabled: true },
    { ariaLabel: 'Share', onClick: handleShare },
  ]}
/>`}</DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Design Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Choose type by context">
          Use <code>icon</code> type for dense toolbars and data views where space is limited.
          Use <code>label</code> type for navigation, filter bars, or actions that need explicit labels.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Use special=alt for secondary emphasis">
          The <code>alt</code> tinted style is appropriate when the label group is a secondary control
          next to a more prominent element. The solid <code>default</code> draws more attention.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match the density of the surrounding UI">
          Choose size based on context — <code>xs</code>/<code>sm</code> for dense grids,
          <code>md</code> for standard toolbars, <code>lg</code> for prominent headers.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Limit groups to 2–6 buttons">
          Keep button groups concise. More than six unlabelled icon buttons become opaque to users.
          For label buttons, 2–3 is ideal. Use a dropdown for larger action sets.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default ButtonGroupDocs;
