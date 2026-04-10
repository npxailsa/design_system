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
const ALL_STATES: StepperConnectorState[] = ['default', 'complete', 'disabled'];
const ALL_SIZES: StepperConnectorSize[] = ['small', 'default', 'large'];

/**
 * Fixed demo widths for each size, in pixels.
 * These match the proportional widths visible in the Figma design matrix
 * (small ≈ 1x, default ≈ 2x, large ≈ 3.5x).
 */
const SIZE_WIDTHS: Record<StepperConnectorSize, number> = {
  small: 80,
  default: 180,
  large: 300,
};

/* ── Shared style helpers ────────────────────────────────────────────────── */

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: 'var(--global-color-secondary-blue-gray)', /* #61607c */
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const TYPE_TITLE: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--global-color-neutral-gray-700)', /* #374151 */
  textTransform: 'capitalize',
  marginBottom: 4,
};

const CARD: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50)', /* #f9fafb */
  border: '1px solid var(--global-color-neutral-gray-200)',
  borderRadius: 6,
  overflow: 'hidden',
};

const HEADER_CELL: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-100)', /* #f3f4f6 */
  padding: '6px 12px',
  fontSize: 10,
  fontWeight: 700,
  color: 'var(--global-color-neutral-gray-700)', /* #374151 */
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  textAlign: 'center' as const,
  borderBottom: '1px solid var(--global-color-neutral-gray-200)',
  borderLeft: '1px solid var(--global-color-neutral-gray-200)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

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
      description: 'Thickness and minimum length of the line',
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

/* ── Reusable design-matrix block ────────────────────────────────────────── */

/**
 * Renders a 3-column (size) grid for a given type, showing all states.
 * Columns: small | default | large — each connector is in a fixed-width cell.
 */
const TypeMatrix: React.FC<{ type: StepperConnectorType }> = ({ type }) => {
  // Column widths: label col + one col per size
  const gridCols = `80px ${ALL_SIZES.map((s) => `${SIZE_WIDTHS[s]}px`).join(' ')}`;

  return (
    <div style={CARD}>
      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: gridCols }}>
        <div style={{ ...HEADER_CELL, borderLeft: 'none', background: 'var(--global-color-neutral-gray-100)' }} />
        {ALL_SIZES.map((size) => (
          <div key={size} style={HEADER_CELL}>
            {size}
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
            background: sIdx % 2 === 0 ? 'var(--global-color-base-white)' : 'var(--global-color-neutral-gray-50)',
          }}
        >
          {/* State label */}
          <div
            style={{
              padding: '14px 12px',
              display: 'flex',
              alignItems: 'center',
              ...LABEL_STYLE,
            }}
          >
            {state}
          </div>

          {/* One cell per size */}
          {ALL_SIZES.map((size) => (
            <div
              key={size}
              style={{
                borderLeft: '1px solid var(--global-color-neutral-gray-200)',
                padding: '14px 0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StepperConnectors type={type} state={state} size={size} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

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
        background: 'var(--global-color-neutral-gray-50)',
        borderRadius: 6,
        minHeight: args.orientation === 'vertical' ? 160 : undefined,
        width: args.orientation === 'horizontal' ? SIZE_WIDTHS[args.size ?? 'default'] : undefined,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={TYPE_TITLE}>Solid</div>
      <TypeMatrix type="solid" />
    </div>
  ),
};

/* ── 4. Type / Dashed ────────────────────────────────────────────────────── */
export const TypeDashed: Story = {
  name: 'Type / Dashed',
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
  name: 'Type / Dotted',
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
  render: () => {
    const gridCols = `80px ${ALL_SIZES.map((s) => `${SIZE_WIDTHS[s]}px`).join(' ')}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {ALL_STATES.map((state) => (
          <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={TYPE_TITLE}>State: {state}</div>
            <div style={CARD}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: gridCols }}>
                <div style={{ ...HEADER_CELL, borderLeft: 'none', background: 'var(--global-color-neutral-gray-100)' }} />
                {ALL_SIZES.map((size) => (
                  <div key={size} style={HEADER_CELL}>{size}</div>
                ))}
              </div>
              {/* Type rows */}
              {ALL_TYPES.map((type, tIdx) => (
                <div
                  key={type}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: gridCols,
                    borderTop: tIdx > 0 ? '1px solid var(--global-color-neutral-gray-200)' : undefined,
                    background: tIdx % 2 === 0 ? 'var(--global-color-base-white)' : 'var(--global-color-neutral-gray-50)',
                  }}
                >
                  <div style={{ padding: '14px 12px', display: 'flex', alignItems: 'center', ...LABEL_STYLE }}>{type}</div>
                  {ALL_SIZES.map((size) => (
                    <div key={size} style={{ borderLeft: '1px solid var(--global-color-neutral-gray-200)', padding: '14px 0', display: 'flex', alignItems: 'center' }}>
                      <StepperConnectors type={type} state={state} size={size} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/* ── 7. Sizes ────────────────────────────────────────────────────────────── */
export const Sizes: Story = {
  name: 'Sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={TYPE_TITLE}>Size: {size}</div>
          <div
            style={{
              ...CARD,
              display: 'flex',
              gap: 24,
              padding: '16px 12px',
              alignItems: 'center',
            }}
          >
            {ALL_TYPES.map((type) => (
              <div
                key={type}
                style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}
              >
                <span style={LABEL_STYLE}>{type}</span>
                <div style={{ width: SIZE_WIDTHS[size], display: 'flex' }}>
                  <StepperConnectors type={type} state="default" size={size} />
                </div>
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
        <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={TYPE_TITLE}>State: {state}</div>
          <div style={{ ...CARD, display: 'flex', gap: 32, padding: '16px 20px', alignItems: 'flex-start' }}>
            {ALL_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={LABEL_STYLE}>{type}</span>
                <div style={{ height: 80, display: 'flex', alignItems: 'center' }}>
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
      {/* Horizontal — all types */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {ALL_TYPES.map((type) => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={TYPE_TITLE}>{type}</div>
            <TypeMatrix type={type} />
          </div>
        ))}
      </div>

      {/* Vertical orientation */}
      <div>
        <div style={{ ...TYPE_TITLE, marginBottom: 12 }}>Vertical orientation</div>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' as const }}>
          {ALL_TYPES.map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={LABEL_STYLE}>{type}</span>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
                {ALL_STATES.map((state) => (
                  <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ height: 80, display: 'flex', alignItems: 'center' }}>
                      <StepperConnectors type={type} state={state} orientation="vertical" />
                    </div>
                    <span style={{ ...LABEL_STYLE, whiteSpace: 'nowrap' as const }}>{state}</span>
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
