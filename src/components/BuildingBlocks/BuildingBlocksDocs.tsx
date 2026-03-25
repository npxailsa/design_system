import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { StatusIcon } from './StatusIcon/StatusIcon';
import { Stepper } from './Stepper/Stepper';
import type { StatusIconType, StatusIconStep, StatusIconSize } from './StatusIcon/StatusIcon';

const ALL_TYPES: StatusIconType[] = [
  'warning',
  'error',
  'complete',
  'locked',
  'comments',
  'notification',
  'note',
  'edit',
];

const ALL_STEPS: StatusIconStep[] = ['current', 'future', 'past'];
const ALL_SIZES: StatusIconSize[] = ['small', 'default', 'large'];

export const BuildingBlocksDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Building Blocks"
        subtitle="Status icons and steppers are foundational elements used to communicate progress, state, and workflow stages"
      />

      <DocsTemplate.BodyText>
        Building Blocks are the visual atoms that power status communication
        across the Echo design system. The <strong>StatusIcon</strong> represents
        a single status indicator, while the <strong>Stepper</strong> composes
        multiple StatusIcons into a sequential progression.
      </DocsTemplate.BodyText>

      {/* ── Status Icon section ── */}
      <DocsTemplate.Section title="StatusIcon">
        <DocsTemplate.BodyText>
          A circular indicator that communicates the state of a process step.
          Each type maps to a specific icon and colour, while the step prop
          controls whether the indicator appears as current, future, or past.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Types &times; Steps">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `120px repeat(${ALL_STEPS.length}, 1fr)`,
              gap: 'var(--global-spacing-sizing-16px)',
              alignItems: 'start',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            {/* Header row */}
            <div
              style={{
                fontFamily: 'var(--brand-font-primary)',
                fontWeight: 'var(--global-type-weight-medium)',
                fontSize: 'var(--global-type-size-primary-label-sm)',
                color: 'var(--global-color-neutral-gray-500)',
              }}
            >
              Type
            </div>
            {ALL_STEPS.map((step) => (
              <div
                key={step}
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontWeight: 'var(--global-type-weight-medium)',
                  fontSize: 'var(--global-type-size-primary-label-sm)',
                  color: 'var(--global-color-neutral-gray-500)',
                  textTransform: 'capitalize',
                  textAlign: 'center',
                }}
              >
                {step}
              </div>
            ))}

            {/* Data rows */}
            {ALL_TYPES.map((type) => (
              <React.Fragment key={type}>
                <div
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-sm)',
                    color: 'var(--global-color-neutral-gray-700)',
                    textTransform: 'capitalize',
                    paddingTop: 'var(--global-spacing-sizing-8px)',
                  }}
                >
                  {type}
                </div>
                {ALL_STEPS.map((step) => (
                  <div
                    key={`${type}-${step}`}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <StatusIcon type={type} step={step} size="default" label={false} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Sizes">
          <div
            style={{
              display: 'flex',
              gap: 'var(--global-spacing-sizing-40px)',
              alignItems: 'flex-end',
              padding: 'var(--global-spacing-sizing-16px) 0',
              flexWrap: 'wrap',
            }}
          >
            {ALL_SIZES.map((size) => (
              <div
                key={size}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--global-spacing-sizing-8px)',
                }}
              >
                <StatusIcon type="warning" step="current" size={size} label />
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    color: 'var(--global-color-neutral-gray-500)',
                  }}
                >
                  {size}
                </span>
              </div>
            ))}
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled State">
          <div
            style={{
              display: 'flex',
              gap: 'var(--global-spacing-sizing-24px)',
              padding: 'var(--global-spacing-sizing-16px) 0',
              flexWrap: 'wrap',
            }}
          >
            {ALL_STEPS.map((step) => (
              <StatusIcon
                key={step}
                type="warning"
                step={step}
                size="default"
                state="disabled"
                label
              />
            ))}
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Stepper section ── */}
      <DocsTemplate.Section title="Stepper">
        <DocsTemplate.BodyText>
          The Stepper composes multiple StatusIcons into a sequential
          progression, connected by horizontal or vertical lines. Use it to
          represent multi-step workflows, approval chains, or status timelines.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Horizontal Stepper">
          <div style={{ padding: 'var(--global-spacing-sizing-24px) 0' }}>
            <Stepper
              size="default"
              steps={[
                { type: 'complete', step: 'past', label: 'Submitted' },
                { type: 'complete', step: 'past', label: 'Reviewed' },
                { type: 'warning', step: 'current', label: 'In Progress' },
                { type: 'notification', step: 'future', label: 'Approval' },
                { type: 'locked', step: 'future', label: 'Complete' },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Vertical Stepper">
          <div style={{ padding: 'var(--global-spacing-sizing-24px) 0' }}>
            <Stepper
              size="default"
              orientation="vertical"
              steps={[
                { type: 'complete', step: 'past', label: 'Step 1' },
                { type: 'warning', step: 'current', label: 'Step 2' },
                { type: 'error', step: 'future', label: 'Step 3' },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="StatusIcon and Stepper use the following tokens:"
        tokens={[
          { name: '--status-icon-size-small', description: 'Circle diameter for small size (22px)' },
          { name: '--status-icon-size-default', description: 'Circle diameter for default size (36px)' },
          { name: '--status-icon-size-large', description: 'Circle diameter for large size (48px)' },
          { name: '--status-icon-border-radius', description: 'Full-round border radius for circles (99999px)' },
          { name: '--status-icon-border-width-current', description: 'Border width for current step (2px)' },
          { name: '--status-icon-color-warning', description: 'Warning type colour (#f4a403)' },
          { name: '--status-icon-color-error', description: 'Error type colour (#ce2031)' },
          { name: '--status-icon-color-complete', description: 'Complete type colour (#227f1a)' },
          { name: '--status-icon-color-locked', description: 'Locked type colour (#61607c)' },
          { name: '--status-icon-color-comments', description: 'Comments type colour (#0ba7ea)' },
          { name: '--status-icon-color-notification', description: 'Notification type colour (#2f42bd)' },
          { name: '--status-icon-color-note', description: 'Note type colour (#5d2c82)' },
          { name: '--status-icon-color-edit', description: 'Edit type colour (#366f97)' },
          { name: '--stepper-connector-color', description: 'Connecting line colour between steps (#d2d5da)' },
          { name: '--stepper-connector-width', description: 'Connecting line thickness (2px)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>{`import { StatusIcon } from './BuildingBlocks/StatusIcon';
import { Stepper } from './BuildingBlocks/Stepper';

// Single status icon
<StatusIcon type="warning" step="current" size="default" />

// Stepper with multiple steps
<Stepper
  size="default"
  steps={[
    { type: 'complete', step: 'past', label: 'Done' },
    { type: 'warning', step: 'current', label: 'Active' },
    { type: 'locked', step: 'future', label: 'Pending' },
  ]}
/>`}</DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Clear Status">
          Each status type uses a distinct colour and icon to ensure users can instantly identify the state at a glance.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Progressive Disclosure">
          Past steps show solid filled circles, current steps show bordered circles, and future steps use dashed outlines to convey temporal progression.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Scalable">
          Three sizes (small, default, large) ensure the component works in dense data tables, standard forms, and prominent hero workflows.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do/Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: <StatusIcon type="complete" step="past" size="small" label={false} />,
          label: 'Consistent usage',
          description: 'Use consistent types across a stepper — all steps should share the same type or use type to indicate the nature of each step.',
        }}
        dontItem={{
          icon: <StatusIcon type="error" step="current" size="small" label={false} />,
          label: 'Inconsistent sizing',
          description: 'Don\'t mix sizes within a single stepper. All steps should use the same size for visual consistency.',
        }}
      />
    </DocsTemplate>
  );
};

export default BuildingBlocksDocs;
