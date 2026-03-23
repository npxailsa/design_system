import React from 'react';
import styles from './Placeholder.module.css';
import { Icon } from '../Icon';

import AlarmIcon from '@mui/icons-material/Alarm';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export type PlaceholderSize = 'large' | 'default' | 'small' | 'x-small';
export type PlaceholderAlign = 'left' | 'centre' | 'right';
export type PlaceholderType = 'default' | 'italic' | 'tags-selected' | 'number';

export interface PlaceholderTag {
  label: string;
  leadingIcon?: React.ElementType;
}

export interface PlaceholderProps {
  /** Display size — controls font size, line height, icon size, and gap */
  size?: PlaceholderSize;
  /** Text and content alignment */
  align?: PlaceholderAlign;
  /** Type variant — changes the content pattern rendered */
  type?: PlaceholderType;
  /** Placeholder display text */
  text?: string;
  /** Whether to show the leading icon */
  showLeadingIcon?: boolean;
  /** MUI icon for the leading position */
  leadingIcon?: React.ElementType;
  /** Whether to show the primary trailing icon */
  showTrailingIcon?: boolean;
  /** Whether to show the secondary trailing icon (italic type only) */
  showTrailingIcon2?: boolean;
  /** Tags to display (tags-selected type) — not supported for x-small */
  tags?: PlaceholderTag[];
  /** Current numeric value (number type) */
  value?: number;
  /** Callback when + is pressed (number type) */
  onIncrement?: () => void;
  /** Callback when - is pressed (number type) */
  onDecrement?: () => void;
  className?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  size = 'default',
  align = 'left',
  type = 'default',
  text = 'Placeholder',
  showLeadingIcon = true,
  leadingIcon = AlarmIcon,
  showTrailingIcon = true,
  showTrailingIcon2 = false,
  tags = [],
  value = 0,
  onIncrement,
  onDecrement,
  className = '',
}) => {
  // Determine if x-small is incorrectly using tags-selected
  const isTagsSelected = type === 'tags-selected';
  const isInvalidVariant = size === 'x-small' && isTagsSelected;

  const containerClasses = [
    styles.placeholderContainer,
    styles[`size-${size}`],
    styles[`align-${align}`],
    styles[`type-${type}`],
    className,
  ].filter(Boolean).join(' ');

  if (isInvalidVariant) {
    console.warn('Placeholder: size "x-small" does not support type "tags-selected"');
    return null; // Or render default fallback? Figma says invalid variant, let's just render anyway but with warning, or return null. We'll render default fallback.
  }

  const renderLeadingIcon = () => {
    if (!showLeadingIcon || !leadingIcon) return null;
    return (
      <span className={styles.leadingIconWrapper}>
        <Icon icon={leadingIcon} size="inherit" />
      </span>
    );
  };

  const renderTrailingIcon = () => {
    if (!showTrailingIcon) return null;
    return (
      <span className={styles.trailingIconWrapper}>
        <Icon icon={CancelIcon} size="inherit" />
      </span>
    );
  };

  const renderTrailingIcon2 = () => {
    if (!showTrailingIcon2) return null;
    return (
      <span className={styles.trailingIconWrapper}>
        <Icon icon={KeyboardArrowDownIcon} size="inherit" />
      </span>
    );
  };

  if (type === 'number') {
    return (
      <div className={containerClasses}>
        <span className={styles.placeholderText}>{text}</span>
        <div className={styles.counterSection}>
          <Icon 
            icon={IndeterminateCheckBoxIcon} 
            size="inherit" 
            onClick={onDecrement}
            className={styles.counterMinusIcon}
          />
          <span className={styles.counterValue}>{value}</span>
          <Icon 
            icon={AddBoxIcon} 
            size="inherit" 
            onClick={onIncrement}
          />
        </div>
      </div>
    );
  }

  if (type === 'tags-selected') {
    return (
      <div className={containerClasses}>
        {renderLeadingIcon()}
        <div className={styles.tagRow}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag.leadingIcon && <Icon icon={tag.leadingIcon} size="inherit" />}
              <span>{tag.label}</span>
            </span>
          ))}
        </div>
        {renderTrailingIcon()}
        <span className={styles.trailingIconWrapper}>
          <Icon icon={KeyboardArrowDownIcon} size="inherit" />
        </span>
      </div>
    );
  }

  // default or italic
  return (
    <div className={containerClasses}>
      {renderLeadingIcon()}
      <span className={styles.placeholderText}>{text}</span>
      {renderTrailingIcon()}
      {type === 'italic' && renderTrailingIcon2()}
    </div>
  );
};

export default Placeholder;
