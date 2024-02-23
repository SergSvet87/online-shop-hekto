import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '../../utils/fetchCategories';
import { ICategory, IProducts } from '../../types/products';
import Product from './Product';

const Products: React.FC<ICategory> = ({ item }) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchCategory(item),
    queryKey: ['category', item],
    // options: {
    //   keepPreviousData: true,
    // },
  });

  if (isLoading) <h3>Loading...</h3>;

  if (!data) <h3>No data</h3>;

  return (
    <ul className="grid grid-cols-3 gap-x-9 gap-y-28">
      {isSuccess &&
        data.products.map((item: IProducts) => (
          <Product
            id={item.id}
            image={item.images[0]}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        ))}
    </ul>
  );
};

export default Products;
