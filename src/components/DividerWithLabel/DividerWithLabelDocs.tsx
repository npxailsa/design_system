import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { DividerWithLabel } from './DividerWithLabel';
import type { DividerWithLabelPosition, DividerWithLabelSize } from './DividerWithLabel';
import type { DividerLine, DividerThickness } from '../Divider/Divider';

/* ── Demo helpers ────────────────────────────────────────────────────────── */

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-12px)',
};

const labelTag: React.CSSProperties = {
  fontFamily: 'var(--font-family-secondary)',
  fontSize: 'var(--global-type-size-primary-label-xs)',
  color: 'var(--global-color-neutral-gray-500)',
  minWidth: '80px',
  flexShrink: 0,
};

const ALL_POSITIONS: DividerWithLabelPosition[] = ['left', 'center', 'right'];
const ALL_SIZES: DividerWithLabelSize[]          = ['xs', 'sm', 'default'];
const ALL_LINES: DividerLine[]                   = ['solid', 'dashed', 'dotted'];
const ALL_THICKNESSES: DividerThickness[]        = ['0-5px', '1px', '2px', '3px', '4px', '8px'];

export const DividerWithLabelDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Divider with Label"
      subtitle="A horizontal separator that embeds a readable text label directly within the divider line, using a white background to ensure legibility on any surface."
    />

    <DocsTemplate.BodyText>
      <strong>DividerWithLabel</strong> extends the base{' '}
      <strong>Divider</strong> primitive with a text label. The label floats on
      top of the line, masked by a white background (<code>--divider-label-bg</code>),
      so it remains readable regardless of the underlying surface colour. The
      label can be positioned at the <code>left</code>, <code>center</code> (default),
      or <code>right</code> of the line and supports three text sizes. All spacing,
      colour, and stroke values are driven by global design tokens.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ ...previewWrap, gap: 'var(--global-spacing-sizing-16px)' }}>
            <DividerWithLabel label="Divider Label" labelPosition="center" />
            <DividerWithLabel label="Divider Label" labelPosition="left" />
            <DividerWithLabel label="Divider Label" labelPosition="right" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Left line segment',
            token: '--divider-color, --global-spacing-stroke-*',
            description: 'The line to the left of the label. Width grows (flex: 1) for center and right positions; fixed at 16px for the left position.',
          },
          {
            id: 2,
            name: 'Label',
            token: '--divider-label-bg, --divider-label-color, --divider-label-padding-x',
            description: 'The text span. Background defaults to white (--divider-label-bg) and is non-transparent to "cut" through the divider line visually.',
          },
          {
            id: 3,
            name: 'Right line segment',
            token: '--divider-color, --global-spacing-stroke-*',
            description: 'The line to the right of the label. Width grows (flex: 1) for center and left positions; fixed at 16px for the right position.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Label Positions ── */}
    <DocsTemplate.Section
      title="Label Position"
      subtitle="Controls where the label sits along the horizontal line. Corresponds to the labelPosition prop."
    >
      <DocsTemplate.Subsection title="Label Position / All">
        <div style={previewWrap}>
          {ALL_POSITIONS.map((pos) => (
            <div key={pos} style={rowStyle}>
              <span style={labelTag}>{pos}</span>
              <div style={{ flex: 1 }}>
                <DividerWithLabel label="Divider Label" labelPosition={pos} />
              </div>
            </div>
          ))}
        </div>
        <DocsTemplate.BodyText>
          <strong>center</strong> — label floats in the middle; equal flex on both sides.{' '}
          <strong>left</strong> — label is near the leading edge with a short 16px stub on the left.{' '}
          <strong>right</strong> — label is near the trailing edge with a short 16px stub on the right.
        </DocsTemplate.BodyText>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Label Sizes ── */}
    <DocsTemplate.Section
      title="Label Size"
      subtitle="Three text sizes mapped to the global type scale."
    >
      <DocsTemplate.Subsection title="Label Size / All">
        <div style={previewWrap}>
          {ALL_SIZES.map((size) => (
            <div key={size} style={rowStyle}>
              <span style={labelTag}>{size}</span>
              <div style={{ flex: 1 }}>
                <DividerWithLabel label="Divider Label" labelSize={size} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Line Styles ── */}
    <DocsTemplate.Section
      title="Line Style"
      subtitle="Inherits the same three line styles as the base Divider component."
    >
      <DocsTemplate.Subsection title="Line Style / All">
        <div style={previewWrap}>
          {ALL_LINES.map((line) => (
            <div key={line} style={rowStyle}>
              <span style={labelTag}>{line}</span>
              <div style={{ flex: 1 }}>
                <DividerWithLabel label="Divider Label" line={line} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Thickness ── */}
    <DocsTemplate.Section
      title="Thickness"
      subtitle="Six stroke steps driven by the global stroke token scale."
    >
      <DocsTemplate.Subsection title="Thickness / Scale">
        <div style={previewWrap}>
          {ALL_THICKNESSES.map((t) => (
            <div key={t} style={rowStyle}>
              <span style={labelTag}>{t}</span>
              <div style={{ flex: 1 }}>
                <DividerWithLabel label="Divider Label" thickness={t} />
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── In Context ── */}
    <DocsTemplate.Section
      title="In Context"
      subtitle="How DividerWithLabel integrates with real UI patterns."
    >
      <DocsTemplate.Subsection title="In Context / Form Sections">
        <DocsTemplate.BodyText>
          Left-aligned, extra-small label used to group fields inside a settings form.
        </DocsTemplate.BodyText>
        <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <DividerWithLabel label="Personal Details" labelPosition="left" labelSize="xs" />
          <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Name field</p>
          <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Email field</p>
          <DividerWithLabel label="Security" labelPosition="left" labelSize="xs" />
          <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-700)' }}>Password field</p>
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="In Context / Or Separator">
        <DocsTemplate.BodyText>
          Centered "or" divider used between two authentication methods.
        </DocsTemplate.BodyText>
        <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-20px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-base-white)', borderRadius: 'var(--global-spacing-radius-8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-family-primary)', fontWeight: 600, textAlign: 'center', fontSize: 'var(--global-type-size-primary-label)' }}>Continue with Google</p>
          <DividerWithLabel label="or" labelPosition="center" labelSize="xs" />
          <p style={{ margin: 0, fontFamily: 'var(--font-family-secondary)', fontSize: 'var(--global-type-size-primary-label-sm)', color: 'var(--global-color-neutral-gray-600)', textAlign: 'center' }}>Sign in with email and password</p>
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.Subsection title="Component Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            {
              name: '--divider-label-bg',
              description: 'Label background colour — var(--global-color-base-white) #FFFFFF. Ensures the text masks the divider line beneath it and remains legible on any surface.',
            },
            {
              name: '--divider-label-color',
              description: 'Label text colour — var(--global-color-neutral-gray-500) #6D7280. Neutral mid-tone; visible without competing with surrounding content.',
            },
            {
              name: '--divider-label-padding-x',
              description: 'Horizontal padding on the label span — var(--global-spacing-sizing-12px) 12px. Controls the gap between the label text and the divider lines on either side.',
            },
            {
              name: '--divider-color',
              description: 'Line colour — var(--global-color-neutral-gray-300) #D2D5DA. Shared with the base Divider component.',
            },
          ]}
        />
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Stroke Scale — Global Tokens">
        <DocsTemplate.TokenTable
          tokens={[
            { name: '--global-spacing-stroke-0-5px', description: 'Hairline — 0.5px.' },
            { name: '--global-spacing-stroke-1px', description: 'Standard — 1px (default).' },
            { name: '--global-spacing-stroke-2px', description: 'Medium emphasis — 2px.' },
            { name: '--global-spacing-stroke-3px', description: 'Heavy — 3px.' },
            { name: '--global-spacing-stroke-4px', description: 'Strong — 4px.' },
            { name: '--global-spacing-stroke-8px', description: 'Bold — 8px (use sparingly).' },
          ]}
        />
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Props Reference ── */}
    <DocsTemplate.Section title="Props Reference">
      <DocsTemplate.TokenTable
        tokens={[
          { name: 'label', description: 'string — required. The text displayed on the divider.' },
          { name: 'labelPosition', description: '"left" | "center" | "right" — where the label sits along the line. Default: "center".' },
          { name: 'labelSize', description: '"xs" | "sm" | "default" — text size mapped to 12px / 14px / 16px via global type tokens. Default: "sm".' },
          { name: 'line', description: '"solid" | "dashed" | "dotted" — line style. Default: "solid".' },
          { name: 'thickness', description: '"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width. Default: "1px".' },
          { name: 'className', description: 'string — optional CSS class for layout overrides (margin, max-width, etc.).' },
          { name: 'ariaLabel', description: 'string — accessible label for screen readers. Default: "Divider".' },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage">
      <DocsTemplate.CodeBlock>{`import { DividerWithLabel } from './DividerWithLabel';

// Default — centered solid 1px, sm text
<DividerWithLabel label="Section Title" />

// Left-aligned, extra-small text, hairline stroke
<DividerWithLabel
  label="Personal Details"
  labelPosition="left"
  labelSize="xs"
  thickness="0-5px"
/>

// Centered "or" separator, dashed line
<DividerWithLabel
  label="or"
  labelPosition="center"
  labelSize="xs"
  line="dashed"
/>

// Right-aligned, default text size
<DividerWithLabel
  label="End of section"
  labelPosition="right"
  labelSize="default"
/>`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="White background is required">
          The label always carries a white background (<code>--divider-label-bg</code>).
          This is intentional — it visually "cuts" the divider line and ensures the text
          is legible on any surface colour. Do not set the background to{' '}
          <code>transparent</code>.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Use labels sparingly">
          Labelled dividers create strong visual hierarchy. Use them only where the label
          adds genuine meaning (form section headers, "or" separators, timeline markers).
          For decorative separation, use the plain <strong>Divider</strong> component.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match label position to reading flow">
          Left-aligned labels suit group headings that lead into content below. Centered
          labels work for inline separators like "or". Right-aligned labels are rare —
          use only when the label concludes a content block.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Keep label text short">
          Labels should be 1–3 words. Long labels reduce the visible line segments and
          weaken the separator metaphor. If more context is needed, use a heading above
          the plain Divider instead.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default DividerWithLabelDocs;
