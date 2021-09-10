import React, { useState } from "react";
class Greet3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 20, age: 22, height: 1.72 };
  }
  // state = {number: 20};
  componentDidMount() {
      console.log("Greet3");
  }
  render() {
    const { name } = this.props;
    console.log("RenderG3");
    return (
      <div>
        <h1>Hello3 {name}</h1>
        <h2>Number3: {this.state.number}</h2>
        <h2>Age3: {this.state.age} </h2>
        <h2>Height3: {this.state.height} </h2>
        <button
          onClick={() => {
            this.setState({number: this.state.number + 1, age: this.state.age + 1, height: this.state.height + 1});
          }}
        >
          Increase
        </button> 
      </div>
    );
  }
}

export default Greet3;
