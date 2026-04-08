import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { AvatarWithText } from './AvatarWithText';
import type { AvatarSize } from './Avatar';
import type { AvatarWithTextVariant } from './AvatarWithText';

const DEMO_PHOTO_WOMAN =
  'https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const DEMO_PHOTO_MAN =
  'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';

const ALL_SIZES: AvatarSize[] = ['large', 'default', 'small', 'x-small'];

const previewWrap: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--global-spacing-sizing-32px)',
  padding: 'var(--global-spacing-sizing-32px)',
  background: 'var(--global-color-neutral-gray-50)',
  borderRadius: 'var(--global-spacing-radius-8px)',
  flexWrap: 'wrap',
};

export const AvatarWithTextDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="AvatarWithText (Horizontal)"
      subtitle="Combines an Avatar with a text column — showing a name with optional subtext or email."
    />

    <DocsTemplate.BodyText>
      <strong>AvatarWithText</strong> is a horizontal compound component that pairs an
      Avatar with a label column. Three content variants cover the most common identity
      display patterns: name only, name + role/subtext, and name + email. All four avatar
      sizes are supported and scale the typography proportionally.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <AvatarWithText
              variant="w-subtext"
              size="large"
              shape="square"
              avatarType="profile-photo"
              statusIcon
              name="Damon Underwood"
              subtext="Additional subtext (e.g role)"
              src={DEMO_PHOTO_MAN}
            />
            <AvatarWithText
              variant="default"
              size="large"
              shape="circle"
              avatarType="profile-photo"
              name="Willow Quinn"
              email="willowquin@email.com"
              src={DEMO_PHOTO_WOMAN}
            />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Avatar',
            token: '--avatar-size-default (46px)',
            description:
              'The Avatar component positioned on the left. Inherits all Avatar props: type, shape, border, statusIcon.',
          },
          {
            id: 2,
            name: 'Name',
            token: '--avatar-with-text-name-size-default (16px)',
            description:
              'Primary label — always visible. Font size scales with the size prop.',
          },
          {
            id: 3,
            name: 'Subtext',
            token: '--avatar-with-text-subtext-size (13px)',
            description:
              'Supporting role / description line. Only rendered when variant="w-subtext". Uses footnote scale in gray-600.',
          },
          {
            id: 4,
            name: 'Email',
            token: '--avatar-with-text-email-color (--global-color-primary-blue)',
            description:
              'Email address rendered in brand primary blue. Only shown when variant="default".',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Variants ── */}
    <DocsTemplate.Section title="Variants">
      <DocsTemplate.BodyText>
        Three content variants cover the most common user-identity display patterns.
      </DocsTemplate.BodyText>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-24px)',
        }}
      >
        {(
          [
            {
              variant: 'name-only' as AvatarWithTextVariant,
              label: 'name-only',
              desc: 'Name only — use in dense lists and dropdowns where extra context is not needed.',
              shape: 'circle' as const,
              src: DEMO_PHOTO_WOMAN,
              name: 'Willow Quinn',
            },
            {
              variant: 'w-subtext' as AvatarWithTextVariant,
              label: 'w-subtext',
              desc: 'Name + supporting text (role, team, location). Use where additional context helps identify the person.',
              shape: 'square' as const,
              src: DEMO_PHOTO_MAN,
              name: 'Damon Underwood',
              subtext: 'Additional subtext (e.g role)',
              statusIcon: true,
            },
            {
              variant: 'default' as AvatarWithTextVariant,
              label: 'default',
              desc: 'Name + email address in brand-primary blue. Use in contact cards, member lists, and settings panels.',
              shape: 'circle' as const,
              src: DEMO_PHOTO_WOMAN,
              name: 'Willow Quinn',
              email: 'willowquin@email.com',
            },
          ] as Array<{
            variant: AvatarWithTextVariant;
            label: string;
            desc: string;
            shape: 'square' | 'circle';
            src: string;
            name: string;
            subtext?: string;
            email?: string;
            statusIcon?: boolean;
          }>
        ).map(({ variant, label, desc, shape, src, name, subtext, email, statusIcon }) => (
          <div
            key={variant}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 120px 1fr',
              alignItems: 'center',
              gap: 'var(--global-spacing-sizing-24px)',
            }}
          >
            <AvatarWithText
              variant={variant}
              size="default"
              shape={shape}
              avatarType="profile-photo"
              statusIcon={statusIcon}
              name={name}
              subtext={subtext}
              email={email}
              src={src}
            />
            <code
              style={{
                fontFamily: 'monospace',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-700)',
              }}
            >
              {label}
            </code>
            <span
              style={{
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-600)',
                lineHeight: 'var(--global-type-line-height-label)',
              }}
            >
              {desc}
            </span>
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Profile Photo States ── */}
    <DocsTemplate.Section title="Profile Photo States">
      <DocsTemplate.BodyText>
        The avatarType prop controls the visual representation. All three core photo
        states are shown below — empty (icon fallback), woman, and man.
      </DocsTemplate.BodyText>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-32px)', flexWrap: 'wrap' }}>
        <AvatarWithText variant="name-only" size="default" shape="circle" avatarType="empty-state" name="No Photo" />
        <AvatarWithText variant="name-only" size="default" shape="circle" avatarType="profile-photo" name="Willow Quinn" src={DEMO_PHOTO_WOMAN} />
        <AvatarWithText variant="name-only" size="default" shape="square" avatarType="profile-photo" name="Damon Underwood" src={DEMO_PHOTO_MAN} statusIcon />
      </div>
    </DocsTemplate.Section>

    {/* ── Sizes ── */}
    <DocsTemplate.Section title="Sizes">
      <DocsTemplate.BodyText>
        All four sizes. The avatar scales and the name typography scales proportionally.
      </DocsTemplate.BodyText>

      {/* w-subtext column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-24px)',
          marginBottom: 'var(--global-spacing-sizing-32px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            fontWeight: 'var(--global-type-weight-semibold)',
            color: 'var(--global-color-neutral-gray-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          With Status + Subtext (square)
        </div>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            <div
              style={{
                width: '60px',
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                flexShrink: 0,
              }}
            >
              {size}
            </div>
            <AvatarWithText
              variant="w-subtext"
              size={size}
              shape="square"
              avatarType="profile-photo"
              statusIcon
              name="Damon Underwood"
              subtext="Additional subtext (e.g role)"
              src={DEMO_PHOTO_MAN}
            />
          </div>
        ))}
      </div>

      {/* name-only column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-24px)',
          marginBottom: 'var(--global-spacing-sizing-32px)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            fontWeight: 'var(--global-type-weight-semibold)',
            color: 'var(--global-color-neutral-gray-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Name Only (circle)
        </div>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            <div
              style={{
                width: '60px',
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                flexShrink: 0,
              }}
            >
              {size}
            </div>
            <AvatarWithText
              variant="name-only"
              size={size}
              shape="circle"
              avatarType="profile-photo"
              name="Willow Quinn"
              src={DEMO_PHOTO_WOMAN}
            />
          </div>
        ))}
      </div>

      {/* default / email column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-24px)' }}>
        <div
          style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            fontWeight: 'var(--global-type-weight-semibold)',
            color: 'var(--global-color-neutral-gray-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Name + Email (circle)
        </div>
        {ALL_SIZES.map((size) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-16px)' }}>
            <div
              style={{
                width: '60px',
                fontFamily: 'var(--brand-font-primary)',
                fontSize: 'var(--global-type-size-primary-label-xs)',
                color: 'var(--global-color-neutral-gray-500)',
                flexShrink: 0,
              }}
            >
              {size}
            </div>
            <AvatarWithText
              variant="default"
              size={size}
              shape="circle"
              avatarType="profile-photo"
              name="Willow Quinn"
              email="willowquin@email.com"
              src={DEMO_PHOTO_WOMAN}
            />
          </div>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── All Variants × All Sizes ── */}
    <DocsTemplate.Section title="All Variants × All Sizes">
      <DocsTemplate.BodyText>
        Complete matrix showing all three variants at all four sizes. Left: with-subtext (square + status).
        Centre: name-only (circle). Right: name + email (circle).
      </DocsTemplate.BodyText>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gap: 'var(--global-spacing-sizing-32px) var(--global-spacing-sizing-48px)',
          alignItems: 'start',
          padding: 'var(--global-spacing-sizing-24px)',
          background: 'var(--global-color-neutral-gray-50)',
          borderRadius: 'var(--global-spacing-radius-8px)',
        }}
      >
        {ALL_SIZES.map((size) => (
          <React.Fragment key={size}>
            <AvatarWithText
              variant="w-subtext"
              size={size}
              shape="square"
              avatarType="profile-photo"
              statusIcon
              name="Damon Underwood"
              subtext="Additional subtext (e.g role)"
              src={DEMO_PHOTO_MAN}
            />
            <AvatarWithText
              variant="name-only"
              size={size}
              shape="circle"
              avatarType="profile-photo"
              name="Willow Quinn"
              src={DEMO_PHOTO_WOMAN}
            />
            <AvatarWithText
              variant="default"
              size={size}
              shape="circle"
              avatarType="profile-photo"
              name="Willow Quinn"
              email="willowquin@email.com"
              src={DEMO_PHOTO_WOMAN}
            />
          </React.Fragment>
        ))}
      </div>
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.TokenTable
      title="Design Tokens — Layout"
      description="Spacing tokens controlling the horizontal gap and the internal text column gap:"
      tokens={[
        { name: '--avatar-with-text-gap', description: 'Gap between avatar and text column — --global-spacing-sizing-8px (8px)' },
        { name: '--avatar-with-text-text-gap', description: 'Gap between name and secondary line — --global-spacing-sizing-2px (2px)' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Name Typography"
      description="Font family, weight, and per-size dimensions for the primary name label:"
      tokens={[
        { name: '--avatar-with-text-name-font', description: 'Font family — --brand-font-primary (F37 Ginger Pro)' },
        { name: '--avatar-with-text-name-color', description: 'Text colour — --global-color-base-black (#1C1C1C)' },
        { name: '--avatar-with-text-name-weight', description: 'Font weight — --global-type-weight-default (400)' },
        { name: '--avatar-with-text-name-size-lg', description: 'Name size at large avatar — 18px' },
        { name: '--avatar-with-text-name-size-default', description: 'Name size at default avatar — 16px' },
        { name: '--avatar-with-text-name-size-sm', description: 'Name size at small avatar — 14px' },
        { name: '--avatar-with-text-name-size-xs', description: 'Name size at x-small avatar — 12px' },
      ]}
    />

    <DocsTemplate.TokenTable
      title="Design Tokens — Subtext & Email"
      description="Footnote-scale tokens for the secondary text lines:"
      tokens={[
        { name: '--avatar-with-text-subtext-color', description: 'Subtext colour — --global-color-neutral-gray-600 (#4B5563)' },
        { name: '--avatar-with-text-subtext-size', description: 'Subtext font size — --global-type-size-primary-footnote (13px)' },
        { name: '--avatar-with-text-subtext-weight', description: 'Subtext weight — --global-type-weight-light (300)' },
        { name: '--avatar-with-text-email-color', description: 'Email colour — --global-color-primary-blue (#2F42BD)' },
        { name: '--avatar-with-text-email-size', description: 'Email font size — --global-type-size-primary-footnote (13px)' },
        { name: '--avatar-with-text-email-weight', description: 'Email weight — --global-type-weight-light (300)' },
      ]}
    />

    {/* ── Code ── */}
    <DocsTemplate.CodeBlock>
      {`import { AvatarWithText } from '@/components/Avatar';

// Name only (circle avatar)
<AvatarWithText
  variant="name-only"
  size="default"
  shape="circle"
  avatarType="profile-photo"
  name="Willow Quinn"
  src="/photos/willow.jpg"
/>

// Name + role/subtext (square avatar with status indicator)
<AvatarWithText
  variant="w-subtext"
  size="default"
  shape="square"
  avatarType="profile-photo"
  statusIcon
  name="Damon Underwood"
  subtext="Product Designer"
  src="/photos/damon.jpg"
/>

// Name + email
<AvatarWithText
  variant="default"
  size="default"
  shape="circle"
  avatarType="profile-photo"
  name="Willow Quinn"
  email="willow@example.com"
  src="/photos/willow.jpg"
/>`}
    </DocsTemplate.CodeBlock>

    {/* ── Principles ── */}
    <DocsTemplate.Principles>
      <DocsTemplate.PrincipleCard number={1} title="Choose the variant that matches your information density">
        Use <code>name-only</code> for compact lists and dropdowns. Use <code>w-subtext</code>{' '}
        when a supporting role or team name adds meaningful context. Reserve{' '}
        <code>default</code> (name + email) for settings pages, contact cards, and member
        lists where the email address is actionable or verifiable.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={2} title="Match avatar size to layout density">
        Use <code>x-small</code> and <code>small</code> in high-density tables and
        sidebars. Use <code>default</code> for standard cards. Reserve <code>large</code>{' '}
        for primary user tiles, profile headers, and modal contexts.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={3} title="Reserve statusIcon for presence-aware contexts">
        The status indicator communicates real-time availability. Only attach{' '}
        <code>statusIcon=true</code> where presence is actively managed and kept
        up-to-date — chat, video, or collaboration surfaces. Avoid it in static lists
        where the status cannot change.
      </DocsTemplate.PrincipleCard>
      <DocsTemplate.PrincipleCard number={4} title="Prefer circle for photos, square for initials or branded icons">
        Circle avatars are the convention for profile photos across most contexts.
        Square (rounded-corner) avatars read well for initials or when the avatar sits
        in a structured grid or card layout.
      </DocsTemplate.PrincipleCard>
    </DocsTemplate.Principles>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default AvatarWithTextDocs;
