import React from "react";
import logo from "./logo.svg";
import "./App.css";
function greet() {
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
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="myGreet">{greet()}, COMP311 failed test</p>
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
