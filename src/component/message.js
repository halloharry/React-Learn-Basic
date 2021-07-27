import React, { Component } from "react";

//**********************  SEND COMPONENT TO APP.JS ***************//
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "welcome visitor",
    };
  }

  // state can be change wth function
  // setState for change this.state
  changeMessage() {
    this.setState({
      message: "thank you for clickin me",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
