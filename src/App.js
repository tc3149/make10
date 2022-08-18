import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import CalcBoard from "./components/CalcBoard";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  var nerdamer = require("nerdamer");

  const [chosenNumbers, setChosenNumbers] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);

  const [input, setInput] = useState("");

  const onReset = () => {
    setChosenNumbers([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
    setInput("");
  };

  const onSelectLetter = (keyVal) => {
    let temp = input;
    setInput((temp += keyVal));
  };

  const onDelete = () => {
    let temp = input;
    setInput(temp.slice(0, -1));
  };

  const onEnter = () => {
    try {
      var e = nerdamer(input);
      if (e.text() === "10") {
        alert("You won!");
      } else {
        alert("Does not add up to 10");
      }
    } catch (error) {
      alert("Equation not valid");
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>make10.</h1>
      </nav>
      <p>Based on the popular Sydney train carriage game</p>
      <AppContext.Provider
        value={{
          chosenNumbers,
          input,
          onSelectLetter,
          onDelete,
          onEnter,
          onReset,
        }}
      >
        <div className="game">
          <Board />
          <CalcBoard />
          <Keyboard />
        </div>
      </AppContext.Provider>
      <p className="credits">
        Made with love ❤️ by <b>Tom</b>
      </p>
    </div>
  );
}

export default App;
