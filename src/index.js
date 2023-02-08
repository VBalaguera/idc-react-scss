import React from 'react'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './components/Pages/index/IndexPage'
import DetailPage from './components/Pages/index/DetailPage'

import PeoplePage from './components/Pages/people/PeoplePage'

import VehiclesPage from './components/Pages/vehicles/VehiclesPage'
import VehiclesDetailPage from './components/Pages/vehicles/VehiclesDetailPage'

import StarshipsPage from './components/Pages/starships/StarshipsPage'
import StarshipsDetailPage from './components/Pages/starships/StarshipsDetailPage'

// aurebesh font
import './fonts/Aurebesh/Aurebesh.ttf'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage title='Planets' />,
  },
  {
    path: '/planets/:id',
    element: <DetailPage />,
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
    path: '/starships/:id',
    element: <StarshipsDetailPage title='Starships' />,
  },
  {
    path: '/vehicles',
    element: <VehiclesPage title='Vehicles' />,
  },
  {
    path: '/vehicles/:id',
    element: <VehiclesDetailPage title='Vehicles' />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
