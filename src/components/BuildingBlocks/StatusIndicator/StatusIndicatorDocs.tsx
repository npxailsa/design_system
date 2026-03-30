import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { StatusIndicator } from './StatusIndicator';
import type { StatusIndicatorStatus, StatusIndicatorSize } from './StatusIndicator';

const ALL_STATUSES: Array<{
  status: StatusIndicatorStatus;
  label: string;
  description: string;
}> = [
  {
    status: 'online',
    label: 'Online',
    description: 'User is active and available. Dark-green fill with light-green border.',
  },
  {
    status: 'away',
    label: 'Away',
    description: 'User is idle or stepped away. Yellow fill with pale-yellow border.',
  },
  {
    status: 'do-not-disturb',
    label: 'Do Not Disturb',
    description: 'User has silenced notifications. Red fill with light-red border.',
  },
  {
    status: 'offline',
    label: 'Offline',
    description: 'User is not connected. Gray-600 fill with gray-300 border.',
  },
  {
    status: 'verified',
    label: 'Verified',
    description: 'User or entity has been verified. Sky-blue circle with white checkmark — larger than dot statuses.',
  },
];

const ALL_SIZES: Array<{
  size: StatusIndicatorSize;
  label: string;
  dotPx: string;
  verifiedPx: string;
  usage: string;
}> = [
  {
    size: 'default',
    label: 'Default',
    dotPx: '14 × 14 px',
    verifiedPx: '16 × 16 px',
    usage: 'Standard avatar / profile tile (32–40 px avatars)',
  },
  {
    size: 'large',
    label: 'Large',
    dotPx: '10 × 10 px',
    verifiedPx: '12 × 12 px',
    usage: 'Medium avatar overlays (24–28 px avatars)',
  },
  {
    size: 'small',
    label: 'Small',
    dotPx: '8 × 8 px',
    verifiedPx: '10 × 10 px',
    usage: 'Dense lists, compact table cells, micro layouts',
  },
];

