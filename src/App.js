import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <button id="new-quote"></button>
          <button id="tweet-quote"></button>
          <button id="tumblr"></button>
        </div>
      </div>
    );
  }
}

export default App;
