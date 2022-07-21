import React, { useState, useContext } from "react";
import logo from '../aca.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { QuizContextss } from "../Context/QuizContext";

function EndScreen(){
    const navigate = useNavigate();

    const retakeQuiz = () =>{
        navigate("/");
    }

    const viewAnswers = () =>{
        navigate("/Answers");
    }

    //const { finalScore, setFinalScore } = useContext();

    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />   

            <h3 className="Title">End of Quiz</h3>

            {/*<p>You scored {setFinalScore(finalScore)}</p>*/}
            
            <button onClick={viewAnswers} className='StartButton'>See All Answers</button>
            <button onClick={retakeQuiz} className='RestartButton'>Re-take Quiz</button>        

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

export default EndScreen;