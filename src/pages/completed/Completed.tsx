import React from 'react';
import { NavLink } from 'react-router-dom';

import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs.tsx';
import { ROUTES } from '../../utils/constants.ts';

import Clock from '../../assets/images/completed/clock.svg';
import CheckList from '../../assets/images/completed/checklist.svg';
import Ellipse from '../../assets/images/completed/ellipse.svg';
import Ok from '../../assets/images/completed/ok.svg';
import Brands from '../../assets/images/completed/image.png';

const Completed = () => {
  return (
    <section>
      <div className="bg-bg_product">
        <div className="container pt-24 pb-32">
          <h1 className="title-h1 mt-2">Order Completed</h1>
          <BreadCrumbs home='Home' page="Order Completed" />
        </div>
      </div>

      <div className="container relative pt-32 pb-20 flex justify-center items-center gap-5 bg-white">
        <img className="block absolute top-40 left-2" src={Clock} alt="Clock" />
        <img className="block absolute bottom-1/2 right-0" src={CheckList} alt="CheckList" />

        <div className="relative mb-8 text-center">
          <img className="block" src={Ellipse} alt="Ellipse" />
          <img className="block absolute top-0 left-1/2 w-full h-full" src={Ok} alt="Ok" />
        </div>

        <h2 className="title-h1 mb-7">Your Order Is Completed! </h2>
        <p className='mb-5 font-main font-semibold text-base text-grey-text'>
          Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.
        </p>
        <NavLink className="mb-44 font-main font-semibold text-base text-white " to={ROUTES.shop}>
          Continue Shopping
        </NavLink>

        <img className='w-full' src={Brands} alt="Brands" />
      </div>
    </section>
  );
};

export default Completed;
