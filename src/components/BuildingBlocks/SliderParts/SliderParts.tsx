import React from 'react';
import Slider from '@mui/material/Slider';
import styles from './SliderParts.module.css';

export type SliderPartsSize = 'small' | 'default' | 'large';
export type SliderPartsVariant = 'primary' | 'dark';

export interface SliderPartsProps {
  /** Current value (single thumb) or [min, max] for range */
  value?: number | [number, number];
  /** Callback fired on change */
  onChange?: (value: number | [number, number]) => void;
  /** Minimum value of the range */
  min?: number;
  /** Maximum value of the range */
  max?: number;
  /** Step interval */
  step?: number;
  /** Show marks at min and max */
  showMarks?: boolean;
  /** Show value labels above thumbs */
  showLabels?: boolean;
  /** Size variant */
  size?: SliderPartsSize;
  /** Colour variant */
  variant?: SliderPartsVariant;
  /** Disable interaction */
  disabled?: boolean;
  className?: string;
  /** Accessible label */
  'aria-label'?: string;
}

const SIZE_MAP: Record<SliderPartsSize, 'small' | 'medium'> = {
  small:   'small',
  default: 'small',
  large:   'medium',
};

export const SliderParts = ({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  showMarks = true,
  showLabels = false,
  size = 'default',
  variant = 'primary',
  disabled = false,
  className,
  'aria-label': ariaLabel,
}: SliderPartsProps): JSX.Element => {
  const isRange = Array.isArray(value);

  const handleChange = (_: Event, val: number | number[]) => {
    if (Array.isArray(val)) {
      onChange?.([val[0], val[1]] as [number, number]);
    } else {
      onChange?.(val);
    }
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

  const trackColor = disabled
    ? 'var(--slider-track-color-disabled)'
    : variant === 'dark'
    ? 'var(--slider-track-color-dark)'
    : 'var(--slider-track-color)';

  const thumbColor = disabled
    ? 'var(--slider-thumb-color-disabled)'
    : variant === 'dark'
    ? 'var(--slider-thumb-color-dark)'
    : 'var(--slider-thumb-color)';

  const railColor = disabled
    ? 'var(--slider-rail-color-disabled)'
    : 'var(--slider-rail-color)';

  const markColor = disabled
    ? 'var(--slider-mark-color-disabled)'
    : variant === 'dark'
    ? 'var(--slider-mark-color-dark)'
    : 'var(--slider-mark-color)';

  const sx = {
    color: trackColor,
    height: size === 'large' ? 'var(--slider-track-height-lg)' : size === 'small' ? 'var(--slider-track-height-sm)' : 'var(--slider-track-height)',
    padding: 'var(--slider-padding) 0',

    '& .MuiSlider-thumb': {
      width: size === 'large' ? 'var(--slider-thumb-size-lg)' : size === 'small' ? 'var(--slider-thumb-size-sm)' : 'var(--slider-thumb-size)',
      height: size === 'large' ? 'var(--slider-thumb-size-lg)' : size === 'small' ? 'var(--slider-thumb-size-sm)' : 'var(--slider-thumb-size)',
      backgroundColor: thumbColor,
      border: `var(--slider-thumb-border-width) solid ${thumbColor}`,
      boxShadow: 'none',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0 0 0 var(--slider-thumb-focus-ring-size) ${variant === 'dark' ? 'var(--slider-thumb-focus-ring-dark)' : 'var(--slider-thumb-focus-ring)'}`,
      },
      '&.Mui-active': {
        boxShadow: `0 0 0 var(--slider-thumb-focus-ring-size) ${variant === 'dark' ? 'var(--slider-thumb-focus-ring-dark)' : 'var(--slider-thumb-focus-ring)'}`,
      },
    },

    '& .MuiSlider-track': {
      backgroundColor: trackColor,
      border: 'none',
      borderRadius: 'var(--slider-track-radius)',
    },

    '& .MuiSlider-rail': {
      backgroundColor: railColor,
      opacity: 1,
      borderRadius: 'var(--slider-track-radius)',
    },

    '& .MuiSlider-mark': {
      backgroundColor: markColor,
      width: size === 'large' ? 'var(--slider-mark-size-lg)' : size === 'small' ? 'var(--slider-mark-size-sm)' : 'var(--slider-mark-size)',
      height: size === 'large' ? 'var(--slider-mark-size-lg)' : size === 'small' ? 'var(--slider-mark-size-sm)' : 'var(--slider-mark-size)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 1,
    },

    '& .MuiSlider-markLabel': {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: 'var(--slider-mark-label-font-size)',
      color: disabled ? 'var(--slider-mark-label-color-disabled)' : 'var(--slider-mark-label-color)',
      top: '-var(--slider-mark-label-offset)',
    },

    '& .MuiSlider-valueLabel': {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: 'var(--slider-mark-label-font-size)',
      backgroundColor: thumbColor,
      borderRadius: 'var(--global-spacing-radius-4px)',
    },

    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  };

  // Build marks array for endpoint dots
  const marks = showMarks
    ? [
        { value: min, label: String(min) },
        { value: max, label: String(max) },
      ]
    : false;

  return (
    <div className={wrapperCls}>
      <Slider
        value={Array.isArray(value) ? value : value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        marks={marks as any}
        size={SIZE_MAP[size]}
        disabled={disabled}
        valueLabelDisplay={showLabels ? 'auto' : 'off'}
        aria-label={ariaLabel}
        sx={sx}
        disableSwap={isRange}
      />
    </div>
  );
};

export default SliderParts;
