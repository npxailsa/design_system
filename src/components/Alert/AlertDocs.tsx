import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Alert } from './Alert';
import type { AlertColour } from './Alert';

const COLOURS: AlertColour[] = [
  'default',
  'warning',
  'light-gray',
  'navy',
  'success',
  'error',
  'purple',
  'white',
];

export const AlertDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Alert"
        subtitle="A banner component for surfacing contextual messages, warnings, and status feedback"
      />

      <DocsTemplate.BodyText>
        The Alert component is used to communicate important information to users
        through colour-coded banners. It supports 48 total variants across 3 sizes,
        8 colour themes, and 2 border states, with optional leading icon, trailing
        close button, and description subtext.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagram below identifies the numbered parts of the Alert component, the design tokens
          that control each element, and how they relate to one another. All sizes scale
          proportionally across the three size variants.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={<Alert size="default" colour="default" border />}
          parts={[
            {
              id: 1,
              name: 'Leading Icon',
              token: 'filled/icons (display category)\n--alert-leading-icon-{size}\n--alert-icon-opacity',
              description: 'Context-sensitive SVG icon indicating the alert type. Rendered at 50% opacity via --alert-icon-opacity. Icon selection varies per colour variant.',
            },
            {
              id: 2,
              name: 'Title',
              token: '--alert-font-family\n--alert-title-size-{size}\n--alert-title-weight\n--alert-title-{colour}',
              description: 'Primary message text. Uses F37 Ginger Pro Regular. Colour changes per variant (e.g. navy for default, orange for warning).',
            },
            {
              id: 3,
              name: 'Description',
              token: '--alert-font-family\n--alert-desc-size-{size}\n--alert-desc-weight\n--alert-description-color',
              description: 'Supporting subtext at 300 weight (light). Always gray-700 regardless of colour variant. Toggle with showSubtext prop.',
            },
            {
              id: 4,
              name: 'Close Icon',
              token: 'filled/icons (action category)\n--alert-close-icon-{size}\n--alert-icon-opacity',
              description: 'Optional dismiss action icon. Rendered at 50% opacity. Tinted to match the variant title colour. Toggle with showTrailingIcon prop.',
            },
            {
              id: 5,
              name: 'Container',
              token: '--alert-bg-{colour}\n--alert-border-radius\n--alert-border-width\n--alert-padding-{size}\n--alert-min-width',
              description: 'Outer wrapper with colour-specific background tint. Border is optional (border prop). Min-width 400px, flex row layout.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Layout Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout"
        description="Layout tokens control padding, gaps, and border radius:"
        tokens={[
          { name: '--alert-padding-small', description: 'Padding for small size (6px 8px)' },
          { name: '--alert-padding-default', description: 'Padding for default size (12px all sides) — uses --global-spacing-sizing-12px' },
          { name: '--alert-padding-large', description: 'Padding for large size (16px 12px) — uses --global-spacing-sizing-16px / --global-spacing-sizing-12px' },
          { name: '--alert-gap', description: 'Gap between icon-group and close button (12px)' },
          { name: '--alert-icon-text-gap', description: 'Gap between leading icon and text (8px)' },
          { name: '--alert-text-gap-small', description: 'Gap between title and description — small (2px)' },
          { name: '--alert-text-gap-default', description: 'Gap between title and description — default (2px)' },
          { name: '--alert-text-gap-large', description: 'Gap between title and description — large (1px)' },
          { name: '--alert-border-radius', description: 'Border radius for bordered variant (6px) — uses --global-spacing-radius-6px' },
          { name: '--alert-border-width', description: 'Border width (1px)' },
          { name: '--alert-icon-opacity', description: 'Opacity applied to leading and close icons (0.5)' },
          { name: '--alert-min-width', description: 'Minimum width of the alert (400px)' },
        ]}
      />

      {/* ── Typography Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Typography tokens for title and description text:"
        tokens={[
          { name: '--alert-font-family', description: 'Font family (F37 Ginger Pro)' },
          { name: '--alert-letter-spacing', description: 'Letter spacing (0.15px)' },
          { name: '--alert-title-weight', description: 'Title font weight (400 / regular)' },
          { name: '--alert-desc-weight', description: 'Description font weight (300 / light)' },
          { name: '--alert-description-color', description: 'Description text color (gray-700)' },
          { name: '--alert-title-size-small', description: 'Title font size — small (12px)' },
          { name: '--alert-title-size-default', description: 'Title font size — default (14px)' },
          { name: '--alert-title-size-large', description: 'Title font size — large (18px) — uses --global-type-size-primary-label-lg' },
          { name: '--alert-title-line-height-small', description: 'Title line height — small (14px)' },
          { name: '--alert-title-line-height-default', description: 'Title line height — default (16px)' },
          { name: '--alert-title-line-height-large', description: 'Title line height — large (24px) — uses --global-type-line-height-label-lg' },
          { name: '--alert-desc-size-small', description: 'Description font size — small (12px)' },
          { name: '--alert-desc-size-default', description: 'Description font size — default (14px) — uses --global-type-size-primary-label-sm' },
          { name: '--alert-desc-size-large', description: 'Description font size — large (16px)' },
        ]}
      />

      {/* ── Icon Size Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Icon Sizes"
        description="Icon size tokens for leading and close icons per size variant:"
        tokens={[
          { name: '--alert-leading-icon-small', description: 'Leading icon — small (16px)' },
          { name: '--alert-leading-icon-default', description: 'Leading icon — default (22px)' },
          { name: '--alert-leading-icon-large', description: 'Leading icon — large (28px)' },
          { name: '--alert-close-icon-small', description: 'Close icon — small (14px)' },
          { name: '--alert-close-icon-default', description: 'Close icon — default (16px)' },
          { name: '--alert-close-icon-large', description: 'Close icon — large (18px)' },
        ]}
      />

      {/* ── Colour Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Colour Variants"
        description="Each colour variant maps to background, border, title, and icon fill tokens:"
        tokens={[
          { name: '--alert-bg-default', description: 'Default background — status-info-blue-light (#f5fcff) — uses --global-color-status-info-blue-light' },
          { name: '--alert-title-default', description: 'Default title color — secondary-navy' },
          { name: '--alert-bg-warning', description: 'Warning background — peach-cream-50 (#fffaf2) — uses --global-color-base-peach-cream-50' },
          { name: '--alert-title-warning', description: 'Warning title color — status-dark-orange' },
          { name: '--alert-icon-warning', description: 'Warning leading icon fill — status-orange' },
          { name: '--alert-bg-light-gray', description: 'Light-gray background — neutral-gray-50 (#f9fafb) — uses --global-color-neutral-gray-50' },
          { name: '--alert-title-light-gray', description: 'Light-gray title color — base-black' },
          { name: '--alert-bg-navy', description: 'Navy background — status-info-blue-light' },
          { name: '--alert-title-navy', description: 'Navy title color — status-info-blue' },
          { name: '--alert-bg-success', description: 'Success background — neutral-gray-50 (#f9fafb) — uses --global-color-neutral-gray-50' },
          { name: '--alert-title-success', description: 'Success title color — status-dark-green' },
          { name: '--alert-bg-error', description: 'Error background — status-red-light' },
          { name: '--alert-title-error', description: 'Error title color — status-red' },
          { name: '--alert-bg-purple', description: 'Purple background — status-purple-light' },
          { name: '--alert-title-purple', description: 'Purple title color — status-purple' },
          { name: '--alert-bg-white', description: 'White background — base-white' },
          { name: '--alert-title-white', description: 'White title color — base-black' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these design principles when using alerts in the interface."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Communicate with clarity">
          Alerts should clearly convey the nature and severity of the message.
          Use the appropriate colour variant to match the semantic meaning: error
          for failures, success for confirmations, warning for caution, and navy
          for informational messages.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Use sparingly and intentionally">
          Alerts demand attention. Overusing them diminishes their impact. Reserve
          alerts for messages that genuinely require user awareness and avoid
          stacking multiple alerts of the same type.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Provide actionable context">
          Always pair the title with a helpful description when additional context
          aids user understanding. The description should guide the user toward a
          next step or explain the situation.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Respect dismissibility">
          When an alert includes a close button, ensure the onClose callback
          properly removes the alert from the DOM. Dismissed alerts should not
          reappear without a new triggering event.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="Import the Alert component and pass your desired props."
      />

      <DocsTemplate.CodeBlock>
        {`import { Alert } from './Alert';

// Basic bordered alert
<Alert
  size="default"
  colour="success"
  border
  title="Changes saved successfully"
  description="Your profile has been updated."
  onClose={() => console.log('dismissed')}
/>

// Minimal alert without description or icons
<Alert
  colour="warning"
  border={false}
  title="Session expiring soon"
  showSubtext={false}
  showLeadingIcon={false}
  showTrailingIcon={false}
/>`}
      </DocsTemplate.CodeBlock>

      {/* ── Visual Style ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Alerts use colour-coded backgrounds, borders, and icons to communicate message severity at a glance."
      />

      <DocsTemplate.Subsection title="Colour variants" />

      <DocsTemplate.BodyText>
        Each colour variant uses a unique combination of background tint, border
        colour, title colour, and leading icon. The leading icon changes per colour
        to reinforce the semantic meaning (e.g. checkmark for success, triangle for
        warning).
      </DocsTemplate.BodyText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', marginBottom: 'var(--global-spacing-sizing-24px)' }}>
        {COLOURS.map((colour) => (
          <Alert key={colour} size="default" colour={colour} border />
        ))}
      </div>

      <DocsTemplate.Subsection title="Border vs. no border" />

      <DocsTemplate.BodyText>
        The bordered variant adds a background tint and 1px border with 6px radius.
        The no-border variant renders the same content on a transparent background,
        suitable for inline messaging within existing containers.
      </DocsTemplate.BodyText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', marginBottom: 'var(--global-spacing-sizing-24px)' }}>
        <Alert colour="default" border />
        <Alert colour="default" border={false} />
      </div>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Alert size="small" colour="error" border title="Error" showSubtext={false} showTrailingIcon={false} />,
          description:
            'Use the semantic colour variant that matches the message type (error, success, warning, info).',
        }}
        dontItem={{
          icon: <Alert size="small" colour="default" border title="Error occurred" showSubtext={false} showTrailingIcon={false} />,
          description:
            'Use mismatched colours for message types (e.g. default colour for error messages).',
        }}
      />

      {/* ── Size & Spacing ── */}
      <DocsTemplate.Section
        title="Size &amp; spacing"
        subtitle="The Alert component supports three sizes. Choose the size that best fits the context and information density."
      />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Large',
            sublabel: 'Use for prominent, page-level alerts',
            children: <Alert size="large" colour="default" border />,
          },
          {
            label: 'Default',
            sublabel: 'Use for most alert scenarios',
            children: <Alert size="default" colour="default" border />,
          },
          {
            label: 'Small',
            sublabel: 'Use for compact, inline alerts',
            children: <Alert size="small" colour="default" border />,
          },
        ]}
      />

      <DocsTemplate.BodyText>
        This component provides 48 possible variants: 3 sizes &times; 8 colours
        &times; 2 border states. Each variant also supports toggling the leading
        icon, trailing close button, and description subtext independently. See the
        interactive stories for a full variant matrix.
      </DocsTemplate.BodyText>

      {/* ── Leading Icons ── */}
      <DocsTemplate.Section
        title="Leading icons"
        subtitle="Each colour variant uses a specific NPX custom SVG icon to reinforce semantic meaning."
      />

      <DocsTemplate.BodyText>
        The following icons are used per colour variant. These are custom Figma-sourced
        SVGs, not MUI icons:
      </DocsTemplate.BodyText>

      <DocsTemplate.TokenTable
        title="Icon Mapping"
        description="Colour to leading icon mapping:"
        tokens={[
          { name: 'default', description: 'Bullseye (concentric rings target)' },
          { name: 'warning', description: 'Alert triangle (triangle with exclamation)' },
          { name: 'light-gray', description: 'Bullseye (concentric rings target)' },
          { name: 'navy', description: 'Information circle (i inside circle)' },
          { name: 'success', description: 'Check bold (bold checkmark)' },
          { name: 'error', description: 'Close thick (thick X cross)' },
          { name: 'purple', description: 'File document (document with lines)' },
          { name: 'white', description: 'Bullseye (concentric rings target)' },
        ]}
      />

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          When proposing updates or new properties for the Alert component, consider
          the following:
        </DocsTemplate.BodyText>

        <DocsTemplate.BulletList
          ordered
          items={[
            'Does the new colour variant have a clear semantic purpose?',
            'Does it maintain accessibility contrast ratios for both bordered and non-bordered states?',
            'Are the leading icon and colour pairing intuitive for the message type?',
          ]}
        />

        <DocsTemplate.BodyText>
          To contribute a new variation, please bring it to our{' '}
          <strong>Biweekly Design System meeting</strong> for review with the whole
          team. If you need the calendar invite forwarding, please send the{' '}
          <strong>design team</strong> a message on Teams.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
