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
          Use <strong>DocsTemplate.Anatomy</strong> to create annotated diagrams that map numbered
          pins on a live component preview to their design tokens and descriptions.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>
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
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ opacity: 0.5, flexShrink: 0 }}>
              <circle cx="11" cy="11" r="9" stroke="#3A3282" strokeWidth="2" />
              <circle cx="11" cy="11" r="5" stroke="#3A3282" strokeWidth="2" />
              <circle cx="11" cy="11" r="1.5" fill="#3A3282" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
              <span style={{ color: '#3A3282', fontWeight: 400 }}>This is a sample component</span>
              <span style={{ color: '#374151', fontWeight: 300, fontSize: '13px' }}>
                Supporting description text
              </span>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.5, flexShrink: 0 }}>
              <path d="M12.67 4.27L11.73 3.33L8 7.06L4.27 3.33L3.33 4.27L7.06 8L3.33 11.73L4.27 12.67L8 8.94L11.73 12.67L12.67 11.73L8.94 8L12.67 4.27Z" fill="#3A3282" />
            </svg>
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Leading Icon',
            token: 'filled/icons (display)\n--component-leading-icon-size\n--component-icon-opacity',
            description: 'Context-sensitive icon indicating the component type or state. Rendered at 50% opacity.',
            pin: { top: '50%', left: '5%' },
          },
          {
            id: 2,
            name: 'Title',
            token: '--component-font-family\n--component-title-size\n--component-title-color',
            description: 'Primary text using F37 Ginger Pro Regular. Colour changes per variant.',
            pin: { top: '30%', left: '50%' },
          },
          {
            id: 3,
            name: 'Description',
            token: '--component-font-family\n--component-desc-size\n--component-desc-color',
            description: 'Supporting subtext at 300 weight. Always gray-700.',
            pin: { top: '70%', left: '50%' },
          },
          {
            id: 4,
            name: 'Close Icon',
            token: 'filled/icons (action)\n--component-close-icon-size\n--component-icon-opacity',
            description: 'Optional dismiss action with 50% opacity. Toggle with showTrailingIcon prop.',
            pin: { top: '50%', left: '95%' },
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
