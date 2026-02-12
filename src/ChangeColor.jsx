import { useState } from "react";

function ChangeColor() {
  const [show, setShow] = useState(false);

  function change() {
    setShow(true);
  }

  let item = null;
  if (show) {
    item = (
      <body
        style={{
          backgroundColor: "blue",
        }}
      ></body>
    );
  }

  return (
    <>
      <button onClick={change}>Log in</button>
      {item}
    </>
  );
}

export default ChangeColor;
