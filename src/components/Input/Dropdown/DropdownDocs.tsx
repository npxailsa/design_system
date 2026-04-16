import React, { useState } from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Dropdown } from './Dropdown';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

/* ── Sample data ─────────────────────────────────────────────── */

const baseOptions = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

const mixedOptions = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Label',     leadingIcon: PersonIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

/* ── Shared preview wrapper ──────────────────────────────────── */

const PREVIEW: React.CSSProperties = {
  padding: '24px',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-md, 8px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary, sans-serif)',
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--global-color-neutral-gray-500)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

/* ── Controlled examples (hooks required for interactive demos) ─ */

const SinglePreview: React.FC<{ size?: 'small' | 'default' | 'large' }> = ({ size = 'default' }) => {
  const [val, setVal] = useState<string | number | null>(null);
  return (
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
  );
};

const MultiPreview: React.FC<{ size?: 'small' | 'default' | 'large' }> = ({ size = 'default' }) => {
  const [vals, setVals] = useState<(string | number)[]>([2]);
  return (
    <Dropdown
      label="Input name"
      placeholder="Placeholder text"
      options={mixedOptions}
      multiSelect
      values={vals}
      onMultiChange={(v) => setVals(v)}
      leadingIcon={AppsIcon}
      size={size}
    />
  );
};

const SearchPreview: React.FC = () => {
  const [val, setVal] = useState<string | number | null>(3);
  return (
    <Dropdown
      label="Input name"
      placeholder="Type to search…"
      options={baseOptions}
      value={val}
      onChange={(v) => setVal(v)}
      leadingIcon={SearchIcon}
      searchable
      clearable
    />
  );
};

/* ── Docs page ───────────────────────────────────────────────── */

