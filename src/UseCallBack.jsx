import React, { memo } from "react";

const UseCallBack = ({ data }) => {
  console.log("chilld compponent call");

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default memo(UseCallBack);
