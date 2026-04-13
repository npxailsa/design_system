import React from 'react';
import { StepperSteps } from '../BuildingBlocks/StepperSteps/StepperSteps';
import type {
  StepperStepsSize,
  StepperStepState,
} from '../BuildingBlocks/StepperSteps/StepperSteps';
import { StepperLines } from '../BuildingBlocks/StepperLines/StepperLines';
import type {
  StepperLineType,
  StepperLineStroke,
  StepperLineState,
} from '../BuildingBlocks/StepperLines/StepperLines';
import styles from './Stepper.module.css';

/* ── Types ───────────────────────────────────────────────────────────────── */

export type { StepperStepsSize as StepperSize, StepperStepState, StepperLineType, StepperLineStroke };

export interface StepperStep {
  /** Unique identifier */
  id: string | number;
  /** Label displayed below the step circle */
  label?: string;
  /** Visual and semantic state for this step */
  state?: StepperStepState;
}

export interface StepperProps {
  /**
   * Array of step definitions. Numbers are generated automatically.
   */
  steps: StepperStep[];
  /**
   * Visual size of all step circles and connector lines.
   * @default 'default'
   */
  size?: StepperStepsSize;
  /**
   * Whether to show labels below the circles.
   * @default true
   */
  showLabel?: boolean;
  /**
   * Line style for the connectors between steps.
   * @default 'solid'
   */
  lineType?: StepperLineType;
  /**
   * Stroke thickness for the connector lines.
   * @default '2-px'
   */
  lineStroke?: StepperLineStroke;
  /** Additional CSS class */
  className?: string;
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

/**
 * Determine the connector line state based on adjacent step states.
 *
 * Three line states from the Figma design:
 *
 *  complete  (blue)       — the segment between two completed steps, or between a
 *                           complete step and the current active step.
 *  to-do     (dark gray)  — the segment is on the upcoming / not-yet-reached path.
 *                           Used between default steps, or between the active step
 *                           and any default steps ahead.
 *  disabled  (light gray) — one or both adjacent steps are explicitly disabled.
 */
function resolveLineState(
  leftState: StepperStepState,
  rightState: StepperStepState,
): StepperLineState {
  // Either side is disabled → disabled line
  if (leftState === 'disabled' || rightState === 'disabled') return 'disabled';

  // Completed segment
  if (leftState === 'complete' && (rightState === 'complete' || rightState === 'active')) {
    return 'complete';
  }

  // All remaining combinations (default↔default, active↔default, complete↔default)
  // are part of the upcoming/to-do path.
  return 'to-do';
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const Stepper: React.FC<StepperProps> = ({
  steps,
  size = 'default',
  showLabel = true,
  lineType = 'solid',
  lineStroke = '1-px',
  className,
}) => {
  if (!steps || steps.length === 0) return null;

  const wrapCls = [styles.stepper, className].filter(Boolean).join(' ');
  const lineWrapCls = [styles.lineWrapper, styles[`lineWrapper--${size}`]].join(' ');

  return (
    <div className={wrapCls} role="group" aria-label="Progress steps">
      {steps.map((step, index) => {
        const stepState: StepperStepState = step.state ?? 'default';
        const isLast = index === steps.length - 1;

        const nextState: StepperStepState =
          !isLast ? (steps[index + 1].state ?? 'default') : 'default';
        const lineState = resolveLineState(stepState, nextState);

        return (
          <React.Fragment key={step.id}>
            {/* Individual step — single-element StepperSteps */}
            <div className={styles.stepWrapper}>
              <StepperSteps
                steps={[{ id: step.id, label: step.label, state: stepState }]}
                size={size}
                showLabel={showLabel}
                className={styles.stepItem}
              />
            </div>

            {/* Connector between this step and the next */}
            {!isLast && (
              <div className={lineWrapCls}>
                <StepperLines
                  type={lineType}
                  stroke={lineStroke}
                  state={lineState}
                  className={styles.line}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
