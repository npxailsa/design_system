import type { Meta, StoryObj } from '@storybook/react-vite';
import Label from './Label';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';

const meta: Meta<typeof Label> = {
  title: 'Foundations/Label',
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
      options: ['archivo', 'ginger'],
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
        <h4 style={{ margin: '0 0 10px 0' }}>Archivo (Primary)</h4>
        <Label font="archivo">The quick brown fox jumps over the lazy dog</Label>
      </div>
      <div>
        <h4 style={{ margin: '0 0 10px 0' }}>Ginger Pro (Secondary)</h4>
        <Label font="ginger">The quick brown fox jumps over the lazy dog</Label>
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

export const VariantMatrix: Story = {
  render: () => {
    const sizes = ['large', 'default', 'small', 'x-small', '2x-small'] as const;
    const weights = ['bold', 'medium', 'light', 'thin'] as const;
    const alignments = ['left', 'centre', 'right'] as const;
    const dropdowns = [false, true] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {weights.map((weight) => (
          <div key={weight}>
            <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', textTransform: 'capitalize' }}>
              Weight: {weight}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {alignments.map((align) => (
                <div key={align} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <h4 style={{ color: '#666', textTransform: 'capitalize' }}>Align: {align}</h4>
                  {dropdowns.map((isDropdown) => (
                    <div key={`${isDropdown}`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <h5 style={{ margin: 0, fontSize: '12px', color: '#999' }}>
                        Dropdown: {isDropdown ? 'True' : 'False'}
                      </h5>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px dashed #ccc', padding: '10px' }}>
                        {sizes.map((size) => (
                          <Label
                            key={`${weight}-${align}-${isDropdown}-${size}`}
                            size={size}
                            weight={weight}
                            align={align}
                            dropdown={isDropdown}
                          >
                            {size} Label
                          </Label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
