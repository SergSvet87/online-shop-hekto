import { createHashRouter } from 'react-router-dom';

import { PATHS } from './utils/constants.js/index.ts';
import { loaderProductDetails } from './loaderProductDetails.js';
import { loaderProductsBySearch } from './loaderProductsBySearch.js';
// import { loaderProductsByCategories } from './utils/loaderProductsByCategories';
import { Layout } from '../layout.jsx';

import { HomePage } from '../pages/home/HomePage.jsx';
import { AboutPage } from './pages/about/AboutPage';
import { ProductPage } from '../pages/product-details/ProductPage.tsx';
import { SearchResultPage } from './pages/searchResult/searchResultPage';

export const router = createHashRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.about,
        element: <AboutPage />,
      },
      {
        path: PATHS.movieId(),
        element: <ProductPage />,
        loader: loaderProductDetails,
      },
      {
        path: PATHS.search(),
        element: <SearchResultPage />,
        loader: loaderProductsBySearch,
      },
    ],
  },
]);
