import React, { useState } from "react";
import logo from '../aca.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Questions } from "./Questions";

function Answers(){
    const navigate = useNavigate();

    const retakeQuiz = () =>{
        navigate("/");
    }

    const [score, setScore] = useState(0);   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [chosenOption, setChosenOption] = useState("hello");
    const indexNr = 0;

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer == chosenOption){
            setScore(score + 1);       
        }
        //alert(score);
        setCurrentQuestion(currentQuestion + 1);
    }

    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} style={{maxWidth:150, maxHeight:100}} className="App-logo" alt="logo" />   
            <h3 className="Title">Answers: </h3>
                
                <div>
                    {indexNr >= 0 &&
                        <div className="QuestionCard2">
                            <div className="prompt">
                                {Questions[currentQuestion].prompt}
                            </div>
                            
                            <div className="options">
                                <label>A: {Questions[currentQuestion].optionA}</label>
                                <label>B: {Questions[currentQuestion].optionB}</label>
                                <label>C: {Questions[currentQuestion].optionC}</label>
                                <label>D: {Questions[currentQuestion].optionD}</label>
                            </div>
        
                            <div className="CorrectAnswer">
                                <label>Answer: {Questions[currentQuestion].answer}</label>
                            </div>
                            <div className="Summary">
                                <label>{Questions[currentQuestion].sum}</label>
                            </div>

                        </div>  
                    }
                </div>
            
            {currentQuestion !== Questions.length - 1?(
                <button onClick={nextQuestion} className="RestartButton2"> View Next Answer </button>        
            ):(<button onClick={retakeQuiz} className="RestartButton">Re-take Quiz</button>        ) }
            
            <a
                className="App-link"
                href="https://africacode.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                I Love ACA
            </a>
        </header>
      </div>  
    );
}

export default Answers;