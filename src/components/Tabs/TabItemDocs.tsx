import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { TabItem } from './TabItem';

/**
 * Documentation page for the Atoms / Tabs > TabItem component.
 */
export const TabItemDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Tab Item"
      subtitle="A single pill-style tab button atom used to build tab navigation strips. Tabs allow users to switch between related content sections or views."
    />

    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        The TabItem is the atomic building block of tab navigation. Each item
        can appear in two visual states — inactive (outlined) or active (solid
        filled) — and supports optional leading icon, trailing icon, and a
        numeric badge for counts or notifications. Multiple TabItems compose
        into a full tab strip.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <TabItem label="Tab label" count={7} active />
            <TabItem label="Tab label" count={7} />
            <TabItem label="Tab label" count={7} disabled />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Leading Icon',
            token: '--tab-item-icon-size',
            description: 'Optional icon displayed before the label (account/person icon by default).',
          },
          {
            id: 2,
            name: 'Label',
            token: '--tab-item-font-size, --tab-item-font-family',
            description: 'The text content that identifies the tab destination or category.',
          },
          {
            id: 3,
            name: 'Trailing Icon',
            token: '--tab-item-icon-size',
            description: 'Optional arrow-right or chevron-down icon displayed after the label.',
          },
          {
            id: 4,
            name: 'Badge',
            token: '--tab-item-badge-bg, --tab-item-badge-size',
            description: 'Optional rounded pill showing a numeric count (e.g. notification count).',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: <TabItem label="Tab label" size="small" count={7} />,
          },
          {
            label: 'Default',
            children: <TabItem label="Tab label" size="default" count={7} />,
          },
          {
            label: 'Large',
            children: <TabItem label="Tab label" size="large" count={7} />,
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="States">
      <DocsTemplate.Subsection title="Inactive (Default)">
        <DocsTemplate.BodyText>
          The default state. The tab is outlined with a light blue border and
          background, indicating it is not currently selected.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 12, padding: '16px 0', flexWrap: 'wrap' }}>
          <TabItem label="Tab label" count={7} />
          <TabItem label="Tab label" count={7} size="small" />
          <TabItem label="Tab label" count={7} size="large" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Active (Selected)">
        <DocsTemplate.BodyText>
          The active/selected state. The tab is filled with a solid blue
          background and white text, indicating it is the currently selected tab.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 12, padding: '16px 0', flexWrap: 'wrap' }}>
          <TabItem label="Tab label" count={7} active />
          <TabItem label="Tab label" count={7} size="small" active />
          <TabItem label="Tab label" count={7} size="large" active />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          The tab is not interactive and appears greyed out.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 12, padding: '16px 0', flexWrap: 'wrap' }}>
          <TabItem label="Tab label" count={7} disabled />
          <TabItem label="Tab label" count={7} size="small" disabled />
          <TabItem label="Tab label" count={7} size="large" disabled />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Loading">
        <DocsTemplate.BodyText>
          When the tab content is loading, a spinner replaces the leading icon.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 12, padding: '16px 0', flexWrap: 'wrap' }}>
          <TabItem label="Tab label" loading />
          <TabItem label="Tab label" size="small" loading />
          <TabItem label="Tab label" size="large" loading />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Icon Options">
      <DocsTemplate.Subsection title="With Icons (Default)">
        <div style={{ display: 'flex', gap: 12, padding: '16px 0' }}>
          <TabItem label="Tab label" count={7} showLeadingIcon showTrailingIcon />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without Leading Icon">
        <div style={{ display: 'flex', gap: 12, padding: '16px 0' }}>
          <TabItem label="Tab label" count={7} showLeadingIcon={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without Trailing Icon">
        <div style={{ display: 'flex', gap: 12, padding: '16px 0' }}>
          <TabItem label="Tab label" count={7} showTrailingIcon={false} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="With Dropdown (Chevron)">
        <div style={{ display: 'flex', gap: 12, padding: '16px 0' }}>
          <TabItem label="Tab label" count={7} dropdown />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Without Badge">
        <div style={{ display: 'flex', gap: 12, padding: '16px 0' }}>
          <TabItem label="Tab label" showBadge={false} />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--tab-item-inactive-bg', description: 'Background for inactive state (--global-color-primary-blue-blue-50)' },
          { name: '--tab-item-inactive-border', description: 'Border for inactive state (1px solid --global-color-primary-blue-blue-300)' },
          { name: '--tab-item-inactive-text', description: 'Text/icon color for inactive state (--global-color-secondary-blue-gray)' },
          { name: '--tab-item-hover-bg', description: 'Background on hover (--global-color-primary-blue-blue-100)' },
          { name: '--tab-item-hover-shadow', description: 'Box-shadow on hover (2px 2px 0 0 --global-color-primary-blue-blue-400)' },
          { name: '--tab-item-hover-text', description: 'Text color on hover (--global-color-base-black)' },
          { name: '--tab-item-active-bg', description: 'Background for active state (--global-color-primary-blue-blue-400)' },
          { name: '--tab-item-active-text', description: 'Text/icon color for active state (--global-color-base-white)' },
          { name: '--tab-item-disabled-bg', description: 'Background for disabled state (--global-color-neutral-gray-50)' },
          { name: '--tab-item-disabled-text', description: 'Text/icon color for disabled state (--global-color-neutral-gray-300)' },
          { name: '--tab-item-border-radius', description: 'Border radius of the pill button (--global-spacing-radius-4px)' },
          { name: '--tab-item-focus-ring-color', description: 'Focus outline color (--global-color-primary-blue-blue-400)' },
          { name: '--tab-item-badge-bg', description: 'Resolved badge background (per state)' },
          { name: '--tab-item-badge-color', description: 'Resolved badge text color (per state)' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="One active tab at a time">
          Only one tab should be active at a time within a given tab group.
          The active tab should clearly communicate the current view to the user.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistent icon usage">
          If icons are used in a tab group, all tabs in that group should have
          icons for visual consistency. Avoid mixing tabs with and without icons.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Meaningful badge counts">
          Only show badge counts when the count is actionable or relevant to the
          user&apos;s task. Avoid using badges purely for decoration.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: <TabItem label="Overview" count={5} active />,
          description: 'Use tabs to switch between related content sections at the same level of hierarchy.',
        }}
        dontItem={{
          icon: <TabItem label="Go to Settings page" showLeadingIcon={false} />,
          description: "Don't use tabs for navigation that changes the URL or takes users to a different page — use links instead.",
        }}
      />
      <DocsTemplate.DosDonts
        doItem={{
          icon: <TabItem label="Details" count={3} />,
          description: 'Keep tab labels short and descriptive (1–3 words) so they scan quickly.',
        }}
        dontItem={{
          icon: <TabItem label="All the detailed information in this section" showTrailingIcon={false} showBadge={false} />,
          description: "Don't use long sentences or full paragraphs as tab labels.",
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
