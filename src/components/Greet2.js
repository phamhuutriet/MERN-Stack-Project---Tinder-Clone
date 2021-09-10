import React, { memo, useEffect, useState } from "react";
import GreedChildren from "./GreetChildren";
function Greet2(props) {
  const [number, setNumber] = useState(3);
  const { name, age, appSetNumber, appNumber } = props;
  console.log("G2", props);
  useEffect(() => {
    console.log("mountG2");
  }, []);
  return (
    <div>
      <h1>Hello2 {name}</h1>
      <h2>Number2: {number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase
      </button>
      <GreedChildren
        name={name}
        age={8}
        appSetNumber2={appSetNumber}
        appNumber={appNumber}
      />
      <GreedChildren />
      <GreedChildren />
    </div>
  );
}

export default memo(Greet2);
