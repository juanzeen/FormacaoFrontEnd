import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Category from '../img/category.svg'


import './PickCategory.css'


const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseAndReorder = (category) => {
    dispatch({type: "START_GAME", payload: category})
    dispatch({type: "REORDER_QUESTIONS"})
  }

  return (
    <div id='category'>
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes aos temas abaixo: </p>
      <div>
        {quizState.questions.map((quest) => (
          <button onClick={() => chooseAndReorder(quest.category)} key={quest.category}>{quest.category}</button>
      ))}
    </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  )
}

export default PickCategory
