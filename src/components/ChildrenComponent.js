import React, { Component } from "react";

function ChildrenComponent(props) {
  return (
    <div>
      <h1>Testing</h1>
      <button onClick={() => props.greetHandler("child")}>Click now</button>
    </div>
  );
}

export default ChildrenComponent;
