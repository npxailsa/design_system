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
  padding: '16px',
  background: '#f9fafb',
  borderRadius: '6px',
  display: 'inline-flex',
};

const darkBg: React.CSSProperties = {
  ...lightBg,
  background: '#374151',
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

// ─── 1. Documentation ─────────────────────────────────────────────────────────
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

// ─── 2. Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={args.type === 'dark-contained' ? darkBg : lightBg}>
      <Tabs {...args} />
    </div>
  ),
};

// ─── 3. Type: Default (underline, blue active) ───────────────────────────────
export const TypeDefault: Story = {
  name: 'Type / Default',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── 4. Type: Secondary (underline, dark active) ─────────────────────────────
export const TypeSecondary: Story = {
  name: 'Type / Secondary',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── 5. Type: Contained (bordered box, light theme) ──────────────────────────
export const TypeContained: Story = {
  name: 'Type / Contained',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── 6. Type: Dark Contained ─────────────────────────────────────────────────
export const TypeDarkContained: Story = {
  name: 'Type / Dark Contained',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={darkBg}>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── 7. Default / Small ───────────────────────────────────────────────────────
export const DefaultSmall: Story = {
  name: 'Default / Small',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="small" activeId="tab2" />
    </div>
  ),
};

// ─── 8. Default / Default ─────────────────────────────────────────────────────
export const DefaultDefault: Story = {
  name: 'Default / Default',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" />
    </div>
  ),
};

// ─── 9. Default / Large ───────────────────────────────────────────────────────
export const DefaultLarge: Story = {
  name: 'Default / Large',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="large" activeId="tab2" />
    </div>
  ),
};

// ─── 10. Secondary / Small ────────────────────────────────────────────────────
export const SecondarySmall: Story = {
  name: 'Secondary / Small',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="small" activeId="tab2" />
    </div>
  ),
};

// ─── 11. Secondary / Default ──────────────────────────────────────────────────
export const SecondaryDefault: Story = {
  name: 'Secondary / Default',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="default" activeId="tab2" />
    </div>
  ),
};

// ─── 12. Secondary / Large ────────────────────────────────────────────────────
export const SecondaryLarge: Story = {
  name: 'Secondary / Large',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="large" activeId="tab2" />
    </div>
  ),
};

// ─── 13. Contained / Small ────────────────────────────────────────────────────
export const ContainedSmall: Story = {
  name: 'Contained / Small',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="small" activeId="tab1" />
    </div>
  ),
};

// ─── 14. Contained / Default ──────────────────────────────────────────────────
export const ContainedDefault: Story = {
  name: 'Contained / Default',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" />
    </div>
  ),
};

// ─── 15. Contained / Large ────────────────────────────────────────────────────
export const ContainedLarge: Story = {
  name: 'Contained / Large',
  render: () => (
    <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="large" activeId="tab1" />
    </div>
  ),
};

// ─── 16. Dark Contained / Small ───────────────────────────────────────────────
export const DarkContainedSmall: Story = {
  name: 'Dark Contained / Small',
  render: () => (
    <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="small" activeId="tab1" />
    </div>
  ),
};

// ─── 17. Dark Contained / Default ─────────────────────────────────────────────
export const DarkContainedDefault: Story = {
  name: 'Dark Contained / Default',
  render: () => (
    <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab1" />
    </div>
  ),
};

// ─── 18. Dark Contained / Large ───────────────────────────────────────────────
export const DarkContainedLarge: Story = {
  name: 'Dark Contained / Large',
  render: () => (
    <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="large" activeId="tab1" />
    </div>
  ),
};

// ─── 19. With Dropdown ────────────────────────────────────────────────────────
export const WithDropdown: Story = {
  name: 'With Dropdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={lightBg}>
        <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div style={lightBg}>
        <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
      </div>
    </div>
  ),
};

// ─── 20. Without Badge ────────────────────────────────────────────────────────
export const WithoutBadge: Story = {
  name: 'Without Badge',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showBadge={false} />
      </div>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showBadge={false} />
      </div>
    </div>
  ),
};

// ─── 21. Without Icons ────────────────────────────────────────────────────────
export const WithoutIcons: Story = {
  name: 'Without Icons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} />
      </div>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showLeadingIcon={false} showTrailingIcon={false} />
      </div>
    </div>
  ),
};

// ─── 22. Full Design Matrix ───────────────────────────────────────────────────
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded' },
  render: () => {
    const heading = (text: string, dark = false): React.CSSProperties => ({
      fontSize: 11,
      fontWeight: 600,
      color: dark ? '#9CA3AF' : '#61607C',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      marginBottom: 8,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Default underline — all sizes */}
        {ALL_SIZES.map((size) => (
          <div key={`default-${size}`}>
            <div style={heading(`Default — ${size}`)}>Default — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
            </div>
          </div>
        ))}

        {/* Secondary underline — all sizes */}
        {ALL_SIZES.map((size) => (
          <div key={`secondary-${size}`}>
            <div style={heading(`Secondary — ${size}`)}>Secondary — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
            </div>
          </div>
        ))}

        {/* Contained — all sizes */}
        {ALL_SIZES.map((size) => (
          <div key={`contained-${size}`}>
            <div style={heading(`Contained — ${size}`)}>Contained — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
            </div>
          </div>
        ))}

        {/* Dark Contained — all sizes */}
        {ALL_SIZES.map((size) => (
          <div key={`dark-${size}`}>
            <div style={heading(`Dark Contained — ${size}`, true)}>Dark Contained — {size}</div>
            <div style={darkBg}>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
            </div>
          </div>
        ))}

        {/* Dropdown variant */}
        <div>
          <div style={heading('With Dropdown — Default')}>With Dropdown — Default</div>
          <div style={lightBg}>
            <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
          </div>
        </div>

        {/* Without badge */}
        <div>
          <div style={heading('Without Badge — Contained')}>Without Badge — Contained</div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showBadge={false} />
          </div>
        </div>
      </div>
    );
  },
};
