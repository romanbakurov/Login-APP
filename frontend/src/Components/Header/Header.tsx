import S from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle.tsx';
import { ButtonPlusIcon } from '../../UI/ButtonPlusIcon/ButtonPlusIcon.tsx';
import ExitIcon from '../../assets/icons/Exit.svg?react';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className={S.container}>
      <div className={S.smallMenu}>
        <ThemeToggle />
        <ButtonPlusIcon icon={ExitIcon} onClick={handleLogout} className={S.logout}>
          <span>Logout</span>
        </ButtonPlusIcon>
      </div>
    </header>
  );
};
