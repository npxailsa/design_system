import React from 'react';
import styles from './GhostButton.module.css';

export type GhostButtonSize = 'small' | 'default' | 'large';
export type GhostButtonType = 'button' | 'submit' | 'reset';

export interface GhostButtonProps {
  /** Text label displayed inside the button */
  label?: string;
  /** Size variant */
  size?: GhostButtonSize;
  /** HTML button type */
  type?: GhostButtonType;
  /** Optional MUI icon component rendered before the label */
  leadingIcon?: React.ElementType;
  /** Show the leading icon */
  showLeadingIcon?: boolean;
  /** Optional MUI icon component rendered after the label */
  trailingIcon?: React.ElementType;
  /** Show the trailing icon */
  showTrailingIcon?: boolean;
  /** Render as an icon-only button (no label) */
  iconOnly?: boolean;
  /** Show a loading spinner */
  loading?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
  /** Full-width button */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class */
  className?: string;
  /** aria-label for icon-only buttons */
  ariaLabel?: string;
}

/**
 * GhostButton — Low-emphasis interactive control with a ghost/outline style.
 *
 * Uses the blue-periwinkle colour family (blue-50 background, blue-300 border,
 * blue-gray text). Designed for supporting actions that sit alongside stronger
 * Primary or Secondary buttons without competing for attention.
 *
 * Supports 3 sizes (small / default / large), optional leading / trailing icons,
 * icon-only mode, and loading + disabled states.
 */
export const GhostButton: React.FC<GhostButtonProps> = ({
  label = 'Label',
  size = 'default',
  type = 'button',
  leadingIcon: LeadingIcon,
  showLeadingIcon = false,
  trailingIcon: TrailingIcon,
  showTrailingIcon = false,
  iconOnly = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const classNames = [
    styles['ghost-btn'],
    styles[`ghost-btn--${size}`],
    iconOnly ? styles['ghost-btn--icon-only'] : '',
    loading ? styles['ghost-btn--loading'] : '',
    disabled ? styles['ghost-btn--disabled'] : '',
    fullWidth ? styles['ghost-btn--full-width'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showSpinner = loading;
  const showLeading = showLeadingIcon && LeadingIcon && !showSpinner;

  return (
    <button
      type={type}
      className={classNames}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      aria-label={iconOnly ? (ariaLabel ?? label) : ariaLabel}
      aria-busy={loading || undefined}
    >
      {/* Loading spinner */}
      {showSpinner && (
        <span className={styles['ghost-btn__spinner']} aria-hidden="true" />
      )}

      {/* Leading icon */}
      {showLeading && (
        <span className={styles['ghost-btn__icon']} aria-hidden="true">
          <LeadingIcon className={styles['ghost-btn__icon-svg']} />
        </span>
      )}

      {/* Label */}
      {!iconOnly && (
        <span className={styles['ghost-btn__label']}>{label}</span>
      )}

      {/* Trailing icon */}
      {showTrailingIcon && TrailingIcon && !iconOnly && (
        <span className={styles['ghost-btn__icon']} aria-hidden="true">
          <TrailingIcon className={styles['ghost-btn__icon-svg']} />
        </span>
      )}

      {/* Icon-only icon (uses leadingIcon prop as the single icon) */}
      {iconOnly && !showSpinner && LeadingIcon && (
        <span className={styles['ghost-btn__icon']} aria-hidden="true">
          <LeadingIcon className={styles['ghost-btn__icon-svg']} />
        </span>
      )}
    </button>
  );
};

export default GhostButton;
