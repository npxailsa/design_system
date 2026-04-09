import React from 'react';
import styles from './Breadcrumbs.module.css';

export type BreadcrumbsSize = 'sm' | 'default' | 'lg';

export interface BreadcrumbItem {
  /** Visible label for this crumb */
  label: string;
  /** Optional href — renders an anchor when provided */
  href?: string;
  /** Optional click handler (e.g. for SPA routing without href) */
  onClick?: (e: React.MouseEvent) => void;
}

export interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items. The last item is always the current page. */
  items: BreadcrumbItem[];
  /** Size scale — affects font size, separator size and gap. */
  size?: BreadcrumbsSize;
  /** Accessible label for the <nav> landmark. */
  ariaLabel?: string;
  /** Extra CSS class on the root element. */
  className?: string;
}

/** Chevron-right icon used as the separator between breadcrumb items. */
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

/**
 * Breadcrumbs — Foundation / BuildingBlocks / Breadcrumbs
 *
 * Renders an accessible, token-driven breadcrumb trail. The last item in
 * `items` is treated as the current page and is rendered as bold text
 * (non-interactive). All preceding items are rendered as links.
 *
 * Three size variants are available: `sm`, `default`, and `lg`.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  size = 'default',
  ariaLabel = 'Breadcrumb',
  className = '',
}) => {
  const rootClass = [styles.root, styles[`root--${size}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <nav aria-label={ariaLabel} className={rootClass}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              {/* Separator — shown before every item except the first */}
              {index > 0 && (
                <ChevronRight className={styles.separator} />
              )}

              {/* Current page — plain bold text */}
              {isLast ? (
                <span
                  className={styles.current}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                /* Link crumb — anchor */
                <a
                  href={item.href}
                  className={styles.link}
                  onClick={item.onClick}
                >
                  {item.label}
                </a>
              ) : (
                /* Link crumb — button (for SPA navigation without href) */
                <button
                  type="button"
                  className={[styles.link, styles.linkButton].join(' ')}
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
  );
};

export default Breadcrumbs;
