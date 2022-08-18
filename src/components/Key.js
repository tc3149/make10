import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, operator }) {
  const { onEnter, onDelete, onSelectLetter, onReset } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else if (keyVal === "I can't do this!") {
      onReset();
    } else {
      onSelectLetter(keyVal);
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
