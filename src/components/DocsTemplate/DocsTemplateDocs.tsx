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

      {/* -- Sub-components -- */}
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
          { name: 'DocsTemplate.Anatomy', description: 'Component anatomy diagram with static annotated image and parts table' },
          { name: 'DocsTemplate.Footer', description: 'Separator line + copyright text' },
        ]}
      />

      {/* -- Using the Component -- */}
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

      {/* -- Anatomy Example -- */}
      <DocsTemplate.Section
        title="Component Anatomy"
        subtitle="Use DocsTemplate.Anatomy to document the numbered parts of a component, the design tokens that control each element, and how they relate."
      />

      <DocsTemplate.BodyText>
        The <strong>Anatomy</strong> sub-component displays a static annotated diagram (exported
        from Figma as an SVG or image) with numbered callouts and connector lines baked in, followed
        by a structured parts table. Each part lists its name, associated design token(s), and a
        short description. Use it as the first section after the introductory text in every
        component&rsquo;s documentation page.
      </DocsTemplate.BodyText>

      <DocsTemplate.Anatomy
        preview={
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fbf096656a4e94f0ab4dee13de9549353"
            alt="Example component anatomy diagram with numbered callouts"
            style={{ width: '100%', height: 'auto' }}
          />
        }
        parts={[
          {
            id: 1,
            name: 'Close Icon',
            token: 'filled/icons (action category)\n--alert-close-icon-{size}\n--alert-icon-opacity',
            description: 'Optional dismiss action icon (16\u00D716). Toggle with showTrailingIcon prop.',
          },
          {
            id: 2,
            name: 'Title',
            token: '--alert-font-family\n--alert-title-size-{size}\n--alert-title-weight\n--alert-title-{colour}',
            description: 'Primary message text (283\u00D720). Uses F37 Ginger (Regular) at 14px / 18px line-height.',
          },
          {
            id: 3,
            name: 'Leading Icon',
            token: 'filled/icons (display category)\n--alert-leading-icon-{size}\n--alert-icon-opacity',
            description: 'Context-sensitive SVG icon (22\u00D722) indicating the alert type. Rendered at 50% opacity.',
          },
        ]}
      />

      <DocsTemplate.Subsection title="Props" />

      <DocsTemplate.TokenTable
        title="Anatomy Props"
        description="The Anatomy component accepts the following props:"
        tokens={[
          { name: 'preview', description: 'React node \u2014 a static annotated image (SVG or PNG exported from Figma) showing the component with numbered callouts' },
          { name: 'parts', description: 'Array of AnatomyPart objects (id, name, token, description)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="AnatomyPart shape"
        description="Each item in the parts array has the following fields:"
        tokens={[
          { name: 'id', description: 'number \u2014 the callout number matching the diagram' },
          { name: 'name', description: 'string \u2014 short element name (e.g. \u201CLeading Icon\u201D, \u201CTitle\u201D)' },
          { name: 'token', description: 'string \u2014 design token name(s) or component reference. Use \\n for multi-line' },
          { name: 'description', description: 'string \u2014 what this element does and how it behaves' },
        ]}
      />

      <DocsTemplate.Subsection title="Usage" />

      <DocsTemplate.CodeBlock>
        {`<DocsTemplate.Anatomy
  preview={
    <img
      src="/path/to/component-anatomy.svg"
      alt="Component anatomy diagram"
      style={{ width: '100%', height: 'auto' }}
    />
  }
  parts={[
    {
      id: 1,
      name: 'Close Icon',
      token: '--component-close-icon-size\\n--component-icon-opacity',
      description: 'Optional dismiss action icon.',
    },
    {
      id: 2,
      name: 'Title',
      token: '--component-font-family\\n--component-font-size',
      description: 'Primary heading text.',
    },
  ]}
/>`}
      </DocsTemplate.CodeBlock>

      {/* -- Design Tokens Used -- */}
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

      {/* -- Reference -- */}
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
