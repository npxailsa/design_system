import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Milestones } from './Milestones';
import type { MilestonesSize } from './Milestones';

/* ── Demo helpers ────────────────────────────────────────────────────────── */

const stack: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-12px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const ALL_VALUES   = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const ALL_SIZES: MilestonesSize[] = ['sm', 'default', 'lg'];

export const MilestonesDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Milestones"
      subtitle="A dot-based milestone progress indicator. Each dot represents an equal step toward completion. Used to communicate discrete progress in onboarding flows, multi-step processes, or task trackers."
    />

    <DocsTemplate.BodyText>
      <strong>Milestones</strong> is an Atom-level loader primitive. It renders a horizontal
      row of circular dots — filled dots indicate completed steps, unfilled dots indicate
      remaining steps. By default 10 dots are displayed, each representing 10% of progress.
      An optional percentage label is shown to the right. Three size variants control dot
      diameter and spacing. All colours and dimensions are fully token-driven.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ ...stack, minWidth: '200px', width: '100%', maxWidth: '400px' }}>
            <Milestones value={0}   size="default" />
            <Milestones value={50}  size="default" />
            <Milestones value={100} size="default" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Active dot',
            token: '--milestones-dot-active-bg',
            description: 'Filled dot indicating a completed milestone step. Colour: primary-sky-blue (#0ba7ea).',
          },
          {
            id: 2,
            name: 'Inactive dot',
            token: '--milestones-dot-inactive-bg',
            description: 'Unfilled dot indicating a remaining milestone step. Colour: neutral-gray-300 (#d2d5da).',
          },
          {
            id: 3,
            name: 'Label',
            token: '--milestones-label-color',
            description: 'Optional percentage text displayed to the right of the dot track. Colour: neutral-gray-700 (#374151). Weight varies by size.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Size / Small ── */}
    <DocsTemplate.Section
      title="Size / Small"
      subtitle="8px dots with 4px gap. Compact milestone indicator for dense layouts."
    >
      <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
        {ALL_VALUES.map((v) => (
          <Milestones key={v} value={v} size="sm" />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Size / Default ── */}
    <DocsTemplate.Section
      title="Size / Default"
      subtitle="12px dots with 6px gap. Standard milestone indicator for most use cases. Label is semibold for added legibility."
    >
      <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
        {ALL_VALUES.map((v) => (
          <Milestones key={v} value={v} size="default" />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Size / Large ── */}
    <DocsTemplate.Section
      title="Size / Large"
      subtitle="20px dots with 8px gap. High-visibility milestone indicator for prominent status displays."
    >
      <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
        {ALL_VALUES.map((v) => (
          <Milestones key={v} value={v} size="lg" />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All sizes side by side ── */}
    <DocsTemplate.Section
      title="Size / All (Side by Side)"
      subtitle="All three size variants at every 10% step for direct comparison."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
            {ALL_VALUES.map((v) => (
              <Milestones key={v} value={v} size={size} />
            ))}
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Without label ── */}
    <DocsTemplate.Section
      title="Without Label"
      subtitle="Use showLabel={false} when a label is supplied externally or space is constrained."
    >
      <div style={{ minWidth: '200px', width: '100%', maxWidth: '400px', ...stack }}>
        {ALL_VALUES.map((v) => (
          <Milestones key={v} value={v} showLabel={false} />
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Custom steps ── */}
    <DocsTemplate.Section
      title="Custom Step Count"
      subtitle="Use the steps prop to control the number of milestone dots (default 10). Useful for tracking explicit task counts."
    >
      <div style={{ minWidth: '200px', width: '100%', maxWidth: '480px', ...stack }}>
        <Milestones value={0}   steps={5} size="default" />
        <Milestones value={20}  steps={5} size="default" />
        <Milestones value={40}  steps={5} size="default" />
        <Milestones value={60}  steps={5} size="default" />
        <Milestones value={80}  steps={5} size="default" />
        <Milestones value={100} steps={5} size="default" />
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Component Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--milestones-dot-active-bg',   description: 'Active (completed) dot colour — var(--global-color-primary-sky-blue) #0BA7EA.' },
            { name: '--milestones-dot-inactive-bg', description: 'Inactive (remaining) dot colour — var(--global-color-neutral-gray-300) #D2D5DA.' },
            { name: '--milestones-label-color',      description: 'Label text colour — var(--global-color-neutral-gray-700) #374151.' },
            { name: '--milestones-gap-sm',           description: 'Gap between dots for size sm — var(--global-spacing-sizing-4px) 4px.' },
            { name: '--milestones-gap-default',      description: 'Gap between dots for size default — var(--global-spacing-sizing-6px) 6px.' },
            { name: '--milestones-gap-lg',           description: 'Gap between dots for size lg — var(--global-spacing-sizing-8px) 8px.' },
            { name: '--progress-dot-size-sm',        description: 'Dot diameter for size sm — var(--global-spacing-sizing-8px) 8px.' },
            { name: '--progress-dot-size-default',   description: 'Dot diameter for size default — var(--global-spacing-sizing-12px) 12px.' },
            { name: '--progress-dot-size-lg',        description: 'Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px.' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Props Reference ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'value',     description: 'number (0–100) — required. Current progress percentage. Values outside 0–100 are clamped.' },
          { name: 'size',      description: '"sm" | "default" | "lg" — dot size and spacing. Default: "default".' },
          { name: 'showLabel', description: 'boolean — whether to render the percentage label to the right. Default: true.' },
          { name: 'steps',     description: 'number — total number of milestone dots to display. Default: 10.' },
          { name: 'className', description: 'string — optional CSS class for layout overrides.' },
          { name: 'ariaLabel', description: 'string — accessible label for screen readers. Default: "Milestone progress".' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { Milestones } from './Milestones';

// Default — 10 dots, medium size, with percentage label
<Milestones value={60} />

// Small, no label
<Milestones value={40} size="sm" showLabel={false} />

// Large with accessible label
<Milestones value={75} size="lg" ariaLabel="Onboarding progress" />

// Custom step count — 5 dots, each = 20%
<Milestones value={60} steps={5} />

// Zero progress
<Milestones value={0} />

// Fully complete
<Milestones value={100} />`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Value is always a percentage">
          The <code>value</code> prop is always 0–100. The number of filled dots is
          computed as <code>Math.round((value / 100) × steps)</code>, so a value of 50
          with 10 steps fills exactly 5 dots.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Dots, not bars, for discrete steps">
          Use <strong>Milestones</strong> when progress is measured in discrete, equal
          stages (e.g., onboarding steps, survey completion). For continuous progress or
          file uploads, use <strong>ProgressBar</strong> instead.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match size to context">
          Use <strong>sm</strong> inside compact list rows or data tables. Use{' '}
          <strong>default</strong> for task trackers and onboarding cards. Use{' '}
          <strong>lg</strong> for prominent dashboard metrics or hero sections.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Provide a meaningful ariaLabel">
          The default <code>ariaLabel="Milestone progress"</code> is generic. Set a
          descriptive label such as <code>"Onboarding step 3 of 5"</code> for screen
          reader users.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default MilestonesDocs;
