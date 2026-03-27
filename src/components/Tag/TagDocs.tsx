import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Tag } from './Tag';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ALL_COLOURS = [
  'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info', 'default',
] as const;

type BadgeColour = typeof ALL_COLOURS[number];
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface NotificationBadgeProps {
  colour?: BadgeColour;
  count?: number | string;
  size?: BadgeSize;
  variant?: 'filled' | 'outline';
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  colour = 'blue',
  count = 1,
  size = 'md',
  variant = 'filled',
}) => {
  const isOutline = variant === 'outline';
  const outlineText =
    colour === 'dark' ? 'var(--global-color-base-black)' :
    colour === 'navy' ? 'var(--global-color-secondary-navy)' :
    `var(--badge-color-${colour})`;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `var(--badge-size-${size})`,
        height: `var(--badge-size-${size})`,
        minWidth: `var(--badge-size-${size})`,
        borderRadius: 'var(--badge-border-radius)',
        border: `var(--badge-border-width) solid var(--badge-border-${colour})`,
        background: isOutline ? 'transparent' : `var(--badge-bg-${colour})`,
        color: isOutline ? outlineText : `var(--badge-color-${colour})`,
        fontFamily: 'var(--badge-font-family)',
        fontWeight: 700,
        fontSize: `var(--badge-font-size-${size})`,
        letterSpacing: 'var(--badge-letter-spacing)',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      {count}
    </span>
  );
};

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
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F0afb91c27a8d4e7b8dc3a156dcf732de"
              alt="Tag component anatomy diagram with numbered callouts"
              style={{ width: '100%', height: 'auto' }}
            />
          }
          parts={[
            {
              id: 1,
              name: 'Leading Icon',
              token: 'filled/icons (user category)\n--tag-icon-size-{size}\n--tag-gap-{size}',
              description: 'Optional icon preceding the label. W: 16, H: 16, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props.',
            },
            {
              id: 2,
              name: 'Label',
              token: '--tag-font-family (--brand-font-primary)\n--tag-font-size (16px)\n--tag-font-weight (400)\n--tag-color (color/base/white)',
              description: 'Primary text content. W: HUG, H: HUG. Uses F37 Ginger Regular at 16px with 20px line-height. Colour: color/base/white. Set via the label prop.',
            },
            {
              id: 3,
              name: 'Trailing Icon',
              token: 'filled/icons (action category)\n--tag-icon-size-{size}\n--tag-gap-{size}',
              description: 'Optional icon after the label. W: 16, H: 16, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props.',
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

        <DocsTemplate.Subsection title="With Trailing Icon">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', padding: 'var(--global-spacing-sizing-12px) 0' }}>
            <Tag colour="blue" label="Next" showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Tag colour="green" label="Verified" showTrailingIcon trailingIcon={CheckIcon} />
            <Tag colour="purple" label="Featured" showLeadingIcon leadingIcon={StarBorderIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Tag colour="yellow" label="Navigate" size="large" showTrailingIcon trailingIcon={ArrowForwardIcon} />
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

      {/* ── Notification Badges ── */}
      <DocsTemplate.Section title="Notification Badges">
        <DocsTemplate.BodyText>
          Circular count indicators used to surface unread counts, alerts, or status at a glance.
          They share the same colour token set as the Tag component and are available in four sizes
          — <strong>xs</strong> (16px), <strong>sm</strong> (20px), <strong>md</strong> (24px),
          and <strong>lg</strong> (28px) — as both filled and outline variants.
        </DocsTemplate.BodyText>

        <DocsTemplate.Subsection title="Filled — all sizes">
          {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', padding: 'var(--global-spacing-sizing-4px) 0' }}>
              <span style={{ fontFamily: 'var(--font-family-secondary)', fontSize: '11px', color: 'var(--global-color-neutral-gray-500)', minWidth: '28px', flexShrink: 0 }}>{size}</span>
              {ALL_COLOURS.map((colour) => (
                <NotificationBadge key={colour} colour={colour} size={size} count={1} variant="filled" />
              ))}
            </div>
          ))}
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Outline">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', padding: 'var(--global-spacing-sizing-8px) 0' }}>
            {ALL_COLOURS.map((colour) => (
              <NotificationBadge key={colour} colour={colour} size="md" count={1} variant="outline" />
            ))}
          </div>
        </DocsTemplate.Subsection>

        <DocsTemplate.Subsection title="Counts in context">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--global-spacing-sizing-8px)', alignItems: 'center', padding: 'var(--global-spacing-sizing-8px) 0' }}>
            <NotificationBadge colour="red" size="xs" count={3} />
            <NotificationBadge colour="blue" size="sm" count={12} />
            <NotificationBadge colour="green" size="md" count={99} />
            <NotificationBadge colour="dark" size="lg" count={7} />
            <NotificationBadge colour="navy" size="md" count={1} />
            <NotificationBadge colour="purple" size="sm" count={4} />
          </div>
        </DocsTemplate.Subsection>
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

      <DocsTemplate.TokenTable
        title="Design Tokens — Count Badge"
        description="Each colour variant has a dedicated count badge background (slightly darker than the tag fill) and an accessible text colour (white or black):"
        tokens={[
          { name: '--tag-count-bg-blue / --tag-count-color-blue', description: 'Blue count — sky-blue-200 bg / base-black text' },
          { name: '--tag-count-bg-seafoam / --tag-count-color-seafoam', description: 'Seafoam count — seafoam-300 bg / base-black text' },
          { name: '--tag-count-bg-yellow / --tag-count-color-yellow', description: 'Yellow count — orange-light-border bg / base-black text' },
          { name: '--tag-count-bg-dark / --tag-count-color-dark', description: 'Dark count — neutral-gray-600 bg / base-white text' },
          { name: '--tag-count-bg-navy / --tag-count-color-navy', description: 'Navy count — secondary-navy-mid bg / base-white text' },
          { name: '--tag-count-bg-red / --tag-count-color-red', description: 'Red count — status-rose bg / base-black text' },
          { name: '--tag-count-bg-green / --tag-count-color-green', description: 'Green count — status-green bg / base-black text' },
          { name: '--tag-count-bg-purple / --tag-count-color-purple', description: 'Purple count — note-mid bg / base-black text' },
          { name: '--tag-count-bg-info / --tag-count-color-info', description: 'Info count — status-edit bg / base-black text' },
          { name: '--tag-count-bg-default / --tag-count-color-default', description: 'Default count — neutral-gray-300 bg / base-black text' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Notification Badge"
        description="Circular notification badge dimensions, typography, and per-colour values. Colours mirror the Tag colour system."
        tokens={[
          { name: '--badge-size-xs', description: 'Extra-small badge diameter (16px)' },
          { name: '--badge-size-sm', description: 'Small badge diameter (20px)' },
          { name: '--badge-size-md', description: 'Default badge diameter (24px)' },
          { name: '--badge-size-lg', description: 'Large badge diameter (28px)' },
          { name: '--badge-font-family', description: 'Font family — F37 Ginger Pro (--font-family-primary)' },
          { name: '--badge-font-weight', description: 'Font weight — bold (700)' },
          { name: '--badge-font-size-xs / sm / md / lg', description: 'Size-variant type scale (10px → 14px)' },
          { name: '--badge-border-radius', description: 'Fully circular (--global-spacing-radius-full)' },
          { name: '--badge-border-width', description: 'Border thickness (1px)' },
          { name: '--badge-bg-{colour} / --badge-color-{colour} / --badge-border-{colour}', description: 'Per-colour tokens — mirrors tag colour palette (10 variants)' },
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

// Tag with trailing icon
<Tag
  colour="blue"
  label="Next"
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
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
