import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { StatusIndicator } from '../BuildingBlocks/StatusIndicator/StatusIndicator';
import styles from './Avatar.module.css';

export type AvatarSize = 'x-small' | 'small' | 'default' | 'large';
export type AvatarType = 'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark';
export type AvatarShape = 'square' | 'circle';

/** Size of the status indicator dot scales with the avatar */
const BADGE_SIZE: Record<AvatarSize, 'small' | 'large' | 'default'> = {
  'x-small': 'small',
  'small': 'large',
  'default': 'default',
  'large': 'default',
};

export interface AvatarProps {
  /** Avatar display mode */
  type?: AvatarType;
  /** Overall size */
  size?: AvatarSize;
  /** Square (rounded) or circle */
  shape?: AvatarShape;
  /** Show white border + drop-shadow */
  border?: boolean;
  /** Show the status / notification indicator dot */
  statusIcon?: boolean;
  /**
   * Initials shown for initial-light / initial-dark types.
   * Typically 1–2 characters. Defaults to "A".
   */
  initials?: string;
  /** Image src — used when type="profile-photo" */
  src?: string;
  /** Alt text for profile photo */
  alt?: string;
  /** Extra CSS class */
  className?: string;
}

/**
 * Avatar — Displays a user identity in one of four modes:
 * empty-state (person icon), profile-photo (image), initial-light, initial-dark.
 * Supports four sizes, two shapes, an optional white border, and a presence badge.
 *
 * Location: Atoms/Avatar
 */
export const Avatar: React.FC<AvatarProps> = ({
  type = 'empty-state',
  size = 'default',
  shape = 'square',
  border = false,
  statusIcon = false,
  initials = 'A',
  src,
  alt = 'User avatar',
  className = '',
}) => {
  const rootClass = [
    styles.avatar,
    styles[`size-${size}`],
    styles[`type-${type}`],
    styles[`shape-${shape}`],
    border ? styles['border-true'] : styles['border-false'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showImage = type === 'profile-photo' || type === 'empty-state';
  const showInitials = type === 'initial-light' || type === 'initial-dark';

  return (
    <div className={rootClass} aria-label={alt} role="img">
      {/* Photo / empty-state slot */}
      {showImage && (
        <div className={styles.imageWrap}>
          {type === 'profile-photo' && src ? (
            <img className={styles.photo} src={src} alt={alt} />
          ) : (
            <PersonIcon className={styles.personIcon} aria-hidden="true" />
          )}
        </div>
      )}

      {/* Initials slot */}
      {showInitials && (
        <span className={styles.initials} aria-hidden="true">
          {initials}
        </span>
      )}

      {/* Status badge */}
      {statusIcon && (
        <StatusIndicator
          status="do-not-disturb"
          size={BADGE_SIZE[size]}
          className={styles.badge}
          ariaLabel="Do not disturb"
        />
      )}
    </div>
  );
};

export default Avatar;
