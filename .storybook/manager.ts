import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'useFetchWithCallbacks',
  brandUrl: 'https://github.com/asudbury/use-fetch-with-callbacks',
  brandImage: undefined, // You can add a logo URL here
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#4A90E2',
  colorSecondary: '#2E86AB',

  // UI colors
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E1E8ED',
  appBorderRadius: 6,

  // Typography
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  // Text colors
  textColor: '#2E3440',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#4A90E2',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E1E8ED',
  inputTextColor: '#2E3440',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
  panelPosition: 'bottom',
  selectedPanel: 'controls',
});
