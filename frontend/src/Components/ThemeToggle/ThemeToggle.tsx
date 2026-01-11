import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import { ButtonPlusIcon } from '../../UI/ButtonPlusIcon/ButtonPlusIcon.tsx';
import ChangeTheme from '../../assets/icons/ChangeTheme.svg?react';

export const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <ButtonPlusIcon onClick={toggleTheme} icon={ChangeTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </ButtonPlusIcon>
  );
};
