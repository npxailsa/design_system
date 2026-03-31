import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import styles from './ButtonGroup.module.css';

export type ButtonGroupVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonGroupLayout = 'joined' | 'separate';
/**
 * Visual style modifier for label-type buttons.
 * - `default` — solid filled (primary blue background, white text)
 * - `alt`     — tinted outline (light blue background, blue border, blue-gray text)
 */
export type ButtonGroupSpecial = 'default' | 'alt';

/**
 * Configuration for an individual button within the group.
 */
export interface ButtonGroupItemConfig {
  /** Accessible label for the button (also used as display label in label-type buttons) */
  ariaLabel?: string;
  /** Display label for label-type buttons. Falls back to ariaLabel if not set. */
  label?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Override to disable just this button */
  disabled?: boolean;
  /** Override to show loading spinner on just this button */
  loading?: boolean;
}

/* ── Loading spinner SVG ─────────────────────────────────────────────────── */

const LoadingSpinner: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
    className={styles['btn-group__spinner']}
  >
    <path
      d="M11.0007 3.66659V1.83325C9.79687 1.83325 8.60487 2.07035 7.49272 2.53102C6.38057 2.99169 5.37004 3.6669 4.51884 4.51811C2.79976 6.23719 1.83398 8.56877 1.83398 10.9999H3.66732C3.66732 9.055 4.43993 7.18974 5.8152 5.81447C7.19047 4.4392 9.05573 3.66659 11.0007 3.66659Z"
      fill="currentColor"
    />
  </svg>
);

/* ── Arrow-right icon ─────────────────────────────────────────────────────── */

const ArrowRightIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={styles['btn-group__arrow']}
  >
    <path
      d="M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * ButtonGroup — horizontal row of icon-only or label-type buttons.
 *
 * ## Button Types
 * - `icon`  (default) — square icon-only buttons (PersonIcon)
 * - `label` — rectangular buttons with leading icon, text label, and trailing arrow
 *
 * ## Layouts
 * - `joined`   — connected (no gap, shared borders). Default count: 4 (icon), 2 (label)
 * - `separate` — spaced individually (6px gap). Default count: 2
 *   In `separate` mode with `icon` type, the second button is always `ghost` for contrast.
 *
 * ## Variants
 * - `primary`   — Blue filled
 * - `secondary` — Sky-blue tint
 * - `tertiary`  — Yellow tint
 * - `ghost`     — White background, gray outline
 *
 * ## Special (label-type only)
 * - `default` — solid filled (matches the selected `variant` colour)
 * - `alt`     — tinted outline (light blue bg, blue border, blue-gray text)
 *
 * ## Sizes
 * - `xs` — 28×28px (icon) / compact label
 * - `sm` — 30×30px (icon) / small label
 * - `md` — 42×42px (icon) / default label (44px height)
 * - `lg` — 52×52px (icon) / large label
 *
 * Storybook: Atoms/Buttons/Button Group
 */
export const ButtonGroup: React.FC<{
  variant?: ButtonGroupVariant;
  size?: ButtonGroupSize;
  layout?: ButtonGroupLayout;
  /**
   * Visual button type:
   * - `icon`  (default) — square icon-only
   * - `label` — icon + text label + trailing arrow
   */
  buttonType?: 'icon' | 'label';
  /**
   * Visual style modifier for `label` button type:
   * - `default` — solid filled
   * - `alt`     — tinted/outlined (light blue bg, blue border)
   */
  special?: ButtonGroupSpecial;
  /** Total number of buttons to render (overrides default per layout) */
  count?: number;
  /** Per-button configuration array. Length overrides `count` when provided. */
  buttons?: ButtonGroupItemConfig[];
  /** Disable all buttons in the group */
  disabled?: boolean;
  /** Show loading spinner on all buttons */
  loading?: boolean;
  className?: string;
}> = ({
  variant = 'primary',
  size = 'md',
  layout = 'joined',
  buttonType = 'icon',
  special = 'default',
  count,
  buttons,
  disabled = false,
  loading = false,
  className = '',
}) => {
  const isLabel = buttonType === 'label';
  const defaultCount = isLabel ? 2 : (layout === 'joined' ? 4 : 2);
  const buttonCount = buttons?.length ?? count ?? defaultCount;
  const buttonConfigs: ButtonGroupItemConfig[] = buttons ?? Array.from({ length: buttonCount }, (_, i) => ({ label: 'Label', ariaLabel: `Action ${i + 1}` }));

  /* ── Icon size map ── */
  const iconSizeMap: Record<ButtonGroupSize, number> = {
    xs: 14,
    sm: 16,
    md: 16,
    lg: 20,
  };
  const iconSize = iconSizeMap[size];

  const containerClasses = [
    styles['btn-group'],
    styles[`btn-group--${variant}`],
    styles[`btn-group--${size}`],
    styles[`btn-group--${layout}`],
    isLabel ? styles['btn-group--label'] : styles['btn-group--icon'],
    isLabel && special === 'alt' ? styles['btn-group--alt'] : '',
    disabled ? styles['btn-group--disabled'] : '',
    loading ? styles['btn-group--loading'] : '',
    className,
  ].filter(Boolean).join(' ');

  /** Returns the position class for border-radius merging in joined layout */
  const positionClass = (index: number, total: number): string => {
    if (layout !== 'joined') return '';
    if (total === 1) return styles['btn-group__btn--solo'];
    if (index === 0) return styles['btn-group__btn--left'];
    if (index === total - 1) return styles['btn-group__btn--right'];
    return styles['btn-group__btn--middle'];
  };

  /** In separate icon layout the second button is always ghost for visual contrast */
  const buttonVariant = (index: number): ButtonGroupVariant =>
    !isLabel && layout === 'separate' && index === 1 ? 'ghost' : variant;

  return (
    <div className={containerClasses} role="group" aria-label="Button group">
      {buttonConfigs.map((cfg, i) => {
        const isDisabled = disabled || (cfg.disabled ?? false);
        const isLoading = loading || (cfg.loading ?? false);
        const v = buttonVariant(i);
        const displayLabel = cfg.label ?? cfg.ariaLabel ?? 'Label';

        const btnClasses = [
          styles['btn-group__btn'],
          styles[`btn-group__btn--${v}`],
          positionClass(i, buttonConfigs.length),
          isDisabled ? styles['btn-group__btn--disabled'] : '',
        ].filter(Boolean).join(' ');

        if (isLabel) {
          /* ── Label button ── */
          return (
            <button
              key={i}
              type="button"
              className={btnClasses}
              onClick={!isDisabled && !isLoading ? cfg.onClick : undefined}
              disabled={isDisabled}
              aria-label={cfg.ariaLabel ?? displayLabel}
              aria-busy={isLoading}
            >
              <span className={styles['btn-group__label-inner']}>
                {isLoading ? (
                  <LoadingSpinner size={iconSize} />
                ) : (
                  <PersonIcon
                    className={styles['btn-group__icon']}
                    aria-hidden="true"
                  />
                )}
                <span className={styles['btn-group__label-text']}>{displayLabel}</span>
                <ArrowRightIcon size={iconSize} />
              </span>
            </button>
          );
        }

        /* ── Icon-only button ── */
        return (
          <button
            key={i}
            type="button"
            className={btnClasses}
            onClick={!isDisabled && !isLoading ? cfg.onClick : undefined}
            disabled={isDisabled}
            aria-label={cfg.ariaLabel ?? `Action ${i + 1}`}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <LoadingSpinner size={iconSize} />
            ) : (
              <PersonIcon className={styles['btn-group__icon']} aria-hidden="true" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
