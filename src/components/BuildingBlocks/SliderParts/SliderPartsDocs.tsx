import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { SliderParts } from './SliderParts';

export const SliderPartsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="SliderParts"
      subtitle="A single or range slider exposing the individual design-system parts: track, rail, thumb, and endpoint marks. Built on MUI Slider with design-token colours and three sizes."
    />

    <DocsTemplate.BodyText>
      <strong>SliderParts</strong> wraps MUI <code>Slider</code> and applies the Echo design system's
      colour tokens and sizing scale. The component can operate as a single-thumb slider or a range
      slider when the <code>value</code> prop is an array. Endpoint marks (min/max dots with labels)
      are shown by default via <code>showMarks</code>.
    </DocsTemplate.BodyText>

    <DocsTemplate.Anatomy
      parts={[
        { number: 1, label: 'Rail', description: 'The full-width background track. Always rendered in a neutral gray.' },
        { number: 2, label: 'Track', description: 'The filled portion of the rail from min (or start thumb) to the current value. Renders in the variant colour.' },
        { number: 3, label: 'Thumb', description: 'The circular drag handle. Rendered in the variant colour.' },
        { number: 4, label: 'Mark', description: 'Dot indicators at min and max endpoints. Labelled with the numeric value.' },
      ]}
    />

    <DocsTemplate.Section title="Variants">
      <DocsTemplate.Subsection title="Primary (Sky-Blue)">
        <div style={{ padding: '32px 0', maxWidth: '360px' }}>
          <SliderParts variant="primary" value={60} min={0} max={100} />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Dark (Navy)">
        <div style={{ padding: '32px 0', maxWidth: '360px' }}>
          <SliderParts variant="dark" value={60} min={0} max={100} />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '32px 0', maxWidth: '360px' }}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '56px', textTransform: 'capitalize' }}>{size}</span>
            <div style={{ flex: 1 }}>
              <SliderParts size={size} value={50} min={0} max={100} />
            </div>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="SliderParts uses the following component-level tokens."
      tokens={[
        { name: '--slider-track-color', description: 'Track and thumb fill — primary (sky-blue)' },
        { name: '--slider-track-color-dark', description: 'Track and thumb fill — dark (dark-blue)' },
        { name: '--slider-track-color-disabled', description: 'Track fill when disabled (gray-300)' },
        { name: '--slider-rail-color', description: 'Rail background (gray-200)' },
        { name: '--slider-rail-color-disabled', description: 'Rail background when disabled (gray-100)' },
        { name: '--slider-thumb-color', description: 'Thumb fill — primary (sky-blue)' },
        { name: '--slider-thumb-color-dark', description: 'Thumb fill — dark (dark-blue)' },
        { name: '--slider-thumb-color-disabled', description: 'Thumb fill when disabled (gray-300)' },
        { name: '--slider-thumb-size', description: 'Thumb diameter — default size (12px)' },
        { name: '--slider-thumb-size-sm', description: 'Thumb diameter — small size (8px)' },
        { name: '--slider-thumb-size-lg', description: 'Thumb diameter — large size (16px)' },
        { name: '--slider-track-height', description: 'Track height — default size (4px)' },
        { name: '--slider-track-height-sm', description: 'Track height — small size (2px)' },
        { name: '--slider-track-height-lg', description: 'Track height — large size (6px)' },
        { name: '--slider-mark-size', description: 'Endpoint mark dot size — default (8px)' },
        { name: '--slider-mark-label-font-size', description: 'Font size for endpoint labels' },
        { name: '--slider-disabled-opacity', description: 'Opacity when disabled (0.5)' },
      ]}
    />

    <DocsTemplate.CodeBlock>{`import { SliderParts } from './BuildingBlocks/SliderParts';

// Single thumb
<SliderParts value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />

// Dark variant
<SliderParts variant="dark" value={val} onChange={setVal} />

// Range slider
<SliderParts value={[20, 80]} onChange={(v) => setRange(v as [number, number])} />

// Sizes
<SliderParts size="small" value={val} onChange={setVal} />
<SliderParts size="large" value={val} onChange={setVal} />

// Disabled
<SliderParts value={50} disabled />`}</DocsTemplate.CodeBlock>

    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="Visible Range Cues">
        Always show endpoint marks (showMarks=true by default) so users understand the full range at a glance without needing to interact.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Accessible Interaction">
        MUI Slider provides keyboard support (arrow keys, Home/End) and ARIA attributes. Always supply an aria-label when no visible label is present.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Consistent Colour">
        Use primary for standard contexts and dark for high-contrast surfaces or brand-aligned scenarios.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    <DocsTemplate.Footer componentName="SliderParts" />
  </DocsTemplate>
);

export default SliderPartsDocs;
