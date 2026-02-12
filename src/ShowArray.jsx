import { useState } from "react";

function ShowArray() {
  const [show, setShow] = useState([2, 3, 4, 5, 6]);

  return (
    <>
      {show.map((x, index) => (
        <li key={index}>
          <ul>{x}</ul>
        </li>
      ))}
    </>
  );
}

export default ShowArray;
