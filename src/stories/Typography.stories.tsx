import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyDocs } from './Foundation/TypographyDocs';

const TypographyDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-40px)' }}>
      <section>
        <h2 style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-300)', paddingBottom: 'var(--global-spacing-sizing-10px)' }}>Font Families</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
          <div>
            <p style={{ color: 'var(--global-color-neutral-gray-500)', marginBottom: 'var(--global-spacing-sizing-6px)' }}>Primary: F37 Ginger Pro (--font-family-primary)</p>
            <p style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-heading-4)' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--global-color-neutral-gray-500)', marginBottom: 'var(--global-spacing-sizing-6px)' }}>Secondary: Calibri (--font-family-secondary)</p>
            <p style={{ fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-heading-4)' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-300)', paddingBottom: 'var(--global-spacing-sizing-10px)' }}>Font Weights (F37 Ginger Pro)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-10px)' }}>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 100 }}>Thin (100): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 300 }}>Light (300): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 400 }}>Regular (400): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 500 }}>Medium (500): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 700 }}>Bold (700): Pack my box with five dozen liquor jugs.</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-300)', paddingBottom: 'var(--global-spacing-sizing-10px)' }}>Font Weights (Calibri)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-10px)' }}>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 300 }}>Light (300): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 400 }}>Regular (400): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 700 }}>Bold (700): Pack my box with five dozen liquor jugs.</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-300)', paddingBottom: 'var(--global-spacing-sizing-10px)' }}>Scale (Label Tokens)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          <div>
            <span style={{ color: 'var(--global-color-neutral-gray-500)', marginRight: 'var(--global-spacing-sizing-10px)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>lg (18px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-lg)' }}>
              Large Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--global-color-neutral-gray-500)', marginRight: 'var(--global-spacing-sizing-10px)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>default (16px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>
              Default Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--global-color-neutral-gray-500)', marginRight: 'var(--global-spacing-sizing-10px)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>sm (14px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-sm)' }}>
              Small Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--global-color-neutral-gray-500)', marginRight: 'var(--global-spacing-sizing-10px)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>xs (12px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>
              X-Small Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--global-color-neutral-gray-500)', marginRight: 'var(--global-spacing-sizing-10px)', fontSize: 'var(--global-type-size-primary-label-xs)' }}>xxs (10px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-xxs)' }}>
              2X-Small Scale Label
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Typography',
  component: TypographyDemo,
};

export default meta;
type Story = StoryObj;

/**
 * Full branded documentation page for Typography.
 */
export const Documentation: Story = {
  render: () => <TypographyDocs />,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default: Story = {};
