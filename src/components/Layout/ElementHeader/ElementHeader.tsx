import React from 'react';
import { GhostButton } from '../../GhostButton/GhostButton';
import type { GhostButtonSize } from '../../GhostButton/GhostButton';
import styles from './ElementHeader.module.css';

export type ElementHeaderSize = 'sm' | 'default' | 'lg';

export interface ElementHeaderBreadcrumbItem {
  /** Visible label for this crumb */
  label: string;
  /** Optional href — renders as a link when provided */
  href?: string;
  /** Optional click handler for SPA-style navigation */
  onClick?: (e: React.MouseEvent) => void;
}

export interface ElementHeaderProps {
  /** Page / element title shown below the back button */
  title: string;
  /** Breadcrumb trail items — last item is the current page (non-interactive) */
  breadcrumbs?: ElementHeaderBreadcrumbItem[];
  /** Label shown on the Back button */
  backLabel?: string;
  /** Show the Back button */
  showBack?: boolean;
  /** Click handler for the Back button */
  onBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Size scale — affects typography and spacing */
  size?: ElementHeaderSize;
  /** Extra CSS class on the root element */
  className?: string;
  /** aria-label for the breadcrumb nav */
  breadcrumbAriaLabel?: string;
}

/** Maps ElementHeader size to GhostButton size */
const toGhostSize: Record<ElementHeaderSize, GhostButtonSize> = {
  sm: 'small',
  default: 'default',
  lg: 'large',
};

/** Chevron-right separator used in the breadcrumb trail */
const ChevronRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 3.5L10.5 8L6 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Arrow-left icon — leading icon for the Back button */
const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13.334 7.3333V8.66664H5.334L9.00065 12.3333L8.054 13.28L2.774 7.99997L8.054 2.71997L9.00065 3.66664L5.334 7.3333H13.334Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * ElementHeader — Atoms / Layout / ElementHeader
 *
 * A structured page-header layout block that combines a breadcrumb trail,
 * a contextual Back button (using GhostButton link variant), and a prominent
 * element/page title.
 *
 * Three size variants are available: `sm`, `default`, and `lg`.
 */
export const ElementHeader: React.FC<ElementHeaderProps> = ({
  title,
  breadcrumbs = [],
  backLabel = 'Back',
  showBack = true,
  onBack,
  size = 'default',
  className = '',
  breadcrumbAriaLabel = 'Breadcrumb',
}) => {
  const rootClass = [styles.root, styles[`root--${size}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={rootClass}>
      {/* Breadcrumb trail */}
      {breadcrumbs.length > 0 && (
        <nav
          className={styles.breadcrumbs}
          aria-label={breadcrumbAriaLabel}
        >
          <ol className={styles.breadcrumbList}>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={index} className={styles.breadcrumbItem}>
                  {index > 0 && (
                    <ChevronRight className={styles.breadcrumbSeparator} />
                  )}
                  {isLast ? (
                    <span
                      className={styles.breadcrumbCurrent}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className={styles.breadcrumbLink}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={[
                        styles.breadcrumbLink,
                        styles.breadcrumbLinkButton,
                      ].join(' ')}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      {/* Back button — GhostButton link variant */}
      {showBack && (
        <GhostButton
          variant="link"
          label={backLabel}
          size={toGhostSize[size]}
          leadingIcon={ArrowLeftIcon}
          showLeadingIcon
          onClick={onBack}
        />
      )}

      {/* Page / element title */}
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default ElementHeader;
