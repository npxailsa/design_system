import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { SelectOption } from './SelectOption';
import type { SelectOptionSize, SelectOptionSelectionType, SelectOptionPosition } from './SelectOption';

const SIZES: SelectOptionSize[] = ['small', 'default', 'large'];
const SELECTION_TYPES: SelectOptionSelectionType[] = ['none', 'checkbox', 'radio'];
const POSITIONS: SelectOptionPosition[] = ['top', 'mid', 'bottom', 'solo'];

export const SelectOptionDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="SelectOption"
        subtitle="A single, position-aware option row used inside dropdown and select menus. Supports plain-text options as well as checkbox (multi-select) and radio (single-select) indicator variants. Built on MUI ButtonBase with all visual treatment via design-token CSS Modules."
      />

      <DocsTemplate.BodyText>
        <strong>SelectOption</strong> is the individual item that populates a
        select or combobox menu. Stack multiple items and use the{' '}
        <code>position</code> prop to control which corners are rounded and
        which borders are collapsed — so the stack reads as one unified panel.
        The optional <code>selectionType</code> prop adds a checkbox or radio
        indicator that responds to the <code>selected</code> prop.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Anatomy
        parts={[
          { number: 1, label: 'Container', description: 'The full-width button row. Background, border, and text colour change per state.' },
          { number: 2, label: 'Leading Icon (optional)', description: 'A slot for a MUI SvgIcon that provides additional context for the option.' },
          { number: 3, label: 'Selection Indicator (optional)', description: 'A checkbox or radio control that shows selection state. Hidden when selectionType is "none".' },
          { number: 4, label: 'Label', description: 'The text content of the option. Grows to fill available space.' },
          { number: 5, label: 'Trailing Icon (optional)', description: 'A slot for a secondary action or status icon, pinned to the right.' },
        ]}
      />

      {/* ── MUI Foundation ── */}
      <DocsTemplate.Section title="MUI Foundation">
        <DocsTemplate.BodyText>
          SelectOption is built on <strong>MUI ButtonBase</strong> — giving it
          native accessibility semantics (<code>role="option"</code>,{' '}
          <code>aria-selected</code>, <code>aria-disabled</code>), focus-visible
          handling, and ripple support out of the box. All visual styling is
          applied via CSS Modules and design tokens, keeping the MUI foundation
          intact for future upgrades.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes are available: <code>small</code>, <code>default</code>,
          and <code>large</code>. Size affects padding, font size, and indicator
          dimensions.
        </DocsTemplate.BodyText>
        <DocsTemplate.Subsection title="Size Comparison">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-8px)',
              maxWidth: '320px',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            {SIZES.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    color: 'var(--global-color-neutral-gray-500)',
                    textTransform: 'capitalize',
                  }}
                >
                  {size}
                </span>
                <SelectOption label={`Option label — ${size}`} size={size} position="solo" />
              </div>
            ))}
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Selection Types ── */}
      <DocsTemplate.Section title="Selection Types">
        <DocsTemplate.BodyText>
          Use <code>selectionType</code> to control whether the option renders a
          selection indicator. Use <code>"checkbox"</code> in multi-select menus
          and <code>"radio"</code> in single-select menus. Use <code>"none"</code>{' '}
          for plain list options.
        </DocsTemplate.BodyText>
        <DocsTemplate.Subsection title="Unselected">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-8px)',
              maxWidth: '320px',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            {SELECTION_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    color: 'var(--global-color-neutral-gray-500)',
                  }}
                >
                  selectionType="{type}"
                </span>
                <SelectOption label="Option label" selectionType={type} position="solo" />
              </div>
            ))}
          </div>
        </DocsTemplate.Subsection>
        <DocsTemplate.Subsection title="Selected">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-8px)',
              maxWidth: '320px',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            {SELECTION_TYPES.map((type) => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-4px)' }}>
                <span
                  style={{
                    fontFamily: 'var(--brand-font-primary)',
                    fontSize: 'var(--global-type-size-primary-label-xs)',
                    color: 'var(--global-color-neutral-gray-500)',
                  }}
                >
                  selectionType="{type}" selected
                </span>
                <SelectOption label="Option label" selectionType={type} selected position="solo" />
              </div>
            ))}
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Position ── */}
      <DocsTemplate.Section title="Position">
        <DocsTemplate.BodyText>
          The <code>position</code> prop controls border-radius and which border
          edges are rendered, allowing multiple options to be stacked into a
          single visually unified panel. Use <code>solo</code> for standalone
          options.
        </DocsTemplate.BodyText>
        <DocsTemplate.Subsection title="Stacked Menu Example">
          <div
            style={{
              maxWidth: '280px',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            <SelectOption label="Top option" position="top" selectionType="checkbox" />
            <SelectOption label="Middle option" position="mid" selectionType="checkbox" selected />
            <SelectOption label="Middle option 2" position="mid" selectionType="checkbox" />
            <SelectOption label="Bottom option" position="bottom" selectionType="checkbox" />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Interactive States ── */}
      <DocsTemplate.Section title="Interactive States">
        <DocsTemplate.BodyText>
          SelectOption supports default, hover, focus, active, selected, and
          disabled states. The selected state changes the background to the
          brand primary colour. Disabled options are visually muted and
          non-interactive.
        </DocsTemplate.BodyText>
        <DocsTemplate.Subsection title="State Gallery">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--global-spacing-sizing-8px)',
              maxWidth: '320px',
              padding: 'var(--global-spacing-sizing-16px) 0',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', marginBottom: '4px' }}>Default</div>
              <SelectOption label="Option label" position="solo" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', marginBottom: '4px' }}>Selected</div>
              <SelectOption label="Option label" position="solo" selected />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', marginBottom: '4px' }}>Disabled</div>
              <SelectOption label="Option label" position="solo" disabled />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-500)', marginBottom: '4px' }}>Disabled + Selected</div>
              <SelectOption label="Option label" position="solo" disabled selected />
            </div>
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="SelectOption uses the following component-level tokens. All values alias the global design tokens defined in tokens.css."
        tokens={[
          { name: '--select-option-bg', description: 'Default background colour (#FFF)' },
          { name: '--select-option-border-color', description: 'Default border colour (gray-300, #D2D5DA)' },
          { name: '--select-option-border-width', description: 'Default border width (0.5px)' },
          { name: '--select-option-color', description: 'Default text colour (base-black, #1C1C1C)' },
          { name: '--select-option-bg-hover', description: 'Hover background colour (blue-blue-100)' },
          { name: '--select-option-bg-selected', description: 'Selected background colour (brand-primary)' },
          { name: '--select-option-color-selected', description: 'Selected text colour (white)' },
          { name: '--select-option-bg-disabled', description: 'Disabled background colour (gray-50)' },
          { name: '--select-option-color-disabled', description: 'Disabled text colour (gray-300)' },
          { name: '--select-option-radius', description: 'Corner radius for solo/top/bottom positions (6px)' },
          { name: '--select-option-min-height', description: 'Minimum row height for default size (40px)' },
          { name: '--select-option-min-height-sm', description: 'Minimum row height for small size (32px)' },
          { name: '--select-option-min-height-lg', description: 'Minimum row height for large size (52px)' },
          { name: '--select-option-padding', description: 'Padding for default size (8px 12px)' },
          { name: '--select-option-indicator-size', description: 'Checkbox/radio indicator size (16px)' },
          { name: '--select-option-indicator-bg-checked', description: 'Indicator fill when checked (brand-primary)' },
          { name: '--select-option-indicator-checkbox-radius', description: 'Checkbox corner radius (4px)' },
          { name: '--select-option-indicator-radio-radius', description: 'Radio button radius (full circle)' },
        ]}
      />

      {/* ── Code Usage ── */}
      <DocsTemplate.CodeBlock>{`import { SelectOption } from './BuildingBlocks/SelectOption';

// Plain text option
<SelectOption label="Option label" position="solo" />

// Checkbox option (multi-select)
<SelectOption
  label="Option label"
  selectionType="checkbox"
  selected
  position="solo"
/>

// Radio option (single-select)
<SelectOption
  label="Option label"
  selectionType="radio"
  selected
  position="solo"
/>

// Stacked menu
<SelectOption label="First"  position="top"    selectionType="checkbox" />
<SelectOption label="Second" position="mid"    selectionType="checkbox" selected />
<SelectOption label="Third"  position="bottom" selectionType="checkbox" disabled />`}</DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Clear Selection State">
          The selected state uses the brand primary background colour and white
          text for immediate visual confirmation. Checked indicators invert on
          selected rows so they remain visible against the blue background.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Accessible by Default">
          Built on MUI ButtonBase with <code>role="option"</code>,{' '}
          <code>aria-selected</code>, and <code>aria-disabled</code>. Keyboard
          navigation and focus-visible rings are handled automatically.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Position-Aware Stacking">
          The position prop collapses internal borders and adjusts border-radius
          so a stack of options reads as a single cohesive menu panel rather than
          a series of separate elements.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', flexDirection: 'column', width: '140px' }}>
              <SelectOption label="Option A" position="top" selectionType="checkbox" />
              <SelectOption label="Option B" position="mid" selectionType="checkbox" selected />
              <SelectOption label="Option C" position="bottom" selectionType="checkbox" />
            </div>
          ),
          label: 'Stack with position',
          description: 'Use the position prop to stack options into a unified panel with collapsed borders and appropriate radius.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '140px' }}>
              <SelectOption label="Option A" position="solo" selectionType="checkbox" />
              <SelectOption label="Option B" position="solo" selectionType="checkbox" selected />
            </div>
          ),
          label: 'Stack with solo',
          description: "Don't use solo position for every item in a stack — it creates floating separate cards instead of a unified menu.",
        }}
      />

      {/* ── Related ── */}
      <DocsTemplate.RelatedLinks
        links={[
          { label: 'ButtonMenuItem', href: '?path=/story/foundation-buildingblocks-buttonmenu--documentation' },
          { label: 'Dropdown', href: '?path=/story/atoms-input-dropdown--documentation' },
        ]}
      />

      <DocsTemplate.Footer componentName="SelectOption" />
    </DocsTemplate>
  );
};

export default SelectOptionDocs;
