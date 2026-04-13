import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import ButtonBase from '@mui/material/ButtonBase';
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
    <MuiBreadcrumbs
      aria-label={ariaLabel}
      className={rootClass}
      classes={{ ol: styles.list, li: styles.item, separator: styles.separator }}
      separator={<ChevronRight />}
      sx={{ '& .MuiBreadcrumbs-separator': { margin: 0 } }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        /* Current page — plain bold text */
        if (isLast) {
          return (
            <span key={index} className={styles.current} aria-current="page">
              {item.label}
            </span>
          );
        }

        /* Link crumb — anchor */
        if (item.href) {
          return (
            <a key={index} href={item.href} className={styles.link} onClick={item.onClick}>
              {item.label}
            </a>
          );
        }

        /* Link crumb — button (for SPA navigation without href) */
        return (
          <ButtonBase
            key={index}
            component="button"
            type="button"
            className={[styles.link, styles.linkButton].join(' ')}
            onClick={item.onClick}
          >
            {item.label}
          </ButtonBase>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