const DropdownDocs: React.FC = () => (
  <DocsTemplate>
    {/* ── Header ── */}
    <DocsTemplate.Header
      title="Dropdown"
      subtitle="A select / combobox input that supports single selection, multi-selection with tag chips, keyboard-search filtering, and full keyboard navigation. Built on MUI InputBase and Checkbox primitives with all visual treatment via design-token CSS Modules."
    />

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        The Dropdown is built on two MUI primitives — <strong>InputBase</strong> (used as the
        search input when <code>searchable</code> is enabled) and <strong>Checkbox</strong> (used
        for each option in multi-select mode). Both are unstyled, accessible primitives; all
        visual treatment is applied via <code>--dropdown-*</code> design-token CSS Modules.
        No MUI theme override is needed.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`import InputBase from '@mui/material/InputBase';   // search input primitive
import Checkbox  from '@mui/material/Checkbox';      // multi-select option tick

// Usage:
<Dropdown
  label="Select a region"
  options={options}
  leadingIcon={LocationIcon}
  searchable
  clearable
/>

// Multi-select:
<Dropdown
  multiSelect
  values={selected}
  onMultiChange={(ids) => setSelected(ids)}
  options={options}
/>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.BodyText>
        The Dropdown is composed of three visual regions: the <strong>trigger</strong> (the
        clickable row the user sees when the menu is closed), the <strong>menu panel</strong>{' '}
        (the list of options shown when open), and the optional <strong>helper text</strong>{' '}
        shown below the trigger for validation feedback.
      </DocsTemplate.BodyText>
      <DocsTemplate.Anatomy
        preview={
          <div style={{ padding: '16px', maxWidth: 320 }}>
            <SinglePreview />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Label',
            token: '--dropdown-label-font\n--dropdown-label-color',
            description: 'Optional field label above the trigger, using the primary brand font.',
          },
          {
            id: 2,
            name: 'Leading icon',
            token: '--dropdown-icon-color\n--dropdown-icon-size-default',
            description: 'Optional icon on the left of the trigger indicating the field context.',
          },
          {
            id: 3,
            name: 'Display text / tag chips',
            token: '--dropdown-text-color\n--dropdown-placeholder-color',
            description: 'Shows the selected option label (single-select) or tag chips (multi-select). Shows placeholder when nothing is selected.',
          },
          {
            id: 4,
            name: 'Clear button (×)',
            token: '--dropdown-clear-color',
            description: 'Appears when a value is selected and clearable is true. Resets the selection on click.',
          },
          {
            id: 5,
            name: 'Chevron',
            token: '--dropdown-chevron-color',
            description: 'Indicates open/closed state. Rotates to ExpandLess when the menu is open.',
          },
          {
            id: 6,
            name: 'Menu option',
            token: '--dropdown-option-font\n--dropdown-option-selected-bg',
            description: 'Each option row has an optional leading icon, label, and trailing checkbox (multi) or chevron-right (keyboard active).',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Single Select ── */}
    <DocsTemplate.Section title="Single Select">
      <DocsTemplate.BodyText>
        Pass <code>value</code> and <code>onChange</code> to control a single selection.
        The selected option's label replaces the placeholder in the trigger. Add{' '}
        <code>clearable</code> to show the × button when a value is selected.
      </DocsTemplate.BodyText>
      <div style={{ ...PREVIEW, maxWidth: 320 }}>
        <SinglePreview />
      </div>
    </DocsTemplate.Section>

    {/* ── Multi-Select ── */}
    <DocsTemplate.Section title="Multi-Select">
      <DocsTemplate.BodyText>
        Enable <code>multiSelect</code> and pass <code>values</code> +{' '}
        <code>onMultiChange</code>. Each option renders a checkbox; selected options appear as
        Tag chips inside the trigger and can be individually removed. The clear (×) button
        removes all selections at once.
      </DocsTemplate.BodyText>
      <div style={{ ...PREVIEW, maxWidth: 320 }}>
        <MultiPreview />
      </div>
    </DocsTemplate.Section>

    {/* ── Searchable ── */}
    <DocsTemplate.Section title="Searchable">
      <DocsTemplate.BodyText>
        Add <code>searchable</code> to allow the user to type in the trigger when the dropdown
        is open. The option list filters in real time against the typed query. Full keyboard
        navigation is supported: <kbd>↑</kbd> / <kbd>↓</kbd> to move, <kbd>Enter</kbd> to
        select, <kbd>Escape</kbd> to dismiss.
      </DocsTemplate.BodyText>
      <div style={{ ...PREVIEW, maxWidth: 320 }}>
        <SearchPreview />
      </div>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes are available — <code>small</code>, <code>default</code>, and{' '}
        <code>large</code>. The size prop controls the trigger height, padding, font size, and
        icon size across both the trigger and the open menu panel.
      </DocsTemplate.BodyText>
      <div style={PREVIEW}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size}>
            <div style={LABEL}>{size}</div>
            <SinglePreview size={size} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Validation States ── */}
    <DocsTemplate.Section title="Validation States">
      <DocsTemplate.BodyText>
        The <code>state</code> prop drives the trigger border colour and helper text colour.
        All four validation states are available in addition to the default and disabled styles.
      </DocsTemplate.BodyText>
      <div style={PREVIEW}>
        {([
          { state: 'default'  as const, text: undefined,                              label: 'Default' },
          { state: 'error'    as const, text: 'This field is required.',               label: 'Error' },
          { state: 'warning'  as const, text: 'Are you sure about this selection?',   label: 'Warning' },
          { state: 'success'  as const, text: 'Selection confirmed.',                 label: 'Success' },
        ]).map(({ state, text, label }) => (
          <div key={state}>
            <div style={LABEL}>{label}</div>
            <Dropdown
              label="Input name"
              placeholder="Placeholder text"
              options={baseOptions}
              state={state}
              helperText={text}
              leadingIcon={AppsIcon}
            />
          </div>
        ))}
        <div>
          <div style={LABEL}>Disabled</div>
          <Dropdown
            label="Input name"
            placeholder="Placeholder text"
            options={baseOptions}
            disabled
            leadingIcon={AppsIcon}
          />
        </div>
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        All visual values are driven by <code>--dropdown-*</code> tokens defined in{' '}
        <code>tokens.css</code>. Where appropriate, dropdown tokens alias back to their{' '}
        <code>--simple-field-*</code> equivalents so both inputs share the same visual baseline.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Layout &amp; Spacing">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--dropdown-height-small',        description: 'Trigger height — small (32 px via --simple-field-height-small)' },
            { name: '--dropdown-height-default',      description: 'Trigger height — default (44 px via --simple-field-height-default)' },
            { name: '--dropdown-height-large',        description: 'Trigger height — large (52 px via --simple-field-height-large)' },
            { name: '--dropdown-border-radius',       description: 'Trigger corner radius (4 px via --global-spacing-radius-4px)' },
            { name: '--dropdown-border-width',        description: 'Trigger border thickness (0.5 px via --global-spacing-stroke-0-5px)' },
            { name: '--dropdown-gap',                 description: 'Gap between trigger elements (8 px via --global-spacing-sizing-8px)' },
            { name: '--dropdown-menu-max-height',     description: 'Maximum height of the open menu panel (280 px)' },
            { name: '--dropdown-menu-radius',         description: 'Bottom corner radius of the menu panel (6 px)' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Colours — Trigger">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--dropdown-bg',                  description: 'Trigger background — white (--global-color-base-white)' },
            { name: '--dropdown-border-color',        description: 'Default border — neutral-gray-300 (#d2d5da)' },
            { name: '--dropdown-border-color-focus',  description: 'Focused / open border — brand-primary (#3776ce)' },
            { name: '--dropdown-text-color',          description: 'Selected value text — base-black (#1c1c1c)' },
            { name: '--dropdown-placeholder-color',   description: 'Placeholder text — neutral-gray-400 (#9ca3af)' },
            { name: '--dropdown-icon-color',          description: 'Leading icon default — neutral-gray-500' },
            { name: '--dropdown-chevron-color',       description: 'Chevron default — neutral-gray-500' },
            { name: '--dropdown-clear-color',         description: 'Clear button — neutral-gray-400' },
            { name: '--dropdown-bg-disabled',         description: 'Disabled background — neutral-gray-100 (#f3f4f6)' },
            { name: '--dropdown-border-color-error',  description: 'Error border — status-red (#ce2031)' },
            { name: '--dropdown-border-color-warning',description: 'Warning border — status-dark-orange (#d07c06)' },
            { name: '--dropdown-border-color-success',description: 'Success border — status-dark-green (#227f1a)' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Colours — Menu Options">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--dropdown-option-selected-bg',   description: 'Selected option background — primary-sky-blue-50 (#f4fcff)' },
            { name: '--dropdown-option-selected-color', description: 'Selected option text — brand-primary (#3776ce)' },
            { name: '--dropdown-option-active-bg',     description: 'Keyboard-active option background — primary-sky-blue-100 (#d6f0fb)' },
            { name: '--dropdown-option-hover-bg',      description: 'Hovered option background — neutral-gray-50 (#f9fafb)' },
            { name: '--dropdown-checkbox-color',       description: 'Checked checkbox fill — brand-primary (#3776ce)' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Usage Principles ── */}
    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Use for 5+ options">
          Prefer a Dropdown over radio buttons or a segmented control when there are five or
          more options. For fewer options, consider an inline control to reduce interaction cost.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Always provide a placeholder">
          The placeholder communicates what type of selection is expected. Keep it brief and
          descriptive — e.g. "Select a region" rather than just "Select".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Lead with context icons">
          Use leading icons only when they add semantic meaning (e.g. a person icon for a user
          selector). Avoid decorative icons that add visual noise without aiding comprehension.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Validate inline">
          Surface errors, warnings, and success messages as helper text directly below the trigger
          using the state prop. Do not rely solely on toasts or page-level messages for form
          validation.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    {/* ── Do and Don't ── */}
    <DocsTemplate.Section title="Do and Don't">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ width: '100%' }}>
              <Dropdown
                label="Country"
                placeholder="Select a country"
                options={baseOptions}
                leadingIcon={AppsIcon}
                size="small"
              />
            </div>
          ),
          label: 'Use a clear, descriptive placeholder',
          description:
            'Give the user context about what they are selecting. A well-named placeholder removes the need for a separate instruction.',
        }}
        dontItem={{
          icon: (
            <div style={{ width: '100%' }}>
              <Dropdown
                placeholder="Select"
                options={baseOptions}
                size="small"
              />
            </div>
          ),
          label: "Don't omit the label and placeholder",
          description:
            "Avoid using generic labels like \"Select\" with no supporting label. Users need context to understand what the field expects.",
        }}
      />
    </DocsTemplate.Section>

    {/* ── Accessibility ── */}
    <DocsTemplate.Section title="Accessibility">
      <DocsTemplate.BulletList
        items={[
          <>Trigger has <code>role="combobox"</code>, <code>aria-haspopup="listbox"</code>, and <code>aria-expanded</code> — fully compliant ARIA combobox pattern.</>,
          <>Menu panel has <code>role="listbox"</code> with <code>aria-multiselectable</code> in multi-select mode.</>,
          <>Each option carries <code>role="option"</code>, <code>aria-selected</code>, and <code>aria-disabled</code>.</>,
          <>Full keyboard navigation: <kbd>↑</kbd> / <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, <kbd>Escape</kbd> to close, <kbd>Tab</kbd> to dismiss.</>,
          <>The clear button exposes an explicit <code>aria-label="Clear selection"</code>.</>,
          <>Error states use <code>role="alert"</code> on the helper text to announce validation messages to screen readers.</>,
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DropdownDocs;
