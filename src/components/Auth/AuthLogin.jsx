import { useAuth } from "../../context/auth-context";
import loginHandler from "../../services/auth-service";
import "./Auth.css"

import { useNavigate } from "react-router-dom";



const Login = () =>{

    const navigate= useNavigate()
    const {username,password, authDispatch} = useAuth()
    console.log({username,password})

    const handleUserNameChange = (event) =>{
        authDispatch({
            type: "USERNAME",
            payload: event.target.value
        })
    }

    const handlePasswordChange = (event) =>{
        authDispatch({
            type: "PASSWORD",
            payload: event.target.value
        })
    }

    const handleLoginClick = (event) =>{
        event.preventDefault();
        const token = loginHandler(username,password);
        if(token){
            navigate("/")
        }
        authDispatch({
            type: "TOKEN",
            payload: token
        })
        authDispatch({
            type: "CLEAR"
        })
    }

    const handleTestLoginClick = (event)=>{
        event.preventDefault()
        const token = loginHandler("ratnesh3345", "Anmol@123")
        authDispatch({
            type: "TOKEN",
            payload: token
        })
        if(token){
            navigate("/")
        }
    }

    return(
    <div className="d-grid">
        <div className="login-auth d-flex direction-column justify-center">
            <h2 className="auth-title">Login</h2>
            <form onSubmit={handleLoginClick}>
            <div className="form-container">
                <label className="form-label">Email</label>
                <input className = "form-input lh-ls" type="text" placeholder="userName" onChange={handleUserNameChange} required></input>
            </div>
            <div className="form-container">
                <label className="form-label">Password</label>
                <input className="form-input lh-ls" type="text" placeholder="**********" onChange={handlePasswordChange} required ></input>

            </div>
            <div className="cta">
                <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
            </div>
            <div className="cta">
                <button onClick = {handleTestLoginClick} className="button btn-outline-primary login-btn btn-margin sign-up-btn">Login with Test Credentials</button>
            </div>
            </form>
        </div>

   </div>

    
    )
}

export default Login;