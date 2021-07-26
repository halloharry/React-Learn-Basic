import React, { Component } from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";

class App extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="App">
            <Greet />
            <Welcome />
          </div>
        </div>
      </>
    );
  }
}

export default App;

/**
 * ======== KONSEP NAVIGATION ========
 * App: <= buat state disini
 *    - Nav:
 *          - Menu
 *    - Body
 */

/**
 * Latihan:
 *        - Convert halaman HTML ke dalam React (header, body, table, pagination)
 *
 *
 * Latihan:
 *        - Buat login page dengan verifikasi username & password
 *        - Fungsikan fitur Add, Edit & Delete pada list data sebelumnya
 *        - Pagination Google harus berfungsi
 *
 *
 * Latihan:
 *        - Buat pagination untuk login, register dan list user
 *        - Setiap user yang register, masuk ke daftar list user
 *        - Setiap user yang login, ngecek data ke list user
 *        - Terapkan atomic design
 */
