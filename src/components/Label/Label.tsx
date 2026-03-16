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
  /** Font family variant */
  font?: 'ginger' | 'archivo';
  /** Text and content alignment */
  align?: 'left' | 'centre' | 'right';
  /** Shows dropdown split + chevron-down icon after trailing icon */
  dropdown?: boolean;
  /** Semantic HTML element to render */
  component?: 'label' | 'span' | 'div';
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Optional leading icon (MUI icon component). */
  leadingIcon?: React.ElementType;
  /** Whether to show the leading icon */
  showLeadingIcon?: boolean;
  /** Optional trailing icon (MUI icon component). Defaults to ArrowForwardIcon. */
  trailingIcon?: React.ElementType;
  /** Whether to show the trailing icon */
  showTrailingIcon?: boolean;
  /** Whether to show the split divider and chevron (only if dropdown is true) */
  showSplit?: boolean;
  className?: string;
}

/**
 * A versatile Label component for displaying text with optional icons and dropdown split.
 */
export const Label: React.FC<LabelProps> = ({
  children = 'Label',
  size = 'default',
  weight = 'bold',
  font = 'archivo',
  align = 'left',
  dropdown = false,
  component: Component = 'div',
  ariaLabel,
  leadingIcon: LeadingIconInput = PersonIcon,
  trailingIcon: TrailingIconInput = ArrowForwardIcon,
  showLeadingIcon = true,
  showTrailingIcon = true,
  showSplit = true,
  className = '',
}) => {
  const containerClasses = [
    styles.labelContainer,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`font-${font}`],
    styles[`align-${align}`],
    className,
  ].join(' ');

  return (
    <Component className={containerClasses} aria-label={ariaLabel}>
      {/* Leading Icon */}
      {showLeadingIcon && LeadingIconInput && (
        <Icon icon={LeadingIconInput} size={size} />
      )}

      {/* Label Text */}
      <span className={styles.labelText}>{children}</span>

      {/* Trailing Icon */}
      {showTrailingIcon && TrailingIconInput && (
        <Icon icon={TrailingIconInput} size={size} />
      )}

      {/* Dropdown / Split section */}
      {dropdown && showSplit && (
        <div className={styles.split}>
          <div className={styles.splitDivider} />
          <Icon
            icon={KeyboardArrowDownIcon}
            size={size}
            className={styles.chevronIcon}
          />
        </div>
      )}
    </Component>
  );
};

export default Label;
