import { ArrowBigLeft, ArrowRight, ShoppingBag, Trash } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'

const Cart = () => {
  let {cartItems,setCartOpen} = useContext(MyStore);

  return (
    <div className='z-50 top-0 right-0 fixed border-l w-140 h-screen bg-black'>
      <div className='p-8 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
        <ShoppingBag/>
        <p>Cart</p>
        <p className='text-[#D7F205] rounded-lg p-1 bg-[#d6f20534]'>3 items</p>
      </div>
      <p onClick={()=>
        {
          setCartOpen(false);
        }
      } className='cursor-pointer font-semibold text-2xl'>X</p>
      </div>
      <div className='h-px w-full bg-white'></div>
      <div className='p-6 h-[calc(100vh-250px)] overflow-y-auto relative'>
        {
          cartItems.map((item,index)=>
          (
                <div key={index} className='p-6 mb-1 flex gap-2 border rounded-xl'>
          <div className='h-15 w-15 '>
            <img className='object-cover rounded-lg' src={item.image} alt="" />
          </div>
          <div>
            <p>{item.title}</p>
            <p className='text-[#D7F205] text-lg'>${item.price}</p>
            <p className='text-gray-400 text-sm'>$119.99 each</p>
            <div className='w-full flex items-center justify-between'>
              <div className='flex items-center justify-between w-full gap-4'>
              <p className='cursor-pointer border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>-</p>
              <p className='border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>2</p>
              <p className='cursor-pointer border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>+</p>
              </div>
              <div className='cursor-pointer absolute right-10'>
                <Trash  size={20}/>
              </div>
              
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <div className='bg-black absolute w-full bottom-0'>
        <div className='h-px bg-white'></div>
        <div className='p-6 '>
          <div className='flex items-center justify-between'>
            <p className='text-lg text-gray-400'>Total</p>
            <p className='text-2xl'>$498.36</p>
          </div>
        <div className='cursor-pointer mt-2 bg-[#D7F205] text-black font-semibold rounded-2xl py-3 flex items-center justify-center'>
          <p>Checkout</p>
          <ArrowRight size={20}/>
        </div>
        <p className='cursor-pointer mt-2 text-center text-gray-400'>Clear cart</p>
      </div>
      </div>
        
    </div>
  )
}

export default Cart