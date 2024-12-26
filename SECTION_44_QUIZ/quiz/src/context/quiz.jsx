import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const stages = ["Start", "Category" ,"Playing", "End"];

const initialState = {
  gameStage: stages[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optionToHide: null
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        //spread operator pra não perder as quests
        ...state,
        gameStage: stages[1],
      };
      break;

    case "START_GAME":
      let quizQuestions = null
      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions
        }
      })

      return {
        ...state,
        questions: quizQuestions,
        gameStage: stages[2]
      }
      break;

    case "REORDER_QUESTIONS":
      //embaralhando as perguntas
      const reorderedQuests = state.questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuests,
      };
      break;

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame;

      if (!state.questions[nextQuestion]) endGame = true;
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? stages[3] : state.gameStage,
        answerSelected: false,
        help: false
      };
      break;

    case "NEW_GAME":
      return initialState;
      break;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
      break;

    case "SHOW_TIP":
      return {
        ...state,
        help: "tip"
      }

    case "REMOVE_OPTION":
      const questionWithoutOption = state.questions[state.currentQuestion]

      let repeat = true
      let optionToHide

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option
          repeat = false
        }
      })

      return {
        ...state,
        optionToHide,
        help: true
      }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

//contexts funcionam como uma maneira de possuir "variáveis globais"
//usamos eles gerando inicialmente um provider, que é onde o contexto irá existir
//o provider possui childrens, pois os componentes ficam internos nele
//além disso, criamos o contexto com o createContext, que será consumido com o useContext
//para que o contexto funcione corretamente é necessário que exista a propriedade value no componente do provider
//pois de nada adianta ter um provider que vai funcionar com um contexto se esse contexto não tiver valor

//usamos o reducer para gerenciar estados complexos
