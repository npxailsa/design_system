import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';

export const PlaceholderDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Placeholder"
        subtitle="A form-field placeholder UI element representing the visual content inside an empty or partially-filled input"
      />

      <DocsTemplate.BodyText>
        The Placeholder component is a form-field placeholder UI element &mdash; it
        represents the visual content inside an empty or partially-filled input. It
        supports 4 sizes, 3 alignments, and 4 types, resulting in 45 possible
        variants.
      </DocsTemplate.BodyText>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="We use the following tokens to render our placeholders:"
        tokens={[
          { name: '--placeholder-text-color', description: 'Primary text and icon color' },
          { name: '--placeholder-icon-opacity', description: 'Default opacity for icons' },
          { name: '--placeholder-icon-opacity-alt', description: 'Alternative opacity for large size leading icons' },
          { name: '--placeholder-counter-opacity', description: 'Opacity for minus-box icon in counter' },
          { name: '--placeholder-font-default', description: 'Font family for large, default, and small sizes' },
          { name: '--placeholder-font-xs', description: 'Font family for x-small size' },
          { name: '--placeholder-counter-color', description: 'Interaction color for counter controls' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these common design principles by using placeholders in a cohesive, useful, and legible way."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Content clarity">
          Placeholders should provide clear hints or examples of what input is
          expected.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Legibility">
          Ensure placeholder text is legible but clearly distinct from actual user
          input, typically achieved through reduced opacity or alternative colors.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Alignment usage">
          Choose alignment that matches the context of the surrounding form or input
          field.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Type selection">
          Select the appropriate type (default, italic, tags-selected, or number)
          based on the specific interaction pattern required by the input.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="Import the Placeholder component and pass your desired props."
      />

      <DocsTemplate.CodeBlock>
        {`import { Placeholder } from './Placeholder';
import FaceIcon from '@mui/icons-material/Face';

// Default type
const MyComponent = () => (
  <Placeholder size="default" type="default" text="Enter value..." />
);

// Tags selected type
const TagsComponent = () => (
  <Placeholder
    size="default"
    type="tags-selected"
    tags={[{ label: 'Tag 1' }, { label: 'Tag 2', leadingIcon: FaceIcon }]}
  />
);

// Number type
const CounterComponent = () => (
  <Placeholder
    size="default"
    type="number"
    text="Count"
    value={3}
    onIncrement={() => {}}
    onDecrement={() => {}}
  />
);`}
      </DocsTemplate.CodeBlock>

      {/* ── Visual Style ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Placeholders support different variants based on their type. Ensure appropriate context is provided for the user."
      />

      <DocsTemplate.Subsection title="Types" />

      <DocsTemplate.BodyText>
        The Placeholder component supports four types: <strong>default</strong>,{' '}
        <strong>italic</strong>, <strong>tags-selected</strong>, and{' '}
        <strong>number</strong>. Each type serves a different interaction pattern.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label)', opacity: 0.6 }}>Placeholder text...</span>,
          description:
            'Use systematic sizes and types for consistent form field patterns.',
        }}
        dontItem={{
          icon: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label)' }}>Placeholder text...</span>,
          description:
            'Overwrite internal component styles directly; use the token system. Avoid creating invalid combinations (like x-small tags-selected).',
        }}
      />

      {/* ── Size & Spacing ── */}
      <DocsTemplate.Section
        title="Size &amp; spacing"
        subtitle="The Placeholder component supports multiple sizes. Use the size prop to ensure consistent scaling."
      />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Large',
            sublabel: 'Use for prominent inputs',
            children: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-lg)', opacity: 0.6 }}>Placeholder</span>,
          },
          {
            label: 'Default',
            sublabel: 'Use in most cases',
            children: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label)', opacity: 0.6 }}>Placeholder</span>,
          },
          {
            label: 'Small',
            sublabel: 'Use sparingly',
            children: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', opacity: 0.6 }}>Placeholder</span>,
          },
          {
            label: 'X-Small',
            sublabel: 'Use rarely',
            children: <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', opacity: 0.6 }}>Placeholder</span>,
          },
        ]}
      />

      <DocsTemplate.BodyText>
        This component provides 45 possible variants: 4 sizes &times; 4 types
        &times; 3 alignments (minus 3 invalid x-small tags-selected combinations).
        See the interactive stories for a full variant matrix.
      </DocsTemplate.BodyText>

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          When proposing updates or new properties for the Placeholder component,
          consider the following:
        </DocsTemplate.BodyText>

        <DocsTemplate.BulletList
          ordered
          items={[
            'Does the proposed change align with existing form field patterns?',
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
