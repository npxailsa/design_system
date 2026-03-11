import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small', 'x-small', '2x-small'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'medium', 'light', 'thin'],
    },
    align: {
      control: 'select',
      options: ['left', 'centre', 'right'],
    },
    leadingIcon: {
      control: 'select',
      options: ['Person', 'Mail', 'Settings', 'None'],
      mapping: {
        Person: PersonIcon,
        Mail: MailIcon,
        Settings: SettingsIcon,
        None: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
      <Label size="small">Small Label</Label>
      <Label size="x-small">X-Small Label</Label>
      <Label size="2x-small">2X-Small Label</Label>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Label weight="bold">Bold Weight</Label>
      <Label weight="medium">Medium Weight</Label>
      <Label weight="light">Light Weight</Label>
      <Label weight="thin">Thin Weight</Label>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px', border: '1px solid #eee', padding: '10px' }}>
      <Label align="left">Left Aligned</Label>
      <Label align="centre">Centre Aligned</Label>
      <Label align="right">Right Aligned</Label>
    </div>
  ),
};

export const WithDropdown: Story = {
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold',
  },
};

export const FullMatrix: Story = {
  render: () => {
    const sizes = ['large', 'default', 'small', 'x-small', '2x-small'] as const;
    const weights = ['bold', 'medium', 'light', 'thin'] as const;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {weights.map((weight) => (
          <div key={weight} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', textTransform: 'capitalize' }}>{weight}</h4>
            {sizes.map((size) => (
              <Label key={`${weight}-${size}`} size={size} weight={weight}>
                {size} {weight}
              </Label>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
