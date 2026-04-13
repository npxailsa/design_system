import { addons } from 'storybook/manager-api';
import { npxTheme } from './npxTheme';

addons.setConfig({
  theme: npxTheme,
  sidebar: {
    collapsedRoots: ['foundation'],
  },
});
