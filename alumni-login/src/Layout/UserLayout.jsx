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

// import React from "react";
// import { Outlet } from "react-router-dom";
// import UserNavbar from "../components/UserNavbar";
// import { AlumniProvider } from "../context/AlumniContext";
// import AlumniLoader from "../Pages/AlumniStudent/Work/AlumniLoader";

// const UserLayout = () => {
//   return (
//     <AlumniProvider>
//       <AlumniLoader />
//       <UserNavbar />
//       <main>
//         <Outlet />
//       </main>
//     </AlumniProvider>
//   );
// };

// export default UserLayout;
