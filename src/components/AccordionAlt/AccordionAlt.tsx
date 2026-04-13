import React, { useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './AccordionAlt.module.css';

export type AccordionAltType = 'decorative' | 'numbered' | 'label';
export type AccordionAltSize = 'small' | 'default' | 'large';
export type AccordionAltOpenIcon = 'chevron' | 'plus';

export interface AccordionAltProps {
  /** Visual type — decorative, numbered, or label */
  type?: AccordionAltType;
  /** Size variant — controls padding and font sizes */
  size?: AccordionAltSize;
  /** Icon style for the expand/collapse toggle */
  openIcon?: AccordionAltOpenIcon;
  /** Accordion heading text */
  title?: string;
  /** Number prefix for numbered type (e.g. "01") */
  number?: string;
  /** Label badge text for label type */
  label?: string;
  /** Body text shown when expanded */
  body?: string;
  /** Show the bell icon badge (decorative type) */
  showIcon?: boolean;
  /** Show the number prefix (numbered type) */
  showNumber?: boolean;
  /** Control initial open state */
  defaultOpen?: boolean;
  /** Additional CSS class */
  className?: string;
}

/* ── Chevron down SVG ── */
const ChevronDown: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Chevron up SVG ── */
const ChevronUp: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Plus SVG ── */
const PlusIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Minus SVG ── */
const MinusIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Bell icon (decorative badge) ── */
const BellIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11 19.25C11.9625 19.25 12.75 18.4625 12.75 17.5H9.25C9.25 18.4625 10.0375 19.25 11 19.25ZM16.5 13.75V9.16667C16.5 6.49583 15.0633 4.25583 12.5625 3.65167V3.04750C12.5625 2.32167 11.9817 1.75 11.2667 1.75H10.7333C10.0183 1.75 9.4375 2.32167 9.4375 3.04750V3.65167C6.92750 4.25583 5.5 6.48667 5.5 9.16667V13.75L3.75 15.5V16.375H18.25V15.5L16.5 13.75Z" fill="currentColor" />
  </svg>
);

const TOGGLE_ICON_SIZES: Record<AccordionAltSize, number> = {
  small: 14,
  default: 16,
  large: 18,
};

/**
 * AccordionAlt — Alternate accordion styles for decorative, numbered, and label use cases.
 * Designed for marketing sections, step-by-step processes, and tagged data categories.
 */
export const AccordionAlt: React.FC<AccordionAltProps> = ({
  type = 'decorative',
  size = 'default',
  openIcon = 'chevron',
  title = 'This is a decorative accordion title',
  number = '01',
  label = 'Label',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui.',
  showIcon = true,
  showNumber = true,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const iconSize = TOGGLE_ICON_SIZES[size];

  const rootClasses = [
    styles['accordion-alt'],
    styles[`accordion-alt--${type}`],
    styles[`accordion-alt--${size}`],
    isOpen ? styles['accordion-alt--open'] : '',
    className,
  ].filter(Boolean).join(' ');

  const ToggleIcon = openIcon === 'plus'
    ? (isOpen ? MinusIcon : PlusIcon)
    : (isOpen ? ChevronUp : ChevronDown);

  return (
    <div className={rootClasses}>
      {/* Header row */}
      <ButtonBase
        component="button"
        type="button"
        className={styles['accordion-alt__trigger']}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {/* Left side: icon/number/label + title */}
        <div className={styles['accordion-alt__header-content']}>
          {/* Decorative: icon badge */}
          {type === 'decorative' && showIcon && (
            <span className={styles['accordion-alt__icon-badge']}>
              <BellIcon />
            </span>
          )}

          {/* Numbered: number prefix */}
          {type === 'numbered' && showNumber && (
            <span className={styles['accordion-alt__number']}>{number}</span>
          )}

          {/* Label: badge tag */}
          {type === 'label' && label && (
            <span className={styles['accordion-alt__label-badge']}>{label}</span>
          )}

          <span className={styles['accordion-alt__title']}>{title}</span>
        </div>

        {/* Toggle button */}
        <span className={styles['accordion-alt__toggle']}>
          <ToggleIcon size={iconSize} />
        </span>
      </ButtonBase>

      {/* Expandable panel */}
      {isOpen && (
        <div className={styles['accordion-alt__panel']}>
          <p className={styles['accordion-alt__body-text']}>{body}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionAlt;
