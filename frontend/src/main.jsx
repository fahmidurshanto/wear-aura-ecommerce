import { createRoot } from 'react-dom/client'
import './index.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
import { Provider} from "react-redux";
import { store } from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
