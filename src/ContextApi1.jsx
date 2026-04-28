import React, { createContext } from "react";
import ContextApi2 from "./ContextApi2";
let data = createContext();
const ContextApi1 = ({ name }) => {
  return (
    <>
      <data.Provider value={name}>
        <ContextApi2 />
      </data.Provider>
    </>
  );
};

export default ContextApi1;
export { data };
