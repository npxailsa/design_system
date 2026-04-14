import type { Meta, StoryObj } from '@storybook/react-vite';
import Label from './Label';
import { LabelDocs } from './LabelDocs';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

const meta: Meta<typeof Label> = {
  title: 'Foundation/Label',
  component: Label,
  parameters: {
    docs: {
      page: () => <LabelDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small', 'x-small', '2x-small'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'medium', 'light', 'thin'],
    },
    font: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    align: {
      control: 'select',
      options: ['left', 'centre', 'right'],
    },
    leadingIcon: {
      control: 'select',
      options: ['Person', 'Mail', 'Settings', 'None'],
      mapping: {
        Person: PersonIcon,
        Mail: MailIcon,
        Settings: SettingsIcon,
        None: null,
      },
    },
    showLeadingIcon: {
      control: 'boolean',
    },
    showTrailingIcon: {
      control: 'boolean',
    },
    dropdown: {
      control: 'boolean',
    },
    showSplit: {
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

/**
 * Full branded documentation page for the Label component.
 */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <LabelDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = {
  name: 'Playground',
  args: { children: 'Label text', size: 'default', weight: 'bold', align: 'left', dropdown: false },
};

/**
 * Helper component to render a matrix of variants for a specific weight
 */
const WeightMatrix = ({ weight }: { weight: 'bold' | 'medium' | 'light' | 'thin' }) => {
  const sizes = ['large', 'default', 'small', 'x-small', '2x-small'] as const;
  const alignments = ['left', 'centre', 'right'] as const;
  const dropdownStates = [false, true] as const;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-20px)' }}>
        <h2 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 'var(--global-spacing-sizing-1px)' }}>
          {weight} weight variants
        </h2>
        <div style={{ height: 'var(--global-spacing-stroke-2px)', flexGrow: 1, backgroundColor: 'var(--global-color-neutral-gray-200)' }} />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '1000px' }}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Size</th>
              {alignments.map((align) => (
                <React.Fragment key={align}>
                  <th style={headerCellStyle}>{align}</th>
                  <th style={headerCellStyle}>{align} + Dropdown</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => (
              <tr key={size} style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)' }}>
                <td style={{ ...cellStyle, fontWeight: 'var(--global-type-weight-bold)', color: 'var(--global-color-neutral-gray-600)', width: '100px' }}>
                  {size}
                </td>
                {alignments.map((align) => (
                  <React.Fragment key={align}>
                    <td style={cellStyle}>
                      <Label size={size} weight={weight} align={align} dropdown={false}>
                        Label
                      </Label>
                    </td>
                    <td style={cellStyle}>
                      <Label size={size} weight={weight} align={align} dropdown={true}>
                        Label
                      </Label>
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
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

// --- Basic Stories ---

export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
      <Label size="small">Small Label</Label>
      <Label size="x-small">X-Small Label</Label>
      <Label size="2x-small">2X-Small Label</Label>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <Label weight="bold">Bold Weight</Label>
      <Label weight="medium">Medium Weight</Label>
      <Label weight="light">Light Weight</Label>
      <Label weight="thin">Thin Weight</Label>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', width: '400px', border: 'var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)', padding: 'var(--global-spacing-sizing-20px)' }}>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Left</span>
        <Label align="left">Left Aligned</Label>
      </div>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Centre</span>
        <Label align="centre">Centre Aligned</Label>
      </div>
      <div>
        <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-400)' }}>Right</span>
        <Label align="right">Right Aligned</Label>
      </div>
    </div>
  ),
};

// --- Comprehensive Variant Matrix Stories (120 Variants) ---

/**
 * Bold variants systematic overview
 */
export const StatusBold: Story = {
  name: 'Status / Bold',
  render: () => <WeightMatrix weight="bold" />,
  parameters: { controls: { disable: true } },
};

export const StatusMedium: Story = {
  name: 'Status / Medium',
  render: () => <WeightMatrix weight="medium" />,
  parameters: { controls: { disable: true } },
};

export const StatusLight: Story = {
  name: 'Status / Light',
  render: () => <WeightMatrix weight="light" />,
  parameters: { controls: { disable: true } },
};

export const StatusThin: Story = {
  name: 'Status / Thin',
  render: () => <WeightMatrix weight="thin" />,
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: '480px' }}>
      {[['Bold default', <Label size="default" weight="bold">Bold Label</Label>, '--label-size-default / --global-type-weight-bold'], ['Medium small', <Label size="small" weight="medium">Medium Small</Label>, '--label-size-small / --global-type-weight-medium'], ['With dropdown', <Label size="default" dropdown>With Dropdown</Label>, '--label-dropdown-icon-size']].map(([lbl, el, tok]) => (
        <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)', color: 'var(--global-color-neutral-gray-600)' }}>{lbl as string}</span>
          {el as React.ReactElement}
          <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{tok as string}</code>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      {(['bold', 'medium', 'light', 'thin'] as const).map(w => (
        <div key={w} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', width: '50px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{w}</span>
          <Label size="default" weight={w}>Sample Label</Label>
          <Label size="default" weight={w} dropdown>With Dropdown</Label>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllVariants: Story = {
  name: 'Full Design Matrix (120 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--global-spacing-sizing-20px)' }}>
        <h1 style={{ margin: 0 }}>Label Component Variant Matrix</h1>
        <p style={{ color: 'var(--global-color-neutral-gray-600)' }}>5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants</p>
      </div>
      <WeightMatrix weight="bold" />
      <WeightMatrix weight="medium" />
      <WeightMatrix weight="light" />
      <WeightMatrix weight="thin" />
    </div>
  ),
};

// --- Brand Switching Demo ---

export const WithDropdown: Story = {
  args: {
    dropdown: true,
  },
};
