import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}>
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
