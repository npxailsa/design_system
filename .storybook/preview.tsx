import { Preview } from "@storybook/react-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import '../src/index.css';
import React from 'react';

// Suppress the ResizeObserver loop error as it is often a benign warning in Storybook
// that can be triggered by complex layouts or many component variants.
if (typeof window !== 'undefined') {
  const originalError = window.console.error;
  window.console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      return;
    }
    originalError.apply(window.console, args);
  };

  window.addEventListener('error', (e) => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications') {
      const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay-error');
      if (resizeObserverErr) {
        resizeObserverErr.style.display = 'none';
      }
      e.stopImmediatePropagation();
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
      container: (props: any) => (
        <DocsContainer {...props}>
          <Header />
          {props.children}
          <Footer />
        </DocsContainer>
      ),
    },
  },
};

export default preview;
