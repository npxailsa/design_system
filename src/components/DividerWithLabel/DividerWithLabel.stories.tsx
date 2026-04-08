import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DividerWithLabel } from './DividerWithLabel';
import { DividerWithLabelDocs } from './DividerWithLabelDocs';
import type {
  DividerWithLabelPosition,
  DividerWithLabelSize,
} from './DividerWithLabel';
import type { DividerLine, DividerThickness } from '../Divider/Divider';

const ALL_POSITIONS: DividerWithLabelPosition[] = ['left', 'center', 'right'];
const ALL_SIZES: DividerWithLabelSize[]          = ['xs', 'sm', 'default'];
const ALL_LINES: DividerLine[]                   = ['solid', 'dashed', 'dotted'];
const ALL_THICKNESSES: DividerThickness[]        = ['0-5px', '1px', '2px', '3px', '4px', '8px'];

const meta: Meta<typeof DividerWithLabel> = {
  title: 'Atoms/DividerWithLabel',
  component: DividerWithLabel,
  parameters: {
    docs: { page: () => <DividerWithLabelDocs /> },
  },
  argTypes: {
    label:         { control: 'text' },
    labelPosition: { control: 'select', options: ALL_POSITIONS },
    labelSize:     { control: 'select', options: ALL_SIZES },
    line:          { control: 'select', options: ALL_LINES },
    thickness:     { control: 'select', options: ALL_THICKNESSES },
    className:     { control: false },
    ariaLabel:     { control: 'text' },
  },
  args: {
    label: 'Divider Label',
    labelPosition: 'center',
    labelSize: 'sm',
    line: 'solid',
    thickness: '1px',
  },
};

export default meta;
type Story = StoryObj<typeof DividerWithLabel>;

/* ── Shared layout helpers ─────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const rowLabel: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '80px',
  flexShrink: 0,
};

/* ════════════════════════════════════════════════════════════════════════════
   DOCUMENTATION
   ════════════════════════════════════════════════════════════════════════════ */

export const Documentation: Story = {
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: { page: () => <DividerWithLabelDocs /> },
    chromatic: { disableSnapshot: true },
  },
  render: () => <DividerWithLabelDocs />,
};

/* ════════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ════════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ padding: 'var(--global-spacing-sizing-32px)', minWidth: '200px', width: '100%' }}>
      <DividerWithLabel {...args} />
    </div>
  ),
};

/* ════════════════════════════════════════════════════════════════════════════
   LABEL POSITIONS
   ════════════════════════════════════════════════════════════════════════════ */

export const LabelPositionCenter: Story = {
  name: 'Label Position / Center',
  args: { labelPosition: 'center', label: 'Divider Label' },
  render: (args) => (
    <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
  ),
};

export const LabelPositionLeft: Story = {
  name: 'Label Position / Left',
  args: { labelPosition: 'left', label: 'Divider Label' },
  render: (args) => (
    <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
  ),
};

export const LabelPositionRight: Story = {
  name: 'Label Position / Right',
  args: { labelPosition: 'right', label: 'Divider Label' },
  render: (args) => (
    <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
  ),
};

export const AllPositions: Story = {
  name: 'Label Position / All',
  render: () => (
    <div style={previewWrap}>
      {ALL_POSITIONS.map((pos) => (
        <div key={pos} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)' }}>
          <span style={rowLabel}>{pos}</span>
          <div style={{ flex: 1 }}>
            <DividerWithLabel label="Divider Label" labelPosition={pos} />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   LABEL SIZES
   ════════════════════════════════════════════════════════════════════════════ */

export const AllLabelSizes: Story = {
  name: 'Label Size / All',
  render: () => (
    <div style={previewWrap}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)' }}>
          <span style={rowLabel}>{size}</span>
          <div style={{ flex: 1 }}>
            <DividerWithLabel label="Divider Label" labelSize={size} />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   LINE STYLES
   ════════════════════════════════════════════════════════════════════════════ */

export const AllLineStyles: Story = {
  name: 'Line Style / All',
  render: () => (
    <div style={previewWrap}>
      {ALL_LINES.map((line) => (
        <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)' }}>
          <span style={rowLabel}>{line}</span>
          <div style={{ flex: 1 }}>
            <DividerWithLabel label="Divider Label" line={line} />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   THICKNESS SCALE
   ════════════════════════════════════════════════════════════════════════════ */

export const ThicknessScale: Story = {
  name: 'Thickness / Scale',
  render: () => (
    <div style={previewWrap}>
      {ALL_THICKNESSES.map((t) => (
        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-12px)' }}>
          <span style={rowLabel}>{t}</span>
          <div style={{ flex: 1 }}>
            <DividerWithLabel label="Divider Label" thickness={t} />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   IN CONTEXT
   ════════════════════════════════════════════════════════════════════════════ */

export const InContextFormSections: Story = {
  name: 'In Context / Form Sections',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <DividerWithLabel label="Personal Details" labelPosition="left" labelSize="xs" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Name field</p>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Email field</p>
      </div>
      <DividerWithLabel label="Security" labelPosition="left" labelSize="xs" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Password field</p>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const InContextOrSeparator: Story = {
  name: 'In Context / Or Separator',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <p style={{ margin: 0, fontFamily: 'var(--font-family-primary)', fontWeight: 600, textAlign: 'center', fontSize: 'var(--global-type-size-primary-label)' }}>Continue with Google</p>
      <DividerWithLabel label="or" labelPosition="center" labelSize="xs" />
      <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)', textAlign: 'center' }}>Sign in with email and password</p>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
