import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { ButtonMenu } from './ButtonMenu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const sampleItems = [
  { label: 'This is the top' },
  { label: 'This is the middle' },
  { label: 'This is the middle' },
  { label: 'This is the bottom' },
];

export const ButtonMenuDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Button Menu"
        subtitle="A stacked list of contextual action rows used in dropdown menus, toolbars, and action panels"
      />

      <DocsTemplate.BodyText>
        The <strong>Button Menu</strong> is a building block component that renders a vertical stack
        of action rows. Each row shares its borders with adjacent rows to create a seamless card
        appearance. The top item carries rounded top corners, the bottom carries rounded bottom
        corners, and middle items have none — matching the{' '}
        <code>BuildingBlocks/Button/menu</code> Figma pattern.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The menu is a flex column. Each row is a native <code>&lt;button&gt;</code> element
          that accepts optional leading and trailing icons alongside a label.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 'var(--global-spacing-sizing-32px)',
              padding: 'var(--global-spacing-sizing-32px)',
              background: 'var(--global-color-neutral-gray-50)',
              borderRadius: 'var(--global-spacing-radius-8px)',
            }}>
              <ButtonMenu
                size="default"
                items={[
                  { label: 'Edit', leadingIcon: EditIcon },
                  { label: 'Duplicate', leadingIcon: ContentCopyIcon },
                  { label: 'Download', leadingIcon: DownloadIcon },
                  { label: 'Delete', leadingIcon: DeleteIcon },
                ]}
              />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--btn-menu-width-default (200px)\n--btn-menu-border-radius-top (--global-spacing-radius-6px)\n--btn-menu-border-radius-bottom (--global-spacing-radius-6px)',
              description: 'Flex column that composes all rows. Width: 200px (S: 160px, L: 240px). Min-width: 140px. No gap between rows — borders share space.',
            },
            {
              id: 2,
              name: 'Top Row',
              token: '--btn-menu-padding-top-default (12px 12px 8px)\n--btn-menu-border-width (0.5px)\n--btn-menu-border-color (--global-color-neutral-gray-300)',
              description: '6px radius on top-left and top-right. 0.5px border on top, left, and right edges. More top padding than bottom to visually anchor the row.',
            },
            {
              id: 3,
              name: 'Middle Row(s)',
              token: '--btn-menu-padding-mid-default (8px 12px)\n--btn-menu-border-width (0.5px — left + right only)',
              description: 'No border-radius. Borders on left and right only — top/bottom edges are shared with adjacent rows, preventing double borders.',
            },
            {
              id: 4,
              name: 'Bottom Row',
              token: '--btn-menu-padding-bottom-default (8px 12px 12px)\n--btn-menu-border-width (0.5px)',
              description: '6px radius on bottom-left and bottom-right. 0.5px border on bottom, left, and right edges.',
            },
            {
              id: 5,
              name: 'Leading / Trailing Icon',
              token: '--btn-menu-icon-size-default (16px)\n--btn-menu-icon-gap (8px)\n--btn-menu-icon-opacity (0.6)',
              description: 'Optional MUI SvgIcon slots, rendered at 60% opacity. Trailing icon is pushed to the far right via margin-left: auto.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes control font size, padding, and container width. All sizes use Calibri Light
          at 300 weight with consistent letter-spacing of 0.05px.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Small',
              sublabel: '160px wide — 14px Calibri Light',
              children: (
                <ButtonMenu size="small" items={sampleItems} />
              ),
            },
            {
              label: 'Default',
              sublabel: '200px wide — 16px Calibri Light',
              children: (
                <ButtonMenu size="default" items={sampleItems} />
              ),
            },
            {
              label: 'Large',
              sublabel: '240px wide — 18px Calibri Light',
              children: (
                <ButtonMenu size="large" items={sampleItems} />
              ),
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Optional Elements ── */}
      <DocsTemplate.Section title="Optional Elements">
        <DocsTemplate.Subsection title="With Leading Icons">
          <DocsTemplate.BodyText>
            Pass <code>leadingIcon</code> on any item to render a MUI icon before the label.
            Icons render at 60% opacity to keep the text primary.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <ButtonMenu
              items={[
                { label: 'Edit', leadingIcon: EditIcon },
                { label: 'Duplicate', leadingIcon: ContentCopyIcon },
                { label: 'Download', leadingIcon: DownloadIcon },
                { label: 'Delete', leadingIcon: DeleteIcon },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Trailing Icons (Submenu indicator)">
          <DocsTemplate.BodyText>
            Pass <code>trailingIcon</code> to indicate items that expand into a submenu.
            The trailing icon is pushed to the far right of the row.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <ButtonMenu
              items={[
                { label: 'View options', trailingIcon: ChevronRightIcon },
                { label: 'Sort by', trailingIcon: ChevronRightIcon },
                { label: 'Group by', trailingIcon: ChevronRightIcon },
                { label: 'Filters' },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Selected State">
          <DocsTemplate.BodyText>
            Set <code>selected: true</code> on an item to highlight it with the blue-50 background
            and blue-gray text, indicating the active choice.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <ButtonMenu
              items={[
                { label: 'All items' },
                { label: 'Active', selected: true },
                { label: 'Archived' },
                { label: 'Draft' },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Disabled Items">
          <DocsTemplate.BodyText>
            Set <code>disabled: true</code> on individual items to prevent interaction. Disabled
            items use <code>--global-color-neutral-gray-400</code> text and a not-allowed cursor.
          </DocsTemplate.BodyText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <ButtonMenu
              items={[
                { label: 'Edit' },
                { label: 'Duplicate', disabled: true },
                { label: 'Archive', disabled: true },
                { label: 'Delete' },
              ]}
            />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout"
        description="ButtonMenu layout and sizing tokens:"
        tokens={[
          { name: '--btn-menu-width-small', description: 'Container width — small size (160px)' },
          { name: '--btn-menu-width-default', description: 'Container width — default size (200px)' },
          { name: '--btn-menu-width-large', description: 'Container width — large size (240px)' },
          { name: '--btn-menu-min-width', description: 'Minimum container width (140px)' },
          { name: '--btn-menu-border-radius-top', description: 'Top item corner radius — --global-spacing-radius-6px (6px)' },
          { name: '--btn-menu-border-radius-bottom', description: 'Bottom item corner radius — --global-spacing-radius-6px (6px)' },
          { name: '--btn-menu-border-width', description: 'Border thickness — --global-spacing-stroke-0-5px (0.5px)' },
          { name: '--btn-menu-border-color', description: 'Border colour — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--btn-menu-icon-gap', description: 'Gap between icon and label — --global-spacing-sizing-8px (8px)' },
          { name: '--btn-menu-icon-opacity', description: 'Icon opacity at rest — 0.6' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Colours"
        description="ButtonMenu colour tokens:"
        tokens={[
          { name: '--btn-menu-bg', description: 'Default background — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-menu-bg-hover', description: 'Hover background — --global-color-neutral-gray-50 (#F9FAFB)' },
          { name: '--btn-menu-bg-selected', description: 'Selected background — --global-color-primary-blue-blue-50 (#F9F9FE)' },
          { name: '--btn-menu-bg-disabled', description: 'Disabled background — --global-color-base-white (#FFFFFF)' },
          { name: '--btn-menu-color', description: 'Default text colour — --global-color-base-black (#1C1C1C)' },
          { name: '--btn-menu-color-selected', description: 'Selected text colour — --global-color-secondary-blue-gray (#61607C)' },
          { name: '--btn-menu-color-disabled', description: 'Disabled text colour — --global-color-neutral-gray-400 (#9CA3AF)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="ButtonMenu font and size tokens:"
        tokens={[
          { name: '--btn-menu-font-family', description: 'Font — --brand-font-secondary (Calibri)' },
          { name: '--btn-menu-font-weight', description: 'Weight — --global-type-weight-light (300)' },
          { name: '--btn-menu-letter-spacing', description: 'Letter spacing — 0.05px' },
          { name: '--btn-menu-font-size-small', description: 'Small font size — --global-type-size-primary-label-sm (14px)' },
          { name: '--btn-menu-font-size-default', description: 'Default font size — --global-type-size-primary-label (16px)' },
          { name: '--btn-menu-font-size-large', description: 'Large font size — --global-type-size-primary-label-lg (18px)' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { ButtonMenu } from './BuildingBlocks/ButtonMenu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Basic menu (minimum 2 items: top + bottom)
<ButtonMenu
  size="default"
  items={[
    { label: 'Option A' },
    { label: 'Option B' },
    { label: 'Option C' },
    { label: 'Option D' },
  ]}
/>

// With icons + states
<ButtonMenu
  size="default"
  items={[
    { label: 'Edit', leadingIcon: EditIcon },
    { label: 'Duplicate (submenu)', trailingIcon: ChevronRightIcon },
    { label: 'Archive', selected: true },
    { label: 'Delete', leadingIcon: DeleteIcon, disabled: true },
  ]}
/>

// Small / Large
<ButtonMenu size="small" items={items} />
<ButtonMenu size="large" items={items} />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Keep menus short and scannable">
          Aim for 4–8 items per menu. Longer lists become hard to scan. Use separators
          (future enhancement) or submenus via a trailing ChevronRight icon for grouped actions.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Icons support — they don't replace — labels">
          Always include a text label. Icons alone are ambiguous in a list context. Icons should
          support recognition, not be the sole indicator of action.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match size to the triggering control">
          Use the same size as the button that opens the menu. A large trigger opening a small
          menu creates a visual size mismatch.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default ButtonMenuDocs;
