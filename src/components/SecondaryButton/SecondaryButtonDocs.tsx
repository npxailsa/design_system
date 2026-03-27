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
        subtitle="Sky-blue button for secondary and supporting actions across the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Secondary Button</strong> uses the sky-blue colour family to provide a
        visually distinct alternative to the Primary Button. It supports two visual
        variants — <em>solid</em> (sky-blue-50 background) and <em>alt</em> (white
        background) — across four sizes, with optional leading and trailing icons, an
        icon-only mode, and built-in loading and disabled states. All styling is driven by
        the <code>--btn-secondary-*</code> token family with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Secondary Button shares the same structural anatomy as the Primary Button.
          The key difference is the colour treatment: it uses the sky-blue palette
          (<code>--brand-sky-blue</code>) instead of the blue-blue palette.
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
              token: '--btn-border-radius (--global-spacing-radius-4px)\n--btn-secondary-bg (--brand-sky-blue-50 / #CCF0FB)\n--btn-secondary-border-color (--brand-sky-blue / #00B2EB)\n--btn-secondary-border-width (--global-spacing-stroke-0-5px)\n--btn-padding-{size}',
              description: 'Outer button shell. Corner radius: 4px. Solid variant: sky-blue-50 bg. Alt variant: white bg. Border: 0.5px solid sky-blue. On hover: 1px border with 2x2 sky-blue drop shadow.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-secondary-color (--global-color-secondary-blue-gray / #61607C)',
              description: 'Optional icon preceding the label. Fill: #61607C (default), shifts to #1C1C1C on hover.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size} (14px / 16px / 18px)\n--btn-secondary-color (--global-color-secondary-blue-gray / #61607C)',
              description: 'Optional icon after the label. Fill: #61607C (default), shifts to #1C1C1C on hover.',
            },
            {
              id: 4,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (--global-type-weight-light)\n--btn-secondary-color (--global-color-secondary-blue-gray)',
              description: 'Button text. Uses F37 Ginger Pro Light. Colour: blue-gray (#61607C), shifts to black (#1C1C1C) on hover.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Two visual variants cover different background contexts. Use <strong>solid</strong>
          for the default secondary action and <strong>alt</strong> when a lighter/white
          background is needed.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Solid">
          <DocsTemplate.BodyText>
            Sky-blue-50 (#CCF0FB) background with sky-blue border. The default variant.
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
            White (#FFFFFF) background with sky-blue border. Use when the solid variant
            clashes with a coloured background.
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
            Resting state. Solid uses sky-blue-50 (#CCF0FB) background; alt uses white.
            Both have a sky-blue (#00B2EB) 0.5px border and blue-gray text.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <SecondaryButton label="Solid" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton variant="alt" label="Alt" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
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
            <SecondaryButton label="Loading…" variant="alt" loading />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled state uses explicit gray colours per the Figma spec (no opacity reduction).
            Background: gray-50 (#F9FAFB), border: gray-200 (#E5E7EB), text: gray-300 (#D2D5DA).
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
        title="Design Tokens — Layout & Spacing"
        description="Shared tokens (inherited from the base Button token system):"
        tokens={[
          { name: '--btn-border-radius', description: 'Corner radius (4px) — --global-spacing-radius-4px' },
          { name: '--btn-border-width-default', description: 'Hover border (1px) — --global-spacing-stroke-1px' },
          { name: '--btn-secondary-border-width', description: 'Default border (0.5px) — --global-spacing-stroke-0-5px' },
          { name: '--btn-secondary-border-width-focus', description: 'Focus / disabled border (2px) — --global-spacing-stroke-2px' },
          { name: '--btn-border-width-loading', description: 'Loading border (0.5px) — --global-spacing-stroke-0-5px' },
          { name: '--btn-secondary-padding-xs', description: 'Extra-small padding — 2px / 4px' },
          { name: '--btn-padding-small', description: 'Small padding — 8px / 12px' },
          { name: '--btn-padding-default', description: 'Default padding — 12px / 16px' },
          { name: '--btn-padding-large', description: 'Large padding — 16px / 20px' },
          { name: '--btn-transition-duration', description: 'Transition speed — --global-animation-duration-fast' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Secondary Colour Tokens"
        description="Sky-blue colour tokens specific to the Secondary Button:"
        tokens={[
          { name: '--btn-secondary-bg', description: 'Solid default bg — --brand-sky-blue-50 (#CCF0FB)' },
          { name: '--btn-secondary-bg-hover', description: 'Solid hover bg — --global-color-primary-sky-blue-25 (#FAFDFF)' },
          { name: '--btn-secondary-alt-bg', description: 'Alt default bg — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-secondary-alt-bg-hover', description: 'Alt hover bg — --global-color-primary-sky-blue-25 (#FAFDFF)' },
          { name: '--btn-secondary-icon-only-bg-hover', description: 'Icon-only hover bg — --global-color-primary-sky-blue-50 (#F4FCFF)' },
          { name: '--btn-secondary-color', description: 'Default text/icon — --global-color-secondary-blue-gray (#61607C)' },
          { name: '--btn-secondary-color-hover', description: 'Hover text/icon — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-secondary-border-color', description: 'Default border — --brand-sky-blue (#00B2EB)' },
          { name: '--btn-secondary-shadow-hover', description: 'Hover box-shadow — 2px 2px 0 0 --global-color-primary-sky-blue (#0BA7EA)' },
          { name: '--btn-secondary-bg-disabled', description: 'Disabled bg — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-secondary-color-disabled', description: 'Disabled text — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-secondary-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant
<SecondaryButton label="Cancel" />

// Alt variant (white background)
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
          Use <strong>solid</strong> as the default. Switch to <strong>alt</strong> when the
          sky-blue background would clash with the surrounding context or when a lighter
          appearance is needed.
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

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default SecondaryButtonDocs;
