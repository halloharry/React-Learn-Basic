import React from "react";

// ******* import component to App.js **********//

// function Greet() {
//   return <h1>hallo harry</h1>;
// }

// dinamis
// ------------- menggunakan parameter props // cara pertama ----------
// const Greet = (props) => {
//   // biasakan log untuk memastikan ada isinya
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         {/* manggil props sesuai naming */}
//         Hello {props.name} like {props.hero}
//       </h1>
//       {/* children yang diapit oleh div */}
//       {props.children}
//     </div>
//   );

// ******** cara ke dua *********
// ** menggunakan ({}) langusng untuk memanggil props
// const Greet = ({ name, hero, children }) => {
//   // biasakan log untuk memastikan ada isinya
//   console.log(name, hero);
//   return (
//     <div>
//       <h1>
//         {/* manggil props sesuai naming */}
//         Hello {name} like {hero}
//       </h1>
//       {/* children yang diapit oleh div */}
//       {children}
//     </div>
//   );

// ******** cara ke tiga *********
// ** menggunakan ditampung dulu
const Greet = (props) => {
  // biasakan log untuk memastikan ada isinya
  console.log(props);
  const { name, hero, children } = props;
  return (
    <div>
      <h1>
        {/* manggil props sesuai naming */}
        Hello {name} like {hero}
      </h1>
      {/* children yang diapit oleh div */}
      {children}
    </div>
  );
};

export default Greet;
