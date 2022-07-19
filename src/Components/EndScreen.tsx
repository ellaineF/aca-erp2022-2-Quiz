import React, { useState } from "react";
import logo from '../aca.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Questions } from "./Questions";

function EndScreen(){
    const navigate = useNavigate();

    const retakeQuiz = () =>{
        navigate("/");
    }

    const viewAnswers = () =>{
        navigate("/Answers");
    }

    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />   

            <h3 className="Title">End of Quiz</h3>
            
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