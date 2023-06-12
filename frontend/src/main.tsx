import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import Root from './pages/Root'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Forgot from './pages/Forgot'
import store from './store/index'
import { PageWrapper } from './components/pageWrapper/PageWrapper'
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute'
import { Daily } from './components/UI/clientCalendar/Daily'
import Business from './pages/Business'
import Catalog from './pages/Catalog'
import './config/i18n'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper>
        <Root />{' '}
      </PageWrapper>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <PageWrapper>
        <SignUp />{' '}
      </PageWrapper>
    ),
  },
  {
    path: '/sign-in',
    element: (
      <PageWrapper>
        <SignIn />{' '}
      </PageWrapper>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PageWrapper>
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </PageWrapper>
    ),
  },
  {
    path: '/forgot',
    element: (
      <PageWrapper>
        <Forgot />{' '}
      </PageWrapper>
    ),
  },
  {
    path: '/booking',
    element: (
      <PageWrapper>
        <Daily />
      </PageWrapper>
    ),
  },
  {
    path: '/biz/:slug',
    element: (
      <PageWrapper>
        <Business />
      </PageWrapper>
    ),
  },
  {
    path: '/biz',
    element: (
      <PageWrapper>
        <Catalog />
      </PageWrapper>
    ),
  },
  {
    path: '*',
    element: (
      <PageWrapper>
        <NotFoundPage />
      </PageWrapper>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
