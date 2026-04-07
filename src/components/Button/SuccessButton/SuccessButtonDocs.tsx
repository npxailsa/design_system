import React from 'react';
import { SuccessButton } from './SuccessButton';

const sectionStyle: React.CSSProperties = { marginBottom: '48px' };

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '22px',
  fontWeight: 300,
  color: 'var(--global-color-base-black)',
  margin: '0 0 8px',
  paddingBottom: '8px',
  borderBottom: '1px solid var(--global-color-neutral-gray-200)',
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '13px',
  fontWeight: 300,
  color: 'var(--global-color-neutral-gray-500)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 12px',
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '22px',
  color: 'var(--global-color-neutral-gray-700)',
  margin: '0 0 16px',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  alignItems: 'center',
  gap: '12px',
  marginBottom: '12px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '11px',
  fontWeight: 300,
  color: 'var(--global-color-neutral-gray-400)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  minWidth: '56px',
};

const codeBlockStyle: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50)',
  border: '1px solid var(--global-color-neutral-gray-200)',
  borderRadius: 'var(--global-spacing-radius-4px)',
  padding: '16px 20px',
  fontFamily: 'monospace',
  fontSize: '13px',
  lineHeight: '1.6',
  color: 'var(--global-color-neutral-gray-800)',
  overflowX: 'auto' as const,
  margin: '0 0 16px',
  whiteSpace: 'pre' as const,
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '13px',
  marginBottom: '16px',
};

const thStyle: React.CSSProperties = {
  background: 'var(--global-color-neutral-gray-50)',
  border: '1px solid var(--global-color-neutral-gray-200)',
  padding: '8px 12px',
  textAlign: 'left' as const,
  fontWeight: 400,
  color: 'var(--global-color-neutral-gray-700)',
};

const tdStyle: React.CSSProperties = {
  border: '1px solid var(--global-color-neutral-gray-200)',
  padding: '8px 12px',
  color: 'var(--global-color-neutral-gray-700)',
  verticalAlign: 'top' as const,
};

const tdCodeStyle: React.CSSProperties = {
  ...tdStyle,
  fontFamily: 'monospace',
  fontSize: '12px',
  color: 'var(--global-color-status-dark-green)',
};

const chipStyle = (bg: string, color: string): React.CSSProperties => ({
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: '3px',
  background: bg,
  color,
  fontFamily: 'monospace',
  fontSize: '11px',
});

