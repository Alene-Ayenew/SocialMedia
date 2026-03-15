import { useContext, useState } from 'react'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import NavBar from './Components/NavBar/NavBar'
import LeftBar from './Components/LeftBar/LeftBar'
import RightBar from './Components/RightBar/RightBar'
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import { DarkModeContext } from './context/darkModeContext'
function App() {
  const currentUser = true;
  const {darkMode}=useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark " :"light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={<Login />} />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        (<ProtectedRoute>
          <Layout />
        </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
