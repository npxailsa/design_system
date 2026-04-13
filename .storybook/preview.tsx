import { Preview } from "@storybook/react-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { setupMonaco } from 'storybook-addon-code-editor';
import { StyledEngineProvider } from '@mui/material';
import '../src/index.css';
import React from 'react';
import { npxTheme } from './npxTheme';
import { MdxCodeBlock } from './MdxCodeBlock';
import { sb } from 'storybook/test';

// ─── Automocking ─────────────────────────────────────────────────────────────
//
// Modules registered here are mocked globally across ALL stories in the project.
// This is the ONLY place sb.mock() may be called — story files cannot call it.
//
// Builder: @storybook/react-vite (Vite) ✅ automocking is fully supported.
//
// Three registration modes (choose per module):
//   • Spy-only   → sb.mock(import('pkg'), { spy: true })
//     Keeps original behaviour; wraps exports with Vitest spy functions so
//     play functions can assert calls (e.g. expect(createPortal).toHaveBeenCalled()).
//
//   • Fully mocked → sb.mock(import('pkg'))
//     Replaces every export with a no-op Vitest mock function. The module is
//     still evaluated (side effects run); use a mock file to prevent that.
//
//   • Mock file  → sb.mock(import('pkg'))  +  __mocks__/pkg.js
//     sb.mock first checks __mocks__/ for a hand-crafted replacement.
//     See __mocks__/README.md for conventions.
//
// To control behaviour in a story, use mocked() from 'storybook/test':
//   mocked(createPortal).mockImplementation((children) => <>{children}</>);
//
// ─── react-dom ───────────────────────────────────────────────────────────────
// Spy-only: preserves real createPortal (and all other react-dom APIs) so
// portal-based components (Toast, dialogs) render correctly in the preview,
// while giving play functions the ability to assert portal calls.
sb.mock(import('react-dom'), { spy: true });

// Configure Monaco editor theme when it loads.
// Wrapped defensively so any Monaco load failure doesn't crash the preview.
try {
  setupMonaco({
    onMonacoLoad(monaco) {
      monaco.editor.defineTheme('npx-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {},
      });
    },
  });
} catch {
  // Monaco not yet available — this is fine for non-code-editor stories.
}

// ── ResizeObserver loop fix ────────────────────────────────────────────────
// The "ResizeObserver loop completed with undelivered notifications" error is a
// benign browser warning triggered by Storybook's complex layout re-renders.
// The root fix is wrapping all ResizeObserver callbacks in requestAnimationFrame
// so they never fire synchronously mid-layout. Error-event suppression below
// acts as a second safety net for any observers we don't own.
if (typeof window !== 'undefined') {
  // 1. Patch ResizeObserver globally so callbacks are always deferred.
  //    This prevents the loop from occurring in the first place.
  if (typeof window.ResizeObserver !== 'undefined') {
    const OriginalRO = window.ResizeObserver;
    // @ts-ignore – replacing the global constructor
    window.ResizeObserver = class PatchedResizeObserver extends OriginalRO {
      constructor(callback: ResizeObserverCallback) {
        super((entries: ResizeObserverEntry[], observer: ResizeObserver) => {
          window.requestAnimationFrame(() => {
            if (!Array.isArray(entries) || !entries.length) return;
            callback(entries, observer);
          });
        });
      }
    };
  }

  // 2. Suppress console.error for any messages that still slip through.
  const originalError = window.console.error;
  window.console.error = (...args: any[]) => {
    const msg = typeof args[0] === 'string' ? args[0] : '';
    if (
      msg.includes('ResizeObserver loop completed') ||
      msg.includes('ResizeObserver loop limit exceeded')
    ) {
      return;
    }
    originalError.apply(window.console, args);
  };

  // 3. Stop the error from reaching Storybook's error overlay / boundary.
  window.addEventListener('error', (e) => {
    if (
      e.message &&
      (e.message.includes('ResizeObserver loop completed') ||
        e.message.includes('ResizeObserver loop limit exceeded'))
    ) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }, true); // capture phase — runs before Storybook's own listener

  // 4. Suppress window.onerror path as well.
  const originalOnError = window.onerror;
  window.onerror = (message, ...rest) => {
    if (
      typeof message === 'string' &&
      (message.includes('ResizeObserver loop completed') ||
        message.includes('ResizeObserver loop limit exceeded'))
    ) {
      return true; // returning true suppresses the error
    }
    if (typeof originalOnError === 'function') {
      return originalOnError(message, ...rest);
    }
    return false;
  };

  // 5. Guard against unhandled-rejection form.
  window.addEventListener('unhandledrejection', (e) => {
    if (
      e.reason &&
      typeof e.reason.message === 'string' &&
      e.reason.message.includes('ResizeObserver loop')
    ) {
      e.preventDefault();
    }
  });
}

const Header = () => (
  <div style={{
    padding: 'var(--global-spacing-sizing-8px) var(--global-spacing-sizing-16px)',
    borderBottom: '1px solid var(--global-color-neutral-gray-200)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--brand-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-8px)'
  }}>
    <span style={{ fontWeight: 'var(--global-type-weight-bold)' }}>NPX</span>
    <span style={{ color: 'var(--global-color-neutral-gray-500)' }}>|</span>
    <span>Design System</span>
  </div>
);

const Footer = () => (
  <div style={{
    padding: 'var(--global-spacing-sizing-16px)',
    borderTop: '1px solid var(--global-color-neutral-gray-200)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--global-color-neutral-gray-500)',
    fontSize: 'var(--global-type-size-primary-label-xs)',
    textAlign: 'center',
    marginTop: 'var(--global-spacing-sizing-24px)'
  }}>
    &copy; {new Date().getFullYear()} NPX Innovation. All rights reserved.
  </div>
);

const preview: Preview = {
  /*
   * StyledEngineProvider injectFirst ensures MUI's Emotion styles are injected
   * into the <head> BEFORE our custom design-system CSS (src/index.css and
   * tokens.css). This means our tokens/component overrides always win.
   */
  decorators: [
    (Story) => (
      <StyledEngineProvider injectFirst>
        <Story />
      </StyledEngineProvider>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Foundation', 'Atoms', '*'],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    docs: {
      theme: npxTheme,
      // Override MDX rendered components so docs pages match the design
      // system visual language. `code` covers both fenced code blocks
      // (```tsx) and inline backtick code in all .mdx files.
      components: {
        code: MdxCodeBlock,
      },
      // Temporarily disabling custom DocsContainer to test if it's causing the crash
      // container: (props: any) => (
      //   <DocsContainer {...props}>
      //     <Header />
      //     {props.children}
      //     <Footer />
      //   </DocsContainer>
      // ),
    },
  },
};

export default preview;
