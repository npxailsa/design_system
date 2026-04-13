import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './ErrorButton.module.css';

export type ErrorButtonVariant = 'solid' | 'ghost';
export type ErrorButtonSize = 'small' | 'default' | 'large';

export interface ErrorButtonProps {
  /** Display label */
  label?: string;
  /**
   * Visual variant.
   * - `solid` — red filled background, white text/icon
   * - `ghost` — white background, red border & text/icon
   */
  variant?: ErrorButtonVariant;
  /** Size variant — controls height, padding, font, and icon sizes */
  size?: ErrorButtonSize;
  /** Show loading spinner in place of the leading icon */
  loading?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Extra CSS class on the root element */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/* ── Close-thick icon SVGs (one per size, per Figma) ─────────────────────── */

const CloseIconSmall: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M11.6663 4.03075L9.96884 2.33325L6.99967 5.30242L4.03051 2.33325L2.33301 4.03075L5.30217 6.99992L2.33301 9.96909L4.03051 11.6666L6.99967 8.69742L9.96884 11.6666L11.6663 9.96909L8.69717 6.99992L11.6663 4.03075Z"
      fill="currentColor"
    />
  </svg>
);

const CloseIconDefault: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M13.3337 4.60675L11.3937 2.66675L8.00033 6.06008L4.60699 2.66675L2.66699 4.60675L6.06033 8.00008L2.66699 11.3934L4.60699 13.3334L8.00033 9.94008L11.3937 13.3334L13.3337 11.3934L9.94033 8.00008L13.3337 4.60675Z"
      fill="currentColor"
    />
  </svg>
);

const CloseIconLarge: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z"
      fill="currentColor"
    />
  </svg>
);

const CLOSE_ICON: Record<ErrorButtonSize, React.FC> = {
  small:   CloseIconSmall,
  default: CloseIconDefault,
  large:   CloseIconLarge,
};

/* ── Spinner sizes from Figma (loading spinner per size) ─────────────────── */
const SPINNER_VIEWBOX: Record<ErrorButtonSize, string> = {
  small:   '0 0 16 16',
  default: '0 0 22 22',
  large:   '0 0 28 28',
};

const SPINNER_SIZE: Record<ErrorButtonSize, number> = {
  small:   16,
  default: 22,
  large:   28,
};

const LoadingSpinner: React.FC<{ size: ErrorButtonSize }> = ({ size }) => (
  <span className={styles['btn-error__spinner']} aria-hidden="true" />
);

/**
 * ErrorButton — status-specific button for error and destructive actions.
 *
 * Two variants:
 * - `solid` — red filled background with white icon + label (primary CTA for error state)
 * - `ghost` — white background with red border, red icon + label (secondary CTA)
 *
 * All three sizes: `small`, `default`, `large`.
 * Supports: loading, disabled, and all interactive states (hover, focus, active).
 *
 * Storybook: Atoms / Buttons / StatusButton / ErrorButton
 */
export const ErrorButton: React.FC<ErrorButtonProps> = ({
  label = 'Error button',
  variant = 'solid',
  size = 'default',
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}) => {
  const CloseIcon = CLOSE_ICON[size];

  const classNames = [
    styles['btn-error'],
    styles[`btn-error--${variant}`],
    size !== 'default' ? styles[`btn-error--${size}`] : '',
    loading ? styles['btn-error--loading'] : '',
    disabled ? styles['btn-error--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      component="button"
      type={type}
      className={classNames}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
    >
      {loading ? (
        <LoadingSpinner size={size} />
      ) : (
        <span className={styles['btn-error__icon']}>
          <CloseIcon />
        </span>
      )}
      <span className={styles['btn-error__label']}>{label}</span>
    </ButtonBase>
  );
};

export default ErrorButton;
