import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Avatar } from './Avatar';
import type { AvatarSize, AvatarType, AvatarShape } from './Avatar';

const DEMO_PHOTO_WOMAN =
  'https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const DEMO_PHOTO_MAN =
  'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const ALL_SIZES: AvatarSize[] = ['x-small', 'small', 'default', 'large'];
const ALL_TYPES: Array<{ type: AvatarType; label: string; description: string }> = [
  {
    type: 'empty-state',
    label: 'Empty State',
    description: 'Shows a generic person icon when no photo or initials are available. Gray-200 background with a gray-400 person icon.',
  },
  {
    type: 'profile-photo',
    label: 'Profile Photo',
    description: 'Displays the user\'s photo, cropped to fill the container with object-fit: cover.',
  },
  {
    type: 'initial-light',
    label: 'Initial — Light',
    description: 'Shows initials on a light gray-200 background with black text. Use when a photo is unavailable but initials are known.',
  },
  {
    type: 'initial-dark',
    label: 'Initial — Dark',
    description: 'Shows initials on a black background with white text. Higher visual weight — use for primary / current user.',
  },
];

const SIZE_DATA: Array<{ size: AvatarSize; label: string; px: string; usage: string }> = [
  { size: 'x-small', label: 'X-Small', px: '26 × 26 px', usage: 'Dense lists, comment threads, micro-layouts' },
  { size: 'small', label: 'Small', px: '38 × 38 px', usage: 'Sidebar items, compact tables, dropdowns' },
  { size: 'default', label: 'Default', px: '46 × 46 px', usage: 'Standard profile tiles, cards, nav headers' },
  { size: 'large', label: 'Large', px: '62 × 62 px', usage: 'Profile pages, modals, prominent user displays' },
];

/* ── Helper: preview cell shared style ── */
const previewWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--global-spacing-sizing-24px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

