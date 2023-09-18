import React, {createContext, useContext, useEffect, useReducer} from 'react';
import quizReducer from '../Reducer/quiz-reducer';

const initialState = {
    index: 0,
    score: 0,
    quizCategory : "",
    selectedOption : "",
    quiz : [],
}

/**If we want to use the initial Value we have to pass it as values */

const quizContext = createContext();

const QuizProvider = ({children}) =>{


    const [{index,score,quizCategory, quiz, selectedOption}, quizDispatch] = useReducer(quizReducer, initialState)

    useEffect(() =>{
       const currentIndex =  Number(localStorage.getItem("index"));
       const currentScore =  Number(localStorage.getItem("score"));
       const currentOption =  localStorage.getItem("option")
       const currentCategory = localStorage.getItem("category");
       const currentQuizData = JSON.parse(localStorage.getItem("quiz"));
       localStorage.setItem("quiz", JSON.stringify(currentQuizData ))
       quizDispatch({
        type : "INITIAL_STATE",
        payload : {currentIndex,currentOption,currentScore, currentCategory, currentQuizData}
       })
    }, [])



    return(
        <quizContext.Provider value={{index,score,quizCategory,quiz, selectedOption,quizDispatch}}>
            {children}
        </quizContext.Provider>

    )
    
}

const useQuiz = () => useContext(quizContext);

export {useQuiz, QuizProvider};


