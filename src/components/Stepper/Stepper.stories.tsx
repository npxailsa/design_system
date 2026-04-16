import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import StepperDocs from './StepperDocs';
import type { StepperStep } from './Stepper';

/* ── Meta ────────────────────────────────────────────────────── */

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of all step circles',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show labels below each circle',
    },
    lineType: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the connector line',
    },
    lineStroke: {
      control: 'select',
      options: ['1-px', '2-px', '3-px'],
      description: 'Stroke thickness of the connector line',
    },
    interactive: {
      control: 'boolean',
      description:
        'When true, each step is clickable. Clicking sets it as the current (active) step. ' +
        'Only steps explicitly marked complete in the data remain complete — prior steps are ' +
        'not auto-promoted.',
    },
  },
  args: {
    size: 'default',
    showLabel: true,
    lineType: 'solid',
    lineStroke: '1-px',
    interactive: false,
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

/* ── Step sets ───────────────────────────────────────────────── */

const steps4: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'complete' },
  { id: 2, label: 'Step two',   state: 'active' },
  { id: 3, label: 'Step three', state: 'default' },
  { id: 4, label: 'Step four',  state: 'default' },
];

const steps5: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'complete' },
  { id: 2, label: 'Step two',   state: 'complete' },
  { id: 3, label: 'Step three', state: 'active' },
  { id: 4, label: 'Step four',  state: 'default' },
  { id: 5, label: 'Step five',  state: 'default' },
];

const steps6: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'complete' },
  { id: 2, label: 'Step two',   state: 'complete' },
  { id: 3, label: 'Step three', state: 'complete' },
  { id: 4, label: 'Step four',  state: 'active' },
  { id: 5, label: 'Step five',  state: 'default' },
  { id: 6, label: 'Step six',   state: 'default' },
];

const steps8: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'complete' },
  { id: 2, label: 'Step two',   state: 'complete' },
  { id: 3, label: 'Step three', state: 'complete' },
  { id: 4, label: 'Step four',  state: 'complete' },
  { id: 5, label: 'Step five',  state: 'active' },
  { id: 6, label: 'Step six',   state: 'default' },
  { id: 7, label: 'Step seven', state: 'default' },
  { id: 8, label: 'Step eight', state: 'default' },
];

const allDefault4: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'default' },
  { id: 2, label: 'Step two',   state: 'default' },
  { id: 3, label: 'Step three', state: 'default' },
  { id: 4, label: 'Step four',  state: 'default' },
];

const allComplete4: StepperStep[] = [
  { id: 1, label: 'Complete', state: 'complete' },
  { id: 2, label: 'Complete', state: 'complete' },
  { id: 3, label: 'Complete', state: 'complete' },
  { id: 4, label: 'Complete', state: 'complete' },
];

const allDisabled4: StepperStep[] = [
  { id: 1, label: 'Step one',   state: 'disabled' },
  { id: 2, label: 'Step two',   state: 'disabled' },
  { id: 3, label: 'Step three', state: 'disabled' },
  { id: 4, label: 'Step four',  state: 'disabled' },
];

/* ── Shared cell styles for the design matrix ────────────────── */

const SECTION_LABEL: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary, sans-serif)',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500, #6b7280)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

const CARD: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50, #f9fafb)',
  border: '1px solid var(--global-color-neutral-gray-200, #e5e7eb)',
  borderRadius: 'var(--global-spacing-radius-md, 8px)',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

/* ── Stories ─────────────────────────────────────────────────── */

/* 1 — Documentation (first) */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <StepperDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

/* 2 — Playground */
export const Playground: Story = {
  name: 'Playground',
  args: {
    steps: steps4,
  },
};

