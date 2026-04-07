import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { SuccessButton } from './SuccessButton';

export const SuccessButtonDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="SuccessButton"
      subtitle="A status-specific button for success and confirmation actions within the NPX Design System"
    />

    <DocsTemplate.BodyText>
      The <strong>SuccessButton</strong> is the primary CTA element used inside success-status
      notifications and modal cards. It comes in two visual variants —{' '}
      <strong>solid</strong> (light-green filled, black text; hover inverts to dark-green with
      white text) and <strong>ghost</strong> (white background, dark-green border and text, with
      a green-light hover fill) — across three sizes. All styling is token-driven with no
      hardcoded values. The solid hover colour inversion is unique to the success status. It is
      always paired with a <strong>CardContent</strong> of status <code>success</code>, where
      the solid variant serves as the primary call-to-action and the ghost as the secondary.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ──────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each SuccessButton renders three inline elements: a leading user icon, a text label, and a
        trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS
        spinner and the trailing icon is hidden.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <SuccessButton variant="solid" size="small" label="Success button" />
              <SuccessButton variant="solid" size="default" label="Success button" />
              <SuccessButton variant="solid" size="large" label="Success button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-success-solid-bg\n--btn-success-solid-bg-hover\n--btn-success-solid-border-color\n--btn-success-solid-border-width\n--btn-border-radius',
              description: 'Outer shell. Default fill: light-green (#96F78D). Hover inverts to dark-green (#227F1A) + 2×2px dark-green shadow. Focus: 2px border, light-green bg. Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-success-solid-color\n--btn-success-solid-color-hover\n--btn-icon-size-{size}',
              description: 'User/account icon — 14px small, 16px default, 18px large. Default fill: #1C1C1C (black). Hover fill: white. Replaced by spinner in loading state.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-success-solid-color\n--btn-success-solid-color-hover',
              description: 'Button text. F37 Ginger Pro Light. 14/16/18px by size. Default: black. Hover: white (colour inversion unique to success).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-success-solid-color\n--btn-success-solid-color-hover\n--btn-icon-size-{size}',
              description: 'Arrow-right icon. Same size as leading icon. Default: black. Hover: white. Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost">
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-4px)', flexWrap: 'wrap', alignItems: 'center' }}>
              <SuccessButton variant="ghost" size="small" label="Success button" />
              <SuccessButton variant="ghost" size="default" label="Success button" />
              <SuccessButton variant="ghost" size="large" label="Success button" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-success-ghost-bg\n--btn-success-ghost-bg-hover\n--btn-success-ghost-border-color\n--btn-success-ghost-border-width\n--btn-border-radius',
              description: 'Outer shell. Default fill: white. Border: 1px solid dark-green. Hover shifts bg to green-light (#F2FFF1) + 2×2px dark-green shadow. Focus: 3px border (unique to success ghost). Radius: 4px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-success-ghost-color\n--btn-icon-size-{size}',
              description: 'User/account icon. Fill: dark-green (#227F1A). 14/16/18px by size.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family\n--btn-font-size-{size}\n--btn-success-ghost-color',
              description: 'Button text. F37 Ginger Pro Light. Colour: dark-green (#227F1A).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-success-ghost-color\n--btn-icon-size-{size}',
              description: 'Arrow-right icon. Fill: dark-green (#227F1A). Hidden in loading state.',
            },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Variants ─────────────────────────────────────────────────────────── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.BodyText>
        Two visual variants establish clear action hierarchy within success contexts. Always pair
        <strong> solid</strong> as the primary action with <strong>ghost</strong> as the secondary.
        The solid variant features a unique hover behaviour — the background inverts from
        light-green to dark-green and text switches from black to white.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Solid — Primary CTA">
        <DocsTemplate.BodyText>
          Light-green filled background (#96F78D) with dark-green border and black text by default.
          On hover the background inverts to dark-green (#227F1A) and text/icons flip to white —
          unique among all StatusButton variants. Focus restores the light-green background with a
          2px border.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <SuccessButton variant="solid" size="small" label="Success button" />
          <SuccessButton variant="solid" size="default" label="Success button" />
          <SuccessButton variant="solid" size="large" label="Success button" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Ghost — Secondary CTA">
        <DocsTemplate.BodyText>
          White background with a 1px dark-green border and dark-green text/icons. On hover the
          background shifts to green-light (#F2FFF1) and a 2×2px dark-green shadow is applied.
          Focus uses a <strong>3px</strong> border — wider than all other status buttons, per the
          Figma specification.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <SuccessButton variant="ghost" size="small" label="Success button" />
          <SuccessButton variant="ghost" size="default" label="Success button" />
          <SuccessButton variant="ghost" size="large" label="Success button" />
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
                <SuccessButton variant="solid" size="small" label="Success button" />
                <SuccessButton variant="ghost" size="small" label="Success button" />
              </div>
            ),
          },
          {
            label: 'Default',
            sublabel: '44px height — standard notification cards',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <SuccessButton variant="solid" size="default" label="Success button" />
                <SuccessButton variant="ghost" size="default" label="Success button" />
              </div>
            ),
          },
          {
            label: 'Large',
            sublabel: '56px height — prominent success modals',
            children: (
              <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                <SuccessButton variant="solid" size="large" label="Success button" />
                <SuccessButton variant="ghost" size="large" label="Success button" />
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
          <SuccessButton variant="solid" size="small" label="Success button" loading />
          <SuccessButton variant="solid" size="default" label="Success button" loading />
          <SuccessButton variant="solid" size="large" label="Success button" loading />
          <SuccessButton variant="ghost" size="default" label="Success button" loading />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the
          same disabled appearance: grey-100 background, grey-400 text and border at 0.5px.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
          <SuccessButton variant="solid" size="small" label="Label" disabled />
          <SuccessButton variant="solid" size="default" label="Label" disabled />
          <SuccessButton variant="solid" size="large" label="Label" disabled />
          <SuccessButton variant="ghost" size="default" label="Label" disabled />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Tokens ───────────────────────────────────────────────────────────── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Solid Variant"
      description="Colour tokens for the solid (primary) success button — note the unique hover inversion:"
      tokens={[
        { name: '--btn-success-solid-bg', description: 'Default background — var(--global-color-status-green) #96F78D' },
        { name: '--btn-success-solid-color', description: 'Default text & icon colour — var(--global-color-base-black) #1C1C1C' },
        { name: '--btn-success-solid-border-color', description: 'Border colour (all states) — var(--global-color-status-dark-green) #227F1A' },
        { name: '--btn-success-solid-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-success-solid-bg-hover', description: 'Hover/active background (inversion) — var(--global-color-status-dark-green) #227F1A' },
        { name: '--btn-success-solid-color-hover', description: 'Hover/active text & icon colour — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-success-solid-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #227F1A (dark-green)' },
        { name: '--btn-success-solid-border-width-focus', description: 'Focus border width — var(--global-spacing-stroke-2px) 2px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Ghost Variant"
      description="Colour tokens for the ghost (secondary) success button — note the 3px focus border:"
      tokens={[
        { name: '--btn-success-ghost-bg', description: 'Default background — var(--global-color-base-white) #FFFFFF' },
        { name: '--btn-success-ghost-bg-hover', description: 'Hover/active background — var(--global-color-status-green-light) #F2FFF1' },
        { name: '--btn-success-ghost-color', description: 'Text & icon colour — var(--global-color-status-dark-green) #227F1A' },
        { name: '--btn-success-ghost-border-color', description: 'Border colour — var(--global-color-status-dark-green) #227F1A' },
        { name: '--btn-success-ghost-border-width', description: 'Default border width — var(--global-spacing-stroke-1px) 1px' },
        { name: '--btn-success-ghost-shadow-hover', description: 'Drop shadow on hover/active — 2px 2px 0px 0px #227F1A (dark-green)' },
        { name: '--btn-success-ghost-border-width-focus', description: 'Focus border width — 3px (wider than all other status buttons per Figma spec)' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Disabled (shared)"
      description="Tokens applied to both variants in the disabled state:"
      tokens={[
        { name: '--btn-success-bg-disabled', description: 'Background — var(--global-color-neutral-gray-100) #F3F4F6' },
        { name: '--btn-success-color-disabled', description: 'Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-success-border-color-disabled', description: 'Border colour — var(--global-color-neutral-gray-400) #9CA3AF' },
        { name: '--btn-success-border-width-disabled', description: 'Border width — var(--global-spacing-stroke-0-5px) 0.5px' },
      ]}
    />

    {/* ── Usage ────────────────────────────────────────────────────────────── */}
    <DocsTemplate.CodeBlock>
      {`import { SuccessButton } from '@/components/Button/SuccessButton/SuccessButton';

// Solid (primary CTA)
<SuccessButton variant="solid" label="Success button" />

// Ghost (secondary CTA)
<SuccessButton variant="ghost" label="Success button" />

// Size variants
<SuccessButton variant="solid" size="small" label="Success button" />
<SuccessButton variant="solid" size="large" label="Success button" />

// Loading state
<SuccessButton variant="solid" label="Success button" loading />

// Disabled state
<SuccessButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="success" heading="Action completed" />`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ───────────────────────────────────────────────────────── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="One solid per success context">
        Each success notification or card should have exactly one <strong>solid</strong>{' '}
        SuccessButton as the primary CTA. Pair it with a <strong>ghost</strong> for secondary
        actions (e.g. "View details" or "Dismiss").
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Do not suppress the hover inversion">
        The solid variant's hover behaviour — flipping from light-green to dark-green with white
        text — is intentional and distinctive. Do not override it with CSS or token changes. This
        inversion is what makes success actions visually confident.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Reserve for success status only">
        Do not use SuccessButton in error, warning, or info contexts. Each status has its own
        dedicated button component with the correct colour tokens.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    {/* ── Dos and Don'ts ───────────────────────────────────────────────────── */}
    <DocsTemplate.DosDonts
      doItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <SuccessButton variant="solid" label="Success button" />
            <SuccessButton variant="ghost" label="Success button" />
          </div>
        ),
        label: 'Solid + Ghost pair',
        description: 'Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the success card.',
      }}
      dontItem={{
        icon: (
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
            <SuccessButton variant="solid" label="Success button" />
            <SuccessButton variant="solid" label="Success button" />
          </div>
        ),
        label: 'Two solid buttons',
        description: "Don't use two solid SuccessButtons side by side. It creates confusion about which action is primary.",
      }}
    />

    {/* ── Related Links ────────────────────────────────────────────────────── */}
    <DocsTemplate.RelatedLinks
      links={[
        { label: 'Figma Library', href: 'https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1' },
        { label: 'CardContent component', href: '/?path=/story/atoms-cardcontent--documentation' },
        { label: 'ErrorButton', href: '/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation' },
        { label: 'WarningButton', href: '/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation' },
      ]}
    />

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default SuccessButtonDocs;
