import { createContext, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";

export const AppContext = createContext();

function App() {
  const [chosenNumbers, setChosenNumbers] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);

  console.log(chosenNumbers);
  console.log(chosenNumbers[0]);

  return (
    <div className="App">
      <nav>
        <h2>make10.</h2>
      </nav>
      <AppContext.Provider value={{ chosenNumbers }}>
        <div className="game">
          <Board />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
