import React, { useContext } from 'react'
import { Zap,Mail,Lock, User, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { MyStore } from '../Context/MyContext'
import { ToastContainer, toast } from 'react-toastify';


const RegisterPage = () => {

  const { setLoggedInUsers,registeredUsers,setRegisteredUsers } = useContext(MyStore);


  let navigate = useNavigate();
  let {handleSubmit,
      register,
      reset,
      formState:{errors},
  } = useForm();

    let formSubmit = (data)=>
    {
      let arr = [...registeredUsers,data]
      setRegisteredUsers(arr);
      toast.success("User Registered Successfully");
      setLoggedInUsers(data);
      localStorage.setItem('loggedInUsers',JSON.stringify(data));
      localStorage.setItem('registeredUsers',JSON.stringify(arr));
      navigate("/");
      reset();
      console.log("reset called");
      
    }  

  return ( 
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <div className=' pb-10 cursor-pointer flex items-center gap-2'>
        <div className='bg-[#D7F205] p-2 rounded-xl'>
          <Zap fill='black' color size={20}/>
        </div>
        <h1 className='text-2xl font-bold'>Sky<span className='text-[#D7F205]'>Mart</span></h1>
      </div>
      <div className='w-110 border border-[#bebdbd57] p-6 rounded-2xl'>
        <p className='text-2xl font-semibold'>Create account</p>
        <p className='text-gray-400 text-sm pb-10'>Join SkyMart and start shopping</p>
                  <form action="" onSubmit={handleSubmit(formSubmit)}>
            <div className='flex flex-col gap-3 pb-3'>
              <div className='bg-[#53525260] border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <User size={17} color='#bebdbd57'/>
                <input
                {...register("name",{
                  required:"Name is required",
                })}
                className='w-full outline-none' type="text" placeholder='Full Name' />
              </div>
              {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
              <div className='bg-[#53525260] border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <Mail  size={17}  color='#bebdbd57'/>
                <input
                {...register("email",{
                  required:"Email is required",
                })}
                
                className='w-full outline-none' type="email" placeholder='Email Address' />
              </div>
              {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
              <div className='bg-[#53525260] border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <Lock  size={17}  color='#bebdbd57'/>
                <input
                {...register("password",{
                  required:"Password is required",
                })}
                className='w-full outline-none' type="password" placeholder='Password (min 6 chars)' />
              </div>
              {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
              <div className='bg-[#53525260] border border-[#bebdbd57] rounded-2xl px-6 py-2  flex items-center gap-4'>
                <Lock  size={17}  color='#bebdbd57'/>
                <input
                {...register("confirmPassword",{
                  required:"Confirm Your Password",
                })}
                className='w-full outline-none' type="password" placeholder='Confirm password' />
              </div>
              {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}
            </div>
          <button type="submit" className='cursor-pointer w-full bg-[#D7F205] font-semibold py-3 rounded-2xl text-black flex items-center justify-center  gap-3'>
            <p>Create Account</p>
            <ArrowRight size={20}/>
          </button>
          </form>
          <p className='text-center pt-2'>Already have an account? <span onClick={()=>{navigate("/")}} className='font-semibold text-[#D7F205] cursor-pointer'>Sign in</span></p>
      </div>
    </div>
  )
}

export default RegisterPage