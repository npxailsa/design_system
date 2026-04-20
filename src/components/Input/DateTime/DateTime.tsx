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
 * Format a 24-hour time string (HH:mm[:ss]) → "HH : MM : SS" in 12-hour display
 * — note: does NOT include the AM/PM suffix (that is the ghost button's job).
 * e.g. "14:30:02" → "02 : 30 : 02"
 */
function formatTimeDisplay(raw: string): string {
  if (!raw) return '';
  const parts = raw.split(':');
  if (parts.length < 2) return raw;
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1].padStart(2, '0');
  const seconds = (parts[2] || '00').substring(0, 2).padStart(2, '0');
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')} : ${minutes} : ${seconds}`;
}

/**
 * Derive the AM/PM period from a 24-hour time string.
 * Returns 'AM' when hours < 12, 'PM' otherwise.
 * Defaults to 'AM' when no value is present.
 */
function derivePeriod(raw: string): 'AM' | 'PM' {
  if (!raw) return 'AM';
  const hours = parseInt(raw.split(':')[0], 10);
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
 * **Time format**: HH : MM : SS with a separate AM/PM ghost button toggle
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

  /* AM/PM period — derived from value (or defaults AM when empty) */
  const period = derivePeriod(value);

  /* Placeholder text — date: DD/MMM/YYYY, time: HH:MM:SS (no period suffix) */
  const placeholder = type === 'date' ? 'DD / MMM / YYYY' : 'HH : MM : SS';

  /*
   * Display value:
   * - date: formatted as "DD / MMM / YYYY" when blurred, raw when focused
   * - time: formatted as "HH : MM : SS" (12h, no period) when blurred, raw 24h when focused
   */
  const displayValue = (() => {
    if (!value) return '';
    if (focused) return value;
    return type === 'date' ? formatDateDisplay(value) : formatTimeDisplay(value);
  })();

  /* Native input type — switch to text when blurred to show formatted value */
  const nativeType = focused ? type : 'text';

  /* ── AM/PM toggle handler ── */
  const handlePeriodToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // don't bubble into the control's onClick→focus
    if (disabled) return;
    if (value) {
      onChange?.(togglePeriod(value, period));
    }
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
        {/* MUI InputBase — low-level accessible primitive */}
        <InputBase
          id={inputId}
          inputRef={inputRef}
          value={displayValue}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          type={nativeType}
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
         * AM/PM toggle — time inputs only.
         * Rendered as an extra-small GhostButton inside the control row.
         * Clicking toggles the internal 24-hour value between AM and PM halves.
         */}
        {type === 'time' && (
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
