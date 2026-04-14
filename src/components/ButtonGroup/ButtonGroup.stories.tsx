import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDocs } from './ButtonGroupDocs';
import type { ButtonGroupVariant, ButtonGroupSize, ButtonGroupLayout, ButtonGroupSpecial } from './ButtonGroup';

const ALL_VARIANTS: ButtonGroupVariant[] = ['primary', 'secondary', 'tertiary', 'ghost'];
const ALL_SIZES: ButtonGroupSize[] = ['lg', 'md', 'sm', 'xs'];
const ALL_LAYOUTS: ButtonGroupLayout[] = ['joined', 'separate'];
const ALL_SPECIALS: ButtonGroupSpecial[] = ['default', 'alt'];

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-600)',
  marginBottom: 'var(--global-spacing-sizing-12px)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};

const sizeTag: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
};

const meta: Meta<typeof ButtonGroup> = {
  title: 'Atoms/Buttons/Button Group',
  component: ButtonGroup,
  parameters: {
    docs: {
      page: () => <ButtonGroupDocs />,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      description: 'Colour variant: primary (blue), secondary (sky-blue), tertiary (yellow), ghost (outline)',
    },
    size: {
      control: 'select',
      options: ALL_SIZES,
      description: 'Button slot size — xs, sm, md, lg',
    },
    layout: {
      control: 'select',
      options: ALL_LAYOUTS,
      description: 'joined — connected strip, no gap; separate — 6px gap',
    },
    buttonType: {
      control: 'select',
      options: ['icon', 'label'],
      description: 'icon — square icon-only; label — icon + text + arrow',
    },
    special: {
      control: 'select',
      options: ALL_SPECIALS,
      description: 'special=alt uses the tinted/outlined light-blue style (label type only)',
    },
    count: {
      control: { type: 'number', min: 1, max: 8 },
      description: 'Number of button slots',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all buttons in the group',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner on all buttons',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'joined',
    buttonType: 'icon',
    special: 'default',
    count: 4,
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/* ── Documentation (must be first) ── */
export const Documentation: Story = {
  name: 'Documentation',
  render: () => <ButtonGroupDocs />,
  parameters: { docs: { page: () => <ButtonGroupDocs /> }, controls: { disable: true }, chromatic: { disableSnapshot: true } },
};

/* ── Playground ── */
export const Playground: Story = { name: 'Playground' };

export const Default: Story = { name: 'Default', args: { variant: 'primary', size: 'md', layout: 'joined', buttonType: 'icon', count: 3 } };

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonGroup variant="primary" size="xs" layout="joined" count={3} buttonType="icon" />
      <ButtonGroup variant="primary" size="sm" layout="joined" count={3} buttonType="icon" />
      <ButtonGroup variant="primary" size="md" layout="joined" count={3} buttonType="icon" />
      <ButtonGroup variant="primary" size="lg" layout="joined" count={3} buttonType="icon" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ComponentBreakdown: Story = {
  name: 'Component Breakdown',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(v => (
          <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
            <ButtonGroup variant={v} size="md" layout="joined" count={3} buttonType="icon" />
            <span style={{ fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', fontFamily: 'var(--brand-font-secondary)' }}>{v}</span>
          </div>
        ))}
      </div>
      <code style={{ fontSize: '10px', background: 'var(--global-color-neutral-gray-100)', padding: '4px 8px', borderRadius: '4px' }}>--btn-group-size-md / --btn-group-icon-size-md</code>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   ICON-TYPE BUTTON GROUPS (existing icon-only)
   ════════════════════════════════════════════════════════════ */

export const StatusIconVariants: Story = {
  name: 'Status / Icon Variants × Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {/* Separate (2-button pair) */}
      <div>
        <div style={sectionLabel}>Separate layout (primary + ghost pair)</div>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'center', flexWrap: 'wrap' }}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <ButtonGroup variant="primary" size={size} layout="separate" buttonType="icon" />
              <span style={sizeTag}>{size}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Joined — each variant */}
      {ALL_VARIANTS.map((variant) => (
        <div key={variant}>
          <div style={sectionLabel}>{variant} · joined</div>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-24px)', alignItems: 'center', flexWrap: 'wrap' }}>
            {ALL_SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <ButtonGroup variant={variant} size={size} layout="joined" count={4} buttonType="icon" />
                <span style={sizeTag}>{size}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Primary: Story = {
  name: 'Icon / Primary',
  args: { variant: 'primary', layout: 'joined', count: 4, buttonType: 'icon' },
};

export const Secondary: Story = {
  name: 'Icon / Secondary',
  args: { variant: 'secondary', layout: 'joined', count: 4, buttonType: 'icon' },
};

export const Tertiary: Story = {
  name: 'Icon / Tertiary',
  args: { variant: 'tertiary', layout: 'joined', count: 4, buttonType: 'icon' },
};

export const Ghost: Story = {
  name: 'Icon / Ghost',
  args: { variant: 'ghost', layout: 'joined', count: 4, buttonType: 'icon' },
};

export const Joined: Story = {
  name: 'Icon / Joined Layout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_VARIANTS.map((v) => (
        <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} buttonType="icon" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Separate: Story = {
  name: 'Icon / Separate Layout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_VARIANTS.map((v) => (
        <ButtonGroup key={v} variant={v} size="md" layout="separate" buttonType="icon" />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const IconSizes: Story = {
  name: 'Icon / All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'flex-start' }}>
      {ALL_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
          <span style={{ ...sizeTag, width: 80 }}>{size}</span>
          <ButtonGroup variant="primary" size={size} layout="joined" count={4} buttonType="icon" />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const IconDisabled: Story = {
  name: 'Icon / Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      {ALL_VARIANTS.map((v) => (
        <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} buttonType="icon" disabled />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const IconLoading: Story = {
  name: 'Icon / Loading',
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center', flexWrap: 'wrap' }}>
      <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" loading />
      <ButtonGroup variant="ghost" size="md" layout="joined" count={4} buttonType="icon" loading />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const PartialDisable: Story = {
  name: 'Icon / Partial Disable',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
      <ButtonGroup
        variant="primary"
        size="md"
        layout="joined"
        buttonType="icon"
        buttons={[{}, { disabled: true }, {}, {}]}
      />
      <ButtonGroup
        variant="ghost"
        size="md"
        layout="joined"
        buttonType="icon"
        buttons={[{}, {}, { disabled: true }, {}]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   LABEL-TYPE BUTTON GROUPS (new from Figma)
   ════════════════════════════════════════════════════════════ */

export const LabelDefault: Story = {
  name: 'Label / Default (Solid)',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    count: 2,
    buttons: [{ label: 'Label', ariaLabel: 'Action 1' }, { label: 'Label', ariaLabel: 'Action 2' }],
  },
};

export const LabelAlt: Story = {
  name: 'Label / Alt (Tinted)',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'alt',
    count: 2,
    buttons: [{ label: 'Label', ariaLabel: 'Action 1' }, { label: 'Label', ariaLabel: 'Action 2' }],
  },
};

export const LabelJoined: Story = {
  name: 'Label / Joined Layout',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'joined',
    buttonType: 'label',
    special: 'default',
    count: 2,
    buttons: [{ label: 'Label', ariaLabel: 'Action 1' }, { label: 'Label', ariaLabel: 'Action 2' }],
  },
};

export const LabelAllSizes: Story = {
  name: 'Label / All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {(['default', 'alt'] as ButtonGroupSpecial[]).map((special) => (
        <div key={special}>
          <div style={sectionLabel}>Special: {special}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'flex-start' }}>
            {ALL_SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
                <span style={{ ...sizeTag, width: 40 }}>{size}</span>
                <ButtonGroup
                  variant="primary"
                  size={size}
                  layout="separate"
                  buttonType="label"
                  special={special}
                  buttons={[{ label: 'Label', ariaLabel: 'Action 1' }, { label: 'Label', ariaLabel: 'Action 2' }]}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const LabelAllVariants: Story = {
  name: 'Label / All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {/* Default (solid) */}
      <div>
        <div style={sectionLabel}>Special: Default (solid filled)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'flex-start' }}>
          {(['primary', 'secondary', 'ghost'] as ButtonGroupVariant[]).map((v) => (
            <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
              <span style={{ ...sizeTag, width: 80 }}>{v}</span>
              <ButtonGroup
                variant={v}
                size="md"
                layout="separate"
                buttonType="label"
                special="default"
                buttons={[{ label: 'Label' }, { label: 'Label' }]}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Alt (tinted) */}
      <div>
        <div style={sectionLabel}>Special: Alt (tinted/outlined)</div>
        <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
          <ButtonGroup
            variant="primary"
            size="md"
            layout="separate"
            buttonType="label"
            special="alt"
            buttons={[{ label: 'Label' }, { label: 'Label' }]}
          />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const LabelDisabled: Story = {
  name: 'Label / Disabled',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    disabled: true,
    buttons: [{ label: 'Label' }, { label: 'Label' }],
  },
};

export const LabelLoading: Story = {
  name: 'Label / Loading',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    loading: true,
    buttons: [{ label: 'Saving...' }, { label: 'Loading' }],
  },
};

/* ════════════════════════════════════════════════════════════
   FULL MATRIX — Matches Figma screenshot grid
   Rows: lg · md · sm · xs
   Cols: label-separate-alt | icon-solo | label-joined | icon-joined (all variants) | Filter bar
   ════════════════════════════════════════════════════════════ */

export const FullDesignMatrix: Story = {
  name: 'Full Design Matrix',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-50)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
      {ALL_SIZES.map((size) => (
        <div key={size}>
          <div style={sectionLabel}>{size}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            {/* Col 1: Label separate (alt) */}
            <ButtonGroup variant="primary" size={size} layout="separate" buttonType="label" special="alt" buttons={[{ label: 'Label' }, { label: 'Label' }]} />

            {/* Col 2: Icon solo */}
            <ButtonGroup variant="ghost" size={size} layout="joined" count={1} buttonType="icon" />

            {/* Col 3: Label joined */}
            <ButtonGroup variant="primary" size={size} layout="joined" buttonType="label" special="default" buttons={[{ label: 'Label' }, { label: 'Label' }]} />

            {/* Col 4: Icon joined primary */}
            <ButtonGroup variant="primary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 5: Icon joined secondary (dark) */}
            <ButtonGroup variant="secondary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 6: Icon joined tertiary */}
            <ButtonGroup variant="tertiary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 7: Icon joined ghost */}
            <ButtonGroup variant="ghost" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 8: Icon separate (single visible) */}
            <ButtonGroup variant="ghost" size={size} layout="separate" count={1} buttonType="icon" />
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ════════════════════════════════════════════════════════════
   STATE SHOWCASE
   ════════════════════════════════════════════════════════════ */

export const AllInteractiveStates: Story = {
  name: 'All Interactive States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-32px)' }}>
      {/* Icon type states */}
      <div>
        <div style={sectionLabel}>Icon type</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" />
            <span style={sizeTag}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" loading />
            <span style={sizeTag}>Loading</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" disabled />
            <span style={sizeTag}>Disabled</span>
          </div>
        </div>
      </div>

      {/* Label type states — default special */}
      <div>
        <div style={sectionLabel}>Label type — special: default</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
          {[
            { label: 'Default', props: {} },
            { label: 'Loading', props: { loading: true, buttons: [{ label: 'Saving…' }] } },
            { label: 'Disabled', props: { disabled: true } },
          ].map(({ label, props }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
              <ButtonGroup
                variant="primary"
                size="md"
                layout="separate"
                buttonType="label"
                special="default"
                buttons={[{ label: 'Label' }, { label: 'Label' }]}
                {...props}
              />
              <span style={sizeTag}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Label type states — alt special */}
      <div>
        <div style={sectionLabel}>Label type — special: alt</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
          {[
            { label: 'Default', props: {} },
            { label: 'Loading', props: { loading: true, buttons: [{ label: 'Saving…' }] } },
            { label: 'Disabled', props: { disabled: true } },
          ].map(({ label, props }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
              <ButtonGroup
                variant="primary"
                size="md"
                layout="separate"
                buttonType="label"
                special="alt"
                buttons={[{ label: 'Label' }, { label: 'Label' }]}
                {...props}
              />
              <span style={sizeTag}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
