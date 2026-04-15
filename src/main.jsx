import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MeinLayout from './Meinlayout/MeinLayout.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Timeline from './pages/Homepage/Timeline.jsx';
import Stats from './pages/Homepage/Stats.jsx';


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
        path: "/timeline/:id",
        element: <Timeline></Timeline>
       },
       {
        path: "/stats",
        element: <Stats></Stats>
       },
       
     ],
     errorElement: <ErrorPage></ErrorPage>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
