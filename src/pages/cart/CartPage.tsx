import { IOrder } from '../../types/products';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import Cart from '../../components/cart/Cart';
import CartTools from '../../components/cart/CartTools';

import Item1 from '../../assets/images/products/image_3.png';
import Item2 from '../../assets/images/products/image_1173.png';
import Item3 from '../../assets/images/products/image_1167.png';
import Item4 from '../../assets/images/products/image_1168.png';

const orders: IOrder[] = [
  {
    id: 1,
    title: 'Ut diam consequat',
    date: '07.12.2023',
    total: 930,
    status: 'Shipped',
    color: 'Brown',
    size: 'XL',
    price: 32,
    discountPercentage: 8,
    discountedPrice: 5,
    thumbnail: Item1,
    quantity: 2,
  },
  {
    id: 2,
    title: 'Vel faucibus posuere',
    date: '08.12.2023',
    total: 930,
    status: 'Delivered',
    color: 'Yellow',
    size: 'XL',
    price: 32,
    discountPercentage: 8,
    discountedPrice: 5,
    thumbnail: Item2,
    quantity: 1,
  },
  {
    id: 3,
    title: 'Ac vitae vestibulum',
    date: '21.10.2023',
    total: 930,
    status: 'Cancelled',
    color: 'Black',
    size: 'XL',
    price: 32,
    discountPercentage: 8,
    discountedPrice: 5,
    thumbnail: Item3,
    quantity: 3,
  },
  {
    id: 4,
    title: 'Elit massa diam',
    date: '01.09.2022',
    total: 930,
    status: 'Shipped',
    color: 'White',
    size: 'XL',
    price: 32,
    discountPercentage: 8,
    discountedPrice: 5,
    thumbnail: Item4,
    quantity: 1,
  },
];

const CartPage = () => {
  // const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <div className="bg-bg_product">
        <div className="container pt-24 pb-32">
          <h1 className="title-h1 mt-2">Shopping Cart</h1>
          <BreadCrumbs home="Home" page="Cart" />
        </div>
      </div>

      <div className="container pt-32 pb-36 flex justify-between items-start gap-5 bg-white">
        <Cart
          orders={orders}
        />
        <CartTools />
      </div>
    </section>
  );
};

export default CartPage;
