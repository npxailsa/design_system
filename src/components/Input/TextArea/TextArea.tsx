import React, { useId, useRef } from 'react';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import styles from './TextArea.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type TextAreaSize  = 'small' | 'default' | 'large';
export type TextAreaState = 'default' | 'error' | 'warning' | 'success';

export interface TextAreaProps {
  /** Field label displayed above the textarea */
  label?: string;
  /** Placeholder text shown when the field is empty */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Visual size of the field.
   * Controls minimum height and typography scale.
   * @default 'default'
   */
  size?: TextAreaSize;
  /**
   * Validation / semantic state — drives border and helper text colour.
   * @default 'default'
   */
  state?: TextAreaState;
  /** Helper / validation text rendered below the control */
  helperText?: string;
  /**
   * Show a clear (×) button in the top-right corner when the field has a value.
   * @default false
   */
  clearable?: boolean;
  /** Callback fired when the clear button is clicked */
  onClear?: () => void;
  /** Disables the field */
  disabled?: boolean;
  /**
   * Minimum number of visible text rows.
   * Combines with the size token to set a minimum height.
   * The textarea grows beyond this as the user types (autosize behaviour).
   * @default 3
   */
  minRows?: number;
  /**
   * Maximum number of rows before a vertical scrollbar appears.
   * When omitted the textarea grows without bound.
   */
  maxRows?: number;
  /**
   * CSS resize handle.
   * @default 'vertical'
   */
  resize?: 'none' | 'vertical' | 'both';
  /** HTML id — auto-generated if omitted */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Additional CSS class for the root wrapper */
  className?: string;
  /** aria-label for the textarea (use when there is no visible label) */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * TextArea — a multi-line text input built on MUI's `InputBase`.
 *
 * **MUI Foundation**: `InputBase` (multiline) from `@mui/material`.
 * Provides accessible, form-integrated multi-line input with automatic
 * height expansion via `minRows` / `maxRows`.
 *
 * **Sizes**: small | default | large
 * **States**: default | error | warning | success | disabled
 *
 * All visual treatment is applied through design-token CSS Modules —
 * no hardcoded values. Tokens are prefixed with `--textarea-*`.
 */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  size = 'default',
  state = 'default',
  helperText,
  clearable = false,
  onClear,
  disabled = false,
  minRows = 3,
  maxRows,
  resize = 'vertical',
  id: idProp,
  name,
  className,
  ariaLabel,
}) => {
  const generatedId = useId();
  const inputId     = idProp ?? generatedId;
  const inputRef    = useRef<HTMLTextAreaElement>(null);

  /* ── Derived flags ── */
  const showClear = clearable && !disabled && value.length > 0;

  /* ── Class names ── */
  const rootCls = [
    styles.field,
    styles[`field--${size}`],
    styles[`field--${state}`],
    disabled && styles['field--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const controlCls = [
    styles.control,
    styles[`control--${size}`],
    styles[`control--${state}`],
    disabled && styles['control--disabled'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootCls}>
      {/* ── Label ── */}
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      {/* ── Textarea control ── */}
      <div
        className={controlCls}
        onClick={() => {
          if (!disabled) inputRef.current?.focus();
        }}
      >
        {/* MUI InputBase in multiline mode — renders a <textarea> */}
        <InputBase
          id={inputId}
          inputRef={inputRef}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>}
          placeholder={placeholder}
          disabled={disabled}
          multiline
          minRows={minRows}
          maxRows={maxRows}
          name={name}
          inputProps={{
            'aria-label': ariaLabel,
            className: styles.nativeTextarea,
            style: { resize },
          }}
          classes={{
            root:  styles.inputRoot,
            input: styles.nativeTextarea,
          }}
        />

        {/* Clear button — absolutely positioned in the top-right corner */}
        {showClear && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={(e) => {
              e.stopPropagation();
              onClear?.();
            }}
            aria-label="Clear text area"
            tabIndex={-1}
          >
            <CloseIcon className={styles.clearIcon} />
          </button>
        )}
      </div>

      {/* ── Helper / status text ── */}
      {helperText && (
        <span
          className={[
            styles.helper,
            state !== 'default' && styles[`helper--${state}`],
          ]
            .filter(Boolean)
            .join(' ')}
          role={state === 'error' ? 'alert' : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextArea;
