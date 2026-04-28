import React from "react";
import { memo } from "react";

function Hoc({ props }) {
  console.log(props);

  return (
    <>
      <div>{props}</div>
    </>
  );
}

export default memo(Hoc);
