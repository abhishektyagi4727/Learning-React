import React from "react";
import { useState } from "react";

function Api() {
  let [data, setData] = useState([]);
  async function demo() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await response.json();
    setData(result);
  }
  demo();

  //   console.log(data);
  return (
    <>
      {data.map((x) => {
        return <li key={x.id}>{x.title}</li>;
      })}
    </>
  );
}

export default Api;
