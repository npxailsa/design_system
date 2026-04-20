import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { DateTime } from './DateTime';

/* ── Sample state wrappers ────────────────────────────────────────────────── */

const DateExample: React.FC<{ label?: string; value?: string; size?: 'small' | 'default' | 'large'; state?: 'default' | 'error' | 'warning' | 'success'; disabled?: boolean; helperText?: string }> = ({
  label = 'Date',
  value = '',
  size = 'default',
  state = 'default',
  disabled = false,
  helperText,
}) => {
  const [val, setVal] = React.useState(value);
  return (
    <DateTime
      type="date"
      label={label}
      value={val}
      onChange={setVal}
      size={size}
      state={state}
      disabled={disabled}
      helperText={helperText}
    />
  );
};

const TimeExample: React.FC<{ label?: string; value?: string; size?: 'small' | 'default' | 'large'; state?: 'default' | 'error' | 'warning' | 'success'; disabled?: boolean }> = ({
  label = 'Time',
  value = '',
  size = 'default',
  state = 'default',
  disabled = false,
}) => {
  const [val, setVal] = React.useState(value);
  return (
    <DateTime
      type="time"
      label={label}
      value={val}
      onChange={setVal}
      size={size}
      state={state}
      disabled={disabled}
    />
  );
};

/* ── Docs page ────────────────────────────────────────────────────────────── */

