import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import { Toast } from './Toast';
import type { ToastColour } from './Toast';

const COLOURS: ToastColour[] = [
  'default',
  'warning',
  'light-gray',
  'navy',
  'success',
  'error',
  'purple',
  'white',
];

export const ToastDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Toast"
        subtitle="Transient notification banners for surfacing contextual feedback outside the page flow"
      />

      <DocsTemplate.BodyText>
        The Toast component delivers short-lived, non-disruptive notifications to the user. It shares
        the same visual design language as the Alert component — 8 colour variants, 3 sizes, the same
        leading icon set and colour tokens — but is designed to appear temporarily, floating over
        page content from a corner of the screen. Use{' '}
        <strong>ToastProvider</strong> and <strong>useToast</strong> for programmatic usage with
        auto-dismiss and portal rendering.
      </DocsTemplate.BodyText>

      {/* ── Component Anatomy ── */}
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          The Toast shares the same internal layout as the Alert component — the anatomy below maps
          each numbered element to its controlling tokens. The key difference is the outer container:
          toasts float above page content via a fixed-position portal with a drop shadow.
        </DocsTemplate.BodyText>
        <DocsTemplate.Anatomy
          preview={<Toast size="default" colour="default" />}
          parts={[
            {
              id: 1,
              name: 'Leading Icon',
              token: 'filled/icons (display category)\n--toast-leading-icon-{size}\n--toast-icon-opacity',
              description: 'Context-sensitive SVG icon indicating the notification type. Rendered at 50% opacity. Selection varies by colour variant. Aliased from --alert-leading-icon-{size}.',
            },
            {
              id: 2,
              name: 'Title',
              token: '--toast-font-family\n--toast-title-size-{size}\n--toast-title-weight\n--toast-title-{colour}',
              description: 'Primary notification text using F37 Ginger Pro Regular. Colour inherits from the matching Alert colour token for the selected variant.',
            },
            {
              id: 3,
              name: 'Description',
              token: '--toast-font-family\n--toast-desc-size-{size}\n--toast-desc-weight\n--toast-description-color',
              description: 'Supporting subtext at 300 weight. Always gray-700 regardless of colour variant. Toggle with showSubtext prop.',
            },
            {
              id: 4,
              name: 'Close Icon',
              token: 'filled/icons (action category)\n--toast-close-icon-{size}\n--toast-icon-opacity',
              description: 'Optional dismiss action. Calls the onClose callback when clicked. Toggle with showTrailingIcon prop.',
            },
            {
              id: 5,
              name: 'Container / Portal',
              token: '--toast-bg-{colour}\n--toast-border-radius\n--toast-shadow\n--toast-min-width\n--toast-max-width\n--toast-offset-x\n--toast-offset-y\n--toast-z-index',
              description: 'Fixed-position floating panel rendered into a portal above all page content. Drop shadow (--toast-shadow) distinguishes it from the page. Width is 280–400px.',
            },
          ]}
        />
      </DocsTemplate.Section>

      {/* ── Layout Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Layout"
        description="Layout tokens control sizing, position offsets, stacking gap, and shadow:"
        tokens={[
          { name: '--toast-min-width', description: 'Minimum toast width — uses --global-spacing-sizing-280px (280px)' },
          { name: '--toast-max-width', description: 'Maximum toast width — uses --global-spacing-sizing-400px (400px)' },
          { name: '--toast-gap', description: 'Gap between stacked toasts — uses --global-spacing-sizing-8px (8px)' },
          { name: '--toast-offset-x', description: 'Horizontal offset from screen edge — uses --global-spacing-sizing-16px (16px)' },
          { name: '--toast-offset-y', description: 'Vertical offset from screen edge — uses --global-spacing-sizing-16px (16px)' },
          { name: '--toast-z-index', description: 'Stack order above all page content (9000)' },
          { name: '--toast-border-radius', description: 'Border radius — uses --global-spacing-radius-6px (6px)' },
          { name: '--toast-border-width', description: 'Border width — uses --global-spacing-stroke-1px (1px)' },
          { name: '--toast-shadow', description: 'Drop shadow distinguishing toast from page content' },
          { name: '--toast-padding-small', description: 'Padding — small (aliased from --alert-padding-small)' },
          { name: '--toast-padding-default', description: 'Padding — default (aliased from --alert-padding-default)' },
          { name: '--toast-padding-large', description: 'Padding — large (aliased from --alert-padding-large)' },
          { name: '--toast-icon-text-gap', description: 'Gap between leading icon and text (aliased from --alert-icon-text-gap)' },
          { name: '--toast-content-gap', description: 'Gap within content row (aliased from --alert-gap)' },
        ]}
      />

      {/* ── Animation Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Animation"
        description="Animation tokens control enter/exit timing:"
        tokens={[
          { name: '--toast-enter-duration', description: 'Enter animation duration (260ms)' },
          { name: '--toast-exit-duration', description: 'Exit animation duration (200ms)' },
          { name: '--toast-animation-easing', description: 'Easing function — cubic-bezier(0.16, 1, 0.3, 1)' },
        ]}
      />

      {/* ── Typography Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Typography"
        description="Typography tokens for title and description — all aliased from Alert tokens:"
        tokens={[
          { name: '--toast-font-family', description: 'Font family — uses --brand-font-primary (F37 Ginger Pro)' },
          { name: '--toast-letter-spacing', description: 'Letter spacing (0.15px)' },
          { name: '--toast-title-weight', description: 'Title font weight (400 / regular)' },
          { name: '--toast-desc-weight', description: 'Description font weight (300 / light)' },
          { name: '--toast-description-color', description: 'Description text colour — uses --global-color-neutral-gray-700' },
          { name: '--toast-title-size-small', description: 'Title size — small (12px)' },
          { name: '--toast-title-size-default', description: 'Title size — default (14px)' },
          { name: '--toast-title-size-large', description: 'Title size — large (18px)' },
          { name: '--toast-desc-size-small', description: 'Description size — small (12px)' },
          { name: '--toast-desc-size-default', description: 'Description size — default (14px)' },
          { name: '--toast-desc-size-large', description: 'Description size — large (16px)' },
        ]}
      />

      {/* ── Colour Tokens ── */}
      <DocsTemplate.TokenTable
        title="Design Tokens — Colour Variants"
        description="Each colour variant maps its background, border, title, and icon fill through Alert tokens:"
        tokens={[
          { name: '--toast-bg-default', description: 'Default background — aliased from --alert-bg-default' },
          { name: '--toast-border-default', description: 'Default border — aliased from --alert-border-default (navy-mid)' },
          { name: '--toast-title-default', description: 'Default title colour — aliased from --alert-title-default (navy)' },
          { name: '--toast-bg-warning', description: 'Warning background — aliased from --alert-bg-warning (peach-cream-50)' },
          { name: '--toast-border-warning', description: 'Warning border — aliased from --alert-border-warning (status-orange)' },
          { name: '--toast-title-warning', description: 'Warning title colour — aliased from --alert-title-warning (dark-orange)' },
          { name: '--toast-bg-light-gray', description: 'Light-gray background — aliased from --alert-bg-light-gray (gray-50)' },
          { name: '--toast-bg-navy', description: 'Navy background — aliased from --alert-bg-navy (info-blue-light)' },
          { name: '--toast-bg-success', description: 'Success background — aliased from --alert-bg-success (gray-50)' },
          { name: '--toast-bg-error', description: 'Error background — aliased from --alert-bg-error (red-light)' },
          { name: '--toast-bg-purple', description: 'Purple background — aliased from --alert-bg-purple (purple-light)' },
          { name: '--toast-bg-white', description: 'White background — aliased from --alert-bg-white (base-white)' },
        ]}
      />

      {/* ── Principles ── */}
      <DocsTemplate.Section
        title="Principles"
        subtitle="Follow these design principles when using toasts in the interface."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Keep it brief">
          Toast messages should be short and scannable. Use a concise title — ideally
          under 8 words — and a brief description. Avoid using toasts to deliver lengthy
          instructions or complex information.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Use the correct semantic colour">
          Each colour variant carries a specific semantic meaning. Use{' '}
          <strong>success</strong> for confirmations, <strong>error</strong> for
          failures, <strong>warning</strong> for cautionary notices, and{' '}
          <strong>navy</strong> for neutral informational messages.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Don't interrupt the user">
          Toasts are non-blocking — they appear over content and dismiss automatically.
          Never use them for critical errors that require user action. Use an Alert or
          modal dialog instead when an immediate response is required.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Limit simultaneous toasts">
          Showing more than 3 toasts at once creates visual noise. The ToastProvider's
          maxToasts prop defaults to 5 but should be tuned for your application context.
          Prefer replacing or updating a toast when the same event fires repeatedly.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      {/* ── Using the Component ── */}
      <DocsTemplate.Section
        title="Using the component"
        subtitle="Wrap your application in ToastProvider, then call useToast() to trigger notifications."
      />

      <DocsTemplate.CodeBlock>
        {`// 1. Wrap your app
import { ToastProvider } from './components/Toast';

function App() {
  return (
    <ToastProvider position="bottom-right" defaultDuration={4000}>
      <YourApp />
    </ToastProvider>
  );
}

// 2. Call from any component
import { useToast } from './components/Toast';

function SaveButton() {
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast({
        colour: 'success',
        title: 'Changes saved',
        description: 'Your profile has been updated successfully.',
      });
    } catch {
      toast({
        colour: 'error',
        title: 'Save failed',
        description: 'Something went wrong. Please try again.',
        duration: 0, // no auto-dismiss for errors
      });
    }
  };

  return <button onClick={handleSave}>Save</button>;
}`}
      </DocsTemplate.CodeBlock>

      <DocsTemplate.CodeBlock>
        {`// Render as a static component (no portal/auto-dismiss)
import { Toast } from './components/Toast';

<Toast
  colour="success"
  size="default"
  title="Changes saved"
  description="Your profile has been updated."
  onClose={() => setVisible(false)}
/>`}
      </DocsTemplate.CodeBlock>

      {/* ── Props ── */}
      <DocsTemplate.TokenTable
        title="Toast Props"
        description="Props accepted by the Toast component:"
        tokens={[
          { name: 'id', description: 'Optional unique identifier (auto-generated by ToastProvider)' },
          { name: 'colour', description: "Colour variant: 'default' | 'warning' | 'light-gray' | 'navy' | 'success' | 'error' | 'purple' | 'white'" },
          { name: 'size', description: "Size variant: 'small' | 'default' | 'large'" },
          { name: 'title', description: 'Main notification message (required)' },
          { name: 'description', description: 'Secondary descriptive text (optional)' },
          { name: 'showLeadingIcon', description: 'Whether to show the semantic status icon (default: true)' },
          { name: 'showTrailingIcon', description: 'Whether to show the close button (default: true)' },
          { name: 'showSubtext', description: 'Whether to show the description (default: true)' },
          { name: 'visible', description: 'Controls enter/exit animation (default: true)' },
          { name: 'onClose', description: 'Callback when the close button is clicked' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="ToastProvider Props"
        description="Props accepted by ToastProvider:"
        tokens={[
          { name: 'position', description: "Where toasts appear: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' (default) | 'bottom-left' | 'bottom-center'" },
          { name: 'defaultDuration', description: 'Auto-dismiss delay in ms for all toasts (default: 4000). Set 0 to disable.' },
          { name: 'maxToasts', description: 'Maximum number of toasts shown simultaneously (default: 5)' },
        ]}
      />

      <DocsTemplate.TokenTable
        title="useToast() Returns"
        description="Methods returned by the useToast hook:"
        tokens={[
          { name: 'toast(options)', description: 'Shows a new toast. Accepts all Toast props plus duration. Returns the toast id.' },
          { name: 'dismiss(id)', description: 'Dismisses a specific toast by id with exit animation.' },
          { name: 'dismissAll()', description: 'Dismisses all visible toasts.' },
        ]}
      />

      {/* ── Visual Style ── */}
      <DocsTemplate.Section
        title="Visual style"
        subtitle="Toast shares the complete 8-colour semantic system with the Alert component."
      />

      <DocsTemplate.Subsection title="Colour variants" />

      <DocsTemplate.BodyText>
        Each colour variant uses the same background tint, border colour, title
        colour, and leading icon as its Alert counterpart. The addition of a drop
        shadow lifts the toast above the page content.
      </DocsTemplate.BodyText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--global-spacing-sizing-8px)', marginBottom: 'var(--global-spacing-sizing-24px)' }}>
        {COLOURS.map((colour) => (
          <Toast key={colour} colour={colour} size="default" />
        ))}
      </div>

      <DocsTemplate.Subsection title="Sizes" />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Large',
            sublabel: 'Use for prominent notifications',
            children: <Toast size="large" colour="default" />,
          },
          {
            label: 'Default',
            sublabel: 'Use for most notification scenarios',
            children: <Toast size="default" colour="default" />,
          },
          {
            label: 'Small',
            sublabel: 'Use for compact, inline notifications',
            children: <Toast size="small" colour="default" />,
          },
        ]}
      />

      {/* ── Icon Mapping ── */}
      <DocsTemplate.Section
        title="Leading icons"
        subtitle="Each colour variant uses the same NPX custom SVG icon as its Alert counterpart."
      />

      <DocsTemplate.TokenTable
        title="Icon Mapping"
        description="Colour to leading icon mapping:"
        tokens={[
          { name: 'default', description: 'Bullseye (concentric rings target)' },
          { name: 'warning', description: 'Alert triangle (triangle with exclamation)' },
          { name: 'light-gray', description: 'Bullseye (concentric rings target)' },
          { name: 'navy', description: 'Information circle (i inside circle)' },
          { name: 'success', description: 'Check bold (bold checkmark)' },
          { name: 'error', description: 'Close thick (thick X cross)' },
          { name: 'purple', description: 'File document (document with lines)' },
          { name: 'white', description: 'Bullseye (concentric rings target)' },
        ]}
      />

      {/* ── Contribution ── */}
      <DocsTemplate.Section title="Contribution">
        <DocsTemplate.BodyText>
          When proposing updates to the Toast component, consider the following:
        </DocsTemplate.BodyText>

        <DocsTemplate.BulletList
          ordered
          items={[
            'Does the new variant have a clear semantic purpose distinct from existing colours?',
            'Does it maintain sufficient contrast ratios for the title and description text?',
            'Will the change affect the Alert component, which shares these tokens?',
          ]}
        />

        <DocsTemplate.BodyText>
          To contribute a new variation, please bring it to our{' '}
          <strong>Biweekly Design System meeting</strong> for review with the whole
          team. If you need the calendar invite forwarding, please send the{' '}
          <strong>design team</strong> a message on Teams.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
