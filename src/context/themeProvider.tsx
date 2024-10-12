import React, { createContext, useContext } from 'react';
import { defaultTheme } from '../theme/default';
import { mergeThemes } from '../utils';

const ThemeContext = createContext({});

type ThemeProviderProps = {
  theme?: Record<string, string>;
  children: React.ReactNode;
};

export const ThemeProvider = ({ theme = {}, children }: ThemeProviderProps): React.ReactElement => {
  // Merge default theme with the provided custom theme
  const mergedTheme = mergeThemes(defaultTheme, theme);

  return (
    <ThemeContext.Provider value={mergedTheme} >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
