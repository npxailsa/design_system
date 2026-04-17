import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { SelectItem } from './SelectItem';
import type { SelectItemSize, SelectItemState, SelectItemType } from './SelectItem';

const SIZES:  SelectItemSize[]  = ['small', 'default', 'large'];
const TYPES:  SelectItemType[]  = ['checkbox', 'radio'];
const STATES: SelectItemState[] = ['default', 'selected', 'some-selected', 'hover', 'clicked'];

export const SelectItemDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="SelectItem"
      subtitle="A standalone checkbox or radio button indicator. Used as the selection control inside list rows, table rows, and select menus. Built on MUI Checkbox / Radio with all visual sizing and colour driven by design tokens."
    />

    <DocsTemplate.BodyText>
      <strong>SelectItem</strong> is a focused, single-purpose building block
      that renders exactly one checkbox or radio indicator at a specified size
      and state. It does not include a label or wrapper row — compose it inside
      a <strong>MenuMultiSelect</strong> row or a custom list item for a complete
      interactive control.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Anatomy
      parts={[
        { number: 1, label: 'Wrapper', description: 'An inline-flex span that constrains the indicator to its token-driven pixel size.' },
        { number: 2, label: 'MUI Checkbox / Radio', description: 'The underlying MUI control. Colour and size are overridden via sx to match the Figma spec exactly.' },
      ]}
    />

    {/* ── MUI Foundation ── */}
    <DocsTemplate.Section title="MUI Foundation">
      <DocsTemplate.BodyText>
        SelectItem wraps <strong>MUI Checkbox</strong> (for <code>type="checkbox"</code>) and{' '}
        <strong>MUI Radio</strong> (for <code>type="radio"</code>). The MUI foundation
        provides native <code>aria-checked</code>, keyboard interaction, and focus
        management out of the box. Visual customisation is applied via the <code>sx</code>{' '}
        prop, keeping the accessibility layer intact.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    {/* ── Types ── */}
    <DocsTemplate.Section title="Types">
      <DocsTemplate.Subsection title="Checkbox vs Radio">
        <div style={{ display: 'flex', gap: '40px', padding: 'var(--global-spacing-sizing-16px) 0', flexWrap: 'wrap' }}>
          {TYPES.map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', fontWeight: 600, color: 'var(--global-color-neutral-gray-500)', textTransform: 'capitalize' }}>
                {type}
              </span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <SelectItem type={type} state="default" />
                <SelectItem type={type} state="selected" />
                {type === 'checkbox' && <SelectItem type={type} state="some-selected" />}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        Three sizes match the design system scale: <code>small</code> (18 px),{' '}
        <code>default</code> (22 px), and <code>large</code> (26 px). Use the
        size that matches the row density of the surrounding list.
      </DocsTemplate.BodyText>
      <DocsTemplate.Subsection title="Checkbox — all sizes">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          {SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <SelectItem type="checkbox" size={size} state="selected" />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'capitalize' }}>{size}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Radio — all sizes">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          {SIZES.map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <SelectItem type="radio" size={size} state="selected" />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '10px', color: 'var(--global-color-neutral-gray-400)', textTransform: 'capitalize' }}>{size}</span>
            </div>
          ))}
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── States ── */}
    <DocsTemplate.Section title="States">
      <DocsTemplate.BodyText>
        <code>state</code> controls both the visual appearance and the underlying
        MUI <code>checked</code> / <code>indeterminate</code> props:{' '}
        <code>default</code> → unchecked,{' '}
        <code>selected</code> → checked,{' '}
        <code>some-selected</code> → indeterminate (checkbox only),{' '}
        <code>hover</code> / <code>clicked</code> → visually identical to selected
        but communicate intent for static story matrices.
      </DocsTemplate.BodyText>
      <DocsTemplate.Subsection title="Checkbox states">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-16px) 0', alignItems: 'flex-end' }}>
          {STATES.map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <SelectItem type="checkbox" state={s} />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center', maxWidth: '64px' }}>{s}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <SelectItem type="checkbox" state="default" disabled />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center' }}>disabled</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <SelectItem type="checkbox" state="selected" disabled />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center' }}>disabled+selected</span>
          </div>
        </div>
      </DocsTemplate.Subsection>
      <DocsTemplate.Subsection title="Radio states">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: 'var(--global-spacing-sizing-16px) 0', alignItems: 'flex-end' }}>
          {(['default', 'selected', 'hover', 'clicked'] as SelectItemState[]).map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <SelectItem type="radio" state={s} />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center', maxWidth: '64px' }}>{s}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <SelectItem type="radio" state="default" disabled />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center' }}>disabled</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <SelectItem type="radio" state="selected" disabled />
            <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: '9px', color: 'var(--global-color-neutral-gray-400)', textAlign: 'center' }}>disabled+selected</span>
          </div>
        </div>
      </DocsTemplate.Subsection>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="SelectItem uses the following component-level tokens. All values alias the global design tokens defined in tokens.css."
      tokens={[
        { name: '--select-item-size-sm',          description: 'Pixel dimension of the small indicator (18 px)' },
        { name: '--select-item-size',              description: 'Pixel dimension of the default indicator (22 px)' },
        { name: '--select-item-size-lg',           description: 'Pixel dimension of the large indicator (26 px)' },
        { name: '--select-item-color-default',     description: 'Icon colour in the default (unchecked) state (gray-500)' },
        { name: '--select-item-color-checked',     description: 'Icon colour when checked / selected (brand primary, #3776CE)' },
        { name: '--select-item-color-disabled',    description: 'Icon colour when disabled (gray-300)' },
        { name: '--select-item-disabled-opacity',  description: 'Opacity applied to the wrapper when disabled (0.5)' },
      ]}
    />

    {/* ── Code Usage ── */}
    <DocsTemplate.CodeBlock>{`import { SelectItem } from './BuildingBlocks/SelectItem';

// Default checkbox (unchecked)
<SelectItem type="checkbox" />

// Checked checkbox — default size
<SelectItem type="checkbox" state="selected" />

// Indeterminate checkbox — large
<SelectItem type="checkbox" state="some-selected" size="large" />

// Radio button — selected, small
<SelectItem type="radio" state="selected" size="small" />

// Disabled + checked checkbox
<SelectItem type="checkbox" state="selected" disabled />

// Controlled — wire up onChange
const [checked, setChecked] = useState(false);
<SelectItem
  type="checkbox"
  state={checked ? 'selected' : 'default'}
  onChange={setChecked}
/>`}</DocsTemplate.CodeBlock>

    {/* ── Principles ── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="One responsibility">
        SelectItem renders only the indicator — no label, no row layout. Compose
        it inside a row component (<strong>MenuMultiSelect</strong>) for a full
        list-item experience.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Token-driven sizing">
        All three pixel sizes map directly to global spacing tokens so the
        component scales alongside the rest of the design system without custom
        overrides.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Accessible by default">
        Wraps MUI primitives that handle <code>aria-checked</code>, keyboard
        interaction, and focus management. Pass <code>aria-label</code> when
        rendering without an adjacent visible label.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    {/* ── Related ── */}
    <DocsTemplate.RelatedLinks
      links={[
        { label: 'MenuMultiSelect', href: '?path=/story/foundation-buildingblocks-menumultiselect--documentation' },
        { label: 'Dropdown', href: '?path=/story/atoms-input-dropdown--documentation' },
      ]}
    />

    <DocsTemplate.Footer componentName="SelectItem" />
  </DocsTemplate>
);

export default SelectItemDocs;
