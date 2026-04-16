import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
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
   * - 'checkbox' → shows a checkbox (suitable for multi-select menus)
   * - 'radio'    → shows a radio button (suitable for single-select menus)
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

      {/* Selection indicator */}
      {selectionType === 'checkbox' && (
        <span
          className={[
            styles.option__indicator,
            styles['option__indicator--checkbox'],
            selected && styles['option__indicator--checked'],
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {selected && (
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles['option__indicator-svg']}
            >
              <path
                d="M2.333 7L5.667 10.333L11.667 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      )}

      {selectionType === 'radio' && (
        <span
          className={[
            styles.option__indicator,
            styles['option__indicator--radio'],
            selected && styles['option__indicator--checked'],
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {selected && (
            <span className={styles['option__indicator-dot']} />
          )}
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

export default SelectOption;
