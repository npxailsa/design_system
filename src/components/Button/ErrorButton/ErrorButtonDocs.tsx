import React from 'react';
import { ErrorButton } from './ErrorButton';

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
  lineHeight: '22px',
  color: 'var(--global-color-base-black)',
  overflowX: 'auto' as const,
  margin: '0 0 24px',
};

const tokenTableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontFamily: 'var(--brand-font-primary)',
  fontSize: '13px',
  marginBottom: '24px',
};

const thStyle: React.CSSProperties = {
  textAlign: 'left' as const,
  fontWeight: 300,
  color: 'var(--global-color-neutral-gray-500)',
  padding: '8px 12px',
  borderBottom: '1px solid var(--global-color-neutral-gray-200)',
  background: 'var(--global-color-neutral-gray-50)',
};

const tdStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderBottom: '1px solid var(--global-color-neutral-gray-100)',
  verticalAlign: 'top' as const,
  color: 'var(--global-color-base-black)',
  fontWeight: 300,
};

const tdCodeStyle: React.CSSProperties = {
  ...tdStyle,
  fontFamily: 'monospace',
  fontSize: '12px',
  color: 'var(--global-color-status-red)',
};

const chipStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 8px',
  borderRadius: 'var(--global-spacing-radius-full)',
  background: 'var(--global-color-status-red-light)',
  color: 'var(--global-color-status-red)',
  fontFamily: 'monospace',
  fontSize: '11px',
  fontWeight: 400,
};

