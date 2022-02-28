import React, { useState } from "react";
import "./App.css";

function App() {
  const [signsHolder, setSignsHolder] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // const array: string[] = [];

  const addTarget = (event: any) => {
    setIsClicked(false);
    setSignsHolder([...signsHolder, event.target.value]);
    console.log(signsHolder);
  };

  const showResult = () => {
    if (isClicked === false) {
      setIsClicked(true);
    }
    const resultValue = eval(signsHolder.join(""));
    console.log(resultValue);
    return resultValue;
  };

  return (
    <>
      <div className="wrapper">
        <p>zwierz</p>
        <div className="resultView" title="resultView">
          {isClicked ? showResult() : signsHolder.join("")}
        </div>
        <button className="1" value="1" onClick={addTarget}>
          1
        </button>
        <button className="2" value="2" onClick={addTarget}>
          2
        </button>
        <button className="3" value="3" onClick={addTarget}>
          3
        </button>
        <button className="4" value="4" onClick={addTarget}>
          4
        </button>
        <button className="5" value="5" onClick={addTarget}>
          5
        </button>
        <button className="6" value="6" onClick={addTarget}>
          6
        </button>
        <button className="7" value="7" onClick={addTarget}>
          7
        </button>
        <button className="8" value="8" onClick={addTarget}>
          8
        </button>
        <button className="9" value="9" onClick={addTarget}>
          9
        </button>
        <button className="0" value="0" onClick={addTarget}>
          0
        </button>
        <button className="plus" value="+" onClick={addTarget}>
          +
        </button>
        <button className="minus" value="-" onClick={addTarget}>
          -
        </button>
        <button className="divide" value="/" onClick={addTarget}>
          :
        </button>
        <button className="mulitiply" value="*" onClick={addTarget}>
          *
        </button>
        <button className="calculate" onClick={showResult}>
          =
        </button>
      </div>
    </>
  );
}

export default App;
