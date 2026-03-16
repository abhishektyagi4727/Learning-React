import React, { useState } from "react";

function Form2() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");
  let [hobby, setHobby] = useState([]);
  let [message, setMessage] = useState("");
  let [country, setLocation] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log(gender);
    console.log(hobby);
    console.log(message);
    console.log(country);
  }

  function change(e) {
    // console.log(e.target);
    // console.dir(e.target);

    const { name, value, checked, type } = e.target;

    if (name === "name") setName(value);
    if (name === "password") setPassword(value);
    if (name === "gender") setGender(value);
    if (name === "message") setMessage(value);
    if (name === "country") setLocation(value);

    if (name === "hobby") {
      if (checked) {
        setHobby([...hobby, value]);
      } // else {
      //   setHobby(hobby.filter((h) => h !== value));
      // }
    }
  }

  return (
    <>
      <form onSubmit={submit} name="userForm">
        <header>
          <h2>User Registration Form</h2>
          <p>Please fill all required fields.</p>
        </header>

        <fieldset>
          <legend>Basic Information</legend>

          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={change}
            placeholder="Enter your full name"
            required
            minLength="3"
            maxLength="30"
            autoComplete="name"
          />
          <br />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={change}
            placeholder="Minimum 6 characters"
            required
            minLength="6"
            autoComplete="new-password"
          />
        </fieldset>

        <br />

        <fieldset>
          <legend>Gender</legend>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={change}
            required
          />
          <label htmlFor="female">Female</label>
          <br />

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={change}
          />
          <label htmlFor="male">Male</label>
          <br />

          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={change}
          />
          <label htmlFor="other">Other</label>
        </fieldset>

        <br />

        <fieldset>
          <legend>Hobbies</legend>

          <input
            type="checkbox"
            id="swimming"
            name="hobby"
            value="swimming"
            onChange={change}
          />
          <label htmlFor="swimming">Swimming</label>
          <br />

          <input
            type="checkbox"
            id="football"
            name="hobby"
            value="football"
            onChange={change}
          />
          <label htmlFor="football">Football</label>
          <br />

          <input
            type="checkbox"
            id="reading"
            name="hobby"
            value="reading"
            onChange={change}
          />
          <label htmlFor="reading">Reading</label>
        </fieldset>

        <br />

        <fieldset>
          <legend>Message</legend>

          <label htmlFor="message">Your Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={change}
            rows="4"
            cols="40"
            placeholder="Write your message here..."
            maxLength="200"
          ></textarea>
        </fieldset>

        <br />

        <fieldset>
          <legend>Location</legend>

          <label htmlFor="country">Country:</label>
          <br />
          <select
            id="country"
            name="country"
            value={country}
            onChange={change}
            required
          >
            <option value="">--Select Country--</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </fieldset>

        <br />

        <footer>
          <button type="submit">Submit Form</button>
          <button type="reset">Reset Form</button>
        </footer>
      </form>
    </>
  );
}

export default Form2;
