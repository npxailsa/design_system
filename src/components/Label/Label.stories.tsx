import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Label component with multiple size, weight, and alignment variants. Supports optional leading/trailing icons and dropdown indicator.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text content',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Label' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'large', 'x-small', '2-x-small'],
      description: 'Size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    weight: {
      control: 'select',
      options: ['bold', 'medium', 'light', 'thin'],
      description: 'Font weight',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bold' },
      },
    },
    align: {
      control: 'radio',
      options: ['left', 'centre', 'right'],
      description: 'Text alignment',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dropdown: {
      control: 'boolean',
      description: 'Show dropdown indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stack: {
      control: 'select',
      options: ['horizontal'],
      description: 'Layout direction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default label with common configuration
 */
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    leadingIcon: false,
    trailingIcon: false,
    dropdown: false,
  },
};

/**
 * Showcases all size variants side-by-side
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>2X Small</p>
        <Label size="2-x-small">2X Small Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>X Small</p>
        <Label size="x-small">X Small Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Small</p>
        <Label size="small">Small Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Default</p>
        <Label size="default">Default Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Large</p>
        <Label size="large">Large Label</Label>
      </div>
    </div>
  ),
};

/**
 * Showcases all font weight variants
 */
export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Thin (100)</p>
        <Label weight="thin">Thin Weight Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Light (300)</p>
        <Label weight="light">Light Weight Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Medium (500)</p>
        <Label weight="medium">Medium Weight Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Bold (700)</p>
        <Label weight="bold">Bold Weight Label</Label>
      </div>
    </div>
  ),
};

/**
 * Showcases all alignment variants
 */
export const AllAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Left Aligned</p>
        <Label align="left" style={{ width: '200px', border: '1px solid #eee', padding: '0.5rem' }}>
          Left Label
        </Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Center Aligned</p>
        <Label align="centre" style={{ width: '200px', border: '1px solid #eee', padding: '0.5rem' }}>
          Center Label
        </Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Right Aligned</p>
        <Label align="right" style={{ width: '200px', border: '1px solid #eee', padding: '0.5rem' }}>
          Right Label
        </Label>
      </div>
    </div>
  ),
};

/**
 * Label with leading and/or trailing icons
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Leading Icon</p>
        <Label leadingIcon>Label with Leading Icon</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Trailing Icon</p>
        <Label trailingIcon>Label with Trailing Icon</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Both Icons</p>
        <Label leadingIcon trailingIcon>
          Label with Both Icons
        </Label>
      </div>
    </div>
  ),
};

/**
 * Label with dropdown indicator
 */
export const WithDropdown: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Dropdown Indicator</p>
        <Label dropdown>Dropdown Label</Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>
          Leading Icon with Dropdown
        </p>
        <Label leadingIcon dropdown>
          Select Option
        </Label>
      </div>
      <div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>
          Both Icons with Dropdown
        </p>
        <Label leadingIcon trailingIcon dropdown>
          Complex Label
        </Label>
      </div>
    </div>
  ),
};

/**
 * Playground story for interactive testing of all props
 */
export const Playground: Story = {
  args: {
    children: 'Interactive Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    leadingIcon: false,
    trailingIcon: false,
    dropdown: false,
    stack: 'horizontal',
  },
};

/**
 * Small label variant
 */
export const Small: Story = {
  args: {
    children: 'Small Label',
    size: 'small',
    weight: 'medium',
  },
};

/**
 * Large label variant
 */
export const Large: Story = {
  args: {
    children: 'Large Label',
    size: 'large',
    weight: 'bold',
  },
};
