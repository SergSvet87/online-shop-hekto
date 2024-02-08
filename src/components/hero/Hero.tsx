import { NavLink } from 'react-router-dom';

import Sofa from '../../assets/images/hero/sofa_promotional.png';
import { ROUTES } from '../../utils/constants.ts';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <p className={`title-h3 ${styles.hero__subtitle}`}>Best Furniture For Your Castle....</p>
          <h1 className={`title-h1 ${styles.hero__title}`}>New Furniture Collection Trends in 2020</h1>
          <p className={styles.hero__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>

          <NavLink className={styles.hero__btn} to={ROUTES.shop}>Shop Now</NavLink>
        </div>

        <div className={styles.hero__img}>
          <img src={Sofa} alt="sofa promotional" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
