import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import About from './routes/About/index.jsx'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "*",
        element: <Error />
      },
      {
        path: "/about",
        element: <About />
      } 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)