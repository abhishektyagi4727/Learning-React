import React from "react";
import useCustomHook from "./useCustomHook";

const Counter = () => {
  let [count, increment, decrement] = useCustomHook();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
