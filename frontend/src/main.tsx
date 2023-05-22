import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import { CssBaseline } from '@mui/material'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import  Dashboard  from './pages/Dashboard'
import Forgot from './pages/Forgot'
const router = createBrowserRouter([
  {path: '/',
  element: <Root/>,
  
  },
  {path: '/sign-up',
  element: <SignUp/>,
  },
  {path: '/sign-in',
  element: <SignIn/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  { path: '/forgot',
  element: <Forgot/>,
  }
])





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
