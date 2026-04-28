import { useState } from "react";

let useCustomHook = () => {
  let [count, setCount] = useState(0);
  function increment() {
    setCount(++count);
  }
  function decrement() {
    setCount(--count);
  }
  return [count, increment, decrement];
};
export default useCustomHook;
