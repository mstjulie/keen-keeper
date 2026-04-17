import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MeinLayout from './Meinlayout/MeinLayout.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

import Stats from './pages/Homepage/Stats.jsx';
import FriendsDetalls from './components/Friends/FriendsDetalls/FriendsDetalls.jsx';
import Timeline from './pages/Homepage/Timeline.jsx';
import FriendProvider from './context/FriendContext.jsx';
  import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MeinLayout></MeinLayout>,
     children:[
       {
         index: true,
         element: <Homepage></Homepage>
       },
       {
        path: "/timeline",
        element: <Timeline></Timeline>,
       },
       {
        path: "/stats",
        element: <Stats></Stats>
       },
       {
        path: "/friendsDetalls/:id",
        element: <FriendsDetalls></FriendsDetalls>,
        loader: ()=> fetch('/data.json')
       },
      
     ],
     errorElement: <ErrorPage></ErrorPage>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </FriendProvider>
  </StrictMode>,
)
