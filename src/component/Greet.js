import React from "react";

// ******* import component to App.js **********//

// function Greet() {
//   return <h1>hallo harry</h1>;
// }

// menggunakan parameter props //
const Greet = (props) => {
  // biasakan log untuk memastikan ada isinya
  console.log(props);
  return (
    <div>
      <h1>
        {/* manggil props sesuai naming */}
        Hello {props.name} like {props.hero}
      </h1>
      {/* children yang diapit oleh div */}
      {props.children}
    </div>
  );
};

export default Greet;
