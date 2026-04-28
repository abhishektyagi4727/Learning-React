import React, { useState } from "react";
import Hoc from "./Hoc";

function MemoDemo() {
  let [count, setCount] = useState(0);
  let [data, setData] = useState(100);
  function increment() {
    setCount(++count);
  }
  return (
    <>
      <div>MemoDemo</div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increase Count</button>
      <Hoc props={data}></Hoc>
    </>
  );
}

export default MemoDemo;
