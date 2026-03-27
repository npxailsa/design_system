import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'filled' | 'outline';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** Text label displayed inside the button */
  label?: string;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size variant */
  size?: ButtonSize;
  /** HTML button type */
  type?: ButtonType;
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
  /** Show a loading spinner in place of the leading icon */
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
 * Button — Primary interactive control for the design system.
 * Supports 2 variants (filled, outline), 3 sizes, optional leading/
 * trailing icons, icon-only mode, and loading + disabled states.
 */
export const Button: React.FC<ButtonProps> = ({
  label = 'Label',
  variant = 'filled',
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
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    iconOnly ? styles['btn--icon-only'] : '',
    loading ? styles['btn--loading'] : '',
    disabled ? styles['btn--disabled'] : '',
    fullWidth ? styles['btn--full-width'] : '',
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
        <span className={styles['btn__spinner']} aria-hidden="true" />
      )}

      {/* Leading icon */}
      {showLeading && (
        <span className={styles['btn__icon']} aria-hidden="true">
          <LeadingIcon className={styles['btn__icon-svg']} />
        </span>
      )}

      {/* Label */}
      {!iconOnly && (
        <span className={styles['btn__label']}>{label}</span>
      )}

      {/* Trailing icon */}
      {showTrailingIcon && TrailingIcon && !iconOnly && (
        <span className={styles['btn__icon']} aria-hidden="true">
          <TrailingIcon className={styles['btn__icon-svg']} />
        </span>
      )}

      {/* Icon-only icon (uses leadingIcon prop as the single icon) */}
      {iconOnly && !showSpinner && LeadingIcon && (
        <span className={styles['btn__icon']} aria-hidden="true">
          <LeadingIcon className={styles['btn__icon-svg']} />
        </span>
      )}
    </button>
  );
};

export default Button;
