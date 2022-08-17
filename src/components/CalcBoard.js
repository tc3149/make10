import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function CalcBoard() {
  const { input } = useContext(AppContext);

  return (
    <div className="calcBoard">
      <div className="row">
        <Letter val={input} id="red" />
      </div>
    </div>
  );
}

export default CalcBoard;
