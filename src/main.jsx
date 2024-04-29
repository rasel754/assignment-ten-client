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
import AllArtAndCraftItems from './components/AllArtAndCraftItems';
import UpdateCraft from './components/UpdateCraft';
import PrivateRoute from './components/routes/PrivateRoute';
import ErrorPage from './errorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
      },{
        path: "/allArtAndCraft",
        element:<PrivateRoute><AllArtAndCraftItems></AllArtAndCraftItems></PrivateRoute>,
        loader :() => fetch('http://localhost:5000/allArtAndCraft')
      },{
        path:"/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader:({params}) => fetch(`http://localhost:5000/allArtAndCraft/${params.id}`)
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
