import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
