import React, { useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styles from './Accordion.module.css';
import { StatusIcon } from '../BuildingBlocks/StatusIcon/StatusIcon';

export type AccordionSize = 'small' | 'default' | 'large';
export type AccordionType = 'simple' | 'no-stroke';
export type AccordionOpenIcon = 'chevron' | 'plus';

export interface AccordionProps {
  /** Visual type — "simple" has border, "no-stroke" is borderless */
  type?: AccordionType;
  /** Size variant — controls padding and font sizes */
  size?: AccordionSize;
  /** Icon style for the expand/collapse toggle */
  openIcon?: AccordionOpenIcon;
  /** Accordion heading / question text */
  title?: string;
  /** Supporting subtitle below the title (simple type only) */
  description?: string;
  /** Body text shown when expanded */
  body?: string;
  /** Show the optional leading bell icon */
  showLeadingIcon?: boolean;
  /** Show the optional status icon (building blocks) */
  showStatusIcon?: boolean;
  /** Show the description/supporting text */
  showDescription?: boolean;
  /** Control open state externally (uncontrolled by default) */
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

/* ── Bell ring icon ── */
const BellRingIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles['accordion__leading-icon']}>
    <g opacity="0.5">
      <path d="M11 19.25C11.9625 19.25 12.75 18.4625 12.75 17.5H9.25C9.25 18.4625 10.0375 19.25 11 19.25ZM16.5 13.75V9.16667C16.5 6.49583 15.0633 4.25583 12.5625 3.65167V3.04750C12.5625 2.32167 11.9817 1.75 11.2667 1.75H10.7333C10.0183 1.75 9.4375 2.32167 9.4375 3.04750V3.65167C6.92750 4.25583 5.5 6.48667 5.5 9.16667V13.75L3.75 15.5V16.375H18.25V15.5L16.5 13.75Z" fill="#1C1C1C" />
    </g>
  </svg>
);

const ICON_SIZES: Record<AccordionSize, number> = {
  small: 24,
  default: 28,
  large: 32,
};

/**
 * Accordion component — collapsible content panel with multiple variants.
 * Supports simple (bordered) and no-stroke (borderless) types, three sizes,
 * chevron or plus/minus toggle icons, and optional leading/status icons.
 */
export const Accordion: React.FC<AccordionProps> = ({
  type = 'simple',
  size = 'default',
  openIcon = 'chevron',
  title = 'This is a section title taking up a lot of space...',
  description = 'This is supporting text to help describe the content within the accordion',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  showLeadingIcon = true,
  showStatusIcon = true,
  showDescription = true,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const iconSize = ICON_SIZES[size];

  const rootClasses = [
    styles.accordion,
    styles[`accordion--${type}`],
    styles[`accordion--${size}`],
    isOpen ? styles['accordion--open'] : '',
    className,
  ].filter(Boolean).join(' ');

  const ToggleIcon = openIcon === 'plus'
    ? (isOpen ? MinusIcon : PlusIcon)
    : (isOpen ? ChevronUp : ChevronDown);

  const noStrokeTitle = type === 'no-stroke'
    ? 'This is a section title or a long question taking up a lot of space...'
    : title;

  return (
    <div className={rootClasses}>
      {/* Status icon — only for simple type */}
      {type === 'simple' && showStatusIcon && (
        <StatusIcon
          type="complete"
          size="small"
          step="future"
          label={false}
          className={styles['accordion__status-icon']}
        />
      )}

      {/* Optional leading bell icon */}
      {showLeadingIcon && <BellRingIcon />}

      {/* Main content */}
      <div className={styles['accordion__body']}>
        {/* Heading row */}
        <ButtonBase
          component="button"
          type="button"
          className={styles['accordion__trigger']}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <div className={styles['accordion__title-group']}>
            {type === 'simple' ? (
              <>
                <span className={styles['accordion__title']}>{title}</span>
                {showDescription && !isOpen && (
                  <span className={styles['accordion__desc']}>{description}</span>
                )}
                {isOpen && (
                  <span className={styles['accordion__desc']}>{description}</span>
                )}
              </>
            ) : (
              <span className={styles['accordion__title--no-stroke']}>{noStrokeTitle}</span>
            )}
          </div>

          <span className={styles['accordion__icon']}>
            <ToggleIcon size={iconSize} />
          </span>
        </ButtonBase>

        {/* Expandable panel */}
        {isOpen && (
          <div className={styles['accordion__panel']}>
            <p className={styles['accordion__body-text']}>{body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
