import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';

// ─── Sample data ─────────────────────────────────────────────────────────────

const SAMPLE_TABS: TabItem[] = [
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

// ─── Helper wrapper ───────────────────────────────────────────────────────────

const previewRow: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const darkRow: React.CSSProperties = {
  ...previewRow,
  background: 'var(--global-color-neutral-gray-800)',
};

// ─── Anatomy preview component ────────────────────────────────────────────────

const AnatomyPreview: React.FC = () => (
  <div style={{ padding: '24px 0' }}>
    <Tabs tabs={SAMPLE_TABS.slice(0, 1)} size="default" variant="pill" appearance="default" activeTab="tab1" />
  </div>
);

// ─── Docs component ───────────────────────────────────────────────────────────

export const TabsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Tabs"
      subtitle="Navigation tabs supporting underline and pill variants, three sizes, and multiple color appearances."
    />

    <DocsTemplate.BodyText>
      The <strong>Tabs</strong> component provides a standard tab navigation pattern. It supports
      two visual variants — an <strong>underline</strong> style for inline or page-level navigation,
      and a <strong>pill</strong> style for grouped actions or section switching. Each tab can display
      an optional leading icon, trailing icon or dropdown indicator, and a numeric badge count.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={<AnatomyPreview />}
        parts={[
          { id: 1, name: 'Leading icon', token: '--tab-icon-size-default', description: 'Optional 16 × 16 icon placed before the label.' },
          { id: 2, name: 'Label', token: '--tab-font-size-default, --tab-font-family', description: 'Short, descriptive text identifying the tab panel.' },
          { id: 3, name: 'Trailing icon', token: '--tab-icon-size-default', description: 'Arrow-right (navigation) or chevron-down (dropdown trigger).' },
          { id: 4, name: 'Badge', token: '--tab-badge-bg, --tab-badge-color', description: 'Circular numeric indicator showing counts or notifications.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes are available — <strong>small</strong>, <strong>default</strong>, and <strong>large</strong>. 
        Size controls the tab height, font size, and inner padding.
      </DocsTemplate.BodyText>
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: (
              <Tabs tabs={SAMPLE_TABS} size="small" variant="pill" appearance="default" activeTab="tab1" />
            ),
          },
          {
            label: 'Default',
            children: (
              <Tabs tabs={SAMPLE_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
            ),
          },
          {
            label: 'Large',
            children: (
              <Tabs tabs={SAMPLE_TABS} size="large" variant="pill" appearance="default" activeTab="tab1" />
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Variants ── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.Subsection title="Underline">
        <DocsTemplate.BodyText>
          The underline variant shows a subtle bottom indicator on the active tab. Used for primary
          page-level navigation where visual weight should remain minimal.
        </DocsTemplate.BodyText>
        <div style={previewRow}>
          <Tabs tabs={SAMPLE_TABS} size="small" variant="underline" activeTab="tab1" />
          <Tabs tabs={SAMPLE_TABS} size="default" variant="underline" activeTab="tab2" />
          <Tabs tabs={SAMPLE_TABS} size="large" variant="underline" activeTab="tab3" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Pill — Default (Blue outlined)">
        <DocsTemplate.BodyText>
          The pill default appearance renders each tab with a blue border and very light blue
          background. Active state fills the tab with a solid blue. Suitable for light backgrounds.
        </DocsTemplate.BodyText>
        <div style={previewRow}>
          <Tabs tabs={SAMPLE_TABS} size="small" variant="pill" appearance="default" activeTab="tab1" />
          <Tabs tabs={SAMPLE_TABS} size="default" variant="pill" appearance="default" activeTab="tab2" />
          <Tabs tabs={SAMPLE_TABS} size="large" variant="pill" appearance="default" activeTab="tab3" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Pill — Alt (Light blue tint)">
        <DocsTemplate.BodyText>
          The alt appearance is a slightly more saturated blue-tint variant, ideal for use on
          white or off-white surfaces where stronger contrast is needed.
        </DocsTemplate.BodyText>
        <div style={previewRow}>
          <Tabs tabs={SAMPLE_TABS} size="small" variant="pill" appearance="alt" activeTab="tab1" />
          <Tabs tabs={SAMPLE_TABS} size="default" variant="pill" appearance="alt" activeTab="tab2" />
          <Tabs tabs={SAMPLE_TABS} size="large" variant="pill" appearance="alt" activeTab="tab3" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Pill — Dark (Navy / charcoal)">
        <DocsTemplate.BodyText>
          The dark appearance is designed for use on dark or navy backgrounds. Tabs render with a
          charcoal fill, and the active tab uses a deeper shade.
        </DocsTemplate.BodyText>
        <div style={darkRow}>
          <Tabs tabs={SAMPLE_TABS} size="small" variant="pill" appearance="dark" activeTab="tab1" />
          <Tabs tabs={SAMPLE_TABS} size="default" variant="pill" appearance="dark" activeTab="tab2" />
          <Tabs tabs={SAMPLE_TABS} size="large" variant="pill" appearance="dark" activeTab="tab3" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Dropdown tabs ── */}
    <DocsTemplate.Section title="Dropdown indicator">
      <DocsTemplate.BodyText>
        Individual tabs can show a <strong>chevron-down</strong> icon instead of the arrow-right,
        signaling that the tab triggers a dropdown or sub-menu. Set <code>dropdown: true</code> on
        the individual tab item.
      </DocsTemplate.BodyText>
      <div style={previewRow}>
        <Tabs tabs={DROPDOWN_TABS} size="default" variant="underline" activeTab="tab1" />
        <Tabs tabs={DROPDOWN_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
      </div>
    </DocsTemplate.Section>

    {/* ── Dos & Don'ts ── */}
    <DocsTemplate.Section title="Usage guidelines">
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Tabs tabs={[{ id: 't1', label: 'Overview', count: 3 }, { id: 't2', label: 'Details' }]} size="default" variant="pill" appearance="default" activeTab="t1" />,
          description: 'Use clear, concise labels. Limit each row to 6 or fewer tabs with a shared visual style.',
        }}
        dontItem={{
          icon: <Tabs tabs={[{ id: 't1', label: 'Overview' }, { id: 't2', label: 'Details' }]} size="default" variant="underline" activeTab="t1" />,
          description: "Don't mix underline and pill tab styles in the same navigation context.",
        }}
      />
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Clarity">
          Each tab label must immediately communicate the content behind it. Avoid vague labels
          like "More" or "Other" without disambiguation.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistency">
          All tabs within a single group must share the same size, variant, and appearance.
          Mixing visual styles within a tab list breaks visual hierarchy.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Accessibility">
          The component uses semantic <code>role="tablist"</code> and <code>role="tab"</code>
          with <code>aria-selected</code> and <code>aria-disabled</code> attributes. Always pair
          tabs with their associated panel content using <code>aria-controls</code>.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    {/* ── Token table ── */}
    <DocsTemplate.Section title="Design tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--tab-font-family', description: 'Font family used across all tab labels.' },
          { name: '--tab-font-weight', description: 'Default (inactive) font weight.' },
          { name: '--tab-font-weight-active', description: 'Font weight for the active/selected tab.' },
          { name: '--tab-letter-spacing', description: 'Letter spacing applied to all tab labels.' },
          { name: '--tab-disabled-opacity', description: 'Opacity applied to disabled tab items (0.45).' },
          { name: '--tab-height-sm', description: 'Minimum height for the small tab size.' },
          { name: '--tab-height-default', description: 'Minimum height for the default tab size.' },
          { name: '--tab-height-lg', description: 'Minimum height for the large tab size.' },
          { name: '--tab-font-size-sm', description: 'Font size for the small tab (maps to label-xs).' },
          { name: '--tab-font-size-default', description: 'Font size for the default tab (maps to label).' },
          { name: '--tab-font-size-lg', description: 'Font size for the large tab (maps to label-lg).' },
          { name: '--tab-padding-h-default', description: 'Horizontal padding for default size tab.' },
          { name: '--tab-padding-v-default', description: 'Vertical padding for default size tab.' },
          { name: '--tab-inner-gap-default', description: 'Gap between icon, label, and badge.' },
          { name: '--tab-pill-radius', description: 'Border-radius for pill variant tabs (4px).' },
          { name: '--tab-pill-border-width', description: 'Border width for pill tabs (1px).' },
          { name: '--tab-underline-track-color', description: 'Color of the base line in underline variant.' },
          { name: '--tab-underline-indicator-color-active', description: 'Color of the underline indicator when active.' },
          { name: '--tab-pill-default-bg', description: 'Background for default pill tab (inactive).' },
          { name: '--tab-pill-default-border', description: 'Border color for default pill tab.' },
          { name: '--tab-pill-default-bg-active', description: 'Background for default pill tab (active).' },
          { name: '--tab-pill-dark-bg', description: 'Background for dark-appearance pill tab.' },
          { name: '--tab-badge-bg', description: 'Default badge background color.' },
          { name: '--tab-badge-color', description: 'Default badge text/icon color.' },
          { name: '--tab-badge-min-size', description: 'Minimum size (width and height) of the badge.' },
          { name: '--tab-focus-ring-color', description: 'Outline color shown on keyboard focus.' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default TabsDocs;
