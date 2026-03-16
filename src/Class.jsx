import React from "react";

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  change() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {}
}

export default Class;
