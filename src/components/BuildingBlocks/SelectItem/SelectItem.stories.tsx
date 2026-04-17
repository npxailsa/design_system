import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { SelectItem } from './SelectItem';
import { SelectItemDocs } from './SelectItemDocs';
import type { SelectItemSize, SelectItemState, SelectItemType } from './SelectItem';

const ALL_SIZES:  SelectItemSize[]  = ['small', 'default', 'large'];
const ALL_TYPES:  SelectItemType[]  = ['checkbox', 'radio'];
const ALL_STATES: SelectItemState[] = ['default', 'selected', 'some-selected', 'hover', 'clicked'];

const meta: Meta<typeof SelectItem> = {
  title: 'Foundation/BuildingBlocks/SelectItem',
  component: SelectItem,
  parameters: {
    docs: { page: () => <SelectItemDocs /> },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ALL_TYPES,
      description: 'Which control type to render',
    },
    state: {
      control: 'select',
      options: ALL_STATES,
      description: 'Interaction / visual state',
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
      description: 'Visual scale (18 / 22 / 26 px)',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and dims the indicator',
    },
  },
  args: {
    type:     'checkbox',
    state:    'default',
    size:     'default',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SelectItem>;

/* ══════════════════════════════════════════════════════════════
   1. DOCUMENTATION
   ══════════════════════════════════════════════════════════════ */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SelectItemDocs />,
  parameters: {
    controls: { disable: true },
    actions:  { disable: true },
    layout:   'fullscreen',
    chromatic: { disableSnapshot: true },
  },
};

/* ══════════════════════════════════════════════════════════════
   2. PLAYGROUND
   ══════════════════════════════════════════════════════════════ */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const Demo = () => {
      const [checked, setChecked] = useState(
        args.state === 'selected' || args.state === 'hover' || args.state === 'clicked',
      );
      return (
        <div style={{ padding: '40px 24px' }}>
          <SelectItem
            {...args}
            state={checked ? 'selected' : 'default'}
            onChange={setChecked}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

/* ══════════════════════════════════════════════════════════════
   3. DEFAULT
   ══════════════════════════════════════════════════════════════ */
export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '40px 24px', alignItems: 'center' }}>
      <SelectItem type="checkbox" state="default" />
      <SelectItem type="radio"    state="default" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   4. SIZES
   ══════════════════════════════════════════════════════════════ */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '40px 24px' }}>
      {ALL_TYPES.map((type) => (
        <div key={type}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '12px' }}>
            {type}
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {ALL_SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <SelectItem type={type} size={size} state="selected" />
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'capitalize' }}>{size}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   5. STATUS — CHECKBOX
   ══════════════════════════════════════════════════════════════ */
export const StatusCheckbox: Story = {
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [state, setState] = useState<SelectItemState>('default');
      const cycle: SelectItemState[] = ['default', 'selected', 'some-selected'];
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 24px' }}>
          <p style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-500)', margin: '0 0 8px' }}>
            Click to cycle: default → selected → indeterminate
          </p>
          <SelectItem
            type="checkbox"
            state={state}
            size="default"
            onChange={() => {
              setState((s) => cycle[(cycle.indexOf(s) + 1) % cycle.length]);
            }}
          />
        </div>
      );
    };
    return <CheckboxDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   6. STATUS — RADIO
   ══════════════════════════════════════════════════════════════ */
