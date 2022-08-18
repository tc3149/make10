import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import CalcBoard from "./components/CalcBoard";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  var nerdamer = require("nerdamer");

  const [chosenNumbers, setChosenNumbers] = useState([
    { num: Math.floor(Math.random() * 10), used: false },
    { num: Math.floor(Math.random() * 10), used: false },
    { num: Math.floor(Math.random() * 10), used: false },
    { num: Math.floor(Math.random() * 10), used: false },
  ]);

  const [input, setInput] = useState("");

  const onReset = () => {
    setChosenNumbers([
      { num: Math.floor(Math.random() * 10), used: false },
      { num: Math.floor(Math.random() * 10), used: false },
      { num: Math.floor(Math.random() * 10), used: false },
      { num: Math.floor(Math.random() * 10), used: false },
    ]);
    setInput("");
  };

  const onSelectLetter = (keyVal) => {
    let temp = input;
    setInput((temp += keyVal));
  };

  const onUseNumber = (index) => {
    console.log("we used ", index);
    let newNumbers = chosenNumbers.map((item, c_index) => {
      if (index === c_index) {
        return { ...item, used: true };
      }
      return item;
    });

    setChosenNumbers(newNumbers);
  };

  const onDelete = () => {
    let temp = input;
    let val = temp.slice(-1)[0];

    if (Number.isInteger(parseInt(val))) {
      let newNumbers = [];
      let entered = false;
      for (let i = 0; i < chosenNumbers.length; i++) {
        if (
          chosenNumbers[i].num == parseInt(val) &&
          entered == false &&
          chosenNumbers[i].used == true
        ) {
          newNumbers.push({ num: chosenNumbers[i].num, used: false });
          entered = true;
          continue;
        } else {
          newNumbers.push(chosenNumbers[i]);
        }
      }
      console.log(newNumbers);
      setChosenNumbers(newNumbers);
    }

    // have to remove used if it is a number

    setInput(temp.slice(0, -1));
  };

  const onEnter = () => {
    try {
      var e = nerdamer(input);
      if (e.text() === "10") {
        alert("You won!");
      } else {
        alert(`${e} does not equal to 10`);
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
          onUseNumber,
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
