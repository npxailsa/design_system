import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleField } from './SimpleField';
import SimpleFieldDocs from './SimpleFieldDocs';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

/* ── Meta ────────────────────────────────────────────────────── */

const meta: Meta<typeof SimpleField> = {
  title: 'Atoms/Input/SimpleField',
  component: SimpleField,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Height / typography size of the field',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Validation state — drives border and helper text colour',
    },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    size: 'default',
    state: 'default',
    clearable: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SimpleField>;

/* ── Controlled wrapper ──────────────────────────────────────── */

const Controlled: React.FC<React.ComponentProps<typeof SimpleField>> = (props) => {
  const [val, setVal] = useState(props.value ?? '');
  return (
    <SimpleField
      {...props}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onClear={() => setVal('')}
    />
  );
};

/* ── Stories ─────────────────────────────────────────────────── */

/* 1 — Documentation (must be first) */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <SimpleFieldDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

/* 2 — Playground */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Controlled {...args} leadingIcon={LockOutlinedIcon} />
    </div>
  ),
};

/* 3 — Default */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Controlled {...args} />
    </div>
  ),
  args: { label: 'Input name', placeholder: 'Placeholder text', size: 'default', state: 'default', clearable: true },
};

/* 4 — Sizes */
const SIZE_META: { size: 'extra-small' | 'small' | 'default' | 'large'; label: string; height: string }[] = [
  { size: 'extra-small', label: 'Extra Small', height: '28px' },
  { size: 'small',       label: 'Small',       height: '32px' },
  { size: 'default',     label: 'Default',     height: '44px' },
  { size: 'large',       label: 'Large',       height: '52px' },
];

