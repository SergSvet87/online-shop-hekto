export type Category = {
  category: string | null,
};

export interface ICategory {
  item: string;
}

export interface IProductsItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IProducts {
  id: number;
  name: string;
  title: string;
  price: number;
  images: string[];
}

export interface ITab {
  activeTab: string;
  onTabClick: (page: string) => void;
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  total: string;
  status: string;
  color: string;
  size: string;
  price: number;
  img: string;
  quantity: number;
}
