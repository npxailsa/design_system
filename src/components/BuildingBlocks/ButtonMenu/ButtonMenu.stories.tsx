import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ButtonMenu } from './ButtonMenu';
import { ButtonMenuDocs } from './ButtonMenuDocs';
import type { ButtonMenuSize } from './ButtonMenu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ArchiveIcon from '@mui/icons-material/Archive';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const sampleItems = [
  { label: 'This is the top' },
  { label: 'This is the middle' },
  { label: 'This is the middle' },
  { label: 'This is the bottom' },
];

const meta: Meta<typeof ButtonMenu> = {
  title: 'Foundation/BuildingBlocks/Button',
  component: ButtonMenu,
  parameters: {
    docs: {
      page: () => <ButtonMenuDocs />,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Controls font size, padding, and container width',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch menu to 100% of parent container',
    },
  },
  args: {
    size: 'default',
    fullWidth: false,
    items: sampleItems,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  render: () => <ButtonMenuDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Default ── */
export const Default: Story = {
  args: {
    size: 'default',
    items: sampleItems,
  },
};

/* ── Sizes ── */
export const Sizes: Story = {
  render: () => {
    const sizes: ButtonMenuSize[] = ['small', 'default', 'large'];
    return (
      <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-32px)', alignItems: 'flex-start', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-20px)' }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', textTransform: 'capitalize' }}>
              {size}
            </span>
            <ButtonMenu size={size} items={sampleItems} />
          </div>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ── With Leading Icons ── */
export const WithLeadingIcons: Story = {
  render: () => (
    <div style={{ padding: 'var(--global-spacing-sizing-20px)' }}>
      <ButtonMenu
        size="default"
        items={[
          { label: 'Edit', leadingIcon: EditIcon },
          { label: 'Duplicate', leadingIcon: ContentCopyIcon },
          { label: 'Download', leadingIcon: DownloadIcon },
          { label: 'Archive', leadingIcon: ArchiveIcon },
          { label: 'Delete', leadingIcon: DeleteIcon },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── With Trailing Icons ── */
export const WithTrailingIcons: Story = {
  render: () => (
    <div style={{ padding: 'var(--global-spacing-sizing-20px)' }}>
      <ButtonMenu
        size="default"
        items={[
          { label: 'View options', trailingIcon: ChevronRightIcon },
          { label: 'Sort by', trailingIcon: ChevronRightIcon },
          { label: 'Group by', trailingIcon: ChevronRightIcon },
          { label: 'Filters' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Selected State ── */
export const SelectedItem: Story = {
  render: () => (
    <div style={{ padding: 'var(--global-spacing-sizing-20px)' }}>
      <ButtonMenu
        size="default"
        items={[
          { label: 'All items' },
          { label: 'Active', selected: true },
          { label: 'Archived' },
          { label: 'Draft' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Disabled Items ── */
export const DisabledItems: Story = {
  render: () => (
    <div style={{ padding: 'var(--global-spacing-sizing-20px)' }}>
      <ButtonMenu
        size="default"
        items={[
          { label: 'Edit' },
          { label: 'Duplicate', disabled: true },
          { label: 'Archive', disabled: true },
          { label: 'Delete' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Small Size ── */
export const Small: Story = {
  args: {
    size: 'small',
    items: sampleItems,
  },
};

/* ── Large Size ── */
export const Large: Story = {
  args: {
    size: 'large',
    items: sampleItems,
  },
};

/* ── All Variants ── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (12 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)', padding: 'var(--global-spacing-sizing-24px)' }}>
      {/* All 3 sizes */}
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-16px)', fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-medium)', color: 'var(--global-color-neutral-gray-700)' }}>
          Sizes
        </p>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {(['small', 'default', 'large'] as ButtonMenuSize[]).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-6px)' }}>
              <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)', textTransform: 'capitalize' }}>{size}</span>
              <ButtonMenu size={size} items={sampleItems} />
            </div>
          ))}
        </div>
      </div>

      {/* With icons */}
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-16px)', fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-medium)', color: 'var(--global-color-neutral-gray-700)' }}>
          With Icons
        </p>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-6px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)' }}>Leading</span>
            <ButtonMenu
              items={[
                { label: 'Edit', leadingIcon: EditIcon },
                { label: 'Duplicate', leadingIcon: ContentCopyIcon },
                { label: 'Download', leadingIcon: DownloadIcon },
                { label: 'Delete', leadingIcon: DeleteIcon },
              ]}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-6px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)' }}>Trailing</span>
            <ButtonMenu
              items={[
                { label: 'View options', trailingIcon: ChevronRightIcon },
                { label: 'Sort by', trailingIcon: ChevronRightIcon },
                { label: 'Group by', trailingIcon: ChevronRightIcon },
                { label: 'Filters' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <p style={{ margin: '0 0 var(--global-spacing-sizing-16px)', fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-medium)', color: 'var(--global-color-neutral-gray-700)' }}>
          States (Selected + Disabled)
        </p>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-6px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)' }}>Selected</span>
            <ButtonMenu
              items={[
                { label: 'All items' },
                { label: 'Active', selected: true },
                { label: 'Archived' },
                { label: 'Draft' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-6px)' }}>
            <span style={{ fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', fontFamily: 'var(--brand-font-primary)' }}>Disabled items</span>
            <ButtonMenu
              items={[
                { label: 'Edit' },
                { label: 'Duplicate', disabled: true },
                { label: 'Archive', disabled: true },
                { label: 'Delete' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
