import React from 'react';
import Switch from '@mui/material/Switch';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'default' | 'large';
/**
 * Toggle colour variants:
 * - primary  → sky-blue track at all times
 * - blue     → brand-blue (#3776CE) track at all times
 * - dark     → dark-navy (#191E3C) track at all times
 * - status   → green track when ON, pink/error track when OFF
 */
export type ToggleVariant = 'primary' | 'blue' | 'dark' | 'status';

export interface ToggleProps {
  /** Whether the toggle is on */
  checked?: boolean;
  /** Fires when the toggle changes */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Visual size */
  size?: ToggleSize;
  /** Colour variant */
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

/* ── SVG thumb icons ────────────────────────────────────────────────────── */

/** Green circle with white checkmark — "ON" / checked state */
const CHECK_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#00B359"/>` +
    `<path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Red circle with white X — "OFF" / unchecked state */
const X_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#E53935"/>` +
    `<path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Gray circle with white checkmark — disabled checked */
const DISABLED_CHECK_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#B8BEC7"/>` +
    `<path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Gray circle with white X — disabled unchecked */
const DISABLED_X_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#B8BEC7"/>` +
    `<path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

const ICON_URL = (svg: string) => `url("data:image/svg+xml,${svg}")`;

/* ── Track colour helpers ───────────────────────────────────────────────── */

const TRACK_COLOR: Record<ToggleVariant, { on: string; off: string }> = {
  primary: {
    on:  'var(--toggle-track-bg-checked)',
    off: 'var(--toggle-track-bg-checked)',
  },
  blue: {
    on:  'var(--toggle-track-bg-checked-blue)',
    off: 'var(--toggle-track-bg-checked-blue)',
  },
  dark: {
    on:  'var(--toggle-track-bg-checked-dark)',
    off: 'var(--toggle-track-bg-checked-dark)',
  },
  status: {
    on:  'var(--toggle-track-bg-status-on)',
    off: 'var(--toggle-track-bg-status-off)',
  },
};

/* ── Component ──────────────────────────────────────────────────────────── */

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

  /* ── Thumb icon selection ── */
  const thumbIconUrl = disabled
    ? checked
      ? ICON_URL(DISABLED_CHECK_SVG)
      : ICON_URL(DISABLED_X_SVG)
    : checked
    ? ICON_URL(CHECK_SVG)
    : ICON_URL(X_SVG);

  /* ── Track colour selection ── */
  const trackBg = disabled
    ? 'var(--toggle-track-bg-disabled)'
    : checked
    ? TRACK_COLOR[variant].on
    : TRACK_COLOR[variant].off;

  /* ── MUI size ── */
  const muiSize = size === 'large' ? 'medium' : 'small';

  /* ── sx overrides ── */
  const switchSx = {
    /* Track */
    '& .MuiSwitch-track': {
      backgroundColor: trackBg,
      opacity: 1,
      borderRadius: 'var(--toggle-track-radius)',
      transition:
        'background-color var(--toggle-transition-duration) var(--toggle-transition-easing)',
    },
    /* Track when Mui-checked class fires (animation safe) */
    '&.Mui-checked + .MuiSwitch-track, & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: TRACK_COLOR[variant].on,
      opacity: 1,
    },
    /* Thumb */
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--toggle-thumb-bg)',
      backgroundImage: thumbIconUrl,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '62%',
      boxShadow: 'var(--toggle-thumb-shadow)',
      transition:
        'background-color var(--toggle-transition-duration) var(--toggle-transition-easing)',
    },
    /* Remove hover ripple */
    '& .MuiSwitch-switchBase': {
      '&:hover': { backgroundColor: 'transparent' },
    },
    '& .MuiTouchRipple-root': { display: 'none' },
    /* Override MUI default blue on checked */
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'var(--toggle-thumb-bg)',
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
