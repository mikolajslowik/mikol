import { questions } from "./Questions";
import { Dispatch, SetStateAction, useState } from "react";

interface QuestionProps {
  answersSummary: string[];
  setAnswerSummary: Dispatch<SetStateAction<string[]>>;
  questionId: number;
  setQuestionId: Dispatch<SetStateAction<number>>;
}

type InputEvent = { target: { value: string } };

function Question(props: QuestionProps) {
  const [answer, setAnswer] = useState<string>("");
  const answersSummary: string[] = [];

  const answerOptions = questions.find((obj) => {
    return obj.id === props.questionId;
  });

  const chooseOption = (e: InputEvent) => {
    setAnswer(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.setAnswerSummary((answersSummary) => [...answersSummary, answer]);
  };

  const nextQuestionHandler = () => {
    props.setQuestionId(props.questionId + 1);
  };

  return (
    <>
      <form>
        <div className="question">{answerOptions?.question}</div>
        <div>
          <input
            onChange={chooseOption}
            type="radio"
            id="a"
            name="d"
            value="a"
          />
          <label htmlFor="a">{answerOptions?.a}</label>
        </div>

        <div>
          <input
            onChange={chooseOption}
            type="radio"
            id="b"
            name="d"
            value="b"
          />{" "}
          <label htmlFor="b">{answerOptions?.b}</label>
        </div>

        <div>
          <input
            onChange={chooseOption}
            type="radio"
            id="c"
            name="d"
            value="c"
          />
          <label htmlFor="c">{answerOptions?.c}</label>
        </div>
        <div>
          <input
            onChange={chooseOption}
            type="radio"
            id="d"
            name="d"
            value="d"
          />
          <label htmlFor="d">{answerOptions?.d}</label>
        </div>
        <button onClick={submitHandler}>Potwierdzam odpowiedź!</button>
      </form>
      <div className="answer">
        {answer === answerOptions?.answer
          ? "gratulacje, masz"
          : "To nie ta odp"}
      </div>

      <button onClick={nextQuestionHandler} className="next">
        następne pytanie
      </button>
    </>
  );
}

export default Question;
