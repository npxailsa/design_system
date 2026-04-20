import React, { useId, useRef, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
  /** Current value (controlled) — ISO date string for 'date', HH:mm[:ss] for 'time' */
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

/**
 * Format an ISO date string (YYYY-MM-DD) → "DD / MMM / YYYY"
 */
function formatDateDisplay(iso: string): string {
  if (!iso) return '';
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const parts = iso.split('-');
  if (parts.length !== 3) return iso;
  const [y, m, d] = parts;
  const monthIndex = parseInt(m, 10) - 1;
  if (monthIndex < 0 || monthIndex > 11) return iso;
  return `${d.padStart(2, '0')} / ${months[monthIndex]} / ${y}`;
}

/**
 * Format a time string (HH:mm[:ss]) → "HH : MM : SS AM/PM"
 */
function formatTimeDisplay(raw: string): string {
  if (!raw) return '';
  const parts = raw.split(':');
  if (parts.length < 2) return raw;
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1].padStart(2, '0');
  const seconds = (parts[2] || '00').substring(0, 2).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')} : ${minutes} : ${seconds} ${ampm}`;
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * DateTime — a date or time input built on MUI's `InputBase`.
 *
 * **MUI Foundation**: `InputBase` from `@mui/material` — the unstyled,
 * accessible input primitive. All visual treatment is applied via
 * design-token CSS Modules on top.
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

  /* Placeholder text per type */
  const placeholder = type === 'date' ? 'DD / MMM / YYYY' : '00 : 00 : 00 AM';

  /* Display value — formatted when there is a value and the field is not focused */
  const displayValue = (() => {
    if (!value) return '';
    if (focused) return value;
    return type === 'date' ? formatDateDisplay(value) : formatTimeDisplay(value);
  })();

  /* Native input type — use text while blurred to show custom format */
  const nativeType = focused ? type : 'text';

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
