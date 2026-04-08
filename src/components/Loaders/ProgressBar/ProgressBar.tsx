import React from 'react';
import styles from './ProgressBar.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type ProgressBarSize = 'sm' | 'default' | 'lg';

export interface ProgressBarProps {
  /**
   * Current progress value as a percentage (0–100).
   */
  value: number;

  /**
   * Visual size of the progress bar — controls track height and indicator dot.
   * - `sm`      — thin (4px track)
   * - `default` — medium (8px track)
   * - `lg`      — thick (16px track)
   * @default 'default'
   */
  size?: ProgressBarSize;

  /**
   * Whether to display a percentage label to the right of the track.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Optional extra CSS class for layout overrides.
   */
  className?: string;

  /**
   * Accessible label for screen readers.
   * @default 'Progress'
   */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = 'default',
  showLabel = true,
  className = '',
  ariaLabel = 'Progress',
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  const isZero  = clamped === 0;

  const rootCls = [
    styles.root,
    styles[`root--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootCls}>
      {/* Track */}
      <div
        className={styles.track}
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {isZero ? (
          /* At 0 % show a dot indicator at the leading edge */
          <span className={styles.dot} />
        ) : (
          /* Otherwise render the filled bar */
          <div
            className={styles.fill}
            style={{ width: `${clamped}%` }}
          />
        )}
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

export default ProgressBar;
