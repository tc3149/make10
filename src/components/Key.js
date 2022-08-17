import React from "react";

function Key({ keyVal, operator }) {
  return (
    <div className="key" id={operator ? "operator" : ""}>
      {keyVal}
    </div>
  );
}

export default Key;
