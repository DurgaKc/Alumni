import React from 'react'
import UserNavbar from '../components/UserNavbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <UserNavbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default UserLayout