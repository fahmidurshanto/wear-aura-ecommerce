import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
