import React from 'react';
import styles from './StepperConnectors.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

/** Visual style of the connector line */
export type StepperConnectorType = 'solid' | 'dashed' | 'dotted';

/** Semantic / visual state */
export type StepperConnectorState = 'default' | 'active' | 'complete' | 'disabled';

/** Thickness of the connector line */
export type StepperConnectorSize = 'small' | 'default' | 'large';

/** Layout axis */
export type StepperConnectorOrientation = 'horizontal' | 'vertical';

export interface StepperConnectorsProps {
  /**
   * Visual style of the line.
   * @default 'solid'
   */
  type?: StepperConnectorType;

  /**
   * Semantic state — controls the line colour.
   * @default 'default'
   */
  state?: StepperConnectorState;

  /**
   * Thickness of the line.
   * @default 'default'
   */
  size?: StepperConnectorSize;

  /**
   * Whether the connector runs horizontally (between steps in a row)
   * or vertically (between steps in a column).
   * @default 'horizontal'
   */
  orientation?: StepperConnectorOrientation;

  /** Optional extra CSS class for layout overrides */
  className?: string;

  /** Accessible label */
  ariaLabel?: string;
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const StepperConnectors: React.FC<StepperConnectorsProps> = ({
  type = 'solid',
  state = 'default',
  size = 'default',
  orientation = 'horizontal',
  className,
  ariaLabel,
}) => {
  const cls = [
    styles.connector,
    styles[`connector--${orientation}`],
    styles[`connector--${type}`],
    styles[`connector--size-${size}`],
    styles[`connector--state-${state}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      role="presentation"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      className={cls}
    />
  );
};

export default StepperConnectors;
