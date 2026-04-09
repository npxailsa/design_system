import React from 'react';
import { DocsTemplate } from '../../DocsTemplate/DocsTemplate';
import { ElementHeader } from './ElementHeader';

const EXAMPLE_BREADCRUMBS = [
  { label: 'Business', href: '#' },
  { label: 'Equipment risk', href: '#' },
  { label: 'Edit' },
];

const previewWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--global-spacing-sizing-16px)',
  padding: 'var(--global-spacing-sizing-24px)',
  background: 'var(--global-color-neutral-gray-100)',
  borderRadius: 'var(--global-spacing-radius-8px)',
};

export const ElementHeaderDocs: React.FC = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="ElementHeader"
      subtitle="A structured page-header layout block that combines a breadcrumb trail, a contextual Back button, and a prominent element/page title. Available in three size variants."
    />

    <DocsTemplate.BodyText>
      The <strong>ElementHeader</strong> component acts as the primary header for
      detail and edit pages within the application. It provides wayfinding context
      through breadcrumbs, a Back navigation control, and a page-level title that
      identifies the record or element the user is working on. All sizing, spacing,
      typography, and colour values resolve to design tokens — ensuring visual
      consistency across sizes and themes.
    </DocsTemplate.BodyText>

    {/* ── Anatomy ── */}
    <DocsTemplate.Section title="Component Anatomy">
      <DocsTemplate.Anatomy
        preview={
          <div style={previewWrap}>
            <ElementHeader
              breadcrumbs={EXAMPLE_BREADCRUMBS}
              title="This is the Element name for the user to see"
              size="default"
            />
          </div>
        }
        parts={[
          {
            id: 1,
            name: 'Breadcrumb Trail',
            token: '--element-header-breadcrumb-*',
            description:
              'An accessible ordered list of navigation links. All items except the last are interactive; the last is the current page — rendered as bold text with aria-current="page".',
          },
          {
            id: 2,
            name: 'Back Button',
            token: '--element-header-back-*',
            description:
              'A ghost-style outlined button with a leading account icon and a trailing arrow-right icon. Uses the primary blue-blue palette for borders and shadow.',
          },
          {
            id: 3,
            name: 'Element Title',
            token: '--element-header-title-*',
            description:
              'The primary heading for the page or record. Rendered in the secondary navy colour at heading-level typography.',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Size Variants ── */}
    <DocsTemplate.Section title="Size Variants">
      <DocsTemplate.BodyText>
        Three size variants control typography, spacing, and icon sizes throughout
        the component: <strong>Small</strong>, <strong>Default</strong>, and{' '}
        <strong>Large</strong>.
      </DocsTemplate.BodyText>

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Small',
            children: (
              <ElementHeader
                size="sm"
                breadcrumbs={EXAMPLE_BREADCRUMBS}
                title="This is the Element name for the user to see"
              />
            ),
          },
          {
            label: 'Default',
            children: (
              <ElementHeader
                size="default"
                breadcrumbs={EXAMPLE_BREADCRUMBS}
                title="This is the Element name for the user to see"
              />
            ),
          },
          {
            label: 'Large',
            children: (
              <ElementHeader
                size="lg"
                breadcrumbs={EXAMPLE_BREADCRUMBS}
                title="This is the Element name for the user to see"
              />
            ),
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Design Tokens ── */}
    <DocsTemplate.Section title="Design Tokens">
      <DocsTemplate.TokenTable
        tokens={[
          {
            name: '--element-header-gap-sm / -default / -lg',
            description:
              'Vertical gap between the breadcrumbs, Back button, and title sections for each size variant. Resolves to global-spacing-sizing-6/8/12px.',
          },
          {
            name: '--element-header-breadcrumb-font-size-sm / -default / -lg',
            description:
              'Breadcrumb item font size per size variant. Resolves to global-type-size-primary-label-xs / label-sm / label.',
          },
          {
            name: '--element-header-breadcrumb-sep-size-sm / -default / -lg',
            description:
              'Width and height of the chevron separator icon in the breadcrumb trail. Resolves to global-spacing-sizing-10/12/14px.',
          },
          {
            name: '--element-header-breadcrumb-gap-sm / -default / -lg',
            description:
              'Gap between breadcrumb items (and between each item and its separator). Resolves to global-spacing-sizing-4/6/8px.',
          },
          {
            name: '--element-header-back-font-size-sm / -default / -lg',
            description:
              'Back button label font size per size variant. Resolves to global-type-size-primary-label-xs / label-sm / label.',
          },
          {
            name: '--element-header-back-icon-size-sm / -default / -lg',
            description:
              'Width and height of the account and arrow-right icons inside the Back button. Resolves to global-spacing-sizing-12/14/16px.',
          },
          {
            name: '--element-header-back-padding-x-sm / -default / -lg',
            description:
              'Horizontal padding inside the Back button per size variant. Resolves to global-spacing-sizing-10/12/16px.',
          },
          {
            name: '--element-header-back-gap-sm / -default / -lg',
            description:
              'Gap between icon and label inside the Back button per size variant. Resolves to global-spacing-sizing-4/6/8px.',
          },
          {
            name: '--element-header-back-bg',
            description:
              'Default background of the Back button. Resolves to global-color-primary-blue-blue-50.',
          },
          {
            name: '--element-header-back-border',
            description:
              'Border colour of the Back button. Resolves to global-color-primary-blue-blue-300.',
          },
          {
            name: '--element-header-back-color',
            description:
              'Text and icon colour of the Back button in its resting state. Resolves to global-color-secondary-blue-gray.',
          },
          {
            name: '--element-header-back-bg-hover',
            description:
              'Background of the Back button on hover/active. Resolves to global-color-primary-blue-blue-100.',
          },
          {
            name: '--element-header-back-shadow-hover',
            description:
              'Box-shadow colour applied on hover/active (2×2 px offset). Resolves to global-color-primary-blue-blue-400.',
          },
          {
            name: '--element-header-back-color-hover',
            description:
              'Text and icon colour of the Back button on hover/active. Resolves to global-color-base-black.',
          },
          {
            name: '--element-header-title-font-size-sm / -default / -lg',
            description:
              'Title font size per size variant. Resolves to global-type-size-primary-label-lg / heading-5 / heading-4.',
          },
          {
            name: '--element-header-title-line-height-sm / -default / -lg',
            description:
              'Title line-height per size variant. Resolves to global-type-line-height-label-lg / heading-5 / heading-4.',
          },
          {
            name: '--element-header-title-color',
            description:
              'Colour of the element title. Resolves to global-color-secondary-navy (#3a3282).',
          },
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Usage ── */}
    <DocsTemplate.Section title="Usage Guidelines">
      <DocsTemplate.BulletList
        items={[
          'Place ElementHeader at the very top of a detail or edit page, before any content.',
          'Always populate the breadcrumbs array to give users clear wayfinding context.',
          'The last breadcrumb item must represent the current page and should not include an href or onClick.',
          'Keep breadcrumb labels concise — ideally 1–3 words.',
          'Provide an onBack handler when the Back button should perform SPA routing rather than browser history navigation.',
          'Use the same size variant throughout a page — do not mix sizes within the same view.',
        ]}
      />
    </DocsTemplate.Section>

    {/* ── Dos and Don'ts ── */}
    <DocsTemplate.Section title="Dos and Don'ts">
      <DocsTemplate.DosDonts
        doItem={{
          icon: (
            <ElementHeader
              breadcrumbs={EXAMPLE_BREADCRUMBS}
              title="Edit equipment risk assessment"
              size="default"
            />
          ),
          label: 'Do',
          description:
            'Always include breadcrumbs and a meaningful title that identifies the record or action the user is performing.',
        }}
        dontItem={{
          icon: (
            <ElementHeader
              breadcrumbs={[]}
              showBack={false}
              title="Edit"
              size="default"
            />
          ),
          label: "Don't",
          description:
            "Don't omit breadcrumbs on deep pages, and don't use generic labels like \"Edit\" without the record name — users lose context.",
        }}
      />
    </DocsTemplate.Section>

    {/* ── Principles ── */}
    <DocsTemplate.Section title="Design Principles">
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Wayfinding first">
          The breadcrumb trail must always reflect the real hierarchy. Users rely on it
          to understand where they are and navigate back efficiently.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Consistent sizing">
          Choose one size variant per page and apply it uniformly. Mixing sizes creates
          visual tension and undermines rhythm.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={3} title="Token-driven">
          Every visual property — colour, spacing, typography — is expressed through a
          design token. Never hard-code values in components that use ElementHeader.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);

export default ElementHeaderDocs;
