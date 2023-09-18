import React, {createContext, useContext, useEffect, useReducer} from 'react';
import authReducer from '../Reducer/auth-reducer';

const authContext = createContext();
const initialState = {
    username : "",
    password : "",
    token : ""
}

const AuthProvider = ({children}) =>{

    useEffect(()=>{
        const token = localStorage.getItem("token")
        authDispatch({
            type : "INITIAL-STATE",
            payload: token,
        })

    },[])

    const [{username,password, token},authDispatch] = useReducer(authReducer, initialState);
    return(
        <authContext.Provider value={{username, password, token , authDispatch}}>
            {children}
        </authContext.Provider>
    )
}
// when we write we want to use context we need to specify which context we want to use
const useAuth = () =>useContext(authContext)

export {AuthProvider, useAuth}