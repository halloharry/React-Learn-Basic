import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // ------ ini membuat setState mengunakan state tanpa parameter
    // atau yang disebut juga this.state = current state
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );

    // ------ menggunakan parameter prevSvate of the component
    // function yang lebih disarankan
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log("outside log", this.state.count);
  }

  // react may group multiple setState for better performance
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  // dengan current state console log menampilkan 5 kali konsol log bukan incrementFive.

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>{" "}
        <button onClick={() => this.incrementFive()}>Increment</button>
        <div></div>
      </div>
    );
  }
}

export default Counter;
