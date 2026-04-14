import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Toast } from './Toast';
import { ToastDocs } from './ToastDocs';
import { ToastProvider, useToast } from './ToastContext';
import type { ToastColour, ToastSize } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    docs: {
      page: () => <ToastDocs />,
    },
  },
  argTypes: {
    colour: {
      control: 'select',
      options: ['default', 'warning', 'light-gray', 'navy', 'success', 'error', 'purple', 'white'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    showSubtext: { control: 'boolean' },
    visible: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/* ── Documentation ── */

export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ToastDocs />,
  parameters: { controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

export const Playground: Story = {
  name: 'Playground',
  args: { colour: 'default', size: 'default', title: 'Toast Notification', description: 'Description text', showLeadingIcon: true, showTrailingIcon: true, showSubtext: true, visible: true },
};

export const Default: Story = {
  args: {
    colour: 'default',
    size: 'default',
    title: 'This is a toast notification',
    description: 'This is a description for a toast notification',
    showLeadingIcon: true,
    showTrailingIcon: true,
    showSubtext: true,
    visible: true,
  },
};

/* ── Colour variants ── */

const COLOURS: ToastColour[] = [
  'default',
  'warning',
  'light-gray',
  'navy',
  'success',
  'error',
  'purple',
  'white',
];

const SIZES: ToastSize[] = ['small', 'default', 'large'];

export const StatusColours: Story = {
  name: 'Status / Colour Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', maxWidth: 'var(--global-spacing-sizing-400px)' }}>
      {COLOURS.map((colour) => (
        <Toast key={colour} colour={colour} size="default" />
      ))}
    </div>
  ),
};

/* ── Sizes ── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', maxWidth: 'var(--global-spacing-sizing-400px)' }}>
      {SIZES.map((size) => (
        <Toast key={size} size={size} colour="default" />
      ))}
    </div>
  ),
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: '480px' }}>
      <Toast colour="default" size="default" title="Full Toast" description="With all elements" showLeadingIcon showTrailingIcon showSubtext visible />
      <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '4px 8px', borderRadius: '4px' }}>--toast-bg / --toast-border / --toast-icon / --toast-title-size-default</code>
      <Toast colour="error" size="default" title="No icons" showLeadingIcon={false} showTrailingIcon={false} visible />
      <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '4px 8px', borderRadius: '4px' }}>--toast-error-bg / --toast-error-icon</code>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', maxWidth: '480px' }}>
      {(['default', 'success', 'warning', 'error'] as ToastColour[]).map(colour => (
        <Toast key={colour} colour={colour} size="default" title={`${colour.charAt(0).toUpperCase() + colour.slice(1)} state`} description="Toast notification" showLeadingIcon showTrailingIcon visible />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Full variant matrix ── */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (24 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {SIZES.map((size) => (
        <div key={size}>
          <h3 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--global-color-neutral-gray-500)', marginBottom: 'var(--global-spacing-sizing-8px)' }}>
            {size}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', maxWidth: 'var(--global-spacing-sizing-400px)' }}>
            {COLOURS.map((colour) => (
              <Toast key={colour} colour={colour} size={size} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/* ── Interactive (with ToastProvider) ── */

const LiveToastDemo = () => {
  const { toast, dismissAll } = useToast();
  const [lastId, setLastId] = useState<string | null>(null);

  const buttonStyle: React.CSSProperties = {
    fontFamily: 'var(--brand-font-primary)',
    fontSize: 'var(--global-type-size-primary-label-sm)',
    padding: 'var(--global-spacing-sizing-8px) var(--global-spacing-sizing-12px)',
    border: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-300)',
    borderRadius: 'var(--global-spacing-radius-6px)',
    background: 'var(--global-color-base-white)',
    cursor: 'pointer',
  };

  const showToast = (colour: ToastColour) => {
    const id = toast({
      colour,
      size: 'default',
      title: `${colour.charAt(0).toUpperCase() + colour.slice(1)} notification`,
      description: 'This toast will dismiss automatically after 4 seconds.',
    });
    setLastId(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)', margin: 0 }}>
        Click a button to show a toast notification. Toasts appear at the bottom-right of the screen and auto-dismiss after 4 seconds.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)' }}>
        {COLOURS.map((colour) => (
          <button key={colour} style={buttonStyle} onClick={() => showToast(colour)}>
            {colour}
          </button>
        ))}
        <button
          style={{ ...buttonStyle, borderColor: 'var(--global-color-status-red)', color: 'var(--global-color-status-red)' }}
          onClick={dismissAll}
        >
          Dismiss all
        </button>
      </div>
      {lastId && (
        <p style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', margin: 0 }}>
          Last toast id: {lastId}
        </p>
      )}
    </div>
  );
};

export const StatusInteractive: Story = {
  name: 'Status / Interactive (Live Demo)',
  render: () => (
    <ToastProvider position="bottom-right" defaultDuration={4000}>
      <LiveToastDemo />
    </ToastProvider>
  ),
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};
