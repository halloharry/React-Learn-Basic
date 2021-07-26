import React, { Component } from "react";

//**********************  SEND COMPONENT TO APP.JS ***************//
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>class component</h1>;
  }
}

export default Welcome;
