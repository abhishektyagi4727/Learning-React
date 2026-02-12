import React from "react";
import { useState } from "react";
let count = 1;
function TextColor() {
  let [demo, setDemo] = useState("skyblue");
  function changeColor() {
    let arr = [
      "black",
      "white",
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "violet",
      "indigo",
      "pink",
      "brown",
      "gray",
      "cyan",
      "magenta",
      "lime",
      "maroon",
      "navy",
      "teal",
      "olive",
      "gold",
    ];
    setDemo(arr[count]);
    count++;
    if (count > 5) {
      count = 0;
    }
  }

  return (
    <>
      <h1 style={{ backgroundColor: demo }}>Javascript</h1>
      <button onClick={changeColor}>Change Text Color</button>
    </>
  );
}
export default TextColor;
