import React, { useState } from "react";

function Hello() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div style={styles.container}>
      <h1>Hello {name ? name : "Guest"} </h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={handleClear} style={styles.button}>
        Clear
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "8px",
    margin: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Hello;
