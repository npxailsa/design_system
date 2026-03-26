import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Tag } from './Tag';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ALL_COLOURS = [
  'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info', 'default',
] as const;

export const TagDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Tag"
        subtitle="Compact pill-shaped labels for categorising, filtering, and annotating content across the interface"
      />

      <DocsTemplate.BodyText>
        The <strong>Tag</strong> component is a small, highly versatile pill label used to represent
        categories, attributes, or states. It supports 10 colour variants, 3 sizes, filled and
        outline styles, optional leading icons, removable dismiss buttons, and numeric count badges.
        Tags are interactive when given an <code>onClick</code> handler and can express a
        selected/active state.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The diagram below maps each part of the default Tag to its controlling design token.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={
            <Tag
              colour="blue"
              size="large"
              label="Category"
              showLeadingIcon
              leadingIcon={CheckIcon}
              showCount
              count={4}
              showRemove
            />
          }
          parts={[
            {
              id: 1,
              name: 'Leading Icon',
              token: 'MUI icon component\n--tag-icon-size-{size}\n--tag-gap-{size}',
              description: 'Optional icon preceding the label. Inherits the tag colour. Controlled by showLeadingIcon + leadingIcon props.',
              pin: { top: '50%', left: '7%' },
            },
            {
              id: 2,
              name: 'Label',
              token: '--tag-font-family\n--tag-font-size-{size}\n--tag-font-weight\n--tag-color-{colour}',
              description: 'The primary text content. Truncates with ellipsis at max 160px. Set via the label prop.',
              pin: { top: '50%', left: '42%' },
            },
            {
              id: 3,
              name: 'Count Badge',
              token: '--tag-count background (rgba overlay)',
              description: 'Optional numeric badge after the label. Semi-transparent background derived from the tag colour. Controlled by showCount + count props.',
              pin: { top: '20%', left: '65%' },
            },
            {
              id: 4,
              name: 'Remove Button',
              token: '--tag-remove (× SVG, currentColor)',
              description: 'Optional dismiss control. Calls onRemove on click. Inherits tag text colour at 65% opacity, rising to 100% on hover.',
              pin: { top: '50%', left: '90%' },
            },
            {
              id: 5,
              name: 'Container',
              token: '--tag-border-radius\n--tag-bg-{colour}\n--tag-border-color-{colour}\n--tag-height-{size}\n--tag-padding-{size}',
              description: 'Pill-shaped outer shell. Fully rounded (100px radius). Height, padding, and colour are all size- and colour-variant driven.',
              pin: { top: '5%', left: '50%' },
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Colour Variants ── */}
      <DocsTemplate.Section title="Colour Variants">
        <DocsTemplate.BodyText>
          Ten colour variants are available. Each maps to a unique background, text, and border
          colour through the token system. The <strong>filled</strong> variant (default) uses a
          tinted background, while <strong>outline</strong> uses a transparent background with the
          same border colour.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Filled">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            {ALL_COLOURS.map((colour) => (
              <Tag key={colour} colour={colour} variant="filled" label={colour} />
            ))}
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Outline">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
            {ALL_COLOURS.map((colour) => (
              <Tag key={colour} colour={colour} variant="outline" label={colour} />
            ))}
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes adapt the tag to different density contexts. All sizes support all colour
          variants and optional elements.
        </DocsTemplate.BodyText>

        <DocsTemplate.SizeDemo
          rows={[
            {
              label: 'Small',
              sublabel: 'Dense lists, inline metadata',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
                  <Tag size="small" colour="blue" label="Small" />
                  <Tag size="small" colour="seafoam" label="Tag" />
                  <Tag size="small" colour="yellow" label="Label" />
                </div>
              ),
            },
            {
              label: 'Default',
              sublabel: 'Standard use across the interface',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
                  <Tag size="default" colour="blue" label="Default" />
                  <Tag size="default" colour="seafoam" label="Tag" />
                  <Tag size="default" colour="yellow" label="Label" />
                </div>
              ),
            },
            {
              label: 'Large',
              sublabel: 'Prominent filters, hero labels',
              children: (
                <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
                  <Tag size="large" colour="blue" label="Large" />
                  <Tag size="large" colour="seafoam" label="Tag" />
                  <Tag size="large" colour="yellow" label="Label" />
                </div>
              ),
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Optional Elements ── */}
      <DocsTemplate.Section title="Optional Elements">
        <DocsTemplate.BodyText>
          Each optional element — leading icon, count badge, and remove button — is independently
          togglable and composable.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="With Leading Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Tag colour="blue" label="Person" showLeadingIcon leadingIcon={PersonIcon} />
            <Tag colour="green" label="Verified" showLeadingIcon leadingIcon={CheckIcon} />
            <Tag colour="purple" label="Featured" showLeadingIcon leadingIcon={StarBorderIcon} />
            <Tag colour="yellow" label="Review" size="large" showLeadingIcon leadingIcon={StarBorderIcon} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Count Badge">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Tag colour="blue" label="Issues" showCount count={12} />
            <Tag colour="red" label="Errors" showCount count={3} />
            <Tag colour="info" label="Pending" showCount count={28} />
            <Tag colour="dark" label="Total" showCount count={99} />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="With Remove Button">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Tag colour="blue" label="Removable" showRemove />
            <Tag colour="seafoam" label="Clear me" showRemove />
            <Tag colour="purple" label="Dismiss" showRemove />
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Combined">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Tag colour="blue" size="large" label="Design" showLeadingIcon leadingIcon={StarBorderIcon} showCount count={7} showRemove />
            <Tag colour="green" label="Approved" showLeadingIcon leadingIcon={CheckIcon} showRemove />
            <Tag colour="red" size="small" label="Urgent" showCount count={2} showRemove />
          </div>
        </DocsTemplate.Subsection>
      </DocsTemplate.Section>

      {/* ── Selected State ── */}
      <DocsTemplate.Section title="Selected State">
        <DocsTemplate.BodyText>
          Pass <code>selected</code> to show the tag in an active/pressed state. The selected
          style inverts the background and text colour using the full token colour value rather
          than the tinted background.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <Tag colour="blue" label="Unselected" />
          <Tag colour="blue" label="Selected" selected />
          <Tag colour="green" label="Unselected" />
          <Tag colour="green" label="Selected" selected />
          <Tag colour="purple" label="Unselected" />
          <Tag colour="purple" label="Selected" selected />
        </div>
      </DocsTemplate.Section>

      {/* ── Disabled State ── */}
      <DocsTemplate.Section title="Disabled State">
        <DocsTemplate.BodyText>
          Disabled tags render at 45% opacity and block all interactions. Apply with the{' '}
          <code>disabled</code> prop.
        </DocsTemplate.BodyText>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-16px) 0' }}>
          <Tag colour="blue" label="Active" />
          <Tag colour="blue" label="Disabled" disabled />
          <Tag colour="red" label="Active" showRemove />
          <Tag colour="red" label="Disabled" showRemove disabled />
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout & Size"
        description="Tokens controlling dimensions, spacing, and border radius:"
        tokens={[
          { name: '--tag-border-radius', description: 'Fully rounded pill shape (100px) — uses --global-spacing-radius-100px' },
          { name: '--tag-border-width', description: 'Border thickness (1px) — uses --global-spacing-stroke-1px' },
          { name: '--tag-height-small', description: 'Small tag height (20px) — uses --global-spacing-sizing-20px' },
          { name: '--tag-height-default', description: 'Default tag height (24px) — uses --global-spacing-sizing-24px' },
          { name: '--tag-height-large', description: 'Large tag height (28px) — uses --global-spacing-sizing-28px' },
          { name: '--tag-padding-small', description: 'Small horizontal padding (0 8px)' },
          { name: '--tag-padding-default', description: 'Default horizontal padding (0 10px)' },
          { name: '--tag-padding-large', description: 'Large horizontal padding (0 12px)' },
          { name: '--tag-gap-small', description: 'Gap between elements — small (4px)' },
          { name: '--tag-gap-default', description: 'Gap between elements — default (4px)' },
          { name: '--tag-gap-large', description: 'Gap between elements — large (6px)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Tokens controlling text appearance:"
        tokens={[
          { name: '--tag-font-family', description: 'Font family — F37 Ginger Pro (--font-family-primary)' },
          { name: '--tag-font-weight', description: 'Font weight — 400 regular (--global-type-weight-default)' },
          { name: '--tag-letter-spacing', description: 'Letter spacing (0.15px)' },
          { name: '--tag-font-size-small', description: 'Small font size (11px) — uses --global-type-size-primary-label-xs' },
          { name: '--tag-font-size-default', description: 'Default font size (12px) — uses --global-type-size-primary-label-xs' },
          { name: '--tag-font-size-large', description: 'Large font size (14px) — uses --global-type-size-primary-label-sm' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Colour Variants"
        description="Each colour has three tokens: background, text, and border. All reference global tokens."
        tokens={[
          { name: '--tag-bg-blue / --tag-color-blue / --tag-border-color-blue', description: 'Blue variant — sky-blue-50 bg / sky-blue text / sky-blue-200 border' },
          { name: '--tag-bg-seafoam / --tag-color-seafoam / --tag-border-color-seafoam', description: 'Seafoam variant — seafoam-100 bg / seafoam-300 text and border' },
          { name: '--tag-bg-yellow / --tag-color-yellow / --tag-border-color-yellow', description: 'Yellow variant — orange-light bg / dark-orange text / orange-light-border border' },
          { name: '--tag-bg-dark / --tag-color-dark / --tag-border-color-dark', description: 'Dark variant — base-black bg / base-white text' },
          { name: '--tag-bg-navy / --tag-color-navy / --tag-border-color-navy', description: 'Navy variant — secondary-navy bg / base-white text' },
          { name: '--tag-bg-red / --tag-color-red / --tag-border-color-red', description: 'Red variant — status-red-light bg / status-red text / status-rose border' },
          { name: '--tag-bg-green / --tag-color-green / --tag-border-color-green', description: 'Green variant — status-green-light bg / status-dark-green text / status-green border' },
          { name: '--tag-bg-purple / --tag-color-purple / --tag-border-color-purple', description: 'Purple variant — status-purple-light bg / status-purple text / note-mid border' },
          { name: '--tag-bg-info / --tag-color-info / --tag-border-color-info', description: 'Info variant — status-info-blue-light bg / status-info-blue text / status-edit border' },
          { name: '--tag-bg-default / --tag-color-default / --tag-border-color-default', description: 'Default (gray) variant — neutral-gray-100 bg / neutral-gray-700 text / neutral-gray-300 border' },
        ]}
      />

      {/* ── Usage ── */}
      <DocsTemplate.CodeBlock>
        {`import { Tag } from './Tag';
import CheckIcon from '@mui/icons-material/Check';

// Basic blue tag
<Tag colour="blue" label="Category" />

// Tag with leading icon + count + remove
<Tag
  colour="green"
  size="large"
  label="Approved"
  showLeadingIcon
  leadingIcon={CheckIcon}
  showCount
  count={4}
  showRemove
  onRemove={() => console.log('removed')}
/>

// Interactive (clickable) tag with selected state
<Tag
  colour="purple"
  label="Filter"
  selected={isActive}
  onClick={() => setIsActive(!isActive)}
/>

// Outline variant
<Tag colour="blue" variant="outline" label="Label" />

// Disabled
<Tag colour="red" label="Restricted" disabled />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Semantic Colour">
          Choose the colour variant based on its semantic meaning, not aesthetics. Use{' '}
          <strong>red</strong> for errors, <strong>green</strong> for success, <strong>yellow</strong>{' '}
          for warnings, and <strong>info/blue</strong> for informational categories. Reserve{' '}
          <strong>dark</strong> and <strong>navy</strong> for high-emphasis neutral labels.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Concise Labels">
          Tag labels should be 1–3 words. Long text forces truncation at 160px. If content
          is longer, consider a different component (e.g. a Badge or a full Label).
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Group Consistently">
          When displaying a set of tags, keep the same size and variant consistent across the
          group. Mixing sizes within a row creates visual noise. Reserve size variation for
          deliberate hierarchy signals.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Do / Don't ── */}
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Tag colour="green" label="Approved" showLeadingIcon leadingIcon={CheckIcon} />
              <Tag colour="red" label="Rejected" />
              <Tag colour="yellow" label="Pending" />
            </div>
          ),
          label: 'Semantic colours',
          description: 'Use colour variants that reflect semantic meaning — green for success, red for errors, yellow for warnings.',
        }}
        dontItem={{
          icon: (
            <div style={{ display: 'flex', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Tag colour="purple" label="Approved" />
              <Tag colour="blue" label="Rejected" />
              <Tag colour="navy" label="Pending" />
            </div>
          ),
          label: 'Mismatched colours',
          description: "Don't use arbitrary colours that contradict meaning. Users rely on colour to quickly understand status.",
        }}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default TagDocs;
