import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import { ButtonPlusIcon } from '../../UI/ButtonPlusIcon/ButtonPlusIcon.tsx';
import ChangeTheme from '../../assets/icons/ChangeTheme.svg?react';
import R from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <ButtonPlusIcon onClick={toggleTheme} icon={ChangeTheme} className={R.toggle}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </ButtonPlusIcon>
  );
};
