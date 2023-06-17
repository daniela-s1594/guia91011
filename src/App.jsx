import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Principal from "./components/components1/Principal";
import ErrorPage from "./components/components1/ErrorPage";
import Counter from "./components/components1/Counter";
import ListaTareas from "./components/components1/ListaTareas";
import ApiGet from "./components/components1/Consumirapi"
// import DiceGame from "./components/components1/DiceGame"
// import Button1 from "./components/components1/BotonGracioso";
// import Avatar from "./components/components1/avatar"
// import './App.css'
// import './counter.css'
/*

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
        {
          path:"DiceGame/",
          element:<DiceGame/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"avatar/",
          element:<Avatar/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"Botongracioso/",
          element:<Button1/>,
          errorElement:<ErrorPage/>
        },
      ],
    }
  ]);
  return <RouterProvider router={router}/>;
}
*/

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
          path:"Listado/",
          element:<ListaTareas/>,
          errorElement:<ErrorPage/>,
        },
        {
          path:"Consumirapi/",
          element:<ApiGet/>,
          errorElement:<ErrorPage/>,
        },
        ]
    }
  ]);
  return <RouterProvider router ={router}/>
}