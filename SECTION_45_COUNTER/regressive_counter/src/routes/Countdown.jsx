import useCountdown from '../hooks/useCountdown'
import { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'

import React from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import { Navigate } from "react-router";

const Countdown = () => {
  const {event} = useContext(CountdownContext)

  if (!event) return <Navigate to="/" replace />;

  let eventTitle = null;

  if (event.title) eventTitle = event.title;

  let eventColor = null;

  if (event.color) eventColor = event.color;


  const [days, hours, minutes, seconds] = useCountdown(event.date)

  return (
    <>
       <Title title={eventTitle} eventColor={eventColor}/>
        <div className="countdown-container">
          <Counter title={"Dias"} number={days} eventColor={eventColor}/>
          <Counter title={"Horas"} number={hours} eventColor={eventColor}/>
          <Counter title={"Minutos"} number={minutes} eventColor={eventColor}/>
          <Counter title={"Segundos"} number={seconds} eventColor={eventColor}/>
        </div>
    </>
  )
}

export default Countdown
