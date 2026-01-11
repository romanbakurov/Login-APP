import { SideBar } from '../Components/SideBar/SideBar.tsx';
import { Header } from '../Components/Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import S from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={S.layout}>
      <SideBar />

      <div className={S.main}>
        <Header />
        <div className={S.Content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
