export interface IProductsItem {
  id: number;
  name: string;
  title: string;
  price: number;
  images: [];
}

export interface ITab {
  activeTab: string;
  onTabClick: (page: string) => void;
}

export interface ICategory {
  category: [];
}

export interface IOrder {
  id: number;
  number: string;
  date: string;
  total: string;
  status: string;
  address: string;
  recipient: string;
  phone: string;
}