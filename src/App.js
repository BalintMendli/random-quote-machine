import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'

library.add(faQuoteLeft, faTwitter, faTumblr);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text"><FontAwesomeIcon icon="quote-left" color="#00dbdb" size="lg" pull="left"/>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
          <div id="author">Lorem ipsum</div>
          <div id="lower-div">
            <div id="social">
              <button id="tweet-quote" className="button"><FontAwesomeIcon icon={faTwitter} size="lg" color="#ffffff"/></button>
              <button id="tumblr" className="button"><FontAwesomeIcon icon={faTumblr} size="lg" color="#ffffff"/></button>
            </div>
            <button id="new-quote" className="button">New quote</button>
          </div>
        </div>
        <div id="sign">by zenott</div>
      </div>
    );
  }
}

export default App;
