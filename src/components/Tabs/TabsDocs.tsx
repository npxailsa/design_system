import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Tabs } from '../BuildingBlocks/Tabs/Tabs';
import type { TabItem } from '../BuildingBlocks/Tabs/Tabs';

// ─── Sample data ──────────────────────────────────────────────────────────────

const SAMPLE_ITEMS: TabItem[] = [
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

// ─── Layout helpers ───────────────────────────────────────────────────────────

const lightWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const darkWrap: React.CSSProperties = {
  ...lightWrap,
  background: 'var(--global-color-neutral-gray-800)',
};

// ─── Docs component ───────────────────────────────────────────────────────────

export const TabsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Tabs"
      subtitle="Tabs organise related content into selectable sections, allowing users to switch views without leaving the page. Built on the Foundation BuildingBlocks/Tabs primitive."
    />

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>Tabs</strong> and <strong>Tab</strong> components from{' '}
        <code>@mui/material</code>. <code>MuiTabs</code> provides the accessible tab list container
        with <code>role="tablist"</code>, keyboard navigation (arrow keys), and active-tab tracking.
        Each individual tab is a <code>MuiTab</code> with <code>role="tab"</code> and proper{' '}
        <code>aria-selected</code> / <code>aria-controls</code> attributes. MUI's scrollable tabs
        and indicator behaviour are used as a foundation — the NPX visual layer (underline colour,
        contained border, dark theme, count badges) is applied entirely via CSS Modules and the{' '}
        <code>--tab-*</code> token family, overriding MUI's default indicator.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base imports\nimport MuiTabs from '@mui/material/Tabs';\nimport MuiTab from '@mui/material/Tab';\n\n// BuildingBlocks/Tabs renders:\n<MuiTabs value={activeTab} onChange={handleChange} className={styles.tabs}>\n  {items.map(item => (\n    <MuiTab key={item.id} value={item.id} label={item.label} className={styles.tab} />\n  ))}\n</MuiTabs>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        The Tabs component renders a horizontal strip of tab items. Each tab
        item displays a leading icon, a text label, an optional trailing
        icon, and an optional badge count. Four visual types are available —
        two underline variants and two contained (bordered-box) variants —
        all responsive across small, default, and large sizes.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={lightWrap}>
            <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Tab strip',
            token: '--tab-*',
            description: 'Horizontal flex container holding all tab items.',
          },
          {
            id: 2,
            name: 'Leading icon',
            token: '--tab-icon-size',
            description: 'Optional account/person icon shown before the label.',
          },
          {
            id: 3,
            name: 'Label',
            token: '--tab-font-size, --tab-font-family',
            description: 'The text that identifies the tab\'s content section.',
          },
          {
            id: 4,
            name: 'Trailing icon',
            token: '--tab-icon-size',
            description: 'Optional arrow-right or chevron-down icon.',
          },
          {
            id: 5,
            name: 'Badge',
            token: '--tab-default-badge-bg, --tab-badge-size',
            description: 'Optional rounded count bubble (e.g. 7 unread items).',
          },
          {
            id: 6,
            name: 'Underline indicator',
            token: '--tab-line-width, --tab-line-color-default',
            description: 'Active-state underline for default and secondary types.',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Types">
      <DocsTemplate.Subsection title="Default (underline — blue active)">
        <DocsTemplate.BodyText>
          Active tab is highlighted with a sky-blue underline indicator. Use for primary navigation.
        </DocsTemplate.BodyText>
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Secondary (underline — dark active)">
        <DocsTemplate.BodyText>
          Active tab uses a dark/charcoal underline. Use for secondary or nested navigation.
        </DocsTemplate.BodyText>
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="secondary" size="default" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Contained (bordered box — light theme)">
        <DocsTemplate.BodyText>
          Each tab is a bordered box. The active tab fills with a solid blue background and white text.
        </DocsTemplate.BodyText>
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab1" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dark Contained (bordered box — dark theme)">
        <DocsTemplate.BodyText>
          A contained variant for dark backgrounds. The active tab uses a lighter highlight on dark.
        </DocsTemplate.BodyText>
        <div style={darkWrap}>
          <Tabs items={SAMPLE_ITEMS} type="dark-contained" size="default" activeId="tab1" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: (
              <div style={lightWrap}>
                <Tabs items={SAMPLE_ITEMS} type="default" size="small" activeId="tab2" />
              </div>
            ),
          },
          {
            label: 'Default',
            children: (
              <div style={lightWrap}>
                <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />
              </div>
            ),
          },
          {
            label: 'Large',
            children: (
              <div style={lightWrap}>
                <Tabs items={SAMPLE_ITEMS} type="default" size="large" activeId="tab2" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="States">
      <DocsTemplate.Subsection title="Default / Active / Disabled">
        <DocsTemplate.BodyText>
          Tab item 1 is in default state, item 2 is active, item 4 is disabled.
        </DocsTemplate.BodyText>
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="With Dropdown indicator">
        <DocsTemplate.BodyText>
          Tabs can display a chevron-down trailing icon to indicate a dropdown menu is available.
        </DocsTemplate.BodyText>
        <div style={lightWrap}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Icon &amp; Badge Options">
      <DocsTemplate.Subsection title="With leading icon, trailing icon, and badge (default)">
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab1" showLeadingIcon showTrailingIcon showBadge />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without badge">
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab1" showBadge={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without leading icon">
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab1" showLeadingIcon={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without trailing icon">
        <div style={lightWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab1" showTrailingIcon={false} />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--tab-font-family', description: 'Font family for tab labels (--brand-font-primary)' },
          { name: '--tab-font-weight', description: 'Font weight for tab labels (--global-type-weight-light)' },
          { name: '--tab-focus-ring-color', description: 'Focus outline colour (--global-color-primary-blue-blue-400)' },
          { name: '--tab-underline-track-color', description: 'Colour of the inactive underline track (--global-color-neutral-gray-200)' },
          { name: '--tab-default-line-active', description: 'Active underline colour for default type (--global-color-primary-sky-blue)' },
          { name: '--tab-secondary-line-active', description: 'Active underline colour for secondary type (--global-color-neutral-gray-800)' },
          { name: '--tab-contained-bg-active', description: 'Active background for contained tabs (--global-color-primary-blue-blue-500)' },
          { name: '--tab-contained-text-active', description: 'Active text colour for contained tabs (--global-color-base-white)' },
          { name: '--tab-dark-bg-default', description: 'Dark-contained background (--global-color-neutral-gray-700)' },
          { name: '--tab-dark-text-default', description: 'Dark-contained text colour (--global-color-neutral-gray-200)' },
          { name: '--tab-default-badge-bg', description: 'Default badge background (--global-color-primary-sky-blue-100)' },
          { name: '--tab-contained-radius', description: 'Border radius for contained tabs (--global-spacing-radius-6px)' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="One active tab at a time">
          Only one tab should be active per strip. Use controlled state (activeId) to manage
          which tab is selected and update it via the onTabChange callback.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistent icon and badge usage">
          If icons or badges are shown, apply them consistently across all tabs in a strip.
          Mixing tabs with and without icons creates visual imbalance.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Choose the right type">
          Use default/secondary underline tabs for page-level navigation. Use contained tabs
          when tabs sit inside a card or panel with a visible background.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={lightWrap}>
              <Tabs items={SAMPLE_ITEMS.slice(0, 3)} type="default" size="default" activeId="tab1" />
            </div>
          ),
          description: 'Use tabs to switch between related views at the same hierarchy level.',
        }}
        dontItem={{
          icon: (
            <div style={lightWrap}>
              <Tabs
                items={[
                  { id: 'a', label: 'Tab label' },
                  { id: 'b', label: 'Tab label' },
                ]}
                type="default"
                size="default"
                activeId="a"
                showLeadingIcon={false}
                showTrailingIcon={false}
              />
            </div>
          ),
          description: "Don't mix tab types or skip icons inconsistently across a single tab strip.",
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
