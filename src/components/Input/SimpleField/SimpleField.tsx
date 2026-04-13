import React, { useId, useRef } from 'react';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import type { SvgIconComponent } from '@mui/icons-material';
import { Tag } from '../../Tag/Tag';
import type { TagSize } from '../../Tag/Tag';
import styles from './SimpleField.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type SimpleFieldSize = 'small' | 'default' | 'large';
export type SimpleFieldState = 'default' | 'error' | 'warning' | 'success';

export interface SimpleFieldTag {
  id: string | number;
  label: string;
}

export interface SimpleFieldProps {
  /** Field label displayed above the input */
  label?: string;
  /** Placeholder text shown when the field is empty */
  placeholder?: string;
  /** Current input value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Visual size of the field.
   * @default 'default'
   */
  size?: SimpleFieldSize;
  /**
   * Validation / semantic state — drives border and helper text colour.
   * @default 'default'
   */
  state?: SimpleFieldState;
  /** Helper text shown below the field (error / warning / success message) */
  helperText?: string;
  /** MUI SvgIcon component rendered on the left side of the input */
  leadingIcon?: SvgIconComponent | React.ElementType;
  /**
   * Show a clear (×) button on the right when the field has a value.
   * @default false
   */
  clearable?: boolean;
  /** Callback fired when the clear button is clicked */
  onClear?: () => void;
  /** Inline tag chips rendered inside the input row (tag-input pattern) */
  tags?: SimpleFieldTag[];
  /** Callback when a tag's remove button is clicked */
  onTagRemove?: (id: string | number) => void;
  /**
   * Colour variant passed to each Tag chip.
   * Accepts any TagColour value — defaults to 'blue'.
   * @default 'blue'
   */
  tagColour?: React.ComponentProps<typeof Tag>['colour'];
  /** Disables the field */
  disabled?: boolean;
  /** HTML input type */
  type?: string;
  /** HTML id attribute (auto-generated if omitted) */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Additional CSS class for the root wrapper */
  className?: string;
  /** aria-label for the input (used when there is no visible label) */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * SimpleField — a single-line text input built on MUI's `InputBase`.
 *
 * **MUI Foundation**: `InputBase` from `@mui/material`
 * — the unstyled, accessible input primitive. All visual
 * treatment is applied via design-token CSS Modules on top.
 *
 * **Sizes**: small (32 px) | default (40 px) | large (48 px)
 * **States**: default | error | warning | success | disabled
 */
export const SimpleField: React.FC<SimpleFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  size = 'default',
  state = 'default',
  helperText,
  leadingIcon: LeadingIconProp,
  clearable = false,
  onClear,
  tags,
  onTagRemove,
  tagColour = 'blue',
  disabled = false,
  type = 'text',
  id: idProp,
  name,
  className,
  ariaLabel,
}) => {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  const hasTags = tags && tags.length > 0;
  const showClear = clearable && !disabled && value && value.length > 0 && !hasTags;

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

      {/* ── Input control row ── */}
      <div
        className={controlCls}
        onClick={() => {
          if (!disabled) inputRef.current?.focus();
        }}
      >
        {/* Leading icon */}
        {LeadingIconProp && (
          <span className={styles.leadingIcon} aria-hidden="true">
            <LeadingIconProp className={styles.iconSvg} />
          </span>
        )}

        {/* Inline tag chips — rendered using the design system Tag component */}
        {hasTags &&
          tags!.map((tag) => (
            <Tag
              key={tag.id}
              label={tag.label}
              size={size as TagSize}
              colour={tagColour}
              variant="filled"
              showRemove={!!onTagRemove && !disabled}
              onRemove={
                onTagRemove
                  ? () => onTagRemove(tag.id)
                  : undefined
              }
              disabled={disabled}
            />
          ))}

        {/* MUI InputBase — the low-level accessible primitive */}
        <InputBase
          id={inputId}
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          placeholder={hasTags ? undefined : placeholder}
          disabled={disabled}
          type={type}
          name={name}
          inputProps={{
            'aria-label': ariaLabel,
            className: styles.nativeInput,
          }}
          classes={{
            root: styles.inputRoot,
            input: styles.nativeInput,
          }}
        />

        {/* Clear button */}
        {showClear && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={(e) => {
              e.stopPropagation();
              onClear?.();
            }}
            aria-label="Clear input"
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

export default SimpleField;
