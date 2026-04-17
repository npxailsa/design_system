import React, { useId, useRef, useState, useEffect, useCallback } from 'react';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Tag } from '../../Tag/Tag';
import { MenuMultiSelect as SelectOption } from '../../BuildingBlocks/MenuMultiSelect/MenuMultiSelect';
import type { MenuMultiSelectPosition as SelectOptionPosition } from '../../BuildingBlocks/MenuMultiSelect/MenuMultiSelect';
import styles from './Dropdown.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type DropdownSize = 'small' | 'default' | 'large';
export type DropdownState = 'default' | 'error' | 'warning' | 'success';

export interface DropdownOption {
  /** Unique identifier for the option */
  id: string | number;
  /** Visible label text */
  label: string;
  /** Optional leading icon — pass a MUI SvgIcon component */
  leadingIcon?: React.ElementType;
  /** Prevents selection of this option */
  disabled?: boolean;
}

export interface DropdownProps {
  /** Field label displayed above the trigger */
  label?: string;
  /** Placeholder text shown when nothing is selected */
  placeholder?: string;
  /** Array of selectable options */
  options: DropdownOption[];

  /* ── Single-select ── */
  /** Currently selected option id (single-select, controlled) */
  value?: string | number | null;
  /** Called with the new option id (or null when cleared) */
  onChange?: (value: string | number | null, option: DropdownOption | null) => void;

  /* ── Multi-select ── */
  /** Enable multi-select mode with checkboxes */
  multiSelect?: boolean;
  /** Currently selected option ids (multi-select, controlled) */
  values?: (string | number)[];
  /** Called with the updated selection array */
  onMultiChange?: (values: (string | number)[], options: DropdownOption[]) => void;

  /* ── Search / filter ── */
  /**
   * Enable keyboard search within the open dropdown.
   * The user types in the trigger input to filter the option list.
   */
  searchable?: boolean;

