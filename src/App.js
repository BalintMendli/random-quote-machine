import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
          <div id="author">Lorem ipsum</div>
          <div id="lower-div">
            <button id="new-quote"></button>
            <button id="tweet-quote"></button>
            <button id="tumblr"></button>
          </div>
        </div>
        <div id="sign">by zenott</div>
      </div>
    );
  }
}

export default App;
