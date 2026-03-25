import type { Meta, StoryObj } from '@storybook/react-vite';
import Placeholder, { PlaceholderProps } from './Placeholder';
import { PlaceholderDocs } from './PlaceholderDocs';
import FaceIcon from '@mui/icons-material/Face';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react';

const meta: Meta<typeof Placeholder> = {
  title: 'Foundation/Placeholder',
  component: Placeholder,
  parameters: {
    docs: {
      page: () => <PlaceholderDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small', 'x-small'],
    },
    align: {
      control: 'select',
      options: ['left', 'centre', 'right'],
    },
    type: {
      control: 'select',
      options: ['default', 'italic', 'tags-selected', 'number'],
    },
    text: {
      control: 'text',
    },
    showLeadingIcon: {
      control: 'boolean',
    },
    showTrailingIcon: {
      control: 'boolean',
    },
    showTrailingIcon2: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--global-spacing-sizing-20px)' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- Helper for NumberCounter Story ---
const InteractiveNumberCounter = (args: Partial<PlaceholderProps>) => {
  const [value, setValue] = useState(0);
  return (
    <Placeholder
      {...args}
      type="number"
      value={value}
      onIncrement={() => setValue(v => v + 1)}
      onDecrement={() => setValue(v => v - 1)}
    />
  );
};

/**
 * Full branded documentation page for the Placeholder component.
 */
export const Documentation: Story = {
  render: () => <PlaceholderDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

// --- Basic Stories ---

export const Default: Story = {
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <Placeholder size="large" text="Large Placeholder" />
      <Placeholder size="default" text="Default Placeholder" />
      <Placeholder size="small" text="Small Placeholder" />
      <Placeholder size="x-small" text="X-Small Placeholder" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <Placeholder type="default" text="Default Type" />
      <Placeholder type="italic" text="Italic Type" showTrailingIcon2={true} />
      <Placeholder 
        type="tags-selected" 
        tags={[{ label: 'Tag 1' }, { label: 'Tag 2', leadingIcon: FaceIcon }]} 
      />
      <InteractiveNumberCounter text="Number Type" />
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', width: '400px', border: 'var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)', padding: 'var(--global-spacing-sizing-20px)' }}>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Left</span>
        <Placeholder align="left" text="Left Aligned" />
      </div>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Centre</span>
        <Placeholder align="centre" text="Centre Aligned" />
      </div>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Right</span>
        <Placeholder align="right" text="Right Aligned" />
      </div>
    </div>
  ),
};

export const TagsSelected: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <Placeholder 
        size="large"
        type="tags-selected" 
        tags={[{ label: 'React' }, { label: 'Vue', leadingIcon: FaceIcon }]} 
      />
      <Placeholder 
        size="default"
        type="tags-selected" 
        tags={[{ label: 'Design' }, { label: 'System', leadingIcon: MailIcon }]} 
      />
      <Placeholder 
        size="small"
        type="tags-selected" 
        tags={[{ label: 'UI' }, { label: 'UX' }]} 
      />
    </div>
  ),
};

export const NumberCounter: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <InteractiveNumberCounter text="Counter (Large)" size="large" />
      <InteractiveNumberCounter text="Counter (Default)" size="default" />
      <InteractiveNumberCounter text="Counter (Small)" size="small" />
      <InteractiveNumberCounter text="Counter (X-Small)" size="x-small" />
    </div>
  ),
};

// --- Matrix Story ---

const TypeMatrix = ({ type }: { type: 'default' | 'italic' | 'tags-selected' | 'number' }) => {
  const sizes = ['large', 'default', 'small', 'x-small'] as const;
  const alignments = ['left', 'centre', 'right'] as const;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-20px)' }}>
        <h2 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 'var(--global-spacing-sizing-1px)' }}>
          {type} type variants
        </h2>
        <div style={{ height: 'var(--global-spacing-stroke-2px)', flexGrow: 1, backgroundColor: 'var(--global-color-neutral-gray-200)' }} />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '800px' }}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Size</th>
              {alignments.map((align) => (
                <th key={align} style={headerCellStyle}>{align}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => {
              if (size === 'x-small' && type === 'tags-selected') return null; // invalid variant
              
              return (
                <tr key={size} style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)' }}>
                  <td style={{ ...cellStyle, fontWeight: 'var(--global-type-weight-bold)', color: 'var(--global-color-neutral-gray-600)', width: '100px' }}>
                    {size}
                  </td>
                  {alignments.map((align) => (
                    <td key={align} style={cellStyle}>
                      {type === 'number' ? (
                        <Placeholder size={size} align={align} type={type} text="Text" value={3} />
                      ) : type === 'tags-selected' ? (
                        <Placeholder size={size} align={align} type={type} tags={[{ label: 'Tag 1' }, { label: 'Tag 2' }]} />
                      ) : (
                        <Placeholder size={size} align={align} type={type} text="Placeholder" showTrailingIcon2={type === 'italic'} />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const headerCellStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: 'var(--global-spacing-sizing-12px)',
  color: 'var(--global-color-neutral-gray-400)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  textTransform: 'uppercase',
  borderBottom: 'var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)',
};

const cellStyle: React.CSSProperties = {
  padding: 'var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)',
};

export const AllVariants: Story = {
  name: 'Full Matrix (45 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--global-spacing-sizing-20px)' }}>
        <h1 style={{ margin: 0 }}>Placeholder Component Variant Matrix</h1>
        <p style={{ color: 'var(--global-color-neutral-gray-600)' }}>4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)</p>
      </div>
      <TypeMatrix type="default" />
      <TypeMatrix type="italic" />
      <TypeMatrix type="tags-selected" />
      <TypeMatrix type="number" />
    </div>
  ),
};
