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
  /** Array of step definitions. Numbers are generated automatically. */
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
   * @default '1-px'
   */
  lineStroke?: StepperLineStroke;
  /**
   * When true, each step is clickable.
   *
   * Navigation rules:
   * - **Forward** (clicking a step after the current one): all steps between
   *   the old active step and the newly clicked step are marked `complete`.
   * - **Backward** (clicking a step before the current one): steps that were
   *   only dynamically completed revert to `default`; steps that were
   *   explicitly `complete` in the original data are preserved.
   * - `disabled` steps are never interactive.
   *
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
  /**
   * activeIndex  — which step is currently "active" (current).
   * completedSet — indices that are shown as `complete`.
   *
   * On mount we seed completedSet from any steps that are already marked
   * `complete` in the prop data so the initial visual matches the data.
   */
  const [activeIndex, setActiveIndex] = React.useState<number>(() =>
    steps.findIndex((s) => s.state === 'active'),
  );

  const [completedSet, setCompletedSet] = React.useState<ReadonlySet<number>>(() => {
    const s = new Set<number>();
    steps.forEach((step, i) => {
      if (step.state === 'complete') s.add(i);
    });
    return s;
  });

  if (!steps || steps.length === 0) return null;

  /**
   * Compute the display state for a single step when the stepper is interactive.
   *
   * Priority order:
   *  1. Disabled (from prop data) → always `disabled`
   *  2. Currently active index   → `active`
   *  3. In the completed set     → `complete`
   *  4. Everything else          → `default`
   */
  const getDisplayState = (step: StepperStep, index: number): StepperStepState => {
    if (!interactive) return step.state ?? 'default';
    if (step.state === 'disabled') return 'disabled';
    if (index === activeIndex) return 'active';
    if (completedSet.has(index)) return 'complete';
    return 'default';
  };

  const handleStepClick = (clickedIdx: number) => {
    if (!interactive) return;
    if (steps[clickedIdx]?.state === 'disabled') return;
    if (clickedIdx === activeIndex) return;

    setCompletedSet((prev) => {
      const next = new Set(prev);

      if (clickedIdx > activeIndex && activeIndex >= 0) {
        // ── Forward navigation ─────────────────────────────────────────────
        // All steps from the old active up to (but not including) the new
        // active become complete.
        for (let i = activeIndex; i < clickedIdx; i++) {
          if (steps[i]?.state !== 'disabled') {
            next.add(i);
          }
        }
      } else if (clickedIdx < activeIndex) {
        // ── Backward navigation ────────────────────────────────────────────
        // Steps between the new active and the old active that were only
        // *dynamically* completed should revert to default. Steps that were
        // explicitly `complete` in the original prop data are preserved.
        for (let i = clickedIdx + 1; i <= activeIndex; i++) {
          if (steps[i]?.state !== 'complete') {
            next.delete(i);
          }
        }
      }

      // The newly active step is no longer complete — it is now `active`.
      next.delete(clickedIdx);

      return next;
    });

    setActiveIndex(clickedIdx);
    onStepClick?.(clickedIdx, steps[clickedIdx]);
  };

  const wrapCls = [styles.stepper, className].filter(Boolean).join(' ');
  const lineWrapCls = [styles.lineWrapper, styles[`lineWrapper--${size}`]].join(' ');

  return (
    <div className={wrapCls} role="group" aria-label="Progress steps">
      {steps.map((step, index) => {
        const stepState = getDisplayState(step, index);
        const isLast = index === steps.length - 1;
        const isDisabled = step.state === 'disabled';

        const nextStepState = !isLast ? getDisplayState(steps[index + 1], index + 1) : 'default';
        const lineState = resolveLineState(stepState, nextStepState);

        return (
          <React.Fragment key={step.id}>
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
