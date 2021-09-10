import React, { useState } from "react";
import { Component } from "react";
import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        <Greet />
        <h1>Helloadasdadadsadwa</h1>
      </div>
    );
  }
}

export default App;
