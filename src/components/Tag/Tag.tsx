import React from 'react';
import styles from './Tag.module.css';

export type TagSize = 'small' | 'default' | 'large';
export type TagColour =
  | 'default'
  | 'blue'
  | 'seafoam'
  | 'yellow'
  | 'dark'
  | 'navy'
  | 'red'
  | 'green'
  | 'purple'
  | 'info';
export type TagVariant = 'filled' | 'outline';

export interface TagProps {
  /** Text label displayed inside the tag */
  label?: string;
  /** Size variant */
  size?: TagSize;
  /** Colour variant */
  colour?: TagColour;
  /** Visual style — filled (default) or outline */
  variant?: TagVariant;
  /** Optional MUI icon component rendered before the label */
  leadingIcon?: React.ElementType;
  /** Show the leading icon */
  showLeadingIcon?: boolean;
  /** Optional MUI icon component rendered after the label */
  trailingIcon?: React.ElementType;
  /** Show the trailing icon */
  showTrailingIcon?: boolean;
  /** Show a dismiss/remove × button on the trailing edge */
  showRemove?: boolean;
  /** Numeric count badge shown after the label */
  count?: number;
  /** Show the count badge */
  showCount?: boolean;
  /** Whether the tag is in a selected / active state */
  selected?: boolean;
  /** Disable the tag (prevents interaction) */
  disabled?: boolean;
  /** Click handler for the tag body */
  onClick?: () => void;
  /** Click handler for the remove × button */
  onRemove?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Tag — A compact pill-shaped label used to categorise, filter, or annotate
 * content. Supports 10 colour variants, 3 sizes, filled/outline styles, and
 * optional leading icons, remove buttons, and count badges.
 */
export const Tag: React.FC<TagProps> = ({
  label = 'Label',
  size = 'default',
  colour = 'blue',
  variant = 'filled',
  leadingIcon: LeadingIcon,
  showLeadingIcon = false,
  trailingIcon: TrailingIcon,
  showTrailingIcon = false,
  showRemove = false,
  count,
  showCount = false,
  selected = false,
  disabled = false,
  onClick,
  onRemove,
  className = '',
}) => {
  const classNames = [
    styles.tag,
    styles[`tag--${size}`],
    styles[`tag--${colour}`],
    styles[`tag--${variant}`],
    selected ? styles['tag--selected'] : '',
    disabled ? styles['tag--disabled'] : '',
    onClick || onRemove ? styles['tag--interactive'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const handleRemoveKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && onRemove && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      e.stopPropagation();
      onRemove();
    }
  };

  return (
    <span
      className={classNames}
      onClick={!disabled && onClick ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-pressed={onClick && selected ? true : undefined}
      aria-disabled={disabled ? true : undefined}
    >
      {/* Leading icon */}
      {showLeadingIcon && LeadingIcon && (
        <span className={styles['tag__icon']} aria-hidden="true">
          <LeadingIcon className={styles['tag__icon-svg']} />
        </span>
      )}

      {/* Label text */}
      <span className={styles['tag__label']}>{label}</span>

      {/* Count badge */}
      {showCount && count !== undefined && (
        <span className={styles['tag__count']}>{count}</span>
      )}

      {/* Trailing icon */}
      {showTrailingIcon && TrailingIcon && (
        <span className={styles['tag__icon']} aria-hidden="true">
          <TrailingIcon className={styles['tag__icon-svg']} />
        </span>
      )}

      {/* Remove button */}
      {showRemove && (
        <button
          type="button"
          className={styles['tag__remove']}
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled && onRemove) onRemove();
          }}
          onKeyDown={handleRemoveKeyDown}
          aria-label="Remove tag"
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
        >
          {/* × icon */}
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 1L1 7M1 1L7 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;
