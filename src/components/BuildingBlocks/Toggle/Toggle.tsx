import React from 'react';
import Switch from '@mui/material/Switch';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'default' | 'large';
/**
 * Toggle colour variants — all share the same thumb treatment:
 *   ON  → white thumb + status/dark-green check-bold icon + 0.5px black stroke
 *   OFF → white thumb + status/red   close-thick icon   + 0.5px black stroke
 *
 * The variant only affects the track fill and its outline border:
 *   primary → sky-blue  border; sky-blue ON / dark-navy OFF track
 *   blue    → brand-blue border; sky-blue ON / dark-navy OFF track
 *   dark    → dark-navy  border; sky-blue ON / dark-navy OFF track
 *   status  → dark-navy  border; lime-green ON / sky-blue OFF track
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
  /** Accessible label (for screen readers) */
  'aria-label'?: string;
  /** Optional visible label rendered beside the toggle */
  label?: string;
  /** Label position relative to the toggle */
  labelPosition?: 'left' | 'right';
  className?: string;
}

/* ─────────────────────────────────────────────────────────────────────────
   ICON PATHS — reused from Alert / Toast design-system convention
   Both paths use a 16 × 16 viewBox.
───────────────────────────────────────────────────────────────────────── */

/** check-bold (16 × 16) — matching Alert "success" leading icon */
const CHECK_BOLD_PATH =
  'M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z';

/** close-thick (16 × 16) — matching Alert "error" leading icon */
const CLOSE_THICK_PATH =
  'M13.3332 4.60669L11.3932 2.66669L7.99984 6.06002L4.6065 2.66669L2.6665 4.60669L6.05984 8.00002L2.6665 11.3934L4.6065 13.3334L7.99984 9.94002L11.3932 13.3334L13.3332 11.3934L9.93984 8.00002L13.3332 4.60669Z';

/* ─────────────────────────────────────────────────────────────────────────
   THUMB ICON BUILDER
   Generates a 16 × 16 SVG containing only the icon path (transparent bg).
   The white thumb circle itself is rendered by MUI's thumb element.
───────────────────────────────────────────────────────────────────────── */
const makeIcon = (path: string, fill: string): string =>
  encodeURIComponent(
    `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">` +
      `<path d="${path}" fill="${fill}"/>` +
    `</svg>`,
  );

/**
 * Icon fill colours:
 *   ON  → status/dark-green = #227f1a
 *   OFF → status/red        = #ce2031
 *   Disabled → neutral-gray = #B8BEC7
 */
const CHECK_ICON          = makeIcon(CHECK_BOLD_PATH,   '#227f1a');
const X_ICON              = makeIcon(CLOSE_THICK_PATH,  '#ce2031');
const DISABLED_CHECK_ICON = makeIcon(CHECK_BOLD_PATH,   '#B8BEC7');
const DISABLED_X_ICON     = makeIcon(CLOSE_THICK_PATH,  '#B8BEC7');

const iconUrl = (encoded: string) => `url("data:image/svg+xml,${encoded}")`;

/* ─────────────────────────────────────────────────────────────────────────
   SIZE GEOMETRY
   Each size defines:
     trackW / trackH  — pill outer dimensions
     thumb            — white circle diameter
     inset            — visible gap between circle edge and pill inner edge
   translateX = trackW - thumb - 2 × inset  (exact travel distance)
───────────────────────────────────────────────────────────────────────── */
const SIZE_CONFIG = {
  small:   { trackW: 44, trackH: 24, thumb: 18, inset: 3 },
  default: { trackW: 52, trackH: 28, thumb: 22, inset: 3 },
  large:   { trackW: 64, trackH: 34, thumb: 28, inset: 3 },
} as const;

/* ─────────────────────────────────────────────────────────────────────────
   TRACK COLOURS
───────────────────────────────────────────────────────────────────────── */
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
    on:  'var(--toggle-track-bg-status-on)',        // lime green
    off: 'var(--global-color-primary-sky-blue)',    // sky blue
  },
};

/** Track outline border colour — differentiates primary / blue / dark visually */
const TRACK_BORDER: Record<ToggleVariant, string> = {
  primary: 'var(--toggle-track-border-primary)',
  blue:    'var(--toggle-track-border-blue)',
  dark:    'var(--toggle-track-border-dark)',
  status:  'var(--toggle-track-border-status)',
};

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────── */
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

  const { trackW, trackH, thumb: thumbSize, inset } = SIZE_CONFIG[size];

  /**
   * How far the switchBase translates to reach the checked (right) position.
   * trackW = inset + thumbSize + inset + translateX + inset  … simplified:
   * translateX = trackW - thumbSize - 2 * inset
   */
  const translateX = trackW - thumbSize - 2 * inset;

  /* ── Thumb icon ── */
  const thumbIconUrl = disabled
    ? checked ? iconUrl(DISABLED_CHECK_ICON) : iconUrl(DISABLED_X_ICON)
    : checked  ? iconUrl(CHECK_ICON)         : iconUrl(X_ICON);

  /* ── Track fill ── */
  const trackBg = disabled
    ? 'var(--toggle-track-bg-disabled)'
    : checked
    ? TRACK_COLOR[variant].on
    : TRACK_COLOR[variant].off;

  /* ── Track outline ── */
  const trackBorderColor = disabled
    ? 'var(--toggle-track-border-disabled)'
    : TRACK_BORDER[variant];

  const wrapperCls = [styles.wrapper, disabled && styles['wrapper--disabled'], className]
    .filter(Boolean)
    .join(' ');

  /* ─── MUI Switch sx overrides ─────────────────────────────────────────
     Root padding is set to 0 so the visual track fills the root exactly.
     Sizes are driven entirely by SIZE_CONFIG — no CSS transform scaling.
  ─────────────────────────────────────────────────────────────────────── */
  const switchSx = {
    /* Root dimensions */
    width:   `${trackW}px`,
    height:  `${trackH}px`,
    padding: 0,

    /* Track: fills root, carries the pill colour and outline */
    '& .MuiSwitch-track': {
      width:           '100%',
      height:          '100%',
      borderRadius:    `${trackH / 2}px`,
      backgroundColor: `${trackBg} !important`,
      opacity:         '1 !important',
      boxShadow:       `0 0 0 2px ${trackBorderColor}`,
      transition:      'background-color 0.2s ease, box-shadow 0.2s ease',
    },

    /* SwitchBase: the sliding container; padding = inset gap */
    '& .MuiSwitch-switchBase': {
      padding:  `${inset}px`,
      top:      0,
      left:     0,
      '&:hover': { backgroundColor: 'transparent' },
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: `translateX(${translateX}px)`,
      color:     'white',
    },

    /* Thumb: white circle with icon background + 0.5px black stroke */
    '& .MuiSwitch-thumb': {
      width:               `${thumbSize}px`,
      height:              `${thumbSize}px`,
      borderRadius:        '50%',
      /* base/white background */
      backgroundColor:     'var(--global-color-base-white)',
      /* icon — check-bold (ON) or close-thick (OFF) */
      backgroundImage:     thumbIconUrl,
      backgroundRepeat:    'no-repeat',
      backgroundPosition:  'center',
      backgroundSize:      '68%',
      /* base/black 0.5px stroke */
      boxShadow:           '0 0 0 0.5px var(--global-color-base-black)',
      transition:          'background-image 0.15s ease',
    },

    /* Remove MUI ripple */
    '& .MuiTouchRipple-root': { display: 'none' },
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
        size="small"
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
