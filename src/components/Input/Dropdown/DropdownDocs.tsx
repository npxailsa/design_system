import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

const HEADING: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontWeight: 600,
  color: 'var(--global-color-base-black)',
  marginBottom: 'var(--global-spacing-sizing-8px)',
  marginTop: 'var(--global-spacing-sizing-16px)',
};

const BODY: React.CSSProperties = {
  fontFamily: 'var(--brand-font-secondary)',
  fontSize: '14px',
  fontWeight: 300,
  color: 'var(--global-color-neutral-gray-600)',
  lineHeight: 1.6,
  marginBottom: 'var(--global-spacing-sizing-12px)',
};

const TOKEN_TABLE: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: 'var(--brand-font-secondary)',
  fontSize: '13px',
  marginBottom: '24px',
};

const TOKEN_CELL: React.CSSProperties = {
  padding: '6px 12px',
  borderBottom: '1px solid var(--global-color-neutral-gray-100)',
  verticalAlign: 'top',
};

const SWATCH_CELL: React.CSSProperties = {
  ...TOKEN_CELL,
  width: '32px',
};

const sampleOptions = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

const sampleOptionsWithPerson = [
  { id: 1, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 2, label: 'Label',     leadingIcon: PersonIcon },
  { id: 3, label: 'Menu item', leadingIcon: AppsIcon },
  { id: 4, label: 'Menu item', leadingIcon: AppsIcon },
];

/* ── Live example wrappers ── */
const SingleExample: React.FC<{ size?: 'small' | 'default' | 'large' }> = ({ size = 'default' }) => {
  const [val, setVal] = useState<string | number | null>(null);
  return (
    <Dropdown
      label="Input name"
      placeholder="Placeholder text"
      options={sampleOptions}
      value={val}
      onChange={(v) => setVal(v)}
      leadingIcon={AppsIcon}
      clearable
      size={size}
    />
  );
};

const MultiExample: React.FC<{ size?: 'small' | 'default' | 'large' }> = ({ size = 'default' }) => {
  const [vals, setVals] = useState<(string | number)[]>([2]);
  return (
    <Dropdown
      label="Input name"
      placeholder="Placeholder text"
      options={sampleOptionsWithPerson}
      multiSelect
      values={vals}
      onMultiChange={(v) => setVals(v)}
      leadingIcon={AppsIcon}
      size={size}
    />
  );
};

const SearchExample: React.FC<{ size?: 'small' | 'default' | 'large' }> = ({ size = 'default' }) => {
  const [val, setVal] = useState<string | number | null>(3);
  return (
    <Dropdown
      label="Input name"
      placeholder="Placeholder text"
      options={sampleOptions}
      value={val}
      onChange={(v) => setVal(v)}
      leadingIcon={AppsIcon}
      searchable
      clearable
      size={size}
    />
  );
};

