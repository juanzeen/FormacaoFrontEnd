import React from 'react'
import './Title.css'

const Title = ({title, eventColor}) => {
  return (
    <h1 style={{color: eventColor}}>{title}</h1>
  )
}

export default Title
