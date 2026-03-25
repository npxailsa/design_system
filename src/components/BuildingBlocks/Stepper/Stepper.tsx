import React from 'react';
import styles from './Stepper.module.css';
import { StatusIcon } from '../StatusIcon/StatusIcon';
import type { StatusIconType, StatusIconSize, StatusIconState } from '../StatusIcon/StatusIcon';

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
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
