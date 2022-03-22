import { questions, OptionsSummary } from "./Questions";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface QuestionProps {
  answersSummary: string[];
  setAnswerSummary: Dispatch<SetStateAction<string[]>>;
  questionId: number;
  setQuestionId: Dispatch<SetStateAction<number>>;
}

type InputEvent = { target: { value: string } };

function Question(props: QuestionProps) {
  const [answer, setAnswer] = useState<string>("");
  const [isChecked, setIsChecked] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>();

  useEffect(() => {
    setIsChecked("");
  }, [props.questionId]);

  const questionObject =
    questions.find((obj) => {
      return obj.id === props.questionId;
    }) || questions[0];

  const chooseOption = (e: InputEvent) => {
    if (e.target.value === "a" || "b" || "c" || "d") {
      setAnswer(e.target.value);
      setIsChecked(e.target.value);
    } else {
      alert("zaznacz coś mordo");
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value === "a" || "b" || "c" || "d") {
      if (answer) {
        props.setAnswerSummary((answersSummary) => [...answersSummary, answer]);
      }
      setIsClicked(true);
      setAnswer("");
    }

    if (answer === "") {
      alert("Zaznacz odpowiedź!");
      setIsClicked(false);
    }
    setIsCorrect(isChecked === questionObject?.answer);
  };

  const text = isCorrect ? "gratulacje, masz rację!" : "To nie ta odp";

  const nextQuestionHandler = () => {
    props.setQuestionId(props.questionId + 1);
    setIsClicked(false);
  };

  return (
    <>
      <form>
        <div className="question">{questionObject?.question}</div>
        {Object.keys(questionObject.options).map((letter: string) => {
          return (
            <div key={letter}>
              <input
                onChange={chooseOption}
                type="radio"
                id={letter}
                name={letter}
                value={letter}
                checked={isChecked === letter}
                disabled={isClicked}
              />
              <label className="label" htmlFor={letter}>
                {questionObject?.options[letter as keyof OptionsSummary]}
              </label>
            </div>
          );
        })}
        <button type="submit" onClick={submitHandler} disabled={isClicked}>
          Potwierdzam odpowiedź!
        </button>
      </form>
      <div className="answer">{isClicked ? text : ""}</div>
      <button
        onClick={nextQuestionHandler}
        className="next"
        disabled={!isClicked}
      >
        następne pytanie
      </button>
      <div className="grandeFinale"></div>
    </>
  );
}

export default Question;
