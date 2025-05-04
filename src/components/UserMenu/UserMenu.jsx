import { useState } from 'react';
import s from './UserMenu.module.css';
import { Menu, MenuItem, Typography, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
    handleClose();
  };

  return (
    <div className={s.menu}>
      <button onClick={handleMenuOpen}>Меню</button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        className={s.modalMenu}
        sx={{
          '& .MuiMenuItem-root': {
            backgroundColor: 'red',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: ' 8px',
          },
          '& .MuiList-root': {
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          },
        }}
      >
        <div className={s.avatar}>
          <Avatar>{user.name ? user.name[0] : 'null'}</Avatar>
          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>{user.name}</Typography>
        </div>
        <NavLink
          to="/"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
        >
          Головна
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? `${s.link} ${s.active}` : s.link)}
        >
          Контакти
        </NavLink>
        <MenuItem
          onClick={handleLogout}
          sx={{
            fontWeight: '600',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: 'red',
            },
          }}
        >
          Вийти
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
