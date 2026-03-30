import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import styles from './ButtonGroup.module.css';

export type ButtonGroupVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonGroupLayout = 'joined' | 'separate';

/**
 * Configuration for an individual button within the group.
 */
export interface ButtonGroupItemConfig {
  /** Accessible label for the button */
  ariaLabel?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Override to disable just this button */
  disabled?: boolean;
}

/**
 * ButtonGroup — horizontal row of icon-only square buttons.
 *
 * **Layouts**
 * - `joined`   — Buttons are connected (no gap, shared borders). Default count: 4.
 * - `separate` — Buttons are spaced individually (6px gap). Default count: 2.
 *   In `separate` mode the first button uses the selected `variant`; the second is always `ghost`.
 *
 * **Variants**
 * - `primary`   — Blue filled (`--brand-primary`)
 * - `secondary` — Sky-blue tint (`--global-color-primary-sky-blue-100`)
 * - `tertiary`  — Yellow tint (`--global-color-primary-yellow-200`)
 * - `ghost`     — White background, gray outline
 *
 * **Sizes**
 * - `xs` — 28×28px, 14px icon
 * - `sm` — 30×30px, 16px icon
 * - `md` — 42×42px, 18px icon (default)
 * - `lg` — 52×52px, 20px icon
 */
export const ButtonGroup: React.FC<{
  variant?: ButtonGroupVariant;
  size?: ButtonGroupSize;
  layout?: ButtonGroupLayout;
  /** Total number of buttons to render (overrides default per layout) */
  count?: number;
  /** Per-button configuration array. Length overrides `count` when provided. */
  buttons?: ButtonGroupItemConfig[];
  /** Disable all buttons in the group */
  disabled?: boolean;
  className?: string;
}> = ({
  variant = 'primary',
  size = 'md',
  layout = 'joined',
  count,
  buttons,
  disabled = false,
  className = '',
}) => {
  const defaultCount = layout === 'joined' ? 4 : 2;
  const buttonCount = buttons?.length ?? count ?? defaultCount;
  const buttonConfigs: ButtonGroupItemConfig[] = buttons ?? Array.from({ length: buttonCount }, () => ({}));

  const containerClasses = [
    styles['btn-group'],
    styles[`btn-group--${variant}`],
    styles[`btn-group--${size}`],
    styles[`btn-group--${layout}`],
    disabled ? styles['btn-group--disabled'] : '',
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

  /** In separate layout the second button is always ghost for visual contrast */
  const buttonVariant = (index: number): ButtonGroupVariant =>
    layout === 'separate' && index === 1 ? 'ghost' : variant;

  return (
    <div className={containerClasses} role="group" aria-label="Button group">
      {buttonConfigs.map((cfg, i) => {
        const isDisabled = disabled || (cfg.disabled ?? false);
        const v = buttonVariant(i);

        const btnClasses = [
          styles['btn-group__btn'],
          styles[`btn-group__btn--${v}`],
          positionClass(i, buttonConfigs.length),
          isDisabled ? styles['btn-group__btn--disabled'] : '',
        ].filter(Boolean).join(' ');

        return (
          <button
            key={i}
            type="button"
            className={btnClasses}
            onClick={!isDisabled ? cfg.onClick : undefined}
            disabled={isDisabled}
            aria-label={cfg.ariaLabel ?? `Action ${i + 1}`}
          >
            <PersonIcon className={styles['btn-group__icon']} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
