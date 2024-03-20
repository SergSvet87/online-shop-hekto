import React from 'react';

import { ProductCart } from '../../types/cart';

import CloseIcon from '../../assets/images/icons/close.svg?react';

type CartDataProps = {
  cartData: ProductCart[],
};

const Cart: React.FC<CartDataProps> = ({ cartData }) => {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead className="table w-full mb-3">
        <tr className="w-full font-second font-bold text-xl text-title">
          <th className="rowCell text-left w-order-product">Product</th>
          <th className="rowCell">Price</th>
          <th className="rowCell">Quantity</th>
          <th className="rowCell">Total</th>
        </tr>
      </thead>

      <tbody className="table w-full">
        {cartData.map((order: ProductCart) => (
          <tr
            className="w-full cursor-pointer hover:bg-accent border-b-2 border-solid border-grey"
            key={order.id}>
            <td className="relative rowCell w-28 max-h-28 mb-3 ">
              <img className="rounded" src={order.thumbnail} alt={order.title} />

              <CloseIcon className="absolute top-3 right-2 w-3 h-3" />
            </td>
            <td className="w-60 pl-3 rowCell align-top text-start">
              <h5 className="capitalize">{order.title}</h5>
              {/* <p>Color: {order.color}</p>
              <p>Size: {order.size}</p> */}
            </td>
            <td className="rowCell w-24">£{order.price}</td>
            <td className="rowCell w-48">{order.quantity}</td>
            <td className="rowCell">£{order.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
