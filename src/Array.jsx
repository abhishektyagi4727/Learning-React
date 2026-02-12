import React from "react";

function Array({ arr }) {
  console.log(arr);

  return (
    <>
      <div>
        <ul>
          {arr.map((x, index) => {
            return <li key={index}>{x}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Array;
