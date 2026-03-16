import { Preview } from "@storybook/react-vite";
import { DocsContainer } from "@storybook/addon-docs/blocks"; 
import { TabContainer } from "storybook-addon-docs-tabs";
import '../src/index.css';
import React from 'react';

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
          <TabContainer context={context}>{children}</TabContainer> 
        </DocsContainer> 
      ), 
    },
  },
};

export default preview;
