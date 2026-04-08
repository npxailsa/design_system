import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntroductionDocs } from './IntroductionDocs';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Documentation: Story = {
  render: () => <IntroductionDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};