export const StatusRadio: Story = {
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState(false);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 24px' }}>
          <p style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: '14px', color: 'var(--global-color-neutral-gray-500)', margin: '0 0 8px' }}>
            Click to toggle
          </p>
          <SelectItem type="radio" state={selected ? 'selected' : 'default'} onChange={setSelected} />
        </div>
      );
    };
    return <RadioDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   7. STATUS — DISABLED
   ══════════════════════════════════════════════════════════════ */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '40px 24px', flexWrap: 'wrap' }}>
      {ALL_TYPES.map((type) => (
        <div key={type}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '12px' }}>
            {type} — disabled
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <SelectItem type={type} state="default"  disabled />
            <SelectItem type={type} state="selected" disabled />
            {type === 'checkbox' && <SelectItem type={type} state="some-selected" disabled />}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   8. COMPONENT BREAKDOWN
   ══════════════════════════════════════════════════════════════ */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px 24px' }}>
      {ALL_TYPES.map((type) => (
        <div key={type}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize', marginBottom: '16px' }}>
            {type}
          </div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {ALL_SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize' }}>
                  {size}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {ALL_STATES.filter((s) => type === 'checkbox' || s !== 'some-selected').map((state) => (
                    <div key={state} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SelectItem type={type} size={size} state={state} />
                      <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)' }}>{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   9. ALL INTERACTIVE STATES
   ══════════════════════════════════════════════════════════════ */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ padding: '40px 24px', overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'separate', borderSpacing: '16px 8px' }}>
        <thead>
          <tr>
            <th style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 700, color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.6px', textAlign: 'left', paddingBottom: '8px' }}>
              Type
            </th>
            {[...ALL_STATES, 'disabled', 'disabled+checked'].map((s) => (
              <th key={s} style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', fontWeight: 700, color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.6px', textAlign: 'center', paddingBottom: '8px' }}>
                {s}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ALL_TYPES.map((type) => (
            <tr key={type}>
              <td style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize', paddingRight: '16px' }}>
                {type}
              </td>
              {ALL_STATES.filter((s) => type === 'checkbox' || s !== 'some-selected').map((state) => (
                <td key={state} style={{ textAlign: 'center', verticalAlign: 'middle', padding: '6px 8px' }}>
                  <SelectItem type={type} state={state} />
                </td>
              ))}
              {type === 'radio' && <td />}
              <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '6px 8px' }}>
                <SelectItem type={type} state="default" disabled />
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle', padding: '6px 8px' }}>
                <SelectItem type={type} state="selected" disabled />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   10. FULL DESIGN MATRIX
   Mirrors the Figma select.pdf matrix:
     Rows: checkbox small, checkbox default, checkbox large,
           radio small, radio default, radio large
     Cols: default, selected, indeterminate, hover, clicked,
           disabled-default, disabled-selected, disabled-indeterminate
   ══════════════════════════════════════════════════════════════ */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    type MatrixCol = { label: string; state: SelectItemState; disabled?: boolean };

    const checkboxCols: MatrixCol[] = [
      { label: 'Default',              state: 'default'       },
      { label: 'Selected',             state: 'selected'      },
      { label: 'Indeterminate',        state: 'some-selected' },
      { label: 'Hover',                state: 'hover'         },
      { label: 'Clicked',              state: 'clicked'       },
      { label: 'Disabled',             state: 'default',  disabled: true },
      { label: 'Disabled+Selected',    state: 'selected', disabled: true },
      { label: 'Disabled+Indet.',      state: 'some-selected', disabled: true },
    ];

    const radioCols: MatrixCol[] = [
      { label: 'Default',           state: 'default'  },
      { label: 'Selected',          state: 'selected' },
      { label: 'Hover',             state: 'hover'    },
      { label: 'Clicked',           state: 'clicked'  },
      { label: 'Disabled',          state: 'default',  disabled: true },
      { label: 'Disabled+Selected', state: 'selected', disabled: true },
    ];

    const headerSx: React.CSSProperties = {
      fontFamily:    'var(--brand-font-primary)',
      fontSize:      '9px',
      fontWeight:    700,
      color:         'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      textAlign:     'center',
      padding:       '0 8px 10px',
      whiteSpace:    'nowrap',
    };

    const rowLabelSx: React.CSSProperties = {
      fontFamily:   'var(--brand-font-primary)',
      fontSize:     '10px',
      color:        'var(--global-color-neutral-gray-400)',
      paddingRight: '12px',
      whiteSpace:   'nowrap',
      textAlign:    'right',
      verticalAlign: 'middle',
    };

    return (
      <div style={{ padding: '32px 24px', overflowX: 'auto' }}>
        {/* CHECKBOX section */}
        <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>
          Checkbox
        </div>
        <table style={{ borderCollapse: 'separate', borderSpacing: '4px', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th style={{ width: '80px' }} />
              {checkboxCols.map((c) => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map((size) => (
              <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {checkboxCols.map((c) => (
                  <td key={c.label} style={{ textAlign: 'center', verticalAlign: 'middle', padding: '10px 8px', overflow: 'visible' }}>
                    <SelectItem type="checkbox" size={size} state={c.state} disabled={c.disabled} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* RADIO section */}
        <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>
          Radio
        </div>
        <table style={{ borderCollapse: 'separate', borderSpacing: '4px' }}>
          <thead>
            <tr>
              <th style={{ width: '80px' }} />
              {radioCols.map((c) => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map((size) => (
              <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {radioCols.map((c) => (
                  <td key={c.label} style={{ textAlign: 'center', verticalAlign: 'middle', padding: '10px 8px', overflow: 'visible' }}>
                    <SelectItem type="radio" size={size} state={c.state} disabled={c.disabled} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
