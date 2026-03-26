import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tag } from './Tag';
import { TagDocs } from './TagDocs';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const meta: Meta<typeof Tag> = {
  title: 'Foundation/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <TagDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    colour: {
      control: 'select',
      options: ['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
    },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Star', 'Tag'],
      mapping: {
        None: undefined,
        Person: PersonIcon,
        Check: CheckIcon,
        Star: StarBorderIcon,
        Tag: LocalOfferOutlinedIcon,
      },
    },
    showLeadingIcon: { control: 'boolean' },
    showRemove: { control: 'boolean' },
    showCount: { control: 'boolean' },
    count: { control: 'number' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * Full documentation page for the Tag component.
 */
export const Documentation: Story = {
  render: () => <TagDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

/**
 * Default Tag — the most common usage.
 */
export const Default: Story = {
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled',
  },
};

/**
 * All ten colour variants side by side (filled style).
 */
export const ColourVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(
        (colour) => (
          <Tag key={colour} colour={colour} label={colour} />
        )
      )}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All ten colour variants in outline style.
 */
export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(
        (colour) => (
          <Tag key={colour} colour={colour} variant="outline" label={colour} />
        )
      )}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All three sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Tag size="small" colour="blue" label="Small" />
      <Tag size="default" colour="blue" label="Default" />
      <Tag size="large" colour="blue" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Tags with leading icons.
 */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      <Tag colour="blue" label="Person" showLeadingIcon leadingIcon={PersonIcon} />
      <Tag colour="green" label="Verified" showLeadingIcon leadingIcon={CheckIcon} />
      <Tag colour="purple" label="Featured" showLeadingIcon leadingIcon={StarBorderIcon} />
      <Tag colour="yellow" label="Tagged" size="large" showLeadingIcon leadingIcon={LocalOfferOutlinedIcon} />
      <Tag colour="info" size="small" label="Small icon" showLeadingIcon leadingIcon={PersonIcon} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Tags with numeric count badges.
 */
export const WithCount: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      <Tag colour="blue" label="Issues" showCount count={12} />
      <Tag colour="red" label="Errors" showCount count={3} />
      <Tag colour="yellow" label="Warnings" showCount count={7} />
      <Tag colour="green" label="Passed" showCount count={99} />
      <Tag colour="dark" label="Total" showCount count={114} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Removable tags with the dismiss × button.
 */
export const Removable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      <Tag colour="blue" label="Category" showRemove />
      <Tag colour="seafoam" label="Topic" showRemove />
      <Tag colour="purple" label="Label" showRemove />
      <Tag colour="red" label="Remove me" showRemove />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Selected state — active/pressed tags.
 */
export const SelectedState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '16px' }}>
      {(['blue', 'green', 'purple', 'red', 'info', 'default'] as const).map((colour) => (
        <div key={colour} style={{ display: 'flex', gap: '6px' }}>
          <Tag colour={colour} label="Off" />
          <Tag colour={colour} label="On" selected />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All sizes × all colours matrix.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' }}>
      {(['small', 'default', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-family-secondary)', fontSize: '11px', color: '#6d7280', minWidth: '52px', flexShrink: 0 }}>{size}</span>
          {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(
            (colour) => (
              <Tag key={colour} size={size} colour={colour} label="Label" />
            )
          )}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};
