import React, { useState, useRef } from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { SimpleField } from './SimpleField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

/* ── Sample suggestions ── */
const LOCATION_SUGGESTIONS = [
  'Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga',
  'Dunedin', 'Palmerston North', 'Nelson', 'Rotorua', 'Napier',
];

const TAG_SUGGESTIONS = [
  'Urgent', 'Review required', 'Approved', 'On hold', 'Draft',
  'Pending', 'In progress', 'Complete', 'Archived', 'High priority',
];

/* ── Tag search demo ── */
const TagSearchDemo: React.FC<{
  label: string;
  suggestions: string[];
  suggestionsLabel: string;
  size?: any;
}> = ({ label, suggestions, suggestionsLabel, size = 'default' }) => {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState<Array<{ id: number; label: string }>>([]);
  const nextId = useRef(1);
  return (
    <SimpleField
      label={label}
      placeholder={`Search ${suggestionsLabel}…`}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onClear={() => setQuery('')}
      clearable
      leadingIcon={SearchIcon}
      size={size}
      tags={tags}
      onTagRemove={(id) => setTags((t) => t.filter((x) => x.id !== id))}
      suggestions={suggestions}
      onSuggestionSelect={(v) => {
        setTags((t) => [...t, { id: nextId.current++, label: v }]);
        setQuery('');
      }}
      suggestionsLabel={suggestionsLabel}
    />
  );
};

/* ── Live demo wrapper ── */
const LiveDemo: React.FC<{ label?: string; state?: any; helperText?: string; size?: any }> = ({
  label = 'Input name',
  state = 'default',
  helperText,
  size = 'default',
}) => {
  const [val, setVal] = useState('');
  return (
    <SimpleField
      label={label}
      placeholder="Placeholder text"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onClear={() => setVal('')}
      clearable
      leadingIcon={LockOutlinedIcon}
      size={size}
      state={state}
      helperText={helperText}
    />
  );
};

/* ── Tag demo wrapper ── */
const TagDemo: React.FC<{ size?: any }> = ({ size = 'default' }) => {
  const [val, setVal] = useState('');
  const [tags, setTags] = useState([{ id: 1, label: 'Label →' }]);
  return (
    <SimpleField
      label="Input name"
      placeholder=""
      value={val}
      onChange={(e) => setVal(e.target.value)}
      leadingIcon={StarOutlineIcon}
      size={size}
      tags={tags}
      onTagRemove={(id) => setTags((t) => t.filter((x) => x.id !== id))}
      clearable
      onClear={() => setVal('')}
    />
  );
};

/* ── Docs component ── */
const SimpleFieldDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Simple Field"
      subtitle="A single-line text input for capturing user data — labels, placeholders, validation states, and optional inline tags"
    />

    <DocsTemplate.BodyText>
      The <strong>SimpleField</strong> component is the foundational text input of the design
      system. It supports three sizes, four visual states (default, error, warning, success), an
      optional leading icon, a clearable mode, and an inline tag-chip variant. All styling is
      driven exclusively from the <code>--simple-field-*</code> token set — no hardcoded values.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>InputBase</strong> from <code>@mui/material</code> — the
        unstyled, accessible input primitive. <code>InputBase</code> provides native keyboard
        navigation, ARIA attributes, and form integration while keeping zero visual opinion.
        All colours, spacing, typography, and interaction states are applied through{' '}
        <code>SimpleField.module.css</code> using design tokens.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import
import InputBase from '@mui/material/InputBase';

