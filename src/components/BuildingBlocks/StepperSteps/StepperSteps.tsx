import React from 'react';
import styles from './StepperSteps.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type StepperStepsSize = 'small' | 'default' | 'large';

export type StepperStepState = 'default' | 'active' | 'complete' | 'disabled';

export interface StepperStep {
  /** Unique identifier */
  id: string | number;
  /** Display label below the circle (e.g. "Step 1") */
  label?: string;
  /** Visual and semantic state of this step */
  state?: StepperStepState;
}

export interface StepperStepsProps {
  /**
   * Array of step definitions.
   * Step numbers are auto-generated (1-based, zero-padded to 2 digits).
   */
  steps: StepperStep[];
  /**
   * Visual size of each step circle.
   * @default 'default'
   */
  size?: StepperStepsSize;
  /**
   * Whether to show the label below each step circle.
   * @default true
   */
  showLabel?: boolean;
  /** Optional additional CSS class */
  className?: string;
}

/* ── Checkmark SVG ───────────────────────────────────────────────────────── */

const CheckmarkIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.checkIcon}
  >
    <path
      d="M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z"
      fill="currentColor"
    />
  </svg>
);

/* ── Icon size map ───────────────────────────────────────────────────────── */

const ICON_SIZE: Record<StepperStepsSize, number> = {
  small: 10,
  default: 14,
  large: 20,
};

/* ── Component ───────────────────────────────────────────────────────────── */

export const StepperSteps: React.FC<StepperStepsProps> = ({
  steps,
  size = 'default',
  showLabel = true,
  className,
}) => {
  const stripCls = [styles.strip, className].filter(Boolean).join(' ');

  return (
    <div className={stripCls} role="list" aria-label="Step progress">
      {steps.map((step, index) => {
        const state = step.state ?? 'default';
        const stepNumber = String(index + 1).padStart(2, '0');

        const circleCls = [
          styles.circle,
          styles[`circle--${size}`],
          styles[`circle--state-${state}`],
        ].join(' ');

        const stepCls = [
          styles.step,
          styles[`step--${size}`],
        ].join(' ');

        const labelCls = [
          styles.label,
          styles[`label--${size}`],
          state !== 'default' ? styles[`label--${state}`] : '',
        ]
          .filter(Boolean)
          .join(' ');

        const ariaLabel =
          state === 'complete'
            ? `Step ${index + 1} complete`
            : state === 'active'
              ? `Step ${index + 1} active`
              : state === 'disabled'
                ? `Step ${index + 1} disabled`
                : `Step ${index + 1}`;

        return (
          <div key={step.id} className={stepCls} role="listitem" aria-label={ariaLabel}>
            <div className={circleCls}>
              {state === 'complete' ? (
                <CheckmarkIcon size={ICON_SIZE[size]} />
              ) : (
                stepNumber
              )}
            </div>
            {showLabel && step.label && (
              <span className={labelCls}>{step.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepperSteps;
