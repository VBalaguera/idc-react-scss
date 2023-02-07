import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

import './styles/App.scss'

import IndexPage from './components/Pages/IndexPage'

import Layout from './components/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
])

function App() {
  return <Layout>hello</Layout>
}

export default App
