import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, operator, index }) {
  const {
    chosenNumbers,
    onEnter,
    onDelete,
    onSelectLetter,
    onReset,
    onUseNumber,
  } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else if (keyVal === "I can't do this!") {
      onReset();
    } else {
      if (Number.isInteger(parseInt(keyVal))) {
        for (let i = 0; i < chosenNumbers.length; i++) {
          if (chosenNumbers[i].used !== true) {
            onUseNumber(i);
            onSelectLetter(chosenNumbers[i].num);
            return;
          }
        }
      } else {
        onSelectLetter(keyVal);
      }
    }
  };

  return (
    <div
      className="key"
      id={operator ? "operator" : "blue"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
