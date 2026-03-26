import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';

export const LabelDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Label"
        subtitle="A core building block for displaying text with optional icons and dropdown split functionality"
      />

      <DocsTemplate.BodyText>
        The Label component is a core building block of the design system, used to
        display text with optional icons and dropdown split functionality. It is
        designed to be highly systematic, with 120 possible variants based on size,
        weight, alignment, and state.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagram below shows the anatomy of a default-size bold Label with a leading icon
          and optional dropdown split. All three elements are independently optional.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)', fontWeight: 'var(--global-type-weight-bold)', color: 'var(--global-color-base-black)', letterSpacing: '0.15px' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM10 6a.75.75 0 0 0-.75.75v3.5H7.75a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0V11.75h1.5a.75.75 0 0 0 0-1.5h-1.5V6.75A.75.75 0 0 0 10 6z" fill="currentColor"/>
              </svg>
              <span>Example Label Text</span>
              <span style={{ width: '1px', height: '16px', background: 'currentColor', opacity: 0.3 }} aria-hidden="true" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }} aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Leading Icon',
              token: 'MUI icon component (or custom SVG)\n--label-icon-color\n--label-gap-{size}',
              description: 'Optional icon preceding the text. Inherits colour from --label-icon-color. Gap to text is controlled by --label-gap-{size}.',
            },
            {
              id: 2,
              name: 'Text',
              token: '--label-font-family\n--label-size-{size}\n--label-line-height-{size}\n--label-weight-{weight}\n--label-text-color\n--label-letter-spacing',
              description: 'The primary label string. Font size, line height, and weight are all size- and weight-variant driven. Supports 5 sizes × 4 weights.',
            },
            {
              id: 3,
              name: 'Dropdown Split',
              token: '--label-dropdown-split-width\n--label-dropdown-split-opacity\n--label-dropdown-split-gap\n--label-dropdown-chevron-opacity\n--label-dropdown-padding-left',
              description: 'Optional split divider + chevron for dropdown-trigger labels. Controlled by the showDropdown prop. Divider uses --label-divider-color.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Core Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Core"
        description="We use the following core tokens to render our labels:"
        tokens={[
          { name: '--label-text-color', description: 'Primary text color' },
          { name: '--label-font-family', description: 'Font family' },
          { name: '--label-icon-color', description: 'Primary icon color' },
          { name: '--label-divider-color', description: 'Dropdown divider color' },
          { name: '--label-letter-spacing', description: 'Global letter spacing' },
        ]}
      />

      {/* ── Size Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Size"
        description="Size tokens control font size, line height, and gap at each scale:"
        tokens={[
          { name: '--label-size-large', description: 'Large font size' },
          { name: '--label-size-default', description: 'Default font size' },
          { name: '--label-size-small', description: 'Small font size' },
          { name: '--label-size-x-small', description: 'X-Small font size' },
          { name: '--label-size-2x-small', description: '2X-Small font size' },
          { name: '--label-line-height-large', description: 'Large line height' },
          { name: '--label-line-height-default', description: 'Default line height' },
          { name: '--label-line-height-small', description: 'Small line height' },
          { name: '--label-line-height-x-small', description: 'X-Small line height' },
          { name: '--label-line-height-2x-small', description: '2X-Small line height' },
          { name: '--label-gap-large', description: 'Large gap between icons/text' },
          { name: '--label-gap-default', description: 'Default gap between icons/text' },
          { name: '--label-gap-small', description: 'Small gap between icons/text' },
          { name: '--label-gap-x-small', description: 'X-Small gap between icons/text' },
          { name: '--label-gap-2x-small', description: '2X-Small gap between icons/text' },
        ]}
      />

      {/* ── Weight Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Weight"
        description="Weight tokens control font weight values:"
        tokens={[
          { name: '--label-weight-bold', description: 'Bold font weight' },
          { name: '--label-weight-medium', description: 'Medium font weight' },
          { name: '--label-weight-light', description: 'Light font weight' },
          { name: '--label-weight-thin', description: 'Thin font weight' },
        ]}
      />

      {/* ── Dropdown Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Dropdown"
        description="Dropdown-specific tokens for the split variant:"
        tokens={[
          { name: '--label-dropdown-split-width', description: 'Divider width' },
          { name: '--label-dropdown-split-opacity', description: 'Divider opacity' },
          { name: '--label-dropdown-chevron-opacity', description: 'Chevron icon opacity' },
          { name: '--label-dropdown-split-gap', description: 'Gap within dropdown split' },
          { name: '--label-dropdown-padding-left', description: 'Padding left for split section' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these common design principles by using labels in a cohesive, useful, and legible way."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Design for universal understanding">
          Labels should be clear, concise, and clearly describe the content or action
          they relate to.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Balance simplicity and detail to create legibility">
          Craft labels that use short, simple words, whilst containing enough context
          to properly identify the associated action or content.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Maintain visual harmony">
          Ensure labels work together as a cohesive system by adhering to consistent
          size, shape, and alignment guidelines across the entire interface.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Use labels intentionally">
          Labels provide crucial context and hierarchy to UI elements. Avoid
          unnecessary labels that repeat information clearly implied by icons or
          surrounding context.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="Import the Label component and pass your desired props."
      />

      <DocsTemplate.CodeBlock>
        {`import { Label } from './Label';
import PersonIcon from '@mui/icons-material/Person';

const MyComponent = () => (
  <Label size="default" weight="bold" leadingIcon={PersonIcon}>
    Example Label
  </Label>
);`}
      </DocsTemplate.CodeBlock>

      {/* ── Visual Style ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Labels support different visual weights, dropdown variations, and alignments. Ensure appropriate contrast ratios when switching between brands."
      />

      <DocsTemplate.Subsection title="Weights" />

      <DocsTemplate.BodyText>
        The Label component supports four font weights: bold, medium, light, and thin.
        Use systematic weights for consistent hierarchy throughout the interface.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <span style={{ fontWeight: 'var(--global-type-weight-bold)', fontSize: 'var(--global-type-size-primary-label-lg)' }}>Aa</span>,
          description:
            'Use systematic weights (bold, medium, light, thin) for consistent hierarchy.',
        }}
        dontItem={{
          icon: <span style={{ fontWeight: 450, fontSize: 'var(--global-type-size-primary-label-lg)' }}>Aa</span>,
          description:
            'Overwrite internal component styles directly; use the token system. Avoid creating new custom weights or hardcoding pixel sizes.',
        }}
      />

      <DocsTemplate.Subsection title="Alignment" />

      <DocsTemplate.BodyText>
        Labels can be aligned left, centre, or right. Choose alignment that matches
        the context of the surrounding layout.
      </DocsTemplate.BodyText>

      {/* ── Size & Spacing ── */}
      <DocsTemplate.Section
        title="Size &amp; spacing"
        subtitle="The Label component supports multiple sizes. Use the size prop to ensure consistent scaling alongside other components."
      />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Large',
            sublabel: 'Use for headings and emphasis',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-lg)', fontWeight: 'var(--global-type-weight-bold)' }}>Label</span>,
          },
          {
            label: 'Default',
            sublabel: 'Use in most cases',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label)', fontWeight: 'var(--global-type-weight-bold)' }}>Label</span>,
          },
          {
            label: 'Small',
            sublabel: 'Use sparingly',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-bold)' }}>Label</span>,
          },
          {
            label: 'X-Small',
            sublabel: 'Use rarely',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', fontWeight: 'var(--global-type-weight-bold)' }}>Label</span>,
          },
          {
            label: '2X-Small',
            sublabel: 'Use rarely',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)', fontWeight: 'var(--global-type-weight-bold)' }}>Label</span>,
          },
        ]}
      />

      <DocsTemplate.BodyText>
        This component provides 120 possible variants: 5 sizes &times; 4 weights
        &times; 3 alignments &times; 2 dropdown states. See the interactive stories
        for a full variant matrix.
      </DocsTemplate.BodyText>

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          When proposing updates or new properties for the Label component, consider
          the following:
        </DocsTemplate.BodyText>

        <DocsTemplate.BulletList
          ordered
          items={[
            'Does the proposed change align with existing typography scales?',
            'Does it maintain backward compatibility with our systematic sizing approach?',
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
