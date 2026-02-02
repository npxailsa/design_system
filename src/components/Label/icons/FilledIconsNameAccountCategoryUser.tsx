import React from 'react';
import styles from './FilledIconsNameAccountCategoryUser.module.css';

export interface IconProps {
  name?: string;
  category?: string;
  className?: string;
}

export const FilledIconsNameAccountCategoryUser: React.FC<IconProps> = ({
  name = 'account',
  category = 'user',
  className,
}) => {
  return (
    <svg
      className={`${styles.icon} ${className || ''}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label={`${name} ${category} icon`}
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};
