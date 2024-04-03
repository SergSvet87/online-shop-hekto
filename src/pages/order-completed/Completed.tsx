import { NavLink } from 'react-router-dom';

import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.tsx';
import { ROUTES } from '../../utils/constants.ts';

import Clock from '../../assets/images/completed/clock.svg?react';
import CheckList from '../../assets/images/completed/checklist.svg?react';
import Ok from '../../assets/images/completed/ok.svg?react';
import Brands from '../../assets/images/completed/image.png';

const Completed = () => {
  return (
    <section>
      <div className="bg-bg_product">
        <div className="container pt-24 pb-32">
          <h1 className="title-h1 mt-2">Order Completed</h1>
          <BreadCrumbs home="Home" page="Order Completed" />
        </div>
      </div>

      <div className="container relative pt-32 pb-20 flex flex-col justify-center items-center gap-5 bg-white">
        <Clock className="w-24 absolute top-40 left-0" />
        <CheckList className="w-24 absolute bottom-1/2 right-0" />

        <div className="mb-8">
          <Ok className="top-2 left-0 " />
        </div>

        <h2 className="title-h1 mb-7">Your Order Is Completed! </h2>
        <p className="w-completed-container mb-5 font-main font-semibold text-base text-grey-text">
          Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.
        </p>

        <NavLink
          className="mb-44 px-6 py-3 font-main font-semibold text-base  bg-accent rounded-sm text-center text-white hover:bg-sky-blue"
          to={ROUTES.shop}>
          Continue Shopping
        </NavLink>

        <img className="w-full" src={Brands} alt="Brands" />
      </div>
    </section>
  );
};

export default Completed;
