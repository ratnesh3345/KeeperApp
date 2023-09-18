const authReducer = (state, action) =>{
    switch(action.type){
        case "INITIAL-STATE":
            return{...state, token: action.payload}
        case "USERNAME":
            return{...state, username: action.payload};
        case "PASSWORD" :
            return{...state, password: action.payload};
        case "CLEAR" :
            return {...state, password: "", username: ""}
        case "TOKEN" : 
            return{...state, token: action.payload}
        default:
            return state;
    }
}

export default authReducer;

/**If you find yourself repeating something find a way to solve that reptition */