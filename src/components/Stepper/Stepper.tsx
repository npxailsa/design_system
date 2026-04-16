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
  /**
   * When true, each step is clickable. Clicking a step sets it as the active
   * (current) step. Only steps that were explicitly marked `complete` in the
   * original data remain complete — no steps are auto-promoted to complete
   * purely because they precede the clicked step.
   * @default false
   */
  interactive?: boolean;
  /**
   * Callback fired when the user clicks a step (only when `interactive` is true).
   * Receives the zero-based index and the original step definition.
   */
  onStepClick?: (index: number, step: StepperStep) => void;
  /** Additional CSS class */
  className?: string;
}

/* ── Helpers ─────────────────────────────────────────────────── */

/**
 * Determine the connector line state based on adjacent step states.
 */
function resolveLineState(
  leftState: StepperStepState,
  rightState: StepperStepState,
): StepperLineState {
  if (leftState === 'disabled' || rightState === 'disabled') return 'disabled';

  if (leftState === 'complete' && (rightState === 'complete' || rightState === 'active')) {
    return 'complete';
  }

  return 'to-do';
}

/**
 * Derive the display state for a step when the stepper is interactive.
 *
 * Rules:
 * - Disabled steps are always `disabled`.
 * - The clicked (active) step is `active`.
 * - Steps *before* the active step keep their original state — a step is only
 *   shown as `complete` if it was explicitly defined as such in the data.
 * - Steps *after* the active step fall back to `default` (future / not yet reached).
 */
function deriveDisplayState(
  step: StepperStep,
  index: number,
  activeIndex: number,
): StepperStepState {
  const original: StepperStepState = step.state ?? 'default';

  // Disabled steps are always locked
  if (original === 'disabled') return 'disabled';

  // The selected / current step
  if (index === activeIndex) return 'active';

  // Steps before the active one: only complete if they were actually complete
  if (index < activeIndex) {
    return original === 'complete' ? 'complete' : original;
  }

  // Steps after the active one are upcoming / not yet reached
  return 'default';
}

/* ── Component ───────────────────────────────────────────────────────────── */

export const Stepper: React.FC<StepperProps> = ({
  steps,
  size = 'default',
  showLabel = true,
  lineType = 'solid',
  lineStroke = '1-px',
  interactive = false,
  onStepClick,
  className,
}) => {
  // Initialise activeIndex from the first step with state === 'active'
  const initialActiveIndex = React.useMemo(
    () => steps.findIndex((s) => s.state === 'active'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [activeIndex, setActiveIndex] = React.useState<number>(initialActiveIndex);

  if (!steps || steps.length === 0) return null;

  const wrapCls = [styles.stepper, className].filter(Boolean).join(' ');
  const lineWrapCls = [styles.lineWrapper, styles[`lineWrapper--${size}`]].join(' ');

  const handleStepClick = (index: number) => {
    if (!interactive) return;
    setActiveIndex(index);
    onStepClick?.(index, steps[index]);
  };

  return (
    <div className={wrapCls} role="group" aria-label="Progress steps">
      {steps.map((step, index) => {
        const stepState: StepperStepState = interactive
          ? deriveDisplayState(step, index, activeIndex)
          : (step.state ?? 'default');

        const isLast = index === steps.length - 1;
        const isDisabled = stepState === 'disabled';

        const nextState: StepperStepState = !isLast
          ? (interactive
              ? deriveDisplayState(steps[index + 1], index + 1, activeIndex)
              : (steps[index + 1].state ?? 'default'))
          : 'default';

        const lineState = resolveLineState(stepState, nextState);

        return (
          <React.Fragment key={step.id}>
            {/* Individual step — single-element StepperSteps */}
            <div
              className={[
                styles.stepWrapper,
                interactive && !isDisabled ? styles.stepWrapperInteractive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={interactive && !isDisabled ? () => handleStepClick(index) : undefined}
              onKeyDown={
                interactive && !isDisabled
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleStepClick(index);
                      }
                    }
                  : undefined
              }
              role={interactive && !isDisabled ? 'button' : undefined}
              tabIndex={interactive && !isDisabled ? 0 : undefined}
              aria-label={
                interactive && !isDisabled
                  ? `Go to ${step.label ?? `step ${index + 1}`}`
                  : undefined
              }
              aria-current={stepState === 'active' ? 'step' : undefined}
              aria-disabled={isDisabled || undefined}
            >
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
