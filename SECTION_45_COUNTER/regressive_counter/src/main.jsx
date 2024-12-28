import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from "./routes/Home.jsx"
import Countdown from "./routes/Countdown.jsx"
import { CountdownProvider } from './context/CountdownContext.jsx'

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/countdown",
        element: <Countdown/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
    <RouterProvider router={router}/>
    </CountdownProvider>
  </StrictMode>,
)
