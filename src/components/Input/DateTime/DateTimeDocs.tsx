import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { DateTime } from './DateTime';

/* ── Reusable controlled wrappers ────────────────────────────────────────── */

const DateField: React.FC<{
  label?: string;
  value?: string;
  size?: 'small' | 'default' | 'large';
  state?: 'default' | 'error' | 'warning' | 'success';
  disabled?: boolean;
  helperText?: string;
}> = ({ label = 'Date', value = '', size = 'default', state = 'default', disabled = false, helperText }) => {
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

const TimeField: React.FC<{
  label?: string;
  value?: string;
  size?: 'small' | 'default' | 'large';
  state?: 'default' | 'error' | 'warning' | 'success';
  disabled?: boolean;
  helperText?: string;
}> = ({ label = 'Time', value = '', size = 'default', state = 'default', disabled = false, helperText }) => {
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
      helperText={helperText}
    />
  );
};

/* ── Shared layout helpers ───────────────────────────────────────────────── */

const Row: React.FC<{ children: React.ReactNode; gap?: number }> = ({ children, gap = 16 }) => (
  <div style={{ display: 'flex', gap, flexWrap: 'wrap', alignItems: 'flex-end' }}>
    {children}
  </div>
);

const Col: React.FC<{ width?: number; children: React.ReactNode }> = ({ width = 200, children }) => (
  <div style={{ width }}>{children}</div>
);

/* ── Documentation page ──────────────────────────────────────────────────── */

