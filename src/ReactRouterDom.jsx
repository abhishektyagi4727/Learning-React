import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Demo from "./Demo";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import PageNotFound from "./PageNotFound";
import User from "./User";
const ReactRouterDom = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/about">About</Link>
          <br></br>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home name="Hello Home" />} />
          <Route path="/contact" element={<Contact name="Hello Contact" />} />
          <Route path="/about" element={<About name="Hello About" />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouterDom;
