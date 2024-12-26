import React from 'react'
import Quiz from '../img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Welcome.css'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)



  return (
    <div className='welcome-container'>
      <h2>Seja bem vindo!</h2>
      <p>Clique no botão abaixo para começar:  </p>
      <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} />
    </div>
  )
}

export default Welcome
