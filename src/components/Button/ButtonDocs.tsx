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
        title="Button"
        subtitle="The primary interactive control for triggering actions, submitting forms, and navigating the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Button</strong> component is the core action element of the design system. It
        supports three visual variants — <em>filled</em>, <em>outline</em>, and <em>ghost</em> — across
        three sizes, with optional leading and trailing icons, an icon-only mode, and built-in
        loading and disabled states. All styling is driven by the token system with no hardcoded values.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagram below maps each part of the default filled Button to its controlling design token.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F39deb59118f84012a5375e7c768ee343"
              alt="Button component anatomy diagram with numbered callouts"
              style={{ width: '100%', height: 'auto' }}
            />
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-border-radius (--global-spacing-radius-8px)\n--btn-border-width (--global-spacing-stroke-2px)\n--btn-height-{size}\n--btn-padding-{size}\n--btn-filled-bg (--brand-primary)',
              description: 'Outer button shell. Height and padding are size-driven. Background, border, and colour switch per variant. Corner radius is 8px.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-icon-size-{size}\n--btn-gap-{size}',
              description: 'Optional MUI icon before the label. Size scales with the button size. Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-font-family (--brand-font-primary)\n--btn-font-size-{size}\n--btn-font-weight (400)\n--btn-letter-spacing',
              description: 'Primary button text. Uses F37 Ginger Regular. Font size is size-variant driven. Set via the label prop.',
            },
            {
              id: 4,
              name: 'Trailing Icon',
              token: '--btn-icon-size-{size}\n--btn-gap-{size}',
              description: 'Optional MUI icon after the label. Inherits button colour. Controlled by showTrailingIcon + trailingIcon props.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Variants ── */}
      <DocsTemplate.Section title="Variants">
        <DocsTemplate.BodyText>
          Three visual variants cover the full range of hierarchy needs. Use <strong>filled</strong>
          for the primary action, <strong>outline</strong> for secondary actions, and{' '}
          <strong>ghost</strong> for tertiary or low-emphasis controls.
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

        <DocsTemplate.Subsection title="Ghost">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Button variant="ghost" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="ghost" label="Label" showLeadingIcon leadingIcon={PersonIcon} />
            <Button variant="ghost" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant="ghost" label="Label" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes scale the button for different density contexts. All sizes support all
          variants and optional elements.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Small',
              sublabel: 'Dense toolbars, inline actions',
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
              sublabel: 'Standard use across the interface',
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
              sublabel: 'Hero calls-to-action, prominent forms',
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
            <Button iconOnly variant="ghost" leadingIcon={AddIcon} ariaLabel="Add" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner. The button is non-interactive during loading.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Button label="Loading…" loading size="small" />
            <Button label="Loading…" loading />
            <Button label="Loading…" loading size="large" />
            <Button label="Loading…" variant="outline" loading />
            <Button label="Loading…" variant="ghost" loading />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Disabled buttons render at 45% opacity and block all interactions. Apply with the{' '}
            <code>disabled</code> prop.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Button label="Label" disabled />
            <Button label="Label" variant="outline" disabled />
            <Button label="Label" variant="ghost" disabled />
            <Button label="Label" showLeadingIcon leadingIcon={PersonIcon} disabled />
            <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Size"
        description="Tokens controlling dimensions, padding, and border radius:"
        tokens={[
          { name: '--btn-border-radius', description: 'Corner radius (8px) — uses --global-spacing-radius-8px' },
          { name: '--btn-border-width', description: 'Border thickness (2px) — uses --global-spacing-stroke-2px' },
          { name: '--btn-height-small', description: 'Small button height (32px) — uses --global-spacing-sizing-32px' },
          { name: '--btn-height-default', description: 'Default button height (40px) — uses --global-spacing-sizing-40px' },
          { name: '--btn-height-large', description: 'Large button height (48px) — uses --global-spacing-sizing-48px' },
          { name: '--btn-padding-small', description: 'Small horizontal padding (0 12px)' },
          { name: '--btn-padding-default', description: 'Default horizontal padding (0 16px)' },
          { name: '--btn-padding-large', description: 'Large horizontal padding (0 20px)' },
          { name: '--btn-gap-small', description: 'Gap between elements — small (6px)' },
          { name: '--btn-gap-default', description: 'Gap between elements — default (8px)' },
          { name: '--btn-gap-large', description: 'Gap between elements — large (10px)' },
          { name: '--btn-icon-only-size-{size}', description: 'Icon-only button width = height (32px / 40px / 48px)' },
          { name: '--btn-disabled-opacity', description: 'Disabled state opacity (0.45)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Tokens controlling text appearance:"
        tokens={[
          { name: '--btn-font-family', description: 'Font family — F37 Ginger Pro (--brand-font-primary)' },
          { name: '--btn-font-weight', description: 'Font weight — 400 regular (--global-type-weight-default)' },
          { name: '--btn-letter-spacing', description: 'Letter spacing (0.15px)' },
          { name: '--btn-font-size-small', description: 'Small font size (14px) — uses --global-type-size-primary-label-sm' },
          { name: '--btn-font-size-default', description: 'Default font size (16px) — uses --global-type-size-primary-label' },
          { name: '--btn-font-size-large', description: 'Large font size (18px) — uses --global-type-size-primary-label-lg' },
          { name: '--btn-icon-size-small', description: 'Small icon size (16px)' },
          { name: '--btn-icon-size-default', description: 'Default icon size (18px)' },
          { name: '--btn-icon-size-large', description: 'Large icon size (20px)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Filled Variant"
        description="Colour tokens for the filled (primary) variant:"
        tokens={[
          { name: '--btn-filled-bg', description: 'Default background — uses --brand-primary (#3776ce)' },
          { name: '--btn-filled-bg-hover', description: 'Hover background — uses --brand-primary-dark (#182b47)' },
          { name: '--btn-filled-bg-active', description: 'Active/pressed background — uses --brand-primary-dark' },
          { name: '--btn-filled-color', description: 'Text and icon colour — uses --global-color-base-white' },
          { name: '--btn-filled-border-color', description: 'Border (transparent for filled)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Outline Variant"
        description="Colour tokens for the outline (secondary) variant:"
        tokens={[
          { name: '--btn-outline-bg', description: 'Default background (transparent)' },
          { name: '--btn-outline-bg-hover', description: 'Hover background — uses --brand-primary-25' },
          { name: '--btn-outline-bg-active', description: 'Active background — uses --brand-primary-50' },
          { name: '--btn-outline-color', description: 'Text and icon colour — uses --brand-primary' },
          { name: '--btn-outline-border-color', description: 'Border colour — uses --brand-primary' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Ghost Variant"
        description="Colour tokens for the ghost (tertiary) variant:"
        tokens={[
          { name: '--btn-ghost-bg', description: 'Default background (transparent)' },
          { name: '--btn-ghost-bg-hover', description: 'Hover background — uses --brand-primary-25' },
          { name: '--btn-ghost-bg-active', description: 'Active background — uses --brand-primary-50' },
          { name: '--btn-ghost-color', description: 'Text and icon colour — uses --brand-primary' },
          { name: '--btn-ghost-border-color', description: 'Border (transparent for ghost)' },
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

// Ghost variant
<Button variant="ghost" label="Learn more" showTrailingIcon trailingIcon={ArrowForwardIcon} />

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
          action. Use <strong>outline</strong> for secondary actions and <strong>ghost</strong> for
          tertiary or destructive alternatives.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match size to context">
          Use <strong>small</strong> in dense toolbars and inline controls, <strong>default</strong>
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
