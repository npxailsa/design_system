import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { StepperConnectors } from './StepperConnectors';

/* ── Layout helpers ──────────────────────────────────────────────────────── */

const row: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const connectorWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--global-spacing-sizing-16px)',
};

/* ── Docs component ──────────────────────────────────────────────────────── */

export const StepperConnectorsDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="StepperConnectors"
      subtitle="A thin line segment that visually connects two adjacent step indicators in a stepper. Supports solid, dashed, and dotted line styles across default, active, complete, and disabled states."
    />

    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        StepperConnectors render as a single styled line — horizontal or vertical — that
        bridges adjacent StepperSteps circles. The line colour communicates the progress
        state of the flow segment it represents. Use it together with StepperSteps to
        build a complete stepper pattern.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 16, background: 'var(--global-color-neutral-gray-50)', borderRadius: 8 }}>
            <StepperConnectors type="solid" state="complete" size="default" />
            <StepperConnectors type="dashed" state="active" size="default" />
            <StepperConnectors type="dotted" state="default" size="default" />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Line',
            token: '--stepper-connector-thickness-default',
            description: 'A single CSS border applied to a zero-height (or zero-width for vertical) element.',
          },
          {
            id: 2,
            name: 'Line style',
            token: 'border-style: solid | dashed | dotted',
            description: 'Solid = continuous line; dashed = equal-length segments; dotted = round dots.',
          },
          {
            id: 3,
            name: 'State colour',
            token: '--stepper-connector-color-default / active / complete / disabled',
            description: 'Communicates the progress state of the segment between two steps.',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Types">
      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.BodyText>
          A continuous solid line. Use for the primary connector style — the most visually clear.
        </DocsTemplate.BodyText>
        <div style={row}>
          <div style={connectorWrap}>
            <StepperConnectors type="solid" state="default" />
            <StepperConnectors type="solid" state="active" />
            <StepperConnectors type="solid" state="complete" />
            <StepperConnectors type="solid" state="disabled" />
          </div>
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dashed">
        <DocsTemplate.BodyText>
          A dashed line. Use to indicate an upcoming or incomplete segment.
        </DocsTemplate.BodyText>
        <div style={row}>
          <div style={connectorWrap}>
            <StepperConnectors type="dashed" state="default" />
            <StepperConnectors type="dashed" state="active" />
            <StepperConnectors type="dashed" state="complete" />
            <StepperConnectors type="dashed" state="disabled" />
          </div>
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dotted">
        <DocsTemplate.BodyText>
          A dotted line. Use for a lighter, more subtle connector.
        </DocsTemplate.BodyText>
        <div style={row}>
          <div style={connectorWrap}>
            <StepperConnectors type="dotted" state="default" />
            <StepperConnectors type="dotted" state="active" />
            <StepperConnectors type="dotted" state="complete" />
            <StepperConnectors type="dotted" state="disabled" />
          </div>
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="States">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Default',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="default" />
                <StepperConnectors type="dashed" state="default" />
                <StepperConnectors type="dotted" state="default" />
              </div>
            ),
          },
          {
            label: 'Active',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="active" />
                <StepperConnectors type="dashed" state="active" />
                <StepperConnectors type="dotted" state="active" />
              </div>
            ),
          },
          {
            label: 'Complete',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="complete" />
                <StepperConnectors type="dashed" state="complete" />
                <StepperConnectors type="dotted" state="complete" />
              </div>
            ),
          },
          {
            label: 'Disabled',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="disabled" />
                <StepperConnectors type="dashed" state="disabled" />
                <StepperConnectors type="dotted" state="disabled" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small (1px)',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="default" size="small" />
                <StepperConnectors type="dashed" state="active" size="small" />
                <StepperConnectors type="dotted" state="complete" size="small" />
              </div>
            ),
          },
          {
            label: 'Default (2px)',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="default" size="default" />
                <StepperConnectors type="dashed" state="active" size="default" />
                <StepperConnectors type="dotted" state="complete" size="default" />
              </div>
            ),
          },
          {
            label: 'Large (4px)',
            children: (
              <div style={connectorWrap}>
                <StepperConnectors type="solid" state="default" size="large" />
                <StepperConnectors type="dashed" state="active" size="large" />
                <StepperConnectors type="dotted" state="complete" size="large" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Orientation">
      <DocsTemplate.Subsection title="Horizontal">
        <div style={connectorWrap}>
          <StepperConnectors type="solid" state="complete" orientation="horizontal" />
          <StepperConnectors type="dashed" state="active" orientation="horizontal" />
          <StepperConnectors type="dotted" state="default" orientation="horizontal" />
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Vertical">
        <DocsTemplate.BodyText>
          Use for vertical steppers where steps are stacked top-to-bottom.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', gap: 32, padding: 16 }}>
          <StepperConnectors type="solid" state="complete" orientation="vertical" />
          <StepperConnectors type="dashed" state="active" orientation="vertical" />
          <StepperConnectors type="dotted" state="default" orientation="vertical" />
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          { name: '--stepper-connector-thickness-small', description: 'Line thickness — small (1px)' },
          { name: '--stepper-connector-thickness-default', description: 'Line thickness — default (2px)' },
          { name: '--stepper-connector-thickness-large', description: 'Line thickness — large (4px)' },
          { name: '--stepper-connector-color-default', description: 'Line colour for default/inactive state (--global-color-neutral-gray-300)' },
          { name: '--stepper-connector-color-active', description: 'Line colour for active state (--global-color-secondary-navy)' },
          { name: '--stepper-connector-color-complete', description: 'Line colour for complete state (--global-color-secondary-navy)' },
          { name: '--stepper-connector-color-disabled', description: 'Line colour for disabled state (--global-color-neutral-gray-200)' },
          { name: '--stepper-connector-length-small', description: 'Minimum connector length — small (24px)' },
          { name: '--stepper-connector-length-default', description: 'Minimum connector length — default (32px)' },
          { name: '--stepper-connector-length-large', description: 'Minimum connector length — large (48px)' },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Match connector state to adjacent steps">
          A connector between a complete step and an active step should use the "complete" state.
          A connector between two future/default steps should use "default".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistent type across a strip">
          Don't mix solid, dashed, and dotted connectors within a single stepper strip unless each
          type conveys a deliberate, documented meaning.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Let connectors flex to fill available space">
          In horizontal steppers, allow connectors to grow (flex: 1) so the strip fills its container
          symmetrically, rather than setting fixed widths.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 16, background: 'var(--global-color-neutral-gray-50)', borderRadius: 8 }}>
              <StepperConnectors type="solid" state="complete" />
              <StepperConnectors type="solid" state="active" />
              <StepperConnectors type="solid" state="default" />
            </div>
          ),
          description: 'Use the same line type throughout a strip and vary only the state colour.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 16, background: 'var(--global-color-neutral-gray-50)', borderRadius: 8 }}>
              <StepperConnectors type="solid" state="complete" />
              <StepperConnectors type="dashed" state="active" />
              <StepperConnectors type="dotted" state="default" />
            </div>
          ),
          description: "Don't mix line types in a single stepper — it adds confusion without meaning.",
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
