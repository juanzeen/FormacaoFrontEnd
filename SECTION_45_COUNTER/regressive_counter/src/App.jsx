import { useState } from 'react'
import useCountdown from './hooks/useCountdown'
import { useContext } from 'react'

import { CountdownContext } from './context/CountdownContext'


import Title from './components/Title'
import Counter from './components/Counter'
import { Outlet } from 'react-router'
import './App.css'

function App() {

  const {event} = useContext(CountdownContext)


  return (
    <div className='App'>
      <div className="container">

        <Outlet/>
    </div>
    </div>
  )
}

export default App
