import React, { useState } from "react";

function State() {
  let [name, setName] = useState("");
  let [lname, setLname] = useState("");
  let [data, setData] = useState("");

  function capture(event) {
    setName(event.target.value);
  }
  function fullName() {
    let obj = {
      name: name,
      lastName: lname,
    };
    console.log(obj);
  }
  function captureData(event) {
    setData(event.target.value);
  }
  return (
    <>
      <input type="text" placeholder="enter your name"></input>
      <input type="text" placeholder="enter your last name" />
      <button onClick={capture}></button>
    </>
  );
}

export default State;
