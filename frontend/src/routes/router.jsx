import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import CategoryPage from "../pages/Category/CategoryPage";
import Search from "../pages/Search/Search";

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
      }
    ]
  }
])

export default router