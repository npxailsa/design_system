import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { GhostButton } from './GhostButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '../Button/Button';

export const GhostButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Ghost Button"
        subtitle="A low-emphasis interactive control with a transparent ghost style for supporting actions"
      />

      <DocsTemplate.BodyText>
        The <strong>Ghost Button</strong> is a low-hierarchy action control with two visual
        variants — <strong>ghost</strong> (bordered, blue-50 background) and <strong>link</strong>
        (text link, no border or background). Four sizes are supported: extra-small, small, default,
        and large. All styling is driven by the token system with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Ghost Button shares structural layout with the Primary Button but uses its own
          <code> --btn-ghost-*</code> colour token family. The diagram below maps each visible
          part to its controlling design token.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--global-spacing-sizing-24px)',
              padding: 'var(--global-spacing-sizing-32px)',
              background: 'var(--global-color-neutral-gray-50)',
              borderRadius: 'var(--global-spacing-radius-8px)',
            }}>
              <GhostButton
                label="Label"
                showLeadingIcon
                leadingIcon={PersonIcon}
                showTrailingIcon
                trailingIcon={ArrowForwardIcon}
                size="large"
              />
              <GhostButton
                iconOnly
                leadingIcon={PersonIcon}
                size="large"
                ariaLabel="User"
              />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-ghost-bg (--global-color-primary-blue-blue-50 / #F9F9FE)\n--btn-ghost-border-color (--global-color-primary-blue-blue-300 / #95A0E5)\n--btn-ghost-border-width-default (--global-spacing-stroke-1px)\n--btn-ghost-shadow-hover (2px 2px 0 0 #6171DF — hover & active only)\n--btn-padding-{size}',
              description: 'Outer button shell. W: HUG, H: HUG. Min-W: 80px. Corner radius: 4px. Default fill: color/primary/blue/blue-50 (#F9F9FE), 1px border color/primary/blue/blue-300 (#95A0E5). On hover/active, bg shifts to blue-100 with a 2×2 drop shadow in blue-400.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (16px default / 14px small / 18px large)',
              description: 'Optional icon preceding the label. Inherits the current text colour (blue-gray at rest, black on hover). Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary / F37 Ginger Pro)\n--btn-font-size-{size} (16px default)\n--btn-font-weight (--global-type-weight-light / 300)\n--btn-ghost-color (--global-color-secondary-blue-gray / #61607C)',
              description: 'Button label text. Uses F37 Ginger Pro Light at 16px with 20px line-height. Resting colour: #61607C (blue-gray). On hover/active: #1C1C1C (black).',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (16px default / 14px small / 18px large)',
              description: 'Optional icon after the label. Inherits the current text colour, same as leading icon. Controlled by showTrailingIcon + trailingIcon props.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes scale the Ghost Button for different density contexts. All sizes support
          leading icons, trailing icons, icon-only, and the link variant.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Extra Small',
              sublabel: 'Ultra-compact toolbars, badges, chips',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <GhostButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="extra-small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                  <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                </div>
              ),
            },
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <GhostButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                  <GhostButton variant="link" size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                </div>
              ),
            },
            {
              label: 'Default',
              sublabel: 'Standard use across the interface',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <GhostButton size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="default" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                  <GhostButton variant="link" size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                </div>
              ),
            },
            {
              label: 'Large',
              sublabel: 'Prominent or hero-area supporting actions',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <GhostButton size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <GhostButton size="large" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                  <GhostButton variant="link" size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
                </div>
              ),
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Optional Elements ── */}
      <DocsTemplate.Section title="Optional Elements">
        <DocsTemplate.BodyText>
          Leading icon, trailing icon, and icon-only mode are all independently composable
          via props.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="With Leading Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="small" />
            <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} />
            <GhostButton label="Download" showLeadingIcon leadingIcon={DownloadIcon} size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Trailing Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Icon Only (Bordered)">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
            <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
            <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
            <GhostButton iconOnly leadingIcon={AddIcon} ariaLabel="Add" />
            <GhostButton iconOnly leadingIcon={EditIcon} ariaLabel="Edit" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Icon Only (Borderless)">
          <DocsTemplate.BodyText>
            Add <code>borderless</code> prop alongside <code>iconOnly</code> for a no-border,
            no-background icon button. Matches Figma <code>special=icon-only</code> (no stroke).
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
            <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small" ariaLabel="User" />
            <GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="User" />
            <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large" ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Link Variant">
          <DocsTemplate.BodyText>
            Use <code>variant="link"</code> for a text link style — no border or background.
            Matches Figma <code>special=link-only</code>. On hover, text switches to the
            brand primary colour with an underline.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <GhostButton variant="link" size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <GhostButton variant="link" size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <GhostButton variant="link" size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during
            loading. The border uses a lighter 0.5px stroke and the spinner uses the blue-300
            colour at 0.6 opacity.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <GhostButton label="Loading…" loading size="small" />
            <GhostButton label="Loading…" loading />
            <GhostButton label="Loading…" loading size="large" />
            <GhostButton iconOnly loading ariaLabel="Loading" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled ghost buttons use explicit gray colours per the Figma spec — no opacity
            reduction. They block all interactions and use a 2px border with gray-200.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <GhostButton label="Label" disabled />
            <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <GhostButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Spacing"
        description="Ghost Button reuses the shared button layout tokens:"
        tokens={[
          { name: '--btn-min-width', description: 'Minimum button width — 80px (--global-spacing-sizing-80px)' },
          { name: '--btn-min-height', description: 'Minimum button height — 42px (--global-spacing-sizing-42px)' },
          { name: '--btn-border-radius', description: 'Corner radius 4px — --global-spacing-radius-4px' },
          { name: '--btn-padding-small', description: 'Small padding — 8px vertical / 12px horizontal' },
          { name: '--btn-padding-default', description: 'Default padding — 12px vertical / 16px horizontal' },
          { name: '--btn-padding-large', description: 'Large padding — 16px vertical / 20px horizontal' },
          { name: '--btn-gap-small', description: 'Gap between elements — small (6px)' },
          { name: '--btn-gap-default', description: 'Gap between elements — default (8px)' },
          { name: '--btn-gap-large', description: 'Gap between elements — large (10px)' },
          { name: '--btn-icon-only-size-{size}', description: 'Icon-only button dimensions (36px / 44px / 52px)' },
          { name: '--btn-icon-size-{size}', description: 'Icon size (14px / 16px / 18px)' },
          { name: '--btn-transition-duration', description: 'Transition speed — 160ms (--global-animation-duration-fast)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Ghost Button Colours"
        description="Component-specific colour tokens for the Ghost Button (--btn-ghost-*):"
        tokens={[
          { name: '--btn-ghost-bg', description: 'Default background — --global-color-primary-blue-blue-50 (#F9F9FE)' },
          { name: '--btn-ghost-bg-hover', description: 'Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)' },
          { name: '--btn-ghost-bg-active', description: 'Active (pressed) background — same as hover (#E7E9F4)' },
          { name: '--btn-ghost-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-ghost-color', description: 'Default text / icon colour — --global-color-secondary-blue-gray (#61607C)' },
          { name: '--btn-ghost-color-hover', description: 'Hover / active text colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-ghost-color-disabled', description: 'Disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-ghost-border-color', description: 'Default border — --global-color-primary-blue-blue-300 (#95A0E5)' },
          { name: '--btn-ghost-border-color-focus', description: 'Focus border — --global-color-primary-blue-blue-300 (#95A0E5)' },
          { name: '--btn-ghost-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
          { name: '--btn-ghost-shadow-hover', description: 'Hover / active shadow — 2px 2px 0 0 --global-color-primary-blue-blue-400 (#6171DF)' },
          { name: '--btn-ghost-border-width-default', description: 'Default border width — 1px (--global-spacing-stroke-1px)' },
          { name: '--btn-ghost-border-width-focus', description: 'Focus border width — 2px (--global-spacing-stroke-2px)' },
          { name: '--btn-ghost-border-width-disabled', description: 'Disabled border width — 2px (--global-spacing-stroke-2px)' },
          { name: '--btn-ghost-border-width-loading', description: 'Loading border width — 0.5px (--global-spacing-stroke-0-5px)' },
          { name: '--btn-ghost-spinner-color', description: 'Spinner ring colour — --global-color-primary-blue-blue-300 (#95A0E5)' },
          { name: '--btn-ghost-link-color', description: 'Link variant default text — --global-color-secondary-blue-gray (#61607C)' },
          { name: '--btn-ghost-link-color-hover', description: 'Link variant hover text — --brand-primary (#3776CE)' },
          { name: '--btn-ghost-link-color-disabled', description: 'Link variant disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { GhostButton } from './GhostButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Ghost variant (default) — bordered, blue-50 background
<GhostButton
  label="Label"
  showLeadingIcon leadingIcon={PersonIcon}
  showTrailingIcon trailingIcon={ArrowForwardIcon}
/>

// Link variant — text link, no border
<GhostButton variant="link" label="View details" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Extra-small size
<GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Small / Large
<GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
<GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Icon only — bordered
<GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Icon only — borderless
<GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading
<GhostButton label="Saving…" loading />

// Disabled
<GhostButton label="Restricted" disabled />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Use for supporting, not primary, actions">
          The Ghost Button belongs at the bottom of the button hierarchy. Reserve it for
          optional or non-critical actions (e.g. "View details", "Skip", "Export"). Pair it
          with a <strong>filled Primary Button</strong> to establish clear hierarchy.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Prefer trailing icons for navigation cues">
          The right-arrow pattern (trailing icon) signals navigation or progression, which
          is the most common Ghost Button use case. Only add a leading icon when the icon
          adds specific meaning beyond decoration.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Icon-only requires an accessible label">
          Always pass <code>ariaLabel</code> when using <code>iconOnly</code>. The icon alone
          is not sufficient for screen reader users. Example: <code>ariaLabel="Edit record"</code>.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
              <Button variant="filled" label="Save" />
              <GhostButton label="View details" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            </div>
          ),
          label: 'Pair with a primary action',
          description: 'A filled Primary Button establishes the main action; the Ghost Button offers a secondary path without visual competition.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
              <GhostButton label="Save" showTrailingIcon trailingIcon={ArrowForwardIcon} />
              <GhostButton label="Submit" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            </div>
          ),
          label: 'Two Ghost Buttons as primary actions',
          description: "Don't use Ghost Buttons as the only actions in a workflow. Their low emphasis signals the action is optional, which may confuse users on critical flows.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default GhostButtonDocs;
