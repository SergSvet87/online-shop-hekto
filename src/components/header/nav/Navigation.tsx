import { NavLink } from 'react-router-dom';

import { NAV, ROUTES } from '../../../utils/constants.ts';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {NAV &&
          NAV.map((item, index) => (
            <li className={styles.nav__item} key={index}>
              {item === 'home' ? (
                <NavLink
                  // className={({ isActive }) => (isActive ? styles.active : null)}
                  to={ROUTES.home}>
                  {item}
                </NavLink>
              ) : (
                <NavLink 
                // className={({ isActive }) => (isActive ? styles.active : null)} 
                to={item}>
                  {item}
                </NavLink>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
