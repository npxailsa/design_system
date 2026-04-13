import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { StepperSteps } from './StepperSteps';
import type { StepperStep } from './StepperSteps';

/* ── Sample data ─────────────────────────────────────────────────────────── */

const FIVE_STEPS: StepperStep[] = [
  { id: 1, label: 'Text' },
  { id: 2, label: 'Text' },
  { id: 3, label: 'Text' },
  { id: 4, label: 'Text' },
  { id: 5, label: 'Text' },
];

const MIXED_STEPS: StepperStep[] = [
  { id: 1, label: 'Step 1', state: 'complete' },
  { id: 2, label: 'Step 2', state: 'complete' },
  { id: 3, label: 'Step 3', state: 'active' },
  { id: 4, label: 'Step 4', state: 'default' },
  { id: 5, label: 'Step 5', state: 'default' },
];

const COMPLETE_STEPS: StepperStep[] = FIVE_STEPS.map((s) => ({
  ...s,
  state: 'complete' as const,
  label: 'Complete',
}));

const DISABLED_STEPS: StepperStep[] = FIVE_STEPS.map((s) => ({
  ...s,
  state: 'disabled' as const,
}));

const ACTIVE_STEPS: StepperStep[] = FIVE_STEPS.map((s) => ({
  ...s,
  state: 'active' as const,
}));

const wrap: React.CSSProperties = {
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  display: 'inline-flex',
};

/* ── Docs component ──────────────────────────────────────────────────────── */

