import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { StatusIcon } from './StatusIcon/StatusIcon';
import { Stepper } from './Stepper/Stepper';
import { BuildingBlocksDocs } from './BuildingBlocksDocs';
import type { StatusIconType, StatusIconStep, StatusIconSize } from './StatusIcon/StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Foundation/BuildingBlocks',
  component: StatusIcon,
  parameters: {
    docs: {
      page: () => <BuildingBlocksDocs />,
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'error', 'complete', 'locked', 'comments', 'notification', 'note', 'edit'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    step: {
      control: 'select',
      options: ['future', 'current', 'past'],
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
    },
    label: {
      control: 'boolean',
    },
    labelText: {
      control: 'text',
    },
  },
  args: {
    type: 'warning',
    size: 'default',
    step: 'current',
    state: 'default',
    label: true,
  },
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

export const Documentation: Story = {
  render: () => <BuildingBlocksDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default: Story = {};

export const AllTypes: Story = {
  render: () => {
    const types: StatusIconType[] = [
      'warning', 'error', 'complete', 'locked',
      'comments', 'notification', 'note', 'edit',
    ];
    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '20px' }}>
        {types.map((type) => (
          <StatusIcon key={type} type={type} step="current" size="default" labelText={type} />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const AllSteps: Story = {
  render: () => {
    const steps: StatusIconStep[] = ['future', 'current', 'past'];
    return (
      <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
        {steps.map((step) => (
          <StatusIcon key={step} type="warning" step={step} size="default" />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => {
    const sizes: StatusIconSize[] = ['small', 'default', 'large'];
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end', padding: '20px' }}>
        {sizes.map((size) => (
          <StatusIcon key={size} type="complete" step="current" size={size} labelText={size} />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const DisabledState: Story = {
  render: () => {
    const steps: StatusIconStep[] = ['future', 'current', 'past'];
    return (
      <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
        {steps.map((step) => (
          <StatusIcon key={step} type="warning" step={step} size="default" state="disabled" />
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const AllVariants: Story = {
  render: () => {
    const types: StatusIconType[] = [
      'warning', 'error', 'complete', 'locked',
      'comments', 'notification', 'note', 'edit',
    ];
    const steps: StatusIconStep[] = ['current', 'future', 'past'];
    return (
      <div style={{ padding: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `100px repeat(${steps.length}, 1fr)`,
            gap: '16px',
            alignItems: 'start',
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '12px', color: '#6d7280' }}>Type</div>
          {steps.map((s) => (
            <div
              key={s}
              style={{
                fontWeight: 600,
                fontSize: '12px',
                color: '#6d7280',
                textTransform: 'capitalize',
                textAlign: 'center',
              }}
            >
              {s}
            </div>
          ))}
          {types.map((type) => (
            <React.Fragment key={type}>
              <div
                style={{
                  fontSize: '13px',
                  color: '#374151',
                  textTransform: 'capitalize',
                  paddingTop: '8px',
                }}
              >
                {type}
              </div>
              {steps.map((step) => (
                <div key={`${type}-${step}`} style={{ display: 'flex', justifyContent: 'center' }}>
                  <StatusIcon type={type} step={step} size="default" label={false} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const HorizontalStepper: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Stepper
        size="default"
        steps={[
          { type: 'complete', step: 'past', label: 'Submitted' },
          { type: 'complete', step: 'past', label: 'Reviewed' },
          { type: 'warning', step: 'current', label: 'In Progress' },
          { type: 'notification', step: 'future', label: 'Approval' },
          { type: 'locked', step: 'future', label: 'Complete' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const VerticalStepper: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Stepper
        size="large"
        orientation="vertical"
        steps={[
          { type: 'complete', step: 'past', label: 'Requirements' },
          { type: 'complete', step: 'past', label: 'Design' },
          { type: 'edit', step: 'current', label: 'Development' },
          { type: 'notification', step: 'future', label: 'Testing' },
          { type: 'locked', step: 'future', label: 'Deployment' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