/* ── Main docs page ── */
const DropdownDocs: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 32px', fontFamily: 'var(--brand-font-secondary)' }}>

    {/* ── Title ── */}
    <h1 style={{ ...HEADING, fontSize: '28px', marginTop: 0 }}>Dropdown</h1>
    <p style={BODY}>
      A select / combobox input built on MUI's <code>InputBase</code> and <code>Checkbox</code> primitives.
      Supports single selection, multi-selection with tag chips, keyboard-search filtering,
      full keyboard navigation, and four validation states. All visual treatment is applied
      via design-token CSS Modules — no MUI theme override required.
    </p>

    {/* ── MUI Foundation ── */}
    <h2 style={{ ...HEADING, fontSize: '18px' }}>MUI Foundation</h2>
    <p style={BODY}>
      <strong>InputBase</strong> — Used as the search input in searchable mode. Provides an
      accessible, unstyled text field primitive.<br />
      <strong>Checkbox</strong> — Renders checked/unchecked state for each option in multi-select mode.
      Styled solely via the <code>sx</code> prop referencing design tokens.
    </p>

    {/* ── Anatomy ── */}
    <h2 style={{ ...HEADING, fontSize: '18px' }}>Anatomy</h2>
    <ol style={{ ...BODY, paddingLeft: '20px' }}>
      <li><strong>Label</strong> — Optional field label above the trigger.</li>
      <li><strong>Trigger</strong> — The clickable control row containing the leading icon, selected value / placeholder, tag chips (multi-select), clear button, and chevron.</li>
      <li><strong>Menu panel</strong> — List of options rendered below the trigger when open. Each option may have a leading icon, label, and checkbox (multi) or chevron-right indicator (keyboard active).</li>
      <li><strong>Helper text</strong> — Optional validation / helper message below the trigger.</li>
    </ol>

    {/* ── Sizes ── */}
    <h2 style={{ ...HEADING, fontSize: '18px' }}>Sizes</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 320 }}>
      {(['small', 'default', 'large'] as const).map((s) => (
        <div key={s}>
          <p style={{ ...BODY, marginBottom: 4, textTransform: 'capitalize' }}><strong>{s}</strong></p>
          <SingleExample size={s} />
        </div>
      ))}
    </div>

    {/* ── Single select ── */}
    <h2 style={{ ...HEADING, fontSize: '18px', marginTop: 32 }}>Single Select</h2>
    <p style={BODY}>
      Pass <code>value</code> and <code>onChange</code>. The selected option label is displayed
      in the trigger. Pass <code>clearable</code> to show a clear button when a value is selected.
    </p>
    <div style={{ maxWidth: 320 }}>
      <SingleExample />
    </div>

    {/* ── Multi select ── */}
    <h2 style={{ ...HEADING, fontSize: '18px', marginTop: 32 }}>Multi-Select</h2>
    <p style={BODY}>
      Pass <code>multiSelect</code> + <code>values</code> + <code>onMultiChange</code>.
      Selected options are rendered as Tag chips inside the trigger. Each option shows a
      checkbox; the selected option has a filled blue checkbox.
    </p>
    <div style={{ maxWidth: 320 }}>
      <MultiExample />
    </div>

    {/* ── Searchable ── */}
    <h2 style={{ ...HEADING, fontSize: '18px', marginTop: 32 }}>Searchable</h2>
    <p style={BODY}>
      Pass <code>searchable</code> to let the user type inside the trigger when the dropdown
      is open. The option list filters in real time. Keyboard arrow-up/down navigates the filtered
      list; <kbd>Enter</kbd> selects the highlighted option.
    </p>
    <div style={{ maxWidth: 320 }}>
      <SearchExample />
    </div>

    {/* ── States ── */}
    <h2 style={{ ...HEADING, fontSize: '18px', marginTop: 32 }}>Validation States</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 320 }}>
      {([
        { state: 'default'  as const, text: undefined },
        { state: 'error'    as const, text: 'This field is required.' },
        { state: 'warning'  as const, text: 'Are you sure about this selection?' },
        { state: 'success'  as const, text: 'Selection confirmed.' },
      ]).map(({ state, text }) => (
        <Dropdown
          key={state}
          label={`State: ${state}`}
          placeholder="Placeholder text"
          options={sampleOptions}
          state={state}
          helperText={text}
          leadingIcon={AppsIcon}
        />
      ))}
      <Dropdown
        label="Disabled"
        placeholder="Placeholder text"
        options={sampleOptions}
        disabled
        leadingIcon={AppsIcon}
      />
    </div>

    {/* ── Design tokens ── */}
    <h2 style={{ ...HEADING, fontSize: '18px', marginTop: 32 }}>Design Tokens</h2>
    <table style={TOKEN_TABLE}>
      <thead>
        <tr style={{ background: 'var(--global-color-neutral-gray-50)' }}>
          <th style={TOKEN_CELL}>Token</th>
          <th style={TOKEN_CELL}>Value</th>
          <th style={SWATCH_CELL}></th>
        </tr>
      </thead>
      <tbody>
        {[
          ['--dropdown-border-color',         'var(--global-color-neutral-gray-300)', '#d2d5da'],
          ['--dropdown-border-color-focus',   'var(--brand-primary)',                 null],
          ['--dropdown-bg',                   'var(--global-color-base-white)',       '#ffffff'],
          ['--dropdown-bg-disabled',          'var(--global-color-neutral-gray-100)','#f3f4f6'],
          ['--dropdown-text-color',           'var(--global-color-base-black)',       '#1c1c1c'],
          ['--dropdown-placeholder-color',    'var(--global-color-neutral-gray-400)','#9ca3af'],
          ['--dropdown-option-selected-bg',   'var(--global-color-primary-sky-blue-50)', '#f4fcff'],
          ['--dropdown-option-selected-color','var(--brand-primary)',                 null],
          ['--dropdown-checkbox-color',       'var(--brand-primary)',                 null],
        ].map(([token, value, hex]) => (
          <tr key={token as string}>
            <td style={TOKEN_CELL}><code>{token}</code></td>
            <td style={TOKEN_CELL}><code>{value}</code></td>
            <td style={SWATCH_CELL}>
              {hex && (
                <span style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  borderRadius: 3,
                  background: hex as string,
                  border: '1px solid var(--global-color-neutral-gray-200)',
                  verticalAlign: 'middle',
                }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* ── Accessibility ── */}
    <h2 style={{ ...HEADING, fontSize: '18px' }}>Accessibility</h2>
    <ul style={{ ...BODY, paddingLeft: '20px' }}>
      <li>Trigger has <code>role="combobox"</code>, <code>aria-haspopup="listbox"</code>, and <code>aria-expanded</code>.</li>
      <li>Menu panel has <code>role="listbox"</code> and <code>aria-multiselectable</code> in multi-select mode.</li>
      <li>Each option has <code>role="option"</code>, <code>aria-selected</code>, and <code>aria-disabled</code>.</li>
      <li>Full keyboard navigation: <kbd>↑</kbd><kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, <kbd>Escape</kbd> to close.</li>
      <li>Clear button has an explicit <code>aria-label="Clear selection"</code>.</li>
    </ul>
  </div>
);

export default DropdownDocs;
