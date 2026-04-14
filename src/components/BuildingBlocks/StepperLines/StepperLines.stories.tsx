import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StepperLines } from './StepperLines';
import { StepperLinesDocs } from './StepperLinesDocs';
import type {
  StepperLineType,
  StepperLineStroke,
  StepperLineState,
} from './StepperLines';

/* ── Constants ───────────────────────────────────────────────────────────── */

const ALL_TYPES: StepperLineType[] = ['solid', 'dashed', 'dotted'];
const ALL_STROKES: StepperLineStroke[] = ['1-px', '2-px', '3-px'];
const ALL_STATES: StepperLineState[] = ['disabled', 'to-do', 'complete'];

/* ── Shared style helpers ────────────────────────────────────────────────── */

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: 'var(--global-color-secondary-blue-gray)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  whiteSpace: 'nowrap',
};

const TYPE_TITLE: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--global-color-neutral-gray-700)',
  textTransform: 'capitalize',
  marginBottom: 4,
};

const CARD: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50)',
  border: '1px solid var(--global-color-neutral-gray-200)',
  borderRadius: 6,
  overflow: 'hidden',
};

const HEADER_CELL: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-100)',
  padding: '6px 12px',
  fontSize: 10,
  fontWeight: 700,
  color: 'var(--global-color-neutral-gray-700)',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  textAlign: 'center' as const,
  borderBottom: '1px solid var(--global-color-neutral-gray-200)',
  borderLeft: '1px solid var(--global-color-neutral-gray-200)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/* ── Reusable matrix ─────────────────────────────────────────────────────── */

/**
 * Renders a grid: rows = states, columns = strokes — for a single line type.
 * Matches the Figma design matrix layout.
 */
const TypeMatrix: React.FC<{ type: StepperLineType }> = ({ type }) => {
  const strokeWidths: Record<StepperLineStroke, number> = {
    '1-px': 100,
    '2-px': 200,
    '3-px': 300,
  };
  const gridCols = `80px ${ALL_STROKES.map((s) => `${strokeWidths[s]}px`).join(' ')}`;

  return (
    <div style={CARD}>
      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: gridCols }}>
        <div style={{ ...HEADER_CELL, borderLeft: 'none', background: 'var(--global-color-neutral-gray-100)' }} />
        {ALL_STROKES.map((stroke) => (
          <div key={stroke} style={HEADER_CELL}>
            {stroke}
          </div>
        ))}
      </div>

      {/* One data row per state */}
      {ALL_STATES.map((state, sIdx) => (
        <div
          key={state}
          style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            borderTop: sIdx > 0 ? '1px solid var(--global-color-neutral-gray-200)' : undefined,
            background:
              sIdx % 2 === 0
                ? 'var(--global-color-base-white)'
                : 'var(--global-color-neutral-gray-50)',
          }}
        >
          {/* State label */}
          <div
            style={{
              padding: '16px 12px',
              display: 'flex',
              alignItems: 'center',
              ...LABEL_STYLE,
            }}
          >
            {state}
          </div>

          {/* One cell per stroke */}
          {ALL_STROKES.map((stroke) => (
            <div
              key={stroke}
              style={{
                borderLeft: '1px solid var(--global-color-neutral-gray-200)',
                padding: '16px 12px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StepperLines type={type} state={state} stroke={stroke} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

/* ── Meta ────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof StepperLines> = {
  title: 'Foundation/BuildingBlocks/StepperLines',
  component: StepperLines,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ALL_TYPES,
      description: 'Visual style of the connector line',
    },
    stroke: {
      control: 'select',
      options: ALL_STROKES,
      description: 'Stroke thickness of the line',
    },
    state: {
      control: 'select',
      options: ALL_STATES,
      description: 'Progress state — controls line colour',
    },
    className: { control: false },
    ariaLabel: { control: 'text' },
  },
  args: {
    type: 'solid',
    stroke: '2-px',
    state: 'to-do',
  },
};

export default meta;
type Story = StoryObj<typeof StepperLines>;

/* ── 1. Documentation ────────────────────────────────────────────────────── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <StepperLinesDocs />,
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
        alignItems: 'center',
        padding: 24,
        background: 'var(--global-color-neutral-gray-50)',
        borderRadius: 6,
        minWidth: 300,
      }}
    >
      <StepperLines {...args} />
    </div>
  ),
};

/* ── 3. Type / Solid ─────────────────────────────────────────────────────── */
export const Default: Story = { name: 'Default' };

export const TypeSolid: Story = {
  name: 'Status / Solid',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={TYPE_TITLE}>Solid</div>
      <TypeMatrix type="solid" />
    </div>
  ),
};

/* ── 4. Type / Dashed ────────────────────────────────────────────────────── */
export const TypeDashed: Story = {
  name: 'Status / Dashed',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={TYPE_TITLE}>Dashed</div>
      <TypeMatrix type="dashed" />
    </div>
  ),
};

/* ── 5. Type / Dotted ────────────────────────────────────────────────────── */
export const TypeDotted: Story = {
  name: 'Status / Dotted',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={TYPE_TITLE}>Dotted</div>
      <TypeMatrix type="dotted" />
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
        <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={TYPE_TITLE}>State: {state}</div>
          <div style={{ ...CARD, display: 'flex', gap: 'var(--global-spacing-sizing-16px)', padding: '16px 12px', alignItems: 'center' }}>
            {ALL_TYPES.map((type) => (
              <div
                key={type}
                style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}
              >
                <span style={LABEL_STYLE}>{type}</span>
                <StepperLines type={type} state={state} stroke="2-px" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 7. Strokes ──────────────────────────────────────────────────────────── */
export const Strokes: Story = {
  name: 'Strokes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_STROKES.map((stroke) => (
        <div key={stroke} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={TYPE_TITLE}>Stroke: {stroke}</div>
          <div
            style={{
              ...CARD,
              display: 'flex',
              gap: 'var(--global-spacing-sizing-16px)',
              padding: '16px 12px',
              alignItems: 'center',
            }}
          >
            {ALL_TYPES.map((type) => (
              <div
                key={type}
                style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}
              >
                <span style={LABEL_STYLE}>{type}</span>
                <StepperLines type={type} state="to-do" stroke={stroke} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── 8. Full Design Matrix ───────────────────────────────────────────────── */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <div style={TYPE_TITLE}>Anatomy: type × stroke × state</div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginTop: '8px' }}>
          StepperLines are horizontal connectors. Props: type (solid | dashed | dotted), stroke (1–3 px), state (disabled | to-do | complete).
        </p>
      </div>
      {ALL_TYPES.map((type) => (
        <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ ...LABEL_STYLE, width: '56px' }}>{type}</span>
          <StepperLines type={type} stroke="2-px" state="to-do" />
          <StepperLines type={type} stroke="2-px" state="complete" />
          <StepperLines type={type} stroke="2-px" state="disabled" />
        </div>
      ))}
    </div>
  ),
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {ALL_STATES.map((state) => (
        <div key={state} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ ...LABEL_STYLE, width: '72px' }}>{state}</span>
          <StepperLines type="solid" stroke="2-px" state={state} />
          <StepperLines type="dashed" stroke="2-px" state={state} />
          <StepperLines type="dotted" stroke="2-px" state={state} />
        </div>
      ))}
    </div>
  ),
};

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {ALL_TYPES.map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={TYPE_TITLE}>{type}</div>
          <TypeMatrix type={type} />
        </div>
      ))}
    </div>
  ),
};
