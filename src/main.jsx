import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Layout.jsx'

const router1 =createBrowserRouter([
  {path: "/",
    element: <Layout/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router1} />
  </StrictMode>,
)
