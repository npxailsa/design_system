import React from 'react';
import { DocsTemplate } from '../../components/DocsTemplate/DocsTemplate';

const ColorSwatch: React.FC<{ name: string; token: string }> = ({ name, token }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
    <div
      style={{
        width: 'var(--global-spacing-sizing-32px)',
        height: 'var(--global-spacing-sizing-32px)',
        borderRadius: 'var(--global-spacing-radius-4px)',
        backgroundColor: `var(${token})`,
        border: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)',
        flexShrink: 0,
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-medium)' }}>{name}</span>
      <span style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)' }}>{token}</span>
    </div>
  </div>
);

const ColorRow: React.FC<{ title: string; subtitle: string; swatches: { name: string; token: string }[] }> = ({ title, subtitle, swatches }) => (
  <div style={{ marginBottom: 'var(--global-spacing-sizing-24px)' }}>
    <h4 style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label)', fontWeight: 'var(--global-type-weight-medium)', margin: '0 0 var(--global-spacing-sizing-2px) 0' }}>{title}</h4>
    <p style={{ fontFamily: 'var(--brand-font-secondary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', margin: '0 0 var(--global-spacing-sizing-12px) 0' }}>{subtitle}</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--global-spacing-sizing-12px)' }}>
      {swatches.map((s) => <ColorSwatch key={s.token} name={s.name} token={s.token} />)}
    </div>
  </div>
);