  /* ── Appearance ── */
  /** Visual size of the trigger and menu items */
  size?: DropdownSize;
  /** Validation state — drives border and helper text colour */
  state?: DropdownState;
  /** Leading icon rendered inside the trigger on the left */
  leadingIcon?: React.ElementType;
  /**
   * Show a clear (×) button in the trigger when a selection exists.
   * Only relevant for single-select — multi-select always shows clear when values exist.
   */
  clearable?: boolean;
  /** Helper / validation text shown below the trigger */
  helperText?: string;
  /** Disables the dropdown */
  disabled?: boolean;
  /** HTML id for the trigger input */
  id?: string;
  /** Additional CSS class for the root wrapper */
  className?: string;
  /** Accessible label when no visible label is provided */
  'aria-label'?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * Dropdown — a select/combobox input built on MUI primitives.
 *
 * **MUI Foundation**: `InputBase` (trigger), `Checkbox` (multi-select)
 * — both unstyled accessible primitives; all visual treatment applied
 * via design-token CSS Modules.
 *
 * **Sizes**: small | default | large
 * **States**: default | error | warning | success | disabled
 *
 * **Modes**:
 * - Single-select: click to select one option; shows selected label in trigger.
 * - Multi-select (`multiSelect`): checkboxes; selected options shown as Tag chips.
 * - Searchable (`searchable`): typing in the trigger filters the option list.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = 'Select an option',
  options,
  value = null,
  onChange,
  multiSelect = false,
  values = [],
  onMultiChange,
  searchable = false,
  size = 'default',
  state = 'default',
  leadingIcon: LeadingIconProp,
  clearable = false,
  helperText,
  disabled = false,
  id: idProp,
  className,
  'aria-label': ariaLabel,
}) => {
  const generatedId = useId();
  const inputId = idProp ?? generatedId;
  const listboxId = `${generatedId}-listbox`;

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  /* ── Derived values ── */
  const selectedOption = options.find((o) => o.id === value) ?? null;

  const selectedOptions = options.filter((o) => values.includes(o.id));

  const filteredOptions = searchable && searchQuery.trim()
    ? options.filter((o) =>
        o.label.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : options;

  const hasSelection = multiSelect ? values.length > 0 : value != null;
  const showClear =
    !disabled && hasSelection && (clearable || multiSelect);

  /* ── Close on outside click ── */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [isOpen]);

  /* ── Reset active index when dropdown closes ── */
  useEffect(() => {
    if (!isOpen) setActiveIndex(-1);
  }, [isOpen]);

  /* ── Reset search when dropdown closes ── */
  useEffect(() => {
    if (!isOpen) setSearchQuery('');
  }, [isOpen]);

  const openMenu = () => {
    if (disabled) return;
    setIsOpen(true);
    if (searchable) setTimeout(() => inputRef.current?.focus(), 0);
  };

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setSearchQuery('');
    setActiveIndex(-1);
  }, []);

  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());

  /* ── Single-select: pick an option ── */
  const selectOption = useCallback(
    (opt: DropdownOption) => {
      if (opt.disabled) return;
      const isSame = opt.id === value;
      onChange?.(isSame ? null : opt.id, isSame ? null : opt);
      closeMenu();
    },
    [value, onChange, closeMenu],
  );

  /* ── Multi-select: toggle an option ── */
  const toggleOption = useCallback(
    (opt: DropdownOption) => {
      if (opt.disabled) return;
      const next = values.includes(opt.id)
        ? values.filter((id) => id !== opt.id)
        : [...values, opt.id];
      const nextOptions = options.filter((o) => next.includes(o.id));
      onMultiChange?.(next, nextOptions);
    },
    [values, options, onMultiChange],
  );

  /* ── Clear all ── */
  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (multiSelect) {
      onMultiChange?.([], []);
    } else {
      onChange?.(null, null);
    }
  };

  /* ── Remove a single tag (multi-select) ── */
  const removeTag = (id: string | number) => {
    const next = values.filter((v) => v !== id);
    const nextOptions = options.filter((o) => next.includes(o.id));
    onMultiChange?.(next, nextOptions);
  };

  /* ── Keyboard navigation ── */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) openMenu();
        setActiveIndex((i) => Math.min(i + 1, filteredOptions.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (!isOpen) { openMenu(); break; }
        if (activeIndex >= 0 && filteredOptions[activeIndex]) {
          const opt = filteredOptions[activeIndex];
          if (multiSelect) toggleOption(opt);
          else selectOption(opt);
        }
        break;
      case 'Escape':
        closeMenu();
        break;
      case 'Tab':
        closeMenu();
        break;
      default:
        break;
    }
  };

  /* ── Class names ── */
  const rootCls = [
    styles.field,
    styles[`field--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const triggerCls = [
    styles.trigger,
    styles[`trigger--${size}`],
    styles[`trigger--${state}`],
    disabled && styles['trigger--disabled'],
    isOpen && styles['trigger--open'],
  ]
    .filter(Boolean)
    .join(' ');

  const ChevronIcon = isOpen ? ExpandLessIcon : ExpandMoreIcon;

  /* ── Tag size mapping ── */
  const tagSize = size === 'large' ? 'default' : 'small';

  return (
    <div ref={rootRef} className={rootCls}>
      {/* ── Label ── */}
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      {/* ── Trigger row ── */}
      <div
        className={triggerCls}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        id={inputId}
        aria-label={ariaLabel}
      >
        {/* Leading icon */}
        {LeadingIconProp && (
          <span className={styles.leadingIcon} aria-hidden="true">
            <LeadingIconProp className={styles.iconSvg} />
          </span>
        )}

        {/* Selected tags (multi-select) */}
        {multiSelect && values.length > 0 && (
          <div className={styles.tagArea}>
            {selectedOptions.map((opt) => (
              <Tag
                key={opt.id}
                label={opt.label}
                size={tagSize}
                colour="default"
                variant="filled"
                showRemove
                onRemove={() => removeTag(opt.id)}
                disabled={disabled}
              />
            ))}
          </div>
        )}

        {/* Searchable input (visible when searchable + open) or display text */}
        {searchable && isOpen ? (
          <InputBase
            inputRef={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder={placeholder}
            disabled={disabled}
            inputProps={{
              className: styles.nativeInput,
              'aria-label': 'Search options',
            }}
            classes={{ root: styles.inputRoot, input: styles.nativeInput }}
          />
        ) : (
          <span
            className={[
              styles.displayText,
              !hasSelection && styles['displayText--placeholder'],
              disabled && styles['displayText--disabled'],
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {multiSelect
              ? values.length === 0
                ? placeholder
                : null /* tags shown above */
              : (selectedOption?.label ?? placeholder)}
          </span>
        )}

        {/* Actions: clear + chevron */}
        <span className={styles.actions}>
          {showClear && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={clearAll}
              aria-label="Clear selection"
              tabIndex={-1}
            >
              <CloseIcon className={styles.clearIcon} />
            </button>
          )}
          <span className={styles.chevron} aria-hidden="true">
            <ChevronIcon className={styles.chevronIcon} />
          </span>
        </span>
      </div>

      {/* ── Dropdown menu panel ── */}
      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-multiselectable={multiSelect}
          aria-label={label ?? ariaLabel ?? 'Options'}
          className={[styles.menu, styles[`menu--${size}`]].join(' ')}
        >
          {filteredOptions.length === 0 ? (
            <li className={styles.emptyState} aria-disabled="true">
              No matching options
            </li>
          ) : (
            filteredOptions.map((opt, idx) => {
              const isSelected = multiSelect
                ? values.includes(opt.id)
                : opt.id === value;
              const isSolo = filteredOptions.length === 1;
              const isFirst = idx === 0;
              const isLast = idx === filteredOptions.length - 1;
              const position: SelectOptionPosition = isSolo
                ? 'solo'
                : isFirst
                ? 'top'
                : isLast
                ? 'bottom'
                : 'mid';

              return (
                <li key={opt.id} role="presentation" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  <SelectOption
                    label={opt.label}
                    position={position}
                    size={size}
                    selectionType={multiSelect ? 'checkbox' : 'none'}
                    selected={isSelected}
                    disabled={opt.disabled}
                    leadingIcon={opt.leadingIcon}
                    onClick={(e) => {
                      e.preventDefault();
                      if (multiSelect) toggleOption(opt);
                      else selectOption(opt);
                    }}
                  />
                </li>
              );
            })
          )}
        </ul>
      )}

      {/* ── Helper / validation text ── */}
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

export default Dropdown;
