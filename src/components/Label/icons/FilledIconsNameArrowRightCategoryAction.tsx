import React from 'react';
import styles from './FilledIconsNameArrowRightCategoryAction.module.css';

export interface IconProps {
  name?: string;
  category?: string;
  className?: string;
}

export const FilledIconsNameArrowRightCategoryAction: React.FC<IconProps> = ({
  name = 'arrow-right',
  category = 'action',
  className,
}) => {
  return (
    <svg
      className={`${styles.icon} ${className || ''}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label={`${name} ${category} icon`}
    >
      <path d="M5 13h14v-2H5v2zm7-9l-1.41 1.41L13.17 11H5v2h8.17l-2.58 2.59L12 17l5-5-5-5z" />
    </svg>
  );
};
