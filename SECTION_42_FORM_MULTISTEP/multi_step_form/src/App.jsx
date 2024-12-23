import { useState } from 'react'
//o react-icons tem várias fontes de ícones
//as fontes são especificadas nos prefixos dos icones
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import './App.css'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import { useForm } from './hooks/useForm'
import Steps from './components/Steps'


function App() {

  const formTemplate = {
    name: "",
    comment: "",
    review: "",
    email: ""
  }
  //função que vai pegar o valor dos inputs e alterar na exibição final
  //mantem o dado antigo com o prev e muda o input preenchido (key)
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return{...prev, [key] : value}
    })
  }

  const [data, setData] = useState(formTemplate)

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, <Thanks data={data}/>]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)



  return (
    <div className='app'>

      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto! </p>
      </div>
      <div className="form-container">
        {<Steps
        currentStep={currentStep}
        />}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
           )}
            {!isLastStep?(
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend/>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
