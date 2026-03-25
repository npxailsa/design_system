import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';
import { AlertDocs } from './AlertDocs';
import type { AlertColour, AlertSize } from './Alert';
import React from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => <AlertDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    colour: {
      control: 'select',
      options: [
        'default',
        'warning',
        'light-gray',
        'navy',
        'success',
        'error',
        'purple',
        'white',
      ],
    },
    border: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    showSubtext: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
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

const COLOURS: AlertColour[] = [
  'default',
  'warning',
  'light-gray',
  'navy',
  'success',
  'error',
  'purple',
  'white',
];

const SIZES: AlertSize[] = ['small', 'default', 'large'];

const sectionTitleStyle: React.CSSProperties = {
  margin: 0,
  textTransform: 'uppercase',
  letterSpacing: 'var(--global-spacing-sizing-1px)',
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-sm)',
  color: 'var(--global-color-neutral-gray-600)',
};

const sectionDividerStyle: React.CSSProperties = {
  height: 'var(--global-spacing-stroke-2px)',
  flexGrow: 1,
  backgroundColor: 'var(--global-color-neutral-gray-200)',
};

const SectionHeader = ({ label }: { label: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-12px)',
      marginBottom: 'var(--global-spacing-sizing-16px)',
    }}
  >
    <h3 style={sectionTitleStyle}>{label}</h3>
    <div style={sectionDividerStyle} />
  </div>
);

/* ── Default (playground) ── */

export const Default: Story = {
  args: {
    size: 'default',
    colour: 'default',
    border: true,
    title: 'This is an alert banner for the Echo app',
    description: 'This is a description for an alert banner in the Echo app',
    showLeadingIcon: true,
    showTrailingIcon: true,
    showSubtext: true,
  },
};

/* ── Sizes ── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
      <SectionHeader label="Sizes" />
      {SIZES.map((size) => (
        <Alert key={size} size={size} colour="default" border />
      ))}
    </div>
  ),
};

/* ── Colours (bordered) ── */

export const Colours: Story = {
  name: 'Colours (Bordered)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <SectionHeader label="All 8 Colours — Bordered" />
      {COLOURS.map((colour) => (
        <Alert key={colour} size="default" colour={colour} border />
      ))}
    </div>
  ),
};

/* ── No Border ── */

export const NoBorder: Story = {
  name: 'Colours (No Border)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <SectionHeader label="All 8 Colours — No Border" />
      {COLOURS.map((colour) => (
        <Alert key={colour} size="default" colour={colour} border={false} />
      ))}
    </div>
  ),
};

/* ── Without Description ── */

export const WithoutDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <SectionHeader label="Without Description" />
      {COLOURS.map((colour) => (
        <Alert key={colour} colour={colour} border showSubtext={false} />
      ))}
    </div>
  ),
};

/* ── Without Icons ── */

export const WithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <SectionHeader label="Without Leading & Trailing Icons" />
      {COLOURS.map((colour) => (
        <Alert
          key={colour}
          colour={colour}
          border
          showLeadingIcon={false}
          showTrailingIcon={false}
        />
      ))}
    </div>
  ),
};

/* ── All 48 Variants ── */

export const AllVariants: Story = {
  name: 'Full Matrix (48 Variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--global-spacing-sizing-12px)' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--brand-font-primary)',
            fontWeight: 'var(--global-type-weight-default)',
          }}
        >
          Alert Component — Full Variant Matrix
        </h2>
        <p
          style={{
            color: 'var(--global-color-neutral-gray-600)',
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-sm)',
          }}
        >
          3 Sizes &times; 8 Colours &times; 2 Border States = 48 Variants
        </p>
      </div>
      {SIZES.map((size) => (
        <div key={size}>
          <SectionHeader label={`Size: ${size}`} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
            {COLOURS.map((colour) => (
              <div
                key={colour}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    color: 'var(--global-color-neutral-gray-400)',
                    textTransform: 'capitalize',
                  }}
                >
                  {colour}
                </span>
                <Alert size={size} colour={colour} border />
                <Alert size={size} colour={colour} border={false} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── Documentation ── */

export const Documentation: Story = {
  render: () => <AlertDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};
