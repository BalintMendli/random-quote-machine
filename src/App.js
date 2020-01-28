import React, { Component } from 'react';
import './App.css';
import Helmet from 'react-helmet';
import QuoteDiv from './QuoteDiv';
import LowerDiv from './LowerDiv';
import quotes from './quotes.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      fade: false,
      color: '#dddddd',
    };
    this.changeQuote = this.changeQuote.bind(this);
    this.removeAnimClass = this.removeAnimClass.bind(this);
  }

  componentDidMount() {
    this.changeQuote();
  }

  removeAnimClass() {
    this.setState({
      fade: false,
    });
  }

  changeQuote() {
    const rnd = Math.random();
    const qnum = Math.floor(quotes.quotes.length * rnd);
    const cArr = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];
    const cnum = Math.floor(cArr.length * rnd);
    this.setState({
      quote: quotes.quotes[qnum].quote,
      author: quotes.quotes[qnum].author,
      fade: true,
      color: cArr[cnum],
    });
  }

  render() {
    const { color, quote, author, fade } = this.state;
    return (
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: `background-color : ${color}`,
            class: 'color-transition',
          }}
        />
        <div id="quote-box">
          <QuoteDiv
            quote={quote}
            author={author}
            fade={fade}
            color={color}
            removeAnimClass={this.removeAnimClass}
          />
          <LowerDiv
            quote={quote}
            author={author}
            changeQuote={this.changeQuote}
            color={color}
          />
        </div>
        <div id="sign">
          by <a href="https://zenott.github.com">zenott</a>
        </div>
      </div>
    );
  }
}

export default App;
