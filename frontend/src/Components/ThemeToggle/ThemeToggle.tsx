import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import T from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <button className={T.button} onClick={toggleTheme}>
      Theme {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
};
