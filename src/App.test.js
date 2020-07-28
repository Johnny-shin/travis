import React from "react";
import { render, getByAltText, getByText } from "@testing-library/react";
import App from "./App";

//Test case 1
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Test case 2
test("proper greeting sentence", () => {
  const { container } = render(<App />);
  const greeting = TDD_greet();

  const para = container.getElementsByClassName("myGreet")[0];
  expect(para.innerHTML.includes(greeting)).toBe(false); //This line compare text in page with return result from TDD_greet()
});
const TDD_greet = () => {
  let today = new Date();
  let hours = today.getHours();
  var greeting = "";
  if (hours < 12) {
    greeting = "Good morning";
  } else if ((hours >= 12) & (hours < 18)) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return greeting;
};
