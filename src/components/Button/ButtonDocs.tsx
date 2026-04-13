import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Button } from './Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

export const ButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Primary Button"
        subtitle="The primary interactive control for triggering actions, submitting forms, and navigating the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Button</strong> component is the core action element of the design system. It
        supports two visual variants — <em>filled</em> and <em>outline</em> — across four sizes
        (extra-small, small, default, large), with optional leading and trailing icons, an icon-only
        mode, and built-in loading and disabled states. All styling is driven by the token system
        with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagrams below map each part of the Button to its controlling design token for both
          the <strong>filled</strong> and <strong>outline</strong> variants.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Filled">
          <DocsTemplate.Anatomy
            preview={
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Faa05dab54f864947ac346fbc53ed3d44"
                alt="Filled primary button component anatomy diagram with numbered callouts"
                style={{ width: '100%', height: 'auto' }}
              />
            }
            parts={[
              {
                id: 1,
                name: 'Container',
                token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-filled-bg (--brand-primary / #3776CE)\n--btn-filled-border-width (--global-spacing-stroke-0-5px)\n--btn-filled-shadow-hover (hover & active only)\n--btn-padding-{size}',
                description: 'Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Default fill: color/primary/blue (#3776CE), 0.5px border. On hover/active, bg shifts to #6171DF with 2×2 drop shadow.',
              },
              {
                id: 2,
                name: 'Leading Icon',
                token: 'filled/icons (user category)\n--btn-icon-size-{size} (18px large)',
                description: 'Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props.',
              },
              {
                id: 3,
                name: 'Trailing Icon',
                token: 'filled/icons (action category)\n--btn-icon-size-{size} (18px large)',
                description: 'Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props.',
              },
              {
                id: 4,
                name: 'Label',
                token: '--btn-font-family (F37 Ginger Pro Light)\n--btn-font-size-{size} (18px large)\n--btn-font-weight (--global-type-weight-light)',
                description: 'Primary button text. W: HUG, H: HUG. Uses F37 Ginger Pro Light at 18px with 24px line-height. Colour: color/base/white.',
              },
            ]}
          />
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Outline">
          <DocsTemplate.Anatomy
            preview={
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fcb9650a698cd47429c486b0389c2bf51"
                alt="Outline primary button component anatomy diagram with numbered callouts"
                style={{ width: '100%', height: 'auto' }}
              />
            }
            parts={[
              {
                id: 1,
                name: 'Container',
                token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-outline-bg (--global-color-primary-blue-blue-50)\n--btn-outline-border-color (--global-color-primary-blue-blue-300)\n--btn-border-width-default (--global-spacing-stroke-1px)\n--btn-padding-{size}',
                description: 'Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Fill uses color/primary/blue/blue-50, border uses color/primary/blue/blue-300. Stroke width: 1.',
              },
              {
                id: 2,
                name: 'Leading Icon',
                token: 'filled/icons (user category)\n--btn-icon-size-{size} (18px large)',
                description: 'Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props.',
              },
              {
                id: 3,
                name: 'Trailing Icon',
                token: 'filled/icons (action category)\n--btn-icon-size-{size} (18px large)',
                description: 'Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props.',
              },
              {
                id: 4,
                name: 'Label',
                token: '--btn-font-family (F37 Ginger Pro Light)\n--btn-font-size-{size} (18px large)\n--btn-font-weight (--global-type-weight-light)\n--btn-outline-color (--global-color-secondary-blue-gray)',
                description: 'Primary button text. W: HUG, H: HUG. Uses F37 Ginger Pro Light at 18px with 24px line-height. Colour: color/secondary/blue-gray.',
              },
            ]}
          />
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Two visual variants cover the primary hierarchy needs. Use <strong>filled</strong>
          for the primary action and <strong>outline</strong> for secondary actions.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Filled">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Button variant="filled" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="filled" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <Button variant="filled" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="filled" label="Label" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Outline">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Button variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <Button variant="outline" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="outline" label="Label" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes scale the button for different density contexts. All sizes support both
          variants and all optional elements. All sizes use F37 Ginger Pro as the brand typeface.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Extra Small',
              sublabel: 'Compact inline controls, badges, split-button dropdowns — fixed height 28px',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <Button size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="extra-small" variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="extra-small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions — fixed height 34px',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <Button size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="small" variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Default',
              sublabel: 'Standard use across the interface — fixed height 44px',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <Button size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="default" variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="default" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Large',
              sublabel: 'Hero calls-to-action, prominent forms — fixed height 52px',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <Button size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="large" variant="outline" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <Button size="large" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
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
            <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="small" />
            <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} />
            <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={CheckIcon} size="large" />
            <Button label="Download" showLeadingIcon leadingIcon={DownloadIcon} variant="outline" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Trailing Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
            <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} variant="outline" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Icon Only">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <Button iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
            <Button iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <Button iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
            <Button iconOnly variant="outline" leadingIcon={AddIcon} ariaLabel="Add" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during loading.
            The border uses a lighter stroke weight while loading.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Button label="Loading…" loading size="small" />
            <Button label="Loading…" loading />
            <Button label="Loading…" loading size="large" />
            <Button label="Loading…" variant="outline" loading />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Both filled and outline disabled states use explicit gray colours per the Figma spec
            (no opacity reduction). Both block all interactions.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Button label="Label" disabled />
            <Button label="Label" variant="outline" disabled />
            <Button label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <Button label="Label" variant="outline" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Spacing"
        description="Tokens controlling padding, border radius, and gap:"
        tokens={[
          { name: '--btn-border-radius', description: 'Corner radius (4px) — uses --global-spacing-radius-4px' },
          { name: '--btn-border-width-default', description: 'Default border (1px) — uses --global-spacing-stroke-1px' },
          { name: '--btn-border-width-focus', description: 'Focus state border (2px) — uses --global-spacing-stroke-2px' },
          { name: '--btn-border-width-disabled', description: 'Disabled state border (2px) — uses --global-spacing-stroke-2px' },
          { name: '--btn-border-width-loading', description: 'Loading state border (0.5px) — uses --global-spacing-stroke-0-5px' },
          { name: '--btn-height-extra-small', description: 'Extra-small fixed height (28px) — uses --global-spacing-sizing-28px' },
          { name: '--btn-height', description: 'Default fixed height (44px) — uses --global-spacing-sizing-44px' },
          { name: '--btn-height-small', description: 'Small fixed height (34px)' },
          { name: '--btn-height-large', description: 'Large fixed height (52px) — uses --global-spacing-sizing-52px' },
          { name: '--btn-padding-extra-small', description: 'Extra-small padding — 4px vertical / 8px horizontal' },
          { name: '--btn-padding-small', description: 'Small padding — 4px vertical / 12px horizontal' },
          { name: '--btn-padding-default', description: 'Default padding — 8px vertical / 16px horizontal' },
          { name: '--btn-padding-large', description: 'Large padding — 12px vertical / 16px horizontal' },
          { name: '--btn-gap-extra-small', description: 'Gap between elements — extra-small (6px)' },
          { name: '--btn-gap-small', description: 'Gap between elements — small (8px)' },
          { name: '--btn-gap-default', description: 'Gap between elements — default (8px)' },
          { name: '--btn-gap-large', description: 'Gap between elements — large (8px)' },
          { name: '--btn-icon-only-size-{size}', description: 'Icon-only button dimensions (28px XS / 30px small / 42px default / 52px large)' },
          { name: '--btn-transition-duration', description: 'Transition speed — --global-animation-duration-fast (160ms)' },
          { name: '--btn-transition-easing', description: 'Transition curve — --global-animation-easing-default (ease)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Tokens controlling text and icon appearance:"
        tokens={[
          { name: '--btn-font-family', description: 'Font family for all sizes — F37 Ginger Pro (--brand-font-primary)' },
          { name: '--btn-font-weight', description: 'Font weight for small/default/large — 300 light (--global-type-weight-light)' },
          { name: '--btn-font-weight-extra-small', description: 'Font weight for extra-small — 400 regular (--global-type-weight-default)' },
          { name: '--btn-letter-spacing', description: 'Letter spacing for small/default/large (0.15px) — --global-type-letter-spacing-primary-label' },
          { name: '--btn-letter-spacing-extra-small', description: 'Letter spacing for extra-small (0.2px) — --global-type-letter-spacing-primary-footnote' },
          { name: '--btn-font-size-extra-small', description: 'Extra-small font size (13px) — --global-type-size-primary-footnote' },
          { name: '--btn-font-size-small', description: 'Small font size (14px) — --global-type-size-primary-label-sm' },
          { name: '--btn-font-size-default', description: 'Default font size (16px) — --global-type-size-primary-label' },
          { name: '--btn-font-size-large', description: 'Large font size (18px) — --global-type-size-primary-label-lg' },
          { name: '--btn-icon-size-extra-small', description: 'Extra-small icon size (14px) — --global-spacing-sizing-14px' },
          { name: '--btn-icon-size-small', description: 'Small icon size (14px) — --global-spacing-sizing-14px' },
          { name: '--btn-icon-size-default', description: 'Default icon size (16px) — --global-spacing-sizing-16px' },
          { name: '--btn-icon-size-large', description: 'Large icon size (18px) — --global-spacing-sizing-18px' },
          { name: '--btn-spinner-duration', description: 'Spinner animation speed — --global-animation-duration-spinner (700ms)' },
          { name: '--btn-spinner-opacity', description: 'Spinner opacity — --global-opacity-muted (0.6)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Filled Variant"
        description="Colour tokens for the filled (primary) variant:"
        tokens={[
          { name: '--btn-filled-bg', description: 'Default background — --brand-primary (#3776CE)' },
          { name: '--btn-filled-bg-hover', description: 'Hover / active background — --global-color-primary-blue-blue-400 (#6171DF)' },
          { name: '--btn-filled-color', description: 'Text and icon colour — --global-color-base-white' },
          { name: '--btn-filled-border-color', description: 'Default border colour (matches fill) — --brand-primary' },
          { name: '--btn-filled-border-width', description: 'Default border width (0.5px) — --global-spacing-stroke-0-5px' },
          { name: '--btn-filled-border-color-hover', description: 'Hover border colour — --global-color-primary-blue-blue-200 (#C5CAED)' },
          { name: '--btn-filled-border-color-focus', description: 'Focus border colour — --global-color-primary-blue-blue-400 (#6171DF)' },
          { name: '--btn-filled-shadow-hover', description: 'Drop shadow on hover & active only — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour' },
          { name: '--btn-filled-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-filled-color-disabled', description: 'Disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-filled-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Outline Variant"
        description="Colour tokens for the outline (secondary) variant:"
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
        {`import { Button } from './Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Filled button (default)
<Button label="Save changes" />

// With leading and trailing icons
<Button
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Outline variant
<Button variant="outline" label="Cancel" />

// Small size
<Button size="small" label="Compact" />

// Icon only (use ariaLabel for accessibility)
<Button iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<Button label="Saving…" loading />

// Disabled
<Button label="Restricted" disabled />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Use one primary action per context">
          Each view or panel should have at most one <strong>filled</strong> button as the primary
          action. Use <strong>outline</strong> for secondary actions alongside it.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match size to context">
          Use <strong>extra-small</strong> for compact inline elements and split-button dropdowns,
          <strong>small</strong> in dense toolbars and inline controls, <strong>default</strong>
          for the majority of interface actions, and <strong>large</strong> for hero or prominent
          call-to-action sections.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Label clearly and concisely">
          Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete
          report", "Add member"). Avoid generic labels like "Click here" or "Submit".
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Button variant="filled" label="Save changes" />
              <Button variant="outline" label="Cancel" />
            </div>
          ),
          label: 'One primary action',
          description: 'Use filled for the primary action and outline for secondary — clear visual hierarchy.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Button variant="filled" label="Save changes" />
              <Button variant="filled" label="Cancel" />
            </div>
          ),
          label: 'Multiple primaries',
          description: "Don't use two filled buttons side by side. It creates visual confusion about which action to take.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default ButtonDocs;
