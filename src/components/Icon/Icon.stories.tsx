import type { Meta, StoryObj } from '@storybook/react-vite';
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
  render: (args) => {
    const sizes: { name: IconSize; label: string }[] = [
      { name: '2x-small', label: '2x-small (10px)' },
      { name: 'x-small', label: 'x-small (12px)' },
      { name: 'small', label: 'small (14px)' },
      { name: 'default', label: 'default (16px)' },
      { name: 'large', label: 'large (18px)' },
      { name: 'x-large', label: 'x-large (24px)' },
      { name: '2x-large', label: '2x-large (48px)' },
    ];

    return (
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        {sizes.map((size) => (
          <div key={size.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Icon {...args} size={size.name} />
            <span style={{
              fontSize: 'var(--font-size-xs)',
              fontFamily: 'var(--font-family-secondary)',
              color: 'var(--color-text-muted)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              {size.label}
            </span>
          </div>
        ))}
      </div>
    );
  },
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
            borderRadius: 'var(--border-radius-medium)',
            backgroundColor: 'var(--color-background-light)'
          }}>
            <Icon icon={icon.component} size="large" color="primary" />
            <span style={{
              marginTop: '0.75rem',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'var(--font-family-secondary)',
              color: 'var(--color-text-muted)',
              fontWeight: 'var(--font-weight-medium)'
            }}>
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
