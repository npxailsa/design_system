import React from 'react';
import styles from './StatusIndicator.module.css';

export type StatusIndicatorStatus =
  | 'away'
  | 'do-not-disturb'
  | 'verified'
  | 'offline'
  | 'online';

export type StatusIndicatorSize = 'default' | 'large' | 'small';

export interface StatusIndicatorProps {
  /** Presence status of the user */
  status?: StatusIndicatorStatus;
  /** Dot size — default (14px), large (10px), small (8px) */
  size?: StatusIndicatorSize;
  /** Additional CSS class */
  className?: string;
  /** Accessible label override */
  ariaLabel?: string;
}

const STATUS_LABELS: Record<StatusIndicatorStatus, string> = {
  away: 'Away',
  'do-not-disturb': 'Do not disturb',
  verified: 'Verified',
  offline: 'Offline',
  online: 'Online',
};

/**
 * StatusIndicator — A small presence dot badge used to communicate a user's
 * availability or verification state. Five statuses × three sizes.
 *
 * Location: Foundation > Building Blocks > Status Indicator
 */
export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = 'away',
  size = 'default',
  className = '',
  ariaLabel,
}) => {
  const label = ariaLabel ?? STATUS_LABELS[status];

  const rootClass = [
    styles.statusIndicator,
    styles[`status-${status}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rootClass}
      role="img"
      aria-label={label}
      title={label}
    >
      {status === 'away' && <div className={styles.dot} />}
      {status === 'do-not-disturb' && <div className={styles.dot} />}
      {status === 'online' && <div className={styles.dot} />}
      {status === 'offline' && <div className={styles.dot} />}
      {status === 'verified' && (
        <svg
          className={styles.verifiedSvg}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="8" className={styles.verifiedCircle} />
          <path
            d="M4.5 8.5L6.8 10.8L11.5 5.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default StatusIndicator;