export const ErrorButtonDocs: React.FC = () => (
  <div style={{ padding: '48px', maxWidth: '900px', fontFamily: 'var(--brand-font-primary)' }}>
    {/* ── Header ── */}
    <div style={{ marginBottom: '40px' }}>
      <h1 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '32px', fontWeight: 300, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
        ErrorButton
      </h1>
      <p style={{ ...bodyStyle, fontSize: '16px' }}>
        A status-specific button for error and destructive actions. Comes in two visual variants —
        <strong> solid</strong> (red filled, white icon/text) and <strong>ghost</strong> (white background,
        red border and text). Use the solid variant as the primary CTA in error state cards, and the ghost
        variant as the secondary/dismiss CTA.
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {['Atoms', 'Buttons', 'StatusButton', 'ErrorButton'].map((crumb, i, arr) => (
          <React.Fragment key={crumb}>
            <span style={chipStyle}>{crumb}</span>
            {i < arr.length - 1 && <span style={{ color: 'var(--global-color-neutral-gray-400)', alignSelf: 'center' }}>›</span>}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* ── Variants ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Variants</h2>
      <p style={bodyStyle}>
        Two variants are available. The <code>solid</code> variant is the primary destructive action.
        The <code>ghost</code> variant provides a secondary, lower-emphasis error action.
      </p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <div>
          <p style={subheadingStyle}>Solid</p>
          <ErrorButton variant="solid" label="Error button" />
        </div>
        <div>
          <p style={subheadingStyle}>Ghost</p>
          <ErrorButton variant="ghost" label="Error button" />
        </div>
      </div>

      <pre style={codeBlockStyle}>{`<ErrorButton variant="solid" label="Error button" />
<ErrorButton variant="ghost" label="Error button" />`}</pre>
    </div>

    {/* ── Sizes ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Sizes</h2>
      <p style={bodyStyle}>
        Three sizes are available: <code>small</code> (34px), <code>default</code> (44px), and <code>large</code> (56px).
      </p>

      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant} style={{ marginBottom: '20px' }}>
          <p style={subheadingStyle}>{variant}</p>
          <div style={rowStyle}>
            <span style={labelStyle}>Small</span>
            <ErrorButton variant={variant} size="small" label="Error button" />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Default</span>
            <ErrorButton variant={variant} size="default" label="Error button" />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Large</span>
            <ErrorButton variant={variant} size="large" label="Error button" />
          </div>
        </div>
      ))}

      <pre style={codeBlockStyle}>{`<ErrorButton size="small" label="Error button" />
<ErrorButton size="default" label="Error button" />
<ErrorButton size="large" label="Error button" />`}</pre>
    </div>

    {/* ── States ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>States</h2>
      <p style={bodyStyle}>
        Both variants support <code>loading</code> and <code>disabled</code> states.
        Hover, active, and focus states are handled via CSS.
      </p>

      {(['solid', 'ghost'] as const).map((variant) => (
        <div key={variant} style={{ marginBottom: '20px' }}>
          <p style={subheadingStyle}>{variant}</p>
          <div style={rowStyle}>
            <span style={labelStyle}>Default</span>
            <ErrorButton variant={variant} label="Error button" />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Loading</span>
            <ErrorButton variant={variant} label="Error button" loading />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Disabled</span>
            <ErrorButton variant={variant} label="Error button" disabled />
          </div>
        </div>
      ))}

      <pre style={codeBlockStyle}>{`<ErrorButton loading label="Error button" />
<ErrorButton disabled label="Error button" />`}</pre>
    </div>

    {/* ── Paired usage ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Paired Usage</h2>
      <p style={bodyStyle}>
        In <strong>CardContent</strong> error notifications, the solid variant is used as the primary
        CTA and the ghost variant as the secondary action. This pairing communicates urgency while
        providing a lower-risk exit path.
      </p>
      <div style={{ display: 'flex', gap: '8px', padding: '24px', background: 'var(--global-color-status-red-light)', borderRadius: 'var(--global-spacing-radius-6px)', marginBottom: '16px', border: '1px solid var(--global-color-status-red)' }}>
        <ErrorButton variant="solid" label="Error button" />
        <ErrorButton variant="ghost" label="Error button" />
      </div>
      <pre style={codeBlockStyle}>{`// Primary + secondary in error card
<ErrorButton variant="solid" label="Error button" />
<ErrorButton variant="ghost" label="Error button" />`}</pre>
    </div>

    {/* ── Design Tokens ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Design Tokens</h2>
      <p style={bodyStyle}>
        All colours and borders use the <code>--btn-error-*</code> token family defined in{' '}
        <code>src/styles/tokens.css</code>. Layout tokens are shared with <code>--btn-*</code>.
      </p>

      <table style={tokenTableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Token</th>
            <th style={thStyle}>Value</th>
            <th style={thStyle}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['--btn-error-solid-bg', '--global-color-status-red', 'Solid variant background'],
            ['--btn-error-solid-color', '--global-color-base-white', 'Solid variant text/icon colour'],
            ['--btn-error-solid-border-color', '--global-color-status-red', 'Solid variant border colour'],
            ['--btn-error-solid-border-width', '--global-spacing-stroke-0-5px', 'Solid default border width'],
            ['--btn-error-solid-border-width-hover', '--global-spacing-stroke-2px', 'Solid hover/active border width'],
            ['--btn-error-solid-shadow-hover', '2px 2px 0px 0px base-black', 'Solid hover box-shadow'],
            ['--btn-error-solid-border-width-focus', '--global-spacing-stroke-2px', 'Solid focused border width'],
            ['--btn-error-ghost-bg', '--global-color-base-white', 'Ghost variant background'],
            ['--btn-error-ghost-color', '--global-color-status-red', 'Ghost variant text/icon colour'],
            ['--btn-error-ghost-border-color', '--global-color-status-red', 'Ghost variant border colour'],
            ['--btn-error-ghost-border-width', '--global-spacing-stroke-1px', 'Ghost default border width'],
            ['--btn-error-ghost-border-width-hover', '--global-spacing-stroke-2px', 'Ghost hover/active border width'],
            ['--btn-error-ghost-shadow-hover', '2px 2px 0px 0px base-black', 'Ghost hover box-shadow'],
            ['--btn-error-ghost-border-width-focus', '--global-spacing-stroke-2px', 'Ghost focused border width'],
            ['--btn-error-bg-disabled', '--global-color-neutral-gray-100', 'Disabled background (both)'],
            ['--btn-error-color-disabled', '--global-color-neutral-gray-400', 'Disabled text/icon colour (both)'],
            ['--btn-error-border-color-disabled', '--global-color-neutral-gray-400', 'Disabled border colour (both)'],
            ['--btn-error-border-width-disabled', '--global-spacing-stroke-0-5px', 'Disabled border width (both)'],
          ].map(([token, value, usage]) => (
            <tr key={token}>
              <td style={tdCodeStyle}>{token}</td>
              <td style={tdCodeStyle}>{value}</td>
              <td style={tdStyle}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ── Props ── */}
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Props</h2>
      <table style={tokenTableStyle}>
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
            ['label', 'string', '"Error button"', 'Button text'],
            ['variant', '"solid" | "ghost"', '"solid"', 'Visual style — filled red or ghost outline'],
            ['size', '"small" | "default" | "large"', '"default"', 'Controls height, padding, font, and icon size'],
            ['loading', 'boolean', 'false', 'Shows spinner, disables interaction'],
            ['disabled', 'boolean', 'false', 'Grays out button, disables interaction'],
            ['type', '"button" | "submit" | "reset"', '"button"', 'HTML button type attribute'],
            ['onClick', '(e) => void', '—', 'Click handler'],
            ['className', 'string', '""', 'Additional CSS class(es) on the root element'],
            ['ariaLabel', 'string', '—', 'Accessible label override'],
          ].map(([prop, type, def, desc]) => (
            <tr key={prop}>
              <td style={tdCodeStyle}>{prop}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', fontSize: '12px' }}>{type}</td>
              <td style={{ ...tdStyle, fontFamily: 'monospace', fontSize: '12px', color: 'var(--global-color-neutral-gray-500)' }}>{def}</td>
              <td style={tdStyle}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ErrorButtonDocs;
