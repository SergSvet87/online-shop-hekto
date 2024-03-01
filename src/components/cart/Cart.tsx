import React from 'react';

import { ProductCart } from '../../types/carts';

import CloseIcon from '../../assets/images/icons/close.svg';

interface IOrderTable {
  orders: ProductCart[];
}

const Cart: React.FC<IOrderTable> = ({ orders }) => {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead className="table w-full mb-12">
        <tr className="w-full font-second font-bold text-xl text-title">
          <th className="text-left w-order-product">Product</th>
          <th className="rowCell">Price</th>
          <th className="rowCell">Quantity</th>
          <th className="rowCell">Total</th>
        </tr>
      </thead>

      <tbody className="table w-full">
        {orders.map((order) => (
          <tr
            className="w-full cursor-pointer hover:bg-accent border-b-2 border-solid border-grey"
            key={order.id}
          >
            <td className="relative rowCell w-24 h-24 mb-3">
              <img src={order.thumbnail} alt={order.title} />

              <img className="absolute -top-1 right-2 w-3 h-3" src={CloseIcon} alt="Close Icons" />
            </td>
            <td className="w-56">
              <h5>{order.title}</h5>
              {/* <p>Color: {order.color}</p>
              <p>Size: {order.size}</p> */}
            </td>
            <td className="rowCell">£{order.price}</td>
            <td className="rowCell">{order.quantity}</td>
            <td className="rowCell">£{order.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
