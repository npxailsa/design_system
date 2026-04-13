import React, { useState } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import styles from './Tabs.module.css';

// ─── Types ───────────────────────────────────────────────────────────────────

export type TabSize = 'small' | 'default' | 'large';

/**
 * Type controls the visual style of the tab:
 * - `default` — underline indicator, blue on active
 * - `secondary` — underline indicator, dark on active
 * - `contained` — bordered box (light theme)
 * - `dark-contained` — bordered box (dark/navy theme)
 */
export type TabType = 'default' | 'secondary' | 'contained' | 'dark-contained';

export interface TabItem {
  /** Unique identifier */
  id: string;
  /** Tab label text */
  label: string;
  /** Optional badge count displayed as a notification bubble */
  count?: number;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Show chevron-down icon instead of arrow-right */
  dropdown?: boolean;
}

export interface TabsProps {
  /** Array of tab items to render */
  items: TabItem[];
  /** ID of the currently active tab */
  activeId?: string;
  /** Callback when a tab is selected */
  onTabChange?: (id: string) => void;
  /** Visual variant style */
  type?: TabType;
  /** Size scale */
  size?: TabSize;
  /** Whether to show the badge/count on each tab */
  showBadge?: boolean;
  /** Whether to show the leading icon (person/account icon) */
  showLeadingIcon?: boolean;
  /** Whether to show the trailing icon (arrow or chevron) */
  showTrailingIcon?: boolean;
  /** Extra CSS class on the root element */
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

// ─── Individual Tab Item ──────────────────────────────────────────────────────

interface SingleTabProps {
  item: TabItem;
  isActive: boolean;
  type: TabType;
  size: TabSize;
  showBadge: boolean;
  showLeadingIcon: boolean;
  showTrailingIcon: boolean;
  onClick: (id: string) => void;
}

const SingleTab: React.FC<SingleTabProps> = ({
  item,
  isActive,
  type,
  size,
  showBadge,
  showLeadingIcon,
  showTrailingIcon,
  onClick,
}) => {
  const isContained = type === 'contained' || type === 'dark-contained';
  const isUnderline = !isContained;

  const rootClasses = [
    styles['bb-tab'],
    styles[`type-${type}`],
    styles[`size-${size}`],
    isActive ? styles['state-active'] : styles['state-default'],
    item.disabled ? styles['state-disabled'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MuiTab
      role="tab"
      aria-selected={isActive}
      disabled={item.disabled}
      className={rootClasses}
      onClick={() => !item.disabled && onClick(item.id)}
      value={item.id}
      disableRipple={false}
      /* Reset MUI Tab default styles — all visuals come from our CSS module */
      sx={{
        padding: 0,
        minWidth: 0,
        minHeight: 0,
        textTransform: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        color: 'inherit',
        opacity: 1,
        '&.Mui-selected': { color: 'inherit' },
        '&.Mui-disabled': { opacity: 1, color: 'inherit' },
      }}
      label={
        <>
          {/* ── Underline tab: tabLabel row ── */}
          {isUnderline && (
            <>
              <div className={styles['tab-label-row']}>
                <div className={styles['tab-label-inner']}>
                  {showLeadingIcon && (
                    <AccountIcon className={styles['tab-icon']} />
                  )}
                  <span className={styles['tab-text']}>{item.label}</span>
                  {showTrailingIcon && (
                    item.dropdown
                      ? <ChevronDownIcon className={styles['tab-trailing-icon']} />
                      : <ArrowRightIcon className={styles['tab-trailing-icon']} />
                  )}
                </div>
                {showBadge && item.count !== undefined && (
                  <span className={styles['tab-badge']}>{item.count}</span>
                )}
              </div>
              <div className={styles['tab-spacer']} />
              <div className={styles['tab-line']} />
            </>
          )}

          {/* ── Contained tab: single content row ── */}
          {isContained && (
            <div className={styles['tab-content-row']}>
              {showLeadingIcon && (
                <AccountIcon className={styles['tab-icon']} />
              )}
              <span className={styles['tab-text']}>{item.label}</span>
              {showTrailingIcon && (
                item.dropdown
                  ? <ChevronDownIcon className={styles['tab-trailing-icon']} />
                  : <ArrowRightIcon className={styles['tab-trailing-icon']} />
              )}
              {showBadge && item.count !== undefined && (
                <span className={styles['tab-badge']}>{item.count}</span>
              )}
            </div>
          )}
        </>
      }
    />
  );
};

// ─── Tabs Container ───────────────────────────────────────────────────────────

/**
 * Tabs — A tab navigation strip built from individual tab items.
 * Each item is a column of: label-row | spacer | underline indicator.
 * For contained types, the item is a bordered box.
 *
 * Location: Foundation/BuildingBlocks/Tabs
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onTabChange,
  type = 'default',
  size = 'default',
  showBadge = true,
  showLeadingIcon = true,
  showTrailingIcon = true,
  className = '',
}) => {
  const [internalActive, setInternalActive] = useState<string>(
    activeId ?? items[0]?.id ?? ''
  );

  const current = activeId ?? internalActive;

  const handleChange = (id: string) => {
    setInternalActive(id);
    onTabChange?.(id);
  };

  const stripClasses = [
    styles['tabs-strip'],
    styles[`strip-type-${type}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <MuiTabs
      value={current}
      aria-orientation="horizontal"
      className={stripClasses}
      TabIndicatorProps={{ style: { display: 'none' } }}
      sx={{
        minHeight: 0,
        '& .MuiTabs-flexContainer': { gap: 0 },
        '& .MuiTabs-scroller': { overflow: 'visible !important' },
      }}
    >
      {items.map((item) => (
        <SingleTab
          key={item.id}
          item={item}
          isActive={current === item.id}
          type={type}
          size={size}
          showBadge={showBadge}
          showLeadingIcon={showLeadingIcon}
          showTrailingIcon={showTrailingIcon}
          onClick={handleChange}
        />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