export const DateTimeDocs: React.FC = () => (
  <DocsTemplate>

    {/* ── Header ── */}
    <DocsTemplate.Header
      title="DateTime"
      subtitle="A date or time input field built on MUI InputBase. Supports date and time types, three sizes, four validation states, and a built-in AM/PM ghost-button toggle."
    />

    {/* ── Overview ── */}
    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        The <strong>DateTime</strong> component provides accessible, consistently
        formatted date and time inputs. It always renders as a plain text field
        (never a native date/time browser picker), ensuring the display format
        is fully controlled by the design system at every interaction state.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The input accepts a controlled <code>value</code> in ISO format
        (<code>YYYY-MM-DD</code> for dates, <code>HH:mm:ss</code> in 24-hour
        notation for times) and displays it in the agreed human-readable format.
        Formatted display values are always shown — including when the field is
        focused — so the separators never jump or disappear.
      </DocsTemplate.BodyText>
      <Row gap={24}>
        <Col width={220}><DateField label="Date" value="2024-03-15" /></Col>
        <Col width={240}><TimeField label="Time" value="14:30:00" /></Col>
      </Row>
    </DocsTemplate.Section>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        DateTime is built on <strong>InputBase</strong> from{' '}
        <code>@mui/material</code> — the unstyled, accessible input primitive.
        All visual treatment (borders, colours, sizes, icons, and states) is
        applied through design-token CSS Modules layered on top, preserving full
        MUI interaction semantics and WCAG accessibility.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The component intentionally avoids <code>type="date"</code> and{' '}
        <code>type="time"</code> native inputs. Instead it always uses{' '}
        <code>type="text"</code> so the browser never injects its own UI chrome,
        picker dialogs, or locale-specific formatting — the design system retains
        full control at all times.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.BodyText>
        Each DateTime field is composed of up to four slots:
      </DocsTemplate.BodyText>
      <DocsTemplate.BulletList
        items={[
          'Label — displayed above the control, linked to the input via htmlFor. Optional but strongly recommended.',
          'Control row — the bordered input area. Contains the text input and the trailing icon (calendar for date, clock for time).',
          'AM/PM ghost button — time inputs only. Appears inside the control row to the right of the text input when the field is not focused. Clicking it toggles the period without moving focus to the text field.',
          'Helper text — shown below the control. Colour adapts to the active validation state.',
        ]}
      />
      <DocsTemplate.BodyText>
        The AM/PM ghost button slot is <strong>only visible when the input
        is not focused</strong>. When the user clicks into the text field to
        edit, the button hides so the user can enter the hour directly in
        24-hour notation. Once the user leaves the field the button reappears
        showing the period derived from the stored value.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Date Input ── */}
    <DocsTemplate.Section title="Date Input">
      <DocsTemplate.BodyText>
        Use <code>type="date"</code> (the default) to capture a calendar date.
        The field renders a calendar icon on the right. The placeholder and
        display format is always <strong>DD / MMM / YYYY</strong> — e.g.{' '}
        <em>15 / MAR / 2024</em>.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The <code>/</code> separators appear in a fixed position in the input
        text area at all times. They are part of the formatted display value,
        not decorative overlays, so they remain stable whether the field is
        empty (shown via placeholder), filled, or actively focused.
      </DocsTemplate.BodyText>
      <Row gap={16}>
        <Col width={220}><DateField label="Date — empty" /></Col>
        <Col width={220}><DateField label="Date — filled" value="2024-03-15" /></Col>
      </Row>
    </DocsTemplate.Section>

    {/* ── Time Input ── */}
    <DocsTemplate.Section title="Time Input">
      <DocsTemplate.BodyText>
        Use <code>type="time"</code> to capture a time of day. The field renders
        a clock icon on the right. The placeholder and display format is always{' '}
        <strong>HH : MM : SS</strong> in 12-hour notation — e.g.{' '}
        <em>02 : 30 : 00</em>.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The <code>:</code> separators are static — always at the same position
        regardless of focus state, identical to the date field behaviour.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The AM/PM period is displayed by a ghost button inside the control row.
        It appears only when the input is <strong>not</strong> focused. Clicking
        it flips the stored 24-hour value between AM and PM (±12 hours).
      </DocsTemplate.BodyText>
      <Row gap={16}>
        <Col width={240}><TimeField label="Time — empty" /></Col>
        <Col width={240}><TimeField label="Time — AM (filled)" value="08:01:54" /></Col>
        <Col width={240}><TimeField label="Time — PM (filled)" value="20:01:54" /></Col>
      </Row>
    </DocsTemplate.Section>

    {/* ── Focused & Active States ── */}
    <DocsTemplate.Section title="Focused & Active States">
      <DocsTemplate.BodyText>
        When a DateTime input is focused the control border changes to the brand
        primary colour (<code>--datetime-border-color-focus</code>) and the
        trailing icon colour updates to match.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        The display value format does <strong>not</strong> change on focus —{' '}
        <em>DD / MMM / YYYY</em> for dates and <em>HH : MM : SS</em> for times
        are always shown. This ensures the separators stay in their fixed
        positions and the user always sees a familiar, consistent format whether
        they are reading or editing the field.
      </DocsTemplate.BodyText>
      <DocsTemplate.BodyText>
        For time inputs, the AM/PM ghost button is hidden while the field is
        focused. The user edits the hour directly in 24-hour format (e.g.{' '}
        <code>14</code> for 2 PM). When focus leaves the field the button
        reappears reflecting the period that corresponds to the stored value.
      </DocsTemplate.BodyText>
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
              <Row gap={16}>
                <Col width={200}><DateField label="Date" size="small" value="2024-03-15" /></Col>
                <Col width={220}><TimeField label="Time" size="small" value="14:30:00" /></Col>
              </Row>
            ),
          },
          {
            label: 'Default',
            sublabel: '44 px — --datetime-height-default',
            children: (
              <Row gap={16}>
                <Col width={200}><DateField label="Date" size="default" value="2024-03-15" /></Col>
                <Col width={220}><TimeField label="Time" size="default" value="14:30:00" /></Col>
              </Row>
            ),
          },
          {
            label: 'Large',
            sublabel: '52 px — --datetime-height-large',
            children: (
              <Row gap={16}>
                <Col width={200}><DateField label="Date" size="large" value="2024-03-15" /></Col>
                <Col width={220}><TimeField label="Time" size="large" value="14:30:00" /></Col>
              </Row>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Validation States ── */}
    <DocsTemplate.Section title="Validation States">
      <DocsTemplate.BodyText>
        The <code>state</code> prop drives the border colour and helper-text
        colour. Use in combination with <code>helperText</code> to communicate
        validation outcomes clearly. The four states are{' '}
        <code>default</code>, <code>error</code>, <code>warning</code>, and{' '}
        <code>success</code>.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {(['default', 'error', 'warning', 'success'] as const).map((s) => (
          <Row key={s} gap={16}>
            <Col width={220}>
              <DateField
                label={`Date — ${s}`}
                value="2024-03-15"
                state={s}
                helperText={s !== 'default' ? `${s.charAt(0).toUpperCase() + s.slice(1)} — please check this date` : undefined}
              />
            </Col>
            <Col width={240}>
              <TimeField
                label={`Time — ${s}`}
                value="14:30:00"
                state={s}
                helperText={s !== 'default' ? `${s.charAt(0).toUpperCase() + s.slice(1)} — please check this time` : undefined}
              />
            </Col>
          </Row>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Disabled ── */}
    <DocsTemplate.Section title="Disabled">
      <DocsTemplate.BodyText>
        Set <code>disabled</code> to <code>true</code> to prevent all
        interaction. The control background changes to the disabled surface
        colour, text and icon colours become muted, and all pointer events
        are removed. The AM/PM ghost button also inherits the disabled state
        when the time field is disabled.
      </DocsTemplate.BodyText>
      <Row gap={16}>
        <Col width={200}><DateField label="Date — disabled (empty)" disabled /></Col>
        <Col width={200}><DateField label="Date — disabled (filled)" value="2024-03-15" disabled /></Col>
        <Col width={220}><TimeField label="Time — disabled (empty)" disabled /></Col>
        <Col width={220}><TimeField label="Time — disabled (filled)" value="14:30:00" disabled /></Col>
      </Row>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.BodyText>
        All visual values are controlled through the tokens listed below.
        DateTime aliases the <code>--simple-field-*</code> token set to stay
        consistent with the rest of the Input component family.
      </DocsTemplate.BodyText>
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--datetime-height-small',         description: 'Control height — small (32 px via --simple-field-height-small)' },
          { name: '--datetime-height-default',        description: 'Control height — default (44 px via --simple-field-height-default)' },
          { name: '--datetime-height-large',          description: 'Control height — large (52 px via --simple-field-height-large)' },
          { name: '--datetime-border-radius',         description: 'Corner radius (4 px via --global-spacing-radius-4px)' },
          { name: '--datetime-border-width',          description: 'Border thickness (0.5 px via --global-spacing-stroke-0-5px)' },
          { name: '--datetime-border-color',          description: 'Default border colour (gray-300)' },
          { name: '--datetime-border-color-focus',    description: 'Focused border colour (brand primary blue)' },
          { name: '--datetime-border-color-error',    description: 'Error state border colour' },
          { name: '--datetime-border-color-warning',  description: 'Warning state border colour' },
          { name: '--datetime-border-color-success',  description: 'Success state border colour' },
          { name: '--datetime-border-color-disabled', description: 'Disabled state border colour' },
          { name: '--datetime-bg',                    description: 'Default background (white)' },
          { name: '--datetime-bg-disabled',           description: 'Disabled background (gray-100)' },
          { name: '--datetime-text-color',            description: 'Input text colour (near-black)' },
          { name: '--datetime-text-color-disabled',   description: 'Input text colour when disabled (gray-400)' },
          { name: '--datetime-placeholder-color',     description: 'Placeholder text colour (gray-400)' },
          { name: '--datetime-icon-color',            description: 'Trailing icon colour (gray-500)' },
          { name: '--datetime-icon-color-focus',      description: 'Trailing icon colour when focused (brand primary)' },
          { name: '--datetime-padding-x-small',       description: 'Horizontal padding — small (8 px)' },
          { name: '--datetime-padding-x-default',     description: 'Horizontal padding — default (12 px)' },
          { name: '--datetime-padding-x-large',       description: 'Horizontal padding — large (16 px)' },
          { name: '--datetime-icon-size-small',       description: 'Trailing icon size — small (14 px)' },
          { name: '--datetime-icon-size-default',     description: 'Trailing icon size — default (16 px)' },
          { name: '--datetime-icon-size-large',       description: 'Trailing icon size — large (18 px)' },
          { name: '--datetime-input-font',            description: 'Input text font family' },
          { name: '--datetime-input-weight',          description: 'Input text font weight' },
          { name: '--datetime-input-size-small',      description: 'Input font size — small' },
          { name: '--datetime-input-size-default',    description: 'Input font size — default' },
          { name: '--datetime-input-size-large',      description: 'Input font size — large' },
          { name: '--datetime-label-font',            description: 'Label font family' },
          { name: '--datetime-label-size',            description: 'Label font size' },
          { name: '--datetime-label-weight',          description: 'Label font weight' },
          { name: '--datetime-label-color',           description: 'Label text colour' },
          { name: '--datetime-helper-gap',            description: 'Gap between control and helper text (4 px)' },
          { name: '--datetime-helper-font',           description: 'Helper text font family' },
          { name: '--datetime-helper-size',           description: 'Helper text font size' },
          { name: '--datetime-helper-color',          description: 'Default helper text colour (gray-500)' },
          { name: '--datetime-helper-color-error',    description: 'Error helper text colour' },
          { name: '--datetime-helper-color-warning',  description: 'Warning helper text colour' },
          { name: '--datetime-helper-color-success',  description: 'Success helper text colour' },
          { name: '--datetime-gap',                   description: 'Gap between input and trailing icon inside the control' },
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
          description="Omitting the label prop removes the visible label text. Only do this when an ariaLabel is explicitly provided for screen-reader users."
          type="caution"
        />
        <DocsTemplate.PrincipleCard
          title="Pair helper text with validation states"
          description="Use the helperText prop together with an error, warning, or success state to communicate validation outcomes clearly to the user."
          type="do"
        />
        <DocsTemplate.PrincipleCard
          title="Do not use native date/time inputs"
          description="Never swap this component for a native <input type='date'> or <input type='time'>. The design system component ensures consistent formatting, tokens, and accessibility across all browsers."
          type="dont"
        />
        <DocsTemplate.PrincipleCard
          title="Store values in ISO / 24-hour format"
          description="Always pass value in YYYY-MM-DD (date) or HH:mm:ss (time, 24-hour) format. The component handles formatting for display. Never pass pre-formatted strings as the controlled value."
          type="do"
        />
        <DocsTemplate.PrincipleCard
          title="Do not hard-code colours or sizes"
          description="Always use the --datetime-* design tokens for any visual customisation. Never apply hard-coded hex values, pixel sizes, or inline style overrides to this component."
          type="dont"
        />
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    {/* ── Accessibility ── */}
    <DocsTemplate.Section title="Accessibility">
      <DocsTemplate.BodyText>
        DateTime is built on MUI <code>InputBase</code> which provides correct
        ARIA roles and keyboard interaction out of the box. Additional
        accessibility considerations:
      </DocsTemplate.BodyText>
      <DocsTemplate.BulletList
        items={[
          'The label is linked to the input via htmlFor / id, ensuring screen readers announce it correctly.',
          'When no label prop is provided, supply ariaLabel to give the input an accessible name.',
          'Helper text in the error state is rendered with role="alert" so screen readers announce validation errors immediately.',
          'The AM/PM ghost button has ariaLabel="Switch to AM" or "Switch to PM" so its action is announced clearly.',
          'All interactive elements are keyboard-accessible: Tab to focus, Space/Enter to activate the AM/PM button.',
          'Placeholder text meets minimum contrast ratios via --datetime-placeholder-color token.',
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DateTimeDocs;
