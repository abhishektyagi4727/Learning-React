import React from "react";

function Jsx(val) {
  console.log(val.children);

  return <>{val.children}</>;
}

export default Jsx;
