import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Principal from "./components/components1/Principal";
import ErrorPage from "./components/components1/ErrorPage";
import Counter from "./components/components1/Counter";
import ListaTareas from "./components/components1/ListaTareas";
import Frutas from "./components/components1/Frutas"
import Button1 from "./components/components1/BotonGracioso";
import Avatar from "./components/components1/avatar"

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
          path: "listado Tareas/",
          element:<ListaTareas/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"frutas/",
          element:<Frutas/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"avatar/",
          element:<Avatar/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"botongracioso/",
          element:<Button1/>,
          errorElement:<ErrorPage/>
        },
      ],
    }
  ]);
  return <RouterProvider router={router}/>;
}