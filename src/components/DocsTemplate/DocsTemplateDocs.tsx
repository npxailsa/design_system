import React from 'react';
import { DocsTemplate } from './DocsTemplate';

export const DocsTemplateDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="DocsTemplate"
        subtitle="A reusable documentation page template system for the NPX Design System"
      />

      <DocsTemplate.BodyText>
        Use DocsTemplate to create consistent, branded documentation pages for
        components, tokens, and guidelines. The root wrapper provides the page
        layout (white background, centered 944px column), and each sub-component
        handles a specific documentation pattern.
      </DocsTemplate.BodyText>

      {/* ── Sub-components ── */}
      <DocsTemplate.TokenTable
        title="Sub-components"
        description="Each sub-component handles a specific documentation pattern:"
        tokens={[
          { name: 'DocsTemplate.Header', description: 'NPX logo + page title + subtitle' },
          { name: 'DocsTemplate.Section', description: 'H1-level section with title, optional subtitle, and children' },
          { name: 'DocsTemplate.Subsection', description: 'H4-level subsection with title and children' },
          { name: 'DocsTemplate.BodyText', description: 'Styled paragraph text (default or small size)' },
          { name: 'DocsTemplate.TokenTable', description: 'Blue-bordered card showing design token name/description rows' },
          { name: 'DocsTemplate.Principles', description: 'Container for PrincipleCard items' },
          { name: 'DocsTemplate.PrincipleCard', description: 'Numbered principle with title and body text' },
          { name: 'DocsTemplate.CodeBlock', description: 'Gray background code snippet block' },
          { name: 'DocsTemplate.DosDonts', description: 'Side-by-side Do/Don\u2019t comparison cards' },
          { name: 'DocsTemplate.BulletList', description: 'Unordered or ordered list with optional link styling' },
          { name: 'DocsTemplate.RelatedLinks', description: 'Section with external reference links' },
          { name: 'DocsTemplate.IconGallery', description: 'Grid of icons with labels' },
          { name: 'DocsTemplate.SizeDemo', description: 'Rows demonstrating icon/component sizes' },
          { name: 'DocsTemplate.Anatomy', description: 'Component anatomy diagram with numbered pins, preview panel, and parts table' },
          { name: 'DocsTemplate.Footer', description: 'Separator line + copyright text' },
        ]}
      />

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="Import DocsTemplate and compose your documentation page using sub-components."
      />

      <DocsTemplate.CodeBlock>
        {`import { DocsTemplate } from './components/DocsTemplate';

const MyDocsPage = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Component Name"
      subtitle="Short description of the component"
    />

    <DocsTemplate.BodyText>
      Introductory paragraph about the component.
    </DocsTemplate.BodyText>

    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="Tokens used by this component:"
      tokens={[
        { name: '--example-color', description: 'Primary colour' },
        { name: '--example-size', description: 'Default size' },
      ]}
    />

    <DocsTemplate.Section title="Guidelines">
      <DocsTemplate.BodyText>
        Guideline content goes here.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);`}
      </DocsTemplate.CodeBlock>

      {/* ── Anatomy Example ── */}
      <DocsTemplate.Section
        title="Component Anatomy"
        subtitle="Use DocsTemplate.Anatomy to document the numbered parts of a component, the design tokens that control each element, and how they relate."
      />

      <DocsTemplate.BodyText>
        The <strong>Anatomy</strong> sub-component renders a live preview of a component with
        numbered annotation pins, and a structured parts table below it. Each part lists its name,
        associated design token(s), and a short description. Use it as the first section after the
        introductory text in every component’s documentation page.
      </DocsTemplate.BodyText>

      <DocsTemplate.Anatomy
        preview={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontFamily: 'var(--font-family-primary)',
              fontSize: '14px',
              background: 'white',
              width: '100%',
              maxWidth: '420px',
            }}
          >
            <span style={{ opacity: 0.5 }}>\u25CF</span>
            <span>Example component preview</span>
            <span style={{ marginLeft: 'auto', opacity: 0.5 }}>\u2715</span>
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Leading Element',
            token: '--component-icon-size\n--component-icon-color',
            description: 'Optional icon or visual element positioned at the start of the component.',
            pin: { top: '50%', left: '6%' },
          },
          {
            id: 2,
            name: 'Content Area',
            token: '--component-font-family\n--component-font-size\n--component-text-color',
            description: 'The primary content / text area of the component. This is the main interactive or informational region.',
            pin: { top: '50%', left: '52%' },
          },
          {
            id: 3,
            name: 'Trailing Action',
            token: '--component-action-size\n--component-action-opacity',
            description: 'Optional dismiss or action control at the end of the component.',
            pin: { top: '50%', left: '95%' },
          },
        ]}
      />

      <DocsTemplate.Subsection title="Props" />

      <DocsTemplate.TokenTable
        title="Anatomy Props"
        description="The Anatomy component accepts the following props:"
        tokens={[
          { name: 'preview', description: 'React node — the rendered component to annotate inside the diagram' },
          { name: 'parts', description: 'Array of AnatomyPart objects (id, name, token, description, optional pin position)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="AnatomyPart shape"
        description="Each item in the parts array has the following fields:"
        tokens={[
          { name: 'id', description: 'number — the numbered badge shown on the pin and in the table' },
          { name: 'name', description: 'string — short element name (e.g. \u201CLeading Icon\u201D, \u201CTitle\u201D)' },
          { name: 'token', description: 'string — design token name(s) or component reference. Use \\n for multi-line' },
          { name: 'description', description: 'string — what this element does and how it behaves' },
          { name: 'pin', description: '{ top: string, left: string } — optional percentage position for the overlay pin on the preview' },
        ]}
      />

      <DocsTemplate.Subsection title="Usage" />

      <DocsTemplate.CodeBlock>
        {`<DocsTemplate.Anatomy
  preview={<MyComponent size="default" />}
  parts={[
    {
      id: 1,
      name: 'Leading Icon',
      token: '--component-icon-size\\n--component-icon-color',
      description: 'Optional icon at the start of the component.',
      pin: { top: '50%', left: '5%' },
    },
    {
      id: 2,
      name: 'Title',
      token: '--component-font-family\\n--component-font-size',
      description: 'Primary heading text.',
      pin: { top: '50%', left: '50%' },
    },
  ]}
/>`}
      </DocsTemplate.CodeBlock>

      {/* ── Design Tokens Used ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens Used"
        description="The template relies on existing design system tokens. Key tokens include:"
        tokens={[
          { name: '--font-family-primary', description: 'Typography \u2014 F37 Ginger Pro' },
          { name: '--font-family-secondary', description: 'Typography \u2014 Calibri' },
          { name: '--global-color-base-black', description: 'Colour \u2014 base black text' },
          { name: '--color-primary-blue-blue', description: 'Colour \u2014 primary brand blue' },
          { name: '--color-primary-blue-blue-50', description: 'Background \u2014 principle cards, token tables' },
          { name: '--color-additional-gray-light-light-gray-default', description: 'Background \u2014 code blocks' },
          { name: '--global-spacing-sizing-*', description: 'Spacing \u2014 all spacing scale values' },
          { name: '--global-spacing-radius-12px', description: 'Spacing \u2014 card border radius' },
        ]}
      />

      {/* ── Reference ── */}
      <DocsTemplate.Section title="Reference implementation">
        <DocsTemplate.BodyText>
          See the <strong>Iconography</strong> story under{' '}
          <strong>Foundation/DocsTemplate</strong> for a complete example of all
          sub-components working together to produce a full documentation page.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
