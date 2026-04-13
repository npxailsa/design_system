import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { ProgressDot } from './ProgressDot';
import type { ProgressDotState, ProgressDotSize } from './ProgressDot';

/* ── Demo helpers ──────────────────────────────────────────────────────── */

const wrap: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const rowLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '56px',
  flexShrink: 0,
};

const ALL_STATES: ProgressDotState[] = ['inactive', 'active', 'error', 'pending'];
const ALL_SIZES:  ProgressDotSize[]  = ['sm', 'default', 'lg'];

export const ProgressDotDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="ProgressDot"
      subtitle="A compact circular indicator for step and progress patterns. Each dot communicates a single step's status — inactive, active, error, or pending — through colour and fill."
    />

    <DocsTemplate.BodyText>
      <strong>ProgressDot</strong> is a Foundation-level building block used to compose
      step indicators, progress trackers, and pagination controls. It renders a single
      circle whose appearance is fully driven by design tokens — no hardcoded colours or
      sizes. Three sizes (<code>sm</code>, <code>default</code>, <code>lg</code>) and four
      states (<code>inactive</code>, <code>active</code>, <code>error</code>,{' '}
      <code>pending</code>) cover every step-progress use case.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        The ProgressDot is a <strong>pure React component</strong> with no MUI base. It renders
        as a plain <code>&lt;span&gt;</code> element — a simple circle whose appearance is
        entirely controlled by CSS Modules and the <code>--progress-dot-*</code> token family.
        No MUI component is needed for a static circular indicator; keeping it dependency-free
        ensures zero style conflicts and maximum portability within the design system.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// No MUI base import required\n// ProgressDot renders as a plain <span>:\n<span\n  className={styles['progress-dot']}\n  data-state={state}\n  data-size={size}\n  aria-hidden="true"\n />`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ ...wrap, alignItems: 'center' }}>
            {ALL_STATES.map((s) => (
              <ProgressDot key={s} state={s} size="default" />
            ))}
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Inactive dot',
            token: '--progress-dot-inactive-bg',
            description: 'Solid gray-filled circle. Represents a step that has been visited or completed but is not the current focus.',
          },
          {
            id: 2,
            name: 'Active dot',
            token: '--progress-dot-active-bg',
            description: 'Solid sky-blue filled circle. Represents the current step or selected position.',
          },
          {
            id: 3,
            name: 'Error dot',
            token: '--progress-dot-error-border',
            description: 'White fill with red border. Represents a step with a validation error or blocking issue.',
          },
          {
            id: 4,
            name: 'Pending dot',
            token: '--progress-dot-pending-bg, --progress-dot-pending-border',
            description: 'Very light fill with a faint border. Represents a step that has not yet been reached.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── States ── */}
    <DocsTemplate.Section
      title="States"
      subtitle="Four states communicate different positions within a progress or step flow."
    >
      <div style={{ ...grid, gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
        {ALL_STATES.map((s) => (
          <div
            key={s}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}
          >
            <ProgressDot state={s} size="default" />
            <span style={{ fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', textTransform: 'capitalize' }}>{s}</span>
          </div>
        ))}
      </div>
      <DocsTemplate.BodyText>
        <strong>inactive</strong> — a past or visited step that is not currently active.{' '}
        <strong>active</strong> — the current step, highlighted in sky blue.{' '}
        <strong>error</strong> — a step with a blocking issue; shown with a red border.{' '}
        <strong>pending</strong> — a future step not yet reached.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section
      title="Sizes"
      subtitle="Three sizes scale the dot for different density contexts."
    >
      <div style={{ ...wrap, alignItems: 'flex-end' }}>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
            <ProgressDot state="active" size={size} />
            <span style={{ fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>{size}</span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Full Matrix ── */}
    <DocsTemplate.Section
      title="Size × State Matrix"
      subtitle="All sizes across all four states for visual QA."
    >
      <div style={{ ...grid, gridTemplateColumns: 'auto repeat(4, 1fr)', alignItems: 'center' }}>
        {/* Header row */}
        <span style={rowLabelStyle} />
        {ALL_STATES.map((s) => (
          <span
            key={s}
            style={{ ...rowLabelStyle, minWidth: 'auto', textAlign: 'center', textTransform: 'capitalize' }}
          >
            {s}
          </span>
        ))}
        {/* Size rows */}
        {ALL_SIZES.map((size) => (
          <React.Fragment key={size}>
            <span style={rowLabelStyle}>{size}</span>
            {ALL_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', justifyContent: 'center' }}>
                <ProgressDot size={size} state={state} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── In Context ── */}
    <DocsTemplate.Section
      title="In Context"
      subtitle="How ProgressDot dots compose into a multi-step progress indicator."
    >
      <DocsTemplate.Subsection title="In Context / Step Progress">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--global-spacing-sizing-4px)',
            padding: 'var(--global-spacing-sizing-24px)',
            background: 'var(--global-color-base-white)',
            borderRadius: 'var(--global-spacing-radius-8px)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            minWidth: '200px',
            width: '100%',
          }}
        >
          <ProgressDot state="inactive" size="default" />
          <ProgressDot state="active"   size="default" />
          <ProgressDot state="error"    size="default" />
          <ProgressDot state="pending"  size="default" />
          <ProgressDot state="pending"  size="default" />
        </div>
        <DocsTemplate.BodyText>
          A typical five-step flow: one completed, one active, one with an error, and two pending.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="In Context / Small Pagination">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--global-spacing-sizing-4px)',
            padding: 'var(--global-spacing-sizing-16px)',
            background: 'var(--global-color-base-white)',
            borderRadius: 'var(--global-spacing-radius-8px)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            minWidth: '200px',
            width: '100%',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <ProgressDot key={i} state={i === 1 ? 'active' : 'pending'} size="sm" />
          ))}
        </div>
        <DocsTemplate.BodyText>
          Small-size dots used for carousel or tab pagination. The active page is highlighted.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Size Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--progress-dot-size-sm',      description: 'Dot diameter for size sm — var(--global-spacing-sizing-8px) 8px.' },
            { name: '--progress-dot-size-default',  description: 'Dot diameter for size default — var(--global-spacing-sizing-12px) 12px.' },
            { name: '--progress-dot-size-lg',       description: 'Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px.' },
            { name: '--progress-dot-border-sm',     description: 'Border width for sm — var(--global-spacing-stroke-1px) 1px.' },
            { name: '--progress-dot-border-default',description: 'Border width for default — var(--global-spacing-stroke-2px) 2px.' },
            { name: '--progress-dot-border-lg',     description: 'Border width for lg — var(--global-spacing-stroke-2px) 2px.' },
          ]}
        />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="State Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--progress-dot-inactive-bg',     description: 'Inactive fill — var(--global-color-neutral-gray-400) #9CA3AF.' },
            { name: '--progress-dot-active-bg',       description: 'Active fill — var(--global-color-primary-sky-blue) #0BA7EA.' },
            { name: '--progress-dot-error-bg',        description: 'Error fill — var(--global-color-base-white) #FFFFFF.' },
            { name: '--progress-dot-error-border',    description: 'Error border — var(--global-color-status-red) #CE2031.' },
            { name: '--progress-dot-pending-bg',      description: 'Pending fill — var(--global-color-neutral-gray-100) #F3F4F6.' },
            { name: '--progress-dot-pending-border',  description: 'Pending border — var(--global-color-neutral-gray-300) #D2D5DA.' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Props Reference ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'state',     description: '"inactive" | "active" | "error" | "pending" — visual state of the dot. Default: "inactive".' },
          { name: 'size',      description: '"sm" | "default" | "lg" — dot diameter. Default: "default".' },
          { name: 'className', description: 'string — optional CSS class for layout overrides (margin, flex-shrink, etc.).' },
          { name: 'ariaLabel', description: 'string — accessible label for screen readers. Defaults to "Progress step — {state}".' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { ProgressDot } from './ProgressDot';

// Default inactive dot
<ProgressDot />

// Active (current step)
<ProgressDot state="active" size="default" />

// Error state
<ProgressDot state="error" size="lg" />

// Pending (future step)
<ProgressDot state="pending" size="sm" />

// Composing into a step row
<div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
  <ProgressDot state="inactive" ariaLabel="Step 1 — completed" />
  <ProgressDot state="active"   ariaLabel="Step 2 — in progress" />
  <ProgressDot state="pending"  ariaLabel="Step 3 — pending" />
  <ProgressDot state="pending"  ariaLabel="Step 4 — pending" />
</div>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="One dot, one state">
          Each ProgressDot represents a single step. Never apply multiple states to one dot.
          Compose a row of dots to communicate the full progress flow.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Always label for accessibility">
          The default <code>ariaLabel</code> is generic. Provide a descriptive label such as
          <code>"Step 3 of 5 — active"</code> so screen reader users understand position and status.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match size to context">
          Use <strong>sm</strong> for compact pagination and carousel indicators.
          Use <strong>default</strong> for standard step progress bars.
          Use <strong>lg</strong> for prominent onboarding flows or full-page wizards.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Use tokens, not overrides">
          All colours and dimensions use design tokens. Do not override them with inline styles.
          If a new state colour is needed, add a new token to <code>tokens.css</code>.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default ProgressDotDocs;
