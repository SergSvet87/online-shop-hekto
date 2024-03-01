export type Category =
  'smartphones'
  | 'laptops'
  | 'fragrances'
  | 'skincare'
  | 'groceries'
  | 'home-decoration'
  | 'furniture'
  | 'tops'
  | 'womens-dresses'
  | 'womens-shoes'
  | 'mens-shirts'
  | 'mens-shoes'
  | 'mens-watches'
  | 'womens-watches'
  | 'womens-bags'
  | 'womens-jewellery'
  | 'sunglasses'
  | 'automotive'
  | 'motorcycle'
  | 'lighting';

export type ProductsItem = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
};

export type Products = {
  products: ProductsItem[],
  total: number,
  skip: number,
  limit: number,
};

export interface IOrder {
  id: number;
  title: string;
  date: string;
  total: number;
  status: string;
  color: string;
  size: string;
  price: number;
  discountPercentage: number,
  discountedPrice: number,
  thumbnail: string,
  quantity: number;
}
