import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const TypographyDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <section>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Font Families</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p style={{ color: '#666', marginBottom: '5px' }}>Primary: Archivo (--type-typeface-archivo)</p>
            <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontSize: '24px' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
          </div>
          <div>
            <p style={{ color: '#666', marginBottom: '5px' }}>Alternative: F37 Ginger Pro (--font-family-primary)</p>
            <p style={{ fontFamily: 'var(--font-family-primary)', fontSize: '24px' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
          </div>
          <div>
            <p style={{ color: '#666', marginBottom: '5px' }}>Secondary: Calibri (--font-family-secondary)</p>
            <p style={{ fontFamily: 'var(--font-family-secondary)', fontSize: '24px' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Font Weights (Archivo)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontWeight: 100 }}>Thin (100): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontWeight: 300 }}>Light (300): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontWeight: 400 }}>Regular (400): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontWeight: 500 }}>Medium (500): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--type-typeface-archivo)', fontWeight: 700 }}>Bold (700): Pack my box with five dozen liquor jugs.</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Font Weights (F37 Ginger Pro)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 100 }}>Thin (100): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 300 }}>Light (300): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 400 }}>Regular (400): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 500 }}>Medium (500): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-primary)', fontWeight: 700 }}>Bold (700): Pack my box with five dozen liquor jugs.</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Font Weights (Calibri)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 300 }}>Light (300): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 400 }}>Regular (400): Pack my box with five dozen liquor jugs.</p>
          <p style={{ fontFamily: 'var(--font-family-secondary)', fontWeight: 700 }}>Bold (700): Pack my box with five dozen liquor jugs.</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Scale (Label Tokens)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <span style={{ color: '#666', marginRight: '10px', fontSize: '12px' }}>lg (18px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--type-size-primary-scale-label-lg)' }}>
              Large Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: '#666', marginRight: '10px', fontSize: '12px' }}>default (16px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--type-size-primary-scale-label)' }}>
              Default Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: '#666', marginRight: '10px', fontSize: '12px' }}>sm (14px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--type-size-primary-scale-label-sm)' }}>
              Small Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: '#666', marginRight: '10px', fontSize: '12px' }}>xs (12px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--type-size-primary-scale-label-xs)' }}>
              X-Small Scale Label
            </span>
          </div>
          <div>
            <span style={{ color: '#666', marginRight: '10px', fontSize: '12px' }}>xxs (10px)</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--type-size-primary-scale-label-xxs)' }}>
              2X-Small Scale Label
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographyDemo,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
