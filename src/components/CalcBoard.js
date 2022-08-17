import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function CalcBoard() {
  return (
    <div className="calcBoard">
      <div className="row">
        <Letter val={""} />
        <Letter val={""} id="red" />
        <Letter val={""} />
        <Letter val={""} id="red" />
        <Letter val={""} />
        <Letter val={""} id="red" />
        <Letter val={""} />
      </div>
    </div>
  );
}

export default CalcBoard;
