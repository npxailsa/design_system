import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { SecondaryButton } from './SecondaryButton';
import { Button } from '../Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

export const SecondaryButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Secondary Button"
        subtitle="The outline-style button used alongside Primary Buttons to indicate secondary or supporting actions"
      />

      <DocsTemplate.BodyText>
        The <strong>Secondary Button</strong> provides a visually lighter alternative to the
        Primary Button. It uses the outline style — a subtle background with a coloured border —
        to establish clear hierarchy when paired with a filled Primary Button. It supports
        three sizes, optional leading and trailing icons, an icon-only mode, and built-in loading
        and disabled states. All styling is driven by the <code>--btn-outline-*</code> token
        family with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Secondary Button shares layout anatomy with the Primary Button. The key difference
          is the colour treatment: a light background fill with a visible coloured border and
          darker text, rather than a solid filled background with white text.
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
              <SecondaryButton
                label="Label"
                showLeadingIcon
                leadingIcon={PersonIcon}
                showTrailingIcon
                trailingIcon={ArrowForwardIcon}
              />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-outline-bg (--global-color-primary-blue-blue-50 / #F9F9FE)\n--btn-outline-border-color (--global-color-primary-blue-blue-300 / #95A0E5)\n--btn-border-width-default (--global-spacing-stroke-1px)\n--btn-padding-{size}',
              description: 'Outer button shell. W: HUG, H: HUG. Corner radius: 4px. Fill: blue-blue-50 (#F9F9FE). Border: 1px solid blue-blue-300 (#95A0E5). On hover, bg shifts to blue-blue-100 with 2×2 drop shadow.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-outline-color (--global-color-secondary-blue-gray / #61607C)',
              description: 'Optional icon preceding the label. Fill: #61607C (default), shifts to #1C1C1C on hover. Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-outline-color (--global-color-secondary-blue-gray / #61607C)',
              description: 'Optional icon after the label. Fill: #61607C (default), shifts to #1C1C1C on hover. Controlled by showTrailingIcon + trailingIcon props.',
            },
            {
              id: 4,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (--global-type-weight-light)\n--btn-outline-color (--global-color-secondary-blue-gray)',
              description: 'Button text. Uses F37 Ginger Pro Light. Colour: blue-gray (#61607C), shifts to black (#1C1C1C) on hover. Disabled: gray-300 (#D2D5DA).',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes scale the button for different density contexts. All sizes support every
          optional element configuration.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <SecondaryButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <SecondaryButton size="small" label="Label" />
                  <SecondaryButton size="small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Default',
              sublabel: 'Standard use across the interface',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <SecondaryButton size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <SecondaryButton size="default" label="Label" />
                  <SecondaryButton size="default" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Large',
              sublabel: 'Hero calls-to-action, prominent forms',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <SecondaryButton size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <SecondaryButton size="large" label="Label" />
                  <SecondaryButton size="large" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Optional Elements ── */}
      <DocsTemplate.Section title="Optional Elements">
        <DocsTemplate.BodyText>
          Leading icon, trailing icon, and icon-only mode are all independently composable.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="With Leading Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={CheckIcon} size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Trailing Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Both Icons">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Icon Only">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <SecondaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
            <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <SecondaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
            <SecondaryButton iconOnly leadingIcon={AddIcon} ariaLabel="Add" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="Default">
          <DocsTemplate.BodyText>
            Resting state with light blue-blue-50 background, blue-blue-300 border, and blue-gray text.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton label="Label" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during loading.
            The border uses a lighter stroke weight (0.5px) while loading.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Loading…" loading size="small" />
            <SecondaryButton label="Loading…" loading />
            <SecondaryButton label="Loading…" loading size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled state uses explicit gray colours per the Figma spec (no opacity reduction).
            Background shifts to gray-50 (#F9FAFB), border to gray-200 (#E5E7EB), text to
            gray-300 (#D2D5DA). All interactions are blocked.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" disabled />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Spacing"
        description="Shared tokens controlling padding, border radius, and gap (inherited from the base Button system):"
        tokens={[
          { name: '--btn-border-radius', description: 'Corner radius (4px) — --global-spacing-radius-4px' },
          { name: '--btn-border-width-default', description: 'Default border (1px) — --global-spacing-stroke-1px' },
          { name: '--btn-border-width-focus', description: 'Focus state border (2px) — --global-spacing-stroke-2px' },
          { name: '--btn-border-width-disabled', description: 'Disabled state border (2px) — --global-spacing-stroke-2px' },
          { name: '--btn-border-width-loading', description: 'Loading state border (0.5px) — --global-spacing-stroke-0-5px' },
          { name: '--btn-padding-small', description: 'Small: 8px vertical / 12px horizontal' },
          { name: '--btn-padding-default', description: 'Default: 12px vertical / 16px horizontal' },
          { name: '--btn-padding-large', description: 'Large: 16px vertical / 20px horizontal' },
          { name: '--btn-gap-{size}', description: 'Gap between elements (6px / 8px / 10px)' },
          { name: '--btn-icon-only-size-{size}', description: 'Icon-only dimensions (36px / 44px / 52px)' },
          { name: '--btn-transition-duration', description: 'Transition speed — --global-animation-duration-fast (160ms)' },
          { name: '--btn-transition-easing', description: 'Transition curve — --global-animation-easing-default (ease)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Shared tokens controlling text and icon appearance:"
        tokens={[
          { name: '--btn-font-family', description: 'Font family — F37 Ginger Pro (--brand-font-primary)' },
          { name: '--btn-font-weight', description: 'Font weight — 300 light (--global-type-weight-light)' },
          { name: '--btn-letter-spacing', description: 'Letter spacing (0.15px) — --global-type-letter-spacing-primary-label' },
          { name: '--btn-font-size-{size}', description: 'Font sizes (14px / 16px / 18px)' },
          { name: '--btn-icon-size-{size}', description: 'Icon sizes (14px / 16px / 18px)' },
          { name: '--btn-spinner-duration', description: 'Spinner animation speed — --global-animation-duration-spinner (700ms)' },
          { name: '--btn-spinner-opacity', description: 'Spinner opacity — --global-opacity-muted (0.6)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Outline Colour Tokens"
        description="Colour tokens specific to the Secondary Button (outline variant):"
        tokens={[
          { name: '--btn-outline-bg', description: 'Default background — --global-color-primary-blue-blue-50 (#F9F9FE)' },
          { name: '--btn-outline-bg-hover', description: 'Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)' },
          { name: '--btn-outline-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-outline-color', description: 'Default text/icon — --global-color-secondary-blue-gray (#61607C)' },
          { name: '--btn-outline-color-hover', description: 'Hover text/icon — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-outline-color-disabled', description: 'Disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-outline-border-color', description: 'Default border — --global-color-primary-blue-blue-300 (#95A0E5)' },
          { name: '--btn-outline-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
          { name: '--btn-outline-shadow-hover', description: 'Hover box-shadow — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Basic secondary button
<SecondaryButton label="Cancel" />

// With leading and trailing icons
<SecondaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Small size
<SecondaryButton size="small" label="Compact" />

// Icon only
<SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<SecondaryButton label="Loading…" loading />

// Disabled
<SecondaryButton label="Restricted" disabled />

// Pairing with Primary Button
<Button label="Save changes" />
<SecondaryButton label="Cancel" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Pair with a Primary Button">
          The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it
          for cancel, dismiss, or lower-priority actions within the same context.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match size to its sibling">
          When pairing with a Primary Button, use the same size for both to maintain visual
          alignment and consistent touch targets.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Don't overuse as standalone">
          If there is only one action in a context, prefer the Primary Button. Reserve the
          Secondary Button for situations where hierarchy between multiple actions is needed.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Button variant="filled" label="Confirm" />
              <SecondaryButton label="Cancel" />
            </div>
          ),
          label: 'Clear hierarchy',
          description: 'Pair a filled Primary with a Secondary for clear action hierarchy.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <SecondaryButton label="Confirm" />
              <SecondaryButton label="Cancel" />
            </div>
          ),
          label: 'Two secondaries',
          description: "Don't use two Secondary Buttons side by side. It creates ambiguity about which action is primary.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default SecondaryButtonDocs;
