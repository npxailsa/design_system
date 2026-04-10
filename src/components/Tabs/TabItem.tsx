import React, { useState } from 'react';
import styles from './TabItem.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TabItemSize = 'small' | 'default' | 'large';

/**
 * Represents the interactive state of the tab item.
 * - `default` — unselected / inactive
 * - `active`  — selected / active (filled blue background)
 */
export type TabItemVariant = 'default' | 'active';

export interface TabItemProps {
  /** Display label for the tab */
  label: string;
  /** Visual size scale */
  size?: TabItemSize;
  /** Whether this tab is currently active/selected */
  active?: boolean;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Whether the tab is in a loading state */
  loading?: boolean;
  /** Show the leading icon (person/account) */
  showLeadingIcon?: boolean;
  /** Show the trailing icon (arrow-right or chevron-down) */
  showTrailingIcon?: boolean;
  /** Show a numeric badge */
  showBadge?: boolean;
  /** Badge count number */
  count?: number;
  /** Use chevron-down instead of arrow-right for trailing icon */
  dropdown?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Extra CSS class */
  className?: string;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const AccountIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z"
      fill="currentColor"
    />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LoadingSpinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`${className ?? ''} ${styles['tab-item-spinner']}`}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx="8"
      cy="8"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="28 10"
    />
  </svg>
);

// ─── TabItem Component ────────────────────────────────────────────────────────

/**
 * TabItem — A single pill-style tab button atom.
 *
 * Used as the atom building block for tab navigation. Can appear in
 * an active (filled blue) or inactive (outlined) state. Supports
 * optional leading icon, trailing icon, and badge count.
 *
 * Location: Atoms / Tabs
 */
export const TabItem: React.FC<TabItemProps> = ({
  label,
  size = 'default',
  active = false,
  disabled = false,
  loading = false,
  showLeadingIcon = true,
  showTrailingIcon = true,
  showBadge = true,
  count,
  dropdown = false,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const rootClasses = [
    styles['tab-item'],
    styles[`size-${size}`],
    active ? styles['variant-active'] : styles['variant-inactive'],
    disabled ? styles['state-disabled'] : '',
    loading ? styles['state-loading'] : '',
    isHovered && !disabled && !loading && !active ? styles['state-hover'] : '',
  ]
    .filter(Boolean)
    .join(' ')
    + (className ? ` ${className}` : '');

  const TrailingIcon = dropdown ? ChevronDownIcon : ArrowRightIcon;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-disabled={disabled}
      disabled={disabled}
      className={rootClasses}
      onClick={() => !disabled && !loading && onClick?.()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles['tab-item-label-row']}>
        {loading ? (
          <LoadingSpinner className={styles['tab-item-icon']} />
        ) : (
          showLeadingIcon && <AccountIcon className={styles['tab-item-icon']} />
        )}
        <span className={styles['tab-item-text']}>{label}</span>
        {!loading && showTrailingIcon && (
          <TrailingIcon className={styles['tab-item-icon']} />
        )}
      </div>
      {showBadge && count !== undefined && (
        <span className={styles['tab-item-badge']}>{count}</span>
      )}
    </button>
  );
};

export default TabItem;
