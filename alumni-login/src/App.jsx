import { Toaster } from 'react-hot-toast'
import './App.css'
import AppRoutes from './Routes/AppRoutes'
import { AlumniProvider } from './context/AlumniContext'

function App() {

  return (
    <>
    <AlumniProvider>
    <Toaster/>
    <AppRoutes/>
    </AlumniProvider>
    </>
  )
}

export default App
