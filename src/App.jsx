import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import AppRoute from './Routes/AppRoute'
import Cart from './component/Cart'
import { MyStore } from './Context/MyContext'
import { ToastContainer, toast } from 'react-toastify';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


const App = () => {

  let {cartOpen} = useContext(MyStore);

  return (
    <div className='font-[Syne] w-full min-h-screen bg-black text-white'>
      <Navbar />
      <AppRoute />
      
        {
          cartOpen?<Cart/>:null
        }
      
     
      <Footer/>
      <LoginPage />
      <RegisterPage />
    </div>
  )
}

export default App