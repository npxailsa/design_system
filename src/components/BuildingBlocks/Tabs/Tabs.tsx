import React, { useState } from 'react';
import styles from './Tabs.module.css';

// ─── Types ───────────────────────────────────────────────────────────────────

export type TabsSize = 'small' | 'default' | 'large';
export type TabsVariant = 'underline' | 'pill';
export type TabsAppearance = 'default' | 'alt' | 'dark';

export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Text label displayed on the tab */
  label: string;
  /** Optional badge count number (shown in a circular badge) */
  count?: number;
  /** Whether the tab item is disabled */
  disabled?: boolean;
  /** Whether this tab has a dropdown indicator instead of an arrow */
  dropdown?: boolean;
  /** Custom leading icon component */
  leadingIcon?: React.ElementType;
}

export interface TabsProps {
  /** Array of tab items to render */
  tabs: TabItem[];
  /** Currently active tab id */
  activeTab?: string;
  /** Callback when a tab is clicked */
  onTabChange?: (id: string) => void;
  /** Visual size of the tabs */
  size?: TabsSize;
  /** Underline style vs pill/bordered style */
  variant?: TabsVariant;
  /** Color appearance: default (outlined/underline), alt (blue tinted pill), dark (navy filled) */
  appearance?: TabsAppearance;
  /** Whether to show a leading icon on each tab */
  showLeadingIcon?: boolean;
  /** Whether to show a trailing icon (arrow) on each tab */
  showTrailingIcon?: boolean;
  /** Extra CSS class on the root element */
  className?: string;
}

// ─── Icons ───────────────────────────────────────────────────────────────────

const AccountIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="16"
    height="16"
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

// ─── Sub-component: Tab button ────────────────────────────────────────────────

interface TabButtonProps {
  item: TabItem;
  isActive: boolean;
  size: TabsSize;
  variant: TabsVariant;
  appearance: TabsAppearance;
  showLeadingIcon: boolean;
  showTrailingIcon: boolean;
  onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  item,
  isActive,
  size,
  variant,
  appearance,
  showLeadingIcon,
  showTrailingIcon,
  onClick,
}) => {
  const LeadingIconComponent = item.leadingIcon ?? AccountIcon;

  const rootClasses = [
    styles.tab,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`appearance-${appearance}`],
    isActive ? styles.active : '',
    item.disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-disabled={item.disabled}
      disabled={item.disabled}
      className={rootClasses}
      onClick={() => !item.disabled && onClick(item.id)}
    >
      {showLeadingIcon && (
        <span className={styles['tab-icon']}>
          <LeadingIconComponent />
        </span>
      )}

      <span className={styles['tab-label']}>{item.label}</span>

      {showTrailingIcon && (
        <span className={styles['tab-trailing-icon']}>
          {item.dropdown ? <ChevronDownIcon /> : <ArrowRightIcon />}
        </span>
      )}

      {item.count !== undefined && (
        <span className={styles['tab-badge']}>{item.count}</span>
      )}
    </button>
  );
};

// ─── Main Tabs component ──────────────────────────────────────────────────────

/**
 * Tabs — A flexible tab navigation component supporting underline and pill
 * variants, three sizes, and multiple appearance modes (default, alt, dark).
 *
 * Location: Foundation/BuildingBlocks/Tabs
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  size = 'default',
  variant = 'underline',
  appearance = 'default',
  showLeadingIcon = true,
  showTrailingIcon = true,
  className = '',
}) => {
  const [internalActive, setInternalActive] = useState<string>(
    activeTab ?? tabs[0]?.id ?? ''
  );

  const currentActive = activeTab ?? internalActive;

  const handleTabChange = (id: string) => {
    setInternalActive(id);
    onTabChange?.(id);
  };

  const listClasses = [
    styles.tabs,
    styles[`tabs-variant-${variant}`],
    styles[`tabs-appearance-${appearance}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div role="tablist" aria-orientation="horizontal" className={listClasses}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          item={tab}
          isActive={currentActive === tab.id}
          size={size}
          variant={variant}
          appearance={appearance}
          showLeadingIcon={showLeadingIcon}
          showTrailingIcon={showTrailingIcon}
          onClick={handleTabChange}
        />
      ))}
    </div>
  );
};

export default Tabs;
