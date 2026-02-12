import { useState } from "react";
// import reactLogo from "./assets/react.svg";

// import viteLogo from "/vite.svg";
// import "./App.css";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );
  setTimeout(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <h1>Live Clock</h1>
      <p>{currentTime}</p>
    </>
  );
}

export default LiveClock;
