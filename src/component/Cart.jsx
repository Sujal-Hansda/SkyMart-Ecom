import { ArrowBigLeft, ArrowRight, ShoppingBag, Trash } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'

const Cart = () => {
  let {setCartItems,cartItems,setCartOpen} = useContext(MyStore);
  let increaseQuantity = (id)=>
  {
    setCartItems(cartItems.map((item)=>
    item.id === id?{...item,quantity:item.quantity+1}:item
    ))
  }
  let decreaseQuantity = (id)=>
  {
    setCartItems(cartItems.map((item)=>
    item.id === id?{...item,quantity:item.quantity-1}:item
    ))
  }
  let deleteProduct = (id)=>
  {
    setCartItems(cartItems.filter((item)=>item.id!==id))
  }
  const total = cartItems.reduce((sum,item)=>
  {
    return sum + item.price*item.quantity
  },0)
  const checkout = ()=>
  {
    setCartItems([]);
    alert("Order placed successfully!!!🎊");
  }
  const clearCart = ()=>
  {
    setCartItems([]);
  }
  return (
    <div className='z-50 top-0 right-0 fixed border-l w-140 h-screen bg-black'>
      <div className='p-8 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
        <ShoppingBag/>
        <p>Cart</p>
        <p className='text-[#D7F205] rounded-lg p-1 bg-[#d6f20534]'>{cartItems.length} items</p>
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
            <p className='text-[#D7F205] text-lg'>${(item.price*item.quantity).toFixed(2)}</p>
            <p className='text-gray-400 text-sm'>${item.price}each</p>
            <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-4 w-full'>
              <p onClick={()=>decreaseQuantity(item.id)} className='cursor-pointer border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>-</p>
              <p className='border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>{item.quantity}</p>
              <p  onClick={()=>increaseQuantity(item.id)} className='cursor-pointer border w-4 h-4 flex items-center justify-center border-gray-400 p-3 rounded-md'>+</p>
              </div>
              <div onClick={()=>deleteProduct(item.id)} className='cursor-pointer absolute right-10'>
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
            <p className='text-2xl'>${(total).toFixed(2)}</p>
          </div>
        <div onClick={checkout} className='cursor-pointer mt-2 bg-[#D7F205] text-black font-semibold rounded-2xl py-3 flex items-center justify-center'>
          <p>Checkout</p>
          <ArrowRight size={20}/>
        </div>
        <p onClick={clearCart} className='cursor-pointer mt-2 text-center text-gray-400'>Clear cart</p>
      </div>
      </div>
        
    </div>
  )
}

export default Cart