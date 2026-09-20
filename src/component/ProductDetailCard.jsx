import axios from 'axios';
import { Heart, Truck, Star, Shield,RotateCcw, ArrowRight, ChevronRight, ShoppingCart, Check } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';
import { MyStore } from '../Context/MyContext';

const ProductDetailCard = () => {  
  const [singleProductData, setSingleProductData] = useState({});
  const [whishlist, setWhishlist] = useState(false);
  let {productsData,cartItems,setCartItems,setCartOpen } = useContext(MyStore);
  let {id} = useParams();
  let addRelatedProduct = ()=>
  {
      const existingProduct = cartItems.find(
    (item) => item.id === singleProductData.id
  );

  if (existingProduct) {
    setCartItems([
      ...cartItems.map((item) =>
        item.id === singleProductData.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    ]);
  } else {
    setCartItems([
      ...cartItems,
      { ...singleProductData, quantity: 1 }
    ]);
  }

  setCartOpen(true);
  }
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
},[id])
const handleNext= ()=>
{
    navigate(`/detail/${Number(id) + 1}`);
}

let navigate = useNavigate();
const relatedProducts = productsData.filter((product)=>
{
  return(
    product.category === singleProductData.category &&
    product.id!== singleProductData.id
  )
}).slice(0,4);

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
          <Heart   onClick={() => setWhishlist(!whishlist)}
            className={`cursor-pointer ${whishlist ? "text-red-500 fill-red-500" : "text-white"}`}/>
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
        <div onClick={handleNext} className='cursor-pointer mt-4 w-full flex items-center justify-center text-black bg-[#D7F205] rounded-4xl py-3'> 
          <p className='font-semibold'>Next</p>
          <ChevronRight/>
        </div>
      </div>
    </div>
<p className='px-40 py-10 font-semibold text-2xl'>
  Related Products
</p>

<div className='w-full px-40 flex gap-2 items-center'>
  {
    relatedProducts.map((product)=>
    (
      <div key={product.id} className='border border-gray-400 bg-black h-85 w-60 rounded-2xl overflow-hidden'>
    {/* Product Image */}
    <div onClick={()=>navigate(`/detail/${product.id}`)} className='bg-white h-44 flex items-center justify-center'>
      <img
        className='cursor-pointer p-5 w-full h-full object-contain'
        src={product.image}
        alt="Product"
      />
    </div>

    {/* Product Information */}
    <div className='bg-black text-white px-4 py-2'>

      <p className='text-xs text-gray-400'>
        {product.category}
      </p>

      <p className='font-medium line-clamp-2'>
        {product.title}
      </p>

      {/* Rating */}
      <div className='flex items-center gap-1 mt-1'>
        <Star
          size={17}
          fill='currentColor'
          className='text-yellow-400'
        />
        <p>({product.rating.count})</p>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-gray-700 my-2'></div>

      {/* Price + Add Button */}
      <div className='flex items-center justify-between'>
        <p className='text-lg font-semibold text-[#D7F205]'>
          ${product.price}
        </p>

        <div onClick={addRelatedProduct} className='cursor-pointer text-black rounded-2xl py-1 px-2 bg-[#D7F205] flex gap-1 items-center'>
          <ShoppingCart size={15} />
          <p>Add</p>
        </div>
      </div>

      </div>

      </div>
    ))
  }
  
</div>

    </div>

  );
}

export default ProductDetailCard;