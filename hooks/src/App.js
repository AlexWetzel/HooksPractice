import React, { Component } from 'react';
import Counter from "./components/Counter";
import ContextMessage from "./components/ContextMessage";
import Vote from "./components/Vote";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hooks Practice</h1>
        {/* <Counter /> */}
        <ContextMessage />
        <Vote />
      </div>
    );
  }
}

export default App;
