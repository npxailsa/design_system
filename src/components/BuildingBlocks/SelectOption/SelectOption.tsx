import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import styles from './SelectOption.module.css';

export type SelectOptionPosition = 'top' | 'mid' | 'bottom' | 'solo';
export type SelectOptionSize = 'small' | 'default' | 'large';
export type SelectOptionSelectionType = 'checkbox' | 'radio' | 'none';

export interface SelectOptionProps {
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
  position?: SelectOptionPosition;
  /** Controls font size, icon size, and padding */
  size?: SelectOptionSize;
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
  selectionType?: SelectOptionSelectionType;
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

// Map size prop → MUI checkbox/radio size and px value
const SIZE_MAP: Record<SelectOptionSize, { muiSize: 'small' | 'medium'; px: number }> = {
  small:   { muiSize: 'small',  px: 14 },
  default: { muiSize: 'small',  px: 16 },
  large:   { muiSize: 'medium', px: 18 },
};

// Shared sx for Checkbox / Radio so they match the Figma colours exactly
const indicatorSx = (selected: boolean, disabled: boolean, px: number) => ({
  padding: 0,
  flexShrink: 0,
  width: `${px}px`,
  height: `${px}px`,
  // Unchecked border: gray-300, checked/selected: brand-primary (#3776CE)
  color: disabled
    ? 'var(--global-color-neutral-gray-300)'
    : selected
    ? 'var(--brand-primary)'
    : 'var(--global-color-neutral-gray-300)',
  '&.Mui-checked': {
    color: disabled ? 'var(--global-color-neutral-gray-300)' : 'var(--brand-primary)',
  },
  // Make the icon exactly the specified pixel size
  '& .MuiSvgIcon-root': {
    fontSize: `${px}px`,
  },
  // Remove default MUI ripple padding so icon fills the container
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
});

export const SelectOption = ({
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
}: SelectOptionProps): JSX.Element => {
  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;
  const { muiSize, px } = SIZE_MAP[size];

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

      {/* Checkbox indicator — MUI Checkbox */}
      {selectionType === 'checkbox' && (
        <Checkbox
          checked={selected}
          disabled={disabled}
          size={muiSize}
          tabIndex={-1}
          disableRipple
          aria-hidden="true"
          sx={indicatorSx(selected, disabled, px)}
        />
      )}

      {/* Radio indicator — MUI Radio */}
      {selectionType === 'radio' && (
        <Radio
          checked={selected}
          disabled={disabled}
          size={muiSize}
          tabIndex={-1}
          disableRipple
          aria-hidden="true"
          sx={indicatorSx(selected, disabled, px)}
        />
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

export default SelectOption;
