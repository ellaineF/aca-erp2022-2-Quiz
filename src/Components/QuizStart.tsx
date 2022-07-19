import React, { useState } from "react";
import logo from '../aca.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Questions } from './Questions';
import { Link } from 'react-router-dom';
import EndScreen from "./EndScreen";

function QuizStart(){
    // Used to go through pages
    const navigate = useNavigate();

    // Track score, questions and answers
    const [score, setScore] = useState(0);   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chosenOption, setChosenOption] = useState("hello");

    const nextQuestion = () => {

        if(Questions[currentQuestion].answer == chosenOption){
            setScore(score + 1);       
        }
        //alert(score);
        setCurrentQuestion(currentQuestion + 1);
    }

    const lastScreen = () =>{
        if(Questions[currentQuestion].answer == chosenOption){
            setScore(score + 1);
        }
        navigate("/EndScreen")
    }

    const endScreen = () => {
        if(Questions[currentQuestion].answer == chosenOption){
            setScore(score + 1);
        }
        navigate("/EndScreen");
    }    
    
    return(
        <div className="App">
        <header className="App-header">
            <p className='Title'>GITHUB QUIZ APP</p>

            {/*SPINNER*/}
            {/*<p className="loading"></p>*/}

            {/*QUESTIONS*/}
            <div className="QuestionCard">
                  <p className="Score">Score: {score}</p>

                  <h1 className="prompt">
                    {Questions[currentQuestion].prompt}
                  </h1>

                  <div className="options">
                    <button onClick={() => setChosenOption("A")} >
                         {Questions[currentQuestion].optionA} 
                    </button>
                    <button onClick={() => setChosenOption("B")} > 
                        {Questions[currentQuestion].optionB} 
                    </button>
                    <button onClick={() => setChosenOption("C")} > 
                        {Questions[currentQuestion].optionC} 
                    </button>
                    <button onClick={() => setChosenOption("D")} > 
                        {Questions[currentQuestion].optionD} 
                    </button>
                  </div>                  

                 {/*NEXT BUTTON: checks if the current question is the last question*/}
                 {currentQuestion == Questions.length - 1 ? (
                    <button className="FinButton" onClick={lastScreen}>Finish Quiz</button>
                 ) : (
                <button className='NextButton' onClick={nextQuestion}>
                    Next Question
                </button> )}
            </div>
            
            <Link to="/" className="App-link2">Go Back to Main</Link>

            <a
                className="App-link"
                href="https://africacode.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                I Love ACA
            </a>

            <div className="pic">
                <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />   
            </div>
        </header>

      </div>  
    );
}

export default QuizStart;