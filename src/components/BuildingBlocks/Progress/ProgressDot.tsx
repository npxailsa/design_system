import React from 'react';
import styles from './ProgressDot.module.css';

export type ProgressDotState = 'inactive' | 'active' | 'error' | 'pending';
export type ProgressDotSize  = 'sm' | 'default' | 'lg';

export interface ProgressDotProps {
  /** Visual state of the dot */
  state?: ProgressDotState;
  /** Size of the dot */
  size?: ProgressDotSize;
  /** Optional class for layout overrides */
  className?: string;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

export const ProgressDot: React.FC<ProgressDotProps> = ({
  state     = 'inactive',
  size      = 'default',
  className = '',
  ariaLabel,
}) => {
  const cls = [
    styles.dot,
    styles[`dot--${size}`],
    styles[`dot--${state}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const label = ariaLabel ?? `Progress step — ${state}`;

  return (
    <span
      role="img"
      aria-label={label}
      className={cls}
    />
  );
};

export default ProgressDot;
