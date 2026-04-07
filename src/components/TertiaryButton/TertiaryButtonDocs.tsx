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
        subtitle="Sky-blue button for tertiary-level and supporting actions across the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Tertiary Button</strong> uses the sky-blue colour family to create a
        crisp, light tertiary button for third-level actions. It supports two label variants —{' '}
        <em>solid</em> (sky-blue-50 background with a blue-400 drop shadow at rest) and{' '}
        <em>alt</em> (white background, shadow appears only on hover) — plus an{' '}
        <em>icon-only</em> mode that mirrors the solid default. Four sizes are available
        across all configurations, with built-in loading and disabled states. All styling is
        driven by the <code>--btn-tertiary-*</code> token family with no hardcoded values.
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
              token: '--btn-border-radius (--global-spacing-radius-6px)\n--btn-tertiary-bg (--brand-sky-blue-50 / #CCF0FB)\n--btn-tertiary-border-color (--brand-sky-blue / #00B2EB)\n--btn-tertiary-border-width (--global-spacing-stroke-1px)\n--btn-tertiary-shadow (2px 2px 0px 0px --global-color-primary-blue-blue-400)\n--btn-padding-{size}',
              description: 'Outer button shell. Corner radius: 6px. Solid: sky-blue-50 bg (#CCF0FB), 1px sky-blue border, blue-400 shadow at default. Alt: white bg, no shadow at default. Hover: solid widens border to 2px; alt adds shadow + bg tints to #F4FCFF.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-tertiary-color (--brand-sky-blue-dark / #026281)',
              description: 'Optional icon preceding the label. Dark sky-blue fill (#026281). On alt hover, inherits the black text colour. Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-tertiary-color (--brand-sky-blue-dark / #026281)',
              description: 'Optional icon after the label. Dark sky-blue fill (#026281). On alt hover, inherits the black text colour. Controlled by showTrailingIcon + trailingIcon props.',
            },
            {
              id: 4,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (--global-type-weight-light)\n--btn-tertiary-color (--brand-sky-blue-dark / #026281)\n--btn-tertiary-alt-color-hover (--global-color-base-black / #1C1C1C)',
              description: 'Button text. Uses F37 Ginger Pro Light. Colour: dark sky-blue (#026281). On alt hover, changes to black (#1C1C1C) via --btn-tertiary-alt-color-hover.',
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
            Sky-blue-50 (#CCF0FB) background with a sky-blue border (#00B2EB) and a blue-400
            drop shadow (2×2px) at the default state. On hover, only the border widens to 2px —
            the background and shadow remain unchanged. The default variant.
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
            White (#FFFFFF) background with a sky-blue border (#00B2EB), no shadow at rest.
            On hover, the background shifts to a very light sky-blue (#F4FCFF), a blue-400
            drop shadow appears, and the text turns black (#1C1C1C). Border stays 1px.
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
            Sky-blue-50 (#CCF0FB) background — identical to the solid default, including the
            blue-400 drop shadow. The icon-only variant does not change visually on hover;
            it retains its default appearance across all interactive states.
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
            Resting state. Solid: sky-blue-50 (#CCF0FB) background, 1px sky-blue border,
            blue-400 drop shadow. Alt: white (#FFFFFF) background, 1px sky-blue border, no shadow.
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
            gray-100 (#F3F4F6), border: 2px solid gray-400 (#9CA3AF), text: gray-400 (#9CA3AF).
            All three variants (solid, alt, icon-only) share the same disabled treatment.
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
        description="Sky-blue colour tokens specific to the Tertiary Button:"
        tokens={[
          { name: '--btn-tertiary-bg', description: 'Solid background (default + hover) — --brand-sky-blue-50 (#CCF0FB)' },
          { name: '--btn-tertiary-color', description: 'Text / icon colour — --brand-sky-blue-dark (#026281)' },
          { name: '--btn-tertiary-border-color', description: 'Border colour (all states) — --brand-sky-blue (#00B2EB)' },
          { name: '--btn-tertiary-shadow', description: 'Drop shadow at default state (solid + icon-only) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)' },
          { name: '--btn-tertiary-shadow-hover', description: 'Drop shadow on hover (alt variant) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)' },
          { name: '--btn-tertiary-alt-bg', description: 'Alt default background — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-tertiary-alt-bg-hover', description: 'Alt hover/active background — --global-color-primary-sky-blue-50 (#F4FCFF)' },
          { name: '--btn-tertiary-alt-color-hover', description: 'Alt hover/active text colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-tertiary-icon-only-bg', description: 'Icon-only background — --brand-sky-blue-50 (#CCF0FB)' },
          { name: '--btn-tertiary-bg-disabled', description: 'Disabled background (all variants) — --global-color-neutral-gray-100 (#F3F4F6)' },
          { name: '--btn-tertiary-color-disabled', description: 'Disabled text/icon — --global-color-neutral-gray-400 (#9CA3AF)' },
          { name: '--btn-tertiary-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-400 (#9CA3AF)' },
          { name: '--btn-tertiary-border-width-disabled', description: 'Disabled border width (all variants) — --global-spacing-stroke-2px (2px)' },
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
        <DocsTemplate.PrincipleCard number={3} title="Sky-blue signals supporting actions">
          The sky-blue palette is lighter than the primary blue, signalling a supporting
          role. Reserve it for genuinely tertiary actions and avoid saturating a page with
          too many tertiary buttons alongside the primary hierarchy.
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
