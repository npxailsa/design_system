import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TabItem } from './TabItem';
import { TabItemDocs } from './TabItemDocs';

const meta: Meta<typeof TabItem> = {
  title: 'Atoms/Tabs',
  component: TabItem,
  parameters: {
    docs: {
      page: () => <TabItemDocs />,
    },
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    label: { control: 'text' },
    count: { control: 'number' },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    showBadge: { control: 'boolean' },
    dropdown: { control: 'boolean' },
  },
  args: {
    label: 'Tab label',
    size: 'default',
    count: 7,
    active: false,
    disabled: false,
    loading: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    showBadge: true,
    dropdown: false,
  },
};

export default meta;
type Story = StoryObj<typeof TabItem>;

// ─── 1. Documentation ─────────────────────────────────────────────────────────
export const Documentation: Story = {
  name: 'Documentation',
  parameters: {
    docs: {
      page: () => <TabItemDocs />,
    },
  },
};

// ─── 2. Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Tab label',
    size: 'default',
    count: 7,
  },
  render: (args) => <TabItem {...args} />,
};

// ─── 3. States ────────────────────────────────────────────────────────────────
export const Inactive: Story = {
  name: 'Inactive',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" />
      <TabItem label="Tab label" count={7} size="default" />
      <TabItem label="Tab label" count={7} size="large" />
    </div>
  ),
};

export const Active: Story = {
  name: 'Active',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" active />
      <TabItem label="Tab label" count={7} size="default" active />
      <TabItem label="Tab label" count={7} size="large" active />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" disabled />
      <TabItem label="Tab label" count={7} size="default" disabled />
      <TabItem label="Tab label" count={7} size="large" disabled />
    </div>
  ),
};

export const Loading: Story = {
  name: 'Loading',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" size="small" loading />
      <TabItem label="Tab label" size="default" loading />
      <TabItem label="Tab label" size="large" loading />
    </div>
  ),
};

// ─── 4. Size variants ─────────────────────────────────────────────────────────
export const SizeSmall: Story = {
  name: 'Size / Small',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" />
      <TabItem label="Tab label" count={7} size="small" active />
      <TabItem label="Tab label" count={7} size="small" disabled />
    </div>
  ),
};

export const SizeDefault: Story = {
  name: 'Size / Default',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="default" />
      <TabItem label="Tab label" count={7} size="default" active />
      <TabItem label="Tab label" count={7} size="default" disabled />
    </div>
  ),
};

export const SizeLarge: Story = {
  name: 'Size / Large',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="large" />
      <TabItem label="Tab label" count={7} size="large" active />
      <TabItem label="Tab label" count={7} size="large" disabled />
    </div>
  ),
};

// ─── 5. Icon variants ─────────────────────────────────────────────────────────
export const WithDropdown: Story = {
  name: 'With Dropdown Icon',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" dropdown />
      <TabItem label="Tab label" count={7} size="default" dropdown />
      <TabItem label="Tab label" count={7} size="large" dropdown />
    </div>
  ),
};

export const WithoutBadge: Story = {
  name: 'Without Badge',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" size="small" showBadge={false} />
      <TabItem label="Tab label" size="default" showBadge={false} />
      <TabItem label="Tab label" size="large" showBadge={false} />
    </div>
  ),
};

export const WithoutIcons: Story = {
  name: 'Without Icons',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <TabItem label="Tab label" count={7} size="small" showLeadingIcon={false} showTrailingIcon={false} />
      <TabItem label="Tab label" count={7} size="default" showLeadingIcon={false} showTrailingIcon={false} />
      <TabItem label="Tab label" count={7} size="large" showLeadingIcon={false} showTrailingIcon={false} />
    </div>
  ),
};

// ─── 6. Full Design Matrix ────────────────────────────────────────────────────
export const FullMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded' },
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;

    const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {label}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {children}
        </div>
      </div>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Horizontal strip — default size, all states */}
        <Row label="Inactive — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} />
          ))}
        </Row>

        <Row label="Inactive — with badge dark">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} showBadge />
          ))}
        </Row>

        <Row label="Active — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} active />
          ))}
        </Row>

        <Row label="Disabled — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} disabled />
          ))}
        </Row>

        <Row label="Loading — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" size={s} loading />
          ))}
        </Row>

        <Row label="Dropdown / Small">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} dropdown />
          ))}
        </Row>

        <Row label="Dropdown Active — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} dropdown active />
          ))}
        </Row>

        <Row label="Without icons — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" count={7} size={s} showLeadingIcon={false} showTrailingIcon={false} />
          ))}
        </Row>

        <Row label="Without badge — all sizes">
          {sizes.map((s) => (
            <TabItem key={s} label="Tab label" size={s} showBadge={false} />
          ))}
        </Row>
      </div>
    );
  },
};

// ─── 7. As Tab Strip ──────────────────────────────────────────────────────────
export const AsTabStrip: Story = {
  name: 'As Tab Strip',
  render: () => {
    const [active, setActive] = React.useState('overview');
    const tabs = [
      { id: 'overview', label: 'Overview', count: 7 },
      { id: 'details', label: 'Details', count: 3 },
      { id: 'history', label: 'History', count: 12 },
      { id: 'settings', label: 'Settings' },
    ];
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            label={tab.label}
            count={tab.count}
            showBadge={tab.count !== undefined}
            active={active === tab.id}
            onClick={() => setActive(tab.id)}
          />
        ))}
      </div>
    );
  },
};
