import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { AutoSaveTagButton } from './AutoSaveTagButton';
import type { AutoSaveTagStatus } from './AutoSaveTagButton';

const ALL_STATUSES: Array<{ status: AutoSaveTagStatus; label: string; description: string }> = [
  {
    status: 'default',
    label: 'Default',
    description:
      'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft". Tag shows last-saved timestamp.',
  },
  {
    status: 'auto-saving',
    label: 'Auto-saving',
    description:
      'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".',
  },
  {
    status: 'saving',
    label: 'Saving',
    description:
      'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".',
  },
  {
    status: 'saved',
    label: 'Saved',
    description:
      'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".',
  },
  {
    status: 'error',
    label: 'Error',
    description:
      'Save failed. Red-light background, status-red border and text. Label: "Unable to save".',
  },
  {
    status: 'disabled',
    label: 'Disabled',
    description:
      'Button is not interactive (e.g. no changes to save). Gray-50 background (--global-color-neutral-gray-50), gray-200 border, gray-400 text. Tag is also dimmed.',
  },
  {
    status: 'focused',
    label: 'Focused',
    description:
      'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".',
  },
];

export const AutoSaveTagButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Auto-Save Tag Button"
        subtitle="A pill-shaped auto-save status button paired with a timestamp tag for workflow context"
      />

      <DocsTemplate.BodyText>
        The <strong>Auto-Save Tag Button</strong> extends the Save Draft Button concept by
        pairing the pill-shaped status button with a small rounded timestamp tag below it. The
        tag shows the last-saved date and time, giving users immediate context about the recency
        of their saved work. Seven distinct visual states communicate the full auto-save
        lifecycle.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The component renders as a vertical stack of two elements: the auto-save pill button on
          top and the timestamp tag beneath. The button contains a <strong>Save icon</strong>{' '}
          (MUI SaveOutlined) and a <strong>status label</strong>. The tag displays a formatted
          date/time string.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: 'var(--global-spacing-sizing-32px)',
                padding: 'var(--global-spacing-sizing-32px)',
                background: 'var(--global-color-neutral-gray-50)',
                borderRadius: 'var(--global-spacing-radius-8px)',
                flexWrap: 'wrap',
              }}
            >
              <AutoSaveTagButton status="default" timestamp="12:30 PM on 15 JAN 2025" />
              <AutoSaveTagButton status="saved" timestamp="12:31 PM on 15 JAN 2025" />
              <AutoSaveTagButton status="error" timestamp="12:30 PM on 15 JAN 2025" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Wrapper',
              token: '--btn-autosave-tag-gap (16px)',
              description:
                'Vertical flex container with 16px gap between the pill button and the timestamp tag.',
            },
            {
              id: 2,
              name: 'Pill Button',
              token:
                '--btn-save-draft-radius (full)\n--btn-save-draft-bg (sky-blue-100)\n--btn-save-draft-border-color (sky-blue)',
              description:
                'Full-pill shape. Background and border colour change per status. Contains save icon + label.',
            },
            {
              id: 3,
              name: 'Save Icon',
              token: '--btn-save-draft-icon-size (18px)\n--btn-save-draft-icon-gap (8px)',
              description:
                'MUI SaveOutlined (floppy disk) icon, always rendered. Size: 18px. Colour inherits from the button text token.',
            },
            {
              id: 4,
              name: 'Status Label',
              token:
                '--btn-save-draft-font-family (F37 Ginger Pro)\n--btn-save-draft-font-weight (300)\n--btn-save-draft-font-size (16px)',
              description:
                'Label changes per status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".',
            },
            {
              id: 5,
              name: 'Timestamp Tag',
              token:
                '--btn-autosave-tag-tag-bg (gray-100)\n--btn-autosave-tag-tag-border-color (gray-300)\n--btn-autosave-tag-tag-radius (full)',
              description:
                'Small rounded pill displaying the last-saved date/time. Uses xs-label typography (12px, weight 300). Stretches to fill the button width.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.BodyText>
          The <code>status</code> prop drives the label, background, border colour, and text
          colour simultaneously. Seven states are available. The timestamp tag remains visible in
          all states but dims when disabled.
        </DocsTemplate.BodyText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-24px)',
            maxWidth: '560px',
          }}
        >
          {ALL_STATUSES.map(({ status, label, description }) => (
            <div
              key={status}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                alignItems: 'start',
                gap: 'var(--global-spacing-sizing-20px)',
              }}
            >
              <AutoSaveTagButton status={status} timestamp="12:30 PM on 15 JAN 2025" />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-sm)',
                    fontWeight: 'var(--global-type-weight-default)',
                    color: 'var(--global-color-base-black)',
                    marginBottom: 'var(--global-spacing-sizing-2px)',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    fontWeight: 'var(--global-type-weight-light)',
                    color: 'var(--global-color-neutral-gray-600)',
                    lineHeight: 'var(--global-type-line-height-label)',
                  }}
                >
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Wrapper & Tag"
        description="Tokens specific to the AutoSaveTagButton composite:"
        tokens={[
          { name: '--btn-autosave-tag-gap', description: 'Vertical gap between pill button and timestamp tag — --global-spacing-sizing-16px (16px)' },
          { name: '--btn-autosave-tag-tag-bg', description: 'Tag background — --global-color-neutral-gray-100 (#F3F4F6)' },
          { name: '--btn-autosave-tag-tag-border-color', description: 'Tag border — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-autosave-tag-tag-border-width', description: 'Tag border width — --global-spacing-stroke-1px (1px)' },
          { name: '--btn-autosave-tag-tag-radius', description: 'Tag border radius — --global-spacing-radius-full (99999px)' },
          { name: '--btn-autosave-tag-tag-padding-v', description: 'Tag vertical padding — --global-spacing-sizing-4px (4px)' },
          { name: '--btn-autosave-tag-tag-padding-h', description: 'Tag horizontal padding — --global-spacing-sizing-12px (12px)' },
          { name: '--btn-autosave-tag-tag-font-family', description: 'Tag font family — --brand-font-primary (F37 Ginger Pro)' },
          { name: '--btn-autosave-tag-tag-font-size', description: 'Tag font size — --global-type-size-primary-label-xs (12px)' },
          { name: '--btn-autosave-tag-tag-font-weight', description: 'Tag font weight — --global-type-weight-light (300)' },
          { name: '--btn-autosave-tag-tag-color', description: 'Tag text colour — --global-color-neutral-gray-800 (#1F2937)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Button Portion"
        description="The pill button inherits all SaveDraftButton tokens (--btn-save-draft-*):"
        tokens={[
          { name: '--btn-save-draft-bg', description: 'Default background — --global-color-primary-sky-blue-100 (#D6F0FB)' },
          { name: '--btn-save-draft-border-color', description: 'Default border — --global-color-primary-sky-blue (#0BA7EA)' },
          { name: '--btn-save-draft-radius', description: 'Pill border radius — --global-spacing-radius-full (99999px)' },
          { name: '--btn-save-draft-bg-saved', description: 'Saved background — --global-color-status-green-light (#F2FFF1)' },
          { name: '--btn-save-draft-bg-error', description: 'Error background — --global-color-status-red-light (#FBEBEB)' },
          { name: '--btn-save-draft-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-save-draft-shadow-hover', description: 'Hover shadow — 2px 2px 0 0 blue-400 (#6171DF)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { AutoSaveTagButton } from '@/components/AutoSaveTagButton';

// Full auto-save button with timestamp tag
<AutoSaveTagButton
  status="default"
  timestamp="12:30 PM on 15 JAN 2025"
  onClick={handleSaveDraft}
/>

// Without the timestamp tag
<AutoSaveTagButton
  status="saving"
  showTag={false}
/>

// Different states
<AutoSaveTagButton status="auto-saving" timestamp="12:30 PM on 15 JAN 2025" />
<AutoSaveTagButton status="saved" timestamp="12:31 PM on 15 JAN 2025" />
<AutoSaveTagButton status="error" timestamp="12:30 PM on 15 JAN 2025" />
<AutoSaveTagButton status="disabled" timestamp="12:30 PM on 15 JAN 2025" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Keep the timestamp accurate">
          Update the <code>timestamp</code> prop whenever the save completes. The tag should
          always reflect the most recent successful save, not the current time.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Persist the button across all states">
          Keep the component visible in all states including saved and error. Hiding it removes
          important feedback about save status.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="One per form or document scope">
          Use a single AutoSaveTagButton per document or form. Multiple instances suggest
          multiple save targets, which is confusing.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default AutoSaveTagButtonDocs;
