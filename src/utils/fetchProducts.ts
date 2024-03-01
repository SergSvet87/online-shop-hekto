import { Category, Products } from '../types/products';
import { BASE_URL } from './constants';

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}products/categories`);

  if (!res.ok) throw new Error('Failed to fetch categories!');

  return res.json();
}

export async function fetchProductsByCategory(category: Category): Promise<Products> {
  const res = await fetch(`${BASE_URL}products/category/${category}`);

  if (!res.ok) throw new Error('Failed to fetch category!');

  return res.json();
}
