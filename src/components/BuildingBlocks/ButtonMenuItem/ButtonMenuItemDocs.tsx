import React from 'react';
import { ButtonMenuItem } from './ButtonMenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const section: React.CSSProperties = {
  marginBottom: 'var(--global-spacing-sizing-40px)',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-lg)',
  fontWeight: 'var(--global-type-weight-default)',
  color: 'var(--global-color-base-black)',
  margin: '0 0 var(--global-spacing-sizing-4px)',
};

const sectionDesc: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-sm)',
  fontWeight: 'var(--global-type-weight-light)',
  color: 'var(--global-color-neutral-gray-700)',
  margin: '0 0 var(--global-spacing-sizing-20px)',
  lineHeight: 'var(--global-type-line-height-label)',
};

const grid: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--global-spacing-sizing-16px)',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
};

const col: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-4px)',
};

const colLabel: React.CSSProperties = {
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  textTransform: 'capitalize' as const,
  marginBottom: 'var(--global-spacing-sizing-4px)',
};

const tokenTable: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  fontFamily: 'var(--brand-font-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
};

const th: React.CSSProperties = {
  textAlign: 'left' as const,
  padding: 'var(--global-spacing-sizing-6px) var(--global-spacing-sizing-12px)',
  borderBottom: '2px solid var(--global-color-neutral-gray-200)',
  fontFamily: 'var(--brand-font-primary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  fontWeight: 'var(--global-type-weight-medium)',
  color: 'var(--global-color-neutral-gray-700)',
};

const td: React.CSSProperties = {
  padding: 'var(--global-spacing-sizing-6px) var(--global-spacing-sizing-12px)',
  borderBottom: '1px solid var(--global-color-neutral-gray-100)',
  color: 'var(--global-color-neutral-gray-700)',
  verticalAlign: 'top' as const,
};

const codePill: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--global-color-neutral-gray-100)',
  borderRadius: 'var(--global-spacing-radius-4px)',
  padding: '1px 6px',
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--global-color-secondary-navy)',
};

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--global-color-neutral-gray-100)',
  margin: 'var(--global-spacing-sizing-40px) 0',
};

