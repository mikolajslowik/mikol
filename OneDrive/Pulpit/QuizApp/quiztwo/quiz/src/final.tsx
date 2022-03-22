import { Dispatch, SetStateAction } from "react";

interface FinalProps {
  setQuestionId: Dispatch<SetStateAction<number>>;
  correctAnserws: string[];
  answersSummary: string[];
}

function Final(props: FinalProps) {
  const repeatHandler = () => {
    props.setQuestionId(1);
  };

  let finalResult: string = "";
  let arr: string[] = [];

  const showResult = () => {
    for (let i = 0; i < props.correctAnserws.length; i++) {
      if (props.correctAnserws[i] === props.answersSummary[i]) {
        console.log(arr);
        arr.push("ok");
      } else {
        arr.push("nie");
      }
    }
    const goodAnswerArray = arr.filter((el) => el === "ok");
    const percentage =
      (goodAnswerArray.length / props.correctAnserws.length) * 100;
    finalResult = `${percentage}%`;
    console.log("p", finalResult);
  };

  showResult();

  return (
    <>
      <div className="finaleContainer">
        <div className="finalMessage">
          {" "}
          Gratulacje ukończyłeś quiz z wynikiem:
        </div>
        <div className="finalResult">{finalResult}</div>
        <button className="repeat" onClick={repeatHandler}>
          Rozpocznij ponownie!
        </button>
      </div>
    </>
  );
}

export default Final;
