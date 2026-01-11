import S from './SideBar.module.css';
import DashboardIcon from '../../assets/icons/Dashboard.svg?react';
import ProfileIcon from '../../assets/icons/Profile.svg?react';
import SettingsIcon from '../../assets/icons/Settings.svg?react';
import { ButtonPlusIcon } from '../../UI/ButtonPlusIcon/ButtonPlusIcon.tsx';
import HideIcon from '../../assets/icons/Hide.svg?react';
import ShowIcon from '../../assets/icons/Show.svg?react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logotype from '../../assets/images/Logotype.svg';
import { Logo } from '../../UI/Logo/Logo.tsx';

type NavItem = {
  label: string;
  path: string;
  icon: React.ElementType;
};

const navItemsFirst: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { label: 'Profile', path: '/profile', icon: ProfileIcon },
];

const navItemsSecond: NavItem[] = [{ label: 'Settings', path: '/settings', icon: SettingsIcon }];

export const SideBar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <aside className={`${S.sidebar} ${collapsed ? S.collapsed : ''}`}>
        <Logo
          className={S.logo}
          src={Logotype}
          text="APP"
          showText={!collapsed}
          alt="Logo"
          fontSize="24px"
          onClick={() => navigate('/dashboard')}
        />
        <nav className={S.nav}>
          <div className={S.firstPart}>
            {navItemsFirst.map(({ path, label, icon: Icon }) => (
              <NavLink key={path} to={path} className={S.link}>
                <Icon className={S.navIcon} />
                {!collapsed && <span>{label}</span>}
              </NavLink>
            ))}
          </div>

          <div className={S.secondPart}>
            {navItemsSecond.map(({ path, label, icon: Icon }) => (
              <NavLink key={path} to={path} className={S.link}>
                <Icon className={S.navIcon} />
                {!collapsed && <span>{label}</span>}
              </NavLink>
            ))}

            <ButtonPlusIcon
              icon={collapsed ? ShowIcon : HideIcon}
              className={S.toggle}
              onClick={() => setCollapsed((prev) => !prev)}
            >
              {!collapsed && <span>Hide</span>}
            </ButtonPlusIcon>
            <div className={S.version}>{!collapsed ? 'Version 1.0' : '1.0'}</div>
          </div>
        </nav>
      </aside>
    </>
  );
};
