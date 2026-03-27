import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { TertiaryButton } from './TertiaryButton';
import { Button } from '../Button/Button';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

export const TertiaryButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Tertiary Button"
        subtitle="Yellow/amber button for tertiary-level and supporting actions across the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Tertiary Button</strong> uses the yellow/amber colour family to create
        a visually warm, attention-drawing button for third-level actions. It supports two
        label variants — <em>solid</em> (yellow-200 background) and <em>alt</em>
        (seafoam-25 / light-green background) — plus an <em>icon-only</em> mode that uses
        the brighter yellow fill. Four sizes are available across all configurations, with
        built-in loading and disabled states. A dark-seafoam drop shadow is applied on
        hover and active. All styling is driven by the <code>--btn-tertiary-*</code> token
        family with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Tertiary Button shares the same structural anatomy as the Primary and Secondary
          Buttons. The key difference is its yellow/amber colour treatment and dark-seafoam
          hover shadow.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--global-spacing-sizing-16px)',
              padding: 'var(--global-spacing-sizing-24px)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TertiaryButton
                label="Label"
                showLeadingIcon
                leadingIcon={PersonIcon}
                showTrailingIcon
                trailingIcon={ArrowForwardIcon}
              />
              <TertiaryButton
                variant="alt"
                label="Label"
                showLeadingIcon
                leadingIcon={PersonIcon}
                showTrailingIcon
                trailingIcon={ArrowForwardIcon}
              />
              <TertiaryButton
                iconOnly
                leadingIcon={PersonIcon}
                ariaLabel="User"
              />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-tertiary-bg (--global-color-primary-yellow-200 / #FDEEC7)\n--btn-tertiary-border-color (--global-color-primary-yellow-dark / #E8A317)\n--btn-tertiary-border-width (--global-spacing-stroke-1px)\n--btn-padding-{size}',
              description: 'Outer button shell. Corner radius: 4px. Solid: yellow-200 bg (#FDEEC7), 1px border. Alt: seafoam-25 bg. Icon-only: yellow (#F9C846) bg. Hover: border thickens to 2px + dark-seafoam drop shadow.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-tertiary-color (--global-color-base-black)',
              description: 'Optional icon preceding the label. Dark charcoal fill. Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-tertiary-color (--global-color-base-black)',
              description: 'Optional icon after the label. Dark charcoal fill. Controlled by showTrailingIcon + trailingIcon props.',
            },
            {
              id: 4,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (--global-type-weight-light)\n--btn-tertiary-color (--global-color-base-black)',
              description: 'Button text. Uses F37 Ginger Pro Light. Colour: black (#1C1C1C) across all interactive states.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Three visual configurations cover different contexts. Use <strong>solid</strong>
          for the standard tertiary action, <strong>alt</strong> on warmer or seafoam-tinted
          backgrounds, and <strong>icon-only</strong> for compact icon actions.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Solid">
          <DocsTemplate.BodyText>
            Yellow-200 (#FDEEC7) background with dark-yellow border (#E8A317). Shifts to
            yellow-50 (#FEFAED) on hover and pressed. The default variant.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <TertiaryButton variant="solid" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton variant="solid" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <TertiaryButton variant="solid" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton variant="solid" label="Label" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Alt">
          <DocsTemplate.BodyText>
            Seafoam-25 (#F9FCFA) background with dark-yellow border. Shifts to seafoam-50 on hover.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <TertiaryButton variant="alt" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton variant="alt" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <TertiaryButton variant="alt" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton variant="alt" label="Label" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Icon Only">
          <DocsTemplate.BodyText>
            Brighter yellow (#F9C846) background — the full-strength yellow signal that this is
            an action, with the same dark-yellow border and seafoam hover shadow.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0', alignItems: 'center' }}>
            <TertiaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
            <TertiaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
            <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <TertiaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes scale the button for different density contexts. All sizes support
          both variants and all optional elements.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Extra Small',
              sublabel: 'Compact inline actions, tags',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <TertiaryButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <TertiaryButton size="extra-small" variant="alt" label="Label" />
                  <TertiaryButton size="extra-small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <TertiaryButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <TertiaryButton size="small" variant="alt" label="Label" />
                  <TertiaryButton size="small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Default',
              sublabel: 'Standard use across the interface',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <TertiaryButton size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <TertiaryButton size="default" variant="alt" label="Label" />
                  <TertiaryButton size="default" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Large',
              sublabel: 'Prominent calls-to-action',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <TertiaryButton size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <TertiaryButton size="large" variant="alt" label="Label" />
                  <TertiaryButton size="large" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="Default">
          <DocsTemplate.BodyText>
            Resting state. Solid: yellow-200 (#FDEEC7), 1px dark-yellow border. Alt: seafoam-25 (#F9FCFA).
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <TertiaryButton label="Solid" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton variant="alt" label="Alt" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="Icon" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during
            loading. Border uses the lighter 0.5px stroke while loading.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <TertiaryButton label="Loading…" loading size="small" />
            <TertiaryButton label="Loading…" loading />
            <TertiaryButton label="Loading…" loading size="large" />
            <TertiaryButton label="Loading…" variant="alt" loading />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled state uses explicit gray colours — no opacity reduction. Background:
            gray-50 (#F9FAFB), border: gray-200 (#E5E7EB), text: gray-300 (#D2D5DA).
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <TertiaryButton label="Label" disabled />
            <TertiaryButton label="Label" variant="alt" disabled />
            <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <TertiaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Spacing"
        description="Shared tokens (inherited from the base Button token system):"
        tokens={[
          { name: '--btn-border-radius', description: 'Corner radius (4px) — --global-spacing-radius-4px' },
          { name: '--btn-tertiary-border-width', description: 'Default border (1px) — --global-spacing-stroke-1px' },
          { name: '--btn-tertiary-border-width-hover', description: 'Hover / active border (2px) — --global-spacing-stroke-2px' },
          { name: '--btn-tertiary-border-width-focus', description: 'Focus border default/large (2px) — --global-spacing-stroke-2px' },
          { name: '--btn-tertiary-border-width-focus-sm', description: 'Focus border small (3px) — --global-spacing-stroke-3px' },
          { name: '--btn-border-width-loading', description: 'Loading border (0.5px) — --global-spacing-stroke-0-5px' },
          { name: '--btn-tertiary-padding-xs', description: 'Extra-small padding — 2px / 4px' },
          { name: '--btn-padding-small', description: 'Small padding — 8px / 12px' },
          { name: '--btn-padding-default', description: 'Default padding — 12px / 16px' },
          { name: '--btn-padding-large', description: 'Large padding — 16px / 20px' },
          { name: '--btn-transition-duration', description: 'Transition speed — --global-animation-duration-fast' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Tertiary Colour Tokens"
        description="Yellow/amber colour tokens specific to the Tertiary Button:"
        tokens={[
          { name: '--btn-tertiary-bg', description: 'Solid background — --global-color-primary-yellow-200 (#FDEEC7)' },
          { name: '--btn-tertiary-bg-hover', description: 'Solid hover/pressed background — --global-color-primary-yellow-50 (#FEFAED)' },
          { name: '--btn-tertiary-alt-bg', description: 'Alt background — --global-color-primary-seafoam-25 (#F9FCFA)' },
          { name: '--btn-tertiary-alt-bg-hover', description: 'Alt hover background — --global-color-primary-seafoam-50 (#F3F9F5)' },
          { name: '--btn-tertiary-icon-only-bg', description: 'Icon-only background — --global-color-primary-yellow (#F9C846)' },
          { name: '--btn-tertiary-color', description: 'Text / icon colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-tertiary-border-color', description: 'Border colour — --global-color-primary-yellow-dark (#E8A317)' },
          { name: '--btn-tertiary-shadow-hover', description: 'Hover shadow — 2px 2px 0 0 --global-color-primary-seafoam-extra-dark (#384C40)' },
          { name: '--btn-tertiary-bg-disabled', description: 'Disabled bg — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-tertiary-color-disabled', description: 'Disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-tertiary-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { TertiaryButton } from './TertiaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant
<TertiaryButton label="More info" />

// Alt variant (seafoam background)
<TertiaryButton variant="alt" label="View details" />

// Icon only (brighter yellow)
<TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />

// With icons
<TertiaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Extra-small size
<TertiaryButton size="extra-small" label="Compact" />

// Loading & disabled
<TertiaryButton label="Loading…" loading />
<TertiaryButton label="Restricted" disabled />

// Full hierarchy pair
<Button label="Save" />
<SecondaryButton label="Cancel" />
<TertiaryButton label="More options" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Use for third-priority actions">
          The Tertiary Button sits below the Primary and Secondary in the action hierarchy.
          Use it for supplementary actions like "More info", "View all", or "Preview".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Icon-only for compact contexts">
          The icon-only variant uses the brighter yellow fill to stand out without needing
          a label. Always supply an <code>ariaLabel</code> for accessibility.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Yellow draws attention — use sparingly">
          The amber/yellow colour is visually warm and attention-drawing. Reserve it for
          genuinely tertiary actions and avoid saturating a page with too many tertiary buttons.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
              <Button variant="filled" label="Save" />
              <SecondaryButton label="Cancel" />
              <TertiaryButton label="Preview" />
            </div>
          ),
          label: 'Clear three-tier hierarchy',
          description: 'Use filled Primary, Secondary, and Tertiary to establish three clearly distinct action levels.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', flexWrap: 'wrap' }}>
              <TertiaryButton label="Save" />
              <TertiaryButton label="Cancel" />
              <TertiaryButton label="Preview" />
            </div>
          ),
          label: 'All tertiary',
          description: "Don't use Tertiary Buttons exclusively — they lose their meaning without a primary action to anchor the hierarchy.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default TertiaryButtonDocs;
