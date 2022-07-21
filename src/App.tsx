import React ,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainScreen from './Components/MainScreen';
import QuizStart from './Components/QuizStart';
import EndScreen from './Components/EndScreen';
import Answers from './Components/Answers';

function App() {
  const [finalScore,setFinalScore] = useState(0);
    return(
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/QuizStart" element={<QuizStart/>}/>
          <Route path="/EndScreen" element={<EndScreen/>}/>
          <Route path="/Answers" element={<Answers/>}/>
        </Routes> 
      </Router>
    );
}
export default App;