export const DateTimeDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="DateTime"
      subtitle="A date or time input field built on MUI InputBase. Supports date and time types with size and validation-state variants."
    />

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        DateTime is built on <strong>InputBase</strong> from{' '}
        <code>@mui/material</code> — the unstyled, accessible input
        primitive. All visual treatment (borders, colours, sizes, icons)
        is applied through design-token CSS Modules layered on top, keeping
        full MUI interaction semantics and accessibility.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.BodyText>
        Each DateTime field is composed of three optional slots:
      </DocsTemplate.BodyText>
      <DocsTemplate.BulletList
        items={[
          'Label — displayed above the control, linked via htmlFor.',
          'Control row — the bordered input area containing the text input and the trailing icon (calendar or clock).',
          'Helper text — shown below the control; colour changes to match the validation state.',
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Date Input ── */}
    <DocsTemplate.Section title="Date Input">
      <DocsTemplate.BodyText>
        When <code>type="date"</code> (default), the field shows a
        calendar icon on the right. The placeholder reads{' '}
        <em>DD / MMM / YYYY</em>. Once a value is set, it displays in the
        same human-readable format — e.g. <em>01 / JAN / 2000</em>.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ width: 200 }}>
          <DateExample label="Date (empty)" />
        </div>
        <div style={{ width: 200 }}>
          <DateExample label="Date (filled)" value="2000-01-01" />
        </div>
      </div>
    </DocsTemplate.Section>

    {/* ── Time Input ── */}
    <DocsTemplate.Section title="Time Input">
      <DocsTemplate.BodyText>
        When <code>type="time"</code>, the field shows a clock icon and an
        extra-small AM/PM ghost button toggle. The input placeholder reads{' '}
        <em>HH : MM : SS</em> and a set value displays in 12-hour format —
        e.g. <em>08 : 01 : 54</em> with the AM/PM button showing the current
        period. Clicking the button flips between AM and PM.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ width: 240 }}>
          <TimeExample label="Time (empty)" />
        </div>
        <div style={{ width: 240 }}>
          <TimeExample label="Time (filled)" value="20:01:54" />
        </div>
      </div>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes are available — <code>small</code>, <code>default</code>,
        and <code>large</code> — matching the global input sizing scale.
      </DocsTemplate.BodyText>
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            sublabel: '32 px — --datetime-height-small',
            children: (
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 200 }}><DateExample label="Date" size="small" /></div>
                <div style={{ width: 200 }}><TimeExample label="Time" size="small" /></div>
              </div>
            ),
          },
          {
            label: 'Default',
            sublabel: '44 px — --datetime-height-default',
            children: (
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 200 }}><DateExample label="Date" size="default" /></div>
                <div style={{ width: 200 }}><TimeExample label="Time" size="default" /></div>
              </div>
            ),
          },
          {
            label: 'Large',
            sublabel: '52 px — --datetime-height-large',
            children: (
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 200 }}><DateExample label="Date" size="large" /></div>
                <div style={{ width: 200 }}><TimeExample label="Time" size="large" /></div>
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Validation states ── */}
    <DocsTemplate.Section title="Validation States">
      <DocsTemplate.BodyText>
        The <code>state</code> prop drives the border and helper-text
        colour. The four states are{' '}
        <code>default</code>, <code>error</code>, <code>warning</code>, and{' '}
        <code>success</code>.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {(['default', 'error', 'warning', 'success'] as const).map((s) => (
          <div key={s} style={{ width: 200 }}>
            <DateExample
              label={s.charAt(0).toUpperCase() + s.slice(1)}
              state={s}
              helperText={s !== 'default' ? `${s} helper text` : undefined}
            />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Disabled ── */}
    <DocsTemplate.Section title="Disabled">
      <DocsTemplate.BodyText>
        Set <code>disabled</code> to <code>true</code> to prevent all
        interaction. The control background changes to the disabled gray
        and pointer events are removed.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ width: 200 }}>
          <DateExample label="Date (disabled)" disabled />
        </div>
        <div style={{ width: 200 }}>
          <TimeExample label="Time (disabled)" disabled />
        </div>
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        All visual values are controlled through the tokens below. DateTime
        aliases the <code>--simple-field-*</code> token set to stay
        consistent with the rest of the Input family.
      </DocsTemplate.BodyText>
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--datetime-height-small', description: 'Control height — small (32 px via --simple-field-height-small)' },
          { name: '--datetime-height-default', description: 'Control height — default (44 px via --simple-field-height-default)' },
          { name: '--datetime-height-large', description: 'Control height — large (52 px via --simple-field-height-large)' },
          { name: '--datetime-border-radius', description: 'Corner radius (4 px via --global-spacing-radius-4px)' },
          { name: '--datetime-border-width', description: 'Border thickness (0.5 px via --global-spacing-stroke-0-5px)' },
          { name: '--datetime-border-color', description: 'Default border colour (gray-300)' },
          { name: '--datetime-border-color-focus', description: 'Focused border colour (brand primary blue)' },
          { name: '--datetime-border-color-error', description: 'Error state border colour' },
          { name: '--datetime-border-color-warning', description: 'Warning state border colour' },
          { name: '--datetime-border-color-success', description: 'Success state border colour' },
          { name: '--datetime-bg', description: 'Default background (white)' },
          { name: '--datetime-bg-disabled', description: 'Disabled background (gray-100)' },
          { name: '--datetime-text-color', description: 'Input text colour (black)' },
          { name: '--datetime-placeholder-color', description: 'Placeholder text colour (gray-400)' },
          { name: '--datetime-icon-color', description: 'Trailing icon colour (gray-500)' },
          { name: '--datetime-icon-color-focus', description: 'Trailing icon colour when focused (brand primary)' },
          { name: '--datetime-padding-x-small', description: 'Horizontal padding — small (8 px)' },
          { name: '--datetime-padding-x-default', description: 'Horizontal padding — default (12 px)' },
          { name: '--datetime-padding-x-large', description: 'Horizontal padding — large (16 px)' },
          { name: '--datetime-icon-size-small', description: 'Trailing icon size — small (14 px)' },
          { name: '--datetime-icon-size-default', description: 'Trailing icon size — default (16 px)' },
          { name: '--datetime-icon-size-large', description: 'Trailing icon size — large (18 px)' },
          { name: '--datetime-helper-gap', description: 'Gap between control and helper text (4 px)' },
          { name: '--datetime-helper-color-error', description: 'Error helper text colour' },
          { name: '--datetime-helper-color-warning', description: 'Warning helper text colour' },
          { name: '--datetime-helper-color-success', description: 'Success helper text colour' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage Principles ── */}
    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard
          title="Use the right type"
          description="Use type='date' for calendar dates and type='time' for time-of-day values. Never mix the two roles in a single instance."
          type="do"
        />
        <DocsTemplate.PrincipleCard
          title="Always provide a label"
          description="Omitting the label prop removes the visible label. Only do this when an aria-label is provided for screen-reader users."
          type="caution"
        />
        <DocsTemplate.PrincipleCard
          title="Pair with helper text for validation"
          description="Use the helperText prop in combination with an error, warning, or success state to communicate validation outcomes clearly."
          type="do"
        />
        <DocsTemplate.PrincipleCard
          title="Do not hard-code colours"
          description="Always use the --datetime-* design tokens for any visual overrides. Never hard-code hex values inside component style overrides."
          type="dont"
        />
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DateTimeDocs;
