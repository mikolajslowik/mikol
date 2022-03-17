import { useState } from "react";
function Converter() {
  const [numbers, setNumbers] = useState([]);
  const [scrollControl, setScrollControl] = useState(0);

  const rawTranslation = [];

  const inputNumbers = (e) => {
    setScrollControl(e.target.value);
    let value = e.target.value;
    setNumbers(value.split(""));
  };

  // control function

  const controlSyntax = () => {
    // 0 control

    if (numbers.length === 0) {
      return;
    }

    // 1 digit numbers
    else if (numbers.length > 1 && numbers[0].includes("0")) {
      return alert(
        "Number that contain`s more then two digit`s can not start with 0!"
      );
    } else if (numbers.length === 1) {
      oneDigitNumbers(numbers.length - 1);
    }

    // 2 digits numbers
    else if (numbers.length === 2) {
      if (
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 1] !== "0"
      ) {
        teensNumber(numbers.length - 1);
      } else if (
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 1] === "0"
      ) {
        decimalNumbers(numbers.length - 2);
      } else if (
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 1] !== "0"
      ) {
        // decimalSecondDigit();
        decimalAndOne();
      }
    }
    //   3 digits
    else if (numbers.length === 3) {
      if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0"
      ) {
        // 100
        pureHundred();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0"
      ) {
        // 101
        hundredAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] !== "0"
      ) {
        // 111
        hundredAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0"
      ) {
        // 110
        hundredAndDecimals();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0"
      ) {
        // 122
        hundredAndDecimalsAndOne();
      }
    }
    // 4 digits
    else if (numbers.length === 4) {
      if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1000
        pureThousand();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1001
        thousandAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1011
        thousandAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1010
        thousandAndDecimals();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1022
        thousandAndDecimalsAndOne();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1100
        thousandAndHundred();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1101
        thousandAndHundredAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1111
        thousandAndHundredAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1110
        thousandAndHundredAndDecimals();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0"
      ) {
        // 1122
        thousandAndHundredAndDecimalsAndOne();
      }
    }
    // 5 digits
    else if (numbers.length === 5) {
      if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10000
        decimalThousand();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10001
        decimalThousandAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10011
        decimalThousandAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10010
        decimalThousandAndDecimals();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10022
        decimalThousandAndDecimalsAndOne();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10100
        decimalThousandAndHundred();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10101
        decimalThousandAndHundredAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10111
        decimalThousandAndHundredAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10110
        decimalThousandAndHundredAndDecimal();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 10122
        decimalThousandAndHundredAndDecimalAndOne();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] === "1"
      ) {
        // 11000
        teenThousand();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] === "1"
      ) {
        // 11001
        teenThousandAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] === "1"
      ) {
        // 10011
        teenThousandAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] === "1"
      ) {
        // 11010
        teenThousandAndDecimals();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] === "1"
      ) {
        // 11022
        teenThousandAndDecimalsAndOne();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22000
        decimalAndOneThousand();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22001
        decimalAndOneThousandAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22011
        decimalAndThousandThousandAndTeens();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22010
        decimalThousandAndDecimal();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22022
        decimalThousandAndDecimalAndOne();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22100
        decimalAndOneAndHundred();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22101
        decimalAndThousandAndHundredAndOne();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] === "1" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22111
        decimalThousandAndHundredAndTeemn();
      } else if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22110
        decimalThousandAndHundredAndDecimalAndZero();
      } else if (
        numbers[numbers.length - 1] !== "0" &&
        numbers[numbers.length - 2] !== "0" &&
        numbers[numbers.length - 3] !== "0" &&
        numbers[numbers.length - 4] !== "0" &&
        numbers[numbers.length - 5] !== "0"
      ) {
        // 22122
        decimalAndOneThousandAndHundredAndDecimalAndOne();
      }
    } else if (numbers.length === 6) {
      if (
        numbers[numbers.length - 1] === "0" &&
        numbers[numbers.length - 2] === "0" &&
        numbers[numbers.length - 3] === "0" &&
        numbers[numbers.length - 4] === "0" &&
        numbers[numbers.length - 5] === "0" &&
        numbers[numbers.length - 6] === "1"
      ) {
        rawTranslation.push("One million... my work here is done!");
      }
    }
  };

  const decimalAndOneThousandAndHundredAndDecimalAndOne = () => {
    decimalThousandAndHundredAndDecimalAndZero();
    dash();
    oneDigitNumbers(numbers.length - 1);
  };

  const decimalThousandAndHundredAndDecimalAndZero = () => {
    decimalAndOneAndHundred();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const decimalThousandAndHundredAndTeemn = () => {
    decimalAndOneAndHundred();
    and();
    teensNumber(numbers.length - 1);
  };

  const decimalAndThousandAndHundredAndOne = () => {
    decimalAndOneAndHundred();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const decimalAndOneAndHundred = () => {
    decimalThousand();
    pureHundred();
  };

  const decimalThousandAndDecimalAndOne = () => {
    decimalAndOneThousand();
    and();
    decimalAndOne();
  };

  const decimalThousandAndDecimal = () => {
    decimalAndOneThousand();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const decimalAndThousandThousandAndTeens = () => {
    decimalAndOneThousand();
    and();
    teensNumber(numbers.length - 1);
  };

  const decimalAndOneThousandAndOne = () => {
    decimalAndOneThousand();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const decimalAndOneThousand = () => {
    decimalNumbers(numbers.length - 5);
    dash();
    oneDigitNumbers(numbers.length - 4);
    thousandString();
  };

  const teenThousandAndDecimalsAndOne = () => {
    teenThousand();
    and();
    decimalAndOne();
  };

  const teenThousandAndDecimals = () => {
    teenThousand();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const teenThousandAndTeens = () => {
    teenThousand();
    and();
    teensNumber(numbers.length - 1);
  };

  const teenThousandAndOne = () => {
    teenThousand();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const teenThousand = () => {
    teensNumber(numbers.length - 4);
    thousandString();
  };

  // 5 digits

  const decimalThousandAndHundredAndDecimalAndOne = () => {
    decimalThousandAndHundred();
    and();
    decimalAndOne();
  };

  const decimalThousandAndHundredAndDecimal = () => {
    decimalThousandAndHundred();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const decimalThousandAndHundredAndTeens = () => {
    decimalThousandAndHundred();
    and();
    teensNumber(numbers.length - 1);
  };

  const decimalThousandAndHundredAndOne = () => {
    decimalThousandAndHundred();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const decimalThousandAndHundred = () => {
    decimalThousand();
    and();
    pureHundred();
  };

  const decimalThousandAndDecimalsAndOne = () => {
    decimalThousand();
    decimalAndOne(numbers.length - 1);
  };

  const decimalThousandAndDecimals = () => {
    decimalThousand();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const decimalThousandAndTeens = () => {
    decimalThousand();
    and();
    teensNumber(numbers.length - 1);
  };

  const decimalThousandAndOne = () => {
    decimalThousand();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const decimalThousand = () => {
    decimalNumbers(numbers.length - 5);
    thousandString();
  };

  // 4 digits

  const thousandAndHundredAndDecimalsAndOne = () => {
    thousandAndHundred();
    and();
    decimalAndOne(numbers.length - 1);
  };

  const thousandAndHundredAndDecimals = () => {
    thousandAndHundred();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const thousandAndHundredAndTeens = () => {
    thousandAndHundred();
    and();
    teensNumber(numbers.length - 1);
  };

  const thousandAndHundredAndOne = () => {
    thousandAndHundred();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const thousandAndHundred = () => {
    pureThousand();
    pureHundred();
  };

  const thousandAndDecimalsAndOne = () => {
    thousandAndDecimals();
    oneDigitNumbers(numbers.length - 1);
  };

  const thousandAndDecimals = () => {
    pureThousand();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const thousandAndTeens = () => {
    pureThousand();
    and();
    teensNumber(numbers.length - 1);
  };

  const thousandAndOne = () => {
    pureThousand();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const pureThousand = () => {
    oneDigitNumbers(numbers.length - 4);
    thousandString();
  };

  // 3 digits

  const hundredAndDecimalsAndOne = () => {
    pureHundred();
    and();
    decimalAndOne();
  };

  const hundredAndDecimals = () => {
    oneDigitNumbers(numbers.length - 3);
    hundredsString();
    and();
    decimalNumbers(numbers.length - 2);
  };

  const hundredAndTeens = () => {
    oneDigitNumbers(numbers.length - 3);
    hundredsString();
    teensNumber(numbers.length - 1);
  };

  const hundredAndOne = () => {
    pureHundred();
    and();
    oneDigitNumbers(numbers.length - 1);
  };

  const pureHundred = () => {
    oneDigitNumbers(numbers.length - 3);
    hundredsString();
  };

  // 2 digits

  const decimalAndOne = () => {
    decimalNumbers(numbers.length - 2);
    dash();
    oneDigitNumbers(numbers.length - 1);
  };
  // words pushing functions

  const teensNumber = (index) => {
    switch (numbers[index]) {
      case "1":
        rawTranslation.push("eleven");
        break;
      case "2":
        rawTranslation.push("twelve");
        break;
      case "3":
        rawTranslation.push("thirteen");
        break;
      case "4":
        rawTranslation.push("fourteen");
        break;
      case "5":
        rawTranslation.push("fiveteen");
        break;
      case "6":
        rawTranslation.push("sixteen");
        break;
      case "7":
        rawTranslation.push("seventeen");
        break;
      case "8":
        rawTranslation.push("eighteen");
        break;
      case "9":
        rawTranslation.push("nineteen");
        break;
    }
  };

  // move push up
  const decimalNumbers = (index) => {
    switch (numbers[index]) {
      case "1":
        rawTranslation.push("ten");
        break;
      case "2":
        rawTranslation.push("twenty");
        break;
      case "3":
        rawTranslation.push("thirty");
        break;
      case "4":
        rawTranslation.push("fourty");
        break;
      case "5":
        rawTranslation.push("fifty");
        break;
      case "6":
        rawTranslation.push("sixty");
        break;
      case "7":
        rawTranslation.push("seventy");
        break;
      case "8":
        rawTranslation.push("eighty");
        break;
      case "9":
        rawTranslation.push("ninety");
    }
  };

  // 1 digit words

  const oneDigitNumbers = (index) => {
    switch (numbers[index]) {
      case "1":
        rawTranslation.push("one");
        break;
      case "2":
        rawTranslation.push("two");
        break;
      case "3":
        rawTranslation.push("three");
        break;
      case "4":
        rawTranslation.push("four");
        break;
      case "5":
        rawTranslation.push("five");
        break;
      case "6":
        rawTranslation.push("six");
        break;
      case "7":
        rawTranslation.push("seven");
        break;
      case "8":
        rawTranslation.push("eight");
        break;
      case "9":
        rawTranslation.push("nine");
        break;
      case "0":
        rawTranslation.push("zero");
        break;
    }
  };

  // return mamthematic numbers words

  const dash = () => {
    rawTranslation.push("-");
  };

  const and = () => {
    rawTranslation.push("and");
  };

  const hundredsString = () => {
    rawTranslation.push("hundred");
  };

  const thousandString = () => {
    rawTranslation.push("thousand");
  };

  const breakPoint = () => {
    if (scrollControl > 1000000) {
      return alert("Stop man! That's too much! ");
    } else if (scrollControl < 0) {
      return alert("It is not enough! Give me something more!");
    }
  };

  // ControlSyntax activation
  controlSyntax();
  breakPoint();

  let finalTranslation = rawTranslation.join(" ");

  return (
    <>
      <div className="headerContainer">
        <h1>Write a number to convert or use a scroll bar:</h1>
        <input
          data-testid="input"
          type="number"
          placeholder="write a number"
          min="0"
          value={scrollControl}
          max="100000"
          className="input"
          onChange={inputNumbers}
        ></input>
        <label className="numberLabel" for="input"></label>
        <div className="sliderWrapper">
          <input
            type="range"
            id="slider"
            className="slider"
            min="0"
            max="100000"
            value={scrollControl}
            step="1"
            onChange={inputNumbers}
          ></input>
        </div>
      </div>
      <div className="translatedContainer">
        <p data-testid="translated" className="translated">
          {finalTranslation}
        </p>
      </div>
    </>
  );
}

export default Converter;
