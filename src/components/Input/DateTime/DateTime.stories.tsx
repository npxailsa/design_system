import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateTime } from './DateTime';
import { DateTimeDocs } from './DateTimeDocs';

/* ── Meta ─────────────────────────────────────────────────────────────────── */

const meta: Meta<typeof DateTime> = {
  title: 'Atoms/Input/DateTime',
  component: DateTime,
  parameters: { layout: 'padded' },
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'time'],
      description: 'Whether the field captures a date or a time value',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Visual size of the field',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Validation / semantic state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the field',
    },
    label: {
      control: 'text',
      description: 'Label displayed above the field',
    },
    helperText: {
      control: 'text',
      description: 'Helper / validation message shown below',
    },
  },
  args: {
    type: 'date',
    size: 'default',
    state: 'default',
    disabled: false,
    label: 'Date',
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

/* ── 1. Documentation ─────────────────────────────────────────────────────── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <DateTimeDocs />,
  parameters: { controls: { disable: true } },
};

/* ── 2. Playground ────────────────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const [val, setVal] = useState('');
    return (
      <div style={{ maxWidth: 320 }}>
        <DateTime {...args} value={val} onChange={setVal} />
      </div>
    );
  },
};

/* ── 3. Default ───────────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      <div style={{ width: 200 }}>
        <DateTime type="date" label="Date" />
      </div>
      <div style={{ width: 220 }}>
        <DateTime type="time" label="Time" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 4. Sizes ─────────────────────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 500 }}>
      {(['small', 'default', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
          <div style={{ width: 200 }}>
            <DateTime type="date" label={`Date — ${size}`} size={size} value="2024-03-15" />
          </div>
          <div style={{ width: 220 }}>
            <DateTime type="time" label={`Time — ${size}`} size={size} value="14:30:00" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 5. States ────────────────────────────────────────────────────────────── */

export const States: Story = {
  name: 'States',
  render: () => {
    const StateRow: React.FC<{ state: 'default' | 'error' | 'warning' | 'success' }> = ({ state }) => {
      const [dateVal, setDateVal] = useState('2024-03-15');
      const [timeVal, setTimeVal] = useState('14:30:00');
      const label = state.charAt(0).toUpperCase() + state.slice(1);
      const helper = state !== 'default' ? `${label} — please review this value` : undefined;
      return (
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
          <div style={{ width: 220 }}>
            <DateTime
              type="date"
              label={`Date — ${label}`}
              value={dateVal}
              onChange={setDateVal}
              state={state}
              helperText={helper}
            />
          </div>
          <div style={{ width: 240 }}>
            <DateTime
              type="time"
              label={`Time — ${label}`}
              value={timeVal}
              onChange={setTimeVal}
              state={state}
              helperText={helper}
            />
          </div>
        </div>
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <StateRow state="default" />
        <StateRow state="error" />
        <StateRow state="warning" />
        <StateRow state="success" />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 6. All Input States ──────────────────────────────────────────────────── */

export const AllInputStates: Story = {
  name: 'All Input States',
  render: () => {
    const Grid: React.FC<{ type: 'date' | 'time'; size: 'small' | 'default' | 'large' }> = ({ type, size }) => {
      const label = type === 'date' ? 'Date' : 'Time';
      const filledValue = type === 'date' ? '2024-03-15' : '14:30:00';
      const width = type === 'date' ? 180 : 200;

      const [filledVal, setFilledVal] = useState(filledValue);

      return (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {/* Empty */}
          <div style={{ width }}>
            <DateTime type={type} label={`${label} — empty`} size={size} />
          </div>
          {/* Filled */}
          <div style={{ width }}>
            <DateTime
              type={type}
              label={`${label} — filled`}
              value={filledVal}
              onChange={setFilledVal}
              size={size}
            />
          </div>
          {/* Disabled empty */}
          <div style={{ width }}>
            <DateTime type={type} label={`${label} — disabled`} size={size} disabled />
          </div>
          {/* Disabled filled */}
          <div style={{ width }}>
            <DateTime type={type} label={`${label} — disabled filled`} value={filledValue} size={size} disabled />
          </div>
        </div>
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size}>
            <p style={{
              marginBottom: 12,
              fontWeight: 600,
              fontSize: 11,
              color: '#6d7280',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              Size: {size}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Grid type="date" size={size} />
              <Grid type="time" size={size} />
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 7. Disabled ──────────────────────────────────────────────────────────── */

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      <div style={{ width: 200 }}>
        <DateTime type="date" label="Date — disabled" disabled />
      </div>
      <div style={{ width: 200 }}>
        <DateTime type="date" label="Date — disabled filled" value="2024-03-15" disabled />
      </div>
      <div style={{ width: 220 }}>
        <DateTime type="time" label="Time — disabled" disabled />
      </div>
      <div style={{ width: 220 }}>
        <DateTime type="time" label="Time — disabled filled" value="14:30:00" disabled />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
