import React, { Component } from "react";

//**********************  SEND COMPONENT TO APP.JS ***************//
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      // props didalam class component harus menggunakan 'this'
      // 'prop' value is immutable or cannot be change
      <h1>
        Hello {this.props.name} like {this.props.hero}{" "}
      </h1>
    );
  }
}

export default Welcome;