export const StatusIndicatorDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Status Indicator"
        subtitle="Small presence dot badge indicating a user's availability or verification state"
      />

      <DocsTemplate.BodyText>
        The <strong>Status Indicator</strong> is a compact circular badge placed on or near an
        avatar to communicate availability. Five statuses cover the standard presence model —
        online, away, do-not-disturb, offline — plus a verified badge for authenticated
        identities. Three sizes let it scale proportionally with the avatar it accompanies.
      </DocsTemplate.BodyText>

      {/* ── Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          Dot statuses are a single circle element with a filled background and a coloured
          outline border. The <strong>verified</strong> status uses an SVG circle with an
          embedded white checkmark, rendered slightly larger to preserve legibility of the
          mark.
        </DocsTemplate.BodyText>

        <DocsTemplate.Anatomy
          preview={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--global-spacing-sizing-24px)',
                padding: 'var(--global-spacing-sizing-32px)',
                background: 'var(--global-color-neutral-gray-50)',
                borderRadius: 'var(--global-spacing-radius-8px)',
                flexWrap: 'wrap',
              }}
            >
              {ALL_STATUSES.map(({ status }) => (
                <StatusIndicator key={status} status={status} size="default" />
              ))}
            </div>
          }
          parts={[
            {
              id: 1,
              name: 'Root container',
              token: '--status-indicator-size-default (14px)\n--status-indicator-size-large (10px)\n--status-indicator-size-small (8px)',
              description: 'Inline-flex wrapper that controls the outer dimensions. Aspect-ratio 1:1 is always enforced.',
            },
            {
              id: 2,
              name: 'Dot fill',
              token: '--status-indicator-<status>-bg\n(e.g. --status-indicator-online-bg)',
              description: 'Solid background colour identifying the status. Maps to a status semantic token.',
            },
            {
              id: 3,
              name: 'Dot border',
              token: '--status-indicator-<status>-border\n--status-indicator-border-width (2px)',
              description: 'Outline ring that provides contrast when the indicator overlaps an avatar or coloured surface. 2 px solid.',
            },
            {
              id: 4,
              name: 'Verified badge',
              token: '--status-indicator-verified-bg (sky-blue)\n--status-indicator-verified-check (white)',
              description: 'SVG circle + white checkmark path. Slightly larger than the equivalent dot size to keep the mark legible.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Statuses ── */}
      <DocsTemplate.Section title="Statuses">
        <DocsTemplate.BodyText>
          Each status maps to a distinct colour drawn from the global status colour palette.
          Use exactly the status that reflects the underlying user state — do not repurpose
          statuses for decorative colour.
        </DocsTemplate.BodyText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-12px)',
            maxWidth: '560px',
          }}
        >
          {ALL_STATUSES.map(({ status, label, description }) => (
            <div
              key={status}
              style={{
                display: 'grid',
                gridTemplateColumns: '32px 100px 1fr',
                alignItems: 'center',
                gap: 'var(--global-spacing-sizing-16px)',
              }}
            >
              <StatusIndicator status={status} size="default" />
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-sm)',
                  fontWeight: 'var(--global-type-weight-default)',
                  color: 'var(--global-color-base-black)',
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
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Sizes ── */}
      <DocsTemplate.Section title="Sizes">
        <DocsTemplate.BodyText>
          Three sizes allow the indicator to scale with the avatar it accompanies.
          Choose the size that maintains a proportional visual weight — the dot should
          be roughly 30–40 % of the avatar's diameter.
        </DocsTemplate.BodyText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-12px)',
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '40px 80px 100px 100px 1fr',
              gap: 'var(--global-spacing-sizing-16px)',
              alignItems: 'center',
            }}
          >
            {['', 'Size', 'Dot (px)', 'Verified (px)', 'Typical usage'].map((h) => (
              <div
                key={h}
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  fontWeight: 'var(--global-type-weight-default)',
                  color: 'var(--global-color-neutral-gray-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {ALL_SIZES.map(({ size, label, dotPx, verifiedPx, usage }) => (
            <div
              key={size}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 80px 100px 100px 1fr',
                gap: 'var(--global-spacing-sizing-16px)',
                alignItems: 'center',
              }}
            >
              <StatusIndicator status="online" size={size} />
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  color: 'var(--global-color-base-black)',
                  textTransform: 'capitalize',
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  color: 'var(--global-color-neutral-gray-600)',
                }}
              >
                {dotPx}
              </div>
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  color: 'var(--global-color-neutral-gray-600)',
                }}
              >
                {verifiedPx}
              </div>
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  color: 'var(--global-color-neutral-gray-600)',
                  lineHeight: 'var(--global-type-line-height-label)',
                }}
              >
                {usage}
              </div>
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Full grid ── */}
      <DocsTemplate.Section title="All Statuses × All Sizes">
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-16px)',
            padding: 'var(--global-spacing-sizing-24px)',
            background: 'var(--global-color-neutral-gray-50)',
            borderRadius: 'var(--global-spacing-radius-8px)',
            border: `var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)`,
          }}
        >
          {ALL_SIZES.map(({ size, label }) => (
            <div
              key={size}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--global-spacing-sizing-20px)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--brand-font-primary)',
                  fontSize: 'var(--global-type-size-primary-label-xs)',
                  color: 'var(--global-color-neutral-gray-500)',
                  width: '52px',
                  flexShrink: 0,
                  textTransform: 'capitalize',
                }}
              >
                {label}
              </div>
              {ALL_STATUSES.map(({ status }) => (
                <StatusIndicator key={status} status={status} size={size} />
              ))}
            </div>
          ))}
        </div>
      </DocsTemplate.Section>

      {/* ── Design Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Sizes"
        description="Dot and verified badge dimensions per size:"
        tokens={[
          { name: '--status-indicator-size-default', description: 'Default dot size — --global-spacing-sizing-14px (14px)' },
          { name: '--status-indicator-size-large', description: 'Large dot size — --global-spacing-sizing-10px (10px)' },
          { name: '--status-indicator-size-small', description: 'Small dot size — --global-spacing-sizing-8px (8px)' },
          { name: '--status-indicator-size-verified-default', description: 'Default verified badge — --global-spacing-sizing-16px (16px)' },
          { name: '--status-indicator-size-verified-large', description: 'Large verified badge — --global-spacing-sizing-12px (12px)' },
          { name: '--status-indicator-size-verified-small', description: 'Small verified badge — --global-spacing-sizing-10px (10px)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Structure"
        description="Shared structural tokens:"
        tokens={[
          { name: '--status-indicator-border-width', description: 'Border width — --global-spacing-stroke-2px (2px)' },
          { name: '--status-indicator-border-radius', description: 'Border radius — --global-spacing-radius-full (full pill)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="Design Tokens — Status Colours"
        description="Colour tokens per status variant:"
        tokens={[
          { name: '--status-indicator-online-bg', description: 'Online fill — --global-color-status-dark-green (#227F1A)' },
          { name: '--status-indicator-online-border', description: 'Online border — --global-color-status-green (#96F78D)' },
          { name: '--status-indicator-away-bg', description: 'Away fill — --global-color-primary-yellow (#F9C846)' },
          { name: '--status-indicator-away-border', description: 'Away border — --global-color-primary-yellow-100 (#FEF4DA)' },
          { name: '--status-indicator-dnd-bg', description: 'Do-not-disturb fill — --global-color-status-red (#CE2031)' },
          { name: '--status-indicator-dnd-border', description: 'Do-not-disturb border — --global-color-status-red-light (#FBEBEB)' },
          { name: '--status-indicator-offline-bg', description: 'Offline fill — --global-color-neutral-gray-600 (#4B5563)' },
          { name: '--status-indicator-offline-border', description: 'Offline border — --global-color-neutral-gray-300 (#D2D5DA)' },
          { name: '--status-indicator-verified-bg', description: 'Verified circle — --global-color-primary-sky-blue (#0BA7EA)' },
          { name: '--status-indicator-verified-check', description: 'Verified checkmark — --global-color-base-white (#FFFFFF)' },
        ]}
      />

      {/* ── Code ── */}
      <DocsTemplate.CodeBlock>
        {`import { StatusIndicator } from '@/components/BuildingBlocks/StatusIndicator';

// Basic usage
<StatusIndicator status="online" size="default" />
<StatusIndicator status="away" size="default" />
<StatusIndicator status="do-not-disturb" size="default" />
<StatusIndicator status="offline" size="default" />
<StatusIndicator status="verified" size="default" />

// Size variants
<StatusIndicator status="online" size="default" />  {/* 14px dot */}
<StatusIndicator status="online" size="large" />    {/* 10px dot */}
<StatusIndicator status="online" size="small" />    {/*  8px dot */}

// With accessible label
<StatusIndicator status="online" ariaLabel="Ailsa is online" />`}
      </DocsTemplate.CodeBlock>

      {/* ── Principles ── */}
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Match size to avatar context">
          Use <code>default</code> (14 px) on standard 32–40 px avatars, <code>large</code> (10 px) 
          on smaller 24–28 px avatars, and <code>small</code> (8 px) in dense lists or compact 
          table cells where space is at a premium.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Never repurpose status colours">
          Each colour has a fixed semantic meaning. Do not use the yellow dot to mean something 
          other than "away", or the red dot outside of "do not disturb". Use the 
          <code>verified</code> badge only for genuine identity verification — not as a 
          general-purpose check icon.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Always provide an accessible label">
          The dot is a visual-only element — sighted users associate colour with status, but 
          screen-reader users need an explicit text alternative. Use the <code>ariaLabel</code> 
          prop to provide context, e.g. <code>'Jane is online'</code> rather than just 
          <code>'online'</code>.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};

export default StatusIndicatorDocs;
