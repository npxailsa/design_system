import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { ErrorButton } from './ErrorButton';

export const ErrorButtonDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="ErrorButton"
      subtitle="A status-specific button for error and destructive actions within the NPX Design System"
    />

    <DocsTemplate.BodyText>
      The <strong>ErrorButton</strong> is the primary CTA element used inside error-status
      notifications and modal cards. It comes in two visual variants —{' '}
      <strong>solid</strong> (red filled, white text) and <strong>ghost</strong> (white background,
      red border and text) — across three sizes. All styling is token-driven with no hardcoded
      values. It is always used inside a{' '}
      <strong>CardContent</strong> notification of status <code>error</code>, where the solid
      variant serves as the primary call-to-action and the ghost variant as the secondary.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ───────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>ButtonBase</strong> — the accessible, zero-style primitive shared
        across all button types in the design system. <code>ButtonBase</code> handles keyboard
        activation, disabled state propagation, and native <code>&lt;button&gt;</code> semantics.
        ErrorButton's red palette, border mechanics, and state transitions are applied entirely
        via CSS Modules and the <code>--btn-error-*</code> token family.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import\nimport ButtonBase from '@mui/material/ButtonBase';\n\n// Root element of ErrorButton:\n<ButtonBase component="button" className={styles['error-btn']} disabled={disabled} onClick={onClick}>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ──────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each ErrorButton renders three inline elements: a leading close (×) icon, a text label,
        and — in the loading state — a CSS spinner that replaces the icon. The anatomy below maps
        each element to its controlling design token.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <ErrorButton variant="solid" size="small" label="Error button" />
              <ErrorButton variant="solid" size="default" label="Error button" />
              <ErrorButton variant="solid" size="large" label="Error button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-error-solid-bg\n--btn-error-solid-border-color\n--btn-error-solid-border-width\n--btn-border-radius',
              description: 'Outer shell. Fill: color/status/red (#CE2031). Border: 0.5px solid red. Hover adds 2×2px black drop shadow. Focus uses 2px border. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-error-solid-color\n--btn-icon-size-{size}',
              description: 'Close (×) icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Hidden and replaced by spinner in loading state.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-font-weight\n--btn-error-solid-color',
              description: 'Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: color/base/white (#FFFFFF).',
            },
            {
              id: 4,
              name: 'Spinner',
              token: '--btn-spinner-size-{size}\n--btn-spinner-border-width\n--btn-spinner-opacity',
              description: 'CSS border-radius spinner shown only in loading state. Replaces the leading icon. Uses currentColor at 0.6 opacity.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <ErrorButton variant="ghost" size="small" label="Error button" />
              <ErrorButton variant="ghost" size="default" label="Error button" />
              <ErrorButton variant="ghost" size="large" label="Error button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-error-ghost-bg\n--btn-error-ghost-border-color\n--btn-error-ghost-border-width\n--btn-border-radius',
              description: 'Outer shell. Fill: white (#FFFFFF). Border: 1px solid red. Hover adds 2×2px black drop shadow and increases border to 2px. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-error-ghost-color\n--btn-icon-size-{size}',
              description: 'Close (×) icon — 14/16/18px. Fill: color/status/red (#CE2031). Hidden in loading state.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-error-ghost-color',
              description: 'Button text. F37 Ginger Pro Light. Colour: color/status/red (#CE2031).',
            },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Variants ─────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.BodyText>
        Two visual variants establish a clear action hierarchy within error-status contexts.
        Always pair <strong>solid</strong> as the primary action with <strong>ghost</strong> as
        the secondary — never two solid buttons side by side.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid — Primary CTA">
        <DocsTemplate.BodyText>
          Red filled background (#CE2031) with white text and icon. On hover a 2×2px black drop
          shadow is added. On focus the border increases to 2px with no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <ErrorButton variant="solid" size="small" label="Error button" />
          <ErrorButton variant="solid" size="default" label="Error button" />
          <ErrorButton variant="solid" size="large" label="Error button" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost — Secondary CTA">
        <DocsTemplate.BodyText>
          White background with a 1px red border and red text/icon. On hover the border increases
          to 2px and a 2×2px black drop shadow is applied. On focus a 2px border, no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <ErrorButton variant="ghost" size="small" label="Error button" />
          <ErrorButton variant="ghost" size="default" label="Error button" />
          <ErrorButton variant="ghost" size="large" label="Error button" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Sizes ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes scale the button for different card contexts. The size is set automatically
        by the parent <strong>CardContent</strong> component via its <code>size</code> prop
        (small → xs, default → sm, large → md in ButtonGroup).
      </DocsTemplate.BodyText>

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            sublabel: '34px height — compact notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <ErrorButton variant="solid" size="small" label="Error button" />
                <ErrorButton variant="ghost" size="small" label="Error button" />
              </div>
            ),
          },
          {
            label: 'Default',
            sublabel: '44px height — standard notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <ErrorButton variant="solid" size="default" label="Error button" />
                <ErrorButton variant="ghost" size="default" label="Error button" />
              </div>
            ),
          },
          {
            label: 'Large',
            sublabel: '56px height — prominent error modals',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <ErrorButton variant="solid" size="large" label="Error button" />
                <ErrorButton variant="ghost" size="large" label="Error button" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── States ───────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.Subsection title="Loading">
        <DocsTemplate.BodyText>
          Pass <code>loading</code> to replace the leading icon with a spinning CSS animation.
          The trailing icon is hidden and the button is non-interactive. The border uses the
          default stroke weight while loading.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <ErrorButton variant="solid" size="small" label="Error button" loading />
          <ErrorButton variant="solid" size="default" label="Error button" loading />
          <ErrorButton variant="solid" size="large" label="Error button" loading />
          <ErrorButton variant="ghost" size="default" label="Error button" loading />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          Disabled state uses explicit grey tokens (no opacity reduction). Both variants share
          the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <ErrorButton variant="solid" size="small" label="Label" disabled />
          <ErrorButton variant="solid" size="default" label="Label" disabled />
          <ErrorButton variant="solid" size="large" label="Label" disabled />
          <ErrorButton variant="ghost" size="default" label="Label" disabled />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Tokens ───────────────────────────────────────────────────────────── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Solid Variant"
      description="Colour tokens for the solid (primary) error button:"
      tokens={[
        { name: '--btn-error-solid-bg', description: 'Background — var(--global-color-status-red) #CE2031' },
        { name: '--btn-error-solid-color', description: 'Text & icon colour — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-error-solid-border-color', description: 'Border colour (all states) — var(--global-color-status-red) #CE2031' },
        { name: '--btn-error-solid-border-width', description: 'Default border width — var(--global-spacing-stroke-0-5px) 0.5px' },
        { name: '--btn-error-solid-border-width-hover', description: 'Hover border width — var(--global-spacing-stroke-2px) 2px' },
        { name: '--btn-error-solid-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)' },
        { name: '--btn-error-solid-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
        { name: '--btn-error-solid-border-width-loading', description: 'Loading border width — var(--global-spacing-stroke-0-5px) 0.5px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Ghost Variant"
      description="Colour tokens for the ghost (secondary) error button:"
      tokens={[
        { name: '--btn-error-ghost-bg', description: 'Background — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-error-ghost-color', description: 'Text & icon colour — var(--global-color-status-red) #CE2031' },
        { name: '--btn-error-ghost-border-color', description: 'Border colour — var(--global-color-status-red) #CE2031' },
        { name: '--btn-error-ghost-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-error-ghost-border-width-hover', description: 'Hover border width — var(--global-spacing-stroke-2px) 2px' },
        { name: '--btn-error-ghost-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)' },
        { name: '--btn-error-ghost-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Disabled (shared)"
      description="Tokens applied to both variants in the disabled state:"
      tokens={[
        { name: '--btn-error-bg-disabled', description: 'Background — var(--global-color-neutral-gray-100) #F3F4F6' },
        { name: '--btn-error-color-disabled', description: 'Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-error-border-color-disabled', description: 'Border colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-error-border-width-disabled', description: 'Border width — var(--global-spacing-stroke-0-5px) 0.5px' },
      ]}
    />

    {/* ── Usage ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.CodeBlock>
      {`import { ErrorButton } from '@/components/Button/ErrorButton/ErrorButton';

// Solid (primary CTA)
<ErrorButton variant="solid" label="Error button" />

// Ghost (secondary CTA)
<ErrorButton variant="ghost" label="Error button" />

// Size variants
<ErrorButton variant="solid" size="small" label="Error button" />
<ErrorButton variant="solid" size="large" label="Error button" />

// Loading state
<ErrorButton variant="solid" label="Error button" loading />

// Disabled state
<ErrorButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="error" heading="An error occurred" />`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ───────────────────────────────────────────────────────── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="One solid per error context">
        Each error notification or card should have exactly one <strong>solid</strong> ErrorButton
        as the primary CTA. Pair it with a <strong>ghost</strong> for secondary actions (e.g.
        "Dismiss" or "Cancel").
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Reserve for error status only">
        Do not use ErrorButton in success, warning, or info contexts. Use the corresponding
        SuccessButton, WarningButton, or standard ButtonGroup instead.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Never override status tokens">
        All colours must come from <code>--btn-error-*</code> tokens. Do not hardcode red values
        or add local CSS overrides. If the status colour needs to change, update the token.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    {/* ── Dos and Don'ts ───────────────────────────────────────────────────── */}
    <DocsTemplate.DosDonts
      doItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <ErrorButton variant="solid" label="Error button" />
            <ErrorButton variant="ghost" label="Error button" />
          </div>
        ),
        label: 'Solid + Ghost pair',
        description: 'Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the error card.',
      }}
      dontItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <ErrorButton variant="solid" label="Error button" />
            <ErrorButton variant="solid" label="Error button" />
          </div>
        ),
        label: 'Two solid buttons',
        description: "Don't use two solid ErrorButtons side by side. It creates confusion about which action is primary.",
      }}
    />

    {/* ── Related Links ────────────────────────────────────────────────────── */}
    <DocsTemplate.RelatedLinks
      links={[
        { label: 'Figma Library', href: 'https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1' },
        { label: 'CardContent component', href: '/?path=/story/atoms-cardcontent--documentation' },
        { label: 'WarningButton', href: '/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation' },
        { label: 'SuccessButton', href: '/?path=/story/atoms-buttons-statusbutton-successbutton--documentation' },
      ]}
    />

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default ErrorButtonDocs;
