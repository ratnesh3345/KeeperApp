import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from './context/auth-context';
import { QuizProvider } from './context/quiz-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <QuizProvider>
      < App />
      </QuizProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


