import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import styles from './FilterSortButton.module.css';

export type FilterSortVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type FilterSortSize = 'xs' | 'sm' | 'md' | 'lg';

export interface FilterSortButtonProps {
  /** Visual style — primary (navy), secondary (sky-blue), tertiary (seafoam), ghost (outline) */
  variant?: FilterSortVariant;
  /** Button size — xs, sm, md, lg */
  size?: FilterSortSize;
  /** Button label text */
  label?: string;
  /** Disable the button */
  disabled?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Extra CSS class */
  className?: string;
  /** aria-label override */
  ariaLabel?: string;
}

/**
 * FilterSortButton — A compact action button designed for table and list toolbars.
 *
 * Comes in four visual variants and four sizes, always with a leading Person icon.
 *
 * **Variants**
 * - `primary`   — Navy filled (`--global-color-secondary-navy`)
 * - `secondary` — Sky-blue tint fill (`--global-color-primary-sky-blue-100`)
 * - `tertiary`  — Yellow tint fill (`--global-color-primary-yellow-200`)
 * - `ghost`     — Outline only, white background
 *
 * **Sizes**
 * - `xs` — Extra-small: 2px v-pad, 12px/8px h-pad, 12px label
 * - `sm` — Small: 4px v-pad, 16px/12px h-pad, 14px label
 * - `md` — Default: 6px v-pad, 16px/12px h-pad, 16px label
 * - `lg` — Large: 8px v-pad, 20px/16px h-pad, 18px label
 *
 * All values are driven by `--btn-filter-*` design tokens.
 */
export const FilterSortButton: React.FC<FilterSortButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label = 'Filter',
  disabled = false,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const classNames = [
    styles['fsb'],
    styles[`fsb--${variant}`],
    styles[`fsb--${size}`],
    disabled ? styles['fsb--disabled'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classNames}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
    >
      <span className={styles['fsb__icon']} aria-hidden="true">
        <PersonIcon className={styles['fsb__icon-svg']} />
      </span>
      <span className={styles['fsb__label']}>{label}</span>
    </button>
  );
};

export default FilterSortButton;
