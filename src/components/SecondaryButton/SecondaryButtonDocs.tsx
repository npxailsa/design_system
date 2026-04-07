import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { SecondaryButton } from './SecondaryButton';
import { Button } from '../Button/Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

export const SecondaryButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Secondary Button"
        subtitle="Blue-gray button for secondary and supporting actions across the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Secondary Button</strong> uses the blue-gray colour family to provide a
        visually distinct alternative to the Primary Button. It supports two visual
        variants — <em>solid</em> (dark blue-gray #304047 background, white text) and{' '}
        <em>alt</em> (white background, blue-gray border and text) — across four sizes,
        with optional leading and trailing icons, an icon-only mode, and built-in loading
        and disabled states. All styling is driven by the <code>--btn-secondary-*</code>{' '}
        token family with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Secondary Button shares the same structural anatomy as the Primary Button.
          The key difference is the colour treatment: it uses the blue-gray palette
          (<code>--brand-secondary</code>) instead of the primary blue palette.
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
              <SecondaryButton
                variant="alt"
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
              token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-secondary-bg (--brand-secondary / #304047)\n--btn-secondary-border-color (--brand-secondary-dark / #182024)\n--btn-secondary-border-width (--global-spacing-stroke-1px)\n--btn-padding-{size}',
              description: 'Outer button shell. Corner radius: 4px. Solid: dark blue-gray (#304047) bg, 1px dark border (#182024). Alt: white bg, 1px blue-gray (#304047) border. Hover: 2px border, 2×2px black drop shadow.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-secondary-color (--global-color-base-white)\n--btn-secondary-alt-color (--brand-secondary / #304047)',
              description: 'Optional icon preceding the label. Solid: white (#FFFFFF). Alt: blue-gray (#304047), darkens to black (#1C1C1C) on hover.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-secondary-color (--global-color-base-white)\n--btn-secondary-alt-color (--brand-secondary / #304047)',
              description: 'Optional icon after the label. Solid: white. Alt: blue-gray, darkens to black on hover.',
            },
            {
              id: 4,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (--global-type-weight-light)\n--btn-secondary-color / --btn-secondary-alt-color',
              description: 'Button text. Uses F37 Ginger Pro Light. Solid: white (#FFFFFF). Alt: blue-gray (#304047), shifts to black (#1C1C1C) on hover.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Two visual variants cover different background contexts. Use <strong>solid</strong>
          for the default secondary action and <strong>alt</strong> when placed on a dark or
          coloured background where the solid would blend in.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Solid">
          <DocsTemplate.BodyText>
            Dark blue-gray (#304047) background with white text and a 1px dark-blue-gray
            (#182024) border. Hover lightens the background to #758084 and adds a 2×2px
            black drop shadow.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <SecondaryButton variant="solid" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="solid" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <SecondaryButton variant="solid" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="solid" label="Label" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Alt">
          <DocsTemplate.BodyText>
            White (#FFFFFF) background with a 1px blue-gray (#304047) border and blue-gray
            text. Hover shifts background to blue-gray-50 (#D6D9DA), text to black (#1C1C1C),
            and adds a 2×2px black drop shadow.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <SecondaryButton variant="alt" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="alt" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <SecondaryButton variant="alt" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="alt" label="Label" />
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
                  <SecondaryButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <SecondaryButton size="extra-small" variant="alt" label="Label" />
                  <SecondaryButton size="extra-small" iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
                </div>
              ),
            },
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center' }}>
                  <SecondaryButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
                  <SecondaryButton size="small" variant="alt" label="Label" />
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
                  <SecondaryButton size="default" variant="alt" label="Label" />
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
                  <SecondaryButton size="large" variant="alt" label="Label" />
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

        <DocsTemplate.Subsection title="Icon Only">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'center' }}>
            <SecondaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
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
            Resting state. Solid: dark blue-gray (#304047) bg, white text, 1px #182024 border.
            Alt: white bg, blue-gray (#304047) text and border.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Solid" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="alt" label="Alt" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during loading.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Loading…" loading size="small" />
            <SecondaryButton label="Loading…" loading />
            <SecondaryButton label="Loading…" loading size="large" />
            <SecondaryButton label="Loading…" variant="alt" loading />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled state uses explicit gray colours per the Figma spec (no opacity reduction).
            Background: gray-100 (#F3F4F6), border & text: gray-400 (#9CA3AF).
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Label" disabled />
            <SecondaryButton label="Label" variant="alt" disabled />
            <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
            <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Solid Variant"
        description="Colour tokens for the solid (filled dark blue-gray) variant:"
        tokens={[
          { name: '--btn-secondary-bg', description: 'Default background — --brand-secondary (#304047)' },
          { name: '--btn-secondary-bg-hover', description: 'Hover/active background — --brand-secondary-300 (#758084)' },
          { name: '--btn-secondary-color', description: 'Default text & icon colour — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-secondary-color-hover', description: 'Hover text & icon colour — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-secondary-border-color', description: 'Default & hover border — --brand-secondary-dark (#182024)' },
          { name: '--btn-secondary-border-width', description: 'Default border width — --global-spacing-stroke-1px (1px)' },
          { name: '--btn-secondary-border-width-hover', description: 'Hover/active border width — --global-spacing-stroke-2px (2px)' },
          { name: '--btn-secondary-shadow-hover', description: 'Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Alt Variant"
        description="Colour tokens for the alt (white bg, blue-gray outline) variant:"
        tokens={[
          { name: '--btn-secondary-alt-bg', description: 'Default background — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-secondary-alt-bg-hover', description: 'Hover/active background — --brand-secondary-50 (#D6D9DA)' },
          { name: '--btn-secondary-alt-color', description: 'Default text & icon colour — --brand-secondary (#304047)' },
          { name: '--btn-secondary-alt-color-hover', description: 'Hover text & icon colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-secondary-alt-border-color', description: 'Border colour (all states) — --brand-secondary (#304047)' },
          { name: '--btn-secondary-alt-shadow-hover', description: 'Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Shared States"
        description="Tokens shared across both variants for disabled and focus states:"
        tokens={[
          { name: '--btn-secondary-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-100 (#F3F4F6)' },
          { name: '--btn-secondary-color-disabled', description: 'Disabled text & icon — --global-color-neutral-gray-400 (#9CA3AF)' },
          { name: '--btn-secondary-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-400 (#9CA3AF)' },
          { name: '--btn-secondary-border-width-focus', description: 'Focus border width — --global-spacing-stroke-1px (1px, matches default)' },
          { name: '--btn-secondary-icon-only-bg-hover', description: 'Icon-only hover bg — --brand-secondary-300 (#758084)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant (dark blue-gray bg, white text)
<SecondaryButton label="Cancel" />

// Alt variant (white bg, blue-gray text)
<SecondaryButton variant="alt" label="Cancel" />

// With icons
<SecondaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Extra-small size
<SecondaryButton size="extra-small" label="Compact" />

// Icon only
<SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />

// Loading & disabled
<SecondaryButton label="Loading…" loading />
<SecondaryButton label="Restricted" disabled />

// Paired with Primary Button
<Button label="Save changes" />
<SecondaryButton label="Cancel" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Pair with a Primary Button">
          The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it
          for cancel, dismiss, or lower-priority actions within the same context.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Choose the right variant">
          Use <strong>solid</strong> as the default. Switch to <strong>alt</strong> when
          placing the button on a dark background or when a white-background outline style
          is needed for visual contrast.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match size to its sibling">
          When pairing with a Primary Button, use the same size for both to maintain visual
          alignment and consistent touch targets.
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

      <DocsTemplate.RelatedLinks
        links={[
          { label: 'Figma Library', href: 'https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1' },
          { label: 'Primary Button', href: '/?path=/story/atoms-buttons-primary-button--documentation' },
          { label: 'Tertiary Button', href: '/?path=/story/atoms-buttons-tertiary-button--documentation' },
          { label: 'Ghost Button', href: '/?path=/story/atoms-buttons-ghost-button--documentation' },
        ]}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default SecondaryButtonDocs;
