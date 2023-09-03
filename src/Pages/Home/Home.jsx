import React ,{ Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import axios from "axios";
import QuizCard from "../../components/QuizCard/quiz";
import "./Home.css"

const HomePage = () =>{
    const [categories, setCategories] = useState([]);

useEffect(()=>{
    const fetchData = async () =>{
        try{
        const {data : {data}} = await axios.get("https://quiz-backend.cyclic.app/category");
        setCategories(data);  
        console.log(data);
        
        } catch(error){
            console.log(error)
        } 

    }
    fetchData()
    
}, [])

    return(
        <Fragment>
            <Navbar />
            <main className="main d-flex wrap gap-md align-center justify-center">
            {categories.map((category)=> <QuizCard category = {category} key = {category.id} />)}
            </main>
            
        </Fragment>
        
    )
}

export default HomePage;