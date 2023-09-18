import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import "./quizcard.css"

const QuizCard = ({quizCategory}) =>{
    const {image, title, description, category} = quizCategory;
    const {quizDispatch} = useQuiz();
   const token = localStorage.getItem("token");
    const navigate = useNavigate();

     
    const handlePlayNowClick = () =>{
        if(token){
            localStorage.setItem("category", category);
            quizDispatch({
                type :"CATEGORY",
                payload: category
            })
            navigate("/quiz")
            console.log(token)
        }else{
            navigate("/auth/login")
        }
    }
    
    return(
        <div className="container d-flex direction-column ">
            <div className="img-box">
                <img className = "img"src = {image} alt = "card"/>
            </div>
            <div className="details">
                <h2 className="title">{title}</h2>
                <p>{description}</p>
                
            </div>
            <button className="button play-now-btn btn-primary cursor" onClick={handlePlayNowClick}>Play Now</button>
        </div>
    )
}

export default QuizCard;