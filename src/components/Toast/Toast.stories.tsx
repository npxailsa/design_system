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
  render: () => <ToastDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

/* ── Default (playground) ── */

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

export const Colours: Story = {
  name: 'Colour Variants',
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

/* ── Without description ── */

export const WithoutDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', maxWidth: 'var(--global-spacing-sizing-400px)' }}>
      {COLOURS.map((colour) => (
        <Toast key={colour} colour={colour} size="default" showSubtext={false} />
      ))}
    </div>
  ),
};

/* ── Without icons ── */

export const WithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', maxWidth: 'var(--global-spacing-sizing-400px)' }}>
      {COLOURS.map((colour) => (
        <Toast key={colour} colour={colour} size="default" showLeadingIcon={false} showTrailingIcon={false} />
      ))}
    </div>
  ),
};

/* ── Full variant matrix ── */

export const AllVariants: Story = {
  name: 'Full Matrix',
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

export const Interactive: Story = {
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
