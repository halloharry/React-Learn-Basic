import React from "react";

function FunctionalClick() {
  // short cut snippet rfce
  function clickHandler() {
    console.log("button click");
  }
  return (
    <div>
      <button onClick={clickHandler}>klik ini</button>
    </div>
  );
}

export default FunctionalClick;
