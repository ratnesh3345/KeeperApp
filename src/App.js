import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/Home';
import LoginPage from './Pages/Login/Login';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/auth/login' element = {<LoginPage />}/>
        <Route path= "/quiz" element = {<Quiz />}/>
        <Route path = "/result" element = {<Result />} />
      </Routes>
    </div>
  );
}

export default App;
