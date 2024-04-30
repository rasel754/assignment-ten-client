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
import ViewDetails from './components/ViewDetails';
import CraftItemsSection from './components/CraftItemsSection';
import CraftItemsSectionDetails from './components/CraftItemsSectionDetails';

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
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },{
        path: "/myArtAndCraft",
        element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
      },{
        path: "/allArtAndCraft",
        element:<AllArtAndCraftItems></AllArtAndCraftItems>,
        loader :() => fetch('https://assignment-ten-server-bsl2rr2zg-rasel-ahmeds-projects-68daacca.vercel.app/allArtAndCraft')
      },{
        path:"/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader:({params}) => fetch(`https://assignment-ten-server-bsl2rr2zg-rasel-ahmeds-projects-68daacca.vercel.app/allArtAndCraft/${params.id}`)
      },{
        path:"/viewDetails/:id",
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://assignment-ten-server-bsl2rr2zg-rasel-ahmeds-projects-68daacca.vercel.app/allArtAndCraft/${params.id}`)
      },{
        path:"/",
        element:<CraftItemsSection></CraftItemsSection>,
        loader :() => fetch("https://assignment-ten-server-bsl2rr2zg-rasel-ahmeds-projects-68daacca.vercel.app/allArtAndCraft")

      },{
        path:"/craftItemsSectionDetails/:id", 
        element:<CraftItemsSectionDetails></CraftItemsSectionDetails>,
        loader:({params}) => fetch(`https://assignment-ten-server-bsl2rr2zg-rasel-ahmeds-projects-68daacca.vercel.app/allArtAndCraft/${params.id}`)

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
