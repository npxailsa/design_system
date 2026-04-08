import React from 'react';
import styles from './Divider.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type DividerLine      = 'solid' | 'dashed' | 'dotted';
export type DividerThickness = '0-5px' | '1px' | '2px' | '3px' | '4px' | '8px';
export type DividerAlignment = 'horizontal' | 'vertical';

export interface DividerProps {
  /**
   * Line style for the divider.
   * @default 'solid'
   */
  line?: DividerLine;

  /**
   * Border thickness of the divider.
   * Maps directly to the stroke scale: 0.5px / 1px / 2px / 3px / 4px / 8px.
   * @default '1px'
   */
  thickness?: DividerThickness;

  /**
   * Orientation of the divider.
   * - `horizontal` — spans the full width of its container (default)
   * - `vertical`   — spans the full height of its container
   * @default 'horizontal'
   */
  alignment?: DividerAlignment;

  /**
   * Optional extra class for layout overrides (margins, width caps, etc.).
   */
  className?: string;

  /**
   * Accessible label — screen readers announce the presence of the separator.
   * @default 'Divider'
   */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const Divider: React.FC<DividerProps> = ({
  line      = 'solid',
  thickness = '1px',
  alignment = 'horizontal',
  className = '',
  ariaLabel = 'Divider',
}) => {
  const cls = [
    styles.divider,
    styles[`divider--${alignment}`],
    styles[`divider--${line}`],
    styles[`divider--${thickness}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      role="separator"
      aria-label={ariaLabel}
      aria-orientation={alignment}
      className={cls}
    />
  );
};

export default Divider;
