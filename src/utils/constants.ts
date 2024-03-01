import { Routes } from '../types/routes';

export const ROUTES: Routes = {
  home: '/',
  pages: '/pages',
  products: '/products',
  shop: '/shop',
  cart: '/cart',
  category: '/category/:name',
  productId: '/products/:id',
  search: '/products/:name',
  login: '/auth/login',
  register: '/auth/register',
  blog: '/blog',
  contact: '/contact',
};

export const NAV = ['home', 'pages', 'products', 'blog', 'shop', 'contact'];

export const PAGES = [
  'Category',
  'Pre-Built Pages',
  'Visual Composer Elements',
  'Blog',
  'Browse the Shop',
  'WooCommerce Pages',
];

export const CATEGORIES = [
  'Laptops & Computers',
  'Cameras & Photography',
  'Smart Phones & Tablets',
  'Video Games & Consoles',
  'Waterproof Headphones',
];

export const CUSTOMER = [
  'My Account',
  'Discount',
  'Returns',
  'Orders History',
  'Order Tracking',
];

export const BASE_URL = 'https://dummyjson.com/';