export const StepperStepsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="StepperSteps"
      subtitle="A horizontal strip of numbered step indicators, used to communicate progress through a multi-step flow. Supports default, active, complete, and disabled states across three sizes."
    />

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        StepperSteps is a <strong>pure React component</strong> with no MUI base. Each step
        circle renders as a plain <code>&lt;div&gt;</code> — the number, checkmark, and label
        are simple text/SVG elements. No MUI component is imported; all sizing, colour, border,
        and state transitions are driven by CSS Modules and the <code>--stepper-steps-*</code>{' '}
        token family. Keeping the component dependency-free ensures zero style interference
        from MUI and maximum portability as a building block.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// No MUI base import required\n// Each step circle renders as:\n<div className={styles['stepper-step']} data-state={state} data-size={size}>\n  {state === 'complete' ? <svg>/* checkmark */</svg> : <span>{zeroPadded(id)}</span>}\n  {showLabel && <span className={styles['stepper-step__label']}>{label}</span>}\n</div>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        StepperSteps renders a row of numbered circles — each representing one step in a sequence.
        Step numbers are automatically generated and zero-padded (01, 02, …). An optional label
        can appear below each circle. The complete state replaces the number with a checkmark.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={wrap}>
            <StepperSteps steps={MIXED_STEPS} size="default" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Strip',
            token: '--stepper-steps-item-gap',
            description: 'Flex container holding all step items with a configurable gap.',
          },
          {
            id: 2,
            name: 'Circle',
            token: '--stepper-steps-size-default, --stepper-steps-border-width',
            description: 'Rounded border container that holds the step number or checkmark.',
          },
          {
            id: 3,
            name: 'Step number',
            token: '--stepper-steps-number-size-default, --stepper-steps-number-weight',
            description: 'Auto-generated zero-padded number (01, 02, …) inside the circle.',
          },
          {
            id: 4,
            name: 'Checkmark icon',
            token: '--stepper-steps-complete-icon',
            description: 'Replaces the step number when the step state is "complete".',
          },
          {
            id: 5,
            name: 'Label',
            token: '--stepper-steps-label-size-default, --stepper-steps-label-color',
            description: 'Optional text displayed below the circle (e.g. "Step 1" or "Complete").',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: (
              <div style={wrap}>
                <StepperSteps steps={FIVE_STEPS} size="small" />
              </div>
            ),
          },
          {
            label: 'Default',
            children: (
              <div style={wrap}>
                <StepperSteps steps={FIVE_STEPS} size="default" />
              </div>
            ),
          },
          {
            label: 'Large',
            children: (
              <div style={wrap}>
                <StepperSteps steps={FIVE_STEPS} size="large" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="States">
      <DocsTemplate.Subsection title="Default">
        <DocsTemplate.BodyText>
          Steps with no assigned state render with a thin gray border and a muted number.
        </DocsTemplate.BodyText>
        <div style={wrap}>
          <StepperSteps steps={FIVE_STEPS} size="default" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Active">
        <DocsTemplate.BodyText>
          The active step uses the primary navy border and text, drawing attention to the current position.
        </DocsTemplate.BodyText>
        <div style={wrap}>
          <StepperSteps steps={ACTIVE_STEPS} size="default" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Complete">
        <DocsTemplate.BodyText>
          Completed steps show a filled navy circle with a white checkmark icon and the label "Complete".
        </DocsTemplate.BodyText>
        <div style={wrap}>
          <StepperSteps steps={COMPLETE_STEPS} size="default" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <DocsTemplate.BodyText>
          Disabled steps use a very light gray border and washed-out number, indicating they are not yet reachable.
        </DocsTemplate.BodyText>
        <div style={wrap}>
          <StepperSteps steps={DISABLED_STEPS} size="default" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Mixed states (typical in-flow usage)">
        <DocsTemplate.BodyText>
          Steps 1–2 complete, step 3 active, steps 4–5 default — the most common real-world pattern.
        </DocsTemplate.BodyText>
        <div style={wrap}>
          <StepperSteps steps={MIXED_STEPS} size="default" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Without labels">
      <DocsTemplate.BodyText>
        Labels can be hidden when space is constrained or when the steps are self-explanatory.
      </DocsTemplate.BodyText>
      <div style={wrap}>
        <StepperSteps steps={MIXED_STEPS} size="default" showLabel={false} />
      </div>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--stepper-steps-size-small', description: 'Circle diameter — small (24px)' },
          { name: '--stepper-steps-size-default', description: 'Circle diameter — default (36px)' },
          { name: '--stepper-steps-size-large', description: 'Circle diameter — large (48px)' },
          { name: '--stepper-steps-border-width', description: 'Border thickness on all states (--global-spacing-stroke-2px)' },
          { name: '--stepper-steps-border-radius', description: 'Full radius for circular shape (--global-spacing-radius-full)' },
          { name: '--stepper-steps-default-border', description: 'Border color for default/future steps (--global-color-neutral-gray-300)' },
          { name: '--stepper-steps-active-border', description: 'Border and text color for active step (--global-color-secondary-navy)' },
          { name: '--stepper-steps-complete-bg', description: 'Background of completed step circle (--global-color-secondary-navy)' },
          { name: '--stepper-steps-complete-icon', description: 'Checkmark color inside complete circle (--global-color-base-white)' },
          { name: '--stepper-steps-label-color', description: 'Default label text color (--global-color-neutral-gray-700)' },
          { name: '--stepper-steps-label-color-active', description: 'Label color for active/complete steps (--global-color-base-black)' },
          { name: '--stepper-steps-item-gap', description: 'Gap between step items in the strip (--global-spacing-sizing-8px)' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="One active step at a time">
          Only one step should be in the "active" state at once. Steps before it should be "complete"
          and steps after should be "default" or "disabled".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Progress flows left to right">
          Always lay out StepperSteps horizontally with completed steps on the left and future steps
          on the right, matching the natural reading direction.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Consistent labels">
          Either show labels on all steps or none. Mixing labelled and unlabelled steps in a single
          strip creates visual imbalance.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={wrap}>
              <StepperSteps steps={MIXED_STEPS} size="default" />
            </div>
          ),
          description: 'Show mixed states to reflect real progress: complete → active → default.',
        }}
        dontItem={{
          icon: (
            <div style={wrap}>
              <StepperSteps steps={ACTIVE_STEPS} size="default" />
            </div>
          ),
          description: "Don't set all steps to active — only the current step should be highlighted.",
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
