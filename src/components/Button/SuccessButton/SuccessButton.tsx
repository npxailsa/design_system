import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './SuccessButton.module.css';

export type SuccessButtonVariant = 'solid' | 'ghost';
export type SuccessButtonSize = 'small' | 'default' | 'large';

export interface SuccessButtonProps {
  /** Display label */
  label?: string;
  /**
   * Visual variant.
   * - `solid` — light-green (#96F78D) background, black text/icon;
   *             hover flips to dark-green fill with white text/icon
   * - `ghost` — white background, dark-green border & text/icon;
   *             hover shifts bg to green-light (#F2FFF1)
   */
  variant?: SuccessButtonVariant;
  /** Size variant — controls height, padding, font, and icon sizes */
  size?: SuccessButtonSize;
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

/* ── Leading icon: user/account (14 / 16 / 18px per Figma) ───────────────── */

const UserIconSmall: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z"
      fill="currentColor"
    />
  </svg>
);

const UserIconDefault: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8.00033 2.66663C8.70757 2.66663 9.38585 2.94758 9.88594 3.44767C10.386 3.94777 10.667 4.62605 10.667 5.33329C10.667 6.04054 10.386 6.71881 9.88594 7.21891C9.38585 7.71901 8.70757 7.99996 8.00033 7.99996C7.29308 7.99996 6.6148 7.71901 6.11471 7.21891C5.61461 6.71881 5.33366 6.04054 5.33366 5.33329C5.33366 4.62605 5.61461 3.94777 6.11471 3.44767C6.6148 2.94758 7.29308 2.66663 8.00033 2.66663ZM8.00033 9.33329C10.947 9.33329 13.3337 10.5266 13.3337 12V13.3333H2.66699V12C2.66699 10.5266 5.05366 9.33329 8.00033 9.33329Z"
      fill="currentColor"
    />
  </svg>
);

const UserIconLarge: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z"
      fill="currentColor"
    />
  </svg>
);

/* ── Trailing icon: arrow-right (14 / 16 / 18px per Figma) ───────────────── */

const ArrowIconSmall: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIconDefault: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2.66699 7.3333V8.66664H10.667L7.00033 12.3333L7.94699 13.28L13.227 7.99997L7.94699 2.71997L7.00033 3.66664L10.667 7.3333H2.66699Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIconLarge: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z"
      fill="currentColor"
    />
  </svg>
);

const USER_ICON: Record<SuccessButtonSize, React.FC> = {
  small:   UserIconSmall,
  default: UserIconDefault,
  large:   UserIconLarge,
};

const ARROW_ICON: Record<SuccessButtonSize, React.FC> = {
  small:   ArrowIconSmall,
  default: ArrowIconDefault,
  large:   ArrowIconLarge,
};

/**
 * SuccessButton — status-specific button for success / confirmation actions.
 *
 * Two variants:
 * - `solid` — light-green (#96F78D) filled background with black text (default);
 *             hover transitions the background to dark-green (#227F1A) and
 *             text/icons flip to white — a unique colour inversion per Figma.
 * - `ghost` — white background with dark-green border and text/icon;
 *             hover shifts background to green-light (#F2FFF1);
 *             focus uses a 3px border (per Figma spec).
 *
 * All three sizes: `small`, `default`, `large`.
 * Supports: loading, disabled, and all interactive states (hover, focus, active).
 *
 * Storybook: Atoms / Buttons / StatusButton / SuccessButton
 */
export const SuccessButton: React.FC<SuccessButtonProps> = ({
  label = 'Success button',
  variant = 'solid',
  size = 'default',
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}) => {
  const UserIcon = USER_ICON[size];
  const ArrowIcon = ARROW_ICON[size];

  const classNames = [
    styles['btn-success'],
    styles[`btn-success--${variant}`],
    size !== 'default' ? styles[`btn-success--${size}`] : '',
    loading ? styles['btn-success--loading'] : '',
    disabled ? styles['btn-success--disabled'] : '',
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
        <span className={styles['btn-success__spinner']} aria-hidden="true" />
      ) : (
        <span className={styles['btn-success__icon-leading']}>
          <UserIcon />
        </span>
      )}
      <span className={styles['btn-success__label']}>{label}</span>
      {!loading && (
        <span className={styles['btn-success__icon-trailing']}>
          <ArrowIcon />
        </span>
      )}
    </ButtonBase>
  );
};

export default SuccessButton;
