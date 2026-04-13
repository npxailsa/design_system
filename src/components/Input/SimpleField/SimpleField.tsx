import React, { useId, useRef, useState, useEffect, useCallback } from 'react';
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
  /**
   * Pool of suggestion strings to search against when the user types.
   * Activates the tag-search / autocomplete pattern.
   * Already-selected tag labels are automatically excluded.
   */
  suggestions?: string[];
  /**
   * Called when the user selects a suggestion from the dropdown.
   * The parent should add the value to `tags` and clear the `value` prop.
   */
  onSuggestionSelect?: (value: string) => void;
  /**
   * Human-readable name of what is being searched (shown in the empty state).
   * e.g. "location", "tag", "parameter"
   * @default 'option'
   */
  suggestionsLabel?: string;
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
 *
 * **Tag search**: supply `suggestions` + `onSuggestionSelect` to enable
 * the autocomplete dropdown — the input becomes a search box that filters
 * the suggestion list as the user types, selecting adds a Tag chip.
 */
export const SimpleField: React.FC<SimpleFieldProps> = ({
  label,
  placeholder,
  value = '',
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
  suggestions,
  onSuggestionSelect,
  suggestionsLabel = 'option',
  disabled = false,
  type = 'text',
  id: idProp,
  name,
  className,
  ariaLabel,
}) => {
  const generatedId = useId();
  const listboxId = `${generatedId}-listbox`;
  const inputId = idProp ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  /* ── Dropdown state ── */
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  /* Build filtered suggestion list */
  const selectedLabels = new Set((tags ?? []).map((t) => t.label.toLowerCase()));
  const query = value.toLowerCase().trim();
  const filtered: string[] = suggestions
    ? suggestions.filter(
        (s) =>
          s.toLowerCase().includes(query) &&
          !selectedLabels.has(s.toLowerCase()),
      )
    : [];

  const hasSuggestions = !!suggestions;
  const showDropdown = hasSuggestions && isOpen && !disabled;

  /* ── Close on outside click ── */
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  /* ── Select a suggestion ── */
  const selectSuggestion = useCallback(
    (suggestion: string) => {
      onSuggestionSelect?.(suggestion);
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.focus();
    },
    [onSuggestionSelect],
  );

  /* ── Keyboard handler ── */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!hasSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
        break;
      case 'Enter':
        if (isOpen && activeIndex >= 0 && filtered[activeIndex]) {
          e.preventDefault();
          selectSuggestion(filtered[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setActiveIndex(-1);
        break;
      case 'Backspace':
        // Remove the last tag when the input is empty
        if (!value && tags && tags.length > 0 && onTagRemove) {
          onTagRemove(tags[tags.length - 1].id);
        }
        break;
      default:
        break;
    }
  };

  /* ── Open on input change ── */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setIsOpen(true);
    setActiveIndex(-1);
  };

  /* ── Derived flags ── */
  const hasTags = tags && tags.length > 0;
  const showClear = clearable && !disabled && value && value.length > 0;

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
    showDropdown && styles['control--open'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={rootRef} className={rootCls}>
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

        {/* Scrollable row: tags + input — never expands the control height */}
        <div className={styles.tagScrollArea}>
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
                  onTagRemove ? () => onTagRemove(tag.id) : undefined
                }
                disabled={disabled}
              />
            ))}

          {/* MUI InputBase — the low-level accessible primitive */}
          <InputBase
            id={inputId}
            inputRef={inputRef}
            value={value}
            onChange={handleChange}
            onFocus={() => {
              if (hasSuggestions && value.length > 0) setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={hasTags ? undefined : placeholder}
            disabled={disabled}
            type={type}
            name={name}
            inputProps={{
              'aria-label': ariaLabel,
              'aria-autocomplete': hasSuggestions ? 'list' : undefined,
              'aria-expanded': hasSuggestions ? isOpen : undefined,
              'aria-controls': hasSuggestions ? listboxId : undefined,
              'aria-activedescendant':
                activeIndex >= 0 ? `${listboxId}-opt-${activeIndex}` : undefined,
              role: hasSuggestions ? 'combobox' : undefined,
              className: styles.nativeInput,
            }}
            classes={{
              root: styles.inputRoot,
              input: styles.nativeInput,
            }}
          />
        </div>

        {/* Clear button — pinned outside scroll area so it's always visible */}
        {showClear && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={(e) => {
              e.stopPropagation();
              onClear?.();
              setIsOpen(false);
            }}
            aria-label="Clear input"
            tabIndex={-1}
          >
            <CloseIcon className={styles.clearIcon} />
          </button>
        )}
      </div>

      {/* ── Suggestion dropdown ── */}
      {showDropdown && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={`${suggestionsLabel} suggestions`}
          className={styles.dropdown}
        >
          {filtered.length > 0 ? (
            filtered.map((s, i) => (
              <li
                key={s}
                id={`${listboxId}-opt-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                className={[
                  styles.dropdownOption,
                  i === activeIndex && styles['dropdownOption--active'],
                ]
                  .filter(Boolean)
                  .join(' ')}
                onPointerDown={(e) => {
                  // Prevent blur before click fires
                  e.preventDefault();
                  selectSuggestion(s);
                }}
              >
                {s}
              </li>
            ))
          ) : (
            <li className={styles.dropdownEmpty} aria-disabled="true">
              No matching {suggestionsLabel}
            </li>
          )}
        </ul>
      )}

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
