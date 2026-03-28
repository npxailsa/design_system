import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { SaveDraftButton } from './SaveDraftButton';
import type { SaveDraftStatus } from './SaveDraftButton';

const ALL_STATUSES: Array<{ status: SaveDraftStatus; label: string; description: string }> = [
  {
    status: 'default',
    label: 'Default',
    description: 'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft".',
  },
  {
    status: 'auto-saving',
    label: 'Auto-saving',
    description: 'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".',
  },
  {
    status: 'saving',
    label: 'Saving',
    description: 'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".',
  },
  {
    status: 'saved',
    label: 'Saved',
    description: 'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".',
  },
  {
    status: 'error',
    label: 'Error',
    description: 'Save failed. Red-light background, status-red border and text. Label: "Unable to save".',
  },
  {
    status: 'disabled',
    label: 'Disabled',
    description: 'Button is not interactive (e.g. no changes to save). Gray palette, not-allowed cursor. Label: "Save draft".',
  },
  {
    status: 'focused',
    label: 'Focused',
    description: 'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".',
  },
];

export const SaveDraftButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Save Draft Button"
        subtitle="A pill-shaped status button for auto-save workflows with seven distinct visual states"
      />

      <DocsTemplate.BodyText>
        The <strong>Save Draft Button</strong> is a purpose-built status indicator button used
        in form and document editing workflows. Unlike a standard button, it communicates the
        current save state through label changes and colour transitions rather than user
        interaction alone. The pill shape (<code>border-radius: full</code>) and sky-blue
        palette distinguish it clearly from the primary and ghost button families.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The button contains two fixed elements: a <strong>Person icon</strong> (MUI Account)
          always visible on the left, and a <strong>label</strong> that updates per status.
          No trailing icon or icon-only mode is supported.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--global-spacing-sizing-16px)',
              padding: 'var(--global-spacing-sizing-32px)',
              background: 'var(--global-color-neutral-gray-50)',
              borderRadius: 'var(--global-spacing-radius-8px)',
              flexWrap: 'wrap',
            }}>
              <SaveDraftButton status="default" />
              <SaveDraftButton status="saved" />
              <SaveDraftButton status="error" />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-save-draft-radius (99999px)\n--btn-save-draft-bg (sky-blue-100)\n--btn-save-draft-border-color (sky-blue)',
              description: 'Full-pill shape. Background and border colour change per status. Fixed padding: 8px vertical, 16–24px horizontal.',
            },
            {
              id: 2,
              name: 'Leading Icon',
              token: '--btn-save-draft-icon-size (18px)\n--btn-save-draft-icon-gap (8px)',
              description: 'MUI Person icon, always rendered. Size: 18px. Colour inherits from the button text token.',
            },
            {
              id: 3,
              name: 'Label',
              token: '--btn-save-draft-font-family (F37 Ginger Pro)\n--btn-save-draft-font-weight (300)\n--btn-save-draft-font-size (16px)',
              description: 'Label changes automatically with status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.BodyText>
          The <code>status</code> prop drives the label, background, border colour, and text
          colour simultaneously. Seven states are available.
        </DocsTemplate.BodyText>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-16px)',
          maxWidth: '560px',
        }}>
          {ALL_STATUSES.map(({ status, label, description }) => (
            <div
              key={status}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                alignItems: 'start',
                gap: 'var(--global-spacing-sizing-20px)',
              }}
            >
              <SaveDraftButton status={status} />
              <div>
                <div style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-sm)',
                  fontWeight: 'var(--global-type-weight-default)',
                  color: 'var(--global-color-base-black)',
                  marginBottom: 'var(--global-spacing-sizing-2px)',
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  fontWeight: 'var(--global-type-weight-light)',
                  color: 'var(--global-color-neutral-gray-600)',
                  lineHeight: 'var(--global-type-line-height-label)',
                }}>
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Base"
        description="Default (sky-blue) appearance tokens:"
        tokens={[
          { name: '--btn-save-draft-bg', description: 'Default background — --global-color-primary-sky-blue-100 (#D6F0FB)' },
          { name: '--btn-save-draft-border-color', description: 'Default border — --global-color-primary-sky-blue (#0BA7EA)' },
          { name: '--btn-save-draft-border-width', description: 'Default border width — 1px' },
          { name: '--btn-save-draft-color', description: 'Default text colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-save-draft-radius', description: 'Border radius — --global-spacing-radius-full (99999px)' },
          { name: '--btn-save-draft-padding-v', description: 'Vertical padding — 8px' },
          { name: '--btn-save-draft-padding-h', description: 'Horizontal padding (default state) — 16px' },
          { name: '--btn-save-draft-padding-h-expanded', description: 'Horizontal padding (all other states) — 24px' },
          { name: '--btn-save-draft-icon-size', description: 'Person icon size — 18px' },
          { name: '--btn-save-draft-icon-gap', description: 'Gap between icon and label — 8px' },
          { name: '--btn-save-draft-font-family', description: 'Font family — --brand-font-primary (F37 Ginger Pro)' },
          { name: '--btn-save-draft-font-weight', description: 'Font weight — --global-type-weight-light (300)' },
          { name: '--btn-save-draft-font-size', description: 'Font size — 16px' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Status Colours"
        description="Status-specific overrides applied per state:"
        tokens={[
          { name: '--btn-save-draft-shadow-hover', description: 'Hover / saving shadow — 2px 2px 0 0 blue-400 (#6171DF)' },
          { name: '--btn-save-draft-border-width-focus', description: 'Focused border width — 2px' },
          { name: '--btn-save-draft-border-width-saving', description: 'Saving border width — 2px' },
          { name: '--btn-save-draft-bg-saved', description: 'Saved background — --global-color-status-green-light (#F2FFF1)' },
          { name: '--btn-save-draft-border-color-saved', description: 'Saved border — --global-color-status-dark-green (#227F1A)' },
          { name: '--btn-save-draft-color-saved', description: 'Saved text — --global-color-status-dark-green (#227F1A)' },
          { name: '--btn-save-draft-bg-error', description: 'Error background — --global-color-status-red-light (#FBEBEB)' },
          { name: '--btn-save-draft-border-color-error', description: 'Error border — --global-color-status-red (#CE2031)' },
          { name: '--btn-save-draft-color-error', description: 'Error text — --global-color-status-red (#CE2031)' },
          { name: '--btn-save-draft-bg-disabled', description: 'Disabled background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-save-draft-border-color-disabled', description: 'Disabled border — --global-color-neutral-gray-200 (#E5E7EB)' },
          { name: '--btn-save-draft-color-disabled', description: 'Disabled text — --global-color-neutral-gray-400 (#9CA3AF)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { SaveDraftButton } from '@/components/SaveDraftButton';

// Controlled by a status value from your save logic
<SaveDraftButton
  status="default"
  onClick={handleSaveDraft}
/>

// Reflects different save workflow states
<SaveDraftButton status="auto-saving" />
<SaveDraftButton status="saving" />
<SaveDraftButton status="saved" />
<SaveDraftButton status="error" />
<SaveDraftButton status="disabled" />

// Override the label (e.g. for i18n)
<SaveDraftButton
  status="default"
  label="Sauvegarder le brouillon"
/>`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Drive status from your save logic">
          Map your application's save lifecycle (idle → saving → saved / error) directly to the{' '}
          <code>status</code> prop. Never manually set colours or labels — let the token system
          handle visual consistency.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Persist the button across all states">
          Keep the button visible in all states, including saved and error. Hiding it removes
          important feedback for the user about their document's save status.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Only one SaveDraftButton per form">
          Use a single SaveDraftButton per document or form scope. Multiple buttons suggest
          multiple save targets, which is confusing. If you need section-level saves, use text
          links instead.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default SaveDraftButtonDocs;
