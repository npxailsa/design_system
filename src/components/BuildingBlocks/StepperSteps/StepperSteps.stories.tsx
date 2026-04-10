import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StepperSteps } from './StepperSteps';
import { StepperStepsDocs } from './StepperStepsDocs';
import type { StepperStep, StepperStepsSize } from './StepperSteps';

/* ── Sample data ─────────────────────────────────────────────────────────── */

const DEFAULT_STEPS: StepperStep[] = [
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

const COMPLETE_STEPS: StepperStep[] = DEFAULT_STEPS.map((s) => ({
  ...s,
  state: 'complete' as const,
  label: 'Complete',
}));

const ACTIVE_STEPS: StepperStep[] = DEFAULT_STEPS.map((s) => ({
  ...s,
  state: 'active' as const,
}));

const DISABLED_STEPS: StepperStep[] = DEFAULT_STEPS.map((s) => ({
  ...s,
  state: 'disabled' as const,
}));

const ALL_SIZES: StepperStepsSize[] = ['small', 'default', 'large'];

/* ── Layout helpers ──────────────────────────────────────────────────────── */

const wrap: React.CSSProperties = {
  padding: '16px',
  background: '#f9fafb',
  borderRadius: '6px',
  display: 'inline-flex',
};

/* ── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof StepperSteps> = {
  title: 'Foundation/BuildingBlocks/StepperSteps',
  component: StepperSteps,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: { control: 'select', options: ALL_SIZES },
    showLabel: { control: 'boolean' },
  },
  args: {
    steps: DEFAULT_STEPS,
    size: 'default',
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof StepperSteps>;

/* ── 1. Documentation ────────────────────────────────────────────────────── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <StepperStepsDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

/* ── 2. Playground ───────────────────────────────────────────────────────── */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={wrap}>
      <StepperSteps {...args} />
    </div>
  ),
};

/* ── 3. All sizes — default state ────────────────────────────────────────── */
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={DEFAULT_STEPS} size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 4. State — Default ──────────────────────────────────────────────────── */
export const StateDefault: Story = {
  name: 'State / Default',
  render: () => (
    <div style={wrap}>
      <StepperSteps steps={DEFAULT_STEPS} size="default" />
    </div>
  ),
};

/* ── 5. State — Active ───────────────────────────────────────────────────── */
export const StateActive: Story = {
  name: 'State / Active',
  render: () => (
    <div style={wrap}>
      <StepperSteps steps={ACTIVE_STEPS} size="default" />
    </div>
  ),
};

/* ── 6. State — Complete ─────────────────────────────────────────────────── */
export const StateComplete: Story = {
  name: 'State / Complete',
  render: () => (
    <div style={wrap}>
      <StepperSteps steps={COMPLETE_STEPS} size="default" />
    </div>
  ),
};

/* ── 7. State — Disabled ─────────────────────────────────────────────────── */
export const StateDisabled: Story = {
  name: 'State / Disabled',
  render: () => (
    <div style={wrap}>
      <StepperSteps steps={DISABLED_STEPS} size="default" />
    </div>
  ),
};

/* ── 8. Mixed States (typical in-flow) ──────────────────────────────────── */
export const MixedStates: Story = {
  name: 'Mixed States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={MIXED_STEPS} size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 9. Without Labels ───────────────────────────────────────────────────── */
export const WithoutLabels: Story = {
  name: 'Without Labels',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={MIXED_STEPS} size={size} showLabel={false} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 10. Complete — All sizes ─────────────────────────────────────────────── */
export const CompleteSizes: Story = {
  name: 'Complete / All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={COMPLETE_STEPS} size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 11. Full Design Matrix ──────────────────────────────────────────────── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded' },
  render: () => {
    const heading: React.CSSProperties = {
      fontSize: 11,
      fontWeight: 600,
      color: '#61607C',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 8,
    };

    const allStateSteps = (state: 'default' | 'active' | 'complete' | 'disabled') =>
      DEFAULT_STEPS.map((s) => ({
        ...s,
        state,
        label: state === 'complete' ? 'Complete' : 'Text',
      }));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {ALL_SIZES.map((size) =>
          (['default', 'active', 'complete', 'disabled'] as const).map((state) => (
            <div key={`${size}-${state}`}>
              <div style={heading}>{size} — {state}</div>
              <div style={wrap}>
                <StepperSteps steps={allStateSteps(state)} size={size} />
              </div>
            </div>
          ))
        )}

        {/* Mixed states */}
        {ALL_SIZES.map((size) => (
          <div key={`${size}-mixed`}>
            <div style={heading}>{size} — mixed states</div>
            <div style={wrap}>
              <StepperSteps steps={MIXED_STEPS} size={size} />
            </div>
          </div>
        ))}
      </div>
    );
  },
};
