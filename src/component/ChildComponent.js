import React from "react";

// nggunakan props unttuk passing dari parent
function ChildComponent(props) {
  const { greedParent, greedParent2 } = props;
  return (
    <div>
      <button onClick={greedParent}>greed parent 1 </button>
      <button onClick={() => greedParent2("child")}>greed parent 2</button>
    </div>
  );
}

export default ChildComponent;
