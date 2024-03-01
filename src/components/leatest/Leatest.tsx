import { SetStateAction, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchCategories } from '../../utils/fetchProducts';
import { Category } from '../../types/products';
import Products from './Products';

const Leatest = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ['categories'],
    // options: {
    //   keepPreviousData: true,
    // },
  });
  const [activeTab, setActiveTab] = useState<Category>('smartphones');

  const handleTabClick = (tab: SetStateAction<Category>) => {
    setActiveTab(tab);
  };

  if (isLoading) <h3>Loading...</h3>;

  if (!data) <h3>No data</h3>;

  return (
    <section className="pt-16 pb-14">
      <div className="container">
        <h2 className="font-second font-bold text-5xl text-center text-text">Leatest Products</h2>

        <div className="min-w-40 mt-5 mb-12">
          <ul className="flex justify-between items-center flex-wrap gap-12">
            {isSuccess &&
              data.map((category) => (
                <li
                  className={`font-main font-normal text-lg capitalize cursor-pointer hover:text-accent hover:underline transition-all duration-500 ease-in-out ${activeTab === category ? 'text-accent underline' : ''}`}
                  data-tab={category}
                  key={category}
                  onClick={() => handleTabClick(category)}>
                  {category}
                </li>
              ))}
          </ul>
        </div>

        {isSuccess &&
          data.map((category) => activeTab === category && <Products category={category} key={category} />)}
      </div>
    </section>
  );
};

export default Leatest;
