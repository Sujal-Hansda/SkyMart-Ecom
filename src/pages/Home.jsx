import { Zap, ArrowRight, Package, ShoppingBag, Star, Tag, TrendingUp, Shield } from 'lucide-react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MyStore } from '../Context/MyContext'

const Home = () => {

  let {cartItems,total,productsData} = useContext(MyStore);
  console.log(productsData);
  
  const topPicks = productsData.slice(0,5)
  const newArrivals = productsData.slice(5,10)
  
  let navigate = useNavigate();

  return (
    <div className='flex flex-col gap-10 px-40 py-10'>
      {/*Hero*/ }    
      <div className='flex flex-col border p-10 rounded-3xl'>
        <h5 className='pb-2 text-[#D7F205]'>GOOD AFTERNOON 👋</h5>
        <div className='flex justify-between items-center'>
          <h1 className='text-6xl font-semibold'>Welcome back,<br /><span className='text-[#D7F205]'>Sujal!</span></h1>
          <div className=' rounded-2xl bg-[#d6f20526] border border-[#d6f20576] flex flex-col items-center justify-center h-20 w-35'>
            <p className='text-[#D7F205] text-4xl font-semibold'>20+</p>
            <p className='text-sm text-gray-400'>Products Available</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-gray-400'>Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.</p>
          <div className=' flex items-center flex-col justify-center border border-gray-400  h-20 w-35  rounded-2xl'>
            <p className='font-semibold text-4xl'>Free</p>
            <p className='text-sm text-gray-400'>Delivery on &#8377;999+</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div onClick={()=>navigate("/shop")} className='cursor-pointer bg-[#D7F205] text-black px-6 py-3 rounded-2xl flex items-center gap-2'>
            <p>Shop Now</p>
            <ArrowRight size={20}/>
          </div>
          <div onClick={()=>navigate("/shop")} className='cursor-pointer border border-gray-400 px-6 py-3 rounded-2xl'> 
            <p className='text-gray-400'>View All Products</p>
          </div>
        </div>
      </div>
      {/*Cards*/}
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded-3xl border p-4 flex items-center gap-5'>
          <div className='rounded-lg h-12 w-12  bg-[#d6f2054b] flex items-center justify-center'>
            <Package color='#D7F205'/>
          </div>
          <div>
            <p className='font-semibold text-3xl'>{cartItems.length}</p>
            <p className='text-gray-300'>Cart Items</p>
            <p className='text-sm text-gray-400 '>In your bag</p>
          </div>
        </div>
        <div className='rounded-3xl border p-4 flex items-center gap-5'>
          <div className='rounded-lg h-12 w-12  bg-[#4a7fc034] flex items-center justify-center'>
            <TrendingUp color='#4A7FC0'/>
          </div>
          <div>
            <p className='font-semibold text-3xl'>${total}</p>
            <p className='text-gray-300'>Cart Value</p>
            <p className='text-sm text-gray-400 '>Ready to checkout</p>
          </div>
        </div>
        <div className='rounded-3xl border p-4 flex items-center gap-5'>
          <div className='rounded-lg h-12 w-12  bg-[#b0861c2f] flex items-center justify-center'>
            <Star color='#B0861C'/>
          </div>
          <div>
            <p className='font-semibold text-3xl'>5</p>
            <p className='text-gray-300'>Top Products</p>
            <p className='text-sm text-gray-400 '>Highly Rated</p>
          </div>
        </div>
        <div className='rounded-3xl border p-4 flex items-center gap-5'>
          <div className='rounded-lg h-12 w-12  bg-[#593e745d] flex items-center justify-center'>
            <Tag color='#593E74'/>
          </div>
          <div>
            <p className='font-semibold text-3xl'>6</p>
            <p className='text-gray-300'>Categories </p>
            <p className='text-sm text-gray-400 '>to eplore</p>
          </div>
        </div>
      </div>
      {/*Category*/}
      <div>
        <div className='pb-4 flex items-center justify-between'>
          <p className='font-semibold text-2xl'>Shop by Category</p>
          <div className='flex items-center gap-2 text-[#D7F205] cursor-pointer'>
            <p onClick={()=>navigate("/shop")} className='text-sm'>View All</p>
            <ArrowRight size={18}/>
          </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 gap-4'>
          <div onClick={()=>navigate("/shop?category=electronics")} className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>💻</p>
            <p>Electronics</p>
            <p className='text-gray-500'>
              {
              productsData.filter((product)=>product.category==="electronics").length
              } items</p>
          </div>
          <div onClick={()=>navigate("/shop?category=men's clothing")} className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>👔</p>
            <p>Men's Clothing</p>
            <p className='text-gray-500'>
              {
              productsData.filter((product)=>product.category==="men's clothing").length
              } items</p>
          </div>
          <div onClick={()=>navigate("/shop?category=women's clothing")} className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>🚺</p>
            <p>Women's Clothing</p>
            <p className='text-gray-500'>
              {
              productsData.filter((product)=>product.category==="women's clothing").length
              } items</p>
          </div>
          <div onClick={()=>navigate("/shop?category=jewelery")} className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>💍</p>
            <p>Jewelery</p>
            <p className='text-gray-500'>{
              productsData.filter((product)=>product.category==="jewelery").length
              } items</p>
          </div>
          <div className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>🏐</p>
            <p>Sports</p>
            <p className='text-gray-500'>8 items</p>
          </div>
          <div className='cursor-pointer flex flex-col items-center justify-center bg-white text-black rounded-2xl h-30'>
            <p>📦</p>
            <p>Accessopries</p>
            <p className='text-gray-500'>6 items</p>
          </div>
        </div>
      </div>
      {/*Quick Links*/}
        <div className='flex items-center justify-between gap-10'> 
          <div className='w-[50%] rounded-2xl bg-white text-[#D7F205] p-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Star fill='#B0861C' color='#B0861C'/>
                <p className='text-black font-semibold'>Top Rated</p>
              </div>
              <div onClick={()=>navigate("/shop")} className='flex items-center justify-between gap-1'>
                <p>See all</p>
                <ArrowRight size={15}/>
              </div>
            </div>
            <div  className='w-full pt-4 flex flex-col gap-2'>
              {
                topPicks.map((val)=>
                {
                  return (
              <div key={val.id} onClick={()=>navigate(`/detail/${val.id}`)} className='cursor-pointer border border-gray-300 rounded-xl flex items-center justify-between p-3 '>
                <div className='flex items-center gap-4'>
                  <div className='h-12 w-12 p-2'>
                    <img className='object-cover' src={val.image} alt={val.title} />
                  </div>
                  <p className='font-semibold text-lg'>${val.price}</p>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-xl bg-[#d6f2055a]'>
                  <ShoppingBag size={20}/>
                </div>
              </div>
                  )
                })
              }


            </div>
          </div>
          <div className='w-[50%] rounded-2xl bg-white text-[#D7F205] p-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Zap fill='#D7F205' color='#D7F205'/>
                <p className='text-black font-semibold'>New Arrivals</p>
              </div>
              <div  onClick={()=>navigate('/shop')} className='cursor-pointer flex items-center justify-between gap-1'>
                <p>See all</p>
                <ArrowRight size={15}/>
              </div>
            </div>
            <div className='w-full pt-4 flex flex-col gap-2'>
              {
                newArrivals.map((item)=>
                {
                  return (
              <div key={item.id} onClick={()=>navigate(`/detail/${item.id}`)} className=' cursor-pointer border border-gray-300 rounded-xl flex items-center justify-between p-3 '>
                <div className=' flex items-center gap-4'>
                  <div className='p-1 h-12 w-12'>
                    <img className='object-cover' src={item.image} alt={item.title} />
                  </div>
                  <p className='font-semibold text-lg'>${item.price}</p>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-xl bg-[#d6f2055a]'>
                  <ShoppingBag size={20}/>
                </div>
              </div>
                  )
                })
              }


            </div>
          </div>
          
        </div>
      {/*Pros*/}
      <div className='flex items-center justify-between gap-4'>
        <div className='w-100 p-4 border rounded-2xl flex items-center gap-4'>
          <Zap color='#D7F205'/>
          <div>
            <p className='font-semibold'>Fast Delivery</p>
            <p className='text-gray-400 text-sm'>Same-day on select items</p>
          </div>
        </div>
        <div className='w-100 p-4 border rounded-2xl flex items-center gap-4'>
          <Shield color='#4A7FC0'/>
          <div>
            <p className='font-semibold'>Secure Payments</p>
            <p className='text-gray-400 text-sm'>100% encrypted checkout</p>
          </div>
        </div>
        <div className='w-100 p-4 border rounded-2xl flex items-center gap-4'>
          <Tag color='#3CA661'/>
          <div>
            <p className='font-semibold'>Best Prices</p>
            <p className='text-gray-400 text-sm'>Price-match guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home