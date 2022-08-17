import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import CalcBoard from "./components/CalcBoard";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  const [chosenNumbers] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);

  const [input, setInput] = useState("");

  const onSelectLetter = (keyVal) => {
    let temp = input;
    setInput((temp += keyVal));
  };

  const onDelete = () => {
    let temp = input;
    setInput(temp.slice(0, -1));
  };

  const onEnter = () => {};

  return (
    <div className="App">
      <nav>
        <h1>make10.</h1>
      </nav>
      <AppContext.Provider
        value={{ chosenNumbers, input, onSelectLetter, onDelete, onEnter }}
      >
        <div className="game">
          <Board />
          <CalcBoard />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
