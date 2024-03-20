import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import CheckIcon from '../../../assets/images/icons/check.svg?react';

import { ROUTES } from '../../../utils/constants';
import { fetchProductsCart } from '../../../utils/fetchCart';
import Cart from './Cart.tsx';

const Goods = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryFn: () => fetchProductsCart(5),
    queryKey: ['categories'],
  });
  
  const [acceptWithRules, setAcceptWithRules] = useState(false);

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  if (isError) {
    console.error(`Something went wrong!`);
  }

  return (
    <aside className="flex flex-col basis-1/3">
      <div className="mb-11">
        {isLoading ? <h3 className="text-center text-2xl text-black font-bold bg-white">Loading...</h3> :
        isSuccess && (
          <div className="flex justify-between items-start gap-5 bg-white">
            {!data ? (
              <h3 className="text-center text-2xl text-black font-bold bg-white">Cart Empty</h3>
            ) : (
              <Cart cartData={data.carts[0].products} />
            )}
          </div>
        )}
      </div>

      <div className="bg-bg-cart pt-8 pb-8 pr-6 pl-6 rounded-md">
        <div className="flex items-center justify-between mb-3">
        <p>Total Products:</p>
            <p>{data?.carts[0].totalQuantity}</p>
        </div>
        <span className="block w-full h-px border-t-2 border-solid border-grey mb-8"></span>

        <div className="flex items-center justify-between mb-3">
          <p>Totals:</p>
          <p>£{data?.carts[0].total}</p>
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
            <CheckIcon />
          </span>
          <span className="font-main font-normal text-xs text-grey">
            Shipping & taxes calculated at checkout
          </span>
        </label>

        <NavLink
          to={ROUTES.completed}
          className="w-full pt-3 pb-3 bg-green rounded-sm text-center text-white hover:bg-sky-blue">
          Сonfirm
        </NavLink>
      </div>
    </aside>
  );
};

export default Goods;
