import { useState } from "react";

const useCountdown = (date) => {
  //usamos useState pois sofre atualizações recorrentes e são simples
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  const countdown = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const daysNumber = Math.floor(interval / days);
    const hoursNumber = Math.floor((interval % days) / hours);
    const minutesNumber = Math.floor((interval % hours) / minutes);
    const secondsNumber = Math.floor((interval % minutes) / seconds);

    setDays(daysNumber)
    setHours(hoursNumber)
    setMinutes(minutesNumber)
    setSeconds(secondsNumber)

  };

  setInterval(countdown, 1000)
  return [days, hours, minutes, seconds]
};

export default useCountdown;
