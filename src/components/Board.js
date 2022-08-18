import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board({ used }) {
  const { chosenNumbers } = useContext(AppContext);
  return (
    <div className="board">
      <div className="row">
        <Letter
          val={chosenNumbers[0].num}
          id={chosenNumbers[0].used ? "used" : ""}
        />
        <Letter
          val={chosenNumbers[1].num}
          id={chosenNumbers[1].used ? "used" : ""}
        />
        <Letter
          val={chosenNumbers[2].num}
          id={chosenNumbers[2].used ? "used" : ""}
        />
        <Letter
          val={chosenNumbers[3].num}
          id={chosenNumbers[3].used ? "used" : ""}
        />
      </div>
    </div>
  );
}

export default Board;
