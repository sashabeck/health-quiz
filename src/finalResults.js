import "./App.css";
import {length} from "./App.js";
import React, { useState } from "react";

function finalResults(props) {
    const {score, questions, restartGame, wrongAnswers} = props
    return (
        <div className="final results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {Math.floor((score / questions.length) * 100)}%)
          </h2>
          {wrongAnswers.length > 0 && (
            <div>
              <h3>Questions you got wrong:</h3>
              <ul>
                {/*iterating over each element in wrong answer and executing code inside brackets*/}
                {wrongAnswers.map((wrongAnswer) => {
                  {/*creating new variable by extracting question and answer values from data stored in wrong answer array*/}
                  const { questionIndex, correctAnswerId } = wrongAnswer;
                  const question = questions[questionIndex];
                  {/*find the option object that has an id matching the correctAnswerId. assigns the matching correctAnswer object to the variable.*/}
                  const correctAnswer = question.options.find((option) => option.isCorrect);
                  const incorrectAnswer = question.options.find((option) => option.id !== correctAnswerId);

                  return (
                    <li key={questionIndex}>
                      <p>Question: {question.text}</p>
                      
                      <p>Your Answer: {incorrectAnswer.text}</p>

                      <p>Correct Answer: {correctAnswer.text}</p>
                      
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <button onClick ={() => restartGame()}>Restart Game</button>
        </div>
      );
}

export default finalResults;