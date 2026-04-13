import React from 'react';
import styles from './Stepper.module.css';
import { StatusIcon } from '../StatusIcon/StatusIcon';
import type { StatusIconType, StatusIconSize, StatusIconState } from '../StatusIcon/StatusIcon';
import { StepperLines } from '../StepperLines/StepperLines';
import type { StepperLineState } from '../StepperLines/StepperLines';

export type StepperOrientation = 'horizontal' | 'vertical';

export interface StepItem {
  /** The status type for this step */
  type?: StatusIconType;
  /** The step state */
  step: 'future' | 'current' | 'past';
  /** Optional label text */
  label?: string;
  /** Optional interaction state */
  state?: StatusIconState;
}

export interface StepperProps {
  /** Array of step definitions */
  steps: StepItem[];
  /** Size of all status icons */
  size?: StatusIconSize;
  /** Whether to show labels */
  showLabels?: boolean;
  /** Layout orientation */
  orientation?: StepperOrientation;
  /** Additional CSS class */
  className?: string;
}

/** Map a step's progress state to a StepperLines colour state. */
function resolveLineState(left: StepItem, right: StepItem): StepperLineState {
  if (left.state === 'disabled' || right.state === 'disabled') return 'disabled';
  if (left.step === 'past' && (right.step === 'past' || right.step === 'current')) return 'complete';
  return 'to-do';
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  size = 'default',
  showLabels = true,
  orientation = 'horizontal',
  className,
}) => {
  const sizeMap: Record<StatusIconSize, number> = {
    small: 22,
    default: 36,
    large: 48,
  };
  const circleSize = sizeMap[size];

  return (
    <div
      className={[
        styles.stepper,
        styles[`stepper--${orientation}`],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {steps.map((stepItem, index) => (
        <React.Fragment key={index}>
          <StatusIcon
            type={stepItem.type ?? 'warning'}
            size={size}
            step={stepItem.step}
            state={stepItem.state ?? 'default'}
            label={showLabels}
            labelText={stepItem.label}
          />
          {index < steps.length - 1 && (
            <div
              className={[
                styles.connector,
                styles[`connector--${orientation}`],
              ].join(' ')}
              style={{
                [orientation === 'horizontal' ? 'marginTop' : 'marginLeft']:
                  circleSize / 2 - 1,
              }}
            >
              <StepperLines
                type="solid"
                stroke="1-px"
                state={resolveLineState(stepItem, steps[index + 1])}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
