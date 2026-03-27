import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from './Button';
import { ButtonDocs } from './ButtonDocs';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Primary Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <ButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    label: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Add', 'Download'],
      mapping: {
        None: undefined,
        Person: PersonIcon,
        Check: CheckIcon,
        Add: AddIcon,
        Download: DownloadIcon,
      },
    },
    showLeadingIcon: { control: 'boolean' },
    trailingIcon: {
      control: 'select',
      options: ['None', 'ArrowForward', 'Check', 'Add'],
      mapping: {
        None: undefined,
        ArrowForward: ArrowForwardIcon,
        Check: CheckIcon,
        Add: AddIcon,
      },
    },
    showTrailingIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Full documentation page for the Button component.
 */
export const Documentation: Story = {
  render: () => <ButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
};

/**
 * Default button — filled variant with label.
 */
export const Default: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default',
  },
};

/**
 * Both variants side by side.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
      <Button variant="filled" label="Filled" />
      <Button variant="outline" label="Outline" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * All three sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
      <Button size="small" label="Small" />
      <Button size="default" label="Default" />
      <Button size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with a leading icon.
 */
export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} />
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with a trailing icon.
 */
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Buttons with both leading and trailing icons.
 */
export const WithBothIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Button
        label="Label"
        showLeadingIcon
        leadingIcon={PersonIcon}
        showTrailingIcon
        trailingIcon={ArrowForwardIcon}
        size="small"
      />
      <Button
        label="Label"
        showLeadingIcon
        leadingIcon={PersonIcon}
        showTrailingIcon
        trailingIcon={ArrowForwardIcon}
      />
      <Button
        label="Label"
        showLeadingIcon
        leadingIcon={PersonIcon}
        showTrailingIcon
        trailingIcon={ArrowForwardIcon}
        size="large"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Icon-only buttons — circular, no label.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px' }}>
      <Button iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <Button iconOnly variant="outline" leadingIcon={PersonIcon} ariaLabel="User" />
      <Button iconOnly variant="ghost" leadingIcon={PersonIcon} ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Loading state — spinner replaces the leading icon.
 */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Button label="Loading…" loading size="small" />
      <Button label="Loading…" loading />
      <Button label="Loading…" loading size="large" />
      <Button label="Loading…" variant="outline" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
      <Button label="Disabled" disabled />
      <Button label="Disabled" variant="outline" disabled />
      <Button label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <Button label="Disabled" variant="outline" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Full variant, size, and state matrix.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['filled', 'outline'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {variant}
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
            <Button variant={variant} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <Button variant={variant} label="Disabled" disabled />
            <Button variant={variant} label="Loading" loading />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
};
