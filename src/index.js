import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import AllHome from "./home/AllHome";
import About from "./About/About";
import { CartProvider } from "react-use-cart";
import Contact from "./ContactUs/Contact";
import Products from "./AllProducts/Products";
import Programe2 from "./Programe2";
import Shopping from "./AllShopping/Shopping";
import AllCart from "./Cart/AllCart";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
    
  },
  {
    path: "/home",
    element: <AllHome></AllHome>
    
  },
  {
    path: "/about",
    element:<About></About>
  },
  {
    path: "/programs",
    element:<Programe2  ></Programe2>
  },
  {
    path: "/contact",
    element:<Contact></Contact>
  },
  // {
  //   path: "/product",
  //   element:<Products></Products>
  // },
  {
    path: "/shopping",
    element:<Shopping></Shopping>
  },
  {
    path: "/cart",
    element:<AllCart></AllCart>
  },


  
  
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
);