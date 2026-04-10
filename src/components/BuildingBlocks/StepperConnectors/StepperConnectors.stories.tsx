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

/* ── Shared style helpers ────────────────────────────────────────────────── */

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: '#61607C',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: 6,
  whiteSpace: 'nowrap',
};

const SECTION_TITLE: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: '#374151',
  textTransform: 'capitalize',
  marginBottom: 8,
};

const CARD: React.CSSProperties = {
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: 6,
  padding: '12px 16px',
};

/* Helper: horizontal connector row with fixed length for visibility */
const ConnectorRow: React.FC<{
  type: StepperConnectorType;
  state: StepperConnectorState;
  size: StepperConnectorSize;
  length?: number;
}> = ({ type, state, size, length = 120 }) => (
  <div style={{ display: 'flex', alignItems: 'center', width: length }}>
    <StepperConnectors type={type} state={state} size={size} />
  </div>
);

/* ── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof StepperConnectors> = {
  title: 'Foundation/BuildingBlocks/StepperConnectors',
  component: StepperConnectors,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ALL_TYPES,
      description: 'Visual style of the connector line',
    },
    state: {
      control: 'select',
      options: ALL_STATES,
      description: 'Semantic state — controls line colour and opacity',
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
      description: 'Thickness of the line',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout axis of the connector',
    },
    className: { control: false },
    ariaLabel: { control: 'text' },
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
    <div
      style={{
        display: 'flex',
        alignItems: args.orientation === 'vertical' ? 'flex-start' : 'center',
        flexDirection: args.orientation === 'vertical' ? 'column' : 'row',
        gap: 16,
        padding: 24,
        background: '#f9fafb',
        borderRadius: 6,
        minHeight: args.orientation === 'vertical' ? 160 : undefined,
        minWidth: args.orientation === 'horizontal' ? 240 : undefined,
      }}
    >
      <StepperConnectors {...args} />
    </div>
  ),
};

/* ── 3. Type / Solid ─────────────────────────────────────────────────────── */
export const TypeSolid: Story = {
  name: 'Type / Solid',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, alignItems: 'center' }}>
            {ALL_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <ConnectorRow type="solid" state={state} size={size} />
                <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 4. Type / Dashed ────────────────────────────────────────────────────── */
export const TypeDashed: Story = {
  name: 'Type / Dashed',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, alignItems: 'center' }}>
            {ALL_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <ConnectorRow type="dashed" state={state} size={size} />
                <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 5. Type / Dotted ────────────────────────────────────────────────────── */
export const TypeDotted: Story = {
  name: 'Type / Dotted',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, alignItems: 'center' }}>
            {ALL_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <ConnectorRow type="dotted" state={state} size={size} />
                <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 6. States ───────────────────────────────────────────────────────────── */
export const States: Story = {
  name: 'States',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={LABEL_STYLE}>State: {state}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, alignItems: 'center' }}>
            {ALL_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <ConnectorRow type={type} state={state} size="default" />
                <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{type}</span>
              </div>
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
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, alignItems: 'center' }}>
            {ALL_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <ConnectorRow type={type} state="default" size={size} length={160} />
                <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 8. Orientation / Vertical ───────────────────────────────────────────── */
export const OrientationVertical: Story = {
  name: 'Orientation / Vertical',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={LABEL_STYLE}>State: {state}</div>
          <div style={{ ...CARD, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
            {ALL_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={LABEL_STYLE}>{type}</span>
                <div style={{ display: 'flex', alignItems: 'center', height: 80 }}>
                  <StepperConnectors type={type} state={state} orientation="vertical" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 9. Full Design Matrix ───────────────────────────────────────────────── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Header note */}
      <div style={{ fontSize: 11, color: '#6d7280', fontStyle: 'italic' }}>
        Rows: type (solid / dashed / dotted) &nbsp;·&nbsp; Columns: size (small / default / large) &nbsp;·&nbsp; Groups: state
      </div>

      {ALL_STATES.map((state) => (
        <div key={state}>
          <div style={SECTION_TITLE}>State: {state}</div>

          {/* Table grid: row = type, col = size */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px repeat(3, 1fr)',
              gap: 0,
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            {/* Header row */}
            <div style={{ background: '#f3f4f6', padding: '8px 12px', borderBottom: '1px solid #e5e7eb' }} />
            {ALL_SIZES.map((size) => (
              <div
                key={size}
                style={{
                  background: '#f3f4f6',
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  borderLeft: '1px solid #e5e7eb',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  textAlign: 'center',
                }}
              >
                {size}
              </div>
            ))}

            {/* Data rows */}
            {ALL_TYPES.map((type, tIdx) => (
              <React.Fragment key={type}>
                {/* Row label */}
                <div
                  style={{
                    padding: '14px 12px',
                    background: tIdx % 2 === 0 ? '#fafafa' : '#ffffff',
                    borderTop: tIdx > 0 ? '1px solid #e5e7eb' : undefined,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#374151',
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {type}
                </div>

                {/* Cells: one per size */}
                {ALL_SIZES.map((size) => (
                  <div
                    key={size}
                    style={{
                      padding: '14px 16px',
                      background: tIdx % 2 === 0 ? '#fafafa' : '#ffffff',
                      borderTop: tIdx > 0 ? '1px solid #e5e7eb' : undefined,
                      borderLeft: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <StepperConnectors type={type} state={state} size={size} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}

      {/* Vertical orientation section */}
      <div>
        <div style={SECTION_TITLE}>Orientation: Vertical — all types × sizes</div>
        <div style={{ ...CARD, display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {ALL_TYPES.map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={LABEL_STYLE}>{type}</div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
                {ALL_SIZES.map((size) => (
                  <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ height: 80, display: 'flex', alignItems: 'center' }}>
                      <StepperConnectors type={type} state="active" size={size} orientation="vertical" />
                    </div>
                    <span style={{ ...LABEL_STYLE, marginBottom: 0 }}>{size}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
