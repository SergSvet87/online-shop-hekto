import { useQuery } from '@tanstack/react-query';

import { fetchProductsByCategory } from '../../utils/fetchProducts';
import { Category, ProductsItem } from '../../types/products';
import Product from './Product';

type ProductProps = {
  category: Category,
}

const Products: React.FC<ProductProps> = ({ category }) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchProductsByCategory(category),
    queryKey: ['category', category],
    // options: {
    //   keepPreviousData: true,
    // },
  });

  if (isLoading) <h3>Loading...</h3>;

  if (!data) <h3>No data</h3>;

  return (
    <ul className="grid grid-cols-3 gap-x-9 gap-y-28">
      {isSuccess &&
        data?.products.map((item: ProductsItem) => (
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
