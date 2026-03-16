import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Icon, { IconSize } from './Icon';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import CloudIcon from '@mui/icons-material/Cloud';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  argTypes: {
    icon: {
      description: 'The Material UI icon component to render.',
      options: ['Home', 'Search', 'Settings', 'Favorite', 'Mail', 'Delete', 'Add', 'CheckCircle', 'Menu', 'Close', 'Person', 'Warning', 'Info', 'Star', 'Edit'],
      mapping: {
        Home: HomeIcon,
        Search: SearchIcon,
        Settings: SettingsIcon,
        Favorite: FavoriteIcon,
        Mail: MailIcon,
        Delete: DeleteIcon,
        Add: AddIcon,
        CheckCircle: CheckCircleIcon,
        Menu: MenuIcon,
        Close: CloseIcon,
        Person: PersonIcon,
        Warning: WarningIcon,
        Info: InfoIcon,
        Star: StarIcon,
        Edit: EditIcon,
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
      { name: 'CheckCircle', component: CheckCircleIcon },
      { name: 'Menu', component: MenuIcon },
      { name: 'Close', component: CloseIcon },
      { name: 'ArrowBack', component: ArrowBackIcon },
      { name: 'ArrowForward', component: ArrowForwardIcon },
      { name: 'Notifications', component: NotificationsIcon },
      { name: 'Person', component: PersonIcon },
      { name: 'Warning', component: WarningIcon },
      { name: 'Error', component: ErrorIcon },
      { name: 'AccountCircle', component: AccountCircleIcon },
      { name: 'ShoppingCart', component: ShoppingCartIcon },
      { name: 'Email', component: EmailIcon },
      { name: 'Star', component: StarIcon },
      { name: 'Share', component: ShareIcon },
      { name: 'PlayArrow', component: PlayArrowIcon },
      { name: 'Pause', component: PauseIcon },
      { name: 'Stop', component: StopIcon },
      { name: 'SkipNext', component: SkipNextIcon },
      { name: 'SkipPrevious', component: SkipPreviousIcon },
      { name: 'Refresh', component: RefreshIcon },
      { name: 'Edit', component: EditIcon },
      { name: 'Visibility', component: VisibilityIcon },
      { name: 'VisibilityOff', component: VisibilityOffIcon },
      { name: 'Lock', component: LockIcon },
      { name: 'LockOpen', component: LockOpenIcon },
      { name: 'Help', component: HelpIcon },
      { name: 'Info', component: InfoIcon },
      { name: 'Check', component: CheckIcon },
      { name: 'Cancel', component: CancelIcon },
      { name: 'Download', component: DownloadIcon },
      { name: 'Upload', component: UploadIcon },
      { name: 'Cloud', component: CloudIcon },
      { name: 'CameraAlt', component: CameraAltIcon },
      { name: 'Image', component: ImageIcon },
      { name: 'VideoCall', component: VideoCallIcon },
      { name: 'Mic', component: MicIcon },
      { name: 'MicOff', component: MicOffIcon },
      { name: 'VolumeUp', component: VolumeUpIcon },
      { name: 'VolumeOff', component: VolumeOffIcon },
      { name: 'Bluetooth', component: BluetoothIcon },
      { name: 'Wifi', component: WifiIcon },
      { name: 'BatteryFull', component: BatteryFullIcon },
      { name: 'BluetoothConnected', component: BluetoothConnectedIcon },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--spacing-large)' }}>
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
              fontWeight: 'var(--font-weight-medium)',
              textAlign: 'center'
            }}>
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
