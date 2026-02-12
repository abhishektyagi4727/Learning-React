import React from "react";
import { useState } from "react";
function IncrementAndDecrement() {
  let [show, setShow] = useState(10);
  function increment() {
    let currVal = ++show;
    setShow(currVal);
  }
  function decrement() {
    let currVal = --show;
    setShow(currVal);
  }

  return (
    <>
      <h1>{show}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default IncrementAndDecrement;
