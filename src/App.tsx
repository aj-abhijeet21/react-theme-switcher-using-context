import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { GlobalContextProvider } from './context/GlobalContext'
import HobbyManagement from './pages/HobbyManagement'
import Home from './pages/Home'
import Login from './pages/Login'
import Overview from './pages/Overview'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: 'home', element: <Home /> },
  { path: 'login', element: <Login /> },
  { path: 'overview', element: <Overview /> },
  { path: 'hobbyManagement', element: <HobbyManagement /> },
])

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  )
}

export default App
