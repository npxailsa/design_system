import React from 'react';
import MuiDivider from '@mui/material/Divider';
import styles from './DividerWithLabel.module.css';
import type { DividerLine, DividerThickness } from '../Divider/Divider';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type DividerWithLabelPosition = 'left' | 'center' | 'right';
export type DividerWithLabelSize = 'xs' | 'sm' | 'default';

export interface DividerWithLabelProps {
  /**
   * Text label to display across the divider line.
   */
  label: string;

  /**
   * Horizontal position of the label relative to the line.
   * @default 'center'
   */
  labelPosition?: DividerWithLabelPosition;

  /**
   * Size of the label text.
   * - `xs`      — 12px (compact / meta text)
   * - `sm`      — 14px (secondary label)
   * - `default` — 16px (standard body)
   * @default 'sm'
   */
  labelSize?: DividerWithLabelSize;

  /**
   * Line style of the divider.
   * @default 'solid'
   */
  line?: DividerLine;

  /**
   * Stroke thickness of the divider.
   * Maps to the global stroke scale.
   * @default '1px'
   */
  thickness?: DividerThickness;

  /**
   * Optional extra CSS class for layout overrides (margin, max-width, etc.).
   */
  className?: string;

  /**
   * Accessible label announced by screen readers.
   * @default 'Divider'
   */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const DividerWithLabel: React.FC<DividerWithLabelProps> = ({
  label,
  labelPosition = 'center',
  labelSize = 'sm',
  line = 'solid',
  thickness = '1px',
  className = '',
  ariaLabel = 'Divider',
}) => {
  const rootCls = [
    styles.root,
    styles[`root--${labelPosition}`],
    styles[`root--line-${line}`],
    styles[`root--thickness-${thickness}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textCls = [styles.label, styles[`label--${labelSize}`]].join(' ');

  return (
    <MuiDivider
      aria-label={ariaLabel}
      className={rootCls}
      textAlign={
        labelPosition === 'left' ? 'left' : labelPosition === 'right' ? 'right' : 'center'
      }
      sx={{ borderColor: 'transparent', '&::before, &::after': { borderColor: 'inherit' } }}
    >
      <span className={textCls}>{label}</span>
    </MuiDivider>
  );
};

export default DividerWithLabel;
