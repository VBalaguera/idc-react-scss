import React from 'react'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './components/Pages/IndexPage'
import DetailPage from './components/Pages/DetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
