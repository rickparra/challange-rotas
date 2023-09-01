import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Home from './routes/Home'
import Error from './routes/Error'
import About from './routes/About'
import LoginLogout from './routes/LoginLogout'
import Feed from './routes/Feed'

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
      },
      {
        path: "/login",
        element: <LoginLogout />
      },
      {
        path: "/feed",
        element: <Feed />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)