/* 3 — States */
export const States: Story = {
  name: 'States',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <div style={SECTION_LABEL}>Default</div>
        <Stepper {...args} steps={allDefault4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Active (step 2)</div>
        <Stepper {...args} steps={steps4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Complete (all)</div>
        <Stepper {...args} steps={allComplete4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Disabled</div>
        <Stepper {...args} steps={allDisabled4} />
      </div>
    </div>
  ),
  parameters: { controls: { include: ['size', 'showLabel', 'lineType', 'lineStroke'] } },
};

/* 4 — Interactive */
export const Interactive: Story = {
  name: 'Interactive',
  render: (args) => {
    const [log, setLog] = React.useState<string>('Click any step to navigate');

    // Steps 1 & 3 are already complete; step 2 is skipped/incomplete; step 4
    // is current; step 5 is still to-do; step 6 is disabled.
    // Navigating freely between steps never auto-promotes or auto-demotes
    // completion — only the explicit `state` in the data controls that.
    const baseSteps: StepperStep[] = [
      { id: 1, label: 'Personal info',  state: 'complete' },
      { id: 2, label: 'Address',        state: 'default' },
      { id: 3, label: 'Identity',       state: 'complete' },
      { id: 4, label: 'Review',         state: 'active' },
      { id: 5, label: 'Submit',         state: 'default' },
      { id: 6, label: 'Archived',       state: 'disabled' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--global-color-neutral-gray-600, #4b5563)', lineHeight: 1.6 }}>
          Click any step to make it <strong>current</strong>. Steps 1 and 3 are already{' '}
          <strong>complete</strong>; step 2 is still <strong>incomplete</strong> (skipped).
          Navigating forward or backward <em>never</em> auto-marks steps as complete — only
          explicit data drives completion state.
        </p>
        <Stepper
          {...args}
          steps={baseSteps}
          interactive
          onStepClick={(index, step) =>
            setLog(`Active → step ${index + 1}: "${step.label}"`)
          }
        />
        <p
          style={{
            margin: 0,
            padding: '8px 12px',
            background: 'var(--global-color-neutral-gray-100)',
            borderRadius: 'var(--global-spacing-radius-sm, 4px)',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'var(--global-color-neutral-gray-700)',
          }}
        >
          {log}
        </p>
      </div>
    );
  },
  parameters: {
    controls: { include: ['size', 'showLabel', 'lineType', 'lineStroke'] },
    chromatic: { disableSnapshot: true },
  },
};

/* 5 — Sizes */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {(['small', 'default', 'large'] as const).map((size) => (
        <div key={size}>
          <div style={SECTION_LABEL}>{size}</div>
          <Stepper steps={steps4} size={size} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 5 — Step counts */
export const StepCounts: Story = {
  name: 'Step Counts',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {[
        { label: '4 steps', steps: steps4 },
        { label: '5 steps', steps: steps5 },
        { label: '6 steps', steps: steps6 },
        { label: '8 steps', steps: steps8 },
      ].map(({ label, steps }) => (
        <div key={label}>
          <div style={SECTION_LABEL}>{label}</div>
          <Stepper {...args} steps={steps} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { include: ['size', 'showLabel', 'lineType', 'lineStroke'] } },
};

/* 6 — Line Types */
export const LineTypes: Story = {
  name: 'Line Types',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['solid', 'dashed', 'dotted'] as const).map((type) => (
        <div key={type}>
          <div style={SECTION_LABEL}>{type}</div>
          <Stepper {...args} steps={steps4} lineType={type} />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { include: ['size', 'showLabel', 'lineStroke'] } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '600px' }}>
      <span style={{ fontFamily: 'var(--brand-font-primary)', fontWeight: 600, fontSize: '13px' }}>Sub-atoms</span>
      <Stepper size="default" showLabel steps={[{ id: 1, label: 'Step 1', state: 'past' }, { id: 2, label: 'Step 2', state: 'current' }, { id: 3, label: 'Step 3', state: 'future' }]} />
      <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '4px 8px', borderRadius: '4px' }}>StepperSteps + StepperLines composite</code>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <Stepper size="default" showLabel lineType="solid" steps={[{ id: 1, label: 'Past', state: 'past' }, { id: 2, label: 'Current', state: 'current' }, { id: 3, label: 'Future', state: 'future' }]} />
      <Stepper size="default" showLabel lineType="dashed" steps={[{ id: 1, label: 'Past', state: 'past' }, { id: 2, label: 'Current', state: 'current' }, { id: 3, label: 'Future', state: 'future' }]} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 7 — Full Design Matrix */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const allStepSets = [
      { label: '4 steps — mixed states',  steps: steps4 },
      { label: '5 steps — mixed states',  steps: steps5 },
      { label: '6 steps — mixed states',  steps: steps6 },
      { label: '8 steps — mixed states',  steps: steps8 },
      { label: '4 steps — all complete',  steps: allComplete4 },
      { label: '4 steps — all disabled',  steps: allDisabled4 },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {sizes.map((size) => (
          <div key={size}>
            <div style={{ ...SECTION_LABEL, fontSize: '14px', marginBottom: '16px' }}>
              Size: {size}
            </div>
            <div style={CARD}>
              {allStepSets.map(({ label, steps }) => (
                <div key={label}>
                  <div style={{ ...SECTION_LABEL, textTransform: 'none', fontSize: '11px' }}>
                    {label}
                  </div>
                  <Stepper steps={steps} size={size} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
