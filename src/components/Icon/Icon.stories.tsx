import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from './Icon';
import * as Icons from '@mui/icons-material';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'The Material UI icon component to render.',
      options: ['Home', 'Search', 'Settings', 'Favorite', 'Mail', 'Delete', 'Add', 'CheckCircle'],
      mapping: {
        Home: Icons.Home,
        Search: Icons.Search,
        Settings: Icons.Settings,
        Favorite: Icons.Favorite,
        Mail: Icons.Mail,
        Delete: Icons.Delete,
        Add: Icons.Add,
        CheckCircle: Icons.CheckCircle,
      },
      control: { type: 'select' },
    },
    color: {
      description: 'The color of the icon, using the theme color palette.',
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning', 'action', 'disabled'],
    },
    size: {
      description: 'The size of the icon. Can be a string keyword or a number in pixels.',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    icon: Icons.Home,
    size: 'medium',
    color: 'inherit',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * The default icon story demonstrating the selectable icon prop.
 */
export const Default: Story = {
  args: {
    icon: Icons.Home,
  },
};

/**
 * Demonstrates the various predefined sizes available.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Icon {...args} size="small" />
      <Icon {...args} size="medium" />
      <Icon {...args} size="large" />
      <Icon {...args} size={48} />
      <Icon {...args} size={64} />
    </div>
  ),
};

/**
 * Demonstrates the icons using Material UI theme colors.
 */
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Icon {...args} color="primary" />
      <Icon {...args} color="secondary" />
      <Icon {...args} color="error" />
      <Icon {...args} color="warning" />
      <Icon {...args} color="info" />
      <Icon {...args} color="success" />
    </div>
  ),
};

/**
 * A gallery of commonly used icons in our design system.
 */
export const Gallery: Story = {
  render: () => {
    const commonIcons = [
      { name: 'Home', component: Icons.Home },
      { name: 'Search', component: Icons.Search },
      { name: 'Settings', component: Icons.Settings },
      { name: 'Favorite', component: Icons.Favorite },
      { name: 'Mail', component: Icons.Mail },
      { name: 'Delete', component: Icons.Delete },
      { name: 'Add', component: Icons.Add },
      { name: 'Check', component: Icons.CheckCircle },
      { name: 'Menu', component: Icons.Menu },
      { name: 'Close', component: Icons.Close },
      { name: 'ArrowBack', component: Icons.ArrowBack },
      { name: 'ArrowForward', component: Icons.ArrowForward },
      { name: 'Notifications', component: Icons.Notifications },
      { name: 'Person', component: Icons.Person },
      { name: 'Warning', component: Icons.Warning },
      { name: 'Error', component: Icons.Error },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '2rem' }}>
        {commonIcons.map((icon) => (
          <div key={icon.name} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '1rem', 
            border: '1px solid #eee', 
            borderRadius: '8px' 
          }}>
            <Icon icon={icon.component} size="large" />
            <span style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#666' }}>{icon.name}</span>
          </div>
        ))}
      </div>
    );
  },
};
