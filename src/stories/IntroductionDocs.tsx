import React from 'react';
import { DocsTemplate } from '../components/DocsTemplate/DocsTemplate';

export const IntroductionDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Design System"
        subtitle="Welcome to the official documentation for our Design System"
      />

      <DocsTemplate.BodyText>
        This system provides a unified set of components, tokens, and guidelines
        to help you build consistent and accessible user interfaces.
      </DocsTemplate.BodyText>

      {/* ── What is this? ── */}
      <DocsTemplate.Section
        title="What is this?"
        subtitle="This design system is built using React and Material UI, with custom tokens that define our brand's visual identity."
      />

      <DocsTemplate.BulletList
        items={[
          'Foundation — Fundamental building blocks (Colors, Typography, spacing)',
          'Components — Reusable UI elements built with accessibility and performance in mind',
          'Icon Gallery — A collection of over 50 MUI icons available in our system',
          'Patterns — Guidelines on how to combine components to solve common UI problems',
        ]}
      />

      {/* ── Getting Started ── */}
      <DocsTemplate.Section
        title="Getting started"
        subtitle="Everything you need to start using the design system."
      />

      <DocsTemplate.Subsection title="For Designers" />

      <DocsTemplate.BodyText>
        We use Figma to design all our components and patterns. If you're a
        designer, check out our Figma library to start designing with our
        components.
      </DocsTemplate.BodyText>

      <DocsTemplate.RelatedLinks
        links={[
          { label: 'Figma Library', href: 'https://figma.com' },
          { label: 'Design Guidelines', href: 'https://npxailsa.github.io/design_system' },
        ]}
      />

      <DocsTemplate.Subsection title="For Developers" />

      <DocsTemplate.BodyText>
        To start using the design system in your project, install the package and
        wrap your application with the ThemeProvider to apply global styles and
        the theme.
      </DocsTemplate.BodyText>

      <DocsTemplate.CodeBlock>
        {`npm install design-system`}
      </DocsTemplate.CodeBlock>

      <DocsTemplate.CodeBlock>
        {`import { ThemeProvider } from 'design-system';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}`}
      </DocsTemplate.CodeBlock>

      {/* ── Resources ── */}
      <DocsTemplate.Section
        title="Resources"
        subtitle="Helpful links and references."
      />

      <DocsTemplate.RelatedLinks
        links={[
          { label: 'GitHub Repository', href: 'https://github.com/npxailsa/design_system' },
          { label: 'Storybook Examples', href: 'https://main--69b1afa12d84753b425f1721.chromatic.com' },
        ]}
      />

      {/* ── Support ── */}
      <DocsTemplate.Section
        title="Support"
        subtitle="If you have questions or need help, please reach out to the design system team."
      />

      <DocsTemplate.BulletList
        items={[
          'GitHub Issues: Open a new issue at github.com/npxailsa/design_system/issues',
        ]}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
