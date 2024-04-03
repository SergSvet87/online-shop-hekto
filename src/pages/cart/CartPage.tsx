import { useQuery } from '@tanstack/react-query';

import { fetchProductsCart } from '../../utils/fetchCart';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import Cart from '../../components/cart/Cart';
import CartTools from '../../components/cart/CartTools';

const CartPage = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryFn: () => fetchProductsCart(5),
    queryKey: ['categories'],
  });

  if (isLoading) <h3>Loading...</h3>;

  if (isError) {
    console.error(`Something went wrong!`);
  }

  return (
    <section>
      <div className="bg-bg_product">
        <div className="container pt-24 pb-32">
          <h1 className="title-h1 mt-2">Shopping Cart</h1>
          <BreadCrumbs home="Home" page="Cart" />
        </div>
      </div>

      {isError ? (
        <h3 className="container pt-6 pb-6 flex justify-center items-center text-2xl text-black font-bold bg-white">Something went wrong!</h3>
      ) : (
        isSuccess && (
          <div className="container pt-32 pb-36 flex justify-between items-start gap-5 bg-white">
            {!data ? (
              <h3 className="text-center">Cart Empty</h3>
            ) : (
              <Cart cartData={data.carts[0].products} />
            )}
            {!data ? (
              <CartTools total={0} totalProducts={0} />
            ) : (
              <CartTools total={data.carts[0].total} totalProducts={data.carts[0].totalProducts} />
            )}
          </div>
        )
      )}
    </section>
  );
};

export default CartPage;
