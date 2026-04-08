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
};

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-12px)',
};

const label: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '72px',
  flexShrink: 0,
};

const verticalBox: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-24px)',
  height: 'var(--global-spacing-sizing-80px)',
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const ALL_LINES: DividerLine[] = ['solid', 'dashed', 'dotted'];
const ALL_THICKNESSES: DividerThickness[] = ['0-5px', '1px', '2px', '3px', '4px', '8px'];

export const DividerDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Divider"
      subtitle="A lightweight separator line for creating visual breaks between content sections, layout regions, and list items."
    />

    <DocsTemplate.BodyText>
      <strong>Divider</strong> is an Atom-level layout primitive that renders a single
      separator line. It supports two orientations (<code>horizontal</code> and{' '}
      <code>vertical</code>), three line styles (<code>solid</code>, <code>dashed</code>,{' '}
      <code>dotted</code>), and six stroke thicknesses (0.5 px – 8 px). All values
      reference design tokens — no hardcoded numbers are used.
    </DocsTemplate.BodyText>

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
            description: 'A full-width line rendered as a border-top. Stretches to 100% of its containing block width.',
          },
          {
            id: 2,
            name: 'Vertical divider',
            token: '--divider-color, --global-spacing-stroke-*',
            description: 'A full-height line rendered as a border-left. Uses align-self: stretch to fill its flex/grid container height.',
          },
          {
            id: 3,
            name: 'Line style',
            token: 'border-*-style CSS property',
            description: 'Solid — continuous line. Dashed — broken segments. Dotted — circular dots.',
          },
          {
            id: 4,
            name: 'Thickness',
            token: '--global-spacing-stroke-0-5px through --global-spacing-stroke-8px',
            description: 'Six steps from hairline (0.5px) to heavy (8px). Applied via the global stroke token scale.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Horizontal alignment ── */}
    <DocsTemplate.Section
      title="Horizontal Dividers"
      subtitle="Spans 100% of its container width. Use between stacked sections, list items, and card regions."
    >
      <DocsTemplate.Subsection title="Line Styles">
        <div style={previewWrap}>
          {ALL_LINES.map((lineStyle) => (
            <div key={lineStyle} style={row}>
              <span style={label}>{lineStyle}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line={lineStyle} thickness="1px" />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Thickness Scale">
        <div style={previewWrap}>
          {ALL_THICKNESSES.map((t) => (
            <div key={t} style={row}>
              <span style={label}>{t}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line="solid" thickness={t} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dashed Thicknesses">
        <div style={previewWrap}>
          {ALL_THICKNESSES.map((t) => (
            <div key={t} style={row}>
              <span style={label}>{t}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line="dashed" thickness={t} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dotted Thicknesses">
        <div style={previewWrap}>
          {ALL_THICKNESSES.map((t) => (
            <div key={t} style={row}>
              <span style={label}>{t}</span>
              <div style={{ flex: 1 }}>
                <Divider alignment="horizontal" line="dotted" thickness={t} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Vertical alignment ── */}
    <DocsTemplate.Section
      title="Vertical Dividers"
      subtitle="Stretches to the full height of its flex/grid container. Use to separate inline columns, sidebar items, and toolbar groups."
    >
      <DocsTemplate.Subsection title="Line Styles">
        <div style={verticalBox}>
          {ALL_LINES.map((lineStyle) => (
            <React.Fragment key={lineStyle}>
              <Divider alignment="vertical" line={lineStyle} thickness="1px" />
            </React.Fragment>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Thickness Scale">
        <div style={verticalBox}>
          {ALL_THICKNESSES.map((t) => (
            <React.Fragment key={t}>
              <Divider alignment="vertical" line="solid" thickness={t} />
            </React.Fragment>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Context examples ── */}
    <DocsTemplate.Section
      title="In Context"
      subtitle="How dividers look between real content elements."
    >
      <DocsTemplate.Subsection title="Between stacked text blocks">
        <div style={{ ...previewWrap, padding: 'var(--global-spacing-sizing-24px)' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Section one — introductory content</p>
          <Divider alignment="horizontal" line="solid" thickness="1px" />
          <p style={{ margin: 0, fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Section two — supporting content</p>
          <Divider alignment="horizontal" line="dashed" thickness="1px" />
          <p style={{ margin: 0, fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Section three — closing content</p>
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Between inline columns">
        <div style={{ ...verticalBox, height: 'var(--global-spacing-sizing-64px)', padding: 'var(--global-spacing-sizing-16px) var(--global-spacing-sizing-24px)' }}>
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Dashboard</span>
          <Divider alignment="vertical" line="solid" thickness="1px" />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Reports</span>
          <Divider alignment="vertical" line="solid" thickness="1px" />
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--global-type-size-primary-label)' }}>Settings</span>
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Component Token">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--divider-color', description: 'Divider line colour — var(--global-color-neutral-gray-300) #D2D5DA. Neutral and unobtrusive.' },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Stroke Thickness — Global Scale">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--global-spacing-stroke-0-5px', description: 'Hairline divider — 0.5px (default for vertical dividers in compact toolbars)' },
            { name: '--global-spacing-stroke-1px', description: 'Standard divider — 1px (most common default)' },
            { name: '--global-spacing-stroke-2px', description: 'Medium emphasis — 2px' },
            { name: '--global-spacing-stroke-3px', description: 'Heavy emphasis — 3px' },
            { name: '--global-spacing-stroke-4px', description: 'Strong section break — 4px' },
            { name: '--global-spacing-stroke-8px', description: 'Bold visual separator — 8px (use sparingly)' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Props Reference ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'line', description: '"solid" | "dashed" | "dotted" — line style of the divider. Default: "solid".' },
          { name: 'thickness', description: '"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width. Default: "1px".' },
          { name: 'alignment', description: '"horizontal" | "vertical" — orientation. Default: "horizontal".' },
          { name: 'className', description: 'string — optional CSS class for layout overrides (margin, max-width, etc.).' },
          { name: 'ariaLabel', description: 'string — accessible label announced by screen readers. Default: "Divider".' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Code example ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { Divider } from './Divider';

// Horizontal — default solid 1px
<Divider />

// Horizontal — dashed 2px
<Divider line="dashed" thickness="2px" />

// Horizontal — dotted hairline
<Divider line="dotted" thickness="0-5px" />

// Vertical — solid 1px between inline elements
<div style={{ display: 'flex', alignItems: 'center', height: '48px' }}>
  <span>Left</span>
  <Divider alignment="vertical" thickness="1px" />
  <span>Right</span>
</div>

// With custom layout class
<Divider className={styles.myDivider} line="dashed" />`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Neutral by default">
          The divider colour (<code>--divider-color</code>) maps to neutral-gray-300 — visible
          enough to delineate structure without competing with content. Never change the colour
          to a brand or status colour unless there is a deliberate semantic reason.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match weight to hierarchy">
          Use thin lines (0.5px–1px) for subtle separation within a section. Use thicker lines
          (2px–4px) at major section boundaries. Reserve 8px for top-level structural breaks
          like navigation/content splits.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Solid for primary, dashed for secondary">
          Solid conveys a definitive boundary. Dashed or dotted lines signal softer, optional,
          or provisional separation — use them in data tables, empty states, or drag-and-drop
          placeholders.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Vertical always needs a container height">
          Vertical dividers use <code>align-self: stretch</code> and require their parent to
          be a flex or grid container with a defined height. Wrap in a flex row and set
          <code>height</code> or let the flex children define the container height.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DividerDocs;
