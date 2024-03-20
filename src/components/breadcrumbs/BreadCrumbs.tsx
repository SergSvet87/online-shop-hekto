import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

type BreadCrumbsProps = {
  [index: string]: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ home, page }) => {
  return (
    <div className="flex items-center font-main font-medium text-black">
      <NavLink className="hover:text-accent" to={ROUTES[home]}>
        {home}
      </NavLink>
      <span className="mt-0 mb-0 mr-1 ml-1">.</span>
      <NavLink className="hover:text-accent" to={ROUTES.shop}>
        Pages
      </NavLink>
      <span className="mt-0 mb-0 mr-1 ml-1">.</span>
      {page}
    </div>
  );
};

export default BreadCrumbs;
