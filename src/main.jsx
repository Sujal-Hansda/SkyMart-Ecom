import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextProvider } from './Context/MyContext.jsx'
import AppRoute from './Routes/AppRoute.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
<ContextProvider>
    <div className='font-[Syne] w-full min-h-screen bg-black text-white'>
        <AppRoute/>
        <ToastContainer/>
    </div>   
</ContextProvider>
)
