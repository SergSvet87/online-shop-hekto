// import { Category } from '../types/products.ts';
import { BASE_URL } from './constants.ts';

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}products/categories`);

  if (!res.ok) throw new Error('Failed to fetch categories!');

  return res.json();
}

export async function fetchCategory(category: string | null) {
  const res = await fetch(`${BASE_URL}products/category/${category}`);

  if (!res.ok) throw new Error('Failed to fetch category!');

  return res.json();
}
