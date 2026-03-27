import React from 'react';
import styles from './ButtonMenu.module.css';

export type ButtonMenuSize = 'small' | 'default' | 'large';

export interface ButtonMenuItem {
  /** Label text displayed in the menu row */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Marks the item as currently selected */
  selected?: boolean;
  /** Disables the item */
  disabled?: boolean;
  /** Optional leading icon (MUI SvgIcon component) */
  leadingIcon?: React.ElementType;
  /** Optional trailing icon (MUI SvgIcon component) */
  trailingIcon?: React.ElementType;
}

export interface ButtonMenuProps {
  /** Controls font size and padding */
  size?: ButtonMenuSize;
  /** Array of menu items — minimum 2 (top + bottom) */
  items: ButtonMenuItem[];
  /** Stretch to 100% of parent width */
  fullWidth?: boolean;
  className?: string;
}

export const ButtonMenu = ({
  size = 'default',
  items,
  fullWidth = false,
  className,
}: ButtonMenuProps): JSX.Element => {
  const containerClasses = [
    styles.buttonMenu,
    styles[`buttonMenu--${size}`],
    fullWidth ? styles['buttonMenu--full-width'] : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} role="menu">
      {items.map((item, index) => {
        const isTop = index === 0;
        const isBottom = index === items.length - 1;
        const isMid = !isTop && !isBottom;

        const itemClasses = [
          styles.buttonMenu__item,
          isTop && styles['buttonMenu__item--top'],
          isMid && styles['buttonMenu__item--mid'],
          isBottom && styles['buttonMenu__item--bottom'],
          item.selected && styles['buttonMenu__item--selected'],
          item.disabled && styles['buttonMenu__item--disabled'],
        ]
          .filter(Boolean)
          .join(' ');

        const LeadingIcon = item.leadingIcon;
        const TrailingIcon = item.trailingIcon;

        return (
          <button
            key={index}
            role="menuitem"
            className={itemClasses}
            onClick={item.disabled ? undefined : item.onClick}
            disabled={item.disabled}
            aria-selected={item.selected}
            aria-disabled={item.disabled}
          >
            {LeadingIcon && (
              <span className={styles.buttonMenu__icon}>
                <LeadingIcon className={styles['buttonMenu__icon-svg']} />
              </span>
            )}
            <span className={styles.buttonMenu__label}>{item.label}</span>
            {TrailingIcon && (
              <span className={`${styles.buttonMenu__icon} ${styles['buttonMenu__icon--trailing']}`}>
                <TrailingIcon className={styles['buttonMenu__icon-svg']} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonMenu;
