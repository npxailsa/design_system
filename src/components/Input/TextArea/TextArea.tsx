import React, { useCallback, useId, useRef, useState } from 'react';
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
   * Whether the user can drag the resize grip to change the textarea height.
   * Disable this when the textarea is used in a fixed-height container.
   * @default true
   */
  resizable?: boolean;
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
 *
 * **Resize**: a custom two-line grip is pinned to the bottom-right corner.
 * Dragging it adjusts the control height via pointer-capture events.
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
  resizable = true,
  id: idProp,
  name,
  className,
  ariaLabel,
}) => {
  const generatedId = useId();
  const inputId     = idProp ?? generatedId;
  const inputRef    = useRef<HTMLTextAreaElement>(null);
  const controlRef  = useRef<HTMLDivElement>(null);

  /* ── Resize state ── */
  const MIN_HEIGHT_MAP = { small: 80, default: 104, large: 132 } as const;
  const minHeightPx = MIN_HEIGHT_MAP[size];
  const [userHeight, setUserHeight] = useState<number | null>(null);
  const dragOrigin = useRef<{ y: number; h: number } | null>(null);

  const handleResizePointerDown = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      if (disabled) return;
      e.preventDefault();
      // Capture so move/up fire on this element even if pointer leaves
      (e.currentTarget as HTMLSpanElement).setPointerCapture(e.pointerId);
      const currentH =
        controlRef.current?.getBoundingClientRect().height ?? minHeightPx;
      dragOrigin.current = { y: e.clientY, h: currentH };
    },
    [disabled, minHeightPx],
  );

  const handleResizePointerMove = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      if (!dragOrigin.current) return;
      const delta   = e.clientY - dragOrigin.current.y;
      const newH    = Math.max(minHeightPx, dragOrigin.current.h + delta);
      setUserHeight(newH);
    },
    [minHeightPx],
  );

  const handleResizePointerUp = useCallback(() => {
    dragOrigin.current = null;
  }, []);

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
        ref={controlRef}
        className={controlCls}
        style={userHeight !== null ? { height: userHeight, minHeight: userHeight } : undefined}
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
            style: {
              resize: 'none',
              height: userHeight !== null ? '100%' : undefined,
            },
          }}
          classes={{
            root:  styles.inputRoot,
            input: styles.nativeTextarea,
          }}
        />

        {/* Custom resize grip — two diagonal lines, bottom-right corner */}
        {resizable && !disabled && (
          <span
            className={styles.resizeGrip}
            aria-hidden="true"
            onPointerDown={handleResizePointerDown}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
          >
            <svg
              className={styles.resizeIcon}
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="2" y1="9" x2="9" y2="2" strokeLinecap="round" />
              <line x1="5" y1="9" x2="9" y2="5" strokeLinecap="round" />
            </svg>
          </span>
        )}

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
