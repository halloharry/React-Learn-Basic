// perbedaan antara props dan state

// -------- props --------
// - bisa dikirim ke komponen
// - parameter fungsi
// - tidak bisa di ubah oleh Children
// - props = fungtional komponen
// - this.props = class komponen

// ----------- state ------------
// - state itu dikelola didalam komponen
// - bisa menjadi variable fungsi
// - bisa di ubah
// - useState = fungsi komponen
// - this.state = class component

import React, { Component } from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hallo from "./component/Hallo";
import Message from "./component/message";

class App extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="App">
            {/* --- name dan hero ini adalah props agar menjadi dinamis --- */}
            <Greet name="Jooko" hero="batman">
              {/* tag <p> dalam Greet menjadi children dari Tag Greet */}
              <p>this is children props from Greed</p>
            </Greet>
            {/* <Greet name="diana" hero="justin bieber" />
            <Greet name="smart" hero="brook" />
            <Welcome name="Jooko" hero="batman" />
            <Welcome name="smart" hero="brook" />
            <Welcome name="diana" hero="justin bieber" /> */}
            <Hallo />
            <Message />
          </div>
        </div>
      </>
    );
  }
}

export default App;
