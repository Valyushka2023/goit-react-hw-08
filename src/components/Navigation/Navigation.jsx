import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  return (
    <nav>
      <NavLink to="/" className={css.linkHome}>
        Home
      </NavLink>
      {isLoggedIn && ( 
        <NavLink to="/contacts" className={css.linkContacts}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;