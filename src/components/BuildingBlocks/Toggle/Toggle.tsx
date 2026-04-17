import React from 'react';
import Switch from '@mui/material/Switch';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'default' | 'large';
export type ToggleVariant = 'primary' | 'dark';

export interface ToggleProps {
  /** Whether the toggle is on */
  checked?: boolean;
  /** Fires when the toggle changes */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Visual size */
  size?: ToggleSize;
  /** Colour variant — primary (sky-blue) or dark (dark-blue) */
  variant?: ToggleVariant;
  /** Disable interaction */
  disabled?: boolean;
  /** Accessible label */
  'aria-label'?: string;
  /** Optional visible label rendered beside the toggle */
  label?: string;
  /** Label position relative to the toggle */
  labelPosition?: 'left' | 'right';
  className?: string;
}

export const Toggle = ({
  checked = false,
  onChange,
  size = 'default',
  variant = 'primary',
  disabled = false,
  'aria-label': ariaLabel,
  label,
  labelPosition = 'right',
  className,
}: ToggleProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  const wrapperCls = [
    styles.wrapper,
    styles[`wrapper--${size}`],
    styles[`wrapper--${variant}`],
    disabled && styles['wrapper--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Map our sizes to MUI Switch sizes
  const muiSize = size === 'large' ? 'medium' : 'small';

  const switchSx = {
    /* Track colours */
    '& .MuiSwitch-track': {
      backgroundColor: disabled
        ? 'var(--toggle-track-bg-disabled)'
        : checked
        ? variant === 'dark'
          ? 'var(--toggle-track-bg-checked-dark)'
          : 'var(--toggle-track-bg-checked)'
        : 'var(--toggle-track-bg)',
      opacity: 1,
      borderRadius: 'var(--toggle-track-radius)',
      transition: 'background-color var(--toggle-transition-duration) var(--toggle-transition-easing)',
    },
    /* Thumb colours */
    '& .MuiSwitch-thumb': {
      backgroundColor: disabled
        ? 'var(--toggle-thumb-bg-disabled)'
        : checked
        ? variant === 'dark'
          ? 'var(--toggle-thumb-bg-checked-dark)'
          : 'var(--toggle-thumb-bg-checked)'
        : 'var(--toggle-thumb-bg)',
      boxShadow: checked ? 'none' : 'var(--toggle-thumb-shadow)',
      transition: 'background-color var(--toggle-transition-duration) var(--toggle-transition-easing)',
    },
    /* Remove default MUI color overrides */
    '&.Mui-checked .MuiSwitch-thumb': {
      backgroundColor: disabled
        ? 'var(--toggle-thumb-bg-disabled)'
        : variant === 'dark'
        ? 'var(--toggle-thumb-bg-checked-dark)'
        : 'var(--toggle-thumb-bg-checked)',
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: disabled
        ? 'var(--toggle-track-bg-disabled)'
        : variant === 'dark'
        ? 'var(--toggle-track-bg-checked-dark)'
        : 'var(--toggle-track-bg-checked)',
      opacity: 1,
    },
    '& .MuiSwitch-switchBase': {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  };

  return (
    <label className={wrapperCls}>
      {label && labelPosition === 'left' && (
        <span className={styles.label}>{label}</span>
      )}
      <Switch
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        size={muiSize}
        inputProps={{ 'aria-label': ariaLabel ?? label ?? 'toggle' }}
        sx={switchSx}
        disableRipple
        className={styles.switch}
      />
      {label && labelPosition === 'right' && (
        <span className={styles.label}>{label}</span>
      )}
    </label>
  );
};

export default Toggle;
