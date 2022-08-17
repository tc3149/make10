import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

function Keyboard() {
  const keys = ["+", "-", "*", "^", "/"];
  const { chosenNumbers } = useContext(AppContext);

  return (
    <div className="keyboard">
      <div className="line1">
        {chosenNumbers.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="line2">
        {keys.map((key) => {
          return <Key keyVal={key} operator />;
        })}
      </div>
    </div>
  );
}

export default Keyboard;
