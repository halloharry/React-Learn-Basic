// event bind

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello event bind class",
    };
    this.clickHandler = this.clickHandler.bind(this); // second best using
  }

  // cara menggunakan bind pada fungsi 'this'
  clickHandler() {
    this.setState({
      message: "goodbye event bind",
    });
    console.log(this);
  }

  // sugesti dari react.org
  clickFunc = () => {
    this.setState({
      message: "arrow function",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>bind click</button>
        <button onClick={() => this.clickHandler()}>
          arrow function dalam on click
        </button>
        <button onClick={this.clickHandler}>bind ada di dalam component</button>
        <button onClick={this.clickFunc}>arrow function </button>
      </div>
    );
  }
}

export default EventBind;
