import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={`${css.link} ${css.button}`}>
      Register
    </NavLink>
    <NavLink to="/login" className={`${css.link} ${css.button}`}>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
