import { useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

//vem com estilo padrao
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className='App'>
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
