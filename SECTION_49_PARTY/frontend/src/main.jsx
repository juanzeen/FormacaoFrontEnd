import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import CreateParty from './routes/CreateParty.jsx'

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
        path: "/party/new",
        element: <CreateParty/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
