import React, { useId, useRef, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { GhostButton } from '../../GhostButton/GhostButton';
import styles from './DateTime.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type DateTimeType = 'date' | 'time';
export type DateTimeSize = 'small' | 'default' | 'large';
export type DateTimeState = 'default' | 'error' | 'warning' | 'success';

export interface DateTimeProps {
  /**
   * Whether the field captures a date or a time value.
   * @default 'date'
   */
  type?: DateTimeType;
  /** Label displayed above the input */
  label?: string;
  /**
   * Current value (controlled).
   * - Date: ISO date string `YYYY-MM-DD`
   * - Time: 24-hour string `HH:mm` or `HH:mm:ss`
   */
  value?: string;
  /** Change handler — called with the new raw string value */
  onChange?: (value: string) => void;
  /**
   * Visual size of the field.
   * @default 'default'
   */
  size?: DateTimeSize;
  /**
   * Validation state — drives border and helper text colour.
   * @default 'default'
   */
  state?: DateTimeState;
  /** Helper / validation text shown below the field */
  helperText?: string;
  /** Disables interaction */
  disabled?: boolean;
  /** HTML id (auto-generated when omitted) */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Additional class on the root wrapper */
  className?: string;
  /** aria-label for the input (used when there is no visible label) */
  ariaLabel?: string;
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * Format an ISO date string (YYYY-MM-DD) → "DD / MMM / YYYY"
 * e.g. "2001-01-01" → "01 / JAN / 2001"
 * Returns the original string unchanged when it cannot be parsed as ISO.
 */
function formatDateDisplay(iso: string): string {
  if (!iso) return '';
  const parts = iso.split('-');
  if (parts.length !== 3) return iso;
  const [y, m, d] = parts;
  const monthIndex = parseInt(m, 10) - 1;
  if (monthIndex < 0 || monthIndex > 11) return iso;
  return `${d.padStart(2, '0')} / ${MONTHS[monthIndex]} / ${y}`;
}

/**
 * Format a 24-hour time string (HH:mm[:ss]) → "HH : MM : SS" (12-hour)
 * Does NOT include the AM/PM suffix — that lives in the ghost button slot.
 * e.g. "14:30:02" → "02 : 30 : 02"
 * Returns the original string when it cannot be parsed as a 24-hour time.
 */
function formatTimeDisplay(raw: string): string {
  if (!raw) return '';
  const parts = raw.split(':');
  if (parts.length < 2) return raw;
  let hours = parseInt(parts[0], 10);
  if (isNaN(hours)) return raw;
  const minutes = parts[1].padStart(2, '0');
  const seconds = (parts[2] || '00').substring(0, 2).padStart(2, '0');
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')} : ${minutes} : ${seconds}`;
}

/**
 * Parse user-typed "DD / MMM / YYYY" (or partial) back to ISO "YYYY-MM-DD".
 * Returns the original text when parsing fails so the user can keep typing.
 */
function parseFormattedDate(text: string): string {
  const clean = text.replace(/\s/g, '');
  const match = clean.match(/^(\d{1,2})\/([A-Za-z]{3})\/(\d{4})$/);
  if (!match) return text;
  const [, d, m, y] = match;
  const monthIndex = MONTHS.indexOf(m.toUpperCase());
  if (monthIndex === -1) return text;
  return `${y}-${String(monthIndex + 1).padStart(2, '0')}-${d.padStart(2, '0')}`;
}

/**
 * Parse user-typed "HH : MM : SS" (or partial) back to 24-hour "HH:MM:SS".
 * Returns the original text when parsing fails so the user can keep typing.
 */
function parseFormattedTime(text: string): string {
  const clean = text.replace(/\s/g, '');
  const match = clean.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);
  if (!match) return text;
  const [, h, m, s] = match;
  return `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
}

/**
 * Derive the AM/PM period from a 24-hour time string.
 * Returns 'AM' when hours < 12, 'PM' otherwise.
 * Defaults to 'AM' when no value is present.
 */
function derivePeriod(raw: string): 'AM' | 'PM' {
  if (!raw) return 'AM';
  const hours = parseInt(raw.split(':')[0], 10);
  if (isNaN(hours)) return 'AM';
  return hours >= 12 ? 'PM' : 'AM';
}

/**
 * Toggle the AM/PM period of a 24-hour time string.
 * AM → PM adds 12 hours; PM → AM subtracts 12 hours.
 */
function togglePeriod(raw: string, currentPeriod: 'AM' | 'PM'): string {
  if (!raw) return raw;
  const parts = raw.split(':');
  let hours = parseInt(parts[0], 10);
  if (isNaN(hours)) return raw;
  if (currentPeriod === 'AM') {
    hours = (hours + 12) % 24;
  } else {
    hours = hours - 12;
    if (hours < 0) hours = 0;
  }
  parts[0] = String(hours).padStart(2, '0');
  return parts.join(':');
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * DateTime — a date or time input built on MUI's `InputBase`.
 *
 * **MUI Foundation**: `InputBase` from `@mui/material` — the unstyled,
 * accessible input primitive. All visual treatment is applied via
 * design-token CSS Modules on top.
 *
 * **Date format**: DD / MMM / YYYY (e.g. 01 / JAN / 2001)
 * **Time format**: HH : MM : SS with a separate AM/PM ghost-button toggle
 *
 * ### Separator behaviour
 * The input always renders as `type="text"`. The "/" and ":" separators are
 * part of the formatted display string and therefore appear in a fixed position
 * at all times — including the focused state.
 *
 * ### AM/PM ghost button
 * Visible only when the input is **not** focused. Clicking it toggles the
 * stored 24-hour value between the AM and PM halves without focusing the
 * input. When the user focuses the input to edit, the button hides to avoid
 * clutter — the period is encoded inside the edited HH value.
 *
 * **Types**: date | time
 * **Sizes**: small | default | large
 * **States**: default | error | warning | success | disabled
 */
export const DateTime: React.FC<DateTimeProps> = ({
  type = 'date',
  label,
  value = '',
  onChange,
  size = 'default',
  state = 'default',
  helperText,
  disabled = false,
  id: idProp,
  name,
  className,
  ariaLabel,
}) => {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  /* AM/PM period — derived from the stored 24-hour value */
  const period = derivePeriod(value);

  /* Placeholder — always reflects the formatted mask */
  const placeholder = type === 'date' ? 'DD / MMM / YYYY' : 'HH : MM : SS';

  /*
   * Display value — always formatted, regardless of focused state.
   * This keeps the "/" and ":" separators in a fixed position at all times,
   * including when the field is focused and the user is actively editing.
   *
   * When the stored value is an ISO string it is formatted via the helpers.
   * When it is mid-type text (not yet parseable as ISO) it is shown verbatim
   * so the user can continue typing without disruption.
   */
  const displayValue = (() => {
    if (!value) return '';
    return type === 'date' ? formatDateDisplay(value) : formatTimeDisplay(value);
  })();

  /*
   * onChange handler — attempt to parse the user's typed text back to the
   * canonical storage format (ISO date / 24-hour time).
   * While the input is only partially filled the raw text is passed through,
   * allowing the parent to store intermediate states without crashing.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (!text) {
      onChange?.('');
      return;
    }
    const parsed = type === 'date'
      ? parseFormattedDate(text)
      : parseFormattedTime(text);
    onChange?.(parsed);
  };

  /* ── AM/PM toggle handler ── */
  const handlePeriodToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    /* Stop the click from bubbling to the control div → prevents focus */
    e.stopPropagation();
    if (disabled || !value) return;
    onChange?.(togglePeriod(value, period));
  };

  /* ── Class names ── */
  const rootCls = [
    styles.field,
    styles[`field--${size}`],
    className,
  ].filter(Boolean).join(' ');

  const controlCls = [
    styles.control,
    styles[`control--${size}`],
    focused && styles['control--focused'],
    state !== 'default' && styles[`control--${state}`],
    disabled && styles['control--disabled'],
    type === 'time' && styles['control--time'],
  ].filter(Boolean).join(' ');

  const iconCls = [
    styles.trailingIcon,
    focused && styles['trailingIcon--focused'],
    state !== 'default' && styles[`trailingIcon--${state}`],
    disabled && styles['trailingIcon--disabled'],
  ].filter(Boolean).join(' ');

  const TrailingIcon = type === 'date' ? CalendarTodayIcon : AccessTimeIcon;

  return (
    <div className={rootCls}>
      {/* ── Label ── */}
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      {/* ── Input control row ── */}
      <div
        className={controlCls}
        onClick={() => {
          if (!disabled) inputRef.current?.focus();
        }}
      >
        {/*
         * MUI InputBase — always type="text" so the browser never injects
         * its native date/time picker UI or reformats the value.
         * The formatted display value provides the static "/" and ":" separators.
         */}
        <InputBase
          id={inputId}
          inputRef={inputRef}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          type="text"
          name={name}
          inputProps={{
            'aria-label': ariaLabel ?? label,
            className: styles.nativeInput,
          }}
          classes={{
            root: styles.inputRoot,
            input: styles.nativeInput,
          }}
        />

        {/*
         * AM/PM toggle — time inputs only, hidden while the input is focused.
         *
         * Rationale: when the user is typing inside the time field they control
         * the hour digit directly (24-hour format). Showing the AM/PM button
         * simultaneously would be confusing. Once they tab/click away the
         * button reappears showing the derived period for the stored value.
         *
         * Clicking the button toggles the stored 24-hour value between AM and PM
         * halves (±12 hours) without focusing the input.
         */}
        {type === 'time' && !focused && (
          <span className={styles.ampmSlot} onClick={(e) => e.stopPropagation()}>
            <GhostButton
              label={period}
              size="extra-small"
              variant="ghost"
              disabled={disabled}
              onClick={handlePeriodToggle}
              ariaLabel={`Switch to ${period === 'AM' ? 'PM' : 'AM'}`}
              className={styles.ampmBtn}
            />
          </span>
        )}

        {/* Trailing icon — calendar for date, clock for time */}
        <span className={iconCls} aria-hidden="true">
          <TrailingIcon className={styles.iconSvg} />
        </span>
      </div>

      {/* ── Helper / status text ── */}
      {helperText && (
        <span
          className={[
            styles.helper,
            state !== 'default' && styles[`helper--${state}`],
          ].filter(Boolean).join(' ')}
          role={state === 'error' ? 'alert' : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default DateTime;
