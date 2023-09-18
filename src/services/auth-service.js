import axios from "axios";
 const loginHandler = async (username, password) =>{
 try{
        const {data: { token}, status} = await axios.post("https://quiz-backend.cyclic.app/auth/login",{
            username: username,
            password: password,     
        });
        console.log({token}, status);
        
        if(status===200){
            localStorage.setItem("token", token);
            return token;
        }
    }catch(error){
        console.error(error);
    }

}

export default loginHandler;