import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';

// ─── Sample data ─────────────────────────────────────────────────────────────

const SAMPLE_ITEMS: TabItem[] = [
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

// ─── Wrapper styles ───────────────────────────────────────────────────────────

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const darkWrap: React.CSSProperties = {
  ...previewWrap,
  background: 'var(--global-color-neutral-gray-800)',
};

// ─── Docs component ───────────────────────────────────────────────────────────

export const TabsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Tabs"
      subtitle="Navigation tabs with underline or contained variants, three sizes, and optional badge counts."
    />

    <DocsTemplate.BodyText>
      The <strong>Tabs</strong> component is a horizontal navigation strip. Each tab item is
      structured as a column — a label row (leading icon + label text + trailing icon + badge),
      a small spacer, and an underline indicator line (for underline types). Clicking a tab marks
      it as active and calls the <code>onTabChange</code> callback.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>Tabs</strong> and <strong>Tab</strong> components. The outer tab
        strip uses <code>MuiTabs</code> (<code>@mui/material/Tabs</code>), which provides{' '}
        <code>role="tablist"</code>, keyboard navigation (left/right arrow keys), active-tab
        tracking, and accessible <code>aria-selected</code> attributes. Each individual tab item
        is a <code>MuiTab</code> (<code>@mui/material/Tab</code>), which provides{' '}
        <code>role="tab"</code> and proper focus management. MUI's default indicator and styling
        are fully overridden; the NPX underline colour, contained border, dark theme, badge
        counts, and dropdown chevron are applied via CSS Modules and the <code>--tab-*</code>{' '}
        token family.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base imports\nimport MuiTabs from '@mui/material/Tabs';\nimport MuiTab from '@mui/material/Tab';\n\n// BuildingBlocks/Tabs:\n<MuiTabs value={activeId} onChange={(_e, v) => onTabChange(v)} className={styles.tabs}>\n  {items.map(item => (\n    <MuiTab key={item.id} value={item.id} label={item.label}\n      className={styles.tab} disabled={item.disabled} />\n  ))}\n</MuiTabs>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ padding: '24px 0' }}>
            <Tabs items={[{ id: 't', label: 'Tab label', count: 7 }]} type="default" size="default" activeId="t" />
          </div>
        }
        parts={[
          { id: 1, name: 'Leading icon', token: '--tab-icon-size-default', description: 'Optional 16 × 16 account icon placed before the label text.' },
          { id: 2, name: 'Label text', token: '--tab-font-size-default, --tab-font-family', description: 'Short descriptive label identifying the tab panel.' },
          { id: 3, name: 'Trailing icon', token: '--tab-icon-size-default', description: 'Arrow-right for navigation, or chevron-down for dropdown tabs.' },
          { id: 4, name: 'Badge', token: '--tab-default-badge-bg', description: 'Circular count indicator. Only shown when count is provided and showBadge is true.' },
          { id: 5, name: 'Spacer', token: '--tab-spacer-height', description: '4px gap between the label row and the underline indicator.' },
          { id: 6, name: 'Line', token: '--tab-line-width, --tab-underline-track-color', description: '2px underline at the base of each tab item. Changes color when active or hovered.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes — <strong>small</strong>, <strong>default</strong>, and <strong>large</strong>. 
        Size scales the font, icons, badge, and internal padding.
      </DocsTemplate.BodyText>
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: <Tabs items={SAMPLE_ITEMS} type="default" size="small" activeId="tab2" />,
          },
          {
            label: 'Default',
            children: <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />,
          },
          {
            label: 'Large',
            children: <Tabs items={SAMPLE_ITEMS} type="default" size="large" activeId="tab2" />,
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Types ── */}
    <DocsTemplate.Section title="Types">
      <DocsTemplate.Subsection title="Default (underline, blue indicator)">
        <DocsTemplate.BodyText>
          The default type renders an underline indicator at the bottom of each tab. The active
          tab displays a blue indicator line. Used for primary page-level navigation.
        </DocsTemplate.BodyText>
        <div style={previewWrap}>
          <Tabs items={SAMPLE_ITEMS} type="default" size="small" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="default" size="default" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="default" size="large" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Secondary (underline, dark indicator)">
        <DocsTemplate.BodyText>
          The secondary type uses a dark charcoal underline for the active state, alongside a
          sky-blue badge for the default state. Suitable for secondary navigation contexts.
        </DocsTemplate.BodyText>
        <div style={previewWrap}>
          <Tabs items={SAMPLE_ITEMS} type="secondary" size="small" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="secondary" size="default" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="secondary" size="large" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Contained (bordered box, light theme)">
        <DocsTemplate.BodyText>
          Each tab is enclosed in a rounded bordered box. Inactive tabs show a white background
          with a blue border. The active state fills the box with solid blue. Hover transitions
          to a filled state. Use for section switching on light backgrounds.
        </DocsTemplate.BodyText>
        <div style={previewWrap}>
          <Tabs items={SAMPLE_ITEMS} type="contained" size="small" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="contained" size="default" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="contained" size="large" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dark Contained (bordered box, dark theme)">
        <DocsTemplate.BodyText>
          The dark-contained variant uses a navy/charcoal fill for all states. Designed for use
          on dark backgrounds such as navy headers or dark sidebars.
        </DocsTemplate.BodyText>
        <div style={darkWrap}>
          <Tabs items={SAMPLE_ITEMS} type="dark-contained" size="small" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="dark-contained" size="default" activeId="tab2" />
          <Tabs items={SAMPLE_ITEMS} type="dark-contained" size="large" activeId="tab2" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Dropdown ── */}
    <DocsTemplate.Section title="Dropdown indicator">
      <DocsTemplate.BodyText>
        Individual tabs can show a <strong>chevron-down</strong> icon instead of the arrow-right by
        setting <code>dropdown: true</code> on the tab item. This signals that the tab opens a
        sub-menu or dropdown panel rather than navigating to a new section.
      </DocsTemplate.BodyText>
      <div style={previewWrap}>
        <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
        <Tabs items={DROPDOWN_ITEMS} type="secondary" size="default" activeId="tab1" />
        <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
      </div>
    </DocsTemplate.Section>

    {/* ── Dos & Don'ts ── */}
    <DocsTemplate.Section title="Usage guidelines">
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Tabs items={[{ id: 't1', label: 'Overview', count: 3 }, { id: 't2', label: 'Details' }]} type="default" size="default" activeId="t1" />,
          description: 'Use clear, short labels. Keep the active state clearly distinguished with the underline indicator or filled state.',
        }}
        dontItem={{
          icon: <Tabs items={[{ id: 't1', label: 'Overview' }, { id: 't2', label: 'Details' }]} type="contained" size="default" activeId="t1" />,
          description: "Don't mix underline and contained tab types in the same navigation context.",
        }}
      />
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Clarity">
          Each tab label must immediately communicate the content behind it. Avoid vague labels
          like "More" or "Other" without additional context.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistency">
          All tabs in a strip must share the same type, size, and badge visibility.
          Never mix types within a single navigation row.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Accessibility">
          The strip uses <code>role="tablist"</code> and each item uses <code>role="tab"</code>
          with <code>aria-selected</code> and <code>aria-disabled</code> attributes. Pair tabs
          with visible panel content.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    {/* ── Token table ── */}
    <DocsTemplate.Section title="Design tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--tab-font-family', description: 'Font family for all tab labels.' },
          { name: '--tab-font-weight', description: 'Font weight for inactive tab labels (light/300).' },
          { name: '--tab-letter-spacing', description: 'Letter spacing applied to all tab text.' },
          { name: '--tab-font-size-sm / -default / -lg', description: 'Font size per size scale.' },
          { name: '--tab-line-height-sm / -default / -lg', description: 'Line height per size scale.' },
          { name: '--tab-icon-size-sm / -default / -lg', description: 'Leading and trailing icon dimensions per size.' },
          { name: '--tab-inner-gap-sm / -default / -lg', description: 'Gap between icon, label text, and trailing icon.' },
          { name: '--tab-label-pl-default / pr-default', description: 'Left and right outer padding of the label row.' },
          { name: '--tab-spacer-height', description: 'Vertical gap between the label row and the underline indicator (4px).' },
          { name: '--tab-line-width', description: 'Thickness of the underline indicator line (2px).' },
          { name: '--tab-underline-track-color', description: 'Default (inactive) underline line color — gray-200.' },
          { name: '--tab-default-line-active', description: 'Active underline indicator color for type=default (sky-blue).' },
          { name: '--tab-secondary-line-active', description: 'Active underline indicator color for type=secondary (dark).' },
          { name: '--tab-contained-bg-default', description: 'Background for contained tab in default/inactive state.' },
          { name: '--tab-contained-border-default', description: 'Border color for contained tab (inactive).' },
          { name: '--tab-contained-bg-active', description: 'Background for contained tab in active state (solid blue).' },
          { name: '--tab-dark-bg-default', description: 'Background for dark-contained tab in default state.' },
          { name: '--tab-default-badge-bg', description: 'Badge background for type=default tabs (sky-blue tint).' },
          { name: '--tab-secondary-badge-bg', description: 'Badge background for type=secondary tabs (sky-blue).' },
          { name: '--tab-contained-radius', description: 'Border-radius of contained tab boxes (6px).' },
          { name: '--tab-badge-size-default', description: 'Minimum width and height of the badge circle.' },
          { name: '--tab-focus-ring-color', description: 'Outline color shown on keyboard focus.' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default TabsDocs;
