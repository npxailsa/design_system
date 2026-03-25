import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const HiddenExample = () => (
  <div style={{ padding: 'var(--global-spacing-sizing-20px)', fontFamily: 'var(--brand-font-primary)' }}>
    <h1>Hidden Story</h1>
    <p>
      This story is prefixed with <code>hidden/</code> so it should be hidden
      from the Storybook sidebar. It can still be referenced by other components
      (like in tabs).
    </p>
  </div>
);

const meta: Meta = {
  id: 'hidden-example-id',
  title: 'hidden/HiddenExampleStory',
  component: HiddenExample,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
