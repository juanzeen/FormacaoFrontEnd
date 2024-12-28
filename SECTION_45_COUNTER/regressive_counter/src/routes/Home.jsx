import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { CountdownContext } from "../context/CountdownContext";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [color, setColor] = useState();



  const {event, setEvent} = useContext(CountdownContext)

  console.log(CountdownContext);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      color,
    };

    setEvent(eventObject);

    navigate("/countdown")
  };

  return (
    <div className="home">
      <h2>Create your regressive countdown</h2>
      <form
        action=""
        className="countdown-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label>
          <span>Title</span>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Put the name of the event"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="date"
            name="title"
            id=""
            placeholder="Put the name of the event"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Theme color</span>
          <input
            type="color"
            name="title"
            id=""
            placeholder="Put the name of the event"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          <span>Send</span>
          <input
            type="submit"
            name="title"
            id=""
            placeholder="Put the name of the event"
          />
        </label>
      </form>
    </div>
  );
};

export default Home;
