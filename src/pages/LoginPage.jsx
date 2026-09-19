import React, { useContext } from 'react'
import { ArrowRight, Lock, Mail, Star, Zap } from 'lucide-react'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { MyStore } from '../Context/MyContext';
import { ToastContainer, toast } from 'react-toastify';


const LoginPage = () => {

  const {registeredUsers,loggedInUsers,setLoggedInUsers} = useContext(MyStore);



  let {handleSubmit,
    register,
    reset,
    formState:{errors},
} = useForm();
  let navigate = useNavigate();
  let formSubmit = (data)=>
  {
    let user = registeredUsers.find((val)=>
    {
      return val.email === data.email && val.password === data.password;
    })
    if (!user)
    {
      toast.warning("Invalid credentials.");
      reset();
      return;
    }
    setLoggedInUsers(user);
    localStorage.setItem('loggedInUsers',JSON.stringify(user));
    toast.success("User Logged In");
    reset();
    navigate("/main");
    console.log("reset called");
    
    
  }


  return (
    <div className=' w-full min-h-screen flex '>
      <div className='p-12 w-full min-h-screen'>
              <div className='cursor-pointer flex items-center gap-2'>
        <div className='bg-[#D7F205] p-2 rounded-xl'>
          <Zap fill='black' color='black' size={20}/>
        </div>
        <h1 className='text-2xl font-bold'>Sky<span className='text-[#D7F205]'>Mart</span></h1>
      </div>
      <div className='pt-25 flex flex-col gap-6'>
        <p className='text-[#D7F205] font-semibold'>WELCOME BACK</p>
        <h1 className='text-6xl font-semibold ' >Shop The future. <br /><span className='text-[#D7F205]'>Today.</span>  </h1>
        <p className='text-gray-400 pb-10'>Thousands of products, lightning-fast delivery, and <br /> prices that make your wallet happy</p>
        <div className='flex items-center justify-between'>
          <div className='h-20 w-55  rounded-2xl  border border-gray-200 flex flex-col items-center justify-center'>
            <p className='text-2xl font-semibold  text-[#D7F205] '>20K+</p>
            <p className='text-sm text-gray-400'>Products</p>
          </div>
          <div className='h-20 w-55 rounded-2xl  border border-gray-200 flex flex-col items-center justify-center'>
            <p className='text-2xl font-semibold  text-[#D7F205] '>50K+</p>
            <p className='text-sm text-gray-400'>Users</p>
          </div>
          <div className='h-20 w-55 rounded-2xl  border border-gray-200 flex flex-col items-center justify-center'>
            <div className='text-2xl font-semibold  text-[#D7F205] flex items-center gap-1'>
            <p>20K+</p>
            <Star/>
            </div>
            <p className='text-sm text-gray-400'>Rating</p>
          </div>
        </div>
      </div>

   
    </div>
      <div className='h-screen w-px bg-white'></div>
      <div className=' w-full min-h-screen flex items-center justify-center'>
        <div className='bg-[#b2b1b111] w-100 min-h-95 flex flex-col gap-1 border border-[#bebdbd57]  p-8 rounded-2xl'>
          <p className='font-semibold text-2xl'>Sign In</p>
          <p className='font-semibold text-gray-400 pb-10'>Enter your credentials to continue</p>
          <form onSubmit={handleSubmit(formSubmit)} action="">
            <div className='flex flex-col gap-3 pb-3'>
              <div className='border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <Mail size={17} color='#bebdbd57'/>
                <input 
                {...register("email",{
                  required:"Email is required",
                })}
                className=' w-full outline-none'   autoComplete="off" type="email" placeholder='Email address' />
              </div>
                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
              <div className='border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <Lock 
                size={17}  color='#bebdbd57'/>
                <input  
                  {...register("password",{
                  required:"Password is required",
                  minLength:{
                    value:6,
                    message:"min 6 chars is required"
                  }
                })}
                className='w-full outline-none'   autoComplete="off" type="password" placeholder='Password' />
              </div>
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
            </div>
          <button type="submit" className='cursor-pointer py-4 w-full items-center justify-center rounded-2xl flex bg-[#D7F205] text-black gap-2'>
            <p className='font-semibold'>Sign in</p>
            <ArrowRight  size={15}/>
          </button>
          </form>
          <p className='text-center pt-4 text-sm text-gray-600 font-semibold'>Don't have an account? <span onClick={()=>{navigate("/register")}} className='text-[#D7F205] cursor-pointer'>Create one</span> 

</p>
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage