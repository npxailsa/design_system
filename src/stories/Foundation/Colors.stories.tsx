import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorsDocs } from './ColorsDocs';

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Documentation: Story = {
  render: () => <ColorsDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};
