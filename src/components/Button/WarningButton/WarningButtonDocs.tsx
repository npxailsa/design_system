import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { WarningButton } from './WarningButton';

export const WarningButtonDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="WarningButton"
      subtitle="A status-specific button for warning and cautionary actions within the NPX Design System"
    />

    <DocsTemplate.BodyText>
      The <strong>WarningButton</strong> is the primary CTA element used inside warning-status
      notifications and modal cards. It comes in two visual variants —{' '}
      <strong>solid</strong> (amber filled, black text) and <strong>ghost</strong> (white
      background, orange border, dark-orange text with a green-light hover fill) — across three
      sizes. All styling is token-driven with no hardcoded values. It is always paired with a
      parent <strong>CardContent</strong> of status <code>warning</code>, where the solid variant
      serves as the primary call-to-action and the ghost variant as the secondary.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ───────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>ButtonBase</strong> — the zero-style accessible primitive used by
        every button variant in this design system. <code>ButtonBase</code> provides keyboard
        activation, disabled propagation, and native <code>&lt;button&gt;</code> semantics.
        WarningButton's amber palette, border, and hover behaviour are applied via CSS Modules
        and the <code>--btn-warning-*</code> token family; MUI contributes no visual styles.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import\nimport ButtonBase from '@mui/material/ButtonBase';\n\n// Root element of WarningButton:\n<ButtonBase component="button" className={styles['warning-btn']} disabled={disabled} onClick={onClick}>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ──────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each WarningButton renders three inline elements: a leading user icon, a text label, and a
        trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS
        spinner and the trailing icon is hidden.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <WarningButton variant="solid" size="small" label="Warning button" />
              <WarningButton variant="solid" size="default" label="Warning button" />
              <WarningButton variant="solid" size="large" label="Warning button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-warning-solid-bg\n--btn-warning-solid-border-color\n--btn-warning-solid-border-width\n--btn-border-radius',
              description: 'Outer shell. Fill: color/status/orange (#F4A403). Border: 1px solid dark-orange. Hover adds 2×2px dark-orange drop shadow. Focus uses 2px border. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-warning-solid-color\n--btn-icon-size-{size}',
              description: 'User/account icon — 14px small, 16px default, 18px large. Fill: #1C1C1C (black, currentColor). Hidden and replaced by spinner in loading state.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-warning-solid-color',
              description: 'Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: color/base/black (#1C1C1C).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-warning-solid-color\n--btn-icon-size-{size}',
              description: 'Arrow-right icon — same size as leading icon. Fill: #1C1C1C. Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <WarningButton variant="ghost" size="small" label="Warning button" />
              <WarningButton variant="ghost" size="default" label="Warning button" />
              <WarningButton variant="ghost" size="large" label="Warning button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-warning-ghost-bg\n--btn-warning-ghost-bg-hover\n--btn-warning-ghost-border-color\n--btn-warning-ghost-border-width\n--btn-border-radius',
              description: 'Outer shell. Default fill: white. Border: 1px solid orange (#F4A403). Hover shifts bg to orange-light (#FEF4DA) + 2×2px dark-orange shadow. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-warning-ghost-color\n--btn-icon-size-{size}',
              description: 'User/account icon. Fill: color/status/dark-orange (#D07C06). 14/16/18px by size.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-warning-ghost-color',
              description: 'Button text. F37 Ginger Pro Light. Colour: dark-orange (#D07C06).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-warning-ghost-color\n--btn-icon-size-{size}',
              description: 'Arrow-right icon. Fill: dark-orange (#D07C06). Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Variants ─────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.BodyText>
        Two visual variants establish clear action hierarchy within warning contexts. Always pair
        <strong> solid</strong> as the primary action with <strong>ghost</strong> as the secondary
        — never two solid buttons side by side.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid — Primary CTA">
        <DocsTemplate.BodyText>
          Amber filled background (#F4A403) with dark-orange border and black text. On hover a
          2×2px dark-orange drop shadow is added. The background and text colours remain
          unchanged on hover (unlike SuccessButton). Focus uses a 2px border with no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <WarningButton variant="solid" size="small" label="Warning button" />
          <WarningButton variant="solid" size="default" label="Warning button" />
          <WarningButton variant="solid" size="large" label="Warning button" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost — Secondary CTA">
        <DocsTemplate.BodyText>
          White background with a 1px orange border and dark-orange text/icons. On hover the
          background shifts to orange-light (#FEF4DA) and a 2×2px dark-orange drop shadow is
          applied. On focus a 2px border, no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <WarningButton variant="ghost" size="small" label="Warning button" />
          <WarningButton variant="ghost" size="default" label="Warning button" />
          <WarningButton variant="ghost" size="large" label="Warning button" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Sizes ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes scale the button for different card contexts. Size is set automatically by
        the parent <strong>CardContent</strong> via its <code>size</code> prop.
      </DocsTemplate.BodyText>

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            sublabel: '34px height — compact notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <WarningButton variant="solid" size="small" label="Warning button" />
                <WarningButton variant="ghost" size="small" label="Warning button" />
              </div>
            ),
          },
          {
            label: 'Default',
            sublabel: '44px height — standard notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <WarningButton variant="solid" size="default" label="Warning button" />
                <WarningButton variant="ghost" size="default" label="Warning button" />
              </div>
            ),
          },
          {
            label: 'Large',
            sublabel: '56px height — prominent warning modals',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <WarningButton variant="solid" size="large" label="Warning button" />
                <WarningButton variant="ghost" size="large" label="Warning button" />
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
          Pass <code>loading</code> to replace the leading icon with a spinning CSS animation and
          hide the trailing arrow icon. The button is non-interactive during loading.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <WarningButton variant="solid" size="small" label="Warning button" loading />
          <WarningButton variant="solid" size="default" label="Warning button" loading />
          <WarningButton variant="solid" size="large" label="Warning button" loading />
          <WarningButton variant="ghost" size="default" label="Warning button" loading />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the
          same disabled appearance: grey-100 background, grey-400 text and border at 0.5px.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <WarningButton variant="solid" size="small" label="Label" disabled />
          <WarningButton variant="solid" size="default" label="Label" disabled />
          <WarningButton variant="solid" size="large" label="Label" disabled />
          <WarningButton variant="ghost" size="default" label="Label" disabled />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Tokens ───────────────────────────────────────────────────────────── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Solid Variant"
      description="Colour tokens for the solid (primary) warning button:"
      tokens={[
        { name: '--btn-warning-solid-bg', description: 'Background — var(--global-color-status-orange) #F4A403' },
        { name: '--btn-warning-solid-color', description: 'Text & icon colour — var(--global-color-base-black) #1C1C1C' },
        { name: '--btn-warning-solid-border-color', description: 'Border colour (all states) — var(--global-color-status-dark-orange) #D07C06' },
        { name: '--btn-warning-solid-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-warning-solid-border-width-hover', description: 'Hover border width — var(--global-spacing-stroke-1px) 1px (unchanged)' },
        { name: '--btn-warning-solid-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #D07C06 (dark-orange)' },
        { name: '--btn-warning-solid-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Ghost Variant"
      description="Colour tokens for the ghost (secondary) warning button:"
      tokens={[
        { name: '--btn-warning-ghost-bg', description: 'Default background — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-warning-ghost-bg-hover', description: 'Hover/active background — var(--global-color-status-orange-light) #FEF4DA' },
        { name: '--btn-warning-ghost-color', description: 'Text & icon colour — var(--global-color-status-dark-orange) #D07C06' },
        { name: '--btn-warning-ghost-border-color', description: 'Border colour — var(--global-color-status-orange) #F4A403' },
        { name: '--btn-warning-ghost-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-warning-ghost-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #D07C06 (dark-orange)' },
        { name: '--btn-warning-ghost-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Disabled (shared)"
      description="Tokens applied to both variants in the disabled state:"
      tokens={[
        { name: '--btn-warning-bg-disabled', description: 'Background — var(--global-color-neutral-gray-100) #F3F4F6' },
        { name: '--btn-warning-color-disabled', description: 'Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-warning-border-color-disabled', description: 'Border colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-warning-border-width-disabled', description: 'Border width — var(--global-spacing-stroke-0-5px) 0.5px' },
      ]}
    />

    {/* ── Usage ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.CodeBlock>
      {`import { WarningButton } from '@/components/Button/WarningButton/WarningButton';

// Solid (primary CTA)
<WarningButton variant="solid" label="Warning button" />

// Ghost (secondary CTA)
<WarningButton variant="ghost" label="Warning button" />

// Size variants
<WarningButton variant="solid" size="small" label="Warning button" />
<WarningButton variant="solid" size="large" label="Warning button" />

// Loading state
<WarningButton variant="solid" label="Warning button" loading />

// Disabled state
<WarningButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="warning" heading="Attention required" />`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ───────────────────────────────────────────────────────── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="One solid per warning context">
        Each warning notification or card should have exactly one <strong>solid</strong>{' '}
        WarningButton as the primary CTA. Pair it with a <strong>ghost</strong> for secondary
        actions (e.g. "Dismiss" or "Remind me later").
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Reserve for warning status only">
        Do not use WarningButton in error, success, or info contexts. Each status has its own
        dedicated button component with the correct colour tokens.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Never override status tokens">
        All colours must come from <code>--btn-warning-*</code> tokens. Do not hardcode orange
        values or add local CSS overrides. If the status colour needs to change, update the token.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    {/* ── Dos and Don'ts ───────────────────────────────────────────────────── */}
    <DocsTemplate.DosDonts
      doItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <WarningButton variant="solid" label="Warning button" />
            <WarningButton variant="ghost" label="Warning button" />
          </div>
        ),
        label: 'Solid + Ghost pair',
        description: 'Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the warning card.',
      }}
      dontItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <WarningButton variant="solid" label="Warning button" />
            <WarningButton variant="solid" label="Warning button" />
          </div>
        ),
        label: 'Two solid buttons',
        description: "Don't use two solid WarningButtons side by side. It creates confusion about which action is primary.",
      }}
    />

    {/* ── Related Links ────────────────────────────────────────────────────── */}
    <DocsTemplate.RelatedLinks
      links={[
        { label: 'Figma Library', href: 'https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1' },
        { label: 'CardContent component', href: '/?path=/story/atoms-cardcontent--documentation' },
        { label: 'ErrorButton', href: '/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation' },
        { label: 'SuccessButton', href: '/?path=/story/atoms-buttons-statusbutton-successbutton--documentation' },
      ]}
    />

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default WarningButtonDocs;
