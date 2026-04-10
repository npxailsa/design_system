import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StepperConnectors } from './StepperConnectors';
import { StepperConnectorsDocs } from './StepperConnectorsDocs';
import type {
  StepperConnectorType,
  StepperConnectorState,
  StepperConnectorSize,
} from './StepperConnectors';

/* ── Constants ───────────────────────────────────────────────────────────── */

const ALL_TYPES: StepperConnectorType[] = ['solid', 'dashed', 'dotted'];
const ALL_STATES: StepperConnectorState[] = ['default', 'active', 'complete', 'disabled'];
const ALL_SIZES: StepperConnectorSize[] = ['small', 'default', 'large'];

/* ── Layout helpers ──────────────────────────────────────────────────────── */

const wrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  padding: 16,
  background: '#f9fafb',
  borderRadius: 6,
};

const col: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 16,
  background: '#f9fafb',
  borderRadius: 6,
};

const label = (text: string): React.CSSProperties => ({
  fontSize: 11,
  fontWeight: 600,
  color: '#61607C',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: 8,
});

/* ── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof StepperConnectors> = {
  title: 'Foundation/BuildingBlocks/StepperConnectors',
  component: StepperConnectors,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: { control: 'select', options: ALL_TYPES },
    state: { control: 'select', options: ALL_STATES },
    size: { control: 'select', options: ALL_SIZES },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: {
    type: 'solid',
    state: 'default',
    size: 'default',
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof StepperConnectors>;

/* ── 1. Documentation ────────────────────────────────────────────────────── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <StepperConnectorsDocs />,
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
    <div style={args.orientation === 'vertical' ? col : wrap}>
      <StepperConnectors {...args} />
    </div>
  ),
};

/* ── 3. Type / Solid ─────────────────────────────────────────────────────── */
export const TypeSolid: Story = {
  name: 'Type / Solid',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="solid" state={state} size="small" />
            <StepperConnectors type="solid" state={state} size="default" />
            <StepperConnectors type="solid" state={state} size="large" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 4. Type / Dashed ────────────────────────────────────────────────────── */
export const TypeDashed: Story = {
  name: 'Type / Dashed',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="dashed" state={state} size="small" />
            <StepperConnectors type="dashed" state={state} size="default" />
            <StepperConnectors type="dashed" state={state} size="large" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 5. Type / Dotted ────────────────────────────────────────────────────── */
export const TypeDotted: Story = {
  name: 'Type / Dotted',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="dotted" state={state} size="small" />
            <StepperConnectors type="dotted" state={state} size="default" />
            <StepperConnectors type="dotted" state={state} size="large" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 6. States ───────────────────────────────────────────────────────────── */
export const States: Story = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            {ALL_TYPES.map((type) => (
              <StepperConnectors key={type} type={type} state={state} size="default" />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 7. Sizes ────────────────────────────────────────────────────────────── */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={label(size)}>{size}</div>
          <div style={wrap}>
            <StepperConnectors type="solid" state="default" size={size} />
            <StepperConnectors type="dashed" state="active" size={size} />
            <StepperConnectors type="dotted" state="complete" size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 8. Orientation / Vertical ───────────────────────────────────────────── */
export const OrientationVertical: Story = {
  name: 'Orientation / Vertical',
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 16, background: '#f9fafb', borderRadius: 6 }}>
      {ALL_TYPES.map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#61607C', textTransform: 'uppercase' }}>{type}</span>
          <StepperConnectors type={type} state="complete" orientation="vertical" />
          <StepperConnectors type={type} state="active" orientation="vertical" />
          <StepperConnectors type={type} state="default" orientation="vertical" />
        </div>
      ))}
    </div>
  ),
};

/* ── 9. Full Design Matrix ───────────────────────────────────────────────── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {ALL_TYPES.map((type) => (
        <div key={type}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 12, textTransform: 'capitalize' }}>
            {type}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ALL_SIZES.map((size) => (
              <div key={size}>
                <div style={label(`${size}`)}>size: {size}</div>
                <div style={wrap}>
                  {ALL_STATES.map((state) => (
                    <StepperConnectors key={state} type={type} state={state} size={size} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
