import React, { useState } from "react";

const Rate = ({ callback }) => {
  const [value, setVal] = useState(5);

  return (
    <div>
  
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => {
          setVal(e.currentTarget.value);
        }}
      ></input>

      {value}
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </div>
  );
};

export default Rate