export const AvatarDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Avatar"
        subtitle="User identity badge with four display types, four sizes, two shapes, optional border, and a status indicator"
      />

      <DocsTemplate.BodyText>
        The <strong>Avatar</strong> identifies a user or entity at a glance. It supports an
        empty-state person icon, a profile photo, or monogram initials in light and dark
        variants. A white border + shadow treatment elevates it on coloured or complex
        backgrounds, and an optional status indicator communicates presence.
      </DocsTemplate.BodyText>

      {/* ── MUI Foundation ── */}
      <DocsTemplate.Section title="MUI Foundation">
        <DocsTemplate.BodyText>
          Built on MUI's <strong>Avatar</strong> component (<code>@mui/material/Avatar</code>).
          <code>MuiAvatar</code> provides accessible image-with-fallback semantics, including
          automatic <code>alt</code> text propagation and graceful degradation when an image
          fails to load. MUI's <strong>PersonIcon</strong> from{' '}
          <code>@mui/icons-material/Person</code> is used as the fallback person icon in the{' '}
          <em>empty-state</em> display type. All visual aspects — size, shape, border,
          background colour, and status badge position — are applied via CSS Modules and the{' '}
          <code>--avatar-*</code> token family.
        </DocsTemplate.BodyText>
        <DocsTemplate.CodeBlock>
          {`// MUI base imports\nimport MuiAvatar from '@mui/material/Avatar';\nimport PersonIcon from '@mui/icons-material/Person'; // empty-state fallback\n\n// Profile photo:\n<MuiAvatar className={styles.imageWrap} src={src} alt={alt} />\n\n// Initials:\n<MuiAvatar className={styles.imageWrap}><span>{initials}</span></MuiAvatar>\n\n// Empty state (person icon fallback):\n<MuiAvatar className={styles.imageWrap}><PersonIcon /></MuiAvatar>`}
        </DocsTemplate.CodeBlock>
      </DocsTemplate.Section>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.Anatomy
          preview={
            <div style={previewWrap}>
              <Avatar type="profile-photo" size="large" shape="square" src={DEMO_PHOTO_WOMAN} statusIcon />
              <Avatar type="profile-photo" size="large" shape="circle" src={DEMO_PHOTO_WOMAN} statusIcon />
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Container',
              token: '--avatar-size-default (46px)\n--avatar-radius-sq-default (8px)',
              description: 'Fixed square container. Size and border-radius are controlled by size + shape tokens. Overflow is hidden to clip the photo.',
            },
            {
              id: 2,
              name: 'Photo / Icon / Initials',
              token: '--avatar-icon-size-default (24px)\n--avatar-initial-size-default (heading-5)',
              description: 'The visual content of the avatar — a person icon SVG (empty-state), a cropped image (profile-photo), or a typographic initial (initial-light / initial-dark).',
            },
            {
              id: 3,
              name: 'Border',
              token: '--avatar-border-width (1px)\n--avatar-border-color (gray-200)',
              description: 'A 1 px border is visible in the default state. When border=true, a 4 px white ring with a gray drop-shadow is applied for use on coloured surfaces.',
            },
            {
              id: 4,
              name: 'Status badge',
              token: '--avatar-badge-size-default (14px)',
              description: 'A StatusIndicator dot positioned at the top-right corner. Scales with the avatar size. Only rendered when statusIcon=true.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Profile Photo States ── */}
      <DocsTemplate.Section title="Profile Photo States">
        <DocsTemplate.BodyText>
          The profile-photo type covers three scenarios: an empty state when no image has been
          uploaded (falls back to a person icon), and uploaded portrait photos.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-32px)' }}>
          {[
            { src: undefined, label: 'No photo uploaded (icon)', type: 'empty-state' as AvatarType },
            { src: DEMO_PHOTO_WOMAN, label: 'Woman profile photo', type: 'profile-photo' as AvatarType },
            { src: DEMO_PHOTO_MAN, label: 'Man profile photo', type: 'profile-photo' as AvatarType },
          ].map(({ src, label, type }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Avatar type={type} size="large" shape="square" src={src} />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', textAlign: 'center', maxWidth: '80px' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Types ── */}
      <DocsTemplate.Section title="Types">
        <DocsTemplate.BodyText>
          Four content types cover the common user-identity scenarios in order of information fidelity.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-12px)', maxWidth: '600px' }}>
          {ALL_TYPES.map(({ type, label, description }) => (
            <div
              key={type}
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 120px 1fr',
                alignItems: 'center',
                gap: 'var(--global-spacing-sizing-16px)',
              }}
            >
              <Avatar type={type} size="default" shape="square" src={DEMO_PHOTO_WOMAN} initials="A" />
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-sm)', fontWeight: 'var(--global-type-weight-default)', color: 'var(--global-color-base-black)' }}>
                {label}
              </div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', fontWeight: 'var(--global-type-weight-light)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 'var(--global-type-line-height-label)' }}>
                {description}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Shapes ── */}
      <DocsTemplate.Section title="Shapes">
        <DocsTemplate.BodyText>
          Square uses a rounded-corner rectangle (radius scales with size). Circle uses a full pill radius to produce a perfect circle.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-32px)' }}>
          {(['square', 'circle'] as AvatarShape[]).map((shape) => (
            <div key={shape} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
              <Avatar type="profile-photo" size="large" shape={shape} src={DEMO_PHOTO_WOMAN} />
              <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', textTransform: 'capitalize' }}>
                {shape}
              </span>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Four sizes scale the container, photo, icon, and initials proportionally.
          Choose based on the density of the surrounding layout.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '70px 80px 110px 1fr', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
            {['', 'Size', 'Dimensions', 'Typical usage'].map((h) => (
              <div key={h} style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', fontWeight: 'var(--global-type-weight-default)', color: 'var(--global-color-neutral-gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {h}
              </div>
            ))}
          </div>
          {SIZE_DATA.map(({ size, label, px, usage }) => (
            <div key={size} style={{ display: 'grid', gridTemplateColumns: '70px 80px 110px 1fr', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar type="profile-photo" size={size} shape="square" src={DEMO_PHOTO_WOMAN} />
              </div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-base-black)' }}>
                {label}
              </div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>
                {px}
              </div>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 'var(--global-type-line-height-label)' }}>
                {usage}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Border ── */}
      <DocsTemplate.Section title="Border Variants">
        <DocsTemplate.BodyText>
          The default 1 px gray-200 border provides subtle separation. The active border
          (border=true) applies a 4 px white ring and a gray drop-shadow — use when avatars
          overlap or appear on coloured/image backgrounds.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-24px)', background: 'var(--global-color-neutral-gray-100)', borderRadius: 'var(--global-spacing-radius-8px)' }}>
          {(['square', 'circle'] as AvatarShape[]).map((shape) =>
            [false, true].map((border) => (
              <div key={`${shape}-${border}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--global-spacing-sizing-8px)' }}>
                <Avatar type="profile-photo" size="default" shape={shape} border={border} src={DEMO_PHOTO_WOMAN} />
                <span style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)' }}>
                  {shape} / border={border ? 'true' : 'false'}
                </span>
              </div>
            ))
          )}
        </div>
      </DocsTemplate.Section>

      {/* ── Status badge ── */}
      <DocsTemplate.Section title="With Status Indicator">
        <DocsTemplate.BodyText>
          When statusIcon=true, a do-not-disturb badge (red dot) is positioned at the
          top-right corner. The dot size scales automatically with the avatar size using the
          StatusIndicator component tokens.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <Avatar key={size} type="profile-photo" size={size} shape="square" statusIcon src={DEMO_PHOTO_WOMAN} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <Avatar key={size} type="profile-photo" size={size} shape="circle" statusIcon src={DEMO_PHOTO_WOMAN} />
          ))}
        </div>
      </DocsTemplate.Section>

      <DocsTemplate.Section title="Without Status Indicator">
        <DocsTemplate.BodyText>
          When statusIcon=false (the default), no presence badge is shown. The avatar renders
          cleanly without any overlay — use this when presence status is not relevant.
        </DocsTemplate.BodyText>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <Avatar key={size} type="profile-photo" size={size} shape="square" src={DEMO_PHOTO_WOMAN} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--global-spacing-sizing-24px)', padding: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_SIZES.map((size) => (
            <Avatar key={size} type="profile-photo" size={size} shape="circle" src={DEMO_PHOTO_WOMAN} />
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Full matrix ── */}
      <DocsTemplate.Section title="All Types × Sizes (Square)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_TYPES.map(({ type, label }) => (
            <div key={type} style={{ display: 'grid', gridTemplateColumns: '110px repeat(4, auto)', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 1.4 }}>
                {label}
              </div>
              {ALL_SIZES.map((size) => (
                <Avatar key={size} type={type} size={size} shape="square" statusIcon src={DEMO_PHOTO_WOMAN} initials="A" />
              ))}
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      <DocsTemplate.Section title="All Types × Sizes (Circle)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-16px)' }}>
          {ALL_TYPES.map(({ type, label }) => (
            <div key={type} style={{ display: 'grid', gridTemplateColumns: '110px repeat(4, auto)', gap: 'var(--global-spacing-sizing-16px)', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--brand-font-primary)', fontSize: 'var(--global-type-size-primary-label-xs)', color: 'var(--global-color-neutral-gray-600)', lineHeight: 1.4 }}>
                {label}
              </div>
              {ALL_SIZES.map((size) => (
                <Avatar key={size} type={type} size={size} shape="circle" statusIcon src={DEMO_PHOTO_WOMAN} initials="A" />
              ))}
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Sizes"
        description="Container dimensions per size:"
        tokens={[
          { name: '--avatar-size-xs', description: 'X-small container — 26px' },
          { name: '--avatar-size-sm', description: 'Small container — 38px' },
          { name: '--avatar-size-default', description: 'Default container — 46px' },
          { name: '--avatar-size-lg', description: 'Large container — 62px' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Shape & Border Radius"
        description="Border radius tokens per size and shape:"
        tokens={[
          { name: '--avatar-radius-circle', description: 'Circle shape — --global-spacing-radius-full (99999px)' },
          { name: '--avatar-radius-sq-xs', description: 'Square x-small radius — --global-spacing-radius-4px (4px)' },
          { name: '--avatar-radius-sq-sm', description: 'Square small radius — 6px' },
          { name: '--avatar-radius-sq-default', description: 'Square default radius — --global-spacing-radius-8px (8px)' },
          { name: '--avatar-radius-sq-lg', description: 'Square large radius — --global-spacing-radius-12px (12px)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Colours"
        description="Background and text colour tokens:"
        tokens={[
          { name: '--avatar-bg-empty-state', description: 'Empty-state & photo bg — --global-color-neutral-gray-200 (#E5E7EB)' },
          { name: '--avatar-bg-initial-light', description: 'Initial-light bg — --global-color-neutral-gray-200 (#E5E7EB)' },
          { name: '--avatar-bg-initial-dark', description: 'Initial-dark bg — --global-color-base-black (#1C1C1C)' },
          { name: '--avatar-color-initial-light', description: 'Initial-light text — --global-color-base-black' },
          { name: '--avatar-color-initial-dark', description: 'Initial-dark text — --global-color-base-white' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Border"
        description="Border tokens for default and active (border=true) states:"
        tokens={[
          { name: '--avatar-border-width', description: 'Default border — --global-spacing-stroke-1px (1px)' },
          { name: '--avatar-border-color', description: 'Default border colour — --global-color-neutral-gray-200' },
          { name: '--avatar-border-width-active', description: 'Active border width — 4px' },
          { name: '--avatar-border-color-active', description: 'Active border colour — --global-color-base-white' },
          { name: '--avatar-border-shadow-active', description: 'Active box-shadow — 2px 2px 0px 0px gray-200' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Status Badge Positioning"
        description="Negative offset tokens used to position the status indicator badge at the top-right corner of the avatar. These reference the global negative spacing scale — no hardcoded values are used."
        tokens={[
          { name: '--global-spacing-sizing-neg-2px', description: 'Badge top/right offset for x-small avatars (−2px) — pixel-precise inset from the avatar edge.' },
          { name: '--global-spacing-sizing-neg-6px', description: 'Badge top/right offset for small, default, and large avatars (−6px) — slightly larger overlap that keeps the badge optically centred on the avatar corner.' },
        ]}
      />

      {/* ── Code ── */}
      <DocsTemplate.CodeBlock>
        {`import { Avatar } from '@/components/Avatar';

// Empty state (no photo)
<Avatar type="empty-state" size="default" shape="square" />

// Profile photo
<Avatar type="profile-photo" size="default" shape="square" src="/path/to/photo.jpg" alt="Ailsa Blair" />

// Initials — light
<Avatar type="initial-light" size="default" shape="square" initials="AB" />

// Initials — dark (primary/current user)
<Avatar type="initial-dark" size="default" shape="square" initials="AB" />

// With white border (on coloured background)
<Avatar type="profile-photo" size="default" shape="circle" border src="/photo.jpg" />

// With status badge
<Avatar type="profile-photo" size="default" statusIcon src="/photo.jpg" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Prefer photo → initials → empty state">
          Always use the highest-fidelity representation available. Show a profile photo when
          you have one, fall back to initials when the name is known, and use the empty-state
          only as a last resort.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Use dark initials for the current user">
          Reserve <code>initial-dark</code> for the authenticated / primary user in contexts
          where distinguishing them from other participants matters (e.g. chat, comments,
          meeting participants). All other users use <code>initial-light</code>.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Match size to information density">
          Use <code>x-small</code> and <code>small</code> in high-density lists where avatars
          are supportive context. Use <code>default</code> for standard cards and navigation.
          Reserve <code>large</code> for profile pages and prominent user displays where the
          identity is the primary focus.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={4} title="Apply border=true on complex backgrounds">
          The white ring + shadow is designed for use on coloured, gradient, or image
          backgrounds where the avatar edge would otherwise be lost. Do not apply it on
          plain white or light-gray surfaces — the default 1 px border provides sufficient
          separation.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default AvatarDocs;
