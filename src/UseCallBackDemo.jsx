import React, { useCallback, useState } from "react";
import UseCallBack from "./UseCallBack";
const UseCallBackDemo = () => {
  let [add, setAdd] = useState(0);
  let arr = [12, 34, 5, 6];
  let data = useCallback(arr, []);
  return (
    <>
      <UseCallBack data={data} />
      <h1>Addition : {add}</h1>
      <button onClick={() => setAdd(++add)}>Addition</button>
    </>
  );
};

export default UseCallBackDemo;
