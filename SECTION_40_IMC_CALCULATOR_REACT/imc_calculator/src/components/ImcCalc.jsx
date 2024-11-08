import React from "react";
import {useState} from "react"
import "./ImcCalc.css";
import Button from "./Button";

const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

  const clearForm = (e) => {
    e.preventDefault()
    setWeight("")
    setHeight("")
  }

  //regex pra garantir somente numeros
  const validateDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const handleHeightChange = (e) => {
    const updateValue = validateDigits(e.target.value)

    setHeight(updateValue)
  }

  const handleWeightChange = (e) => {
    const updateValue = validateDigits(e.target.value)

    setWeight(updateValue)
  }

  return (
    <div id="calc-container">
      <h2>IMC Calculator</h2>
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="height">Height:</label>
          <input type="text" name="height" id="height" placeholder="Eg: 1.75" onChange={handleHeightChange} value={height}/>
        </div>
        <div className="form-control">
          <label htmlFor="weight">Weight:</label>
          <input type="text" name="weight" id="weight" placeholder="60kg" onChange={handleWeightChange} value={weight}/>
        </div>
      </div>
      <div className="action-control">
        {/* Colocamos a função de calcular IMC com a notacao de funcao anonima
        que recebe um evento como argumento para garantir que ela de fato só
        seja executada no click do botao */}
        <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
        <Button id="clear-btn" text="Limpar" action={clearForm}/>
      </div>
    </div>
  );
};

export default ImcCalc;
