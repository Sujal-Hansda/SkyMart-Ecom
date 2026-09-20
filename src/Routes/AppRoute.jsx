import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import MainLayout from '../Layout/MainLayout'
import AuthLayout from '../Layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProductDetailCard from "../component/ProductDetailCard"
const AppRoute = () => {

  let router = createBrowserRouter([
    {
      path:"/",
      element:<AuthLayout/>,
      children:[
        {
          path:"",
          element:<LoginPage/>
        },
        {
          path:"register",
          element:<RegisterPage/>
        }
      ]
    },
    {
      path:"/main",
      element:<MainLayout/>,
      children:[
      {
        path:"",
        element:<Home />
      }
    ]
    },
    {
      path:"/shop",
      element:<MainLayout/>,
      children:[{
        path:"",
        element:<Shop/>
      }]
    },
    {
      path:"/about",
      element:<MainLayout/>,
      children:[{
        path:"",
        element:<About/>
      }]
    },
      {
    path: "/detail/:id",
    element: <MainLayout />,
    children:[{
      path:"",
      element:<ProductDetailCard/>
    }]
  }
  ])


  return <RouterProvider router={router}/>
}

export default AppRoute





























