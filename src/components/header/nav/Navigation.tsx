import { NavLink } from 'react-router-dom';

import { NAV, ROUTES } from '../../../utils/constants';

const Navigation = () => {
  return (
    <nav>
      <ul className="relative flex items-center gap-9">
        {NAV &&
          NAV.map((item, index) => (
            <li className="text-base text-second transition-all hover:text-accent" key={index}>
              {item === 'home' ? (
                <NavLink className='capitalize ' to={ROUTES.home}>{item}</NavLink>
              ) : (
                <NavLink className='capitalize ' to={item}>{item}</NavLink>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
