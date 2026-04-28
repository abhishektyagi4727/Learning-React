import React, { createRef } from "react";

class UseCreate extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log((this.inputRef.current.value = "neha"));
  }

  getValue() {
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getValue()}>Click Ref</button>
      </>
    );
  }
}

export default UseCreate;
