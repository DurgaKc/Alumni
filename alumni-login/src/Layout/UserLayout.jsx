import React from 'react'
import UserNavbar from '../components/UserNavbar'
import { Outlet } from 'react-router-dom'
// import Batchmate from '../Pages/AlumniStudent/Profile/Batchmate'

const UserLayout = () => {
  return (
    <>
    <UserNavbar/>
    <main>
        <Outlet/>
    </main>
    {/* <Batchmate/> */}
    </>
  )
}

export default UserLayout