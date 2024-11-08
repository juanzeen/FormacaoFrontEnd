import React from 'react'
import './Button.css'

const Button = ({ id, text, action}) => {
  //funcao que executa uma funcao passada como prop ao componente
  const handleAction = (e) => {
    action(e)
  }

  return (
    <button id={id}
      onClick={handleAction}
    >
      {text}
    </button>
  )
}

export default Button
