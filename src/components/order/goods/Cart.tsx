import React from 'react';
import { ProductCart } from '../../../types/cart.ts';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants.ts';

type CartDataProps = {
  cartData: ProductCart[],
};

const Cart: React.FC<CartDataProps> = ({ cartData }) => {
  return (
    <table className="w-full table-fixed border-collapse">
      <tbody className="table w-full">
        {cartData.map((order: ProductCart) => (
          <tr
            className="w-full border-b-2 border-solid border-grey"
            key={order.id}>
            <td className="relative rowCell w-28 max-h-28 mb-3 ">
              <img className="rounded" src={order.thumbnail} alt={order.title} />
            </td>
            <td className="w-60 pl-3 rowCell align-top text-start">
              <NavLink to={ROUTES.productId}><h5 className="capitalize">{order.title}</h5></NavLink>
            </td>
            <td className="rowCell w-24">£{order.price * order.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
