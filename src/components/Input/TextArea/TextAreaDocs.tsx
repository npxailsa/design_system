import React, { useState } from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { TextArea } from './TextArea';

/* ── Live demo wrapper ── */
const LiveDemo: React.FC<{
  label?: string;
  state?: 'default' | 'error' | 'warning' | 'success';
  helperText?: string;
  size?: 'small' | 'default' | 'large';
  placeholder?: string;
  disabled?: boolean;
}> = ({
  label = 'Input name',
  state = 'default',
  helperText,
  size = 'default',
  placeholder = 'Placeholder text',
  disabled = false,
}) => {
  const [val, setVal] = useState('');
  return (
    <TextArea
      label={label}
      placeholder={placeholder}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onClear={() => setVal('')}
      clearable
      size={size}
      state={state}
      helperText={helperText}
      disabled={disabled}
    />
  );
};

/* ── Docs component ── */
const TextAreaDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Text Area"
      subtitle="A multi-line text input for capturing longer user-supplied content — labels, placeholder, validation states, and a clearable mode"
    />

    <DocsTemplate.BodyText>
      The <strong>TextArea</strong> component is the multi-line counterpart to{' '}
      <strong>SimpleField</strong>. It supports three sizes, four visual states
      (default, error, warning, success), an optional clear button, and automatic
      height expansion via <code>minRows</code> / <code>maxRows</code>. All styling
      is driven exclusively from the <code>--textarea-*</code> token set — no hardcoded values.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>InputBase</strong> with <code>multiline</code> from{' '}
        <code>@mui/material</code>. In multiline mode, <code>InputBase</code> renders an
        accessible native <code>&lt;textarea&gt;</code> with automatic row expansion,
        keyboard navigation, and full form integration. All visual properties are applied
        through <code>TextArea.module.css</code> using design tokens.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import
import InputBase from '@mui/material/InputBase';

// Design system wrapper
import { TextArea } from './TextArea';`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.BodyText>
        Each TextArea is composed of three optional layers stacked vertically — a label,
        the textarea control (with optional clear button), and a helper text line.
      </DocsTemplate.BodyText>
      <DocsTemplate.Anatomy
        preview={<div style={{ maxWidth: 280 }}><TextArea label="Input name" placeholder="Placeholder text" clearable /></div>}
        parts={[
          { id: 1, name: 'Label',               token: '--textarea-label-font, --textarea-label-size',      description: 'Short descriptor above the control. F37 Ginger Pro, 12 px, weight 400.' },
          { id: 2, name: 'Textarea area',        token: '--textarea-input-font, --textarea-input-size-*',   description: 'MUI InputBase (multiline) — native <textarea> with Calibri font. Grows with content up to maxRows.' },
          { id: 3, name: 'Clear button',         token: '--textarea-clear-size, --textarea-clear-color',    description: 'Appears top-right when clearable=true and the field has a value.' },
          { id: 4, name: 'Resize handle',        token: 'resize prop (CSS)',                                description: 'CSS resize handle — vertical by default. Allows manual height adjustment.' },
          { id: 5, name: 'Helper text',          token: '--textarea-helper-color-*, --textarea-helper-font', description: 'Status or instruction text below the control. Colour driven by the active state token.' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes control the minimum height, padding, and typography scale. The control
        can grow beyond the minimum as the user types (autosize). Tokens control each size
        via <code>--textarea-min-height-*</code> and <code>--textarea-padding-*</code>.
      </DocsTemplate.BodyText>
      <DocsTemplate.Subsection title="Small — min 80 px (--textarea-min-height-small)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo size="small" />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Default — min 104 px (--textarea-min-height-default)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo size="default" />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Large — min 132 px (--textarea-min-height-large)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo size="large" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── States ── */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.BodyText>
        The <code>state</code> prop drives border colour and helper text colour via
        dedicated state tokens. The <code>focused</code> appearance is automatic via{' '}
        <code>:focus-within</code>.
      </DocsTemplate.BodyText>
      <DocsTemplate.Subsection title="Default">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Error (--textarea-border-color-error)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo
            state="error"
            helperText="This is an error associated with the input"
          />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Warning (--textarea-border-color-warning)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo
            state="warning"
            helperText="This is a warning associated with the input"
          />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Success (--textarea-border-color-success)">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo
            state="success"
            helperText="This is a success associated with the input"
          />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Disabled">
        <div style={{ maxWidth: 400 }}>
          <LiveDemo disabled />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Basic Usage">
      <DocsTemplate.CodeBlock>
        {`import { TextArea } from './TextArea';

// Controlled example
const [value, setValue] = useState('');

