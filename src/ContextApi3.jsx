import React, { useContext } from "react";
import { data } from "./ContextApi1";

const ContextApi3 = () => {
  const name = useContext(data);
  console.log(name);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default ContextApi3;
