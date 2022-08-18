import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

function Keyboard() {
  const keys = ["+", "-", "*", "/", "^"];
  const keys2 = ["ENTER", "(", ")", "DELETE"];
  const { chosenNumbers, onSelectLetter, onDelete, onEnter, onUseNumber } =
    useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      for (let i = 0; i < chosenNumbers.length; i++) {
        if (
          event.key.toString() === chosenNumbers[i].num.toString() &&
          chosenNumbers[i].used !== true
        ) {
          onUseNumber(i);
          onSelectLetter(chosenNumbers[i].num);
          return;
        }
      }
      keys.forEach((key) => {
        if (event.key.toString() === key.toString()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toString() === key.toString()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      <div className="line1">
        {chosenNumbers.map((key, index) => {
          return <Key keyVal={key.num} index={index} />;
        })}
      </div>
      <div className="line2">
        {keys.map((key) => {
          return <Key keyVal={key} operator />;
        })}
      </div>
      <div className="line3">
        {keys2.map((key) => {
          return <Key keyVal={key} operator />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"I can't do this!"} />
      </div>
    </div>
  );
}

export default Keyboard;
