import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import DropdownDocs from './DropdownDocs';
import type { DropdownOption } from './Dropdown';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

/* ── Meta ─────────────────────────────────────────────────── */

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Input/Dropdown',
  component: Dropdown,
  parameters: { layout: 'padded' },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Visual size of the trigger and menu items',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Validation / semantic state',
    },
    multiSelect: {
      control: 'boolean',
      description: 'Enable multi-select with checkboxes',
    },
    searchable: {
      control: 'boolean',
      description: 'Allow typing to filter options',
    },
    clearable: {
      control: 'boolean',
      description: 'Show a clear button when a value is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the dropdown',
    },
  },
  args: {
    size: 'default',
    state: 'default',
    multiSelect: false,
    searchable: false,
    clearable: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/* ── Shared data ─────────────────────────────────────────── */

const baseOptions: DropdownOption[] = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

const mixedOptions: DropdownOption[] = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Label',     leadingIcon: PersonIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

const CARD_STYLE: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50)',
  border: '1px solid var(--global-color-neutral-gray-200)',
  borderRadius: 'var(--global-spacing-radius-md, 8px)',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

/* ── Stateful wrapper for args-driven stories ─────────────── */
const ControlledSingle: React.FC<React.ComponentProps<typeof Dropdown>> = (args) => {
  const [val, setVal] = useState<string | number | null>(null);
  return <Dropdown {...args} value={val} onChange={(v) => setVal(v)} />;
};

const ControlledMulti: React.FC<React.ComponentProps<typeof Dropdown>> = (args) => {
  const [vals, setVals] = useState<(string | number)[]>([]);
  return (
    <Dropdown
      {...args}
      multiSelect
      values={vals}
      onMultiChange={(v) => setVals(v)}
    />
  );
};

/* ── 1 — Documentation ─────────────────────────────────────── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <DropdownDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

/* ── 2 — Playground ────────────────────────────────────────── */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [vals, setVals] = useState<(string | number)[]>([]);
    return args.multiSelect ? (
      <div style={{ maxWidth: 320 }}>
        <Dropdown
          {...args}
          options={mixedOptions}
          values={vals}
          onMultiChange={(v) => setVals(v)}
        />
      </div>
    ) : (
      <div style={{ maxWidth: 320 }}>
        <Dropdown
          {...args}
          options={baseOptions}
          value={val}
          onChange={(v) => setVal(v)}
        />
      </div>
    );
  },
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    leadingIcon: AppsIcon,
    clearable: true,
  },
};

