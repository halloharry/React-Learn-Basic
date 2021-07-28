import React, { Component } from "react";

//**********************  SEND COMPONENT TO APP.JS ***************//
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // ****** cara ke pertama **********
  // render() {
  //   console.log(this.props);
  //   return (
  //     // props didalam class component harus menggunakan 'this'
  //     // 'prop' value is immutable or cannot be change
  //     <h1>
  //       Hello {this.props.name} like {this.props.hero}{" "}
  //     </h1>
  //   );
  // }

  // ****** cara ke dua **********
  render() {
    console.log(this.props);
    const { name, hero } = this.props;
    // bisa juga state
    // const {state1 , state2}  = this.state
    return (
      // props didalam class component harus menggunakan 'this'
      // 'prop' value is immutable or cannot be change
      <h1>
        Hello {name} like {hero}{" "}
      </h1>
    );
  }
}

export default Welcome;
