import "./App.css";
import React, { useState } from "react";
import FinalResults from "./finalResults";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const questions = [
    {
      text: " The parts of the body that work together to change food into a form the body can use",
      options: [
        { id: 0, text: "Digestive system", isCorrect: true },
        { id: 1, text: "Digestive juices", isCorrect: false },
        { id: 2, text: "Esophagus", isCorrect: false },
        { id: 3, text: "Nervous system", isCorrect: false },
      ],
    },
    {
      text: "White blood cells that attack pathogens are called",
      options: [
        { id: 0, text: "Neurocytes", isCorrect: false },
        { id: 1, text: "Lymphocytes", isCorrect: true },
        { id: 2, text: "Carcinogens", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: false },
      ],
    },
    {
      text: "What type of cell is found in the brain?",
      options: [
        { id: 0, text: "White blood cell", isCorrect: false },
        { id: 1, text: "Nuerons", isCorrect: true },
        { id: 2, text: "Red blood cell", isCorrect: false },
        { id: 3, text: "Epithilial cells", isCorrect: false },
      ],
    },
    {
      text: "What is the largest bone in the body?",
      options: [
        { id: 0, text: "Scapula", isCorrect: false },
        { id: 1, text: "Femur", isCorrect: true },
        { id: 2, text: "Tarsal ", isCorrect: false },
        { id: 3, text: "Humerus", isCorrect: false },
      ],
    },
    {
      text: "What does AIDS stand for?",
      options: [
        { id: 0, text: "Acquired Immune Deficiency Syndrome", isCorrect: true },
        { id: 1, text: "Antiviral Immune Disorder System", isCorrect: false },
        { id: 2, text: "Auto Immune Disorder Syndrome", isCorrect: false },
        { id: 3, text: "Antiviral Immune Deficiency Syndrome", isCorrect: true },
      ],
    },
    {
      text: "What is the only bone in the body not attached to another bone?",
      options: [
        { id: 0, text: "Pelvis", isCorrect: true },
        { id: 1, text: "Clavicle", isCorrect: false },
        { id: 2, text: "Hyoid", isCorrect: true },
        { id: 3, text: "Femur", isCorrect: false },
      ],
    },
  ];

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      //if answer is wrong, will store an object in the wrongAnswers array that contains the questionIndex and correctAnswerId
      setWrongAnswers([ ...wrongAnswers, { questionIndex: currentQuestion, correctAnswerId: currentQuestion.id },]);
    }

    //keep going or go to final results
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  return (
    <div className="App">
      <h1>Health Quiz</h1>

     {/*shows final results if true*/}
      {showFinalResults ? 
        <FinalResults score = {score} questions = {questions} restartGame = {restartGame} wrongAnswers = {wrongAnswers}/> : (
        // Question Card
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
            {/* assigns an onClick event handler to the list item. 
          When the user clicks on an option, it invokes the optionClicked function with the isCorrect property of the selected option as an argument. 
          The isCorrect property indicates whether the option is the correct answer or not.
          assigns a unique key to each lis t item
          renders the text content of the option within the list item.
        */}
          </ul>
        </div>
      )}
      {
        // keeps going to the next question if showFinalResults is false
      }
    </div>
  );
}

export default App;
