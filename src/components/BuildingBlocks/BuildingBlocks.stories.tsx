import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { StatusIcon } from './StatusIcon/StatusIcon';
import { Stepper } from './Stepper/Stepper';
import { BuildingBlocksDocs } from './BuildingBlocksDocs';
import type { StatusIconType, StatusIconStep, StatusIconSize } from './StatusIcon/StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Foundation/BuildingBlocks/StatusStepper',
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
  name: 'Documentation',
  render: () => <BuildingBlocksDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = { name: 'Playground' };

export const Default: Story = { name: 'Default' };

export const StatusTypes: Story = {
  name: 'Status / All Types',
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

export const StatusSteps: Story = {
  name: 'Status / Step States',
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

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
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

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      {[['Warning', 'warning'], ['Error', 'error'], ['Complete', 'complete'], ['Locked', 'locked']].map(([lbl, type]) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          <StatusIcon type={type as StatusIconType} step="current" size="default" />
          <span style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--brand-font-primary)', color: 'var(--global-color-neutral-gray-600)' }}>{lbl}</span>
          <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>--status-icon-inner-default</code>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
      {(['future', 'current', 'past'] as StatusIconStep[]).map(step => (
        <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
          <StatusIcon type="complete" step={step} size="default" />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{step}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (72 variants)',
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