export const ButtonMenuItemDocs = (): JSX.Element => (
  <div
    style={{
      fontFamily: 'var(--brand-font-primary)',
      color: 'var(--global-color-base-black)',
      padding: 'var(--global-spacing-sizing-32px)',
      maxWidth: '900px',
    }}
  >
    {/* ── Header ── */}
    <div style={{ marginBottom: 'var(--global-spacing-sizing-32px)' }}>
      <div
        style={{
          display: 'inline-block',
          background: 'var(--global-color-primary-blue-blue-50)',
          color: 'var(--global-color-secondary-blue-gray)',
          borderRadius: 'var(--global-spacing-radius-4px)',
          padding: 'var(--global-spacing-sizing-2px) var(--global-spacing-sizing-8px)',
          fontSize: 'var(--global-type-size-primary-label-xs)',
          fontWeight: 'var(--global-type-weight-default)',
          marginBottom: 'var(--global-spacing-sizing-8px)',
          border: '1px solid var(--global-color-primary-blue-blue-300)',
        }}
      >
        Foundation / BuildingBlocks / Button
      </div>
      <h1
        style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: 'var(--global-type-size-primary-heading-3)',
          fontWeight: 'var(--global-type-weight-default)',
          margin: '0 0 var(--global-spacing-sizing-8px)',
          color: 'var(--global-color-base-black)',
        }}
      >
        Button Menu Item
      </h1>
      <p style={sectionDesc}>
        A standalone, position-aware menu list item used as a building block
        within <strong>ButtonMenu</strong>. Each item can be placed as{' '}
        <code style={codePill}>top</code>, <code style={codePill}>mid</code>,{' '}
        <code style={codePill}>bottom</code>, or <code style={codePill}>solo</code>,
        adjusting its border-radius and border pattern so stacked items read as
        a single card with collapsed internal borders.
      </p>
    </div>

    <hr style={divider} />

    {/* ── States ── */}
    <div style={section}>
      <h2 style={sectionTitle}>States</h2>
      <p style={sectionDesc}>
        Each item supports five interactive states: default, hover (background
        tint only — no shadow or text colour change), focus-visible (CSS),
        selected, and disabled.
      </p>
      <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-32px)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Default stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', maxWidth: '280px' }}>
          <div style={colLabel}>Default</div>
          <p style={{ ...sectionDesc, fontSize: 'var(--global-type-size-primary-label-xs)', margin: '0 0 var(--global-spacing-sizing-8px)' }}>
            Blue-50 background (<code style={codePill}>--btn-menu-item-bg</code>),
            blue-300 border, blue-gray text. Hover to see the background tint
            shift to blue-100 — no shadow or text colour change.
          </p>
          <ButtonMenuItem label="This is the top" position="top" />
          <ButtonMenuItem label="This is the middle" position="mid" />
          <ButtonMenuItem label="This is the bottom" position="bottom" />
        </div>

        {/* Selected */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', maxWidth: '280px' }}>
          <div style={colLabel}>Selected</div>
          <p style={{ ...sectionDesc, fontSize: 'var(--global-type-size-primary-label-xs)', margin: '0 0 var(--global-spacing-sizing-8px)' }}>
            Brand-primary fill (<code style={codePill}>--btn-menu-item-bg-selected</code>{' '}
            / #3776CE) with white text (<code style={codePill}>--btn-menu-item-color-selected</code>).
            Border matches at 0.5px. Only one item per list should be selected.
          </p>
          <ButtonMenuItem label="Not selected" position="top" />
          <ButtonMenuItem label="Selected item" position="mid" selected />
          <ButtonMenuItem label="Not selected" position="bottom" />
        </div>

        {/* Disabled */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', maxWidth: '280px' }}>
          <div style={colLabel}>Disabled</div>
          <p style={{ ...sectionDesc, fontSize: 'var(--global-type-size-primary-label-xs)', margin: '0 0 var(--global-spacing-sizing-8px)' }}>
            Gray-50 background, gray-200 border, gray-300 text
            (<code style={codePill}>--btn-menu-item-color-disabled</code>).
            Cursor shows not-allowed; pointer events are disabled.
          </p>
          <ButtonMenuItem label="Enabled item" position="top" />
          <ButtonMenuItem label="Disabled item" position="mid" disabled />
          <ButtonMenuItem label="Enabled item" position="bottom" />
        </div>
      </div>
    </div>

    <hr style={divider} />

    {/* ── Position ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Position</h2>
      <p style={sectionDesc}>
        The <code style={codePill}>position</code> prop controls which corners
        are rounded and which border edges are visible. Use this to stack items
        into a cohesive card-like list.
      </p>
      <div style={grid}>
        {(['top', 'mid', 'bottom', 'solo'] as const).map((pos) => (
          <div key={pos} style={col}>
            <span style={colLabel}>{pos}</span>
            <ButtonMenuItem label={`Position: ${pos}`} position={pos} />
          </div>
        ))}
      </div>
    </div>

    <hr style={divider} />

    {/* ── Sizes ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Sizes</h2>
      <p style={sectionDesc}>
        Three sizes are available: <code style={codePill}>small</code>,{' '}
        <code style={codePill}>default</code>, and <code style={codePill}>large</code>.
        Size affects font size, icon size, min-height, and padding.
      </p>
      <div style={grid}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size} style={col}>
            <span style={colLabel}>{size}</span>
            <ButtonMenuItem label="This is the top" position="top" size={size} />
            <ButtonMenuItem label="This is the middle" position="mid" size={size} />
            <ButtonMenuItem label="This is the middle" position="mid" size={size} />
            <ButtonMenuItem label="This is the bottom" position="bottom" size={size} />
          </div>
        ))}
      </div>
    </div>

    <hr style={divider} />

    {/* ── Icons ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Optional Elements — Icons</h2>
      <p style={sectionDesc}>
        Leading and trailing icons can be added via{' '}
        <code style={codePill}>leadingIcon</code> and{' '}
        <code style={codePill}>trailingIcon</code>. Pass an MUI SvgIcon
        component class as the value.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)', maxWidth: '280px' }}>
        <ButtonMenuItem label="Leading icon" position="top" leadingIcon={EditIcon} />
        <ButtonMenuItem label="Trailing icon" position="mid" trailingIcon={ChevronRightIcon} />
        <ButtonMenuItem label="Both icons" position="bottom" leadingIcon={EditIcon} trailingIcon={ChevronRightIcon} />
      </div>
    </div>

    <hr style={divider} />

    {/* ── Design Tokens ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Design Tokens</h2>
      <p style={sectionDesc}>
        All values are driven by component-level tokens that reference global
        primitives. Override any token on a parent scope to theme the component.
      </p>
      <table style={tokenTable}>
        <thead>
          <tr>
            <th style={th}>Token</th>
            <th style={th}>Value / Reference</th>
            <th style={th}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['--btn-menu-item-bg', 'var(--global-color-primary-blue-blue-50)', 'Default background'],
            ['--btn-menu-item-border-color', 'var(--global-color-primary-blue-blue-300)', 'Default border colour (#95A0E5)'],
            ['--btn-menu-item-border-width', 'var(--global-spacing-stroke-1px)', 'Default border width'],
            ['--btn-menu-item-border-width-focus', 'var(--global-spacing-stroke-2px)', 'Focus state border width'],
            ['--btn-menu-item-color', 'var(--global-color-secondary-blue-gray)', 'Default text colour (#61607C)'],
            ['--btn-menu-item-bg-hover', 'var(--global-color-primary-blue-blue-100)', 'Hover background (#E7E9F4)'],
            ['--btn-menu-item-color-hover', 'var(--global-color-secondary-blue-gray)', 'Hover text colour (unchanged)'],
            ['--btn-menu-item-shadow-hover', 'none', 'No shadow on hover (menu items)'],
            ['--btn-menu-item-bg-selected', 'var(--brand-primary)', 'Selected background (#3776CE)'],
            ['--btn-menu-item-border-color-selected', 'var(--brand-primary)', 'Selected border colour'],
            ['--btn-menu-item-border-width-selected', 'var(--global-spacing-stroke-0-5px)', 'Selected border width'],
            ['--btn-menu-item-color-selected', 'var(--global-color-base-white)', 'Selected text colour'],
            ['--btn-menu-item-bg-disabled', 'var(--global-color-neutral-gray-50)', 'Disabled background'],
            ['--btn-menu-item-border-color-disabled', 'var(--global-color-neutral-gray-200)', 'Disabled border colour'],
            ['--btn-menu-item-color-disabled', 'var(--global-color-neutral-gray-300)', 'Disabled text colour'],
            ['--btn-menu-item-radius', 'var(--global-spacing-radius-4px)', 'Corner radius on exposed corners'],
            ['--btn-menu-item-font-family', 'var(--brand-font-primary)', 'F37 Ginger Pro'],
            ['--btn-menu-item-font-weight', 'var(--global-type-weight-light)', '300 — Light'],
            ['--btn-menu-item-font-size', 'var(--global-type-size-primary-label)', '16px — Default size'],
            ['--btn-menu-item-font-size-sm', 'var(--global-type-size-primary-label-sm)', '14px — Small size'],
            ['--btn-menu-item-font-size-lg', 'var(--global-type-size-primary-label-lg)', '18px — Large size'],
            ['--btn-menu-item-icon-size', 'var(--global-spacing-sizing-16px)', 'Icon size — default'],
            ['--btn-menu-item-icon-gap', 'var(--global-spacing-sizing-8px)', 'Gap between icon and label'],
            ['--btn-menu-item-icon-opacity', '0.7', 'Icon opacity'],
          ].map(([token, value, usage]) => (
            <tr key={token}>
              <td style={td}><code style={codePill}>{token}</code></td>
              <td style={td}><code style={{ ...codePill, background: 'transparent', padding: 0, fontFamily: 'monospace' }}>{value}</code></td>
              <td style={{ ...td, color: 'var(--global-color-neutral-gray-600)' }}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <hr style={divider} />

    {/* ── Usage ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Code Example</h2>
      <pre
        style={{
          background: 'var(--global-color-neutral-gray-50)',
          border: '1px solid var(--global-color-neutral-gray-200)',
          borderRadius: 'var(--global-spacing-radius-4px)',
          padding: 'var(--global-spacing-sizing-16px)',
          fontFamily: 'monospace',
          fontSize: '13px',
          overflowX: 'auto' as const,
          color: 'var(--global-color-neutral-gray-800)',
          lineHeight: '1.6',
        }}
      >{`import { ButtonMenuItem } from '@/components/BuildingBlocks/ButtonMenuItem';

// Standalone solo item
<ButtonMenuItem
  label="Edit document"
  position="solo"
  size="default"
  leadingIcon={EditIcon}
  onClick={() => console.log('clicked')}
/>

// Stacked items (top / mid / bottom)
<div role="menu">
  <ButtonMenuItem label="View" position="top" />
  <ButtonMenuItem label="Edit" position="mid" />
  <ButtonMenuItem label="Delete" position="bottom" selected />
</div>`}</pre>
    </div>

    {/* ── Principles ── */}
    <div style={section}>
      <h2 style={sectionTitle}>Principles</h2>
      <ul
        style={{
          paddingLeft: 'var(--global-spacing-sizing-20px)',
          fontFamily: 'var(--brand-font-primary)',
          fontSize: 'var(--global-type-size-primary-label-sm)',
          color: 'var(--global-color-neutral-gray-700)',
          lineHeight: 'var(--global-type-line-height-label)',
        }}
      >
        <li style={{ marginBottom: 'var(--global-spacing-sizing-8px)' }}>
          Use <strong>ButtonMenuItem</strong> as the atomic unit; compose into{' '}
          <strong>ButtonMenu</strong> for full list behaviour.
        </li>
        <li style={{ marginBottom: 'var(--global-spacing-sizing-8px)' }}>
          Always set <code style={codePill}>position</code> when stacking items so
          borders and radii collapse correctly.
        </li>
        <li style={{ marginBottom: 'var(--global-spacing-sizing-8px)' }}>
          Only one item per list should be <code style={codePill}>selected</code> at a time.
        </li>
        <li style={{ marginBottom: 'var(--global-spacing-sizing-8px)' }}>
          Pass any MUI SvgIcon class for <code style={codePill}>leadingIcon</code> /
          <code style={codePill}> trailingIcon</code>.
        </li>
        <li>
          All visual properties are driven by{' '}
          <code style={codePill}>--btn-menu-item-*</code> design tokens — no
          hardcoded colours or sizes.
        </li>
      </ul>
    </div>
  </div>
);

export default ButtonMenuItemDocs;
