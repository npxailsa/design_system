import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Divider } from './Divider';
import type { DividerLine, DividerThickness } from './Divider';

/* ── Demo helpers ────────────────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-12px)',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '72px',
  flexShrink: 0,
};

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-family-primary)',
  fontSize: 'var(--global-type-size-primary-label-sm)',
  fontWeight: 'var(--global-type-weight-medium)' as React.CSSProperties['fontWeight'],
  color: 'var(--global-color-neutral-gray-700)',
  margin: '0 0 var(--global-spacing-sizing-12px)',
  textTransform: 'capitalize' as const,
};

const verticalBox: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-32px)',
  height: 'var(--global-spacing-sizing-80px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  minWidth: '200px',
  width: '100%',
};

const ALL_LINES: DividerLine[] = ['solid', 'dashed', 'dotted'];
const ALL_THICKNESSES: DividerThickness[] = ['0-5px', '1px', '2px', '3px', '4px', '8px'];

export const DividerDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Divider"
      subtitle="A lightweight, fully token-driven separator line for creating visual breaks between content sections, layout regions, and list items."
    />

    <DocsTemplate.BodyText>
      <strong>Divider</strong> is an Atom-level layout primitive that renders a single
      separator line. It supports two orientations (<code>horizontal</code> and{' '}
      <code>vertical</code>), three line styles (<code>solid</code>, <code>dashed</code>,{' '}
      <code>dotted</code>), and six stroke thicknesses (0.5px – 8px). All values reference
      global design tokens — no hardcoded numbers or colours are used.
    </DocsTemplate.BodyText>

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        Built on MUI's <strong>Divider</strong> component (<code>@mui/material/Divider</code>).{' '}
        <code>MuiDivider</code> provides the correct accessible semantics — it renders as an{' '}
        <code>&lt;hr&gt;</code> for horizontal dividers and as a styled{' '}
        <code>&lt;div role="separator" aria-orientation="vertical"&gt;</code> for vertical ones.
        This ensures screen readers correctly identify the element as a separator landmark.
        All visual properties — line style, stroke thickness, and colour — are applied on top
        via CSS Modules and the <code>--divider-*</code> / <code>--global-spacing-stroke-*</code>{' '}
        token family; MUI contributes no colour or width of its own.
      </DocsTemplate.BodyText>
      <DocsTemplate.CodeBlock>
        {`// MUI base import\nimport MuiDivider from '@mui/material/Divider';\n\n// Horizontal (default):\n<MuiDivider className={styles.divider} data-line={line} data-thickness={thickness} />\n\n// Vertical:\n<MuiDivider orientation="vertical" className={styles.divider} data-line={line} />`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ ...previewWrap, gap: 'var(--global-spacing-sizing-16px)' }}>
            <Divider alignment="horizontal" line="solid" thickness="1px" />
            <Divider alignment="horizontal" line="dashed" thickness="1px" />
            <Divider alignment="horizontal" line="dotted" thickness="2px" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Horizontal divider',
            token: '--divider-color, --global-spacing-stroke-*',
            description:
              'A full-width line rendered via border-top. Stretches to 100% of its containing block. Height is zero — all visual weight comes from the border-top-width stroke token.',
          },
          {
            id: 2,
            name: 'Vertical divider',
            token: '--divider-color, --global-spacing-stroke-*',
            description:
              'A full-height line rendered via border-left. Uses align-self: stretch to fill the height of its flex or grid parent. Width is zero.',
          },
          {
            id: 3,
            name: 'Line style',
            token: 'CSS border-*-style property',
            description:
              'Solid — continuous line. Dashed — broken segments. Dotted — circular dots. Applied via CSS modifier classes.',
          },
          {
            id: 4,
            name: 'Thickness',
            token: '--global-spacing-stroke-0-5px → --global-spacing-stroke-8px',
            description:
              'Six steps from hairline (0.5px) to heavy (8px), driven by the global stroke token scale.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ══ HORIZONTAL ══════════════════════════════════════════════════════════ */}
    <DocsTemplate.Section
      title="Horizontal"
      subtitle="Spans 100% of its container width. Use between stacked sections, list items, form groups, and card regions."
    >

      {/* Horizontal / Solid */}
      <DocsTemplate.Subsection title="Horizontal / Solid">
        <div style={previewWrap}>
          <div style={row}>
            <span style={labelStyle}>solid</span>
            <div style={{ flex: 1 }}>
              <Divider alignment="horizontal" line="solid" thickness="1px" />
            </div>
          </div>
        </div>
        <DocsTemplate.BodyText>
          Continuous, unbroken line. The default and most common line style. Use for definitive
          boundaries between distinct content regions.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>

      {/* Horizontal / Dashed */}
      <DocsTemplate.Subsection title="Horizontal / Dashed">
        <div style={previewWrap}>
          <div style={row}>
            <span style={labelStyle}>dashed</span>
            <div style={{ flex: 1 }}>
              <Divider alignment="horizontal" line="dashed" thickness="1px" />
            </div>
          </div>
        </div>
        <DocsTemplate.BodyText>
          Segmented broken line. Signals softer, optional, or provisional separation — suitable
          for data tables, empty-state placeholders, and drag-and-drop drop zones.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>

      {/* Horizontal / Dotted */}
      <DocsTemplate.Subsection title="Horizontal / Dotted">
        <div style={previewWrap}>
          <div style={row}>
            <span style={labelStyle}>dotted</span>
            <div style={{ flex: 1 }}>
              <Divider alignment="horizontal" line="dotted" thickness="1px" />
            </div>
          </div>
        </div>
        <DocsTemplate.BodyText>
          Circular-dot line. Use sparingly for decorative or subtle context separations where a
          dashed line would appear too heavy.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>

      {/* Horizontal / All Line Styles */}
      <DocsTemplate.Subsection title="Horizontal / All Line Styles">
        <div style={previewWrap}>
          {ALL_LINES.map((lineStyle) => (
            <div key={lineStyle} style={row}>
              <span style={labelStyle}>{lineStyle}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line={lineStyle} thickness="1px" />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      {/* Horizontal / Thickness Scale (Solid) */}
      <DocsTemplate.Subsection title="Horizontal / Thickness Scale (Solid)">
        <div style={previewWrap}>
          {ALL_THICKNESSES.map((t) => (
            <div key={t} style={row}>
              <span style={labelStyle}>{t}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line="solid" thickness={t} />
              </div>
            </div>
          ))}
        </div>
        <DocsTemplate.BodyText>
          Six stroke steps driven entirely by <code>--global-spacing-stroke-*</code> tokens.
          Use thin lines (0.5px–1px) within sections, thicker lines (2px–4px) at major
          boundaries, and 8px only for top-level structural breaks.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>

      {/* Horizontal / Full Matrix */}
      <DocsTemplate.Subsection title="Horizontal / Full Matrix">
        <div style={{ ...previewWrap, gap: 'var(--global-spacing-sizing-36px)' }}>
          {ALL_LINES.map((lineStyle) => (
            <div key={lineStyle}>
              <p style={sectionLabel}>{lineStyle}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)' }}>
                {ALL_THICKNESSES.map((t) => (
                  <div key={t} style={row}>
                    <span style={labelStyle}>{t}</span>
                    <div style={{ flex: 1 }}>
                      <Divider alignment="horizontal" line={lineStyle} thickness={t} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ══ VERTICAL ════════════════════════════════════════════════════════════ */}
    <DocsTemplate.Section
      title="Vertical"
      subtitle="Stretches to the full height of its flex or grid parent. Use to separate inline columns, sidebar items, navigation breadcrumbs, and toolbar groups."
    >
      <DocsTemplate.BodyText>
        Vertical dividers require their parent to be a <strong>flex</strong> or{' '}
        <strong>grid</strong> container with a defined height. The divider uses{' '}
        <code>align-self: stretch</code> internally — no explicit height prop is needed.
      </DocsTemplate.BodyText>

      {/* Vertical / All Line Styles */}
      <DocsTemplate.Subsection title="Vertical / All Line Styles">
        <div style={verticalBox}>
          {ALL_LINES.map((lineStyle) => (
            <div
              key={lineStyle}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}
            >
              <Divider alignment="vertical" line={lineStyle} thickness="1px" />
              <span style={{ ...labelStyle, minWidth: 'auto', textAlign: 'center' }}>{lineStyle}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      {/* Vertical / Thickness Scale (Solid) */}
      <DocsTemplate.Subsection title="Vertical / Thickness Scale (Solid)">
        <div style={verticalBox}>
          {ALL_THICKNESSES.map((t) => (
            <div
              key={t}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}
            >
              <Divider alignment="vertical" line="solid" thickness={t} />
              <span style={{ ...labelStyle, minWidth: 'auto', textAlign: 'center' }}>{t}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ══ IN CONTEXT ══════════════════════════════════════════════════════════ */}
    <DocsTemplate.Section
      title="In Context"
      subtitle="How dividers integrate with real content elements."
    >
      {/* In Context / Between Content Blocks */}
      <DocsTemplate.Subsection title="In Context / Between Content Blocks">
        <div style={{ minWidth: '200px', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div>
            <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Personal Details</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Name, email, and phone number</p>
          </div>
          <Divider alignment="horizontal" line="solid" thickness="0-5px" />
          <div>
            <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Preferences</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Notifications and display settings</p>
          </div>
          <Divider alignment="horizontal" line="solid" thickness="0-5px" />
          <div>
            <p style={{ margin: '0 0 var(--global-spacing-sizing-4px)', fontFamily: 'var(--font-family-primary)', fontWeight: 600, fontSize: 'var(--global-type-size-primary-label)' }}>Security</p>
            <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)' }}>Password and two-factor authentication</p>
          </div>
        </div>
      </DocsTemplate.Subsection>

      {/* In Context / Between Inline Items */}
      <DocsTemplate.Subsection title="In Context / Between Inline Items">
        <nav style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          {['Dashboard', 'Reports', 'Analytics', 'Settings'].map((item, i, arr) => (
            <React.Fragment key={item}>
              <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: i === 0 ? 'var(--global-color-primary-blue)' : 'var(--global-color-neutral-gray-600)', cursor: 'pointer' }}>{item}</span>
              {i < arr.length - 1 && (
                <Divider alignment="vertical" line="solid" thickness="1px" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Component Token">
        <DocsTemplate.TokenTable
          tokens={[
            {
              name: '--divider-color',
              description:
                'Divider line colour — resolves to var(--global-color-neutral-gray-300) #D2D5DA. Neutral and unobtrusive by default. Defined in tokens.css; do not override per-instance.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Stroke Scale — Global Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--global-spacing-stroke-0-5px', description: 'Hairline — 0.5px. Ideal for subtle list separators and compact toolbar dividers.' },
            { name: '--global-spacing-stroke-1px', description: 'Standard — 1px. Most common default; use for the majority of horizontal and vertical dividers.' },
            { name: '--global-spacing-stroke-2px', description: 'Medium emphasis — 2px. Section-level boundaries within a content area.' },
            { name: '--global-spacing-stroke-3px', description: 'Heavy emphasis — 3px. Strong visual break between major groups.' },
            { name: '--global-spacing-stroke-4px', description: 'Strong section break — 4px. Use at top-level content region borders.' },
            { name: '--global-spacing-stroke-8px', description: 'Bold separator — 8px. Use sparingly for navigation/content structural splits.' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Props Reference ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'line', description: '"solid" | "dashed" | "dotted" — line style of the divider. Default: "solid".' },
          { name: 'thickness', description: '"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width mapped to the global stroke token scale. Default: "1px".' },
          { name: 'alignment', description: '"horizontal" | "vertical" — orientation. Horizontal spans container width; vertical spans container height. Default: "horizontal".' },
          { name: 'className', description: 'string — optional CSS class for layout overrides such as margin, max-width, or flex-grow.' },
          { name: 'ariaLabel', description: 'string — accessible label announced by screen readers. Default: "Divider".' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { Divider } from './Divider';

// Horizontal — default solid 1px (most common)
<Divider />

// Horizontal / Solid — custom thickness
<Divider line="solid" thickness="2px" />

// Horizontal / Dashed
<Divider line="dashed" thickness="1px" />

// Horizontal / Dotted — hairline
<Divider line="dotted" thickness="0-5px" />

// Vertical — between inline elements (parent must be a flex container)
<div style={{ display: 'flex', alignItems: 'center', height: '48px', gap: '16px' }}>
  <span>Dashboard</span>
  <Divider alignment="vertical" line="solid" thickness="1px" />
  <span>Reports</span>
</div>

// Custom layout class override
<Divider className={styles.myDivider} line="dashed" thickness="1px" />`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Neutral by default">
          The divider colour (<code>--divider-color</code>) maps to{' '}
          <code>--global-color-neutral-gray-300</code> — visible enough to delineate structure
          without competing with content. Do not override the colour to a brand or status
          value unless there is a deliberate semantic reason.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match weight to hierarchy">
          Use thin strokes (0.5px–1px) for subtle separation within a section. Use thicker
          strokes (2px–4px) at major section boundaries. Reserve 8px for top-level structural
          breaks such as navigation/content divides.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Solid for primary, dashed/dotted for secondary">
          Solid conveys a definitive boundary. Dashed signals softer or provisional separation
          — use in data tables, drag-and-drop zones, or empty states. Dotted is decorative;
          use sparingly.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Vertical dividers require a flex or grid parent">
          Vertical dividers use <code>align-self: stretch</code> internally. The parent must
          be a flex or grid container with a defined height. No explicit height prop is needed
          — the component fills the container automatically.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DividerDocs;
