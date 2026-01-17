import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../../../../UI/Tooltip/Tooltip.tsx';
import S from './NavItem.module.css';

type SideBarNavItemProps = {
  path: string;
  label: string;
  icon: React.ElementType;
  collapsed: boolean;
};

export const SideBarNavItem = ({ path, label, icon: Icon, collapsed }: SideBarNavItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={path} className={S.link}>
      <div
        className={S.item}
        ref={itemRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Icon className={S.navIcon} />
        {!collapsed && <span>{label}</span>}
        <Tooltip
          content={label}
          targetReact={itemRef.current?.getBoundingClientRect() || null}
          visible={collapsed && hovered}
        />
      </div>
    </NavLink>
  );
};
