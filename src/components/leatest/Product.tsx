import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import { IProductsItem } from '../../types/products';

import Sale from '../../assets/images/products/sale.png';
import Search from '../../assets/images/products/search.svg';
import Heart from '../../assets/images/products/heart.svg';
import Cart from '../../assets/images/products/cart.svg';

const Product: React.FC<IProductsItem> = ({ id, title, price, image }) => {
  const [isShow, setIsShow] = useState(false);
  const [currentActive, setActive] = useState<number | null>(null);

  const handleShow = (id: number) => {
    if (id === id) {
      setActive(id);
      setIsShow(true);
    }
  };

  const handleHidden = () => {
    setActive(null);
    setIsShow(false);
  };

  return (
    <li className="flex flex-col">
      <div
        className={`relative flex items-center w-full h-72 bg-bg_product ${isShow && currentActive === id ? 'bg-white transition-all duration-300 ease-in-out' : ''}`}
        onMouseEnter={() => handleShow(id)}
        onMouseLeave={handleHidden}>
        <img className="w-56 h-60 m-auto object-cover" src={image} alt={title} />

        <div className={`product__visible ${isShow && currentActive === id ? 'visible' : ''}`}>
          <img className="w-20 h-14" src={Sale} alt="Sale" />

          <div className="flex flex-col gap-y-4">
            <div className="w-8 h-8 flex items-center justify-center bg-transparent cursor-pointer rounded-2xl hover:bg-bg_product transition-all duration-300 ease-in-out">
              <img className="w-4 h-4" src={Cart} alt="Cart" />
            </div>

            <div className="w-8 h-8 flex items-center justify-center bg-transparent cursor-pointer rounded-2xl hover:bg-bg_product transition-all duration-500 ease-in-out">
              <img className="w-4 h-4" src={Heart} alt="Heart" />
            </div>

            <div className="w-8 h-8 flex items-center justify-center bg-transparent cursor-pointer rounded-2xl hover:bg-bg_product transition-all duration-500 ease-in-out">
              <img className="w-4 h-4" src={Search} alt="Search" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-around font-second font-normal text-lg text-text">
        <NavLink to={ROUTES.productId}>
          <h4>{title}</h4>
        </NavLink>
        <div className="flex items-end gap-3">
          <p>${price}</p>
          {/* <p className='text-price-tag-color text-sm line-through'>$65.00</p> */}
        </div>
      </div>
    </li>
  );
};

export default Product;
