import React, { useContext, useEffect } from 'react'
import { MyStore } from '../Context/MyContext';
import axios from 'axios';
import ProductCard from '../component/ProductCard';
import { ArrowRight, Search } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { useState } from 'react';

const Shop = () => {

  const [search, setSearch] = useState("")
  const  [sort, setSort] = useState("");
  let { productsData } = useContext(MyStore);
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
if (sort ==="high-low")
{
  searchProducts.sort((a,b)=>b.price-a.price);
}
if (sort ==="low-high")
{
  searchProducts.sort((a,b)=>a.price-b.price);
}
if (sort === "top-rated")
{
  searchProducts.sort((a,b)=>b.rating.rate - a.rating.rate)
}
if (sort === "lowest-rated")
{
  searchProducts.sort((a,b)=>a.rating.rate - b.rating.rate)
}

  
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
                  <select  value={category||""} onChange={(e)=>
                    {
                      if (e.target.value)
                      {
                        setSearchParams({category:e.target.value})
                      }
                      else
                      {
                        setSearchParams({});
                      }
                    }
                  }  name="" id="" className='bg-black border border-gray-700 rounded-2xl py-2 px-4  outline-none   text-white'>
          <option  value="">All Categories</option>
          <option  value="electronics">Electronics</option>
          <option  value="men's clothing">Men's Clothing</option>
          <option  value="women's clothing">Women's Clothing</option>
          <option  value="jewelery">Jewelery</option>
          <option  value="sports">Sports</option>
          <option  value="accessiories">Accessiories</option>
        </select>
        <select  onChange={(e)=>setSort(e.target.value)}  name="" id="" className='bg-black border border-gray-700 rounded-2xl py-2 px-4  outline-none  text-white'>
          <option  value="">Featured</option>
          <option  value="high-low">Price:High-Low</option>
          <option  value="low-high">Price:Low-High</option>
          <option  value="top-rated">Top Rated</option>
          <option  value="lowest-rated">Lowest Rated</option>
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