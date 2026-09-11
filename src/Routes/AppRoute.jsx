import React from 'react'
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import About from '../pages/About';
import { Route,Routes } from 'react-router'
import ProductDetail from '../component/ProductDetailCard';
import ProductDetailCard from '../component/ProductDetailCard';


const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<ProductDetailCard />}/>
      </Routes>
    </div>
  )
}

export default AppRoute