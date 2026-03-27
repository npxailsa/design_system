import React from 'react';
import styles from './ButtonMenu.module.css';
import { ButtonMenuItem } from '../ButtonMenuItem/ButtonMenuItem';

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
  /** Controls font size, icon size, and container width */
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
        const isSolo = items.length === 1;

        let position: 'top' | 'mid' | 'bottom' | 'solo' = 'mid';
        if (isSolo) position = 'solo';
        else if (isTop) position = 'top';
        else if (isBottom) position = 'bottom';

        return (
          <ButtonMenuItem
            key={index}
            label={item.label}
            position={position}
            size={size}
            selected={item.selected}
            disabled={item.disabled}
            leadingIcon={item.leadingIcon}
            trailingIcon={item.trailingIcon}
            onClick={item.onClick}
          />
        );
      })}
    </div>
  );
};

export default ButtonMenu;
