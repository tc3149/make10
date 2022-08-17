import React from "react";

function Letter({ val, id }) {
  return (
    <div className="letter" id={id}>
      {val}
    </div>
  );
}

export default Letter;
