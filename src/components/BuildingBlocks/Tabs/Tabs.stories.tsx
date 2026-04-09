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

// ─── Documentation (first) ───────────────────────────────────────────────────

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
};

// ─── All sizes ───────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '8px', marginTop: 0 }}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} size={size} type="default" activeId="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Type: default (underline, blue) ─────────────────────────────────────────

export const TypeDefaultSmall: Story = {
  name: 'Default / Small',
  args: { type: 'default', size: 'small', activeId: 'tab1' },
};

export const TypeDefaultDefault: Story = {
  name: 'Default / Default',
  args: { type: 'default', size: 'default', activeId: 'tab2' },
};

export const TypeDefaultLarge: Story = {
  name: 'Default / Large',
  args: { type: 'default', size: 'large', activeId: 'tab3' },
};

// ─── Type: secondary (underline, dark) ───────────────────────────────────────

export const TypeSecondarySmall: Story = {
  name: 'Secondary / Small',
  args: { type: 'secondary', size: 'small', activeId: 'tab1' },
};

export const TypeSecondaryDefault: Story = {
  name: 'Secondary / Default',
  args: { type: 'secondary', size: 'default', activeId: 'tab2' },
};

export const TypeSecondaryLarge: Story = {
  name: 'Secondary / Large',
  args: { type: 'secondary', size: 'large', activeId: 'tab3' },
};

// ─── Type: contained ─────────────────────────────────────────────────────────

export const TypeContainedSmall: Story = {
  name: 'Contained / Small',
  args: { type: 'contained', size: 'small', activeId: 'tab1' },
};

export const TypeContainedDefault: Story = {
  name: 'Contained / Default',
  args: { type: 'contained', size: 'default', activeId: 'tab2' },
};

export const TypeContainedLarge: Story = {
  name: 'Contained / Large',
  args: { type: 'contained', size: 'large', activeId: 'tab3' },
};

// ─── Type: dark-contained ────────────────────────────────────────────────────

export const TypeDarkSmall: Story = {
  name: 'Dark Contained / Small',
  args: { type: 'dark-contained', size: 'small', activeId: 'tab1' },
};

export const TypeDarkDefault: Story = {
  name: 'Dark Contained / Default',
  args: { type: 'dark-contained', size: 'default', activeId: 'tab2' },
};

export const TypeDarkLarge: Story = {
  name: 'Dark Contained / Large',
  args: { type: 'dark-contained', size: 'large', activeId: 'tab3' },
};

// ─── With dropdown indicator ─────────────────────────────────────────────────

export const WithDropdown: Story = {
  name: 'With Dropdown indicator',
  args: { items: DROPDOWN_ITEMS, type: 'default', activeId: 'tab1' },
};

// ─── Without badge / icons ────────────────────────────────────────────────────

export const WithoutBadge: Story = {
  name: 'Without Badge',
  args: { showBadge: false, type: 'default', activeId: 'tab1' },
};

export const WithoutIcons: Story = {
  name: 'Without Icons',
  args: { showLeadingIcon: false, showTrailingIcon: false, type: 'default', activeId: 'tab1' },
};

// ─── Full design matrix ───────────────────────────────────────────────────────

export const FullMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px' }}>
      {/* Underline rows */}
      {(['default', 'secondary'] as TabType[]).map((type) => (
        <div key={type}>
          <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0, textTransform: 'capitalize' }}>
            Type: {type}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ALL_SIZES.map((size) => (
              <div key={size}>
                <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Contained */}
      <div>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0 }}>
          Type: contained
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dark contained */}
      <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', color: 'var(--global-color-neutral-gray-200)', marginBottom: '16px', marginTop: 0 }}>
          Type: dark-contained
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown variants */}
      <div>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0 }}>
          With dropdown indicator
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="secondary" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
