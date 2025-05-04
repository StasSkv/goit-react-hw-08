import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink to="/register" className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}>
        Реєстрація
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}>
        Увійти
      </NavLink>
    </div>
  );
};

export default AuthNav;
