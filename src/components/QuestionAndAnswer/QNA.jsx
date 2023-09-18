import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import "./QNA.css"
import { useEffect } from "react";

const QuestionAndAnswer = ({quizData}) =>{
    const [currentQuiz] = quizData;
    const {title, quiz} = currentQuiz;
    const {index,score, quizDispatch, selectedOption, } = useQuiz()
    const navigate = useNavigate();

    const handleNextQuestionClick = () =>{
        //We will set the index when we click on next question
        localStorage.setItem("index", index+ 1);
        if(index !== quiz.length-1){
            quizDispatch({
                type : "NEXT_QUESTION",
            })
        }else{
            quizDispatch({
                type : "SUBMIT",
            })
            navigate("/result");
        }
        
    }

    const handleAnswerClick = (optionId, IsCorrect) =>{
        quizDispatch({
            type : "SET_SELECTED_OPTION",
            payload : {index,optionId, IsCorrect}
        })
    }
    
    const handleQuitClick = () =>{
        quizDispatch({
            type : "QUIT"
        })
        navigate("/")
        
    }

    useEffect(()=>{
        localStorage.setItem("score", score);
        localStorage.setItem("option", selectedOption);  
    }, [selectedOption])

    return(
        <main className=" d-flex justify-center main-container">
            <section className="question-dialog container-flex">
                
                <h2 className="d-flex justify-center qna-title">{title}</h2>
                
                <div className="qna-score">
                    <span >Q: { index + 1}/{quiz?.length}</span>
                    <span className="score">Score : {score}</span>
                </div>

                <div className="question">
                    <span>Q:{ index + 1} {quiz[index].question}</span>
                </div>
                <div className="option-box">

                    {
                        quiz[index]?.options.map(({id, option, isCorrect}) => 
                        <button key={id} className={`button option d-flex justify-center ${selectedOption && isCorrect ? "success": ""}${selectedOption && selectedOption===id && !isCorrect? "error": ""}`} 
                        onClick = {() =>handleAnswerClick(id, isCorrect)} disabled = {selectedOption !==null    }>{option}</button>
                        )
                    }
                    
                </div>
                <div className="next-button-container">
                    <div className="button-container">
                        <button className="play-btn button btn-secondary cursor" onClick={handleQuitClick}>Quit</button>
                        <button className="next-question play-now-btn button btn-primary cursor " onClick = {handleNextQuestionClick}>{index === quiz.length-1? "Submit":"Next Question"}</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default QuestionAndAnswer;