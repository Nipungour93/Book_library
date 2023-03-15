/**
 * App themes
 * @format
 */
import * as colors from './colors';

const defaultTheme = {
  key: 'default',
  variant: 'light',
  colors: colors,
};

const darkTheme = {
  ...defaultTheme,
  variant: 'dark',
  key: 'dark',
  colors: {
    ...defaultTheme.colors,
    background: colors.neutral.black,
  },
};

export const Themes = {defaultTheme, darkTheme};

export type ITheme = typeof defaultTheme;
