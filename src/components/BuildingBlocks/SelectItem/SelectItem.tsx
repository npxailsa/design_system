import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import styles from './SelectItem.module.css';

/* ─────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────── */

/** Visual scale of the indicator */
export type SelectItemSize = 'small' | 'default' | 'large';

/**
 * Interaction / visual state of the indicator.
 * - default      : unselected, resting
 * - selected     : checked / filled
 * - some-selected: indeterminate (checkbox only; radio ignores)
 * - hover        : pointer over the control
 * - clicked      : pressed / active
 */
export type SelectItemState =
  | 'default'
  | 'selected'
  | 'some-selected'
  | 'hover'
  | 'clicked';

/** Which control type to render */
export type SelectItemType = 'checkbox' | 'radio';

export interface SelectItemProps {
  /** Which indicator type to render */
  type?: SelectItemType;
  /** Interaction / visual state */
  state?: SelectItemState;
  /** Visual scale */
  size?: SelectItemSize;
  /** Prevents interaction and dims the indicator */
  disabled?: boolean;
  /** Change handler — fires with the new checked value */
  onChange?: (checked: boolean) => void;
  /** Accessible label */
  'aria-label'?: string;
  className?: string;
}

/* ─────────────────────────────────────────────────────────────────────────
   SIZE MAP
   Pixel dimensions for each size, matching the Figma spec:
     small   → 18 × 18 px
     default → 22 × 22 px
     large   → 26 × 26 px
───────────────────────────────────────────────────────────────────────── */
const SIZE_PX: Record<SelectItemSize, number> = {
  small:   18,
  default: 22,
  large:   26,
};

/* ─────────────────────────────────────────────────────────────────────────
   COLOUR TOKENS
   All visual colours are pulled from CSS design tokens wherever possible.
   Hard-coded fallbacks mirror the token values for environments where CSS
   variables may not resolve (e.g. snapshot tests).
───────────────────────────────────────────────────────────────────────── */
const TOKEN = {
  brand:    'var(--global-color-primary-blue-blue, #3776CE)',
  sky:      'var(--global-color-primary-sky-blue, #00B4D8)',
  dark:     'var(--global-color-primary-blue-dark-blue, #191E3C)',
  white:    'var(--global-color-base-white, #FFFFFF)',
  gray300:  'var(--global-color-neutral-gray-300, #D2D5DA)',
  gray400:  'var(--global-color-neutral-gray-400, #9CA3AF)',
  gray500:  'var(--global-color-neutral-gray-500, #6D7280)',
} as const;

/* ─────────────────────────────────────────────────────────────────────────
   COLOUR LOGIC
   Maps state → colours for checkbox / radio indicators.
   Mirrors exactly the Figma design matrix from select.pdf.
───────────────────────────────────────────────────────────────────────── */
type ColourSet = {
  /** MUI `color` prop value used to drive the icon colour */
  muiColor: string;
  /** Optional extra sx overrides */
  sx?: Record<string, unknown>;
};

const checkboxColours = (state: SelectItemState, disabled: boolean): ColourSet => {
  if (disabled) {
    return {
      muiColor: TOKEN.gray300,
      sx: {
        color:              TOKEN.gray300,
        '&.Mui-checked':    { color: TOKEN.gray300 },
        '&.MuiCheckbox-indeterminate': { color: TOKEN.gray300 },
      },
    };
  }
  switch (state) {
    case 'selected':
    case 'hover':
    case 'clicked':
      return {
        muiColor: TOKEN.brand,
        sx: { color: TOKEN.brand, '&.Mui-checked': { color: TOKEN.brand } },
      };
    case 'some-selected':
      return {
        muiColor: TOKEN.brand,
        sx: {
          color: TOKEN.brand,
          '&.MuiCheckbox-indeterminate': { color: TOKEN.brand },
        },
      };
    default: // 'default'
      return {
        muiColor: TOKEN.gray500,
        sx: { color: TOKEN.gray500 },
      };
  }
};

const radioColours = (state: SelectItemState, disabled: boolean): ColourSet => {
  if (disabled) {
    return {
      muiColor: TOKEN.gray300,
      sx: {
        color:           TOKEN.gray300,
        '&.Mui-checked': { color: TOKEN.gray300 },
      },
    };
  }
  switch (state) {
    case 'selected':
    case 'hover':
    case 'clicked':
      return {
        muiColor: TOKEN.brand,
        sx: { color: TOKEN.brand, '&.Mui-checked': { color: TOKEN.brand } },
      };
    case 'some-selected':
      // Radio doesn't have indeterminate — treat same as selected
      return {
        muiColor: TOKEN.brand,
        sx: { color: TOKEN.brand, '&.Mui-checked': { color: TOKEN.brand } },
      };
    default:
      return {
        muiColor: TOKEN.gray500,
        sx: { color: TOKEN.gray500 },
      };
  }
};

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────── */
export const SelectItem = ({
  type     = 'checkbox',
  state    = 'default',
  size     = 'default',
  disabled = false,
  onChange,
  'aria-label': ariaLabel,
  className,
}: SelectItemProps): JSX.Element => {
  const px = SIZE_PX[size];

  const isChecked     = state === 'selected' || state === 'hover' || state === 'clicked' || state === 'some-selected';
  const isIndeterminate = type === 'checkbox' && state === 'some-selected';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  /* ── Shared sx sizing applied to both Checkbox and Radio ── */
  const sizingSx = {
    padding: 0,
    width:   `${px}px`,
    height:  `${px}px`,
    flexShrink: 0,
    '& .MuiSvgIcon-root': { fontSize: `${px}px` },
    '& .MuiTouchRipple-root': { display: 'none' },
  };

  const wrapperCls = [
    styles.root,
    styles[`root--${size}`],
    styles[`root--${state}`],
    disabled && styles['root--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (type === 'radio') {
    const { sx: colourSx } = radioColours(state, disabled);
    return (
      <span className={wrapperCls}>
        <Radio
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          disableRipple
          inputProps={{ 'aria-label': ariaLabel ?? 'select item' }}
          sx={{ ...sizingSx, ...colourSx }}
        />
      </span>
    );
  }

  /* checkbox */
  const { sx: colourSx } = checkboxColours(state, disabled);
  return (
    <span className={wrapperCls}>
      <Checkbox
        checked={isChecked && !isIndeterminate}
        indeterminate={isIndeterminate}
        disabled={disabled}
        onChange={handleChange}
        disableRipple
        inputProps={{ 'aria-label': ariaLabel ?? 'select item' }}
        sx={{ ...sizingSx, ...colourSx }}
      />
    </span>
  );
};

export default SelectItem;
