import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Profile from './pages/Profile'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
