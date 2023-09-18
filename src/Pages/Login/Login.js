import { Fragment } from "react"
import Navbar from "../../components/Navbar/navbar"
import Login from "../../components/Auth/AuthLogin"


const LoginPage = () =>{


    return(
        <Fragment>
            <Navbar route = "login" />
            <Login />
        </Fragment>
    )
}

export default LoginPage;