import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from './Icon';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  argTypes: {
    icon: {
      description: 'The Material UI icon component to render.',
      options: ['Home', 'Search', 'Settings', 'Favorite', 'Mail', 'Delete', 'Add', 'CheckCircle'],
      mapping: {
        Home: HomeIcon,
        Search: SearchIcon,
        Settings: SettingsIcon,
        Favorite: FavoriteIcon,
        Mail: MailIcon,
        Delete: DeleteIcon,
        Add: AddIcon,
        CheckCircle: CheckCircleIcon,
      },
      control: { type: 'select' },
    },
    color: {
      description: 'The color of the icon, using the theme color palette.',
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning', 'action', 'disabled'],
    },
    size: {
      description: 'The size of the icon. Can be a predefined named size or a number in pixels.',
      control: 'select',
      options: ['2x-small', 'x-small', 'small', 'default', 'large', 'x-large', '2x-large', 'inherit'],
    },
  },
  args: {
    icon: HomeIcon,
    size: 'default',
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
    icon: HomeIcon,
  },
};

/**
 * Demonstrates the various predefined sizes available in the design system.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="2x-small" />
        <span style={{ fontSize: '0.75rem' }}>2x-small (10px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="x-small" />
        <span style={{ fontSize: '0.75rem' }}>x-small (12px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="small" />
        <span style={{ fontSize: '0.75rem' }}>small (14px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="default" />
        <span style={{ fontSize: '0.75rem' }}>default (16px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="large" />
        <span style={{ fontSize: '0.75rem' }}>large (18px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="x-large" />
        <span style={{ fontSize: '0.75rem' }}>x-large (24px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Icon {...args} size="2x-large" />
        <span style={{ fontSize: '0.75rem' }}>2x-large (48px)</span>
      </div>
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
      { name: 'Home', component: HomeIcon },
      { name: 'Search', component: SearchIcon },
      { name: 'Settings', component: SettingsIcon },
      { name: 'Favorite', component: FavoriteIcon },
      { name: 'Mail', component: MailIcon },
      { name: 'Delete', component: DeleteIcon },
      { name: 'Add', component: AddIcon },
      { name: 'Check', component: CheckCircleIcon },
      { name: 'Menu', component: MenuIcon },
      { name: 'Close', component: CloseIcon },
      { name: 'ArrowBack', component: ArrowBackIcon },
      { name: 'ArrowForward', component: ArrowForwardIcon },
      { name: 'Notifications', component: NotificationsIcon },
      { name: 'Person', component: PersonIcon },
      { name: 'Warning', component: WarningIcon },
      { name: 'Error', component: ErrorIcon },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 'var(--spacing-large)' }}>
        {commonIcons.map((icon) => (
          <div key={icon.name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 'var(--spacing-medium)',
            border: '1px solid var(--border-color-light)',
            borderRadius: 'var(--border-radius-medium)'
          }}>
            <Icon icon={icon.component} size="large" />
            <span style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{icon.name}</span>
          </div>
        ))}
      </div>
    );
  },
};
