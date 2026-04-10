import React from 'react';
import styles from './StepperLines.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

/** Visual line style */
export type StepperLineType = 'solid' | 'dashed' | 'dotted';

/** Stroke thickness: 1 px / 2 px / 3 px */
export type StepperLineStroke = '1-px' | '2-px' | '3-px';

/** Semantic progress state */
export type StepperLineState = 'to-do' | 'complete' | 'disabled';

export interface StepperLinesProps {
  /**
   * Visual style of the connector line.
   * @default 'solid'
   */
  type?: StepperLineType;

  /**
   * Stroke thickness of the line.
   * @default '2-px'
   */
  stroke?: StepperLineStroke;

  /**
   * Semantic progress state — drives the line colour.
   * @default 'disabled'
   */
  state?: StepperLineState;

  /** Optional extra CSS class for layout overrides. */
  className?: string;

  /** Accessible description of this connector's purpose. */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const StepperLines: React.FC<StepperLinesProps> = ({
  type = 'solid',
  stroke = '2-px',
  state = 'disabled',
  className,
  ariaLabel,
}) => {
  const cls = [
    styles.line,
    styles[`type-${type}`],
    styles[`stroke-${stroke}`],
    styles[`state-${state}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      role="presentation"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      className={cls}
    />
  );
};

export default StepperLines;
