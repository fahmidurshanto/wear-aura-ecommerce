import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import CategoryPage from "../pages/Category/CategoryPage";
import Search from "../pages/Search/Search";
import ShopPage from "../pages/Shop/ShopPage";
import SingleProduct from "../pages/Shop/ProductDetails/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage></CategoryPage>
      },
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>
      },
      {
        path: '/shop/:id',
        element: <SingleProduct></SingleProduct>
      }
    ]
  }
])

export default router