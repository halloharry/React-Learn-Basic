import React from "react";

// ----------- COMPONENT JSC EXAMPLE -----------//
const Hallo = () => {
  return (
    <div>
      <h1>Hello INI JSX</h1>
    </div>
  );
};

// INI BUKAN JSX ------------// LEBIH RIBET
// const Hallo = () => {
//   // ini tidak sesuai untuk tag html
//   //   return React.createElement("div", null, "h1 ", "ini contoh bukan jsx");

//   return React.createElement(
//     "div",
//     { id: "hello", className: "dummyClass" }, // ini memberi key pada pembuatan create element
//     React.createElement("h1", null, "ini bukan menggunakan jsx")
//   );
// };

export default Hallo;
