import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import SelectItem, { SelectItemSize } from '../SelectItem/SelectItem';
import styles from './MenuMultiSelect.module.css';

export type MenuMultiSelectPosition = 'top' | 'mid' | 'bottom' | 'solo';
export type MenuMultiSelectSize = 'small' | 'default' | 'large';
export type MenuMultiSelectSelectionType = 'checkbox' | 'radio' | 'none';

export interface MenuMultiSelectProps {
  /** Visible label text for the option */
  label: string;
  /**
   * Position within a stacked select menu. Controls which corners are rounded
   * and which border edges are rendered:
   * - top    → rounded top corners, top + left + right borders
   * - mid    → no radius, left + right borders only
   * - bottom → rounded bottom corners, all 4 borders
   * - solo   → all 4 rounded corners, all 4 borders (standalone)
   */
  position?: MenuMultiSelectPosition;
  /** Controls font size, icon size, and padding */
  size?: MenuMultiSelectSize;
  /** Whether this option is currently selected/checked */
  selected?: boolean;
  /** Prevents interaction; renders in a muted style */
  disabled?: boolean;
  /**
   * Type of selection indicator to show alongside the label:
   * - 'checkbox' → MUI Checkbox (suitable for multi-select menus)
   * - 'radio'    → MUI Radio (suitable for single-select menus)
   * - 'none'     → no indicator (plain text option)
   */
  selectionType?: MenuMultiSelectSelectionType;
  /** Leading icon — pass a MUI SvgIcon component class */
  leadingIcon?: React.ElementType;
  /** Trailing icon — pass a MUI SvgIcon component class */
  trailingIcon?: React.ElementType;
  /** Click / selection handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  /** Accessible label for the option (defaults to label) */
  'aria-label'?: string;
}

/**
 * Map MenuMultiSelect `size` → SelectItem `size`.
 * SelectItem already encodes the canonical pixel sizes per design token,
 * so we delegate visual scaling to it instead of duplicating constants.
 */
const SELECT_ITEM_SIZE: Record<MenuMultiSelectSize, SelectItemSize> = {
  small:   'small',
  default: 'default',
  large:   'large',
};

export const MenuMultiSelect = ({
  label,
  position = 'solo',
  size = 'default',
  selected = false,
  disabled = false,
  selectionType = 'none',
  leadingIcon,
  trailingIcon,
  onClick,
  className,
  'aria-label': ariaLabel,
}: MenuMultiSelectProps): JSX.Element => {
  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;
  const selectItemSize = SELECT_ITEM_SIZE[size];

  const cls = [
    styles.option,
    styles[`option--${size}`],
    styles[`option--${position}`],
    selected && styles['option--selected'],
    disabled && styles['option--disabled'],
    selectionType !== 'none' && styles['option--has-indicator'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      component="button"
      type="button"
      role="option"
      className={cls}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-selected={selected}
      aria-disabled={disabled}
      aria-label={ariaLabel ?? label}
    >
      {/* Leading icon slot */}
      {LeadingIcon && (
        <span className={styles.option__icon} aria-hidden="true">
          <LeadingIcon className={styles['option__icon-svg']} />
        </span>
      )}

      {/*
        Selection indicator — delegated to the SelectItem building block so
        every menu option uses the canonical token-driven checkbox / radio.
        The parent ButtonBase owns interaction; SelectItem here is purely
        the visual indicator (aria-hidden, no own change handler).
      */}
      {(selectionType === 'checkbox' || selectionType === 'radio') && (
        <span className={styles.option__indicator} aria-hidden="true">
          <SelectItem
            type={selectionType}
            size={selectItemSize}
            state={selected ? 'selected' : 'default'}
            disabled={disabled}
            aria-label={ariaLabel ?? label}
          />
        </span>
      )}

      {/* Label */}
      <span className={styles.option__label}>{label}</span>

      {/* Trailing icon slot */}
      {TrailingIcon && (
        <span
          className={`${styles.option__icon} ${styles['option__icon--trailing']}`}
          aria-hidden="true"
        >
          <TrailingIcon className={styles['option__icon-svg']} />
        </span>
      )}
    </ButtonBase>
  );
};

export default MenuMultiSelect;

/* ── Backwards-compatibility aliases (deprecated — use MenuMultiSelect) ── */
export type SelectOptionPosition     = MenuMultiSelectPosition;
export type SelectOptionSize         = MenuMultiSelectSize;
export type SelectOptionSelectionType = MenuMultiSelectSelectionType;
export type SelectOptionProps        = MenuMultiSelectProps;
/** @deprecated Use MenuMultiSelect instead */
export const SelectOption = MenuMultiSelect;
