import React from "react";
import logo from '../aca.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function MainScreen(){
    {/*Navigating through the pages*/}
    const navigate = useNavigate();
    const goToSecondComponent = () => {
        navigate('QuizStart');
    };

    {/*Code to render the beginning of the quiz*/}
    return(
      <div className="App">
        <header className="App-header">
            <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />   

            <p className='Title'>GITHUB QUIZ APP</p>

            <button className='StartButton' onClick={goToSecondComponent}>Start</button>

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

export default MainScreen;