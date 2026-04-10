import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { StepperLines } from './StepperLines';

/* ── Layout helpers ──────────────────────────────────────────────────────── */

const preview: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-16px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

/* ── Docs component ──────────────────────────────────────────────────────── */

export const StepperLinesDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="StepperLines"
      subtitle="A horizontal connector line used between step indicators in a stepper. Supports solid, dashed, and dotted line styles across to-do, complete, and disabled states in three stroke thicknesses."
    />

    <DocsTemplate.Section title="Overview">
      <DocsTemplate.BodyText>
        StepperLines render as a single styled horizontal line that bridges adjacent step
        nodes in a stepper layout. The line colour communicates the progress state of the
        segment it represents. Use it alongside StepperSteps to build a complete stepper pattern.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={{ ...preview, flexDirection: 'row', gap: 'var(--global-spacing-sizing-24px)' }}>
            <div style={{ ...row, flex: 1 }}>
              <StepperLines type="solid" state="complete" stroke="2-px" />
            </div>
            <div style={{ ...row, flex: 1 }}>
              <StepperLines type="dashed" state="to-do" stroke="2-px" />
            </div>
            <div style={{ ...row, flex: 1 }}>
              <StepperLines type="dotted" state="disabled" stroke="2-px" />
            </div>
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Line',
            token: '--stepper-lines-stroke-2px',
            description: 'A zero-height div whose top border forms the visible connector line.',
          },
          {
            id: 2,
            name: 'Type',
            token: 'border-top-style: solid | dashed | dotted',
            description: 'Controls the visual pattern of the line — continuous, segmented, or dotted.',
          },
          {
            id: 3,
            name: 'State colour',
            token: '--stepper-lines-color-disabled / -todo / -complete',
            description: 'Communicates the progress state of the segment between two steps.',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Types">
      <DocsTemplate.Subsection title="Solid">
        <DocsTemplate.BodyText>
          A continuous line. Use as the default connector style for its visual clarity.
        </DocsTemplate.BodyText>
        <div style={preview}>
          {(['to-do', 'complete', 'disabled'] as const).map((state) => (
            <div key={state} style={row}>
              <StepperLines type="solid" state={state} stroke="2-px" />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dashed">
        <DocsTemplate.BodyText>
          A dashed line. Use to indicate segments with a distinct visual treatment.
        </DocsTemplate.BodyText>
        <div style={preview}>
          {(['to-do', 'complete', 'disabled'] as const).map((state) => (
            <div key={state} style={row}>
              <StepperLines type="dashed" state={state} stroke="2-px" />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>

      <DocsTemplate.Subsection title="Dotted">
        <DocsTemplate.BodyText>
          A dotted line. Use for a lighter, more subtle connector style.
        </DocsTemplate.BodyText>
        <div style={preview}>
          {(['to-do', 'complete', 'disabled'] as const).map((state) => (
            <div key={state} style={row}>
              <StepperLines type="dotted" state={state} stroke="2-px" />
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="States">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Disabled',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="disabled" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dashed" state="disabled" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dotted" state="disabled" />
              </div>
            ),
          },
          {
            label: 'To-do',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="to-do" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dashed" state="to-do" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dotted" state="to-do" />
              </div>
            ),
          },
          {
            label: 'Complete',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="complete" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dashed" state="complete" />
                <span style={{ width: 'var(--global-spacing-sizing-16px)', flexShrink: 0 }} />
                <StepperLines type="dotted" state="complete" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Stroke Thicknesses">
      <DocsTemplate.SizeDemo
        rows={[
          {
            label: '1px',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="to-do" stroke="1-px" />
              </div>
            ),
          },
          {
            label: '2px (default)',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="to-do" stroke="2-px" />
              </div>
            ),
          },
          {
            label: '3px',
            children: (
              <div style={row}>
                <StepperLines type="solid" state="to-do" stroke="3-px" />
              </div>
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          {
            name: '--stepper-lines-color-disabled',
            description: 'Line colour — disabled state → var(--global-color-neutral-gray-300) = #d2d5da',
          },
          {
            name: '--stepper-lines-color-todo',
            description: 'Line colour — to-do state → var(--global-color-neutral-gray-700) = #374151',
          },
          {
            name: '--stepper-lines-color-complete',
            description: 'Line colour — complete state → var(--brand-primary) = #3776ce',
          },
          {
            name: '--stepper-lines-stroke-1px',
            description: 'Stroke thickness — 1px → var(--global-spacing-stroke-1px)',
          },
          {
            name: '--stepper-lines-stroke-2px',
            description: 'Stroke thickness — 2px (default) → var(--global-spacing-stroke-2px)',
          },
          {
            name: '--stepper-lines-stroke-3px',
            description: 'Stroke thickness — 3px → var(--global-spacing-stroke-3px)',
          },
        ]}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Usage Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Match line state to flow progress">
          A connector between completed steps should use "complete". A connector
          between upcoming steps should use "to-do". A connector in a disabled
          or unavailable flow section should use "disabled".
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Keep type consistent within a strip">
          Don't mix solid, dashed, and dotted connectors within a single stepper
          unless each type carries a deliberate, documented meaning.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Let lines flex to fill available space">
          StepperLines use flex: 1 to grow and fill the space between step nodes,
          keeping the stepper strip symmetrical inside its container.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ ...preview, flexDirection: 'row', gap: 'var(--global-spacing-sizing-8px)' }}>
              <div style={{ flex: 1 }}><StepperLines type="solid" state="complete" /></div>
              <div style={{ flex: 1 }}><StepperLines type="solid" state="to-do" /></div>
              <div style={{ flex: 1 }}><StepperLines type="solid" state="disabled" /></div>
            </div>
          ),
          description: 'Use the same line type throughout a strip and vary only the state colour.',
        }}
        dontItem={{
          icon: (
            <div style={{ ...preview, flexDirection: 'row', gap: 'var(--global-spacing-sizing-8px)' }}>
              <div style={{ flex: 1 }}><StepperLines type="solid" state="complete" /></div>
              <div style={{ flex: 1 }}><StepperLines type="dashed" state="to-do" /></div>
              <div style={{ flex: 1 }}><StepperLines type="dotted" state="disabled" /></div>
            </div>
          ),
          description: "Don't mix line types in a single stepper — it creates visual noise without meaning.",
        }}
      />
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
