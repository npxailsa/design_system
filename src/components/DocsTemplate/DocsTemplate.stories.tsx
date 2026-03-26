import type { Meta, StoryObj } from '@storybook/react-vite';
import { DocsTemplate } from './DocsTemplate';
import { IconographyDocs } from './IconographyDocs';
import { DocsTemplateDocs } from './DocsTemplateDocs';
import { Icon } from '../Icon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const meta: Meta<typeof DocsTemplate> = {
  title: 'Foundation/DocsTemplate',
  component: DocsTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DocsTemplate>;

/**
 * Full branded documentation page for the DocsTemplate system.
 */
export const UsageGuide: Story = {
  render: () => <DocsTemplateDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

/**
 * The full Iconography documentation page — a complete reference
 * implementation of the DocsTemplate system.
 */
export const Iconography: Story = {
  render: () => <IconographyDocs />,
};

/**
 * Shows the basic page structure: Header, Section, BodyText, and Footer.
 */
export const BasicPageStructure: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Component Name"
        subtitle="A short description of the component and its purpose"
      />
      <DocsTemplate.BodyText>
        This is body text that provides additional context about the component.
        It uses the secondary font family (Calibri) at the large body size.
      </DocsTemplate.BodyText>
      <DocsTemplate.Section
        title="Section Title"
        subtitle="Optional subtitle that provides additional context."
      >
        <DocsTemplate.BodyText>
          Content within a section is indented and spaced consistently.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>
      <DocsTemplate.Footer />
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the TokenTable sub-component used to display design token
 * name/description pairs inside a styled blue card.
 */
export const TokenTableExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="We use the following tokens to style this component:"
        tokens={[
          { name: '--brand-primary', description: 'Primary brand colour' },
          { name: '--brand-secondary', description: 'Secondary brand colour' },
          { name: '--global-spacing-sizing-8px', description: 'Base spacing unit' },
        ]}
      />
    </DocsTemplate>
  ),
};

/**
 * Demonstrates PrincipleCards inside the Principles container.
 */
export const PrincipleCardsExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Consistency">
          Maintain visual and behavioural consistency across all components.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Accessibility">
          Ensure every component is usable by people of all abilities.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the CodeBlock sub-component for displaying code snippets.
 */
export const CodeBlockExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.CodeBlock>
        {`import { Button } from './components/Button';

const App = () => (
  <Button variant="primary" size="default">
    Click me
  </Button>
);`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the DosDonts sub-component with side-by-side
 * Do and Don't comparison cards.
 */
export const DosDontsExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />,
          label: 'Settings',
          description:
            'Use familiar symbols with clear associations.',
        }}
        dontItem={{
          icon: <Icon icon={BuildOutlinedIcon} size="x-large" />,
          label: 'Settings',
          description:
            "Don\u2019t use unfamiliar symbols that could be confused.",
        }}
      />
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the IconGallery sub-component for displaying a grid
 * of icons with labels.
 */
export const IconGalleryExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.IconGallery
        items={[
          { icon: <Icon icon={HomeOutlinedIcon} size="x-large" />, label: 'Home' },
          { icon: <Icon icon={SearchIcon} size="x-large" />, label: 'Search' },
          { icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />, label: 'Settings' },
          { icon: <Icon icon={FavoriteBorderIcon} size="x-large" />, label: 'Favorite' },
        ]}
      />
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the Anatomy sub-component for documenting
 * the numbered parts of a component with tokens and descriptions.
 */
export const ComponentAnatomyExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          Use <strong>DocsTemplate.Anatomy</strong> to document the numbered parts of a component.
          Pass a static annotated SVG or image (exported from Figma) as the <code>preview</code>,
          with numbered callouts and connector lines baked into the image. The <code>parts</code>{' '}
          array populates the detail table below the diagram, mapping each number to its element
          name, design tokens, and description.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>
      <DocsTemplate.Anatomy
        preview={
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fbf096656a4e94f0ab4dee13de9549353"
            alt="Example component anatomy diagram with numbered callouts"
            style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
          />
        }
        parts={[
          {
            id: 1,
            name: 'Leading Icon',
            token: 'filled/icons (display)\n--component-leading-icon-size\n--component-icon-opacity',
            description: 'Context-sensitive icon indicating the component type or state. Rendered at 50% opacity.',
          },
          {
            id: 2,
            name: 'Title',
            token: '--component-font-family\n--component-title-size\n--component-title-color',
            description: 'Primary text using F37 Ginger Pro Regular. Colour changes per variant.',
          },
          {
            id: 3,
            name: 'Description',
            token: '--component-font-family\n--component-desc-size\n--component-desc-color',
            description: 'Supporting subtext at 300 weight. Always gray-700.',
          },
          {
            id: 4,
            name: 'Close Icon',
            token: 'filled/icons (action)\n--component-close-icon-size\n--component-icon-opacity',
            description: 'Optional dismiss action with 50% opacity. Toggle with showTrailingIcon prop.',
          },
        ]}
      />
    </DocsTemplate>
  ),
};

/**
 * Demonstrates the SizeDemo sub-component for showing icon sizes.
 */
export const SizeDemoExample: Story = {
  render: () => (
    <DocsTemplate>
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Default (16px)',
            sublabel: 'use in most cases',
            children: <Icon icon={HomeOutlinedIcon} size="default" />,
          },
          {
            label: 'Small (14px)',
            sublabel: 'Use sparingly',
            children: <Icon icon={HomeOutlinedIcon} size="small" />,
          },
          {
            label: 'Large (18px)',
            sublabel: 'Use sparingly',
            children: <Icon icon={HomeOutlinedIcon} size="large" />,
          },
        ]}
      />
    </DocsTemplate>
  ),
};
