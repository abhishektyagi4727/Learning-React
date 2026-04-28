import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>PageNotFound</h1>
      <h1>404 Error</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default PageNotFound;
