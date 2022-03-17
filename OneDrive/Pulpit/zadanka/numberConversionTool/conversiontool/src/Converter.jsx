import { useState } from "react";

// const numberMap = {
//   0: "zero",
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7:  'seven',
//   8:  'eight',
//   9:  'nine',
// };

function Converter() {
  const [numbers, setNumbers] = useState([]);

  const inputNumbers = (e) => {
    let value = e.target.value;
    setNumbers(value.split(""));
  };

  const rawTranslation = [];

  const controlSyntax = () => {
    if (numbers.length === 0) {
      return;
    } else if (numbers.length > 1 && numbers[0].includes("0")) {
      return alert(
        "Number that contain`s more then two digit`s can not start with 0!"
      );
    } else if (numbers.length === 1) {
      oneDigitNumbers();
    } else if (numbers.length === 2 && numbers[0].includes("1")) {
      teensNumber(1);
    } else if (numbers.length === 2 && numbers[1].includes("0")) {
      ntyZeroes(0);
    } else if (numbers.length === 2 && !numbers[1].includes("0")) {
      twoDigitsNtySomethings();
    } else if (
      numbers.length === 3 &&
      numbers[1].includes("0") &&
      numbers[2].includes("0")
    ) {
      hundredZeroes(0);
    } else if (
      numbers.length === 3 &&
      numbers[1].includes("0") &&
      !numbers[2].includes("0")
    ) {
      hundredZeroOnes(2);
    } else if (numbers.length === 3 && numbers[1].includes("1")) {
      hundredTeens();
    } else if (
      numbers.length === 3 &&
      !numbers[1].includes("1" || "0") &&
      numbers[2].includes("0")
    ) {
      hundredNtyZeroes();
    } else if (
      numbers.length === 3 &&
      !numbers[1].includes("1" || "0") &&
      !numbers[2].includes("0")
    ) {
      hundredNtySomething();
    } else if (numbers.length === 4) {
      if (
        numbers[1].includes("0") &&
        numbers[2].includes("0") &&
        numbers[3].includes("0")
      ) {
        thousend(0);
      } else if (
        numbers[1].includes("0") &&
        numbers[2].includes("0") &&
        !numbers[3].includes("0")
      ) {
        thousendZeroOnes(0);
      } else if (numbers[1].includes("0") && numbers[2].includes("1")) {
        thousendZeroTeens(0);
      } else if (numbers[1].includes("0") && !numbers[2].includes("1" || "0")) {
        thousendNthSomething(0);
      }
    }
  };

  const thousendNthSomething = () => {
    thousend(0);
    ntySomethings(2);
    rawTranslation.push("-");
    ntySomethingSecondDigit(3);
  };

  const thousendZeroTeens = () => {
    thousend(0);
    teensNumber(3);
  };

  const thousendZeroOnes = (index) => {
    thousend(index);
    rawTranslation.push("and");
    switch (numbers[3]) {
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
    }
  };

  const thousend = (index) => {
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
    }
    rawTranslation.push("thousend");
  };

  const twoDigitsNtySomethings = () => {
    ntySomethings(0);
    rawTranslation.push("-");
    ntySomethingSecondDigit(1);
  };

  const hundredNtySomething = () => {
    hundredZeroes(0);
    rawTranslation.push("and");
    ntySomethings(1);
    rawTranslation.push("-");
    ntySomethingSecondDigit(2);
  };

  const hundredNtyZeroes = () => {
    hundredZeroes(0);
    rawTranslation.push("and");
    ntyZeroes(1);
  };

  const hundredTeens = () => {
    hundredZeroes(2);
    rawTranslation.push("and");
    teensNumber(2);
  };

  const hundredZeroOnes = (index) => {
    hundredZeroes(0);
    rawTranslation.push("and");
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
    }
  };

  const hundredZeroes = (index) => {
    switch (numbers[index]) {
      case "1":
        rawTranslation.push("one");
        hundreds();
        break;
      case "2":
        rawTranslation.push("two");
        hundreds();
        break;
      case "3":
        rawTranslation.push("three");
        hundreds();
        break;
      case "4":
        rawTranslation.push("four");
        hundreds();
        break;
      case "5":
        rawTranslation.push("five");
        hundreds();
        break;
      case "6":
        rawTranslation.push("six");
        hundreds();
        break;
      case "7":
        rawTranslation.push("seven");
        hundreds();
        break;
      case "8":
        rawTranslation.push("eight");
        hundreds();
        break;
      case "9":
        rawTranslation.push("nine");
        hundreds();
        break;
    }
  };

  const hundreds = () => {
    rawTranslation.push("hundred");
  };

  const ntySomethings = (index) => {
    switch (numbers[index]) {
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

  const ntySomethingSecondDigit = (index) => {
    if (numbers[index] !== "0") {
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
    }
  };

  const oneDigitNumbers = () => {
    numbers.map((number) => {
      switch (number) {
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
    });
  };

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
      case "0":
        rawTranslation.push("ten");
        break;
    }
  };

  const ntyZeroes = (idnex) => {
    switch (numbers[idnex]) {
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

  controlSyntax();
  console.log("raw", rawTranslation);

  return (
    <>
      <input type="number" className="input" onChange={inputNumbers}></input>

      <p className="translated">
        {rawTranslation.map((el) => (
          <p>{el}</p>
        ))}
      </p>
    </>
  );
}

export default Converter;
