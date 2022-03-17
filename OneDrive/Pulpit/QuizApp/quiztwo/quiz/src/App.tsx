import React, { useState } from "react";
import Question from "./Question";
import "./App.css";

function App() {
  const [questionId, setQuestionId] = useState<number>(1);
  const [answerSummary, setAnswerSummary] = useState<Array<string>>([]);
  console.log(answerSummary);
  return (
    <div className="App">
      <div>
        <div> Witoj! </div>
        <Question
          questionId={questionId}
          setQuestionId={setQuestionId}
          answersSummary={answerSummary}
          setAnswerSummary={setAnswerSummary}
        />
      </div>
    </div>
  );
}

export default App;
