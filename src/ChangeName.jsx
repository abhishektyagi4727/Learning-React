import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function ChangeName() {
  const [currentTime, setCurrentTime] = useState("Himanshu");
  function change() {
    setCurrentTime("rahul");
  }

  return (
    <>
      <p>{currentTime}</p>
      <button onClick={change}>Change Name</button>
      {/* onClick={()=>setCounter(count++)}
       */}
    </>
  );
}

export default ChangeName;
