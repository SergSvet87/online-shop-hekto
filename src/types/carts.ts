export type ProductCart = {
  id: number,
  title: string,
  total: number,
  discountPercentage: number,
  discountedPrice: number,
  thumbnail: string,
  price: number,
  quantity: number,
};

export type Carts = [
  {
    id: number,
    products: ProductCart[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number,
  },
];
