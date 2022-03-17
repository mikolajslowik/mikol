export const controlSyntax = (numbers) => {
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
