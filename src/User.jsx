import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let data = useParams();
  return (
    <>
      <h1>Hello User your id is {data.id}</h1>
    </>
  );
}

export default User;
