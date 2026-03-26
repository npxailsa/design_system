import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AccordionAlt } from './AccordionAlt';
import { AccordionAltDocs } from './AccordionAltDocs';

const meta: Meta<typeof AccordionAlt> = {
  title: 'Atoms/Accordion (alt.)',
  component: AccordionAlt,
  parameters: {
    docs: {
      page: () => <AccordionAltDocs />,
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['decorative', 'numbered', 'label'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    openIcon: {
      control: 'select',
      options: ['chevron', 'plus'],
    },
    title: { control: 'text' },
    number: { control: 'text' },
    label: { control: 'text' },
    body: { control: 'text' },
    showIcon: { control: 'boolean' },
    showNumber: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
  },
  args: {
    type: 'decorative',
    size: 'default',
    openIcon: 'chevron',
    title: 'This is a decorative accordion title',
    number: '01',
    label: 'Label',
    showIcon: true,
    showNumber: true,
    defaultOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof AccordionAlt>;

/* ── Documentation ── */
export const Documentation: Story = {
  render: () => <AccordionAltDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

/* ── Default (interactive playground) ── */
export const Default: Story = {};

/* ── Decorative Type ── */
export const DecorativeType: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '900px' }}>
      <AccordionAlt
        type="decorative"
        size="default"
        showIcon
        title="Discover what's new in our latest release"
      />
      <AccordionAlt
        type="decorative"
        size="default"
        showIcon
        title="Discover what's new in our latest release"
        defaultOpen
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Numbered Type ── */
export const NumberedType: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '900px' }}>
      <AccordionAlt
        type="numbered"
        size="default"
        number="01"
        showNumber
        title="Define your project requirements"
      />
      <AccordionAlt
        type="numbered"
        size="default"
        number="01"
        showNumber
        title="Define your project requirements"
        defaultOpen
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Label Type ── */
export const LabelType: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '900px' }}>
      <AccordionAlt
        type="label"
        size="default"
        label="Category"
        title="Filtering and sorting options"
      />
      <AccordionAlt
        type="label"
        size="default"
        label="Category"
        title="Filtering and sorting options"
        defaultOpen
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Sizes ── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px', maxWidth: '900px' }}>
      {(['decorative', 'numbered', 'label'] as const).map((type) => (
        <div key={type}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px', textTransform: 'capitalize' }}>
            {type}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div key={size}>
                <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-400)', marginBottom: '6px', textTransform: 'capitalize' }}>{size}</p>
                <AccordionAlt
                  type={type}
                  size={size}
                  showIcon={type === 'decorative'}
                  showNumber={type === 'numbered'}
                  number="01"
                  label="Tag"
                  title={`${size} ${type} accordion`}
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

/* ── Toggle Icons ── */
export const ToggleIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', maxWidth: '900px' }}>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>Chevron</p>
        <AccordionAlt type="decorative" openIcon="chevron" showIcon title="Chevron toggle style" />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>Plus / Minus</p>
        <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus/minus toggle style" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── All Variants grid ── */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px', maxWidth: '960px' }}>
      {/* Decorative */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Decorative — All Sizes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(['small', 'default', 'large'] as const).map((size) => (
            <AccordionAlt key={size} type="decorative" size={size} showIcon title={`Decorative ${size} accordion`} />
          ))}
        </div>
      </div>

      {/* Decorative open */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Decorative — Open</p>
        <AccordionAlt type="decorative" showIcon title="Decorative open accordion" defaultOpen />
      </div>

      {/* Numbered */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Numbered — All Sizes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(['small', 'default', 'large'] as const).map((size, i) => (
            <AccordionAlt key={size} type="numbered" size={size} number={String(i + 1).padStart(2, '0')} showNumber title={`Step ${i + 1}: ${size} numbered accordion`} />
          ))}
        </div>
      </div>

      {/* Numbered open */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Numbered — Open</p>
        <AccordionAlt type="numbered" number="01" showNumber title="Numbered open accordion" defaultOpen />
      </div>

      {/* Label */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Label — All Sizes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(['small', 'default', 'large'] as const).map((size) => (
            <AccordionAlt key={size} type="label" size={size} label="Tag" title={`Label ${size} accordion`} />
          ))}
        </div>
      </div>

      {/* Label open */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Label — Open</p>
        <AccordionAlt type="label" label="Category" title="Label open accordion" defaultOpen />
      </div>

      {/* Plus icon */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Plus/Minus Icon</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus icon — closed" />
          <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus icon — open" defaultOpen />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
