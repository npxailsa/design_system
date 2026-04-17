import React from 'react';
import Switch from '@mui/material/Switch';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'default' | 'large';
/**
 * Toggle colour variants:
 * - primary  → sky-blue border; sky-blue track ON / dark-navy track OFF
 * - blue     → brand-blue border; sky-blue track ON / dark-navy track OFF
 * - dark     → dark-navy border; sky-blue track ON / dark-navy track OFF
 * - status   → dark-navy border; lime-green track ON / sky-blue track OFF;
 *              dark-navy thumb with check-bold (ON) or close-thick (OFF) icons
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

/* ── Icon paths from design system (Alert / Toast convention) ───────────── */

/**
 * check-bold path (16×16 viewbox) — matches Alert success icon.
 * Used inside a 20×20 SVG with transform="translate(2,2)" to centre it.
 */
const CHECK_BOLD_PATH =
  'M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z';

/**
 * close-thick path (16×16 viewbox) — matches Alert error icon.
 * Used inside a 20×20 SVG with transform="translate(2,2)" to centre it.
 */
const CLOSE_THICK_PATH =
  'M13.3332 4.60669L11.3932 2.66669L7.99984 6.06002L4.6065 2.66669L2.6665 4.60669L6.05984 8.00002L2.6665 11.3934L4.6065 13.3334L7.99984 9.94002L11.3932 13.3334L13.3332 11.3934L9.93984 8.00002L13.3332 4.60669Z';

/* ── SVG thumb icons ────────────────────────────────────────────────────── */

/**
 * Build a 20×20 thumb-icon SVG:
 *   circle — the coloured indicator circle
 *   path   — the icon centred via translate(2,2) from 16×16 space
 */
const makeThumbSvg = (circleFill: string, iconPath: string, iconFill: string) =>
  encodeURIComponent(
    `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">` +
      `<circle cx="10" cy="10" r="9" fill="${circleFill}"/>` +
      `<g transform="translate(2,2)">` +
        `<path d="${iconPath}" fill="${iconFill}"/>` +
      `</g>` +
    `</svg>`,
  );

/** Green circle + white check-bold — enabled ON (primary / blue / dark) */
const CHECK_SVG = makeThumbSvg('#00B359', CHECK_BOLD_PATH, 'white');

/** Red circle + white close-thick — enabled OFF (primary / blue / dark) */
const X_SVG = makeThumbSvg('#E53935', CLOSE_THICK_PATH, 'white');

/** Dark-navy circle + white check-bold — status ON */
const STATUS_CHECK_SVG = makeThumbSvg('#191E3C', CHECK_BOLD_PATH, 'white');

/** Dark-navy circle + red close-thick — status OFF */
const STATUS_X_SVG = makeThumbSvg('#191E3C', CLOSE_THICK_PATH, '#E53935');

/** Gray circle + white check-bold — disabled ON */
const DISABLED_CHECK_SVG = makeThumbSvg('#B8BEC7', CHECK_BOLD_PATH, 'white');

/** Gray circle + white close-thick — disabled OFF */
const DISABLED_X_SVG = makeThumbSvg('#B8BEC7', CLOSE_THICK_PATH, 'white');

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
    on:  'var(--toggle-track-bg-status-on)',          // lime green
    off: 'var(--global-color-primary-sky-blue)',      // sky blue (unchecked = neutral)
  },
};

/**
 * Track border (box-shadow outline) per variant.
 * Acts as a visual differentiator between the three default variants.
 */
const TRACK_BORDER: Record<ToggleVariant, string> = {
  primary: 'var(--toggle-track-border-primary)',
  blue:    'var(--toggle-track-border-blue)',
  dark:    'var(--toggle-track-border-dark)',
  status:  'var(--toggle-track-border-status)',
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
