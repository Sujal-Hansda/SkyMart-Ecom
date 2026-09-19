import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { Navigate } from 'react-router'

const ProtectedRoute = () => {
  const { loggedInUsers } = useContext(MyStore);



  if (!loggedInUsers )
  {
    return <Navigate to={"/"}/>
  }


  return (
    <Outlet/>
  )
}

export default ProtectedRoute