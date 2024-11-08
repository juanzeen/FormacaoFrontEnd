import { useState } from 'react'
import {data} from './data/data'
import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

function App() {
const [imc, setImc] = useState("")
const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if (!weight || !height) return

    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

    data.forEach((i) => {
      if (imcResult >= i.min && imcResult <= i.max) {
        setInfo(i.info)
        setInfoClass(i.infoClass)
      }
    })

    if(!info) return

  }

  //isso funciona porque fazemos uma exibição condicinal
  //a condição avaliada é existencia de conteudo em imc,
  //automaticamente, o JS entende "" como ausencia de conteudo
  const resetCalc = (e) => {
    e.preventDefault()
    setInfo("")
    setInfoClass("")
    setImc("")
  }



  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
          <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  )
}

export default App
