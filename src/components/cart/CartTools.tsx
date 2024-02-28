import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';

const CartTools = () => {
  const [acceptWithRules, setAcceptWithRules] = useState(false);

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  return (
    <aside className="flex flex-col">
      <div className="mb-8">
        <h3 className="title-h3 mb-10 font-bold">Cart Totals</h3>

        <div className="bg-bg-cart pt-8 pb-8 pr-6 pl-6 rounded-md">
          <div className="flex items-center justify-between mb-3">
            <p>Subtotals:</p>
            <p>£219.00</p>
          </div>
          <span className="line mb-8"></span>

          <div className="flex items-center justify-between mb-3">
            <p>Totals:</p>
            <p>£325.00</p>
          </div>
          <span className="block w-full h-px mb-6 border-t-2 border-solid border-grey"></span>

          <label className="relative flex items-center gap-2 ml-1 mb-9 cursor-pointer">
            <input
              className="absolute opacity-0"
              type="checkbox"
              onChange={toggleAcceptWithRules}
              name="type"
            />
            <span className="">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" rx="3" fill="#19D16F" />
                <path
                  d="M6.23649 2.40335C6.2055 2.37211 6.16863 2.34731 6.12801 2.33038C6.08739 2.31346 6.04382 2.30475 5.99982 2.30475C5.95582 2.30475 5.91225 2.31346 5.87163 2.33038C5.83101 2.34731 5.79414 2.37211 5.76315 2.40335L3.27982 4.89001L2.23649 3.84335C2.20431 3.81227 2.16633 3.78783 2.12471 3.77143C2.0831 3.75503 2.03865 3.74698 1.99393 3.74776C1.9492 3.74853 1.90506 3.75811 1.86404 3.77594C1.82301 3.79377 1.7859 3.81951 1.75482 3.85168C1.72374 3.88386 1.6993 3.92184 1.6829 3.96345C1.6665 4.00507 1.65846 4.04951 1.65923 4.09424C1.66 4.13897 1.66958 4.1831 1.68741 4.22413C1.70524 4.26516 1.73098 4.30227 1.76315 4.33335L3.04315 5.61335C3.07414 5.64459 3.11101 5.66939 3.15163 5.68631C3.19225 5.70323 3.23582 5.71195 3.27982 5.71195C3.32382 5.71195 3.36739 5.70323 3.40801 5.68631C3.44863 5.66939 3.4855 5.64459 3.51649 5.61335L6.23649 2.89335C6.27032 2.86213 6.29732 2.82425 6.31579 2.78208C6.33426 2.73992 6.3438 2.69438 6.3438 2.64835C6.3438 2.60231 6.33426 2.55678 6.31579 2.51461C6.29732 2.47245 6.27032 2.43456 6.23649 2.40335Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="font-main font-normal text-xs text-grey">
              Shipping & taxes calculated at checkout
            </span>
          </label>

          <NavLink
            to={ROUTES.shop}
            className="w-full pt-3 pb-3 bg-green rounded-sm text-center text-white hover:bg-sky-blue">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>

      <div className="">
        <h3 className="title-h3 mb-10 font-bold">Calculate Shopping</h3>

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
            className="pt-3 pb-3 pr-6 pl-6 bg-accent rounded-sm font-second font-semibold text-base text-white hover:bg-purple">
            Calculate Shiping
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default CartTools;
