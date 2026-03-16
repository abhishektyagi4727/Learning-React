import React, { useState } from "react";
import "./App.css";

function Form() {
  let [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  function submit(e) {
    e.preventDefault();
    console.log(data);
  }
  function change(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <>
      <div className="valid">
        <h1>Form Validation</h1>
      </div>
      <form onSubmit={submit}>
        <label>Enter your first Name</label>
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="firstName"
          value={data.firstName}
          onChange={change}
        />
        <br></br>
        <label>Enter your Last Name</label>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lastName"
          value={data.lastName}
          onChange={change}
        />
        <br></br>
        <label>Enter your Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={data.email}
          onChange={change}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
