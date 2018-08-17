import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import quotes from './quotes.json';

library.add(faQuoteLeft, faTwitter, faTumblr);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote:'',
      author:''
    };
    this.changeQuote=this.changeQuote.bind(this);
  }
  changeQuote(){
    let n=quotes.quotes.length;
    let qnum=Math.floor(n*Math.random());
    this.setState({      
      quote: quotes.quotes[qnum].quote,
      author: quotes.quotes[qnum].author
    });
  }
  componentDidMount(){
    this.changeQuote();
  }
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text"><FontAwesomeIcon icon="quote-left" color="#00dbdb" size="lg" pull="left"/>{this.state.quote}</div>
          <div id="author">- {this.state.author}</div>
          <div id="lower-div">
            <div id="social">
              <button id="tweet-quote" className="button"><FontAwesomeIcon icon={faTwitter} size="lg" color="#ffffff"/></button>
              <button id="tumblr" className="button"><FontAwesomeIcon icon={faTumblr} size="lg" color="#ffffff"/></button>
            </div>
            <button id="new-quote" className="button" onClick={this.changeQuote}>New quote</button>
          </div>
        </div>
        <div id="sign">by zenott</div>
      </div>
    );
  }
}

export default App;
