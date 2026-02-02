import React from 'react';
import styles from './Label.module.css';
import { FilledIconsNameAccountCategoryUser } from './icons/FilledIconsNameAccountCategoryUser';
import { FilledIconsNameArrowRightCategoryAction } from './icons/FilledIconsNameArrowRightCategoryAction';
import { FilledIconsNameChevronDownCategoryDisplay } from './icons/FilledIconsNameChevronDownCategoryDisplay';

/**
 * Label component with multiple size, weight, and alignment variants.
 * Supports optional leading/trailing icons and dropdown indicator.
 */
export interface LabelProps {
  /** Text content or React nodes to display in the label */
  children?: React.ReactNode;
  /** Show an icon before the label text */
  leadingIcon?: boolean;
  /** Show an icon after the label text */
  trailingIcon?: boolean;
  /** Size variant of the label */
  size?: 'default' | 'small' | 'large' | 'x-small' | '2-x-small';
  /** Font weight variant */
  weight?: 'bold' | 'medium' | 'light' | 'thin';
  /** Layout direction (currently only horizontal supported) */
  stack?: 'horizontal';
  /** Text alignment within the label */
  align?: 'left' | 'centre' | 'right';
  /** Show dropdown indicator */
  dropdown?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Label: React.FC<LabelProps> = ({
  children = 'Label',
  leadingIcon = false,
  trailingIcon = false,
  size = 'default',
  weight = 'bold',
  stack = 'horizontal',
  align = 'left',
  dropdown = false,
  className,
  style,
}) => {
  const labelClasses = [
    styles.label,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    stack === 'horizontal' && styles['stack-horizontal'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={labelClasses} style={style}>
      {leadingIcon && (
        <span className={styles['leading-icon']}>
          <FilledIconsNameAccountCategoryUser />
        </span>
      )}
      
      <span className={styles.text}>{children}</span>
      
      {trailingIcon && (
        <span className={styles['trailing-icon']}>
          <FilledIconsNameArrowRightCategoryAction />
        </span>
      )}
      
      {dropdown && (
        <span className={styles['dropdown-indicator']}>
          <FilledIconsNameChevronDownCategoryDisplay />
        </span>
      )}
    </label>
  );
};
