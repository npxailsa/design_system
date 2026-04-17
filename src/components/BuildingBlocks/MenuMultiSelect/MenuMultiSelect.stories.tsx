import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { MenuMultiSelect } from './MenuMultiSelect';
import { MenuMultiSelectDocs } from './MenuMultiSelectDocs';
import type { MenuMultiSelectSize, MenuMultiSelectPosition, MenuMultiSelectSelectionType } from './MenuMultiSelect';

const meta: Meta<typeof MenuMultiSelect> = {
  title: 'Foundation/BuildingBlocks/MenuMultiSelect',
  component: MenuMultiSelect,
  parameters: {
    docs: {
      page: () => <MenuMultiSelectDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Controls padding, font size, and indicator dimensions',
    },
    position: {
      control: 'select',
      options: ['top', 'mid', 'bottom', 'solo'],
      description: 'Controls border-radius and which border edges are rendered',
    },
    selectionType: {
      control: 'select',
      options: ['none', 'checkbox', 'radio'],
      description: 'Which selection indicator to render alongside the label',
    },
    selected: {
      control: 'boolean',
      description: 'Whether this option is currently selected/checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and renders in a muted style',
    },
    label: {
      control: 'text',
      description: 'Visible label text',
    },
  },
  args: {
    label: 'Option label',
    size: 'default',
    position: 'solo',
    selectionType: 'none',
    selected: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof MenuMultiSelect>;

/* ══════════════════════════════════════════════════════════════
   1. DOCUMENTATION
   ══════════════════════════════════════════════════════════════ */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <MenuMultiSelectDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
    chromatic: { disableSnapshot: true },
  },
};

/* ══════════════════════════════════════════════════════════════
   2. PLAYGROUND
   ══════════════════════════════════════════════════════════════ */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ maxWidth: '320px', padding: '24px' }}>
      <MenuMultiSelect {...args} />
    </div>
  ),
};

/* ══════════════════════════════════════════════════════════════
   3. DEFAULT
   ══════════════════════════════════════════════════════════════ */
