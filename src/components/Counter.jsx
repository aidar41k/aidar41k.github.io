import React, { useState } from "react";

function Counter(props) {
  const [state, setState] = useState(0);

  const handleCount = () => {
    setState((prev) => prev + 1);
  };
  const handleMinus = () => {
    setState((prev) => prev - 1);
  };
  return (
    <div>
      <div>{state}</div>
      <button onClick={handleCount}>увеличить</button>
      <button onClick={handleMinus}>уменшить</button>
    </div>
  );
}

export default Counter;
