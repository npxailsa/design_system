import React from 'react';
import { WarningButton } from './WarningButton';

const sectionStyle: React.CSSProperties = {
  marginBottom: '48px',
};

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
  color: 'var(--global-color-status-dark-orange)',
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

export const WarningButtonDocs: React.FC = () => (
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
          WarningButton
        </h1>
        <span style={chipStyle('var(--global-color-status-orange-light)', 'var(--global-color-status-dark-orange)')}>
          Atoms / Buttons / StatusButton
        </span>
        <span style={chipStyle('var(--global-color-neutral-gray-100)', 'var(--global-color-neutral-gray-600)')}>
          Stable
        </span>
      </div>
      <p style={{ ...bodyStyle, margin: 0, maxWidth: '640px' }}>
        A status-specific button for warning and cautionary actions. Two visual variants:
        <strong> solid</strong> (amber filled, black text — primary CTA) and{' '}
        <strong> ghost</strong> (white background, orange border, dark-orange text — secondary CTA;
        hover shifts background to orange-light).
      </p>
    </div>

    {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Anatomy</h2>
      <p style={bodyStyle}>
        Each button renders three inline elements: a leading user icon, a text label, and a trailing
        arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the
        trailing icon is hidden. In the disabled state all elements are tinted grey.
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
        <WarningButton variant="solid" size="default" label="Warning button" />
        <WarningButton variant="ghost" size="default" label="Warning button" />
      </div>
    </div>

    {/* ── Variants ────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Variants</h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={subheadingStyle}>Solid</p>
        <p style={bodyStyle}>
          Amber (#F4A403) filled background with a dark-orange (#D07C06) border and black text. Use
          as the primary call-to-action within a warning CardContent. Hover adds a{' '}
          <code>2 × 2px</code> dark-orange drop shadow. Focus shows a 2px border with no shadow.
        </p>
        <div style={rowStyle}>
          <WarningButton variant="solid" size="small" label="Warning button" />
          <WarningButton variant="solid" size="default" label="Warning button" />
          <WarningButton variant="solid" size="large" label="Warning button" />
        </div>
      </div>

      <div>
        <p style={subheadingStyle}>Ghost / Alt</p>
        <p style={bodyStyle}>
          White background with a 1px orange (#F4A403) border and dark-orange (#D07C06) text and
          icons. On hover, the background shifts to orange-light (#FEF4DA) and a{' '}
          <code>2 × 2px</code> dark-orange shadow is applied. Use as the secondary CTA alongside
          the solid variant.
        </p>
        <div style={rowStyle}>
          <WarningButton variant="ghost" size="small" label="Warning button" />
          <WarningButton variant="ghost" size="default" label="Warning button" />
          <WarningButton variant="ghost" size="large" label="Warning button" />
        </div>
      </div>
    </div>

    {/* ── Sizes ───────────────────────────────────────────────────────────── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Sizes</h2>
      <p style={bodyStyle}>
        Three sizes are available. The size controls height, padding, font size, and icon size. In
        CardContent, the sizes map directly to the card size: <code>small → xs</code>,{' '}
        <code>default → sm</code>, <code>large → md</code>.
      </p>
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
          <tr>
            <td style={tdCodeStyle}>small</td>
            <td style={tdStyle}>34px</td>
            <td style={tdStyle}>4px 12px</td>
            <td style={tdStyle}>14px</td>
            <td style={tdStyle}>14px</td>
            <td style={tdStyle}><WarningButton variant="solid" size="small" label="Warning button" /></td>
          </tr>
          <tr>
            <td style={tdCodeStyle}>default</td>
            <td style={tdStyle}>44px</td>
            <td style={tdStyle}>4px 16px</td>
            <td style={tdStyle}>16px</td>
            <td style={tdStyle}>16px</td>
            <td style={tdStyle}><WarningButton variant="solid" size="default" label="Warning button" /></td>
          </tr>
          <tr>
            <td style={tdCodeStyle}>large</td>
            <td style={tdStyle}>56px</td>
            <td style={tdStyle}>4px 16px</td>
            <td style={tdStyle}>18px</td>
            <td style={tdStyle}>18px</td>
            <td style={tdStyle}><WarningButton variant="solid" size="large" label="Warning button" /></td>
          </tr>
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
                <WarningButton variant={variant} size={size} label="Warning button" />
                <WarningButton variant={variant} size={size} label="Warning button" loading />
                <WarningButton variant={variant} size={size} label="Label" disabled />
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
        All visual properties are driven by design tokens. These tokens live in{' '}
        <code>src/styles/tokens.css</code> under the{' '}
        <code>/* COMPONENT: WarningButton */</code> section.
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
            ['--btn-warning-solid-bg', 'var(--global-color-status-orange) → #F4A403', 'Background'],
            ['--btn-warning-solid-color', 'var(--global-color-base-black) → #1C1C1C', 'Text & icon colour'],
            ['--btn-warning-solid-border-color', 'var(--global-color-status-dark-orange) → #D07C06', 'Border colour (all states)'],
            ['--btn-warning-solid-border-width', 'var(--global-spacing-stroke-1px) → 1px', 'Default border width'],
            ['--btn-warning-solid-border-width-hover', 'var(--global-spacing-stroke-1px) → 1px', 'Border width on hover (unchanged)'],
            ['--btn-warning-solid-shadow-hover', '2px 2px 0px 0px #D07C06', 'Drop shadow on hover/active'],
            ['--btn-warning-solid-border-width-focus', 'var(--global-spacing-stroke-2px) → 2px', 'Border width on focus'],
            ['--btn-warning-solid-border-width-loading', 'var(--global-spacing-stroke-1px) → 1px', 'Border width during loading'],
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
            ['--btn-warning-ghost-bg', 'var(--global-color-base-white) → #FFFFFF', 'Default background'],
            ['--btn-warning-ghost-bg-hover', 'var(--global-color-status-orange-light) → #FEF4DA', 'Background on hover/active'],
            ['--btn-warning-ghost-color', 'var(--global-color-status-dark-orange) → #D07C06', 'Text & icon colour'],
            ['--btn-warning-ghost-border-color', 'var(--global-color-status-orange) → #F4A403', 'Border colour (all states)'],
            ['--btn-warning-ghost-border-width', 'var(--global-spacing-stroke-1px) → 1px', 'Default border width'],
            ['--btn-warning-ghost-shadow-hover', '2px 2px 0px 0px #D07C06', 'Drop shadow on hover/active'],
            ['--btn-warning-ghost-border-width-focus', 'var(--global-spacing-stroke-2px) → 2px', 'Border width on focus'],
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
            ['--btn-warning-bg-disabled', 'var(--global-color-neutral-gray-100) → #F3F4F6', 'Background (disabled)'],
            ['--btn-warning-color-disabled', 'var(--global-color-neutral-gray-400) → #9CA3AF', 'Text & icon colour (disabled)'],
            ['--btn-warning-border-color-disabled', 'var(--global-color-neutral-gray-400) → #9CA3AF', 'Border colour (disabled)'],
            ['--btn-warning-border-width-disabled', 'var(--global-spacing-stroke-0-5px) → 0.5px', 'Border width (disabled)'],
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
            ['label', 'string', '"Warning button"', 'Button label text'],
            ['variant', "'solid' | 'ghost'", "'solid'", 'Visual style variant'],
            ['size', "'small' | 'default' | 'large'", "'default'", 'Controls height, padding, font, and icon sizes'],
            ['loading', 'boolean', 'false', 'Replaces leading icon with a spinner; disables interaction'],
            ['disabled', 'boolean', 'false', 'Disables all interactions and applies grey styling'],
            ['type', "'button' | 'submit' | 'reset'", "'button'", 'HTML button type attribute'],
            ['onClick', '(e) => void', '—', 'Click handler (no-op when loading or disabled)'],
            ['className', 'string', "''", 'Extra CSS class applied to the root element'],
            ['ariaLabel', 'string', '—', 'Accessible label (use when no visible text label is present)'],
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
      <pre style={codeBlockStyle}>{`import { WarningButton } from '@/components/Button/WarningButton/WarningButton';

// Solid (primary CTA)
<WarningButton variant="solid" label="Warning button" />

// Ghost (secondary CTA)
<WarningButton variant="ghost" label="Warning button" />`}</pre>

      <p style={subheadingStyle}>In a warning CardContent ButtonGroup</p>
      <p style={bodyStyle}>
        The solid WarningButton is used as the primary CTA and the ghost variant as the secondary
        CTA within warning-status CardContent cards. The CardContent component applies the correct
        colour tokens automatically via its <code>status="warning"</code> CSS class.
      </p>
      <pre style={codeBlockStyle}>{`<CardContent
  variant="notification"
  status="warning"
  heading="This is a warning heading"
  body="Something requires your attention."
/>`}</pre>

      <p style={subheadingStyle}>Do's and Don'ts</p>
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
        <li>Use <strong>solid</strong> as the primary CTA in warning-status modals and cards.</li>
        <li>Use <strong>ghost</strong> as the secondary CTA alongside the solid variant.</li>
        <li>Do not pair two solid WarningButtons — use solid + ghost to establish hierarchy.</li>
        <li>Do not use WarningButton for destructive (error) actions — use <code>ErrorButton</code> instead.</li>
        <li>Do not override token values with hard-coded colours.</li>
      </ul>
    </div>
  </div>
);

export default WarningButtonDocs;
