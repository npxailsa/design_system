import React, { useState, useRef, useEffect } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './SplitButton.module.css';
import { ButtonMenu } from '../BuildingBlocks/ButtonMenu/ButtonMenu';
import type { ButtonMenuItem } from '../BuildingBlocks/ButtonMenu/ButtonMenu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * buttonType maps to the design system button family:
 *   primary   — Blue filled / outline
 *   secondary — Sky-blue solid / alt (white bg)
 *   tertiary  — Yellow solid / alt (seafoam bg)
 *   ghost     — Ghost bordered / link (text only)
 */
export type SplitButtonType = 'primary' | 'secondary' | 'tertiary' | 'ghost';

/**
 * variant selects the visual sub-style within a button family:
 *   primary   → 'filled' (default) | 'outline'
 *   secondary → 'solid'  (default) | 'alt'
 *   tertiary  → 'solid'  (default) | 'alt'
 *   ghost     → 'ghost'  (default) | 'link'
 */
export type SplitButtonVariant = 'filled' | 'outline' | 'solid' | 'alt' | 'ghost' | 'link';

export type SplitButtonSize = 'small' | 'default' | 'large';

export interface SplitButtonProps {
  /** Which button family to use */
  buttonType?: SplitButtonType;
  /** Visual sub-variant within the family */
  variant?: SplitButtonVariant;
  /** Size variant */
  size?: SplitButtonSize;
  /** Label for the main action zone */
  label?: string;
  /** Optional leading icon (MUI SvgIcon component) */
  leadingIcon?: React.ElementType;
  /** Show the leading icon */
  showLeadingIcon?: boolean;
  /** Menu items shown in the dropdown panel */
  menuItems?: ButtonMenuItem[];
  /** Show a loading spinner — disables interaction */
  loading?: boolean;
  /** Disable all interaction */
  disabled?: boolean;
  /** Callback for the main action button click */
  onMainClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback fired when dropdown open state changes */
  onMenuToggle?: (open: boolean) => void;
  /** Extra class on the container */
  className?: string;
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  buttonType = 'primary',
  variant = 'filled',
  size = 'default',
  label = 'Label',
  leadingIcon: LeadingIcon,
  showLeadingIcon = false,
  menuItems = [],
  loading = false,
  disabled = false,
  onMainClick,
  onMenuToggle,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = (next: boolean) => {
    setIsOpen(next);
    onMenuToggle?.(next);
  };

  /* Close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        toggle(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggle(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  /* Derive CSS class key — e.g. "primary-filled", "secondary-alt" */
  const styleKey = `${buttonType}-${variant}`;

  const containerClasses = [
    styles.splitBtn,
    styles[`splitBtn--${size}`],
    styles[`splitBtn--${styleKey}`],
    disabled ? styles['splitBtn--disabled'] : '',
    loading ? styles['splitBtn--loading'] : '',
    isOpen ? styles['splitBtn--open'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isInteractive = !disabled && !loading;

  return (
    <div className={containerClasses} ref={containerRef}>
      {/* ── Button group (main + divider + trigger) ── */}
      <div className={styles.splitBtn__group}>
        {/* Main action */}
        <ButtonBase
          component="button"
          type="button"
          className={styles.splitBtn__main}
          onClick={isInteractive ? onMainClick : undefined}
          disabled={!isInteractive}
          aria-label={label}
        >
          {loading && <span className={styles.splitBtn__spinner} aria-hidden="true" />}

          {showLeadingIcon && LeadingIcon && !loading && (
            <span className={styles.splitBtn__icon} aria-hidden="true">
              <LeadingIcon className={styles['splitBtn__icon-svg']} />
            </span>
          )}

          <span className={styles.splitBtn__label}>{label}</span>
        </ButtonBase>

        {/* Vertical divider */}
        <span className={styles.splitBtn__divider} aria-hidden="true" />

        {/* Dropdown trigger */}
        <ButtonBase
          component="button"
          type="button"
          className={styles.splitBtn__trigger}
          onClick={isInteractive ? () => toggle(!isOpen) : undefined}
          disabled={!isInteractive}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Open options menu"
        >
          <KeyboardArrowDownIcon
            className={[
              styles.splitBtn__chevron,
              isOpen ? styles['splitBtn__chevron--open'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </ButtonBase>
      </div>

      {/* ── Dropdown panel ── */}
      {isOpen && menuItems.length > 0 && (
        <div className={styles.splitBtn__panel} role="listbox">
          <ButtonMenu
            items={menuItems.map((item) => ({
              ...item,
              onClick: () => {
                item.onClick?.();
                toggle(false);
              },
            }))}
            fullWidth
          />
        </div>
      )}
    </div>
  );
};

export default SplitButton;
