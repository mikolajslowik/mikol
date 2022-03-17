import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("case zero", () => {
  render(<App />);
  const inputNumber = screen.getByTestId("input");
  const show = screen.getByTestId("translated");
  inputNumber. 
  // fireEvent.keyDown(document.body, { key: "2", keyCode: "50" });
  // fireEvent.keyDown(document.body, { key: "3", keyCode: "51" });

  expect(show.textContent).toEqual(parseInt("123"));
});

// test("case zero word", () => {
//   render(<App />);
//   // const inputNumber = screen.getByTestId("input");

//   fireEvent.keyDown(document.body, { key: "0", keyCode: "digit0" });

//   const show = screen.getByTestId("translated");
//   // expect(inputNumber.value).toContain("0");
//   expect(show).toHaveTextContent("zero");
// });
