import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';
import { TabsDocs } from './TabsDocs';
import type { TabItem, TabsSize, TabsVariant, TabsAppearance } from './Tabs';

// ─── Sample data ─────────────────────────────────────────────────────────────

const DEFAULT_TABS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7 },
  { id: 'tab3', label: 'Tab label', count: 7 },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const DROPDOWN_TABS: TabItem[] = [
  { id: 'tab1', label: 'Tab label', count: 7 },
  { id: 'tab2', label: 'Tab label', count: 7, dropdown: true },
  { id: 'tab3', label: 'Tab label', count: 7, dropdown: true },
  { id: 'tab4', label: 'Tab label', count: 7, disabled: true },
];

const ALL_SIZES: TabsSize[] = ['small', 'default', 'large'];
const ALL_APPEARANCES: TabsAppearance[] = ['default', 'alt', 'dark'];

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
    size: { control: 'select', options: ['small', 'default', 'large'] as TabsSize[] },
    variant: { control: 'select', options: ['underline', 'pill'] as TabsVariant[] },
    appearance: { control: 'select', options: ['default', 'alt', 'dark'] as TabsAppearance[] },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    activeTab: { control: 'text' },
  },
  args: {
    tabs: DEFAULT_TABS,
    size: 'default',
    variant: 'underline',
    appearance: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true,
    activeTab: 'tab1',
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
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', textTransform: 'capitalize', marginBottom: '8px', marginTop: 0 }}>
            {size}
          </p>
          <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance="default" activeTab="tab1" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Underline variant ────────────────────────────────────────────────────────

export const UnderlineSmall: Story = {
  name: 'Underline / Small',
  args: { size: 'small', variant: 'underline', activeTab: 'tab1' },
};

export const UnderlineDefault: Story = {
  name: 'Underline / Default',
  args: { size: 'default', variant: 'underline', activeTab: 'tab1' },
};

export const UnderlineLarge: Story = {
  name: 'Underline / Large',
  args: { size: 'large', variant: 'underline', activeTab: 'tab1' },
};

export const UnderlineAllSizes: Story = {
  name: 'Underline / All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', textTransform: 'capitalize', marginBottom: '8px', marginTop: 0 }}>
            {size}
          </p>
          <Tabs tabs={DEFAULT_TABS} size={size} variant="underline" activeTab="tab2" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Pill variant ─────────────────────────────────────────────────────────────

export const PillSmall: Story = {
  name: 'Pill / Small',
  args: { size: 'small', variant: 'pill', appearance: 'default', activeTab: 'tab1' },
};

export const PillDefault: Story = {
  name: 'Pill / Default',
  args: { size: 'default', variant: 'pill', appearance: 'default', activeTab: 'tab1' },
};

export const PillLarge: Story = {
  name: 'Pill / Large',
  args: { size: 'large', variant: 'pill', appearance: 'default', activeTab: 'tab1' },
};

// ─── Appearances ─────────────────────────────────────────────────────────────

export const AppearanceDefault: Story = {
  name: 'Appearance / Default',
  args: { variant: 'pill', appearance: 'default', activeTab: 'tab1' },
};

export const AppearanceAlt: Story = {
  name: 'Appearance / Alt',
  args: { variant: 'pill', appearance: 'alt', activeTab: 'tab1' },
};

export const AppearanceDark: Story = {
  name: 'Appearance / Dark',
  args: { variant: 'pill', appearance: 'dark', activeTab: 'tab1' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllAppearances: Story = {
  name: 'All Appearances',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', marginBottom: '8px', marginTop: 0 }}>Default</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-600)', marginBottom: '8px', marginTop: 0 }}>Alt</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="alt" activeTab="tab1" />
      </div>
      <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: '16px', borderRadius: '8px' }}>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-300)', marginBottom: '8px', marginTop: 0 }}>Dark</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="dark" activeTab="tab1" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── With dropdown ────────────────────────────────────────────────────────────

export const WithDropdown: Story = {
  name: 'With Dropdown indicator',
  args: {
    tabs: DROPDOWN_TABS,
    size: 'default',
    variant: 'underline',
    activeTab: 'tab1',
  },
};

export const PillWithDropdown: Story = {
  name: 'Pill / With Dropdown',
  args: {
    tabs: DROPDOWN_TABS,
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1',
  },
};

// ─── Without icons ────────────────────────────────────────────────────────────

export const WithoutIcons: Story = {
  name: 'Without Icons',
  args: {
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1',
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

// ─── Without badge ────────────────────────────────────────────────────────────

export const WithoutBadge: Story = {
  name: 'Without Badge',
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab label' },
      { id: 'tab2', label: 'Tab label' },
      { id: 'tab3', label: 'Tab label' },
      { id: 'tab4', label: 'Tab label', disabled: true },
    ],
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1',
  },
};

// ─── Full design matrix ───────────────────────────────────────────────────────

export const FullMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px' }}>
      {/* Underline rows */}
      <div>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0 }}>
          Underline variant
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
              <Tabs tabs={DEFAULT_TABS} size={size} variant="underline" activeTab="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Pill appearances */}
      {ALL_APPEARANCES.filter(a => a !== 'dark').map((appearance) => (
        <div key={appearance}>
          <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0 }}>
            Pill — {appearance}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ALL_SIZES.map((size) => (
              <div key={size}>
                <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
                <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance={appearance} activeTab="tab2" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Dark */}
      <div style={{ background: 'var(--global-color-neutral-gray-800)', padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-200)', marginBottom: '16px', marginTop: 0 }}>
          Pill — dark
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ALL_SIZES.map((size) => (
            <div key={size}>
              <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'capitalize', marginBottom: '6px', marginTop: 0 }}>{size}</p>
              <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance="dark" activeTab="tab2" />
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown rows */}
      <div>
        <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-700)', marginBottom: '16px', marginTop: 0 }}>
          With dropdown indicator
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="underline" activeTab="tab1" />
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="pill" appearance="alt" activeTab="tab1" />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
