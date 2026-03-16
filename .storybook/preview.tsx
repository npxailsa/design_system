import { Preview } from "@storybook/react-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { TabContainer } from "storybook-addon-docs-tabs";
import '../src/index.css';
import React from 'react';

const Header = () => (
  <div style={{
    padding: 'var(--spacing-small) var(--spacing-medium)',
    borderBottom: '1px solid var(--border-color-light)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-small)'
  }}>
    <span style={{ fontWeight: 'var(--font-weight-bold)' }}>NPX</span>
    <span style={{ color: 'var(--color-text-muted)' }}>|</span>
    <span>Design System</span>
  </div>
);

const Footer = () => (
  <div style={{
    padding: 'var(--spacing-medium)',
    borderTop: '1px solid var(--border-color-light)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--color-text-muted)',
    fontSize: 'var(--font-size-xs)',
    textAlign: 'center',
    marginTop: 'var(--spacing-large)'
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
      container: ({ children, context }: any) => (
        <DocsContainer context={context}>
          <TabContainer
            context={context}
            footerElement={<Footer />}
            additionalHeaderElement={<Header />}
          >
            {children}
          </TabContainer>
        </DocsContainer>
      ),
    },
  },
};

export default preview;
