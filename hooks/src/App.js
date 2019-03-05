import React, { Component } from 'react';
import Counter from "./components/Counter";
import Vote from "./components/Vote";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hooks Practice</h1>
        {/* <Counter /> */}
        <Vote />
      </div>
    );
  }
}

export default App;
