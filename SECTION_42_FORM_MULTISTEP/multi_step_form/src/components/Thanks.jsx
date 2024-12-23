import React from 'react'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill
} from "react-icons/bs";

import "./Thanks.css"

const Thanks = ({ data }) => {

  const getEmoji = (review) => {
    console.log(review);

    switch (review) {
      case "unsatisfied": return <BsFillEmojiFrownFill/>
        break
      case "neutral": return <BsFillEmojiNeutralFill/>
        break
      case "satisfied": return <BsFillEmojiSmileFill/>
        break
      case "very_satisfied": return <BsFillEmojiHeartEyesFill/>
        break
      default: return <BsFillEmojiNeutralFill/>
      break
    }
  }


  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Muito obrigado por ter chegado até aqui! Termine de avaliar para ganhar um presente misterioso...</p>
      <p>Para concluir a avaliação basta verificar se essas são suas respostas finais e enviar!</p>
      <h3>Aqui está um resumo da avaliação: </h3>
      <p className='review-data'> <span>Satisfação: </span>  { getEmoji(data.review) } </p>
      <p className='review-data'> <span>Comentário: {data.comment }</span></p>
    </div>
  )
}

export default Thanks
