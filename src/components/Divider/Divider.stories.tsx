import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';
import { DividerDocs } from './DividerDocs';
import type { DividerLine, DividerThickness, DividerAlignment } from './Divider';

const ALL_LINES: DividerLine[]      = ['solid', 'dashed', 'dotted'];
const ALL_THICKNESSES: DividerThickness[] = ['0-5px', '1px', '2px', '3px', '4px', '8px'];
const ALL_ALIGNMENTS: DividerAlignment[] = ['horizontal', 'vertical'];

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    docs: {
      page: () => <DividerDocs />,
    },
  },
  argTypes: {
    line:      { control: 'select', options: ALL_LINES },
    thickness: { control: 'select', options: ALL_THICKNESSES },
    alignment: { control: 'select', options: ALL_ALIGNMENTS },
    ariaLabel: { control: 'text' },
    className: { control: false },
  },
  args: {
    line:      'solid',
    thickness: '1px',
    alignment: 'horizontal',
    ariaLabel: 'Divider',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

/* ── Shared layout constants ───────────────────────────────────────────── */

const gridWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-12px)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '72px',
  flexShrink: 0,
};

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-family-primary)',
  fontSize: 'var(--global-type-size-primary-label-sm)',
  fontWeight: 'var(--global-type-weight-medium)' as React.CSSProperties['fontWeight'],
  color: 'var(--global-color-neutral-gray-700)',
  margin: '0 0 var(--global-spacing-sizing-12px)',
  textTransform: 'capitalize' as const,
};

/* ════════════════════════════════════════════════════════════════════════════
   DOCUMENTATION
   ════════════════════════════════════════════════════════════════════════════ */

export const Documentation: Story = {
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: { page: () => <DividerDocs /> },
    chromatic: { disableSnapshot: true },
  },
  render: () => <DividerDocs />,
};

/* ════════════════════════════════════════════════════════════════════════════
   PLAYGROUND
   ════════════════════════════════════════════════════════════════════════════ */

export const Playground: Story = {
  name: 'Playground',
  render: (args) =>
    args.alignment === 'vertical' ? (
      <div style={{ display: 'flex', alignItems: 'center', height: 'var(--global-spacing-sizing-80px)', padding: 'var(--global-spacing-sizing-16px)', gap: 'var(--global-spacing-sizing-16px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)', minWidth: '200px', width: '100%' }}>
        <span style={{ fontFamily: 'var(--font-family-primary)' }}>Left content</span>
        <Divider {...args} />
        <span style={{ fontFamily: 'var(--font-family-primary)' }}>Right content</span>
      </div>
    ) : (
      <div style={{ ...gridWrap, gap: 'var(--global-spacing-sizing-16px)' }}>
        <span style={{ fontFamily: 'var(--font-family-primary)' }}>Content above</span>
        <Divider {...args} />
        <span style={{ fontFamily: 'var(--font-family-primary)' }}>Content below</span>
      </div>
    ),
};

/* ════════════════════════════════════════════════════════════════════════════
   HORIZONTAL — LINE STYLES
   ════════════════════════════════════════════════════════════════════════════ */

export const HorizontalSolid: Story = {
  name: 'Horizontal / Solid',
  args: { alignment: 'horizontal', line: 'solid', thickness: '1px' },
  render: (args) => (
    <div style={gridWrap}>
      <div style={{ ...rowStyle }}>
        <span style={labelStyle}>solid</span>
        <div style={{ flex: 1 }}><Divider {...args} /></div>
      </div>
    </div>
  ),
};

export const HorizontalDashed: Story = {
  name: 'Horizontal / Dashed',
  args: { alignment: 'horizontal', line: 'dashed', thickness: '1px' },
  render: (args) => (
    <div style={gridWrap}>
      <div style={{ ...rowStyle }}>
        <span style={labelStyle}>dashed</span>
        <div style={{ flex: 1 }}><Divider {...args} /></div>
      </div>
    </div>
  ),
};