// Design system wrappers
import { SimpleField } from './SimpleField';
import { Tag } from '../Tag/Tag'; // used for inline tag chips`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Component Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each SimpleField is composed of three optional layers stacked vertically — a label,
        the control row (icon + input + clear button), and a helper text line.
      </DocsTemplate.BodyText>
      <DocsTemplate.Anatomy
        parts={[
          { name: 'Label', description: 'Short descriptor rendered above the control row. Uses F37 Ginger Pro, 12 px, weight 400.' },
          { name: 'Leading icon (optional)', description: 'MUI SvgIcon on the left of the text area. Size scales with the field size.' },
          { name: 'Input area', description: 'MUI InputBase — the native <input> with Calibri font and transparent background.' },
          { name: 'Inline tags (optional)', description: 'Design system Tag components rendered inside the control row. Pass the `tags` prop and an `onTagRemove` callback. Tag colour is controlled via `tagColour` (default: blue).' },
          { name: 'Clear button (optional)', description: 'Appears when clearable=true and the field has a non-empty value.' },
          { name: 'Helper text (optional)', description: 'Status message below the control. Colour is driven by the active state token.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes control the field height and horizontal padding. Token names follow the{' '}
        <code>--simple-field-height-*</code> pattern.
      </DocsTemplate.BodyText>
      <DocsTemplate.Subsection title="Small — 32 px">
        <LiveDemo size="small" />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Default — 40 px">
        <LiveDemo size="default" />
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Large — 48 px">
        <LiveDemo size="large" />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── States ── */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.BodyText>
        The <code>state</code> prop drives border colour, icon colour, and helper text colour
        via dedicated state tokens. The <code>focused</code> appearance is automatic via{' '}
        <code>:focus-within</code> on the control row.
      </DocsTemplate.BodyText>

      <DocsTemplate.Subsection title="Default">
        <LiveDemo />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Error">
        <LiveDemo
          state="error"
          helperText="This is an error associated with the input"
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Warning">
        <LiveDemo
          state="warning"
          helperText="This is a warning associated with the input"
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Success">
        <LiveDemo
          state="success"
          helperText="This is a success associated with this input"
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Disabled">
        <SimpleField
          label="Input name"
          placeholder="Placeholder text"
          leadingIcon={LockOutlinedIcon}
          disabled
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Leading Icons ── */}
    <DocsTemplate.Section title="Leading Icons">
      <DocsTemplate.BodyText>
        Pass any MUI SvgIcon component via the <code>leadingIcon</code> prop. The icon
        inherits the state colour automatically via CSS cascade.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', maxWidth: 360 }}>
        <SimpleField label="Search" placeholder="Placeholder text" leadingIcon={SearchIcon} />
        <SimpleField label="Username" placeholder="Placeholder text" leadingIcon={PersonOutlinedIcon} />
        <SimpleField label="Password" placeholder="Placeholder text" leadingIcon={LockOutlinedIcon} type="password" />
      </div>
    </DocsTemplate.Section>

    {/* ── Tag input ── */}
    <DocsTemplate.Section title="Tag Input">
      <DocsTemplate.BodyText>
        Inline tag chips from the design system <strong>Tag</strong> component are rendered
        inside the control row when the <code>tags</code> prop is supplied. Each chip includes
        a remove button backed by <code>onTagRemove</code>. Backspace on an empty input
        removes the last tag.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', maxWidth: 400 }}>
        <TagSearchDemo label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" size="small" />
        <TagSearchDemo label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" size="default" />
        <TagSearchDemo label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" size="large" />
      </div>
    </DocsTemplate.Section>

    {/* ── Tag Search / Autocomplete ── */}
    <DocsTemplate.Section title="Tag Search (Autocomplete)">
      <DocsTemplate.BodyText>
        Supply a <code>suggestions</code> array and an <code>onSuggestionSelect</code> callback
        to activate the autocomplete mode. As the user types, the dropdown filters the suggestion
        pool — excluding already-selected tags — and shows matching results. Selecting an item
        adds a Tag chip and clears the input. The <code>suggestionsLabel</code> prop names what
        is being searched (shown in the empty-state message).
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`<SimpleField
  label="Filter by location"
  placeholder="Search location…"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery('')}
  clearable
  leadingIcon={SearchIcon}
  tags={tags}
  onTagRemove={(id) => setTags(t => t.filter(x => x.id !== id))}
  suggestions={LOCATION_SUGGESTIONS}
  onSuggestionSelect={(value) => {
    setTags(t => [...t, { id: Date.now(), label: value }]);
    setQuery('');
  }}
  suggestionsLabel="location"
/>`}
      </DocsTemplate.CodeBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', maxWidth: 400 }}>
        <TagSearchDemo label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" />
        <TagSearchDemo label="Filter by tag" suggestions={TAG_SUGGESTIONS} suggestionsLabel="tag" />
      </div>
      <DocsTemplate.BodyText>
        <strong>Keyboard support</strong>: <kbd>↓</kbd> / <kbd>↑</kbd> to navigate the list,
        <kbd>Enter</kbd> to select, <kbd>Escape</kbd> to dismiss, and{' '}
        <kbd>Backspace</kbd> on an empty input removes the last tag.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        All visual properties are controlled by the <code>--simple-field-*</code> token
        group defined in <code>tokens.css</code>.
      </DocsTemplate.BodyText>
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--simple-field-height-small', description: 'Small field height — 32 px (--global-spacing-sizing-32px)' },
          { name: '--simple-field-height-default', description: 'Default field height — 40 px (--global-spacing-sizing-40px)' },
          { name: '--simple-field-height-large', description: 'Large field height — 48 px (--global-spacing-sizing-48px)' },
          { name: '--simple-field-border-radius', description: 'Corner radius — 4 px (--global-spacing-radius-4px)' },
          { name: '--simple-field-border-width', description: 'Border stroke — 0.5 px (--global-spacing-stroke-0-5px)' },
          { name: '--simple-field-gap', description: 'Gap between icon / input / button — 8 px' },
          { name: '--simple-field-border-color', description: 'Default border — neutral-gray-300 (#d2d5da)' },
          { name: '--simple-field-border-color-focus', description: 'Focused border — brand-primary (#3776ce)' },
          { name: '--simple-field-border-color-error', description: 'Error border — status-red (#ce2031)' },
          { name: '--simple-field-border-color-warning', description: 'Warning border — status-dark-orange (#d07c06)' },
          { name: '--simple-field-border-color-success', description: 'Success border — status-dark-green (#227f1a)' },
          { name: '--simple-field-label-font', description: 'Label typeface — F37 Ginger Pro (--brand-font-primary)' },
          { name: '--simple-field-input-font', description: 'Input typeface — Calibri (--brand-font-secondary)' },
          { name: '--simple-field-helper-color-error', description: 'Error helper text colour — status-red' },
          { name: '--simple-field-helper-color-warning', description: 'Warning helper text colour — status-dark-orange' },
          { name: '--simple-field-helper-color-success', description: 'Success helper text colour — status-dark-green' },
          { name: '--simple-field-tag-bg', description: 'Tag chip background — primary-blue-blue-100' },
          { name: '--simple-field-tag-color', description: 'Tag chip text colour — secondary-navy' },
          { name: '--simple-field-dropdown-bg', description: 'Suggestion dropdown background — white' },
          { name: '--simple-field-dropdown-border', description: 'Dropdown border colour — neutral-gray-200' },
          { name: '--simple-field-dropdown-radius', description: 'Dropdown corner radius — 6 px (--global-spacing-radius-6px)' },
          { name: '--simple-field-dropdown-shadow', description: 'Dropdown elevation — shadow-sm-box-shadow' },
          { name: '--simple-field-dropdown-option-hover', description: 'Hovered option background — neutral-gray-50' },
          { name: '--simple-field-dropdown-option-active', description: 'Keyboard-active option background — primary-blue-blue-100' },
          { name: '--simple-field-dropdown-empty-color', description: 'Empty-state text colour — neutral-gray-400' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage Guidelines ── */}
    <DocsTemplate.Section title="Usage Guidelines">
      <DocsTemplate.PrincipleCard number={1} title="Always provide a label">
        Every SimpleField should have a visible label that clearly describes what value is
        expected. Only omit the label when an <code>ariaLabel</code> is provided for screen
        readers.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Match size to context">
        Use <strong>small</strong> in dense tables and compact toolbars, <strong>default</strong>{' '}
        for standard forms, and <strong>large</strong> for prominent hero-level inputs or when
        targeting touch interfaces.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="State drives meaning">
        Only apply error / warning / success states after user interaction (on blur or submit),
        not on initial render. Always pair a state with a descriptive <code>helperText</code>{' '}
        message so the issue is understandable without relying on colour alone.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={4} title="Clearable for long-form inputs">
        Enable <code>clearable</code> for search fields and long free-text inputs. Avoid it for
        short, required fields (e.g. username / password) where clearing is disruptive.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={5} title="Name what you are searching">
        Always set <code>suggestionsLabel</code> to a plain noun describing the search
        target — <em>location</em>, <em>tag</em>, <em>parameter</em>. This noun appears in the
        empty-state message (&ldquo;No matching location&rdquo;) and the listbox
        <code>aria-label</code> for screen readers.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Section>
  </DocsTemplate>
);

export default SimpleFieldDocs;
