import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/constants";

import HomePage from '../../pages/home/HomePage';
import ProductPage from '../../pages/product/ProductPage';
import Cart from "../../pages/cart/CartPage";
import Shop from '../../pages/shop/Shop';
import Category from '../../pages/category/Category';
import Login from '../../pages/auth/login/Login';
import Register from '../../pages/auth/register/Register';
import Contact from '../../pages/contact/Contact';
import Blog from '../../pages/blog/Blog';
import Order from '../../pages/order/Order';
import Completed from '../../pages/order-completed/Completed';

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path={ROUTES.productId} element={<ProductPage />} />
    <Route path={ROUTES.cart} element={<Cart />} />
    <Route path={ROUTES.shop} element={<Shop />} /> 
    <Route path={ROUTES.order} element={<Order />} />
    <Route path={ROUTES.completed} element={<Completed />} />
    <Route path={ROUTES.category} element={<Category />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.register} element={<Register />} />
    <Route path={ROUTES.blog} element={<Blog />} />
    <Route path={ROUTES.contact} element={<Contact />} />
    {/* <Route path={ROUTES.products} element={<Products />} /> */}
    {/* <Route path={ROUTES.pages} element={<Pages />} /> */}
    {/* <Route path={ROUTES.profile} element={<Profile />} /> */}
  </Routes>
);

export default AppRoutes;