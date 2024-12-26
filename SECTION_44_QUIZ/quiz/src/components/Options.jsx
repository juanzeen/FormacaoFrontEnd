import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Options.css";

const Options = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="options-container">
      <div
        className={`option ${
          quizState.answerSelected && option === answer ? "correct " : ""
        } ${quizState.answerSelected && option !== answer ? "wrong " : ""} ${hide? "hide" : ""} `}
        onClick={() => selectOption()}
      >
        <p>{option}</p>
      </div>
    </div>
  );
};

export default Options;
