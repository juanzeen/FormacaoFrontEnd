import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Options from "./Options";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuest = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    //payload aceita dados para o dispatch
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuest.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuest.question}</h2>
      <div className="options-container">
        {currentQuest.options.map((option) => (
          <Options
            option={option}
            key={option}
            answer={currentQuest.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help &&(
        <>
          {currentQuest.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}> Dica </button>
          )}
          <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>Excluir uma</button>
        </>
      )}
      {!quizState.answerSelected && quizState.help === "tip" &&(
        <p> {currentQuest.tip} </p>
      )
}
      {/*importante não esquecer de colocar uma função anônima no onClick! */}
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
