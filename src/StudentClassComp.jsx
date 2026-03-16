import React from "react";

class StudentClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
    console.log("Props by constructor :", this.props.name);
    console.log("Constructor isworking");
  }
  componentDidMount() {
    console.log("component is working");
  }
  componentDidUpdate() {
    console.log("ComponentDid Update is working");
  }
  render() {
    console.log("Props by render :", this.props.name);
    console.log("render is working");

    return (
      <>
        <p>{this.props.name}</p>
        <h2>Count :{this.state.data}</h2>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          Click{" "}
        </button>
      </>
    );
  }
}

export default StudentClassComp;
