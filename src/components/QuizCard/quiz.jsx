import "./quizcard.css"

const QuizCard = ({category}) =>{
    const {image, title, description } = category;
    return(
        <div className="container d-flex direction-column ">
            <div className="img-box">
                <img className = "img"src = {image} alt = "card-image"/>
            </div>
            <div className="details">
                <h2 className="title">{title}</h2>
                <p>{description}</p>
                
            </div>
            <button className="button play-now-btn btn-primary cursor">Play Now</button>
        </div>
    )
}

export default QuizCard;