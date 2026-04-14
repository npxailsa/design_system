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
  title: 'Atoms/Buttons/Primary Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: { page: () => <ButtonDocs /> },
  },
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline'] },
    size: { control: 'select', options: ['extra-small', 'small', 'default', 'large'] },
    label: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'Person', 'Check', 'Add', 'Download'],
      mapping: { None: undefined, Person: PersonIcon, Check: CheckIcon, Add: AddIcon, Download: DownloadIcon },
    },
    showLeadingIcon: { control: 'boolean' },
    trailingIcon: {
      control: 'select',
      options: ['None', 'ArrowForward', 'Check', 'Add'],
      mapping: { None: undefined, ArrowForward: ArrowForwardIcon, Check: CheckIcon, Add: AddIcon },
    },
    showTrailingIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const ROW: React.CSSProperties = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '16px' };
const LABEL = (text: string): React.ReactElement => (
  <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--global-color-neutral-gray-500)', display: 'block', marginBottom: '8px' }}>
    {text}
  </span>
);

/* ─────────────────────────────────────────────────────────────────────────────
   1. Documentation
   ───────────────────────────────────────────────────────────────────────────── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ButtonDocs />,
  parameters: { layout: 'fullscreen', controls: { disable: true }, actions: { disable: true }, chromatic: { disableSnapshot: true } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   2. Playground
   ───────────────────────────────────────────────────────────────────────────── */
export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: false,
    disabled: false,
    loading: false,
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   3. Default
   ───────────────────────────────────────────────────────────────────────────── */
export const Default: Story = {
  name: 'Default',
  args: { label: 'Label', variant: 'filled', size: 'default' },
};

/* ─────────────────────────────────────────────────────────────────────────────
   4. Sizes
   ───────────────────────────────────────────────────────────────────────────── */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={ROW}>
      <Button size="extra-small" label="Extra Small" />
      <Button size="small" label="Small" />
      <Button size="default" label="Default" />
      <Button size="large" label="Large" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   5. Status stories
   ───────────────────────────────────────────────────────────────────────────── */
export const StatusFilled: Story = {
  name: 'Status / Filled',
  render: () => (
    <div style={{ padding: '16px' }}>
      {LABEL('Filled — all sizes')}
      <div style={ROW}>
        <Button variant="filled" size="extra-small" label="XS" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="small" label="Small" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="default" label="Default" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="large" label="Large" showLeadingIcon leadingIcon={PersonIcon} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusOutline: Story = {
  name: 'Status / Outline',
  render: () => (
    <div style={{ padding: '16px' }}>
      {LABEL('Outline — all sizes')}
      <div style={ROW}>
        <Button variant="outline" size="extra-small" label="XS" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="small" label="Small" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="default" label="Default" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="large" label="Large" showLeadingIcon leadingIcon={PersonIcon} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusIconOnly: Story = {
  name: 'Status / Icon Only',
  render: () => (
    <div style={ROW}>
      <Button iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <Button iconOnly variant="outline" leadingIcon={PersonIcon} ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusLoading: Story = {
  name: 'Status / Loading',
  render: () => (
    <div style={ROW}>
      <Button label="Loading…" loading size="small" />
      <Button label="Loading…" loading />
      <Button label="Loading…" loading size="large" />
      <Button label="Loading…" variant="outline" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusDisabled: Story = {
  name: 'Status / Disabled',
  render: () => (
    <div style={ROW}>
      <Button label="Disabled" disabled />
      <Button label="Disabled" variant="outline" disabled />
      <Button label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   6. Component Breakdown
   ───────────────────────────────────────────────────────────────────────────── */
export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => {
    const Token = ({ name }: { name: string }) => (
      <code style={{ display: 'block', fontFamily: 'var(--brand-font-secondary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-500)', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px', marginTop: '4px' }}>
        {name}
      </code>
    );
    const Part = ({ label, children }: { label: string; token: string; children: React.ReactNode }) => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
        <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-600)', fontWeight: 600 }}>{label}</span>
        {children}
      </div>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '600px' }}>
        <div>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontWeight: 600, fontSize: '13px', color: 'var(--global-color-neutral-gray-800)' }}>Anatomy</span>
          <div style={{ marginTop: '16px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Part label="Label" token="--btn-font-size-default"><Button label="Label" /><Token name="--btn-font-size-default / --btn-label-color" /></Part>
            <Part label="Leading Icon" token="--btn-icon-size-default"><Button showLeadingIcon leadingIcon={PersonIcon} label="With Icon" /><Token name="--btn-icon-size-default" /></Part>
            <Part label="Trailing Icon" token="--btn-icon-size-default"><Button showTrailingIcon trailingIcon={ArrowForwardIcon} label="With Trailing" /><Token name="--btn-icon-size-default" /></Part>
            <Part label="Icon Only" token="--btn-icon-only-size-default"><Button iconOnly leadingIcon={PersonIcon} ariaLabel="Icon Only" /><Token name="--btn-icon-only-size-default" /></Part>
            <Part label="Loading Spinner" token="--btn-icon-size-default"><Button loading label="Loading" /><Token name="--btn-spinner (inherits icon size)" /></Part>
          </div>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--brand-font-primary)', fontWeight: 600, fontSize: '13px', color: 'var(--global-color-neutral-gray-800)' }}>Design Token References</span>
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              ['Primary Filled Default', '--btn-bg / --btn-label-color / --btn-border-radius'],
              ['Primary Outline Default', '--btn-outline-bg / --btn-outline-border / --btn-border-radius'],
              ['Height (default)', '--btn-height (44px)'],
              ['Height (small)', '--btn-height-small (34px)'],
              ['Height (large)', '--btn-height-large (52px)'],
              ['Height (extra-small)', '--btn-height-extra-small (28px)'],
            ].map(([label, token]) => (
              <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-700)', minWidth: '180px' }}>{label}</span>
                <code style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', background: 'var(--global-color-neutral-gray-100)', padding: '2px 6px', borderRadius: '4px' }}>{token}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   7. All Interactive States
   ───────────────────────────────────────────────────────────────────────────── */
export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {LABEL('Filled variant — interactive states')}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="filled" label="Default" />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>default</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="filled" label="Loading" loading />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>loading</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="filled" label="Disabled" disabled />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>disabled</span>
        </div>
      </div>
      {LABEL('Outline variant — interactive states')}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="outline" label="Default" />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>default</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="outline" label="Loading" loading />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>loading</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Button variant="outline" label="Disabled" disabled />
          <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>disabled</span>
        </div>
      </div>
      <p style={{ fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)', margin: 0 }}>
        Note: hover and focus states are applied via CSS — interact with the buttons above to see them live.
      </p>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   8. Full Design Matrix
   ───────────────────────────────────────────────────────────────────────────── */
export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix (32 variants)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      {(['filled', 'outline'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {LABEL(variant)}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            <Button variant={variant} label="XS" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
            <Button variant={variant} iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
            <Button variant={variant} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <Button variant={variant} label="Disabled" disabled />
            <Button variant={variant} label="Loading" loading />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { layout: 'padded', controls: { disable: true } },
};
