import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

import CheckIcon from '../../assets/images/icons/check.svg?react';

type CartToolsProps = {
  total: number,
  totalProducts: number,
};

const CartTools: React.FC<CartToolsProps> = ({ total, totalProducts }) => {
  const [acceptWithRules, setAcceptWithRules] = useState(false);

  const toggleAcceptWithRules = () => setAcceptWithRules(() => !acceptWithRules);

  return (
    <aside className="flex flex-col">
      <div className="mb-8">
        <h3 className="title-h3 mb-10 mt-3 font-bold">Cart Totals</h3>

        <div className="bg-bg-cart pt-8 pb-8 pr-6 pl-6 rounded-md">
          <div className="flex items-center justify-between mb-3">
            <p>Total Products:</p>
            <p>{totalProducts}</p>
          </div>
          <span className="line mb-8"></span>

          <div className="flex items-center justify-between mb-3">
            <p>Totals:</p>
            <p>£{total}</p>
          </div>
          <span className="block w-full h-px mb-6 border-t-2 border-solid border-grey"></span>

          <label className="relative flex items-center gap-2 ml-1 mb-9 cursor-pointer">
            <input
              className="absolute opacity-0"
              type="checkbox"
              onChange={toggleAcceptWithRules}
              name="type"
            />
            <span className=""><CheckIcon /></span>
            <span className="font-main font-normal text-xs text-grey">
              Shipping & taxes calculated at checkout
            </span>
          </label>

          <NavLink
            to={ROUTES.order}
            className="w-full pt-3 pb-3 bg-green rounded-sm text-center text-white hover:bg-sky-blue">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>

      <div className="">
        <h3 className="title-h3 mb-10 pt-3 font-bold">Calculate Shopping</h3>

        <div className="bg-bg-cart pt-8 pb-8 pr-6 pl-6 rounded-md">
          <label className="mb-3">
            <input
              className="font-second font-semibold text-base text-second placeholder:text-grey"
              type="text"
              placeholder="Bangladesh"
            />
          </label>
          <span className="block w-full h-px border-t-2 border-solid border-grey mb-8"></span>

          <label className="mb-3">
            <input
              className="font-second font-semibold text-base text-second placeholder:text-grey"
              type="text"
              placeholder="Mirpur Dhaka - 1200"
            />
          </label>
          <span className="block w-full h-px border-t-2 border-solid border-grey mb-8"></span>

          <label className="mb-3">
            <input
              className="font-second font-semibold text-base text-second placeholder:text-grey"
              type="number"
              placeholder="Postal Code"
            />
          </label>
          <span className="block w-full h-px border-t-2 border-solid border-grey mb-8"></span>

          <NavLink
            to={ROUTES.shop}
            className="w-full pt-3 pb-3 bg-accent rounded-sm font-second font-semibold text-base text-center text-white hover:bg-purple">
            Calculate Shopping
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default CartTools;
