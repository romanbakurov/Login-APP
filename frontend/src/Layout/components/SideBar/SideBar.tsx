import S from './SideBar.module.css';
import DashboardIcon from '../../../assets/icons/Dashboard.svg?react';
import ProfileIcon from '../../../assets/icons/Profile.svg?react';
import SettingsIcon from '../../../assets/icons/Settings.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logotype from '../../../assets/images/Logotype.svg';
import { Logo } from '../../../UI/Logo/Logo.tsx';
import { SideBarNavItem } from './NavItem/NavItem.tsx';
import ToggleButton from './ToggleButton.tsx';

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
          <div>
            {navItemsFirst.map((item) => (
              <SideBarNavItem key={item.path} {...item} collapsed={collapsed} />
            ))}
          </div>

          <div>
            {navItemsSecond.map((item) => (
              <SideBarNavItem key={item.path} {...item} collapsed={collapsed} />
            ))}

            <ToggleButton collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className={S.version}>{!collapsed ? 'Version 1.0' : '1.0'}</div>
          </div>
        </nav>
      </aside>
    </>
  );
};
