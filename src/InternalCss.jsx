import React from "react";
import { useState } from "react";
function InternalCss() {
  let style = {
    backgroundColor: "green",
    height: "50px",
    width: "300px",
    textAlign: "center",
  };
  return (
    <>
      <h1 style={style}>Helo</h1>
      <div
        style={{
          backgroundColor: "yellow",
          height: "50px",
          width: "200px",
          textAlign: "center",
        }}
      >
        Inline CSS
      </div>
    </>
  );
}
export default InternalCss;
