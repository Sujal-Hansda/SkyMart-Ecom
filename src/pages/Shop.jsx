import React, { useContext, useEffect } from 'react'
import { MyStore } from '../Context/MyContext';
import axios from 'axios';
import ProductCard from '../component/ProductCard';
import { ArrowRight, Search } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { useState } from 'react';

const Shop = () => {

  const [search, setSearch] = useState("")

  let { productsData,setProductsData,getProductsData } = useContext(MyStore);
  let [searchParams, setSearchParams] = useSearchParams();
  const category =  searchParams.get("category");
const filteredProducts = productsData.filter((product)=>
{
  return category?product.category ===category:true;
});
const searchProducts = filteredProducts.filter((product)=>
{
  return product.title.toLowerCase().includes(search.toLowerCase());
})

  
  return (
    <div className='px-40 py-10 flex flex-col gap-4'>
      <p className='text-4xl font-semibold'>All Products</p>
      <p className='text-gray-400'>{searchProducts.length} products found</p>
      <div className='flex items-center justify-between border rounded-lg p-4 '>
        <div className='bg-[#e5e1e11b] border border-gray-700 rounded-2xl py-2 px-4 pl w-[70%] flex items-center gap-3'>
          <Search size={18} />
          <input className=' w-200 outline-none' type="text" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search products...'/>
        </div>
        <div className=' flex items-center gap-2'>
                  <select   name="" id="" className='bg-black border border-gray-700 rounded-2xl py-2 px-4  outline-none   text-white'>
          <option  value="">All Categories</option>
          <option  value="">Electronics</option>
          <option  value="">Clothing</option>
          <option  value="">Furniture</option>
          <option  value="">Home</option>
          <option  value="">Sports</option>
          <option  value="">Accessiories</option>
        </select>
        <select   name="" id="" className='bg-black border border-gray-700 rounded-2xl py-2 px-4  outline-none  text-white'>
          <option  value="">Featured</option>
          <option  value="">Price:High-Low</option>
          <option  value="">Price:Low-High</option>
          <option  value="">Top Rated</option>
          <option  value="">Lowest Rated</option>
        </select>
        </div>
      </div>
      {/*All Products*/}
      <div className='p-2 grid grid-cols-5 gap-8'>
      {
        searchProducts.map((val)=>
        {
          return <ProductCard key={val.id} product={val}/>
        })
      }
    </div>
    </div>
    
  )
}

export default Shop