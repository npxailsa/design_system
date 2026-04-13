import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './SecondaryButton.module.css';

export type SecondaryButtonVariant = 'solid' | 'alt';
export type SecondaryButtonSize = 'extra-small' | 'small' | 'default' | 'large';
export type SecondaryButtonType = 'button' | 'submit' | 'reset';

export interface SecondaryButtonProps {
  /** Text label displayed inside the button */
  label?: string;
  /** Visual variant — solid (sky-blue bg) or alt (white bg) */
  variant?: SecondaryButtonVariant;
  /** Size variant */
  size?: SecondaryButtonSize;
  /** HTML button type */
  type?: SecondaryButtonType;
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
 * Secondary Button — Sky-blue button for secondary/supporting actions.
 *
 * Uses the sky-blue colour family (--btn-secondary-*) and supports two visual
 * variants: solid (sky-blue-50 background) and alt (white background).
 * Four sizes: extra-small, small, default, large.
 * Includes icon-only, loading, and disabled modes.
 */
export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label = 'Label',
  variant = 'solid',
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
    <ButtonBase
      component="button"
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

      {/* Icon-only icon */}
      {iconOnly && !showSpinner && LeadingIcon && (
        <span className={styles['btn__icon']} aria-hidden="true">
          <LeadingIcon className={styles['btn__icon-svg']} />
        </span>
      )}
    </ButtonBase>
  );
};

export default SecondaryButton;
