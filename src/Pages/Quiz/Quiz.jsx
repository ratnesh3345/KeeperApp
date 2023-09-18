import { Fragment , useState , useEffect} from "react";
import QuestionAndAnswer from "../../components/QuestionAndAnswer/QNA";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios"
import { useQuiz } from "../../context/quiz-context";


const Quiz = () =>{

    
    const {quizCategory, quizDispatch, quiz} = useQuiz();

    useEffect(()=>{
        const fetchQuiz = async () =>{
            const {data : {data}} = await axios.get("https://quiz-backend.cyclic.app/quiz", {
                headers : {Authorization : localStorage.getItem("token")}
            });
            const filteredData = data.filter(({category})=> category === quizCategory)
            if(filteredData&& filteredData.length>0){
                quizDispatch({
                    type : "SET_QUIZ",
                    payload: filteredData
                })
                localStorage.setItem("quiz", JSON.stringify(filteredData))
            }
            
        }
       fetchQuiz();
    },[])

    return(
        <Fragment>
            <Navbar route = "quiz"/>
            {/* If Quiz is there then only pass the quizData */}
            {
                quiz && quiz.length && <QuestionAndAnswer quizData = {quiz}/>
            }
            
        </Fragment>
    )
}

export default Quiz;