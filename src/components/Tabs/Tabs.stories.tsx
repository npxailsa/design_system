import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from '../BuildingBlocks/Tabs/Tabs';
import { TabsDocs } from './TabsDocs';
import type { TabItem, TabSize, TabType } from '../BuildingBlocks/Tabs/Tabs';

// ─── Sample tab data ──────────────────────────────────────────────────────────

const DEFAULT_ITEMS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7 },
  { id: 'tab3', label: 'Tab label', count: 7 },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const DROPDOWN_ITEMS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7, dropdown: true },
  { id: 'tab3', label: 'Tab label', count: 7 },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const ALL_SIZES: TabSize[] = ['small', 'default', 'large'];
const ALL_TYPES: TabType[] = ['default', 'secondary', 'contained', 'dark-contained'];

// ─── Layout helpers ───────────────────────────────────────────────────────────

const lightBg: React.CSSProperties = {
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-6px)',
};

const darkBg: React.CSSProperties = {
  ...lightBg,
  background: 'var(--global-color-neutral-gray-700)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '8px',
  marginTop: 0,
};

const sectionStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-700)',
  marginBottom: '16px',
  marginTop: 0,
};

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: { control: 'select', options: ALL_TYPES },
    size: { control: 'select', options: ALL_SIZES },
    showBadge: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    activeId: { control: 'text' },
  },
  args: {
    items: DEFAULT_ITEMS,
    type: 'default',
    size: 'default',
    showBadge: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    activeId: 'tab2',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/* 1 ─── Documentation ───────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
    chromatic: { disableSnapshot: true },
  },
};

/* 2 ─── Playground ────────────────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={args.type === 'dark-contained' ? darkBg : lightBg}>
      <Tabs {...args} />
    </div>
  ),
};

/* 3 ─── Default ─────────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <div style={lightBg}>
      <Tabs {...args} type="default" size="default" activeId="tab2" />
    </div>
  ),
};

/* 4 ─── Sizes ────────────────────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 5 ─── Status ───────────────────────────────────────────────────────────── */

export const StatusDefault: Story = {
  name: 'Status / Default (Underline Blue)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusSecondary: Story = {
  name: 'Status / Secondary (Underline Dark)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusContained: Story = {
  name: 'Status / Contained',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDarkContained: Story = {
  name: 'Status / Dark Contained',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={darkBg}>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusWithDropdown: Story = {
  name: 'Status / With Dropdown Indicator',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {(['default', 'contained'] as TabType[]).map((type) => (
        <div key={type}>
          <p style={labelStyle}>{type}</p>
          <div style={lightBg}>
            <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled Tab',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 6 ─── Component Breakdown ──────────────────────────────────────────────── */

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      <div>
        <p style={sectionStyle}>Full anatomy — all sub-elements</p>
        <p style={{ ...labelStyle, marginBottom: 'var(--global-spacing-sizing-12px)' }}>
          Each tab item: leading icon + label + trailing icon + badge/count. Disabled tab on right.
        </p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Without badge</p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showBadge={false} />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Without icons</p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>With dropdown indicators</p>
        <div style={lightBg}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 7 ─── All Interactive States ───────────────────────────────────────────── */

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      <div>
        <p style={sectionStyle}>Resting (tab 1 active)</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Active tab 2 selected</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Tab 4 disabled</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Contained — active</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab2" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Dark contained — active</p>
        <div style={darkBg}><Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab2" /></div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 8 ─── Full Design Matrix ───────────────────────────────────────────────── */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (48 variants)',
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {(['default', 'secondary'] as TabType[]).map((type) => (
        <div key={type}>
          <p style={sectionStyle}>{type}</p>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ marginBottom: 'var(--global-spacing-sizing-12px)' }}>
              <p style={labelStyle}>{size}</p>
              <div style={lightBg}>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>
            </div>
          ))}
        </div>
      ))}

      <div>
        <p style={sectionStyle}>contained</p>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ marginBottom: 'var(--global-spacing-sizing-12px)' }}>
            <p style={labelStyle}>{size}</p>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <p style={sectionStyle}>dark-contained</p>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ marginBottom: 'var(--global-spacing-sizing-12px)' }}>
            <p style={{ ...labelStyle, color: 'var(--global-color-neutral-gray-400)' }}>{size}</p>
            <div style={darkBg}>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <p style={sectionStyle}>With dropdown indicator</p>
        {(['default', 'secondary', 'contained'] as TabType[]).map((type) => (
          <div key={type} style={{ marginBottom: 'var(--global-spacing-sizing-12px)' }}>
            <p style={labelStyle}>{type}</p>
            <div style={lightBg}>
              <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
