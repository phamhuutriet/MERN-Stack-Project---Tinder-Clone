import React from "react";
import { Component } from "react";
import "./App.css";
import Header from "./Header";
import SwipeButton from "./SwipeButton";
import TinderCards from "./tinderCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TinderCards />
        <SwipeButton />
      </div>
    );
  }
}

export default App;
