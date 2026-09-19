import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import MainLayout from '../Layout/MainLayout'
import AuthLayout from '../Layout/AuthLayout'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/RegisterPage'
import ProtectedRoute from './ProtectedRoute'
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
































// import React from 'react'
// import Home from '../pages/Home';
// import Shop from '../pages/Shop';
// import About from '../pages/About';
// import { Route,Routes } from 'react-router'
// import ProductDetail from '../component/ProductDetailCard';
// import ProductDetailCard from '../component/ProductDetailCard';
// import LoginPage from '../pages/loginPage';
// import RegisterPage from '../pages/RegisterPage';


// const AppRoute = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/shop' element={<Shop/> }/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/detail/:id' element={<ProductDetailCard />}/>
//         <Route path='/login' element={<LoginPage />}/>
//         <Route path='/register' element={<RegisterPage />}/>
//       </Routes> 
//     </div>
//   )
// }

// export default AppRoute