import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { AccordionAlt } from './AccordionAlt';

export const AccordionAltDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Accordion (alt.)"
        subtitle="Alternate accordion styles designed for decorative, marketing, and structured data display — visually distinct from the standard utility accordion"
      />

      <DocsTemplate.BodyText>
        The <strong>Accordion (alt.)</strong> component provides three visually expressive accordion
        sub-types — <em>decorative</em>, <em>numbered</em>, and <em>label</em>. Unlike the standard
        Accordion (which focuses on utility and functional disclosure), these variants are tailored
        for marketing hero sections, step-by-step processes, and tagged data categories.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagram below uses the decorative type (open state) to show each numbered part and
          its corresponding tokens. The numbered and label types share the same layout; only the
          prefix element (icon badge, number, or tag) differs.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={
            <AccordionAlt
              type="decorative"
              size="default"
              showIcon
              title="Discover what's new in our latest release"
              defaultOpen
            />
          }
          parts={[
            {
              id: 1,
              name: 'Icon Badge',
              token: '--accordion-alt-icon-badge-size\n--accordion-alt-icon-badge-bg\n--accordion-alt-icon-badge-border-color\n--accordion-alt-icon-badge-border-radius',
              description: 'Circular badge shown in decorative type. Contains a bell SVG icon. Replaced by a number (numbered type) or tag pill (label type).',
            },
            {
              id: 2,
              name: 'Title',
              token: '--accordion-alt-title-font-family\n--accordion-alt-title-font-size-{size}\n--accordion-alt-title-color\n--accordion-alt-title-weight',
              description: 'Primary heading text using F37 Ginger Pro. Truncates with ellipsis if it overflows the available horizontal space.',
            },
            {
              id: 3,
              name: 'Toggle Button',
              token: '--accordion-alt-toggle-size-{size}\n--accordion-alt-toggle-bg\n--accordion-alt-toggle-border-color\n--accordion-alt-toggle-border-radius',
              description: 'Pill-shaped button containing a chevron or plus/minus icon. Controlled by the openIcon prop. Rotates/changes on open/close.',
            },
            {
              id: 4,
              name: 'Body Text',
              token: '--accordion-alt-body-color\n--accordion-alt-body-font-family\n--accordion-alt-body-font-size\n--accordion-alt-gap-open',
              description: 'Expanded content below the trigger row. Text wraps normally. Visible only in the open state.',
            },
            {
              id: 5,
              name: 'Container',
              token: '--accordion-alt-bg\n--accordion-alt-border-radius\n--accordion-alt-border-width\n--accordion-alt-min-width\n--accordion-alt-max-width',
              description: 'Outer panel. Width is fixed between open/closed states (200px–600px). Open state uses inset box-shadow for border emphasis without layout shift.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Decorative Type ── */}
      <DocsTemplate.Section title="Decorative Type">
        <DocsTemplate.BodyText>
          The <strong>decorative</strong> type features a sky-blue border, a circular bell icon badge,
          and a gradient background when open. Best suited for marketing hero sections and featured
          content areas.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Closed">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="decorative"
              size="default"
              showIcon
              title="Discover what's new in our latest release"
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Open">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="decorative"
              size="default"
              showIcon
              title="Discover what's new in our latest release"
              defaultOpen
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Numbered Type ── */}
      <DocsTemplate.Section title="Numbered Type">
        <DocsTemplate.BodyText>
          The <strong>numbered</strong> type displays a number prefix (e.g. "01") in sky-blue. When
          open, the border turns sky-blue. Ideal for step-by-step processes, ordered lists, and
          sequential workflows.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Closed">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="numbered"
              size="default"
              number="01"
              showNumber
              title="Define your project requirements"
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Open">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="numbered"
              size="default"
              number="01"
              showNumber
              title="Define your project requirements"
              defaultOpen
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Label Type ── */}
      <DocsTemplate.Section title="Label Type">
        <DocsTemplate.BodyText>
          The <strong>label</strong> type uses a gray border with a small sky-blue tag/label badge.
          The badge is always visible. Designed for data categories, tagged content, and filtering
          interfaces.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Closed">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="label"
              size="default"
              label="Category"
              title="Filtering and sorting options"
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Open">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt
              type="label"
              size="default"
              label="Category"
              title="Filtering and sorting options"
              defaultOpen
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes — <strong>small</strong>, <strong>default</strong>, and <strong>large</strong> —
          adapt the accordion to different layout contexts. All three types support all three sizes.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Small">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt type="decorative" size="small" showIcon title="Small decorative accordion" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Default">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt type="decorative" size="default" showIcon title="Default decorative accordion" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Large">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt type="decorative" size="large" showIcon title="Large decorative accordion" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Toggle Icons ── */}
      <DocsTemplate.Section title="Toggle Icons">
        <DocsTemplate.BodyText>
          Choose between a <strong>chevron</strong> (up/down arrow) or <strong>plus/minus</strong>{' '}
          toggle icon. The toggle is rendered inside a small circular pill button.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Chevron (default)">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt type="numbered" openIcon="chevron" number="01" showNumber title="Chevron toggle icon" />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Plus / Minus">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <AccordionAlt type="numbered" openIcon="plus" number="01" showNumber title="Plus/minus toggle icon" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Width Behaviour ── */}
      <DocsTemplate.Section title="Width Behaviour">
        <DocsTemplate.BodyText>
          The <strong>Accordion (alt.)</strong> component maintains a <strong>fixed outer width</strong>{' '}
          between open and closed states. If the component is 400px wide when closed, it will remain
          exactly 400px wide when opened. This is enforced through <code>box-sizing: border-box</code>,{' '}
          <code>width: 100%</code>, and a strict rule that no property change on open/close may alter
          the outer dimensions.
        </DocsTemplate.BodyText>

        <DocsTemplate.BodyText>
          To visually emphasise the border on open states (decorative and numbered types), an{' '}
          <strong>inset box-shadow</strong> is used instead of increasing <code>border-width</code>.{' '}
          This preserves the outer width while giving the appearance of a thicker, coloured border.
          The token <code>--accordion-alt-border-width-open</code> controls the shadow spread that
          simulates the heavier border.
        </DocsTemplate.BodyText>

        <DocsTemplate.BodyText>
          The component is constrained between <code>--accordion-alt-min-width</code> (200px) and{' '}
          <code>--accordion-alt-max-width</code> (600px). These limits ensure the component never
          becomes too narrow to read or too wide for its intended layout context.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="AccordionAlt uses the following component-level tokens. All values reference global tokens."
        tokens={[
          { name: '--accordion-alt-bg', description: 'Panel background colour (white)' },
          { name: '--accordion-alt-bg-open-decorative', description: 'Sky-blue gradient background for open decorative type' },
          { name: '--accordion-alt-border-radius', description: 'Corner radius (8px)' },
          { name: '--accordion-alt-border-width', description: 'Default border thickness (1px)' },
          { name: '--accordion-alt-border-width-open', description: 'Inset box-shadow spread for open state — simulates a thicker border without changing outer width (2px)' },
          { name: '--accordion-alt-border-color-decorative', description: 'Border colour for decorative type (sky-blue-200)' },
          { name: '--accordion-alt-border-color-decorative-open', description: 'Border colour for open decorative type (sky-blue)' },
          { name: '--accordion-alt-border-color-numbered', description: 'Border colour for numbered type (gray-200)' },
          { name: '--accordion-alt-border-color-numbered-open', description: 'Border colour for open numbered type (sky-blue)' },
          { name: '--accordion-alt-border-color-label', description: 'Border colour for label type (gray-200)' },
          { name: '--accordion-alt-min-width', description: 'Minimum component width (200px)' },
          { name: '--accordion-alt-max-width', description: 'Maximum component width (600px)' },
          { name: '--accordion-alt-padding-default', description: 'Inner padding — default size (16px)' },
          { name: '--accordion-alt-padding-small', description: 'Inner padding — small size (12px)' },
          { name: '--accordion-alt-padding-large', description: 'Inner padding — large size (20px)' },
          { name: '--accordion-alt-toggle-size-default', description: 'Toggle button size — default (24px)' },
          { name: '--accordion-alt-toggle-bg', description: 'Toggle button background (gray-50)' },
          { name: '--accordion-alt-toggle-border-color', description: 'Toggle button border colour (gray-200)' },
          { name: '--accordion-alt-icon-badge-size', description: 'Icon badge size for decorative type (28px)' },
          { name: '--accordion-alt-number-color', description: 'Number prefix colour (sky-blue)' },
          { name: '--accordion-alt-title-font-family', description: 'Title font family (F37 Ginger Pro)' },
          { name: '--accordion-alt-title-font-size-default', description: 'Title font size — default (18px)' },
          { name: '--accordion-alt-body-font-family', description: 'Body text font family (Calibri)' },
          { name: '--accordion-alt-body-color', description: 'Body text colour (gray-800)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>{`import { AccordionAlt } from './AccordionAlt';

// Decorative accordion with icon badge
<AccordionAlt
  type="decorative"
  size="default"
  openIcon="chevron"
  title="Discover what's new"
  body="Detailed content goes here..."
  showIcon
/>

// Numbered accordion for step-by-step flows
<AccordionAlt
  type="numbered"
  size="default"
  number="01"
  showNumber
  title="Define your requirements"
  body="Step details go here..."
/>

// Label accordion for tagged categories
<AccordionAlt
  type="label"
  size="default"
  label="Category"
  title="Filtering and sorting options"
  body="Category content goes here..."
/>`}</DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Decorative Intent">
          Use these alternate accordions when visual expression matters — hero sections, landing
          pages, and marketing content. For utility-focused disclosure, prefer the standard Accordion.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Structured Numbering">
          The numbered type implies sequence. Use it for step-by-step guides, processes, or ordered
          lists where progression matters. Keep numbers consistent and sequential.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Meaningful Labels">
          Label badges should categorise content at a glance. Keep labels short (1–2 words) and
          consistent across a set of accordions to maintain scannability.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: <AccordionAlt type="numbered" size="small" number="01" showNumber title="Step-by-step instructions" />,
          label: 'Sequential content',
          description: 'Use numbered accordions for ordered processes, steps, or guides where sequence matters.',
        }}
        dontItem={{
          icon: <AccordionAlt type="decorative" size="small" showIcon={false} title="Click here" />,
          label: 'Missing context',
          description: "Don't omit visual indicators (icons, numbers, labels) when the accordion type calls for them. They provide essential context.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default AccordionAltDocs;