export const ColorsDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Colors"
        subtitle="A foundational language for expressing brand identity, communicating states, and establishing hierarchy"
      />

      <DocsTemplate.BodyText>
        Our color system provides a foundational language for expressing brand
        identity, communicating states, and establishing hierarchy across all our
        digital experiences. Our palette is structured into three layers:{' '}
        <strong>Global</strong> (primitives), <strong>Brand</strong> (contextual
        aliases), and <strong>Component</strong> (semantic).
      </DocsTemplate.BodyText>

      {/* ── Global Colors ── */}
      <DocsTemplate.Section
        title="Global colors"
        subtitle="We use the following color tokens to render UI elements."
      />

      <ColorRow
        title="Base Colors"
        subtitle="Essential foundations"
        swatches={[
          { name: 'Black', token: '--global-color-base-black' },
          { name: 'White', token: '--global-color-base-white' },
          { name: 'Overlay', token: '--global-color-base-overlay' },
        ]}
      />

      <ColorRow
        title="Peach Cream Scale"
        subtitle="Secondary brand foundations"
        swatches={[
          { name: '50', token: '--global-color-base-peach-cream-50' },
          { name: '100', token: '--global-color-base-peach-cream-100' },
          { name: '200', token: '--global-color-base-peach-cream-200' },
        ]}
      />

      <ColorRow
        title="Navy Scale"
        subtitle="Secondary primary scale"
        swatches={[
          { name: 'Navy', token: '--global-color-secondary-navy' },
          { name: 'Mid', token: '--global-color-secondary-navy-mid' },
          { name: 'Light', token: '--global-color-secondary-navy-light' },
        ]}
      />

      <ColorRow
        title="Blue Gray"
        subtitle="Secondary blue-gray tones"
        swatches={[
          { name: 'Blue Gray', token: '--global-color-secondary-blue-gray' },
          { name: 'Blue Gray Light', token: '--global-color-secondary-blue-gray-light' },
        ]}
      />

      <ColorRow
        title="Neutral Gray Scale"
        subtitle="Used for backgrounds, borders, and text"
        swatches={[
          { name: '50', token: '--global-color-neutral-gray-50' },
          { name: '100', token: '--global-color-neutral-gray-100' },
          { name: '200', token: '--global-color-neutral-gray-200' },
          { name: '300', token: '--global-color-neutral-gray-300' },
          { name: '400', token: '--global-color-neutral-gray-400' },
          { name: '500', token: '--global-color-neutral-gray-500' },
          { name: '600', token: '--global-color-neutral-gray-600' },
          { name: '700', token: '--global-color-neutral-gray-700' },
          { name: '800', token: '--global-color-neutral-gray-800' },
          { name: '900', token: '--global-color-neutral-gray-900' },
        ]}
      />

      <ColorRow
        title="Status Colors"
        subtitle="Functional feedback colors"
        swatches={[
          { name: 'Red', token: '--global-color-status-red' },
          { name: 'Red Light', token: '--global-color-status-red-light' },
          { name: 'Green', token: '--global-color-status-green' },
          { name: 'Dark Green', token: '--global-color-status-dark-green' },
          { name: 'Green Light', token: '--global-color-status-green-light' },
          { name: 'Orange', token: '--global-color-status-orange' },
          { name: 'Dark Orange', token: '--global-color-status-dark-orange' },
          { name: 'Orange Light', token: '--global-color-status-orange-light' },
          { name: 'Info Blue', token: '--global-color-status-info-blue' },
          { name: 'Info Blue Light', token: '--global-color-status-info-blue-light' },
          { name: 'Purple', token: '--global-color-status-purple' },
          { name: 'Purple Light', token: '--global-color-status-purple-light' },
        ]}
      />

      <ColorRow
        title="Semantic Brand Foundations"
        subtitle="Core functional aliases"
        swatches={[
          { name: 'Text Main', token: '--brand-text-main' },
          { name: 'Icon Main', token: '--brand-icon-main' },
          { name: 'Border Main', token: '--brand-border-main' },
        ]}
      />

      {/* ── Brand Scales ── */}
      <DocsTemplate.Section
        title="Brand scales"
        subtitle="Tints and shades for subtle state changes while maintaining brand consistency."
      />

      <ColorRow
        title="Primary Scale"
        subtitle="Primary brand scale"
        swatches={[
          { name: '25', token: '--brand-primary-25' },
          { name: '50', token: '--brand-primary-50' },
          { name: '100', token: '--brand-primary-100' },
          { name: '200', token: '--brand-primary-200' },
          { name: '300', token: '--brand-primary-300' },
          { name: '400', token: '--brand-primary-400' },
          { name: 'Base', token: '--brand-primary' },
          { name: 'Dark', token: '--brand-primary-dark' },
        ]}
      />

      <ColorRow
        title="Secondary Scale"
        subtitle="Neutral brand scale"
        swatches={[
          { name: '50', token: '--brand-secondary-50' },
          { name: '100', token: '--brand-secondary-100' },
          { name: '200', token: '--brand-secondary-200' },
          { name: '300', token: '--brand-secondary-300' },
          { name: '400', token: '--brand-secondary-400' },
          { name: 'Base', token: '--brand-secondary' },
          { name: 'Dark', token: '--brand-secondary-dark' },
        ]}
      />

      <ColorRow
        title="Sky Blue"
        subtitle="Accent brand scale"
        swatches={[
          { name: '50', token: '--brand-sky-blue-50' },
          { name: '100', token: '--brand-sky-blue-100' },
          { name: '200', token: '--brand-sky-blue-200' },
          { name: '300', token: '--brand-sky-blue-300' },
          { name: '400', token: '--brand-sky-blue-400' },
          { name: 'Base', token: '--brand-sky-blue' },
          { name: 'Dark', token: '--brand-sky-blue-dark' },
        ]}
      />

      <ColorRow
        title="Green"
        subtitle="Success and growth scale"
        swatches={[
          { name: '50', token: '--brand-green-50' },
          { name: '100', token: '--brand-green-100' },
          { name: '200', token: '--brand-green-200' },
          { name: '300', token: '--brand-green-300' },
          { name: '400', token: '--brand-green-400' },
          { name: 'Base', token: '--brand-green' },
          { name: 'Dark', token: '--brand-green-dark' },
        ]}
      />

      <ColorRow
        title="Additional Gray (Dark)"
        subtitle="Dark mode and contrast grays"
        swatches={[
          { name: '25', token: '--brand-gray-dark-25' },
          { name: '50', token: '--brand-gray-dark-50' },
          { name: '100', token: '--brand-gray-dark-100' },
          { name: '200', token: '--brand-gray-dark-200' },
          { name: '300', token: '--brand-gray-dark-300' },
          { name: '400', token: '--brand-gray-dark-400' },
          { name: 'Default', token: '--brand-gray-dark-default' },
        ]}
      />

      <ColorRow
        title="Additional Gray (Light)"
        subtitle="Light UI foundations"
        swatches={[
          { name: '50', token: '--brand-gray-light-50' },
          { name: '100', token: '--brand-gray-light-100' },
          { name: '200', token: '--brand-gray-light-200' },
          { name: '300', token: '--brand-gray-light-300' },
          { name: '400', token: '--brand-gray-light-400' },
          { name: '600', token: '--brand-gray-light-600' },
          { name: 'Default', token: '--brand-gray-light-default' },
        ]}
      />

      <ColorRow
        title="Brand Status"
        subtitle="Specialized status tokens"
        swatches={[
          { name: 'Rose', token: '--brand-status-rose' },
          { name: 'Note Mid', token: '--brand-status-note-mid' },
          { name: 'Edit', token: '--brand-status-edit' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these common design principles by using colors in a cohesive, useful, and legible way."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Design for universal understanding">
          Ensure that color is never the only means of conveying information.
          Combine color with text labels, icons, or patterns.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Balance simplicity and detail to create legibility">
          Ensure there is sufficient contrast between text and background colors
          to meet WCAG 2.1 AA accessibility standards.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Maintain visual harmony">
          Limit the number of different colors used on a single screen to reduce
          cognitive load and maintain a cohesive brand feel.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Use colors intentionally">
          Use bright or saturated colors sparingly to draw attention to primary
          actions, errors, or critical information. Reserve neutral colors for
          structural elements and backgrounds.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="When using colors in your components, always refer to the design tokens defined in tokens.css."
      />

      <DocsTemplate.CodeBlock>
        {`.my-component {
  background-color: var(--global-color-base-white);
  color: var(--brand-text-main);
  border: var(--global-spacing-stroke-1px) solid var(--brand-border-main);
}`}
      </DocsTemplate.CodeBlock>

      {/* ── Do / Don't ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Our color system provides distinct shades and tints to allow for subtle state changes while maintaining brand consistency."
      />

      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-4px)' }}>
              <div style={{ width: 'var(--global-spacing-sizing-24px)', height: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-4px)', backgroundColor: 'var(--brand-primary)' }} />
              <div style={{ width: 'var(--global-spacing-sizing-24px)', height: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-4px)', backgroundColor: 'var(--brand-secondary)' }} />
            </div>
          ),
          description:
            'Always prefer using component or brand tokens over global ones. Ensure sufficient contrast when choosing text colors over backgrounds.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-4px)' }}>
              <div style={{ width: 'var(--global-spacing-sizing-24px)', height: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-4px)', backgroundColor: '#ff00ff' }} />
              <div style={{ width: 'var(--global-spacing-sizing-24px)', height: 'var(--global-spacing-sizing-24px)', borderRadius: 'var(--global-spacing-radius-4px)', backgroundColor: '#123abc' }} />
            </div>
          ),
          description:
            'Do not introduce hardcoded hex, rgb, or hsl values into components. Always map to an existing token or create a new token.',
        }}
      />

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          If you find a gap in our color system or require a new semantic alias,
          please do not create a new raw color. Instead, review the existing
          Global Palette to see if a suitable primitive exists.
        </DocsTemplate.BodyText>

        <DocsTemplate.BodyText>
          To contribute a new color token, please bring it to our{' '}
          <strong>Biweekly Design System meeting</strong> for review with the
          whole team. If you need the calendar invite forwarding, please send the{' '}
          <strong>design team</strong> a message on Teams.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
