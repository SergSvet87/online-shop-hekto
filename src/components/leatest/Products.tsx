import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Sale from '../../assets/images/products/sale.png';
import Search from '../../assets/images/products/search.svg';
import Heart from '../../assets/images/products/heart.svg';
import Cart from '../../assets/images/products/cart.svg';

import { BASE_URL, ROUTES } from '../../utils/constants.ts';
import { IProductsItem, ICategory } from '../../types/products.ts';

import styles from './Leatest.module.css';

const Products = ({category}: ICategory) => {
  const [categoryItem, setDataItem] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios.get(BASE_URL + `products/category/${category}`).then((data) => setDataItem(data.data.products));
  }, [category, categoryItem]);

  // const handleShow = (id) => {
  //  categoryItem.forEach((item) => item.id === id ?  setIsShow(true) :  setIsShow(false))
  // }

  return (
    <ul className={styles.leatest__products}>
      {categoryItem.map((item: IProductsItem) => (
        <li className={styles.products__item} key={item.id}>
          <div
            className={`${styles.item__img} ${isShow ? styles.item__img_show : ''}`}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}>
            <img src={item.images[0]} alt="" />

            {isShow && (
              <div className={styles.item__img_sale}>
                <img className={styles.img__sale} src={Sale} alt="Sale" />

                <div className={styles.item__img_icons}>
                  <div className={styles.img__wrapper}>
                    <img src={Cart} alt="Cart" />
                  </div>

                  <div className={styles.img__wrapper}>
                    <img src={Heart} alt="Heart" />
                  </div>

                  <div className={styles.img__wrapper}>
                    <img src={Search} alt="Search" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.item__text}>
            <NavLink to={ROUTES.productId}>
              <h4 className={styles.title}>{item.title}</h4>
            </NavLink>
            <div className={styles.price}>
              <p className={styles.price__new}>${item.price}</p>
              {/* <p className={styles.price__old}>$65.00</p> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
