import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  return (
    isLoggedIn? <Outlet/>: <Navigate to='/login'/>
  )
}

export default ProtectedRoutes