export const SuccessButtonDocs: React.FC = () => (
  <div
    style={{
      padding: '48px',
      maxWidth: '960px',
      margin: '0 auto',
      fontFamily: 'var(--brand-font-primary)',
    }}
  >
    {/* ── Header ──────────────────────────────────────────────────────────── */}
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <h1
          style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '32px',
            fontWeight: 300,
            color: 'var(--global-color-base-black)',
            margin: 0,
          }}
        >
          SuccessButton
        </h1>
        <span style={chipStyle('var(--global-color-status-green-light)', 'var(--global-color-status-dark-green)')}>
          Atoms / Buttons / StatusButton
        </span>
        <span style={chipStyle('var(--global-color-neutral-gray-100)', 'var(--global-color-neutral-gray-600)')}>
          Stable
        </span>
      </div>
      <p style={{ ...bodyStyle, margin: 0, maxWidth: '640px' }}>
        A status-specific button for success and confirmation actions. Two visual variants:
        <strong> solid</strong> (light-green fill, black text — primary CTA; hover inverts to
        dark-green fill with white text) and <strong> ghost</strong> (white background,
        dark-green border and text — secondary CTA; hover shifts bg to green-light).
      </p>
    </div>

    {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Anatomy</h2>
      <p style={bodyStyle}>
        Each button renders three inline elements: a leading user icon, a text label, and a
        trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS
        spinner and the trailing icon is hidden. In the disabled state all elements are tinted grey.
      </p>
      <div
        style={{
          background: 'var(--global-color-neutral-gray-50)',
          border: '1px solid var(--global-color-neutral-gray-200)',
          borderRadius: 'var(--global-spacing-radius-4px)',
          padding: '32px',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <SuccessButton variant="solid" size="default" label="Success button" />
        <SuccessButton variant="ghost" size="default" label="Success button" />
      </div>
    </div>

    {/* ── Variants ────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Variants</h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={subheadingStyle}>Solid</p>
        <p style={bodyStyle}>
          Light-green (#96F78D) filled background with a dark-green (#227F1A) border and black
          text by default. On hover the background inverts to dark-green and text/icons switch to
          white — a unique colour flip unique to the success variant. Focus restores the
          light-green background with a 2px border.
        </p>
        <div style={rowStyle}>
          <SuccessButton variant="solid" size="small" label="Success button" />
          <SuccessButton variant="solid" size="default" label="Success button" />
          <SuccessButton variant="solid" size="large" label="Success button" />
        </div>
      </div>

      <div>
        <p style={subheadingStyle}>Ghost / Alt</p>
        <p style={bodyStyle}>
          White background with a 1px dark-green (#227F1A) border and dark-green text and icons.
          On hover the background shifts to green-light (#F2FFF1) and a 2×2px dark-green drop
          shadow is applied. Focus uses a distinctive <strong>3px</strong> border (per Figma spec,
          wider than other status buttons).
        </p>
        <div style={rowStyle}>
          <SuccessButton variant="ghost" size="small" label="Success button" />
          <SuccessButton variant="ghost" size="default" label="Success button" />
          <SuccessButton variant="ghost" size="large" label="Success button" />
        </div>
      </div>
    </div>

    {/* ── Sizes ───────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Sizes</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Size</th>
            <th style={thStyle}>Height</th>
            <th style={thStyle}>Padding</th>
            <th style={thStyle}>Font size</th>
            <th style={thStyle}>Icon size</th>
            <th style={thStyle}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['small',   '34px', '4px 12px', '14px', '14px'],
            ['default', '44px', '4px 16px', '16px', '16px'],
            ['large',   '56px', '4px 16px', '18px', '18px'],
          ].map(([size, h, pad, fs, is]) => (
            <tr key={size}>
              <td style={tdCodeStyle}>{size}</td>
              <td style={tdStyle}>{h}</td>
              <td style={tdStyle}>{pad}</td>
              <td style={tdStyle}>{fs}</td>
              <td style={tdStyle}>{is}</td>
              <td style={tdStyle}>
                <SuccessButton
                  variant="solid"
                  size={size as any}
                  label="Success button"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── States ──────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>States</h2>
      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant} style={{ marginBottom: '24px' }}>
          <p style={subheadingStyle}>{variant}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div key={size} style={rowStyle}>
                <span style={labelStyle}>{size}</span>
                <SuccessButton variant={variant} size={size} label="Success button" />
                <SuccessButton variant={variant} size={size} label="Success button" loading />
                <SuccessButton variant={variant} size={size} label="Label" disabled />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* ── Design Tokens ───────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Design Tokens</h2>
      <p style={bodyStyle}>
        All visual properties are driven by design tokens in{' '}
        <code>src/styles/tokens.css</code> under <code>/* COMPONENT: SuccessButton */</code>.
      </p>

      <p style={subheadingStyle}>Solid variant</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Token</th>
            <th style={thStyle}>Value</th>
            <th style={thStyle}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['--btn-success-solid-bg',                 'var(--global-color-status-green) → #96F78D',      'Default background'],
            ['--btn-success-solid-color',              'var(--global-color-base-black) → #1C1C1C',        'Default text & icon colour'],
            ['--btn-success-solid-border-color',       'var(--global-color-status-dark-green) → #227F1A', 'Border colour (all states)'],
            ['--btn-success-solid-border-width',       'var(--global-spacing-stroke-1px) → 1px',          'Default border width'],
            ['--btn-success-solid-bg-hover',           'var(--global-color-status-dark-green) → #227F1A', 'Background on hover/active (colour inversion)'],
            ['--btn-success-solid-color-hover',        'var(--global-color-base-white) → #FFFFFF',        'Text & icon colour on hover/active'],
            ['--btn-success-solid-shadow-hover',       '2px 2px 0px 0px #227F1A',                         'Drop shadow on hover/active'],
            ['--btn-success-solid-border-width-focus', 'var(--global-spacing-stroke-2px) → 2px',          'Border width on focus'],
          ].map(([token, value, usage]) => (
            <tr key={token}>
              <td style={tdCodeStyle}>{token}</td>
              <td style={tdStyle}><code>{value}</code></td>
              <td style={tdStyle}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ ...subheadingStyle, marginTop: '24px' }}>Ghost / Alt variant</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Token</th>
            <th style={thStyle}>Value</th>
            <th style={thStyle}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['--btn-success-ghost-bg',                 'var(--global-color-base-white) → #FFFFFF',        'Default background'],
            ['--btn-success-ghost-bg-hover',           'var(--global-color-status-green-light) → #F2FFF1','Background on hover/active'],
            ['--btn-success-ghost-color',              'var(--global-color-status-dark-green) → #227F1A', 'Text & icon colour'],
            ['--btn-success-ghost-border-color',       'var(--global-color-status-dark-green) → #227F1A', 'Border colour (all states)'],
            ['--btn-success-ghost-border-width',       'var(--global-spacing-stroke-1px) → 1px',          'Default border width'],
            ['--btn-success-ghost-shadow-hover',       '2px 2px 0px 0px #227F1A',                         'Drop shadow on hover/active'],
            ['--btn-success-ghost-border-width-focus', '3px',                                              'Focus border width (3px per Figma — unique to success)'],
          ].map(([token, value, usage]) => (
            <tr key={token}>
              <td style={tdCodeStyle}>{token}</td>
              <td style={tdStyle}><code>{value}</code></td>
              <td style={tdStyle}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ ...subheadingStyle, marginTop: '24px' }}>Disabled (shared)</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Token</th>
            <th style={thStyle}>Value</th>
            <th style={thStyle}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['--btn-success-bg-disabled',           'var(--global-color-neutral-gray-100) → #F3F4F6', 'Background (disabled)'],
            ['--btn-success-color-disabled',        'var(--global-color-neutral-gray-400) → #9CA3AF', 'Text & icon colour (disabled)'],
            ['--btn-success-border-color-disabled', 'var(--global-color-neutral-gray-400) → #9CA3AF', 'Border colour (disabled)'],
            ['--btn-success-border-width-disabled', 'var(--global-spacing-stroke-0-5px) → 0.5px',    'Border width (disabled)'],
          ].map(([token, value, usage]) => (
            <tr key={token}>
              <td style={tdCodeStyle}>{token}</td>
              <td style={tdStyle}><code>{value}</code></td>
              <td style={tdStyle}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Props ───────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Props</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Prop</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Default</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['label',     'string',                     '"Success button"', 'Button label text'],
            ['variant',   "'solid' | 'ghost'",          "'solid'",          'Visual style variant'],
            ['size',      "'small' | 'default' | 'large'", "'default'",     'Controls height, padding, font, and icon sizes'],
            ['loading',   'boolean',                    'false',            'Replaces leading icon with spinner; disables interaction'],
            ['disabled',  'boolean',                    'false',            'Disables all interactions and applies grey styling'],
            ['type',      "'button' | 'submit' | 'reset'", "'button'",      'HTML button type attribute'],
            ['onClick',   '(e) => void',                '—',               'Click handler (no-op when loading or disabled)'],
            ['className', 'string',                     "''",              'Extra CSS class on the root element'],
            ['ariaLabel', 'string',                     '—',               'Accessible label'],
          ].map(([prop, type, def, desc]) => (
            <tr key={prop}>
              <td style={tdCodeStyle}>{prop}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', fontSize: '12px' }}>{type}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', fontSize: '12px' }}>{def}</td>
              <td style={tdStyle}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Usage ───────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Usage</h2>

      <p style={subheadingStyle}>Standalone</p>
      <pre style={codeBlockStyle}>{`import { SuccessButton } from '@/components/Button/SuccessButton/SuccessButton';

// Solid (primary CTA)
<SuccessButton variant="solid" label="Success button" />

// Ghost (secondary CTA)
<SuccessButton variant="ghost" label="Success button" />`}</pre>

      <p style={subheadingStyle}>In a success CardContent ButtonGroup</p>
      <pre style={codeBlockStyle}>{`<CardContent
  variant="notification"
  status="success"
  heading="This is a success heading"
  body="Your action completed successfully."
/>`}</pre>

      <p style={subheadingStyle}>Important interaction note</p>
      <p style={bodyStyle}>
        The <strong>solid</strong> variant is unique among StatusButtons: on hover, the entire
        background colour inverts from light-green to dark-green and the text/icons switch from
        black to white. This makes the success solid button the most visually striking of the
        status variants on hover. Do not suppress this transition with additional CSS overrides.
      </p>

      <ul
        style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '14px',
          fontWeight: 300,
          color: 'var(--global-color-neutral-gray-700)',
          lineHeight: '24px',
          paddingLeft: '20px',
          margin: 0,
        }}
      >
        <li>Use <strong>solid</strong> as the primary CTA in success-status modals and cards.</li>
        <li>Use <strong>ghost</strong> as the secondary CTA alongside the solid variant.</li>
        <li>Do not pair two solid SuccessButtons — use solid + ghost to establish hierarchy.</li>
        <li>Do not use SuccessButton for warning or error actions — use the correct status button.</li>
        <li>Do not override token values with hard-coded colours.</li>
      </ul>
    </div>
  </div>
);

export default SuccessButtonDocs;
