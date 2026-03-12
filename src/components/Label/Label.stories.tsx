import type { Meta, StoryObj } from '@storybook/react-vite';
import Label from './Label';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small', 'x-small', '2x-small'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'medium', 'light', 'thin'],
    },
    font: {
      control: 'select',
      options: ['ginger', 'calibri'],
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
    showLeadingIcon: {
      control: 'boolean',
    },
    showTrailingIcon: {
      control: 'boolean',
    },
    dropdown: {
      control: 'boolean',
    },
    showSplit: {
      control: 'boolean',
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

export const Fonts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Ginger Pro (Primary)</h4>
        <Label font="ginger">The quick brown fox jumps over the lazy dog</Label>
      </div>
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Calibri (Secondary)</h4>
        <Label font="calibri">The quick brown fox jumps over the lazy dog</Label>
      </div>
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

export const DropdownMatrix: Story = {
  render: () => {
    const sizes = ['large', 'default', 'small', 'x-small', '2x-small'] as const;
    const weights = ['bold', 'medium', 'light', 'thin'] as const;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {weights.map((weight) => (
          <div key={weight} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', textTransform: 'capitalize' }}>{weight} Dropdown</h4>
            {sizes.map((size) => (
              <Label key={`${weight}-${size}`} size={size} weight={weight} dropdown showSplit>
                {size} {weight}
              </Label>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const IconToggles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Label showLeadingIcon={true} showTrailingIcon={true}>Both Icons</Label>
      <Label showLeadingIcon={true} showTrailingIcon={false}>Leading Only</Label>
      <Label showLeadingIcon={false} showTrailingIcon={true}>Trailing Only</Label>
      <Label showLeadingIcon={false} showTrailingIcon={false}>No Icons</Label>
      <Label dropdown showSplit={true}>With Split</Label>
      <Label dropdown showSplit={false}>Dropdown No Split</Label>
    </div>
  ),
};
