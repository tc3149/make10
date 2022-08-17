import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board() {
  const { chosenNumbers } = useContext(AppContext);
  return (
    <div className="board">
      <div className="row">
        <Letter val={chosenNumbers[0]} />
        <Letter val={chosenNumbers[1]} />
        <Letter val={chosenNumbers[2]} />
        <Letter val={chosenNumbers[3]} />
      </div>
    </div>
  );
}

export default Board;
