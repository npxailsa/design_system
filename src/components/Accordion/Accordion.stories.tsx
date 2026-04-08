import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Accordion } from './Accordion';
import { AccordionDocs } from './AccordionDocs';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: () => <AccordionDocs />,
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['simple', 'no-stroke'],
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
    description: { control: 'text' },
    body: { control: 'text' },
    showLeadingIcon: { control: 'boolean' },
    showStatusIcon: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
  },
  args: {
    type: 'simple',
    size: 'default',
    openIcon: 'chevron',
    showLeadingIcon: true,
    showStatusIcon: true,
    showDescription: true,
    defaultOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/* ── Documentation ── */
export const Documentation: Story = {
  render: () => <AccordionDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    chromatic: { disableSnapshot: true },
  },
};

/* ── Default (interactive playground) ── */
export const Default: Story = {};

/* ── Open state ── */
export const OpenState: Story = {
  args: {
    defaultOpen: true,
  },
};

/* ── Simple type ── */
export const SimpleType: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '900px' }}>
      <Accordion
        type="simple"
        size="default"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        showStatusIcon
        showLeadingIcon
        showDescription
      />
      <Accordion
        type="simple"
        size="default"
        title="This is a section title taking up a lot of space..."
        description="This is supporting text to help describe the content within the accordion"
        showStatusIcon
        showLeadingIcon
        showDescription
        defaultOpen
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── No-stroke type ── */
export const NoStrokeType: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '20px', maxWidth: '900px' }}>
      <Accordion
        type="no-stroke"
        size="default"
        title="This is a section title or a long question taking up a lot of space..."
        showStatusIcon={false}
        showLeadingIcon={false}
        showDescription={false}
      />
      <Accordion
        type="no-stroke"
        size="default"
        title="This is a section title or a long question taking up a lot of space..."
        showStatusIcon={false}
        showLeadingIcon={false}
        showDescription={false}
        defaultOpen
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Sizes ── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', maxWidth: '900px' }}>
      {(['small', 'default', 'large'] as const).map((size) => (
        <div key={size}>
          <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize', marginBottom: '8px' }}>{size}</p>
          <Accordion
            type="simple"
            size={size}
            showStatusIcon
            showLeadingIcon
            showDescription
          />
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Toggle Icon Styles ── */
export const ToggleIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', maxWidth: '900px' }}>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>Chevron</p>
        <Accordion type="simple" openIcon="chevron" showStatusIcon showLeadingIcon showDescription />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '8px' }}>Plus / Minus</p>
        <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── Optional elements ── */
export const OptionalElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '900px' }}>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '6px' }}>Status icon + Leading icon + Description</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon showDescription />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '6px' }}>Status icon only</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon={false} showDescription={false} />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '6px' }}>Leading icon only</p>
        <Accordion type="simple" showStatusIcon={false} showLeadingIcon showDescription={false} />
      </div>
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)', marginBottom: '6px' }}>Title only</p>
        <Accordion type="simple" showStatusIcon={false} showLeadingIcon={false} showDescription={false} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ── All variants grid ── */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px', maxWidth: '960px' }}>
      {/* Simple type — all sizes */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Simple — All Sizes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {(['small', 'default', 'large'] as const).map((size) => (
            <Accordion key={size} type="simple" size={size} showStatusIcon showLeadingIcon showDescription />
          ))}
        </div>
      </div>
      {/* Simple open */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Simple — Open</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon showDescription defaultOpen />
      </div>
      {/* No-stroke */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>No-stroke type</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Accordion type="no-stroke" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
          <Accordion type="no-stroke" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." defaultOpen />
        </div>
      </div>
      {/* Plus icon */}
      <div>
        <p style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '13px', fontWeight: 600, color: 'var(--global-color-neutral-gray-700)', marginBottom: '12px' }}>Plus/minus icon</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
          <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." defaultOpen />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
