import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { InfoButton } from './InfoButton';

export const InfoButtonDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="InfoButton"
      subtitle="A status-specific button for informational actions within the NPX Design System"
    />

    <DocsTemplate.BodyText>
      The <strong>InfoButton</strong> is the primary CTA element used inside info-status
      notifications and modal cards. It comes in two visual variants —{' '}
      <strong>solid</strong> (info-blue filled, white text) and <strong>ghost</strong> (white
      background, info-blue border and text, with an info-blue-light hover fill) — across three
      sizes. All styling is token-driven with no hardcoded values. It is always paired with a
      parent <strong>CardContent</strong> of status <code>info</code>, where the solid variant
      serves as the primary call-to-action and the ghost as the secondary.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ──────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each InfoButton renders three inline elements: a leading user icon, a text label, and a
        trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS
        spinner and the trailing icon is hidden.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <InfoButton variant="solid" size="small" label="Info button" />
              <InfoButton variant="solid" size="default" label="Info button" />
              <InfoButton variant="solid" size="large" label="Info button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-info-solid-bg\n--btn-info-solid-border-color\n--btn-info-solid-border-width\n--btn-border-radius',
              description: 'Outer shell. Fill: color/status/info-blue (#366F97). Border: 1px solid same color. Hover adds 2×2px info-blue drop shadow. Focus uses 2px border. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-info-solid-color\n--btn-icon-size-{size}',
              description: 'User/account icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Replaced by spinner in loading state.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-info-solid-color',
              description: 'Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: white (#FFFFFF).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-info-solid-color\n--btn-icon-size-{size}',
              description: 'Arrow-right icon. Same size as leading. Fill: white. Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <InfoButton variant="ghost" size="small" label="Info button" />
              <InfoButton variant="ghost" size="default" label="Info button" />
              <InfoButton variant="ghost" size="large" label="Info button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-info-ghost-bg\n--btn-info-ghost-bg-hover\n--btn-info-ghost-border-color\n--btn-info-ghost-border-width\n--btn-border-radius',
              description: 'Outer shell. Default fill: white. Border: 1px solid info-blue. Hover shifts bg to info-blue-light (#F5FCFF) + 2×2px info-blue shadow. Focus: 2px border. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-info-ghost-color\n--btn-icon-size-{size}',
              description: 'User/account icon. Fill: info-blue (#366F97). 14/16/18px by size.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-info-ghost-color',
              description: 'Button text. F37 Ginger Pro Light. Colour: info-blue (#366F97).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-info-ghost-color\n--btn-icon-size-{size}',
              description: 'Arrow-right icon. Fill: info-blue (#366F97). Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Variants ─────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.BodyText>
        Two visual variants establish clear action hierarchy within info contexts. Always pair
        <strong> solid</strong> as the primary action with <strong>ghost</strong> as the secondary
        — never two solid buttons side by side.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid — Primary CTA">
        <DocsTemplate.BodyText>
          Info-blue (#366F97) filled background with matching border and white text. On hover a
          2×2px info-blue drop shadow is added; the background remains unchanged. On focus a 2px
          border is applied with no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <InfoButton variant="solid" size="small" label="Info button" />
          <InfoButton variant="solid" size="default" label="Info button" />
          <InfoButton variant="solid" size="large" label="Info button" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost — Secondary CTA">
        <DocsTemplate.BodyText>
          White background with a 1px info-blue border and info-blue text/icons. On hover the
          background shifts to info-blue-light (#F5FCFF) and a 2×2px info-blue drop shadow is
          applied. On focus a 2px border with no shadow.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <InfoButton variant="ghost" size="small" label="Info button" />
          <InfoButton variant="ghost" size="default" label="Info button" />
          <InfoButton variant="ghost" size="large" label="Info button" />
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
                <InfoButton variant="solid" size="small" label="Info button" />
                <InfoButton variant="ghost" size="small" label="Info button" />
              </div>
            ),
          },
          {
            label: 'Default',
            sublabel: '44px height — standard notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <InfoButton variant="solid" size="default" label="Info button" />
                <InfoButton variant="ghost" size="default" label="Info button" />
              </div>
            ),
          },
          {
            label: 'Large',
            sublabel: '56px height — prominent info modals',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <InfoButton variant="solid" size="large" label="Info button" />
                <InfoButton variant="ghost" size="large" label="Info button" />
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
          <InfoButton variant="solid" size="small" label="Info button" loading />
          <InfoButton variant="solid" size="default" label="Info button" loading />
          <InfoButton variant="solid" size="large" label="Info button" loading />
          <InfoButton variant="ghost" size="default" label="Info button" loading />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the
          same disabled appearance: grey-100 background, grey-400 text and border at 0.5px.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <InfoButton variant="solid" size="small" label="Label" disabled />
          <InfoButton variant="solid" size="default" label="Label" disabled />
          <InfoButton variant="solid" size="large" label="Label" disabled />
          <InfoButton variant="ghost" size="default" label="Label" disabled />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Tokens ───────────────────────────────────────────────────────────── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Solid Variant"
      description="Colour tokens for the solid (primary) info button:"
      tokens={[
        { name: '--btn-info-solid-bg', description: 'Background — var(--global-color-status-info-blue) #366F97' },
        { name: '--btn-info-solid-color', description: 'Text & icon colour — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-info-solid-border-color', description: 'Border colour (all states) — var(--global-color-status-info-blue) #366F97' },
        { name: '--btn-info-solid-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-info-solid-border-width-hover', description: 'Hover border width — var(--global-spacing-stroke-1px) 1px (unchanged)' },
        { name: '--btn-info-solid-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)' },
        { name: '--btn-info-solid-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
        { name: '--btn-info-solid-border-width-loading', description: 'Loading border width — var(--global-spacing-stroke-1px) 1px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Ghost Variant"
      description="Colour tokens for the ghost (secondary) info button:"
      tokens={[
        { name: '--btn-info-ghost-bg', description: 'Default background — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-info-ghost-bg-hover', description: 'Hover/active background — var(--global-color-status-info-blue-light) #F5FCFF' },
        { name: '--btn-info-ghost-color', description: 'Text & icon colour — var(--global-color-status-info-blue) #366F97' },
        { name: '--btn-info-ghost-border-color', description: 'Border colour — var(--global-color-status-info-blue) #366F97' },
        { name: '--btn-info-ghost-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-info-ghost-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)' },
        { name: '--btn-info-ghost-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Disabled (shared)"
      description="Tokens applied to both variants in the disabled state:"
      tokens={[
        { name: '--btn-info-bg-disabled', description: 'Background — var(--global-color-neutral-gray-100) #F3F4F6' },
        { name: '--btn-info-color-disabled', description: 'Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-info-border-color-disabled', description: 'Border colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-info-border-width-disabled', description: 'Border width — var(--global-spacing-stroke-0-5px) 0.5px' },
      ]}
    />

    {/* ── Usage ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.CodeBlock>
      {`import { InfoButton } from '@/components/Button/InfoButton/InfoButton';

// Solid (primary CTA)
<InfoButton variant="solid" label="Info button" />

// Ghost (secondary CTA)
<InfoButton variant="ghost" label="Info button" />

// Size variants
<InfoButton variant="solid" size="small" label="Info button" />
<InfoButton variant="solid" size="large" label="Info button" />

// Loading state
<InfoButton variant="solid" label="Info button" loading />

// Disabled state
<InfoButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="info" heading="Did you know?" />`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ───────────────────────────────────────────────────────── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="One solid per info context">
        Each info notification or card should have exactly one <strong>solid</strong> InfoButton as
        the primary CTA. Pair it with a <strong>ghost</strong> for secondary actions (e.g.
        "Dismiss" or "Learn more").
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Reserve for info status only">
        Do not use InfoButton in error, warning, or success contexts. Each status has its own
        dedicated button component with the correct colour tokens.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Never override status tokens">
        All colours must come from <code>--btn-info-*</code> tokens. Do not hardcode blue values
        or add local CSS overrides. If the status colour needs to change, update the token.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    {/* ── Dos and Don'ts ───────────────────────────────────────────────────── */}
    <DocsTemplate.DosDonts
      doItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <InfoButton variant="solid" label="Info button" />
            <InfoButton variant="ghost" label="Info button" />
          </div>
        ),
        label: 'Solid + Ghost pair',
        description: 'Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the info card.',
      }}
      dontItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <InfoButton variant="solid" label="Info button" />
            <InfoButton variant="solid" label="Info button" />
          </div>
        ),
        label: 'Two solid buttons',
        description: "Don't use two solid InfoButtons side by side. It creates confusion about which action is primary.",
      }}
    />

    {/* ── Related Links ────────────────────────────────────────────────────── */}
    <DocsTemplate.RelatedLinks
      links={[
        { label: 'Figma Library', href: 'https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1' },
        { label: 'CardContent component', href: '/?path=/story/atoms-cardcontent--documentation' },
        { label: 'ErrorButton', href: '/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation' },
        { label: 'WarningButton', href: '/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation' },
        { label: 'SuccessButton', href: '/?path=/story/atoms-buttons-statusbutton-successbutton--documentation' },
      ]}
    />

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default InfoButtonDocs;
