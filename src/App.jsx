import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Principal from "./components/components1/Principal";
import ErrorPage from "./components/components1/ErrorPage";
import Counter from "./components/components1/Counter";
import ListaTareas from "./components/components1/ListaTareas";

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Principal/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path:"contar/",
          element:<Counter/>
        },
        {
          path: "listado/",
          element:<ListaTareas/>,
          errorElement:<ErrorPage/>
        },
      ],
    }
  ]);
  return <RouterProvider router={router}/>;
}