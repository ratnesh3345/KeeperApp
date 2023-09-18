import { React ,Fragment } from "react";
import Navbar from "../../components/Navbar/navbar";
import { useQuiz } from "../../context/quiz-context";
import "./Result.css"

const Result = () =>{
    const {score} = useQuiz();
    return (
        <Fragment>
            <Navbar route = "result"/>
            <h2 className="page-title">Result's Page</h2>
            <main className="main-container">
            <div className="div-container">
                <img className="img-container" src={score>1?process.env.PUBLIC_URL +'/assests/HurrayPic.png':process.env.PUBLIC_URL +'/assests/UpsetHurray.png' } alt="hurray"/>
                <span className="span-container">{score>1? `Well Done,you score is ${score}` : "Whyyyyyyy"}</span>
            </div>
            </main>
            
            
        </Fragment>
        
    )
}

export default Result;