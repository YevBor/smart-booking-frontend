import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import { CssBaseline } from '@mui/material'

const router = createBrowserRouter([
  {path: '/',
  element: <Root/>,
  }
])





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
