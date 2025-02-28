import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
