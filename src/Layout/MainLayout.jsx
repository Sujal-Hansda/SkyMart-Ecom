import React, { useCallback, useContext } from 'react'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Cart from '../component/Cart'
import { MyStore } from '../Context/MyContext'


const MainLayout = () => {
  let {cartOpen} = useContext(MyStore);
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
      {cartOpen && <Cart />}
    </div>
  )
}

export default MainLayout