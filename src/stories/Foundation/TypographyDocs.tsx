import React from 'react';
import { DocsTemplate } from '../../components/DocsTemplate/DocsTemplate';

export const TypographyDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Typography"
        subtitle="A core element of our design language, providing clear hierarchy, tone, and readable interfaces"
      />

      <DocsTemplate.BodyText>
        Typography is a core element of our design language, providing a clear
        hierarchy, establishing tone, and creating readable, harmonious interfaces.
      </DocsTemplate.BodyText>

      {/* ── Typeface Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Typefaces"
        description="We use the following typography tokens to render text across our components:"
        tokens={[
          { name: '--global-font-primary', description: 'Primary font — F37 Ginger Pro' },
          { name: '--global-font-secondary', description: 'Secondary font — Calibri' },
          { name: '--brand-font-primary', description: 'Brand primary font alias — var(--global-font-primary)' },
          { name: '--brand-font-secondary', description: 'Brand secondary font alias — var(--global-font-secondary)' },
        ]}
      />

      {/* ── Font Weight Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Font Weights"
        description="Font weight tokens control the visual weight of text:"
        tokens={[
          { name: '--global-type-weight-thin', description: 'Thin weight — 100' },
          { name: '--global-type-weight-light', description: 'Light weight — 300' },
          { name: '--global-type-weight-default', description: 'Regular weight — 400' },
          { name: '--global-type-weight-medium', description: 'Medium weight — 500' },
          { name: '--global-type-weight-semibold', description: 'Semibold weight — 600' },
          { name: '--global-type-weight-bold', description: 'Bold weight — 700' },
          { name: '--global-type-weight-extra-bold', description: 'Extra bold weight — 800' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these common design principles by using typography in a cohesive, useful, and legible way."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Design for universal understanding">
          Select clear, widely legible typefaces that ensure information is readable
          across all devices and screen sizes. Use type to establish a consistent
          hierarchy.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Balance simplicity and detail to create legibility">
          Ensure text contrast meets WCAG 2.1 AA guidelines. Avoid using too many
          different font sizes and weights within a single view.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Maintain visual harmony">
          Adhere to the typography scale for sizes and line heights. Consistent
          spacing around text elements creates a harmonious rhythm.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Use typography intentionally">
          Use font weights and sizes to guide the user&rsquo;s eye to the most
          important information first.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="When using typography in your components, always refer to the design tokens defined in tokens.css. Use CSS custom properties rather than hardcoding sizes or typefaces."
      />

      <DocsTemplate.CodeBlock>
        {`.my-title {
  font-family: var(--brand-font-primary);
  font-size: var(--global-type-size-primary-heading-1);
  font-weight: var(--global-type-weight-bold);
  line-height: var(--global-type-line-height-heading-1);
}

.my-text {
  font-family: var(--brand-font-secondary);
  font-size: var(--global-type-size-secondary-body);
  font-weight: var(--global-type-weight-default);
  line-height: var(--global-type-line-height-body);
}`}
      </DocsTemplate.CodeBlock>

      {/* ── Visual Style ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Our typographic style balances the unique character of our brand with functional legibility for application UIs."
      />

      <DocsTemplate.DosDonts
        doItem={{
          icon: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-lg)', fontWeight: 'var(--global-type-weight-bold)' }}>Aa</span>,
          description:
            'Use standard font weight tokens for consistency. Use brand aliases (var(--brand-font-primary)) rather than global typefaces directly when styling brand-specific components.',
        }}
        dontItem={{
          icon: <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 'var(--global-type-size-primary-label-lg)', fontWeight: 450 }}>Aa</span>,
          description:
            'Do not introduce custom font weights or arbitrary line heights outside the token scale.',
        }}
      />

      {/* ── Size & Spacing ── */}
      <DocsTemplate.Section
        title="Size &amp; spacing"
        subtitle="We use a systematic scale for labels, headings, and body text."
      />

      <DocsTemplate.Subsection title="Label Primary Scale" />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Large (18px)',
            sublabel: 'label-lg',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-lg)' }}>Label Primary Scale</span>,
          },
          {
            label: 'Default (16px)',
            sublabel: 'label',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Label Primary Scale</span>,
          },
          {
            label: 'Small (14px)',
            sublabel: 'label-sm',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)' }}>Label Primary Scale</span>,
          },
          {
            label: 'X-Small (12px)',
            sublabel: 'label-xs',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>Label Primary Scale</span>,
          },
          {
            label: '2X-Small (10px)',
            sublabel: 'label-xxs',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)' }}>Label Primary Scale</span>,
          },
        ]}
      />

      <DocsTemplate.Subsection title="Heading Primary Scale" />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Heading 1',
            sublabel: 'heading-1',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-heading-1)', fontWeight: 'var(--global-type-weight-bold)' }}>Heading</span>,
          },
          {
            label: 'Heading 2',
            sublabel: 'heading-2',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-heading-2)', fontWeight: 'var(--global-type-weight-bold)' }}>Heading</span>,
          },
          {
            label: 'Heading 3',
            sublabel: 'heading-3',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-heading-3)', fontWeight: 'var(--global-type-weight-bold)' }}>Heading</span>,
          },
          {
            label: 'Heading 4',
            sublabel: 'heading-4',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-heading-4)', fontWeight: 'var(--global-type-weight-bold)' }}>Heading</span>,
          },
          {
            label: 'Heading 5',
            sublabel: 'heading-5',
            children: <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-heading-5)', fontWeight: 'var(--global-type-weight-bold)' }}>Heading</span>,
          },
        ]}
      />

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          If a new typographic scale or size variant is required for a novel use case,
          consider whether existing sizes can be adapted first.
        </DocsTemplate.BodyText>

        <DocsTemplate.BodyText>
          To contribute a new typographic variant, please bring it to our{' '}
          <strong>Biweekly Design System meeting</strong> for review with the whole
          team. If you need the calendar invite forwarding, please send the{' '}
          <strong>design team</strong> a message on Teams.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
