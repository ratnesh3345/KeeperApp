const quizReducer = (state, {type,payload}) =>{
    switch(type){
        case "INITIAL_STATE":
            return{
                ...state,
                quiz: payload.currentQuizData,
                index : payload.currentIndex,
                score : payload.currentScore,
                quizCategory : payload.currentCategory,
                selectedOption : payload.currentOption === "null"? null : payload.currentOption,
                //basically if there is no option it will be stored as null as a string and 
                //it will consider it as a string 
            }

        case "CATEGORY":
            return{
                ...state ,
                quizCategory : payload,
            }

        case "SET_QUIZ" :
            return{
                ...state,
                quiz : payload
            }
        case "NEXT_QUESTION":
            return{
                ...state,
                index : state.index + 1,
                selectedOption : null
            }
        case "QUIT":
            return{
                ...state,
                index : 0,
                score : 0,
                selectedOption : null
            }

        case "SET_SELECTED_OPTION":
            
            return{
                ...state,
                selectedOption : payload.optionId,
                score : payload.IsCorrect ? state.score+  5 : state.score
            }
        case "SUBMIT":
            return {
                ...state,
                selectedOption: null
            }
        default: 
            return state;
    }

}

export default quizReducer;