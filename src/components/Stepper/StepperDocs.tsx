import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Stepper } from './Stepper';

/* ── Step data ──────────────────────────────────────────────── */

const mixed4 = [
  { id: 1, label: 'Step one',   state: 'complete' as const },
  { id: 2, label: 'Step two',   state: 'active'   as const },
  { id: 3, label: 'Step three', state: 'default'  as const },
  { id: 4, label: 'Step four',  state: 'default'  as const },
];

const allDefault = [
  { id: 1, label: 'Step one',   state: 'default'  as const },
  { id: 2, label: 'Step two',   state: 'default'  as const },
  { id: 3, label: 'Step three', state: 'default'  as const },
  { id: 4, label: 'Step four',  state: 'default'  as const },
];

const allComplete = [
  { id: 1, label: 'Complete', state: 'complete' as const },
  { id: 2, label: 'Complete', state: 'complete' as const },
  { id: 3, label: 'Complete', state: 'complete' as const },
  { id: 4, label: 'Complete', state: 'complete' as const },
];

const allDisabled = [
  { id: 1, label: 'Step one',   state: 'disabled' as const },
  { id: 2, label: 'Step two',   state: 'disabled' as const },
  { id: 3, label: 'Step three', state: 'disabled' as const },
  { id: 4, label: 'Step four',  state: 'disabled' as const },
];

/* ── Shared styles ──────────────────────────────────────────── */

const PREVIEW: React.CSSProperties = {
  padding: '24px',
  background: 'var(--global-color-neutral-gray-50, #f9fafb)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary, sans-serif)',
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500, #6b7280)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  marginBottom: '8px',
};

/* ── Docs page ───────────────────────────────────────────────── */

const StepperDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Stepper"
      subtitle="A horizontal progress indicator that guides users through a multi-step workflow. Composes StepperSteps and StepperLines building blocks to show numbered circles connected by progress lines."
    />

    {/* Overview */}
    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        The Stepper renders numbered step circles and connector lines interleaved in a horizontal
        layout. It automatically derives each connector's state from adjacent step states — so you
        only need to manage step state in a single array.
      </DocsTemplate.BodyText>
      <div style={PREVIEW}>
        <Stepper steps={mixed4} size="default" />
      </div>
    </DocsTemplate.Section>

    {/* Anatomy */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ padding: '16px' }}>
            <Stepper steps={mixed4} size="default" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Step circle',
            token: 'StepperSteps',
            description: 'Displays the step number or a checkmark when complete. Colour is driven by the step state.',
          },
          {
            id: 2,
            name: 'Step label',
            token: '--stepper-steps-font-family',
            description: 'Optional text label below the circle identifying the step.',
          },
          {
            id: 3,
            name: 'Connector line',
            token: 'StepperLines',
            description: 'Horizontal line between circles that reflects the progress state of that segment.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* States */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.BodyText>
        Each step accepts a <code>state</code> prop. The adjacent connector line colour is resolved
        automatically:
      </DocsTemplate.BodyText>
      <DocsTemplate.BulletList
        items={[
          'default — outlined circle with light border; not yet reached. Adjacent connectors show as to-do (dark gray).',
          'active — outlined circle with navy border and text; current step. Connectors behind it are complete (blue), connectors ahead are to-do (dark gray).',
          'complete — filled navy circle with white checkmark; step done. Connectors between complete steps are complete (blue).',
          'disabled — outlined circle with faded border; step not available. Adjacent connectors show as disabled (light gray).',
        ]}
      />

      <div style={PREVIEW}>
        <div>
          <div style={LABEL}>Default — all steps pending</div>
          <Stepper steps={allDefault} />
        </div>
        <div>
          <div style={LABEL}>Mixed — complete › active › default</div>
          <Stepper steps={mixed4} />
        </div>
        <div>
          <div style={LABEL}>Complete — all steps done</div>
          <Stepper steps={allComplete} />
        </div>
        <div>
          <div style={LABEL}>Disabled</div>
          <Stepper steps={allDisabled} />
        </div>
      </div>
    </DocsTemplate.Section>

    {/* Sizes */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes are available — <code>small</code>, <code>default</code>, and <code>large</code>.
        The size prop controls the circle diameter, typography scale, and gap between elements.
      </DocsTemplate.BodyText>
      <div style={PREVIEW}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size}>
            <div style={LABEL}>{size}</div>
            <Stepper steps={mixed4} size={size} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* Line Types */}
    <DocsTemplate.Section title="Line Types">
      <DocsTemplate.BodyText>
        The <code>lineType</code> prop controls the visual style of the connectors between steps.
      </DocsTemplate.BodyText>
      <div style={PREVIEW}>
        {(['solid', 'dashed', 'dotted'] as const).map((type) => (
          <div key={type}>
            <div style={LABEL}>{type}</div>
            <Stepper steps={mixed4} lineType={type} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* Design Tokens */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        The Stepper delegates token usage to its building blocks. The tokens below are consumed by
        StepperSteps and StepperLines respectively.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Step Circle Tokens (StepperSteps)">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--stepper-steps-size-small',     description: 'Circle diameter — small → 24 px (global-spacing-sizing-24px)' },
            { name: '--stepper-steps-size-default',   description: 'Circle diameter — default → 36 px (global-spacing-sizing-36px)' },
            { name: '--stepper-steps-size-large',     description: 'Circle diameter — large → 48 px (global-spacing-sizing-48px)' },
            { name: '--stepper-steps-default-border', description: 'Default circle border — neutral-gray-300' },
            { name: '--stepper-steps-default-text',   description: 'Default circle text — neutral-gray-500' },
            { name: '--stepper-steps-active-border',  description: 'Active circle border — secondary-navy (#3A3282)' },
            { name: '--stepper-steps-active-text',    description: 'Active circle text — secondary-navy (#3A3282)' },
            { name: '--stepper-steps-complete-bg',    description: 'Complete circle fill — secondary-navy (#3A3282)' },
            { name: '--stepper-steps-complete-icon',  description: 'Complete circle checkmark — white' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Connector Line Tokens (StepperLines)">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--stepper-lines-color-disabled', description: 'Connector — disabled state → neutral-gray-300 (#d2d5da)' },
            { name: '--stepper-lines-color-todo',     description: 'Connector — to-do state → neutral-gray-700 (#374151)' },
            { name: '--stepper-lines-color-complete', description: 'Connector — complete state → brand-primary (#3776ce)' },
            { name: '--stepper-lines-stroke-1px',     description: 'Connector — thin stroke (1 px)' },
            { name: '--stepper-lines-stroke-2px',     description: 'Connector — default stroke (2 px)' },
            { name: '--stepper-lines-stroke-3px',     description: 'Connector — thick stroke (3 px)' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* Usage Principles */}
    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Reflect real progress">
          Only mark steps as complete once the user has genuinely finished them. Do not pre-complete steps to show further progress.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="One active step at a time">
          There should be at most one step in the active state. Active communicates the current position in the workflow.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Keep labels concise">
          Step labels should be 1–3 words. Longer labels wrap and can misalign the layout on smaller screens.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Consistent size">
          Use a single size prop for all steps in a stepper. Mixing sizes within one instance is not supported.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    {/* Dos and Don'ts */}
    <DocsTemplate.Section title="Do and Don't">
      <DocsTemplate.DosDonts
        doItem={{
          icon: <Stepper steps={mixed4} size="small" />,
          label: 'Mark progress accurately',
          description: 'Update step states as the user advances through the flow. Use complete, active, and default to reflect genuine progress.',
        }}
        dontItem={{
          icon: <Stepper steps={allComplete} size="small" />,
          label: 'Do not pre-complete steps',
          description: 'Do not mark steps as complete before the user has finished them. This misleads the user about their actual progress.',
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default StepperDocs;
