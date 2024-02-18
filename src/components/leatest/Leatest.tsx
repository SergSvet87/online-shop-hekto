import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

// import Product from '../../assets/images/products/image_1167.png';

import { BASE_URL } from '../../utils/constants.ts';
// import { ICategory, ITab } from '../../types/products.ts';
import Products from './Products.tsx';

import styles from './Leatest.module.css';

const Leatest = () => {
  const [categories, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('smartphones');

  useEffect(() => {
    axios.get(BASE_URL + `products/categories`).then((data) => setData(data.data));
  }, [categories]);

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.leatest}>
      <div className={`container ${styles.leatest__container}`}>
        <h2 className={styles.leatest__title}>Leatest Products</h2>

        <div className={styles.leatest__inner_tabs}>
          <ul className={styles.leatest__tabs}>
            {categories.map((item) => (
              <li
                className={`${styles.tabs__item} ${activeTab === item ? 'color: #fb2e86; text-decoration: underline' : 'color: #151875'}`}
                data-tab="#new"
                key={item}
                onClick={() => handleTabClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {categories.map(
          (item) =>
            activeTab === item && (
              <Products category={item} key={item} />
            )
        )}
      </div>
    </section>
  );
};

export default Leatest;
