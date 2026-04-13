import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './TertiaryButton.module.css';

export type TertiaryButtonVariant = 'solid' | 'alt';
export type TertiaryButtonSize = 'extra-small' | 'small' | 'default' | 'large';
export type TertiaryButtonType = 'button' | 'submit' | 'reset';

export interface TertiaryButtonProps {
  /** Text label displayed inside the button */
  label?: string;
  /** Visual variant — solid (yellow bg) or alt (seafoam/light-green bg) */
  variant?: TertiaryButtonVariant;
  /** Size variant */
  size?: TertiaryButtonSize;
  /** HTML button type */
  type?: TertiaryButtonType;
  /** Optional MUI icon component rendered before the label */
  leadingIcon?: React.ElementType;
  /** Show the leading icon */
  showLeadingIcon?: boolean;
  /** Optional MUI icon component rendered after the label */
  trailingIcon?: React.ElementType;
  /** Show the trailing icon */
  showTrailingIcon?: boolean;
  /** Render as an icon-only button (no label, yellow fill) */
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
 * Tertiary Button — Yellow/amber button for tertiary-level actions.
 *
 * Uses the yellow colour family (--btn-tertiary-*) with a dark-seafoam
 * drop shadow on hover. Two label variants: solid (yellow-200 bg) and
 * alt (seafoam-25 / light-green bg). Icon-only mode uses the brighter
 * yellow fill. Four sizes: extra-small, small, default, large.
 */
export const TertiaryButton: React.FC<TertiaryButtonProps> = ({
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
    iconOnly ? styles['btn--icon-only'] : styles[`btn--${variant}`],
    styles[`btn--${size}`],
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

export default TertiaryButton;
