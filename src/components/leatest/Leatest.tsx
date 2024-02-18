import { SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants.ts';

import styles from './Leatest.module.css';

const Leatest = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.leatest}>
      <div className={`container ${styles.leatest__container}`}>
        <h2 className={styles.leatest__title}>Leatest Products</h2>

        <div className={styles.leatest__inner_tabs}>
          <ul className={styles.leatest__tabs}>
            <li
              className={`${styles.tabs__item} ${activeTab === 'tab1' ? 'color: #fb2e86; text-decoration: underline' : 'color: #151875'}`}
              data-tab="#new"
              onClick={() => handleTabClick('tab1')}>
              New Arrival
            </li>
            <li
              className={`${styles.tabs__item} ${activeTab === 'tab2' ? 'color: #fb2e86; text-decoration: underline' : 'color: #151875'}`}
              data-tab="#best"
              onClick={() => handleTabClick('tab2')}>
              Best Seller
            </li>
            <li
              className={`${styles.tabs__item} ${activeTab === 'tab3' ? 'color: #fb2e86; text-decoration: underline' : 'color: #151875'}`}
              data-tab="#featured"
              onClick={() => handleTabClick('tab3')}>
              Featured
            </li>
            <li
              className={`${styles.tabs__item} ${activeTab === 'tab4' ? 'color: #fb2e86; text-decoration: underline' : 'color: #151875'}`}
              data-tab="#special"
              onClick={() => handleTabClick('tab4')}>
              Special Offer
            </li>
          </ul>
        </div>

        {activeTab === 'tab1' && (
          <ul className={styles.leatest__products}>
            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>
          </ul>
        )}

        {activeTab === 'tab2' && (
          <ul className={styles.leatest__products}>
            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>
          </ul>
        )}

        {activeTab === 'tab3' && (
          <ul className={styles.leatest__products}>
            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>
          </ul>
        )}

        {activeTab === 'tab4' && (
          <ul className={styles.leatest__products}>
            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>

            <li className={styles.products__item}>
              <div className={styles.item__img}>
                <img src="../../assets/images/products/image 1167.png" alt="" />
              </div>
              <div className={styles.item__text}>
                <NavLink to={ROUTES.productId}>
                  <h4 className={styles.title}>Comfort Handy Craft</h4>
                </NavLink>
                <div className={styles.price}>
                  <p className={styles.price__new}>$42.00</p>
                  <p className={styles.price__old}>$65.00</p>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Leatest;
