import axios from 'axios';
import { Heart, Truck, Star, Shield,RotateCcw, ArrowRight, ChevronRight, ShoppingCart } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { MyStore } from '../Context/MyContext';

const ProductDetailCard = () => {  
  const [singleProductData, setSingleProductData] = useState({});
  let { cartItems,setCartItems,setCartOpen } = useContext(MyStore);
  let {id} = useParams();
  let getSingleProdutData  = async()=>
{
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Error in API",error);
      
    }
}
useEffect(()=>
{
  getSingleProdutData();
},[])

const existingProduct = cartItems.find((item)=>item.id===singleProductData.id); 
  const addToCart = ()=>
  {
    if (existingProduct)
    {
      setCartItems([...cartItems.map((item)=>
      item.id === singleProductData.id?{
        ...item,
        quantity:item.quantity+1
      }:item)])
    }
    else
    {
      setCartItems([...cartItems,{...singleProductData,quantity:1}])
    }
    setCartOpen(true);
  }
  
  
  
 return (
      <div>
            <div className="mx-auto flex min-h-[550px] max-w-6xl gap-12 rounded-3xl bg-[#111] p-8 text-white">
      {/* Product Image */}
      <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#e5e1e1]/10 p-10">
        <img
          src={singleProductData.image}
          alt={singleProductData.title}
          className="h-[420px] w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex w-1/2 flex-col justify-center">

        {/* Category */}
        <p className="p-1 rounded-lg w-fit bg-[#d6f2052d] text-[#D7F205] mb-3 text-sm capitalize ">
          {singleProductData.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight">
          {singleProductData.title}
        </h1>

        {/* Rating */}
        <div className="p-2 mt-5 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1">
            <Star
              size={17}
              fill="currentColor"
              className="text-yellow-400"
            />
            <span>{singleProductData.rating?.rate}</span>
          </div>

          <span className="text-sm text-gray-400">
            {singleProductData.rating?.count} reviews
          </span>
        </div>

        <div className='h-px w-full bg-white '></div>
                {/* Price */}
        <p className="text-[#D7F205] pt-3 pb-3 text-3xl font-bold">
          ${(singleProductData.price)}
        </p>
        <div className='h-px w-full bg-white '></div>


        {/* Description */}
        <p className="mt-5 max-w-xl leading-7 text-gray-400">
          {singleProductData.description}
        </p>

        <div className='w-full flex items-center justify-between'>
                  {/* Button */}                
          <div onClick={addToCart} className="flex items-center justify-center gap-2 cursor-pointer w-110 rounded-xl bg- px-6 py-3 font-semibold bg-[#D7F205] text-black transition hover:bg-gray-200">
          <ShoppingCart size={20}/>
          <p>Add to Cart</p>          
          </div>
               
          <div className='cursor-pointer w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center'>
          <Heart />
          </div>
        </div>
        <div className='mt-5 flex items-center justify-between gap-4'>
          <div className=' py-3 flex flex-col items-center justify-center  w-45 border rounded-lg'> 
            <Truck size={18} color='#D7F205'/>
            <p className='md'>Free Delivery</p>
            <p className='text-gray-500 text-sm'>On orders $50+</p>
          </div>
          <div className=' py-3 flex flex-col items-center justify-center  w-45 border rounded-lg'> 
            <Shield size={18} color='#D7F205'/>
            <p className='md'>Secure Pay</p>
            <p className='text-gray-500 text-sm'>256-bit-SSL</p>
          </div>
          <div className=' py-3 flex flex-col items-center justify-center  w-45 border rounded-lg'> 
            <RotateCcw size={18} color='#D7F205'/>
            <p className='md'>Easy Returns</p>
            <p className='text-gray-500 text-sm'>30-days policy</p>
          </div>
        </div>
        {/*Next Button*/}
        <div className='cursor-pointer mt-4 w-full flex items-center justify-center text-black bg-[#D7F205] rounded-4xl py-3'> 
          <p className='font-semibold'>Next</p>
          <ChevronRight/>
        </div>
      </div>
    </div>
    <p className='px-40 py-10 font-semibold text-2xl'>Related Products</p>
      </div>

  );
}

export default ProductDetailCard;