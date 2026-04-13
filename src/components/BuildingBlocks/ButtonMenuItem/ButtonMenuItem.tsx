import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './ButtonMenuItem.module.css';

export type ButtonMenuItemPosition = 'top' | 'mid' | 'bottom' | 'solo';
export type ButtonMenuItemSize = 'small' | 'default' | 'large';

export interface ButtonMenuItemProps {
  /** Visible label text */
  label: string;
  /**
   * Position within a stacked menu. Controls which corners are rounded
   * and which border edges are rendered:
   * - top  → rounded top corners, top + left + right borders
   * - mid  → no radius, left + right borders only
   * - bottom → rounded bottom corners, all 4 borders
   * - solo → all 4 rounded corners, all 4 borders (standalone)
   */
  position?: ButtonMenuItemPosition;
  /** Controls font size, icon size, and padding */
  size?: ButtonMenuItemSize;
  /** Marks the item as the currently active/selected option */
  selected?: boolean;
  /** Prevents interaction; renders in a muted style */
  disabled?: boolean;
  /** Leading icon — pass a MUI SvgIcon component class */
  leadingIcon?: React.ElementType;
  /** Trailing icon — pass a MUI SvgIcon component class */
  trailingIcon?: React.ElementType;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const ButtonMenuItem = ({
  label,
  position = 'solo',
  size = 'default',
  selected = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
}: ButtonMenuItemProps): JSX.Element => {
  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

  const cls = [
    styles.item,
    styles[`item--${size}`],
    styles[`item--${position}`],
    selected && styles['item--selected'],
    disabled && styles['item--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      component="button"
      type="button"
      role="menuitem"
      className={cls}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-selected={selected}
      aria-disabled={disabled}
    >
      {LeadingIcon && (
        <span className={styles.item__icon}>
          <LeadingIcon className={styles['item__icon-svg']} />
        </span>
      )}
      <span className={styles.item__label}>{label}</span>
      {TrailingIcon && (
        <span className={`${styles.item__icon} ${styles['item__icon--trailing']}`}>
          <TrailingIcon className={styles['item__icon-svg']} />
        </span>
      )}
    </ButtonBase>
  );
};

export default ButtonMenuItem;
