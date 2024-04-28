import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import AddCraftItem from './components/AddCraftItem';
import MyArtAndCraftList from './components/MyArtAndCraftList';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/login",
        element: <Login></Login>
      },{
        path: "/register",
        element:<Register></Register>
      },{
        path: "/addCraftItem",
        element:<AddCraftItem></AddCraftItem>
      },{
        path: "/myArtAndCraft",
        element: <MyArtAndCraftList></MyArtAndCraftList>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
