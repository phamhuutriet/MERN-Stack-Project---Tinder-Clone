import React, { useState } from "react";
function GreedChildren(props) {
  const [number, setNumber] = useState(3);
  const {name, age, appSetNumber2, appNumber} = props;
  console.log("GC", props);
    return (
    <div>
      <h4>Children {name}</h4>
      <h5>NumberChildren: {number}</h5>
      <button onClick={() => {appSetNumber2(appNumber + 1)}}>Increase</button>
    </div>
  );
}

export default GreedChildren;