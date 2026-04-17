import React from 'react';
import Switch from '@mui/material/Switch';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'default' | 'large';
/**
 * Toggle colour variants:
 * - primary  → sky-blue border; sky-blue track ON / dark-navy track OFF
 * - blue     → brand-blue border; sky-blue track ON / dark-navy track OFF
 * - dark     → dark-navy border; sky-blue track ON / dark-navy track OFF
 * - status   → green track ON / red track OFF; dark-thumb icons
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

/** Green circle + white checkmark — enabled ON (primary / blue / dark) */
const CHECK_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#00B359"/>` +
    `<path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Red circle + white X — enabled OFF (primary / blue / dark) */
const X_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#E53935"/>` +
    `<path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Dark-navy circle + white checkmark — status ON */
const STATUS_CHECK_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#191E3C"/>` +
    `<path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Dark-navy circle + red X — status OFF */
const STATUS_X_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#191E3C"/>` +
    `<path d="M7 7l6 6M13 7l-6 6" stroke="#E53935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Gray circle + white checkmark — disabled ON */
const DISABLED_CHECK_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#B8BEC7"/>` +
    `<path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

/** Gray circle + white X — disabled OFF */
const DISABLED_X_SVG = encodeURIComponent(
  `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="10" cy="10" r="9" fill="#B8BEC7"/>` +
    `<path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</svg>`,
);

const ICON_URL = (svg: string) => `url("data:image/svg+xml,${svg}")`;

/* ── Track colour helpers ───────────────────────────────────────────────── */

/**
 * Track background per variant.
 * primary/blue/dark all share the same track logic:
 *   ON  → bright sky-blue
 *   OFF → dark navy
 * status:
 *   ON  → success green
 *   OFF → error red
 */
const TRACK_COLOR: Record<ToggleVariant, { on: string; off: string }> = {
  primary: {
    on:  'var(--global-color-primary-sky-blue)',
    off: 'var(--global-color-primary-blue-dark-blue, #191E3C)',
  },
  blue: {
    on:  'var(--global-color-primary-sky-blue)',
    off: 'var(--global-color-primary-blue-dark-blue, #191E3C)',
  },
  dark: {
    on:  'var(--global-color-primary-sky-blue)',
    off: 'var(--global-color-primary-blue-dark-blue, #191E3C)',
  },
  status: {
    on:  'var(--toggle-track-bg-status-on)',
    off: 'var(--toggle-track-bg-status-off)',
  },
};

/**
 * Track border (box-shadow outline) per variant.
 * Acts as a visual differentiator between the three default variants.
 */
const TRACK_BORDER: Record<ToggleVariant, string> = {
  primary: 'var(--global-color-primary-sky-blue)',
  blue:    'var(--global-color-primary-blue-blue, #3776CE)',
  dark:    'var(--global-color-primary-blue-dark-blue, #191E3C)',
  status:  'transparent',
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

  /* ── Thumb icon ── */
  const thumbIconUrl = disabled
    ? checked
      ? ICON_URL(DISABLED_CHECK_SVG)
      : ICON_URL(DISABLED_X_SVG)
    : variant === 'status'
    ? checked
      ? ICON_URL(STATUS_CHECK_SVG)
      : ICON_URL(STATUS_X_SVG)
    : checked
    ? ICON_URL(CHECK_SVG)
    : ICON_URL(X_SVG);

  /* ── Track colour ── */
  const trackBg = disabled
    ? 'var(--toggle-track-bg-disabled)'
    : checked
    ? TRACK_COLOR[variant].on
    : TRACK_COLOR[variant].off;

  /* ── Track border (box-shadow outline) ── */
  const trackBorderColor = disabled
    ? 'var(--global-color-neutral-gray-300)'
    : TRACK_BORDER[variant];

  /* ── MUI size ── */
  const muiSize = size === 'large' ? 'medium' : 'small';

  /* ── sx overrides ── */
  const switchSx = {
    /* ── Track ── */
    '& .MuiSwitch-track': {
      backgroundColor: `${trackBg} !important`,
      opacity:         '1 !important',
      borderRadius:    'var(--toggle-track-radius)',
      boxShadow:       `0 0 0 2px ${trackBorderColor}`,
      transition:      [
        `background-color var(--toggle-transition-duration) var(--toggle-transition-easing)`,
        `box-shadow var(--toggle-transition-duration) var(--toggle-transition-easing)`,
      ].join(', '),
    },

    /* ── Thumb ── */
    '& .MuiSwitch-thumb': {
      backgroundColor:   'var(--toggle-thumb-bg)',
      backgroundImage:   thumbIconUrl,
      backgroundRepeat:  'no-repeat',
      backgroundPosition:'center',
      backgroundSize:    '78%',
      boxShadow:         'var(--toggle-thumb-shadow)',
      transition: [
        `background-image var(--toggle-transition-duration) var(--toggle-transition-easing)`,
        `background-color var(--toggle-transition-duration) var(--toggle-transition-easing)`,
      ].join(', '),
    },

    /* ── SwitchBase: remove hover ripple ── */
    '& .MuiSwitch-switchBase': {
      '&:hover': { backgroundColor: 'transparent' },
    },
    '& .MuiTouchRipple-root': { display: 'none' },

    /* ── Override MUI default blue on checked ── */
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