export const Default: Story = {
  name: 'Default',
  render: () => (
    <div style={{ maxWidth: '280px', padding: '24px' }}>
      <MenuMultiSelect label="Option label" position="solo" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   4. SIZES
   ══════════════════════════════════════════════════════════════ */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => {
    const sizes: MenuMultiSelectSize[] = ['small', 'default', 'large'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '360px' }}>
        {sizes.map((size) => (
          <div key={size}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '6px' }}>
              {size}
            </div>
            <MenuMultiSelect label={`Option label — ${size}`} size={size} position="solo" />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   5. STATUS — PLAIN (no indicator)
   ══════════════════════════════════════════════════════════════ */
export const StatusPlain: Story = {
  name: 'Status — Plain',
  render: () => (
    <div style={{ maxWidth: '280px', padding: '24px' }}>
      <MenuMultiSelect label="Default option" position="top" />
      <MenuMultiSelect label="Hover (interact to see)" position="mid" />
      <MenuMultiSelect label="Selected option" position="mid" selected />
      <MenuMultiSelect label="Disabled option" position="bottom" disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   6. STATUS — CHECKBOX (multi-select)
   ══════════════════════════════════════════════════════════════ */
export const StatusCheckbox: Story = {
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [checked, setChecked] = useState<Set<string>>(new Set(['Option B']));
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return (
        <div style={{ maxWidth: '280px', padding: '24px' }}>
          {options.map((opt, i) => {
            const isDisabled = opt.includes('disabled');
            const pos: MenuMultiSelectPosition =
              i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
            return (
              <MenuMultiSelect
                key={opt}
                label={opt}
                position={pos}
                selectionType="checkbox"
                selected={checked.has(opt)}
                disabled={isDisabled}
                onClick={() => {
                  if (isDisabled) return;
                  setChecked((prev) => {
                    const next = new Set(prev);
                    next.has(opt) ? next.delete(opt) : next.add(opt);
                    return next;
                  });
                }}
              />
            );
          })}
        </div>
      );
    };
    return <CheckboxDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   7. STATUS — RADIO (single-select)
   ══════════════════════════════════════════════════════════════ */
export const StatusRadio: Story = {
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState<string>('Option B');
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return (
        <div style={{ maxWidth: '280px', padding: '24px' }}>
          {options.map((opt, i) => {
            const isDisabled = opt.includes('disabled');
            const pos: MenuMultiSelectPosition =
              i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
            return (
              <MenuMultiSelect
                key={opt}
                label={opt}
                position={pos}
                selectionType="radio"
                selected={selected === opt}
                disabled={isDisabled}
                onClick={() => {
                  if (!isDisabled) setSelected(opt);
                }}
              />
            );
          })}
        </div>
      );
    };
    return <RadioDemo />;
  },
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   8. STATUS — DISABLED
   ══════════════════════════════════════════════════════════════ */
export const StatusDisabled: Story = {
  name: 'Status — Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: '320px' }}>
      {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map((type) => (
        <div key={type}>
          <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '6px' }}>
            selectionType="{type}" — disabled
          </div>
          <MenuMultiSelect label="Disabled option" selectionType={type} disabled position="solo" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   9. COMPONENT BREAKDOWN
   ══════════════════════════════════════════════════════════════ */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>
          Position Variants (stacked)
        </div>
        <div style={{ maxWidth: '280px' }}>
          {(['top', 'mid', 'bottom'] as MenuMultiSelectPosition[]).map((pos, i) => (
            <MenuMultiSelect key={pos} label={`Position: "${pos}"`} position={pos} selectionType="checkbox" selected={i === 1} />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>
          Selection Types (solo)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '280px' }}>
          {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map((type) => (
            <MenuMultiSelect key={type} label={`selectionType="${type}"`} selectionType={type} position="solo" />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>
          Sizes
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '280px' }}>
          {(['small', 'default', 'large'] as MenuMultiSelectSize[]).map((size) => (
            <MenuMultiSelect key={size} label={`size="${size}"`} size={size} position="solo" selectionType="radio" />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ══════════════════════════════════════════════════════════════
   10. ALL INTERACTIVE STATES
   ══════════════════════════════════════════════════════════════ */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => {
    const states: Array<{ label: string; selected?: boolean; disabled?: boolean }> = [
      { label: 'Default' },
      { label: 'Selected', selected: true },
      { label: 'Disabled', disabled: true },
      { label: 'Disabled + Selected', disabled: true, selected: true },
    ];
    return (
      <div style={{ display: 'flex', gap: '32px', padding: '24px', flexWrap: 'wrap' }}>
        {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map((type) => (
          <div key={type}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px', textTransform: 'capitalize' }}>
              {type === 'none' ? 'Plain' : type}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' }}>
              {states.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', marginBottom: '2px' }}>{s.label}</div>
                  <MenuMultiSelect
                    label={s.label}
                    selectionType={type}
                    selected={s.selected}
                    disabled={s.disabled}
                    position="solo"
                  />
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

/* ══════════════════════════════════════════════════════════════
   11. FULL DESIGN MATRIX
   ══════════════════════════════════════════════════════════════ */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const sizes: MenuMultiSelectSize[] = ['small', 'default', 'large'];
    const types: MenuMultiSelectSelectionType[] = ['none', 'checkbox', 'radio'];
    const states: Array<{ label: string; selected?: boolean; disabled?: boolean }> = [
      { label: 'Default' },
      { label: 'Selected', selected: true },
      { label: 'Disabled', disabled: true },
    ];

    return (
      <div style={{ padding: '24px', overflowX: 'auto' }}>
        {sizes.map((size) => (
          <div key={size} style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px', textTransform: 'capitalize' }}>
              Size: {size}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `120px repeat(${states.length}, 1fr)`, gap: '8px', alignItems: 'center' }}>
              <div />
              {states.map((s) => (
                <div key={s.label} style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textAlign: 'center' }}>
                  {s.label}
                </div>
              ))}
              {types.map((type) => (
                <React.Fragment key={type}>
                  <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-700)', textTransform: 'capitalize' }}>
                    {type === 'none' ? 'Plain' : type}
                  </div>
                  {states.map((s) => (
                    <MenuMultiSelect
                      key={s.label}
                      label="Option"
                      size={size}
                      selectionType={type}
                      selected={s.selected}
                      disabled={s.disabled}
                      position="solo"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
