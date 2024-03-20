import { Carts, Cart } from '../types/cart.ts';
import { BASE_URL } from './constants.ts';

export async function fetchProductsCart(id: number): Promise<Carts> {
  const res = await fetch(`${BASE_URL}carts/user/${id}`);

  if (!res.ok) throw new Error('Failed to fetch products cart!');    

  return res.json();
}

export async function fetchAddCart(): Promise<Cart> {
  const res = await fetch(`${BASE_URL}carts/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
      ],
    }),
  });

  if (!res.ok) throw new Error('Failed add product cart!');

  return res.json();
}
