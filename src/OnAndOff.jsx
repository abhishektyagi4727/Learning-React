import React from "react";
import { useState } from "react";
function OnAndOff() {
  let [data, setData] = useState("ON");
  function demo() {
    if (data == "ON") {
      setData("OFF");
    } else {
      if (data == "OFF") {
        setData("ON");
      }
    }
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={demo}>Toggle</button>
    </>
  );
}
export default OnAndOff;
