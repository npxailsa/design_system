import React from 'react';
import styles from './Milestones.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type MilestonesSize = 'sm' | 'default' | 'lg';

export interface MilestonesProps {
  /**
   * Current progress value as a percentage (0–100).
   * Each 10% fills one additional dot (out of 10 total).
   */
  value: number;

  /**
   * Visual size of the dots.
   * - `sm`      — 8px dots with 4px gap
   * - `default` — 12px dots with 6px gap
   * - `lg`      — 20px dots with 8px gap
   * @default 'default'
   */
  size?: MilestonesSize;

  /**
   * Whether to display a percentage label to the right of the dots.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Total number of milestone dots.
   * @default 10
   */
  steps?: number;

  /**
   * Optional extra CSS class for layout overrides.
   */
  className?: string;

  /**
   * Accessible label for screen readers.
   * @default 'Milestone progress'
   */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const Milestones: React.FC<MilestonesProps> = ({
  value,
  size = 'default',
  showLabel = true,
  steps = 10,
  className = '',
  ariaLabel = 'Milestone progress',
}) => {
  const clamped    = Math.min(100, Math.max(0, value));
  const filledCount = Math.round((clamped / 100) * steps);

  const rootCls = [
    styles.root,
    styles[`root--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rootCls}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Dots track */}
      <div className={styles.track}>
        {Array.from({ length: steps }, (_, i) => {
          const isFilled = i < filledCount;
          const dotCls   = [
            styles.dot,
            isFilled ? styles['dot--active'] : styles['dot--inactive'],
          ].join(' ');
          return <span key={i} className={dotCls} aria-hidden="true" />;
        })}
      </div>

      {/* Optional percentage label */}
      {showLabel && (
        <span className={styles.label}>
          {clamped}%
        </span>
      )}
    </div>
  );
};

export default Milestones;
