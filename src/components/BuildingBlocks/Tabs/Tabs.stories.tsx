import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';
import { TabsDocs } from './TabsDocs';
import type { TabItem, TabSize, TabType } from './Tabs';

// ─── Sample data ─────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7 },
  { id: 'tab3', label: 'Tab label', count: 7 },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const DROPDOWN_ITEMS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7, dropdown: true },
  { id: 'tab3', label: 'Tab label', count: 7, dropdown: true },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const ALL_SIZES: TabSize[] = ['small', 'default', 'large'];
const ALL_TYPES: TabType[] = ['default', 'secondary', 'contained', 'dark-contained'];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tabs> = {
  title: 'Foundation/BuildingBlocks/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: () => <TabsDocs />,
    },
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

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500)',
  textTransform: 'capitalize',
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

/* 1 ─── Documentation ───────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* 2 ─── Playground ────────────────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
};

/* 3 ─── Default ─────────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  args: { type: 'default', size: 'default', activeId: 'tab2' },
};

/* 4 ─── Sizes ───────────────────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} size={size} type="default" activeId="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 5 ─── Status ─────────────────────────────────────────────────────────── */

export const StatusDefault: Story = {
  name: 'Status / Default (Underline Blue)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusSecondary: Story = {
  name: 'Status / Secondary (Underline Dark)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusContained: Story = {
  name: 'Status / Contained',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDarkContained: Story = {
  name: 'Status / Dark Contained',
  render: () => (
    <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size}>
            <p style={{ ...labelStyle, color: 'var(--global-color-neutral-gray-400)' }}>{size}</p>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusWithDropdown: Story = {
  name: 'Status / With Dropdown Indicator',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-16px)' }}>
      {(['default', 'secondary', 'contained'] as TabType[]).map((type) => (
        <div key={type}>
          <p style={labelStyle}>{type}</p>
          <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled Tab',
  args: { type: 'default', size: 'default', activeId: 'tab1' },
};

/* 6 ─── Component Breakdown ─────────────────────────────────────────────── */

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      <div>
        <p style={sectionStyle}>Anatomy</p>
        <p style={{ ...labelStyle, marginBottom: 'var(--global-spacing-sizing-16px)' }}>
          A Tabs strip is composed of individual tab items. Each tab item may include:
          a leading icon, a text label, a trailing icon, and an optional badge/count.
          One tab is always active; others can be disabled.
        </p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge />
      </div>
      <div>
        <p style={sectionStyle}>Without badge</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge={false} />
      </div>
      <div>
        <p style={sectionStyle}>Without icons</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} showBadge />
      </div>
      <div>
        <p style={sectionStyle}>With dropdown indicators</p>
        <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" showLeadingIcon showTrailingIcon showBadge />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 7 ─── All Interactive States ───────────────────────────────────────────── */

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      <div>
        <p style={sectionStyle}>Default (resting)</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div>
        <p style={sectionStyle}>Active tab selected</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" />
      </div>
      <div>
        <p style={sectionStyle}>Disabled tab present</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div>
        <p style={sectionStyle}>Contained — active</p>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab2" />
      </div>
      <div>
        <p style={{ ...sectionStyle, color: 'var(--global-color-neutral-gray-200)' }}>Dark contained — active</p>
        <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: 'var(--global-spacing-sizing-16px)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
          <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab2" />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 8 ─── Full Design Matrix ───────────────────────────────────────────────── */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (48 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-48px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      {/* Underline types */}
      {(['default', 'secondary'] as TabType[]).map((type) => (
        <div key={type}>
          <h3 style={sectionStyle}>Type: {type}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
            {ALL_SIZES.map((size) => (
              <div key={size}>
                <p style={labelStyle}>{size}</p>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Contained */}
      <div>
        <h3 style={sectionStyle}>Type: contained</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={labelStyle}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dark contained */}
      <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
        <h3 style={{ ...sectionStyle, color: 'var(--global-color-neutral-gray-200)' }}>Type: dark-contained</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={{ ...labelStyle, color: 'var(--global-color-neutral-gray-400)' }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown variants */}
      <div>
        <h3 style={sectionStyle}>With dropdown indicator</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="secondary" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
