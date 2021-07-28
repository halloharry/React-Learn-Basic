import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }
  // ******* CONDITIONAL RENDERING ********

  render() {
    return this.state.isLogged ? (
      <div>hallo harry</div>
    ) : (
      <div>hallo guest</div>
    );
  }
  // *********** yang kedua ***********
  // let message
  //  if (this.state.isLogged) {
  // message = <div>hallo harry </div>
  // } else{
  //     message = <div>hallo guest</div>
  // }

  // return(
  //     <div>{message}</div>
  // )

  // ************ yang pertama ribet *************
  // if (this.state.isLogged) {
  //   console.log("hallo harry", this.state.isLogged); // jika true akan menjalankan yang dibawah

  //   return <div>hallo harry</div>;
  // } else {
  //   console.log("hallo guest", this.state.isLogged); // jika false akan menjalan kondisi ini

  //   return <div>hallo guest</div>;
  // }

  // return (
  //   <div>
  //     <div>hallo harry</div>
  //     <div>hallo guest</div>
  //   </div>
  // );
  //   }
}

export default UserGreeting;
