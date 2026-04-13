import React from 'react';

/**
 * MdxCodeBlock
 *
 * Custom MDX `code` renderer for Storybook Docs pages.
 * Matches the styling of `DocsTemplate.CodeBlock` so that all fenced
 * code blocks in .mdx files render consistently with the design system.
 *
 * Wired in via `parameters.docs.components.code` in preview.tsx.
 *
 * Design token references (from tokens.css / global_design_tokens.json):
 *   Background  → --color-additional-gray-light-light-gray-default
 *   Padding     → --global-spacing-sizing-24px
 *   Font        → monospace, sans-serif
 *   Font size   → --global-type-size-secondary-body
 *   Line height → --global-type-line-height-label-lg
 *   Text color  → --global-color-base-black
 *   Inline bg   → --color-primary-blue-blue-50
 *   Inline clr  → --global-color-primary-blue-blue-500  (#4A58CC)
 *   Radius      → --global-spacing-radius-4px
 *   Stroke      → --global-spacing-stroke-1px
 */

interface MdxCodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const MdxCodeBlock: React.FC<MdxCodeBlockProps> = ({
  children,
  className,
  ...rest
}) => {
  const isBlock = Boolean(className && className.startsWith('language-'));
  const lang = isBlock ? className!.replace('language-', '') : undefined;

  if (isBlock) {
    // ── Fenced code block (```tsx ... ```) ───────────────────────────────────
    return (
      <div
        style={{
          background: 'var(--color-additional-gray-light-light-gray-default, #f3f4f6)',
          borderRadius: 'var(--global-spacing-radius-8px, 8px)',
          border: 'var(--global-spacing-stroke-1px, 1px) solid var(--global-color-neutral-gray-200, #e5e7eb)',
          padding: 'var(--global-spacing-sizing-24px, 24px)',
          display: 'flex',
          flexDirection: 'column' as const,
          gap: 'var(--global-spacing-sizing-8px, 8px)',
          alignSelf: 'stretch',
          overflow: 'hidden',
          margin: '0 0 var(--global-spacing-sizing-8px, 8px) 0',
          position: 'relative',
        }}
      >
        {lang && (
          <span
            style={{
              fontFamily: 'var(--font-family-primary, "F37GingerPro", "Calibri", sans-serif)',
              fontSize: 'var(--global-type-size-primary-label-xs, 11px)',
              fontWeight: 'var(--global-type-weight-bold, 700)',
              color: 'var(--global-color-neutral-gray-500, #6d7280)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            {lang}
          </span>
        )}
        <pre
          style={{
            color: 'var(--global-color-base-black, #1C1C1C)',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: 'var(--global-type-size-secondary-body, 14px)',
            lineHeight: 'var(--global-type-line-height-label-lg, 1.5)',
            fontWeight: 'var(--global-type-weight-default, 400)',
            margin: 0,
            whiteSpace: 'pre-wrap' as const,
            wordBreak: 'break-word' as const,
            overflowX: 'auto',
          }}
          {...rest}
        >
          <code>{children}</code>
        </pre>
      </div>
    );
  }

  // ── Inline code (`backtick`) ─────────────────────────────────────────────
  return (
    <code
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '0.875em',
        fontWeight: 'var(--global-type-weight-semibold, 600)',
        color: 'var(--global-color-primary-blue-blue-500, #4A58CC)',
        background: 'var(--color-primary-blue-blue-50, #F9F9FE)',
        border: 'var(--global-spacing-stroke-1px, 1px) solid var(--global-color-primary-blue-blue-100, #E7E9F4)',
        borderRadius: 'var(--global-spacing-radius-4px, 4px)',
        padding: '0.1em 0.4em',
      }}
      {...rest}
    >
      {children}
    </code>
  );
};
