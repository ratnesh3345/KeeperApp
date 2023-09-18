import { Fragment } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

const Navbar = ({route}) =>{
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {quizDispatch} = useQuiz()
    
    /**We are basically dispatching action to manage states according to our needs */
    const handleAuthClick = () =>{
        if(token){
            localStorage.clear();
            quizDispatch({
                type: "QUIT",
            })
        }
      navigate("/auth/login");
    }

    const handleEndGameClick =() =>{
        quizDispatch({
            type: "QUIT"
        })
    }

    return(
        <>
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <img className="icon mr-1" src={process.env.PUBLIC_URL +'/assests/images.png'} alt="logo"/>
                <h1 className="heading-title">
                    {
                        route === "home" || route === "result" ?<Link className="link" to="/">Prettier</Link> : "Prettier"
                    }
                    
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    {/* <li className="list-item-inline">
                        <Link to = "/" className="link cursor">Home</Link>
                    </li> */}
                    {
                        route === "home"&&<li className="list-item-inline">
                                             <Link to = "/auth/login" className="link cursor" onClick={handleAuthClick}>{token?"Logout":"Login"}</Link>
                                        </li>
                    }
                    {
                        route === "quiz" && (
                            <Fragment>
                                <li className="list-item-inline">
                                    <Link to = "/" className="link cursor" onClick={handleEndGameClick}>Home</Link>
                                 </li>
                                <li className="list-item-inline">
                                    <Link to = "/auth/login" className="link cursor" onClick={handleAuthClick}>Logout</Link>
                                </li>
                            </Fragment>
                        )
                    }

                    
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar