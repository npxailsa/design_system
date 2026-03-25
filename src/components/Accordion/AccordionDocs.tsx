import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Accordion } from './Accordion';

export const AccordionDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Accordion"
        subtitle="Collapsible content panels that progressively disclose information, reducing visual complexity while keeping content accessible on demand"
      />

      <DocsTemplate.BodyText>
        The <strong>Accordion</strong> component allows users to expand and collapse sections of
        content. It supports two structural types — <em>simple</em> (bordered) and{' '}
        <em>no-stroke</em> (borderless) — three sizes, and two toggle icon styles.
        Optional leading icons and status indicators provide additional context at a glance.
      </DocsTemplate.BodyText>

      {/* ── Types ── */}
      <DocsTemplate.Section title="Types">
        <DocsTemplate.BodyText>
          The <strong>simple</strong> type renders with a visible border and supports a status icon
          and supporting description text. The <strong>no-stroke</strong> type is borderless and
          suited for use inside cards, panels, or other contained surfaces.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Simple (Bordered)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion
              type="simple"
              size="default"
              openIcon="chevron"
              showStatusIcon
              showLeadingIcon
              showDescription
            />
            <Accordion
              type="simple"
              size="default"
              openIcon="chevron"
              showStatusIcon
              showLeadingIcon
              showDescription
              defaultOpen
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="No-Stroke (Borderless)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion
              type="no-stroke"
              size="default"
              openIcon="chevron"
              showLeadingIcon={false}
              showStatusIcon={false}
            />
            <Accordion
              type="no-stroke"
              size="default"
              openIcon="chevron"
              showLeadingIcon={false}
              showStatusIcon={false}
              defaultOpen
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Toggle Icon styles ── */}
      <DocsTemplate.Section title="Toggle Icons">
        <DocsTemplate.BodyText>
          Choose between a <strong>chevron</strong> (up/down arrow) or <strong>plus/minus</strong>{' '}
          toggle icon. The chevron is the default and works well for most contexts. The plus/minus
          style is better suited for FAQ-style or no-stroke accordions.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Chevron">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" openIcon="chevron" showStatusIcon showLeadingIcon showDescription />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Plus / Minus">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes adapt the accordion to different contexts — from compact data tables to
          prominent page sections.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Small">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" size="small" showStatusIcon showLeadingIcon showDescription />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Default">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" size="default" showStatusIcon showLeadingIcon showDescription />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Large">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" size="large" showStatusIcon showLeadingIcon showDescription />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Optional Elements ── */}
      <DocsTemplate.Section title="Optional Elements">
        <DocsTemplate.BodyText>
          The leading icon, status icon, and supporting description text are all independently
          toggleable. Mix and match based on the context and content needs.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="With Status Icon + Leading Icon + Description">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" showStatusIcon showLeadingIcon showDescription />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Status Icon Only">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" showStatusIcon showLeadingIcon={false} showDescription={false} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Leading Icon Only">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" showStatusIcon={false} showLeadingIcon showDescription={false} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Title Only">
          <div style={{ padding: 'var(--global-spacing-sizing-16px) 0' }}>
            <Accordion type="simple" showStatusIcon={false} showLeadingIcon={false} showDescription={false} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="Accordion uses the following component-level tokens. All values reference global tokens."
        tokens={[
          { name: '--accordion-bg', description: 'Panel background colour (white)' },
          { name: '--accordion-border-radius', description: 'Corner radius of the bordered variant (8px)' },
          { name: '--accordion-border-width', description: 'Border thickness for simple type (1px)' },
          { name: '--accordion-border-color', description: 'Border colour for simple type (gray-200)' },
          { name: '--accordion-border-color-none', description: 'Border colour for no-stroke type (transparent)' },
          { name: '--accordion-min-width', description: 'Minimum panel width (360px)' },
          { name: '--accordion-max-width', description: 'Maximum panel width (1280px)' },
          { name: '--accordion-min-height', description: 'Minimum collapsed height (70px)' },
          { name: '--accordion-gap', description: 'Gap between icon columns and content (12px)' },
          { name: '--accordion-padding-default', description: 'Inner padding for default size (20px 24px 20px 20px)' },
          { name: '--accordion-padding-large', description: 'Inner padding for large size (24px 28px 24px 24px)' },
          { name: '--accordion-padding-small', description: 'Inner padding for small size (14px 20px 14px 16px)' },
          { name: '--accordion-padding-no-stroke', description: 'Inner padding for no-stroke type (20px 24px)' },
          { name: '--accordion-title-font-family', description: 'Font family for the simple-type title (F37 Ginger Pro)' },
          { name: '--accordion-title-font-size-default', description: 'Title font size — default (19px)' },
          { name: '--accordion-title-font-size-large', description: 'Title font size — large (22px)' },
          { name: '--accordion-title-font-size-small', description: 'Title font size — small (16px)' },
          { name: '--accordion-title-color', description: 'Title text colour (base-black)' },
          { name: '--accordion-title-color-no-stroke-closed', description: 'Title colour for collapsed no-stroke accordion (#191e3c)' },
          { name: '--accordion-desc-color', description: 'Supporting description text colour (secondary-blue-gray)' },
          { name: '--accordion-desc-font-family', description: 'Font family for description and body text (Calibri)' },
          { name: '--accordion-body-color', description: 'Expanded body text colour (gray-900)' },
          { name: '--accordion-icon-size-default', description: 'Toggle icon size — default (28px)' },
          { name: '--accordion-icon-size-large', description: 'Toggle icon size — large (32px)' },
          { name: '--accordion-icon-size-small', description: 'Toggle icon size — small (24px)' },
          { name: '--accordion-content-gap-default', description: 'Gap between heading and body text when open (16px)' },
          { name: '--accordion-transition-duration', description: 'Animation duration for expand/collapse (220ms)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>{`import { Accordion } from './Accordion';

// Simple accordion (bordered)
<Accordion
  type="simple"
  size="default"
  openIcon="chevron"
  title="This is a section title..."
  description="Supporting text goes here"
  body="Expanded body content goes here..."
  showStatusIcon
  showLeadingIcon
  showDescription
/>

// No-stroke (borderless) accordion with plus icon
<Accordion
  type="no-stroke"
  size="default"
  openIcon="plus"
  title="What is this feature about?"
  body="Detailed answer goes here..."
  showStatusIcon={false}
  showLeadingIcon={false}
/>

// Pre-expanded accordion
<Accordion
  type="simple"
  defaultOpen
  title="Expanded by default"
/>`}</DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Progressive Disclosure">
          Show only what is necessary. Use accordions to hide secondary or supporting content
          that users can reveal on demand, reducing initial cognitive load.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Meaningful Headings">
          Write accordion titles as clear questions or concise topic labels. Titles must
          communicate enough context so users can decide whether to expand the section.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Consistent Icon Usage">
          Use status icons to indicate the category or completion state of a section. Keep icon
          usage consistent across all accordions in the same view.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Accordion type="simple" size="small" showStatusIcon showLeadingIcon={false} showDescription={false} title="Section title" />,
          label: 'Descriptive titles',
          description: 'Write clear, concise titles that describe the hidden content so users can make informed decisions before expanding.',
        }}
        dontItem={{
          icon: <Accordion type="simple" size="small" showStatusIcon={false} showLeadingIcon={false} showDescription={false} title="Click here..." />,
          label: 'Vague labels',
          description: "Don't use vague labels like \"Click here\" or \"Read more\". Titles should stand alone and communicate the section's purpose.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default AccordionDocs;