/* ── 3 — Default ──────────────────────────────────────────── */
export const Default: Story = {
  name: 'Default',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(null);
    return (
      <div style={{ maxWidth: 300 }}>
        <Dropdown
          label="Input name"
          placeholder="Placeholder text"
          options={baseOptions}
          value={val}
          onChange={(v) => setVal(v)}
          leadingIcon={AppsIcon}
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 4 — Sizes ─────────────────────────────────────────────── */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      {(['small', 'default', 'large'] as const).map((size) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [val, setVal] = useState<string | number | null>(null);
        return (
          <div key={size}>
            <div style={LABEL_STYLE}>{size}</div>
            <Dropdown
              label="Input name"
              placeholder="Placeholder text"
              options={baseOptions}
              value={val}
              onChange={(v) => setVal(v)}
              leadingIcon={AppsIcon}
              clearable
              size={size}
            />
          </div>
        );
      })}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 5 — Status: Single Select ────────────────────────────── */
export const StatusSingleSelect: Story = {
  name: 'Status — Single Select',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 320 }}>
        <div style={LABEL_STYLE}>Closed (default)</div>
        <Dropdown
          label="Input name"
          placeholder="Placeholder text"
          options={baseOptions}
          value={null}
          onChange={() => {}}
          leadingIcon={AppsIcon}
        />

        <div style={LABEL_STYLE}>Open — simple list (click to open)</div>
        <Dropdown
          label="Input name"
          placeholder="Placeholder text"
          options={baseOptions}
          value={val}
          onChange={(v) => setVal(v)}
          leadingIcon={AppsIcon}
          clearable
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 5b — Status: Multi-Select ────────────────────────────── */
export const StatusMultiSelect: Story = {
  name: 'Status — Multi-Select',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [vals, setVals] = useState<(string | number)[]>([2]);
    return (
      <div style={{ maxWidth: 320 }}>
        <Dropdown
          label="Input name"
          placeholder="Placeholder text"
          options={mixedOptions}
          multiSelect
          values={vals}
          onMultiChange={(v) => setVals(v)}
          leadingIcon={AppsIcon}
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 5c — Status: Searchable ──────────────────────────────── */
export const StatusSearchable: Story = {
  name: 'Status — Searchable',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(3);
    return (
      <div style={{ maxWidth: 320 }}>
        <Dropdown
          label="Input name"
          placeholder="Type to search…"
          options={baseOptions}
          value={val}
          onChange={(v) => setVal(v)}
          leadingIcon={AppsIcon}
          searchable
          clearable
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── 5d — Status: Disabled ────────────────────────────────── */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Dropdown
        label="Input name"
        placeholder="Placeholder text"
        options={baseOptions}
        disabled
        leadingIcon={AppsIcon}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 6 — All Interactive States ───────────────────────────── */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: 360 }}>
      {([
        { key: 'default',  label: 'Default / Closed',    state: 'default' as const },
        { key: 'error',    label: 'Error',                state: 'error'   as const, helperText: 'This field is required.' },
        { key: 'warning',  label: 'Warning',              state: 'warning' as const, helperText: 'Please review your selection.' },
        { key: 'success',  label: 'Success',              state: 'success' as const, helperText: 'Selection confirmed.' },
      ]).map(({ key, label, state, helperText }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [val, setVal] = useState<string | number | null>(key === 'success' ? 1 : null);
        return (
          <div key={key}>
            <div style={LABEL_STYLE}>{label}</div>
            <Dropdown
              label="Input name"
              placeholder="Placeholder text"
              options={baseOptions}
              value={val}
              onChange={(v) => setVal(v)}
              state={state}
              helperText={helperText}
              leadingIcon={AppsIcon}
              clearable
            />
          </div>
        );
      })}
      <div>
        <div style={LABEL_STYLE}>Disabled</div>
        <Dropdown
          label="Input name"
          placeholder="Placeholder text"
          options={baseOptions}
          disabled
          leadingIcon={AppsIcon}
        />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 7 — Component Breakdown ──────────────────────────────── */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 480, padding: '24px' }}>
      <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontWeight: 600, fontSize: '14px', margin: 0 }}>
        Dropdown = Trigger + Menu panel
      </h3>
      <div style={CARD_STYLE}>
        <div>
          <div style={LABEL_STYLE}>Trigger (closed)</div>
          <Dropdown
            label="Input name"
            placeholder="Placeholder text"
            options={baseOptions}
            leadingIcon={AppsIcon}
          />
        </div>
        <div>
          <div style={LABEL_STYLE}>Trigger with leading icon + tags (multi-select)</div>
          <Dropdown
            label="Input name"
            placeholder="Placeholder text"
            options={mixedOptions}
            multiSelect
            values={[2]}
            onMultiChange={() => {}}
            leadingIcon={AppsIcon}
          />
        </div>
        <div>
          <div style={LABEL_STYLE}>Searchable trigger with cursor</div>
          <Dropdown
            label="Input name"
            placeholder="Type to search…"
            options={baseOptions}
            searchable
            leadingIcon={AppsIcon}
          />
        </div>
      </div>
      <code style={{ fontSize: '11px', background: 'var(--global-color-neutral-gray-100)', padding: '8px 12px', borderRadius: '4px' }}>
        {'<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />'}
      </code>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── 8 — Full Design Matrix ───────────────────────────────── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const states = ['default', 'error', 'warning', 'success'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Single select × size */}
        <div>
          <div style={{ ...LABEL_STYLE, fontSize: '14px', marginBottom: '16px' }}>
            Single Select — Sizes
          </div>
          <div style={CARD_STYLE}>
            {sizes.map((size) => (
              <div key={size}>
                <div style={LABEL_STYLE}>{size}</div>
                <Dropdown
                  label="Input name"
                  placeholder="Placeholder text"
                  options={baseOptions}
                  leadingIcon={AppsIcon}
                  clearable
                  size={size}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Single select × states */}
        <div>
          <div style={{ ...LABEL_STYLE, fontSize: '14px', marginBottom: '16px' }}>
            Single Select — Validation States
          </div>
          <div style={CARD_STYLE}>
            {states.map((state) => (
              <div key={state}>
                <div style={LABEL_STYLE}>{state}</div>
                <Dropdown
                  label="Input name"
                  placeholder="Placeholder text"
                  options={baseOptions}
                  leadingIcon={AppsIcon}
                  state={state}
                  helperText={state !== 'default' ? `${state} helper text` : undefined}
                />
              </div>
            ))}
            <div>
              <div style={LABEL_STYLE}>disabled</div>
              <Dropdown
                label="Input name"
                placeholder="Placeholder text"
                options={baseOptions}
                leadingIcon={AppsIcon}
                disabled
              />
            </div>
          </div>
        </div>

        {/* Multi-select × size */}
        <div>
          <div style={{ ...LABEL_STYLE, fontSize: '14px', marginBottom: '16px' }}>
            Multi-Select — Sizes
          </div>
          <div style={CARD_STYLE}>
            {sizes.map((size) => (
              <div key={size}>
                <div style={LABEL_STYLE}>{size} — 1 selected</div>
                <Dropdown
                  label="Input name"
                  placeholder="Placeholder text"
                  options={mixedOptions}
                  multiSelect
                  values={[2]}
                  onMultiChange={() => {}}
                  leadingIcon={AppsIcon}
                  size={size}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Searchable */}
        <div>
          <div style={{ ...LABEL_STYLE, fontSize: '14px', marginBottom: '16px' }}>
            Searchable
          </div>
          <div style={CARD_STYLE}>
            {sizes.map((size) => (
              <div key={size}>
                <div style={LABEL_STYLE}>{size}</div>
                <Dropdown
                  label="Input name"
                  placeholder="Type to search…"
                  options={baseOptions}
                  searchable
                  clearable
                  leadingIcon={AppsIcon}
                  size={size}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