<TextArea
  label="Description"
  placeholder="Enter a description…"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
  state="default"
  helperText="Max 500 characters"
/>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        All visual properties are controlled by the <code>--textarea-*</code> token
        group defined in <code>tokens.css</code>. Global tokens are referenced — no brand-specific
        or hardcoded values exist in the component.
      </DocsTemplate.BodyText>
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--textarea-min-height-small',    description: 'Small textarea minimum height — 80 px' },
          { name: '--textarea-min-height-default',  description: 'Default textarea minimum height — 104 px' },
          { name: '--textarea-min-height-large',    description: 'Large textarea minimum height — 132 px' },
          { name: '--textarea-padding-small',       description: 'Small control padding — 6px 8px (--global-spacing-sizing-6px / 8px)' },
          { name: '--textarea-padding-default',     description: 'Default control padding — 8px 12px' },
          { name: '--textarea-padding-large',       description: 'Large control padding — 12px 16px' },
          { name: '--textarea-border-radius',       description: 'Corner radius — 4 px (--global-spacing-radius-4px)' },
          { name: '--textarea-border-width',        description: 'Border stroke — 0.5 px (--global-spacing-stroke-0-5px)' },
          { name: '--textarea-border-color',        description: 'Default border — neutral-gray-300 (#d2d5da)' },
          { name: '--textarea-border-color-focus',  description: 'Focused border — brand-primary (#3776ce)' },
          { name: '--textarea-border-color-error',  description: 'Error border — status-red (#ce2031)' },
          { name: '--textarea-border-color-warning', description: 'Warning border — status-dark-orange (#d07c06)' },
          { name: '--textarea-border-color-success', description: 'Success border — status-dark-green (#227f1a)' },
          { name: '--textarea-bg',                  description: 'Control background — white' },
          { name: '--textarea-bg-disabled',         description: 'Disabled background — neutral-gray-100' },
          { name: '--textarea-border-color-disabled', description: 'Disabled border — neutral-gray-200' },
          { name: '--textarea-text-color',          description: 'Input text — base-black (#1c1c1c)' },
          { name: '--textarea-text-color-disabled', description: 'Disabled input text — neutral-gray-400' },
          { name: '--textarea-placeholder-color',   description: 'Placeholder text — neutral-gray-400' },
          { name: '--textarea-clear-color',         description: 'Clear icon default colour — neutral-gray-400' },
          { name: '--textarea-clear-size',          description: 'Clear icon size — 16 px (--global-spacing-sizing-16px)' },
          { name: '--textarea-label-font',          description: 'Label typeface — F37 Ginger Pro (--brand-font-primary)' },
          { name: '--textarea-input-font',          description: 'Input typeface — Calibri (--brand-font-secondary)' },
          { name: '--textarea-input-size-small',    description: 'Small input font size — 14 px (--global-type-size-primary-label-sm)' },
          { name: '--textarea-input-size-default',  description: 'Default input font size — 16 px (--global-type-size-primary-label)' },
          { name: '--textarea-input-size-large',    description: 'Large input font size — 18 px (--global-type-size-primary-label-lg)' },
          { name: '--textarea-helper-font',         description: 'Helper text typeface — Calibri (--brand-font-secondary)' },
          { name: '--textarea-helper-size',         description: 'Helper text size — 12 px (--global-type-size-primary-label-xs)' },
          { name: '--textarea-helper-color-error',  description: 'Error helper colour — status-red' },
          { name: '--textarea-helper-color-warning', description: 'Warning helper colour — status-dark-orange' },
          { name: '--textarea-helper-color-success', description: 'Success helper colour — status-dark-green' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Guidelines ── */}
    <DocsTemplate.Section title="Usage Guidelines">
      <DocsTemplate.PrincipleCard number={1} title="Use TextArea for multi-line content">
        Reserve TextArea for content that naturally spans multiple lines — descriptions,
        notes, comments, and rich free text. For single-line inputs, use{' '}
        <strong>SimpleField</strong>.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Set minRows to match expected content">
        Tune <code>minRows</code> to give the user a visual hint of how much content is
        expected. Short comments: 2–3 rows. Long descriptions: 4–6 rows.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Pair validation with descriptive helper text">
        Always supply a <code>helperText</code> message alongside an <code>error</code>,{' '}
        <code>warning</code>, or <code>success</code> state. Colour alone is not sufficient
        for accessibility.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={4} title="Match size to surrounding context">
        Use <strong>small</strong> inside compact panels or sidebars,{' '}
        <strong>default</strong> for standard forms, and <strong>large</strong> for
        prominent or hero-level inputs.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Section>
  </DocsTemplate>
);

export default TextAreaDocs;
