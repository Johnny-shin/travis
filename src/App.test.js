import React from "react";
import { render, getByAltText, getByText } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("proper greeting sentence", () => {
  const { container } = render(<App />);
  const greeting = TDD_greet();

  // const pElement = getByText(greeting);
  // expect(getByText(greeting).textContent).toBe(greeting);

  const para = container.getElementsByClassName("myGreet")[0];
  expect(para.innerHTML.includes(greeting)).toBe(true);
  // expect(paragraps[0])
  // expect(container.find("myGreet").text().to.equal(greeting));
  // target = container.getByText(greeting);

  // greetClass = container.getElementsByClassName("myGreet");
  // expect(container.contains("myGreet")).toBe(true);
  // expect(container.contains(greeting)).toBe(true);
  // const greetsentence = container.getElementsByClassName("myGreet");
  // expect(greetsentence.contains(greeting)).toBe(true);
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