const SIZE_CHIP: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--brand-font-secondary, monospace)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.04em',
  color: 'var(--global-color-neutral-gray-500)',
  background: 'var(--global-color-neutral-gray-100)',
  borderRadius: 'var(--global-spacing-radius-4px)',
  padding: '2px var(--global-spacing-sizing-6px)',
  marginBottom: 'var(--global-spacing-sizing-4px)',
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', maxWidth: 360 }}>
      {SIZE_META.map(({ size, label, height }) => (
        <div key={size}>
          <div style={SIZE_CHIP}>{label} — {height}</div>
          <Controlled label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} clearable />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 5 — Status stories */
export const StatusError: Story = {
  name: 'Status / Error',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      {(['small', 'default', 'large'] as const).map(size => (
        <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusWarning: Story = {
  name: 'Status / Warning',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      {(['small', 'default', 'large'] as const).map(size => (
        <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusSuccess: Story = {
  name: 'Status / Success',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      {(['small', 'default', 'large'] as const).map(size => (
        <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', maxWidth: 360 }}>
      {(['small', 'default', 'large'] as const).map(size => (
        <SimpleField key={size} label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} disabled />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusTagInput: Story = {
  name: 'Status / Tag Input',
  render: () => {
    const TagSearch = ({ size, label, suggestions, suggestionsLabel, initialTags }: { size: 'small' | 'default' | 'large'; label: string; suggestions: string[]; suggestionsLabel: string; initialTags?: Array<{ id: number; label: string }> }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState(initialTags ?? []);
      const nextId = React.useRef(100);
      const handleSelect = (value: string) => { setTags(t => [...t, { id: nextId.current++, label: value }]); setQuery(''); };
      return <SimpleField label={label} placeholder={`Search ${suggestionsLabel}…`} value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')} clearable leadingIcon={SearchIcon} size={size} tags={tags} onTagRemove={id => setTags(t => t.filter(x => x.id !== id))} suggestions={suggestions} onSuggestionSelect={handleSelect} suggestionsLabel={suggestionsLabel} />;
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)', maxWidth: 400 }}>
        <TagSearch size="default" label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" initialTags={[{ id: 1, label: 'Auckland' }]} />
        <TagSearch size="small" label="Filter by tag (small)" suggestions={TAG_SUGGESTIONS} suggestionsLabel="tag" />
        <TagSearch size="large" label="Filter by param (large)" suggestions={PARAMETER_SUGGESTIONS} suggestionsLabel="parameter" />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── Sample data sets for tag-search demos ── */
const LOCATION_SUGGESTIONS = [
  'Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga',
  'Dunedin', 'Palmerston North', 'Nelson', 'Rotorua', 'Napier',
  'New Plymouth', 'Invercargill', 'Whanganui', 'Gisborne', 'Blenheim',
];

const TAG_SUGGESTIONS = [
  'Urgent', 'Review required', 'Approved', 'On hold', 'Draft',
  'Pending', 'In progress', 'Complete', 'Archived', 'High priority',
  'Low priority', 'Escalated', 'Blocked', 'Resolved', 'Closed',
];

const PARAMETER_SUGGESTIONS = [
  'Revenue', 'Operating cost', 'Net profit', 'EBITDA', 'Headcount',
  'Customer count', 'Churn rate', 'Conversion rate', 'Retention rate',
  'Average order value', 'NPS score', 'Response time', 'Uptime',
];

/* (TagInput preserved for reference below but replaced by Status / Tag Input above) */
export const TagInput: Story = {
  name: 'Tag Input (legacy)',
  render: () => {
    const TagSearch = ({
      size,
      label,
      suggestions,
      suggestionsLabel,
      initialTags,
    }: {
      size: 'small' | 'default' | 'large';
      label: string;
      suggestions: string[];
      suggestionsLabel: string;
      initialTags?: Array<{ id: number; label: string }>;
    }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState(initialTags ?? []);
      const nextId = React.useRef(100);

      const handleSelect = (value: string) => {
        setTags((t) => [...t, { id: nextId.current++, label: value }]);
        setQuery('');
      };

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
          onSuggestionSelect={handleSelect}
          suggestionsLabel={suggestionsLabel}
        />
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)', maxWidth: 400 }}>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-500)' }}>
          Locations
        </div>
        <TagSearch size="default" label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" initialTags={[{ id: 1, label: 'Auckland' }]} />

        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-500)', marginTop: 'var(--global-spacing-sizing-8px)' }}>
          Tags
        </div>
        <TagSearch size="default" label="Filter by tag" suggestions={TAG_SUGGESTIONS} suggestionsLabel="tag" />

        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-500)', marginTop: 'var(--global-spacing-sizing-8px)' }}>
          Parameters
        </div>
        <TagSearch size="default" label="Filter by parameter" suggestions={PARAMETER_SUGGESTIONS} suggestionsLabel="parameter" />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* 8b — Tag Input — all sizes */
export const TagInputSizes: Story = {
  name: 'Tag Input — Sizes',
  render: () => {
    const TagSearch = ({ size }: { size: 'small' | 'default' | 'large' }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState<Array<{ id: number; label: string }>>([]);
      const nextId = React.useRef(1);
      return (
        <SimpleField
          label="Filter by location"
          placeholder="Search location…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
          clearable
          leadingIcon={SearchIcon}
          size={size}
          tags={tags}
          onTagRemove={(id) => setTags((t) => t.filter((x) => x.id !== id))}
          suggestions={LOCATION_SUGGESTIONS}
          onSuggestionSelect={(v) => {
            setTags((t) => [...t, { id: nextId.current++, label: v }]);
            setQuery('');
          }}
          suggestionsLabel="location"
        />
      );
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', maxWidth: 400 }}>
        {(['small', 'default', 'large'] as const).map((s) => (
          <div key={s}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--global-color-neutral-gray-400)', marginBottom: 'var(--global-spacing-sizing-6px)' }}>{s}</div>
            <TagSearch size={s} />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* 6 — Component Breakdown */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '640px' }}>
      <span style={{ fontFamily: 'var(--brand-font-primary)', fontWeight: 600, fontSize: '13px', color: 'var(--global-color-neutral-gray-800)' }}>Anatomy</span>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {[
          ['Label only', <SimpleField label="Input name" placeholder="Placeholder" />, '--simple-field-label-size / --simple-field-label-color'],
          ['With leading icon', <SimpleField label="With Icon" placeholder="Search" leadingIcon={SearchIcon} />, '--simple-field-icon-size-default'],
          ['Clearable', <Controlled label="Clearable" value="Input value" clearable onClear={() => {}} />, '--simple-field-clear-color'],
          ['Error helper', <SimpleField label="Field" placeholder="" state="error" helperText="Error message" />, '--simple-field-border-color-error / --simple-field-helper-color-error'],
        ].map(([lbl, el, tok]) => (
          <div key={lbl as string} style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '180px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)', color: 'var(--global-color-neutral-gray-600)' }}>{lbl as string}</span>
            {el as React.ReactElement}
            <code style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-500)', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{tok as string}</code>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 7 — All Interactive States */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: '400px' }}>
      <SimpleField label="Default" placeholder="Resting state" leadingIcon={LockOutlinedIcon} />
      <Controlled label="Filled" value="User has typed content" leadingIcon={LockOutlinedIcon} clearable />
      <SimpleField label="Error" placeholder="" state="error" helperText="Error message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Warning" placeholder="" state="warning" helperText="Warning message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Success" placeholder="" state="success" helperText="Success message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Disabled" placeholder="Disabled state" leadingIcon={LockOutlinedIcon} disabled />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* 8 — Full Design Matrix */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => {
    const states = [
      { state: 'default' as const, helperText: undefined },
      { state: 'error' as const, helperText: 'This is an error associated with the input' },
      { state: 'warning' as const, helperText: 'This is a warning associated with the input' },
      { state: 'success' as const, helperText: 'This is a success associated with this input' },
    ];

    const SECTION_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--global-color-neutral-gray-500)',
      marginBottom: 'var(--global-spacing-sizing-8px)',
    };

    const COL_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--global-color-neutral-gray-600)',
      marginBottom: 'var(--global-spacing-sizing-8px)',
    };

    const HEIGHT_CHIP: React.CSSProperties = {
      display: 'inline-block',
      fontFamily: 'var(--brand-font-secondary, monospace)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      background: 'var(--global-color-neutral-gray-100)',
      borderRadius: 'var(--global-spacing-radius-4px)',
      padding: '1px var(--global-spacing-sizing-4px)',
      marginLeft: 'var(--global-spacing-sizing-4px)',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)', maxWidth: 900 }}>
        {/* Placeholder / Filled */}
        <div>
          <div style={SECTION_LABEL}>Default — Placeholder &amp; Filled</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {SIZE_META.map(({ size, label, height }) => (
              <div key={size} style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
                <div style={COL_LABEL}>
                  {label}<span style={HEIGHT_CHIP}>{height}</span>
                </div>
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} clearable />
                <Controlled label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable />
              </div>
            ))}
          </div>
        </div>

        {/* Validation states */}
        <div>
          <div style={SECTION_LABEL}>Validation States</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {states.filter((s) => s.state !== 'default').map(({ state, helperText }) => (
              <div key={state} style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)' }}>
                <div style={{ ...COL_LABEL, textTransform: 'capitalize' }}>{state}</div>
                {SIZE_META.map(({ size, height }) => (
                  <div key={size}>
                    <div style={{ ...HEIGHT_CHIP, display: 'block', marginLeft: 0, marginBottom: 'var(--global-spacing-sizing-4px)', width: 'fit-content' }}>{height}</div>
                    <Controlled label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state={state} helperText={helperText} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Disabled */}
        <div>
          <div style={SECTION_LABEL}>Disabled</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap' }}>
            {SIZE_META.map(({ size, label, height }) => (
              <div key={size} style={{ flex: '1 1 180px' }}>
                <div style={COL_LABEL}>{label}<span style={HEIGHT_CHIP}>{height}</span></div>
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} disabled />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
