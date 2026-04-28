import React, { useMemo, useState } from "react";

// function UseMemoDemo() {
//   let [count, setCount] = useState(0);
//   let [data, setData] = useState(10);
//   function increment() {
//     console.log("increment function is callled ");
//     return count * 10;
//   }
//   return (
//     <>
//       <div>UseMemoDemo</div>
//       <h1>{count}</h1>
//       <h1>{data}</h1>
//       <h1>{increment()}</h1>
//       <button onClick={() => setData(data * 10)}>Multiply Data</button>
//       <button onClick={() => setCount(count + 1)}>Increase count</button>
//     </>
//   );
// }
function UseMemoDemo() {
  let [count, setCount] = useState(0);
  let [data, setData] = useState(10);
  const x = useMemo(
    function increment() {
      console.log("increment function is callled ");
      return count * 10;
    },
    [count],
  );
  return (
    <>
      <div>UseMemoDemo</div>
      <h1>{count}</h1>
      <h1>{data}</h1>
      <h1>{x}</h1>
      <button onClick={() => setData(data * 10)}>Multiply Data</button>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </>
  );
}

export default UseMemoDemo;
