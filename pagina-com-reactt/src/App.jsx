import './App.css'
import Home from './componentes/Home'
import Nav from './componentes/Nav'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
  )
}

export default App
