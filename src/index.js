import React from 'react'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './components/Pages/index/IndexPage'
import DetailPage from './components/Pages/DetailPage'

import PeoplePage from './components/Pages/people/PeoplePage'

import VehiclesPage from './components/Pages/vehicles/VehiclesPage'

import StarshipsPage from './components/Pages/starships/StarshipsPage'

// aurebesh font
import './fonts/Aurebesh/Aurebesh.ttf'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage title='Planets' />,
  },
  {
    path: '/people',
    element: <PeoplePage title='people' />,
  },
  {
    path: '/starships',
    element: <StarshipsPage title='Starships' />,
  },
  {
    path: '/vehicles',
    element: <VehiclesPage title='Vehicles' />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
