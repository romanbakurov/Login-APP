import { useRef, useState } from 'react';
import { ButtonPlusIcon } from '../../../UI/ButtonPlusIcon/ButtonPlusIcon.tsx';
import ShowIcon from '../../../assets/icons/Show.svg?react';
import HideIcon from '../../../assets/icons/Hide.svg?react';
import { Tooltip } from '../../../UI/Tooltip/Tooltip.tsx';
import S from './SideBar.module.css';

type ToggleButtonProps = {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
};

const ToggleButton = ({ collapsed, setCollapsed }: ToggleButtonProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const toggleLabel = collapsed ? 'Show sidebar' : 'Hide sidebar';

  return (
    <div
      className={S.toggleWrapper}
      ref={itemRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ButtonPlusIcon
        className={S.toggle}
        icon={collapsed ? ShowIcon : HideIcon}
        onClick={() => {
          setCollapsed(!collapsed);
          setHovered(false);
        }}
        aria-label={toggleLabel}
      >
        <div className={S.toggleContent}>
          <span
            className={S.toggleText}
            style={{
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? 'translateX(-10px)' : 'translateX(0)',
            }}
          >
            {toggleLabel}
          </span>
        </div>
      </ButtonPlusIcon>

      {collapsed && hovered && itemRef.current && (
        <Tooltip
          content={toggleLabel}
          targetReact={itemRef.current.getBoundingClientRect()}
          visible={true}
        />
      )}
    </div>
  );
};

export default ToggleButton;
