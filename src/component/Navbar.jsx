import React, { useContext } from 'react'
import { Zap,ShoppingCart,LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import { MyStore } from '../Context/MyContext'

const Navbar = () => {

  let { setCartOpen } = useContext(MyStore);

  return (
    <div className='px-45 py-3 flex justify-between items-center'>
      <div className='cursor-pointer flex items-center justify-between gap-2'>
        <div className='bg-[#D7F205] p-1 rounded-lg'>
          <Zap fill='black' color='black' size={20}/>
        </div>
        <h1 className='text-xl font-bold'>Sky<span className='text-[#D7F205]'>Mart</span></h1>
      </div>
      <div className='font-semibold flex gap-10'>
      <NavLink
       className={({isActive})=> isActive?"cursor-pointer text-sm text-[#D7F205]":"cursor-pointer text-gray-400 text-sm"} 
       to="/"
       end
       >Home</NavLink>
      <NavLink 
       className={({isActive})=> isActive?"cursor-pointer text-sm text-[#D7F205]":"cursor-pointer text-gray-400 text-sm"} 
      to="/shop"
      
      >Shop</NavLink>
      <NavLink 
       className={({isActive})=> isActive?"cursor-pointer text-sm text-[#D7F205]":"cursor-pointer text-gray-400 text-sm"} 
      to="/about"
      
      >About</NavLink>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div className='bg-[#1C1C1C] gap-2 border border-[#403E3E] p-2 rounded-lg flex items-center justify-between  '>
          <p className='text-black rounded-xl px-2.5 font-semibold py-0.5 bg-[#D7F205]'>S</p>
          <h1 className='text-white text-sm font-semibold' >Sujal Hansda</h1>
        </div>
        <div onClick={()=>setCartOpen(true)} className=' flex py-2 rounded-lg px-2 border border-[#403E3E]'>
          <button><ShoppingCart className='cursor-pointer' size={20} /></button>
        </div>
        <div  className=' flex py-2 rounded-lg px-2 border border-[#403E3E]'>
          <button><LogOut className='cursor-pointer' size={20}/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar