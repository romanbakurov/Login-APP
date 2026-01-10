import React, { createContext, useEffect, useState } from 'react';
import { applyTheme } from '../assets/style/theme/applyTheme';
import { darkTheme, lightTheme } from '../assets/style/theme/colors.ts';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    applyTheme(theme === 'light' ? lightTheme : darkTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    </>
  );
};
