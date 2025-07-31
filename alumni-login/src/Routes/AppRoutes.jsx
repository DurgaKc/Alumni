import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MainLayout from '../Layout/MainLayout'
import Login from '../Pages/Login'
import Notice from '../Pages/Notice'
import UserHome from '../Pages/AlumniStudent/UserHome'
import UserLayout from '../Layout/UserLayout'
import UserNotice from '../Pages/AlumniStudent/UserNotice'
import WorkList from '../Pages/AlumniStudent/Work/WorkList'
import UserProfile from '../Pages/AlumniStudent/Profile/UserProfile'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path='/notice' element={<Notice/>}/>
         <Route path='/login' element={<Login/>}/>
      </Route>

      {/* Alumni User  panel */}
      <Route path='/alumni-student' element={<UserLayout/>}>
       <Route index element={<UserHome/>}/>
       <Route path='user-notice' element={<UserNotice/>}/>
       <Route path='work-list' element={<WorkList/>}/>
       <Route path='profile' element={<UserProfile/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes