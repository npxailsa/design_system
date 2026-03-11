import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Icon from '../Icon/Icon';
import styles from './Label.module.css';

export interface LabelProps {
  /** Label text content */
  children?: React.ReactNode;
  /** Size variant — controls font-size, line-height, gap, and icon size */
  size?: 'large' | 'default' | 'small' | 'x-small' | '2x-small';
  /** Font weight */
  weight?: 'bold' | 'medium' | 'light' | 'thin';
  /** Text and content alignment */
  align?: 'left' | 'centre' | 'right';
  /** Shows dropdown split + chevron-down icon after trailing icon */
  dropdown?: boolean;
  /** Optional leading icon (MUI icon component). Pass null/undefined to hide. */
  leadingIcon?: React.ElementType;
  /** Whether to show the trailing arrow-right icon */
  showTrailingIcon?: boolean;
  className?: string;
}

/**
 * A versatile Label component for displaying text with optional icons and dropdown split.
 */
export const Label: React.FC<LabelProps> = ({
  children = 'Label',
  size = 'default',
  weight = 'medium',
  align = 'left',
  dropdown = false,
  leadingIcon: LeadingIconInput = PersonIcon,
  showTrailingIcon = true,
  className = '',
}) => {
  const containerClasses = [
    styles.labelContainer,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    className,
  ].join(' ');

  return (
    <div className={containerClasses}>
      {/* Leading Icon */}
      {LeadingIconInput && (
        <Icon icon={LeadingIconInput} size={size} />
      )}

      {/* Label Text */}
      <span className={styles.labelText}>{children}</span>

      {/* Trailing Icon (Arrow Right) */}
      {showTrailingIcon && (
        <Icon icon={ArrowForwardIcon} size={size} />
      )}

      {/* Dropdown / Split section */}
      {dropdown && (
        <div className={styles.split}>
          <div className={styles.splitDivider} />
          <Icon
            icon={KeyboardArrowDownIcon}
            size={size}
            className={styles.chevronIcon}
          />
        </div>
      )}
    </div>
  );
};

export default Label;
