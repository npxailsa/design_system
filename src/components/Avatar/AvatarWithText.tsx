import React from 'react';
import { Avatar } from './Avatar';
import type { AvatarSize, AvatarType, AvatarShape } from './Avatar';
import styles from './AvatarWithText.module.css';

export type AvatarWithTextVariant = 'w-subtext' | 'name-only' | 'default';

export interface AvatarWithTextProps {
  /**
   * Content variant:
   * - `w-subtext` — name + subtext line (e.g. role)
   * - `name-only` — name only
   * - `default`   — name + email address
   */
  variant?: AvatarWithTextVariant;
  /** Controls Avatar size and scales all text proportionally */
  size?: AvatarSize;
  /** Avatar shape: square (rounded corners) or circle */
  shape?: AvatarShape;
  /** Avatar display type */
  avatarType?: AvatarType;
  /** Show the status-indicator badge on the avatar */
  statusIcon?: boolean;
  /** Show the white border + shadow treatment on the avatar */
  border?: boolean;
  /** Primary name label */
  name?: string;
  /** Supporting text — shown when variant="w-subtext" */
  subtext?: string;
  /** Email — shown when variant="default" */
  email?: string;
  /** Initials — used when avatarType="initial-light" or "initial-dark" */
  initials?: string;
  /** Image src — used when avatarType="profile-photo" */
  src?: string;
  /** Alt text for the avatar photo */
  alt?: string;
  /** Extra CSS class on the root element */
  className?: string;
}

/**
 * AvatarWithText (horizontal) — combines an Avatar with a text column.
 *
 * Three variants:
 * - `w-subtext`  → avatar + name + supporting subtext (e.g. role)
 * - `name-only`  → avatar + name only
 * - `default`    → avatar + name + email (rendered in brand-primary blue)
 *
 * Four sizes mirror the Avatar sizes and scale all typography accordingly.
 *
 * Location: Atoms/AvatarWithText
 */
export const AvatarWithText: React.FC<AvatarWithTextProps> = ({
  variant = 'name-only',
  size = 'default',
  shape = 'circle',
  avatarType = 'profile-photo',
  statusIcon = false,
  border = false,
  name = 'Willow Quinn',
  subtext = 'Additional subtext (e.g role)',
  email = 'willowquin@email.com',
  initials = 'WQ',
  src,
  alt,
  className = '',
}) => {
  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <Avatar
        type={avatarType}
        size={size}
        shape={shape}
        border={border}
        statusIcon={statusIcon}
        initials={initials}
        src={src}
        alt={alt ?? name}
        className={styles.avatar}
      />

      <div className={styles.textCol}>
        <span className={styles.name}>{name}</span>

        {variant === 'w-subtext' && subtext && (
          <span className={styles.subtext}>{subtext}</span>
        )}

        {variant === 'default' && email && (
          <span className={styles.email}>{email}</span>
        )}
      </div>
    </div>
  );
};

export default AvatarWithText;
