import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './components/Routes/Routes';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children:[
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/service",
        element: <Service></Service>
      }
      ,
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:"/review",
        element: <Review></Review>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
