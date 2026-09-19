import { Package, Truck, Users, Zap,Star, Shield, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

  let navigate = useNavigate();

  return (
    <div className='pt-10 w-full min-h-screen gap-10 flex flex-col items-center justify-center'>
      <div className=' bg-[#D7F205] h-18 w-18 flex items-center justify-center rounded-3xl'>
        <Zap size={40} fill='black' color/> 
      </div>
      <p className='text-5xl font-semibold'>About <span className='text-[#D7F205]'>SkyMart</span></p>
      <h5 className='text-center text-gray-400'>SkyMart is a next-generation e-commerce platform built to make online <br /> shopping fast, fair, and enjoyable — for everyone.</h5>
      <div className='flex items-center gap-10'>
        <div className='bg-[#b9b8b811] border w-60 h-30 rounded-2xl flex flex-col items-center justify-center gap-2'>
          <Package color='#D7F205'/>
          <p className='text-2xl font-semibold'>20K+</p>
          <p className='text-sm text-gray-400'>Products</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-30 rounded-2xl flex flex-col items-center justify-center gap-2'>
          <Users color='#D7F205'/>
          <p className='text-2xl font-semibold'>50K+</p>
          <p className='text-sm text-gray-400'>Happy Customers</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-30 rounded-2xl flex flex-col items-center justify-center gap-2'>
          <Star color='#D7F205'/>
          <p className='text-2xl font-semibold'>4.9</p>
          <p className='text-sm text-gray-400'>Avg. Rating</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-30 rounded-2xl flex flex-col items-center justify-center gap-2'>
          <Truck color='#D7F205'/>
          <p className='text-2xl font-semibold'>99%</p>
          <p className='text-sm text-gray-400'>On-time Delivery</p>
        </div>
      </div>
      <div className='bg-[#b9b8b811] flex flex-col gap-4 border p-10 w-260 rounded-2xl'>
        <p className='text-3xl font-semibold'>Our Story</p>
        <p className='text-gray-400'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves:  what if shopping online was actually enjoyable?</p>      
        <p className='text-gray-400'>Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.</p>
        <p className='text-gray-400'>We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
      </div>
      <p className='text-3xl font-semibold'>What We Stand For</p>
      <div className='gap-8 grid grid-cols-2 grid-rows-2'>
      <div className='border p-2 w-120 h-30 rounded-2xl'>
      <div className=' p-4 flex items-center gap-5'>
        <div className=' h-12 w-14 bg-[#d6f20529] flex items-center justify-center rounded-xl '>
          <ShieldCheck size={20} color='#D7F205'/>
        </div>
        <div>
          <p className='font-semibold'>Trust</p>
          <p className='text-sm text-gray-400'>Every product is verified for quality and authenticity before listing.</p>
        </div>
      </div>
      </div>
      <div className='border p-2 w-120 h-30 rounded-2xl'>
      <div className=' p-4 flex items-center gap-5'>
        <div className=' h-12 w-14 bg-[#d6f20529] flex items-center justify-center rounded-xl '>
          <Truck size={20} color='#D7F205'/>
        </div>
        <div>
          <p className='font-semibold'>Speed</p>
          <p className='text-sm text-gray-400'>We obsess over delivery times so your orders arrive when promised.</p>
        </div>
      </div>
      </div>
      <div className='border p-2 w-120 h-30 rounded-2xl'>
      <div className=' p-4 flex items-center gap-5'>
        <div className=' h-12 w-14 bg-[#d6f20529] flex items-center justify-center rounded-xl '>
          <HeartHandshake size={20} color='#D7F205'/>
        </div>
        <div>
          <p className='font-semibold'>Community</p>
          <p className='text-sm text-gray-400'>Built around real customer feedback, not just business metrics.</p>
        </div>
      </div>
      </div>
      <div className='border p-2 w-120 h-30 rounded-2xl'>
      <div className=' p-4 flex items-center gap-5'>
        <div className=' h-12 w-14 bg-[#d6f20529] flex items-center justify-center rounded-xl '>
          <Star size={20} color='#D7F205'/>
        </div>
        <div>
          <p className='font-semibold'>Quality</p>
          <p className='text-sm text-gray-400'>We curate the best — no filler, no junk, just great products.</p>
        </div>
      </div>
      </div>
      </div>
      <p className='text-3xl font-semibold'>Meet the Team</p>
            <div className='flex items-center gap-10'>
        <div className='bg-[#b9b8b811] border w-60 h-35 rounded-2xl flex flex-col items-center justify-center gap-1'>
          <div className='bg-[#D7F205] px-4 py-2 rounded-xl'>
            <p className='text-black font-semibold text-2xl '>A</p>
          </div>
          <p className=' font-semibold'>Aryan Shah</p>
          <p className='text-sm text-gray-400'>Founder & CEO</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-35 rounded-2xl flex flex-col items-center justify-center gap-1'>
<div className='bg-[#3D8BF2] px-4 py-2 rounded-xl'>
  <p className=' font-semibold text-2xl '>P</p>
</div>
          <p className=' font-semibold'>Priya Mehta</p>
          <p className='text-sm text-gray-400'>Head of Product</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-35 rounded-2xl flex flex-col items-center justify-center gap-1'>
<div className='bg-[#9857F2] px-4 py-2 rounded-xl'>
<p className=' font-semibold text-2xl '>R</p>
</div>
          <p className=' font-semibold'>Rohan Verma</p>
          <p className='text-sm text-gray-400'>Lead Engineer</p>
        </div>
        <div className='bg-[#b9b8b811] border w-60 h-35 rounded-2xl flex flex-col items-center justify-center gap-1'>
<div className='bg-[#F24171] px-4 py-2 rounded-xl'>
<p className=' font-semibold text-2xl '>S</p>
</div>
          <p className=' font-semibold'>Sneha Kapoor</p>
          <p className='text-sm text-gray-400'>Design Director</p>
        </div>
      </div>
      <div className='bg-[#b9b8b811] w-260 h-60 rounded-4xl flex flex-col items-center justify-center gap-4 border border-[#d6f20543]'>
        <p className='text-3xl font-semibold'>Ready to shop?</p>
        <p className='text-gray-400'>Explore thousands of products at unbeatable prices.</p>
        <div onClick={()=>{navigate("/shop")}} className='text-black font-semibold flex items-center justify-center cursor-pointer w-70 h-12 rounded-2xl gap-2 bg-[#D7F205]'>
          <p>Browse Products</p>
          <ArrowRight size={20}/>
        </div>
      </div>
    </div>
  )
}

export default About