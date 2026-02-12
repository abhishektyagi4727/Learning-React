import { useState } from "react";

function ShowMsg() {
  const [show, setShow] = useState(false);

  function change() {
    setShow(true);
  }
  let item = null;
  if (show) {
    item = <h1>Hello from user</h1>;
  }

  return (
    <>
      <button onClick={change}>Log in</button>
      {item}
    </>
  );
}
export default ShowMsg;
