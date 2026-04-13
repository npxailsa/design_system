import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { SplitButton } from './SplitButton';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

const sampleMenu = [
  { label: 'Edit', leadingIcon: EditIcon },
  { label: 'Duplicate', leadingIcon: ContentCopyIcon },
  { label: 'Archive', leadingIcon: ArchiveIcon },
  { label: 'Delete', leadingIcon: DeleteIcon },
];

export const SplitButtonDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Split / Dropdown Button"
        subtitle="A compound button pairing a primary action with a chevron dropdown trigger — available in all four button families and their variants"
      />

      <DocsTemplate.BodyText>
        The <strong>Split Button</strong> combines a main action zone with a separate chevron
        dropdown trigger, separated by a vertical divider. Clicking the main zone fires the primary
        action; clicking the chevron reveals a <code>ButtonMenu</code> panel of secondary options.
        All four button families — <strong>Primary</strong>, <strong>Secondary</strong>,{' '}
        <strong>Tertiary</strong>, and <strong>Ghost</strong> — are supported, including their
        respective alt/outline variants.
      </DocsTemplate.BodyText>

      {/* ── MUI Foundation ── */}
      <DocsTemplate.Section title="MUI Foundation">
        <DocsTemplate.BodyText>
          Built on MUI's <strong>ButtonBase</strong> — used for both the primary action zone and
          the chevron dropdown trigger. Each zone is an independent <code>ButtonBase</code>{' '}
          element, which ensures both areas receive proper keyboard handling, accessible focus
          management, and disabled propagation independently. MUI's{' '}
          <strong>KeyboardArrowDownIcon</strong> from <code>@mui/icons-material</code> is used
          as the dropdown chevron indicator. All visual styling is handled via CSS Modules and
          design tokens; MUI contributes no colour, border, or layout opinions.
        </DocsTemplate.BodyText>
        <DocsTemplate.CodeBlock>
          {`// MUI base imports\nimport ButtonBase from '@mui/material/ButtonBase';\nimport KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';\n\n// Primary action zone:\n<ButtonBase component="button" className={styles['split-btn__main']} onClick={onMainClick}>\n// Dropdown trigger zone:\n<ButtonBase component="button" className={styles['split-btn__chevron']} onClick={onChevronClick}>\n  <KeyboardArrowDownIcon />\n</ButtonBase>`}
        </DocsTemplate.CodeBlock>
      </DocsTemplate.Section>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--global-spacing-sizing-24px)',
              padding: 'var(--global-spacing-sizing-32px)',
              background: 'var(--global-color-neutral-gray-50)',
              borderRadius: 'var(--global-spacing-radius-8px)',
            }}>
              <SplitButton
                buttonType="primary"
                variant="filled"
                label="Save"
                menuItems={sampleMenu}
              />
              <SplitButton
                buttonType="secondary"
                variant="solid"
                label="Export"
                showLeadingIcon
                leadingIcon={DownloadIcon}
                menuItems={sampleMenu}
              />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Main Button Zone',
              token: '--btn-padding-default (12px 16px)\n--btn-font-size-default (16px)\n--btn-font-weight (300 light)',
              description: 'Fires the primary action on click. Shares background, color, and border with the trigger zone. Takes up all available space (flex: 1).',
            },
            {
              id: 2,
              name: 'Vertical Divider',
              token: '--btn-split-divider-width (1px)\n--btn-split-divider-opacity (0.4)',
              description: 'A 1px vertical rule at 40% opacity that visually separates the main zone from the dropdown trigger. Inherits the button\'s text color.',
            },
            {
              id: 3,
              name: 'Chevron Trigger',
              token: '--btn-split-trigger-width-default (40px)\n--btn-split-chevron-size (18px)\n--btn-split-chevron-opacity (0.75)',
              description: 'Fixed-width zone that opens the dropdown panel. Rotates 180° when the panel is open. Width: 40px (S: 32px, L: 48px).',
            },
            {
              id: 4,
              name: 'Dropdown Panel',
              token: '--btn-split-panel-shadow (0px 5px 10px rgba(39,39,39,0.12))\n--btn-split-panel-offset (4px)\n--btn-split-panel-z-index (200)',
              description: 'Absolutely positioned below the button group. Contains a ButtonMenu component at full container width. Closes on outside-click or Escape.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Primary ── */}
      <DocsTemplate.Section title="Primary Button — Dropdown">
        <DocsTemplate.BodyText>
          The primary filled variant uses the brand blue background with white text. The outline
          variant uses the periwinkle-50 background with blue-gray text and a blue-300 border.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Filled (default)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="primary" variant="filled" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="primary" variant="filled" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="primary" variant="filled" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Outline (alt)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="primary" variant="outline" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="primary" variant="outline" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="primary" variant="outline" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Secondary ── */}
      <DocsTemplate.Section title="Secondary Button — Dropdown">
        <DocsTemplate.BodyText>
          Secondary split buttons use the sky-blue color family. Solid uses the sky-blue-50 tinted
          background; Alt uses white.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Solid">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="secondary" variant="solid" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="solid" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="solid" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Alt (white background)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="secondary" variant="alt" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="alt" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="alt" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Tertiary ── */}
      <DocsTemplate.Section title="Tertiary Button — Dropdown">
        <DocsTemplate.BodyText>
          Tertiary split buttons use the yellow/amber color family with a dark-seafoam drop shadow
          on hover. Alt uses the seafoam-25 background.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Solid (yellow)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="tertiary" variant="solid" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="solid" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="solid" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Alt (seafoam background)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="tertiary" variant="alt" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="alt" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="alt" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Ghost ── */}
      <DocsTemplate.Section title="Ghost Button — Dropdown">
        <DocsTemplate.BodyText>
          Ghost split buttons use the blue-50 bordered style. The link variant uses a minimal
          bordered treatment with a light gray border for structure.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Ghost (bordered)">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="ghost" variant="ghost" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="ghost" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="ghost" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Link variant">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="ghost" variant="link" size="small" label="Small" menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="link" size="default" label="Default" menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="link" size="large" label="Large" menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── States ── */}
      <DocsTemplate.Section title="States">
        <DocsTemplate.Subsection title="With Leading Icon">
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="primary" variant="filled" label="Download" showLeadingIcon leadingIcon={DownloadIcon} menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="solid" label="Profile" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="solid" label="Edit" showLeadingIcon leadingIcon={EditIcon} menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="ghost" label="Options" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Loading">
          <DocsTemplate.BodyText>
            Pass <code>loading</code> to show a spinner in the main zone and disable all interaction.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="primary" variant="filled" label="Saving…" loading menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="ghost" label="Saving…" loading menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled">
          <DocsTemplate.BodyText>
            Pass <code>disabled</code> to prevent all interaction. Both zones adopt the disabled
            colour palette from their respective button family tokens.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-16px)', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-12px) 0', alignItems: 'flex-start' }}>
            <SplitButton buttonType="primary" variant="filled" label="Disabled" disabled menuItems={sampleMenu} />
            <SplitButton buttonType="primary" variant="outline" label="Disabled" disabled menuItems={sampleMenu} />
            <SplitButton buttonType="secondary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
            <SplitButton buttonType="tertiary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
            <SplitButton buttonType="ghost" variant="ghost" label="Disabled" disabled menuItems={sampleMenu} />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Structure"
        description="SplitButton structural tokens:"
        tokens={[
          { name: '--btn-split-trigger-width-small', description: 'Chevron trigger width — small (32px)' },
          { name: '--btn-split-trigger-width-default', description: 'Chevron trigger width — default (40px)' },
          { name: '--btn-split-trigger-width-large', description: 'Chevron trigger width — large (48px)' },
          { name: '--btn-split-divider-width', description: 'Vertical divider thickness — 1px (--global-spacing-stroke-1px)' },
          { name: '--btn-split-divider-opacity', description: 'Divider opacity — 0.4' },
          { name: '--btn-split-chevron-size', description: 'Chevron icon size — 18px (--global-spacing-sizing-18px)' },
          { name: '--btn-split-chevron-opacity', description: 'Chevron icon opacity — 0.75' },
          { name: '--btn-split-chevron-rotate', description: 'Chevron rotation when open — 180deg' },
          { name: '--btn-split-panel-shadow', description: 'Dropdown panel shadow — 0px 5px 10px rgba(39,39,39,0.12)' },
          { name: '--btn-split-panel-offset', description: 'Gap between button and panel — 4px' },
          { name: '--btn-split-panel-z-index', description: 'Panel stacking order — 200' },
        ]}
      />

      {/* ── Code ── */}
      <DocsTemplate.CodeBlock>
        {`import { SplitButton } from './SplitButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const menuItems = [
  { label: 'Edit',      onClick: () => console.log('Edit') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate') },
  { label: 'Delete',    onClick: () => console.log('Delete'), disabled: true },
];

// Primary filled (default)
<SplitButton
  buttonType="primary"
  variant="filled"
  label="Save"
  menuItems={menuItems}
  onMainClick={() => console.log('Save clicked')}
/>

// Primary outline
<SplitButton buttonType="primary" variant="outline" label="Save" menuItems={menuItems} />

// Secondary solid / alt
<SplitButton buttonType="secondary" variant="solid" label="Export" menuItems={menuItems} />
<SplitButton buttonType="secondary" variant="alt"   label="Export" menuItems={menuItems} />

// Tertiary solid / alt
<SplitButton buttonType="tertiary" variant="solid" label="Publish" menuItems={menuItems} />
<SplitButton buttonType="tertiary" variant="alt"   label="Publish" menuItems={menuItems} />

// Ghost / Link
<SplitButton buttonType="ghost" variant="ghost" label="Options" menuItems={menuItems} />
<SplitButton buttonType="ghost" variant="link"  label="Options" menuItems={menuItems} />

// Loading / Disabled
<SplitButton buttonType="primary" variant="filled" label="Saving…" loading menuItems={menuItems} />
<SplitButton buttonType="primary" variant="filled" label="Submit"  disabled menuItems={menuItems} />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Main action should be the most common path">
          Put the highest-frequency action in the main zone. Secondary and destructive actions
          (delete, archive) belong in the dropdown. Don't hide the primary intent behind the
          chevron.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Match the button family to its hierarchy">
          Use the same button type as you would for a regular button in that context. A Split
          Primary Button competes with other Primary Buttons — use it only when the action
          genuinely needs a dropdown.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Disable consistently across both zones">
          Both the main action and the chevron should be disabled together. Never disable only
          one zone — it creates an ambiguous affordance about what actions are available.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default SplitButtonDocs;