export const HorizontalDotted: Story = {
  name: 'Horizontal / Dotted',
  args: { alignment: 'horizontal', line: 'dotted', thickness: '1px' },
  render: (args) => (
    <div style={gridWrap}>
      <div style={{ ...rowStyle }}>
        <span style={labelStyle}>dotted</span>
        <div style={{ flex: 1 }}><Divider {...args} /></div>
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════════════════════════════════════
   HORIZONTAL — ALL LINE STYLES
   ════════════════════════════════════════════════════════════════════════════ */

export const HorizontalAllStyles: Story = {
  name: 'Horizontal / All Line Styles',
  render: () => (
    <div style={gridWrap}>
      {ALL_LINES.map((lineStyle) => (
        <div key={lineStyle} style={rowStyle}>
          <span style={labelStyle}>{lineStyle}</span>
          <div style={{ flex: 1 }}>
            <Divider alignment="horizontal" line={lineStyle} thickness="1px" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   HORIZONTAL — THICKNESS SCALE
   ════════════════════════════════════════════════════════════════════════════ */

export const HorizontalThicknessScale: Story = {
  name: 'Horizontal / Thickness Scale (Solid)',
  render: () => (
    <div style={gridWrap}>
      {ALL_THICKNESSES.map((t) => (
        <div key={t} style={rowStyle}>
          <span style={labelStyle}>{t}</span>
          <div style={{ flex: 1 }}>
            <Divider alignment="horizontal" line="solid" thickness={t} />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   HORIZONTAL — ALL STYLES × ALL THICKNESSES
   ════════════════════════════════════════════════════════════════════════════ */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (36 variants)',
  render: () => (
    <div style={{ ...gridWrap, gap: 'var(--global-spacing-sizing-36px)' }}>
      {ALL_LINES.map((lineStyle) => (
        <div key={lineStyle}>
          <p style={sectionLabel}>{lineStyle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
            {ALL_THICKNESSES.map((t) => (
              <div key={t} style={rowStyle}>
                <span style={labelStyle}>{t}</span>
                <div style={{ flex: 1 }}>
                  <Divider alignment="horizontal" line={lineStyle} thickness={t} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   VERTICAL — LINE STYLES
   ════════════════════════════════════════════════════════════════════════════ */

export const VerticalAllStyles: Story = {
  name: 'Vertical / All Line Styles',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-32px)', height: 'var(--global-spacing-sizing-80px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)', minWidth: '200px', width: '100%' }}>
      {ALL_LINES.map((lineStyle) => (
        <React.Fragment key={lineStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
            <Divider alignment="vertical" line={lineStyle} thickness="1px" />
            <span style={{ ...labelStyle, minWidth: 'auto', textAlign: 'center' }}>{lineStyle}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const VerticalThicknessScale: Story = {
  name: 'Vertical / Thickness Scale (Solid)',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-24px)', height: 'var(--global-spacing-sizing-80px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)', minWidth: '200px', width: '100%' }}>
      {ALL_THICKNESSES.map((t) => (
        <React.Fragment key={t}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
            <Divider alignment="vertical" line="solid" thickness={t} />
            <span style={{ ...labelStyle, minWidth: 'auto', textAlign: 'center' }}>{t}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════════════════════
   CONTEXT: Between content blocks
   ════════════════════════════════════════════════════════════════════════════ */

export const BetweenContentBlocks: Story = {
  name: 'In Context / Between Content Blocks',
  render: () => (
    <div style={{ minWidth: '200px', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Personal Details</p>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Name, email, and phone number</p>
      </div>
      <Divider alignment="horizontal" line="solid" thickness="0-5px" />
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Preferences</p>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Notifications and display settings</p>
      </div>
      <Divider alignment="horizontal" line="solid" thickness="0-5px" />
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Security</p>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Password and two-factor authentication</p>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const BetweenInlineItems: Story = {
  name: 'In Context / Between Inline Items',
  render: () => (
    <nav style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
      {['Dashboard', 'Reports', 'Analytics', 'Settings'].map((item, i, arr) => (
        <React.Fragment key={item}>
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: i === 0 ? 'var(--global-color-primary-blue)' : 'var(--global-color-neutral-gray-600)', cursor: 'pointer' }}>{item}</span>
          {i < arr.length - 1 && (
            <Divider alignment="vertical" line="solid" thickness="1px" />
          )}
        </React.Fragment>
      ))}
    </nav>
  ),
  parameters: { controls: { disable: true } },
};
