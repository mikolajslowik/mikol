/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

test("is button value egual to input value", () => {
  render(<App />);
  const button = screen.getByText("1");
  expect(button).toHaveTextContent("1");
});

test("is button value egual to input value", () => {
  render(<App />);
  const result = screen.getByTitle("resultView");
  expect(result).toHaveTextContent("");
});

test("calls onClick prop when clicked", () => {
  render(<App />);
  const button = screen.getByText("1");
  const result = screen.getByTitle("resultView");
  fireEvent.click(button);
  expect(result).toHaveTextContent("1");
});

test("mappiing buttons and checking if it values matches", () => {
  render(<App />);
  const allButtons = screen.getAllByRole("button");
  const buttons = allButtons.filter((button) => !isNaN(Number(button)));
  const result = screen.getByTitle("resultView");
  buttons.forEach((button, id) => {
    fireEvent.click(button);
    expect(button).toHaveValue(id + 1);
    expect(result).toHaveTextContent(`${id} + 1`);
    console.log(buttons);
  });
});
