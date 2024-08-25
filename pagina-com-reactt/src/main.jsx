import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './componentes/Home/index.jsx'
import Sobre from './componentes/Sobre/index.jsx'
import Contato from './componentes/Contato/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "sobre", element: <Sobre/>},
      {path: "contato", element: <Contato/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
