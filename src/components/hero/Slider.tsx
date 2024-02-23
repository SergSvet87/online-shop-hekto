import { NavLink } from 'react-router-dom';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Sofa from '../../assets/images/hero/sofa_promotional.png';
import { ROUTES } from '../../utils/constants';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    subtitle: 'Best Furniture For Your Castle....',
    title: 'New Furniture Collection Trends in 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    image: Sofa,
  },

  {
    id: 2,
    subtitle: 'Best Furniture....',
    title: 'New Collection in 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    image: Sofa,
  },

  {
    id: 3,
    subtitle: 'For Your Castle....',
    title: 'New Trends in 2024',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    image: Sofa,
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      speed={800}
      loop={true}
      spaceBetween={500}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} swiper-pagination-bullet-active slider__bullet !ml-2 !mr-2 hover:border-second"></span>`;
        },
      }}>
      {slides.map((slide) => (
        <SwiperSlide className="flex items-center justify-between gap-x-8" key={slide.id}>
          <div className="flex-1 basis-7/12">
            <p className="title-h3 font-bold text-base leading-relaxed">{slide.subtitle}</p>
            <h1 className="title-h1 mt-3 font-bold text-black tracking-wider">{slide.title}</h1>
            <p className="font-main font-bold text-base text-sub-text-color mb-7 leading-relaxed">{slide.text}</p>

            <NavLink
              className="pt-4 pb-4 pr-10 pl-10 rounded-sm bg-accent font-second font-semibold text-lg text-white tracking-wider"
              to={ROUTES.shop}>
              Shop Now
            </NavLink>
          </div>

          <div className="h-slider-img p-40 relative flex-shrink-0 basis-5/12">
            <img
              className="h-full w-12/12 absolute top-0 -right-16"
              src={slide.image}
              alt={slide.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
