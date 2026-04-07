import { Preview } from "@storybook/react-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import '../src/index.css';
import React from 'react';

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
