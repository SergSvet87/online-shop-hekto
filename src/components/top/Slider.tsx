import { NavLink } from 'react-router-dom';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';

import Sofa from '../../assets/images/hero/sofa_promotional.png';
import Svg from '../../assets/images/hero/stroke.svg';
import { ROUTES } from '../../utils/constants';
import { fetchCategories } from '../../utils/fetchCategories.ts';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'New Furniture Collection Trends in 2020',
    price: 55,
    image: Sofa,
  },

  {
    id: 2,
    title: 'New Collection in 2021',
    price: 57,
    image: Sofa,
  },

  {
    id: 3,
    title: 'New Trends in 2024',
    price: 59,
    image: Sofa,
  },

  {
    id: 4,
    title: 'Mini LCW Chair',
    price: 51,
    image: Sofa,
  },
];

const Slider = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ['categories'],
    // options: {
    //   keepPreviousData: true,
    // },
  });

  if (isLoading) <h3>Loading...</h3>;

  if (!data) <h3>No data</h3>;

  return (
    <Swiper
      modules={[Pagination, A11y]}
      speed={800}
      loop={true}
      spaceBetween={800}
      slidesPerView={4}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} swiper-pagination-bullet-active slider__bullet !ml-2 !mr-2 rounded-full hover:border-second"></span>`;
        },
      }}>
      {isSuccess &&
        data.map((category: string) => (
          <SwiperSlide className="flex gap-x-10 h-96" key={category}>
            {slides.map((slide) => (
              <div className="flex flex-col w-72 h-80" key={slide.id}>
                <div className="relative mb-7 flex justify-center fill-stroke shadow-top rounded-full">
                  <img className="w-44 h-44" src={slide.image} alt={slide.title} />

                  <div className="absolute left-0 top-0 hidden">
                    <img className="relative" src={Svg} alt="Stroke" />
                    <NavLink
                      className="absolute left-0 bottom-5 pt-2 pb-2 pr-5 pl-5 font-second font-normal bg-green text-white rounded-sm"
                      to={ROUTES.shop}>
                      View Shop
                    </NavLink>
                  </div>
                </div>

                <div className="flex flex-col min-h-10 h-full">
                  <h3 className="title-h3 mb-3 page">{slide.title}</h3>

                  <p className="font-second font-normal text-base text-center text-text">
                    ${slide.price}
                  </p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
