import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { Toggle } from './Toggle';

export const ToggleDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Toggle"
      subtitle="A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."
    />

    <DocsTemplate.BodyText>
      The <strong>Toggle</strong> uses MUI <code>Switch</code> as its accessible foundation, providing
      native keyboard navigation, focus management, and ARIA semantics out of the box.
      All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens.
    </DocsTemplate.BodyText>

    <DocsTemplate.Anatomy
      parts={[
        { number: 1, label: 'Track', description: 'The pill-shaped background. Changes colour from gray (off) to brand colour (on).' },
        { number: 2, label: 'Thumb', description: 'The circular handle that slides between off and on positions.' },
        { number: 3, label: 'Label (optional)', description: 'A text label rendered left or right of the toggle.' },
      ]}
    />

    <DocsTemplate.Section title="Variants">
      <DocsTemplate.Subsection title="Primary (Sky-Blue)">
        <div style={{ display: 'flex', gap: '24px', padding: 'var(--global-spacing-sizing-16px) 0', flexWrap: 'wrap' }}>
          <Toggle variant="primary" checked={false} label="Off" />
          <Toggle variant="primary" checked={true} label="On" />
          <Toggle variant="primary" checked={true} disabled label="On — Disabled" />
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Dark (Navy)">
        <div style={{ display: 'flex', gap: '24px', padding: 'var(--global-spacing-sizing-16px) 0', flexWrap: 'wrap' }}>
          <Toggle variant="dark" checked={false} label="Off" />
          <Toggle variant="dark" checked={true} label="On" />
          <Toggle variant="dark" checked={true} disabled label="On — Disabled" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
        {(['small', 'default', 'large'] as const).map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', width: '56px', textTransform: 'capitalize' }}>{size}</span>
            <Toggle size={size} checked={true} label={`${size}`} />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="Toggle uses the following component-level tokens."
      tokens={[
        { name: '--toggle-track-bg', description: 'Track background when off (gray-300)' },
        { name: '--toggle-track-bg-checked', description: 'Track background when on — primary (sky-blue)' },
        { name: '--toggle-track-bg-checked-dark', description: 'Track background when on — dark variant (dark-blue)' },
        { name: '--toggle-track-bg-disabled', description: 'Track background when disabled (gray-200)' },
        { name: '--toggle-track-radius', description: 'Track pill border-radius (full)' },
        { name: '--toggle-thumb-bg', description: 'Thumb colour when off (white)' },
        { name: '--toggle-thumb-bg-checked', description: 'Thumb colour when on — primary (white)' },
        { name: '--toggle-thumb-bg-checked-dark', description: 'Thumb colour when on — dark (white)' },
        { name: '--toggle-thumb-bg-disabled', description: 'Thumb colour when disabled (gray-200)' },
        { name: '--toggle-scale-sm', description: 'Scale factor for small size (0.75)' },
        { name: '--toggle-scale-lg', description: 'Scale factor for large size (1.25)' },
        { name: '--toggle-disabled-opacity', description: 'Opacity for disabled state (0.5)' },
        { name: '--toggle-label-gap', description: 'Gap between toggle and its label (8px)' },
        { name: '--toggle-label-color', description: 'Label text colour (base-black)' },
        { name: '--toggle-label-color-disabled', description: 'Label text colour when disabled (gray-400)' },
      ]}
    />

    <DocsTemplate.CodeBlock>{`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}</DocsTemplate.CodeBlock>

    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="Clear On/Off State">
        Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Accessible by Default">
        MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Label Context">
        Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    <DocsTemplate.Footer componentName="Toggle" />
  </DocsTemplate>
);

export default ToggleDocs;
