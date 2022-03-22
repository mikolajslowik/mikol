import { useState } from "react";
import Question from "./Question";
import "./App.css";
import Final from "./final";
import { questions } from "./Questions";

function App() {
  const correctAnswers = questions.map((el) => el.answer);
  const [questionId, setQuestionId] = useState<number>(1);
  const [answerSummary, setAnswerSummary] = useState<Array<string>>([]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="hello"> Witoj! </div>
        <Question
          questionId={questionId}
          setQuestionId={setQuestionId}
          answersSummary={answerSummary}
          setAnswerSummary={setAnswerSummary}
        />
      </div>
      {questionId > 10 ? (
        <Final
          setQuestionId={setQuestionId}
          correctAnserws={correctAnswers}
          answersSummary={answerSummary}
        />
      ) : null}
    </div>
  );
}

export default App;
