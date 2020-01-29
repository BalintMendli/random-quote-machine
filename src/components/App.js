import React, { Component } from 'react';
import './App.css';
import Helmet from 'react-helmet';
import Quote from './Quote';
import ButtonBox from './ButtonBox';
import quotes from '../constants/quotes.json';
import colors from '../constants/colors';
import { getRandomElement } from '../utils';

function randomQuoteAndColor() {
  const quote = getRandomElement(quotes.quotes);
  return {
    quote: quote.quote,
    author: quote.author,
    color: getRandomElement(colors),
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = randomQuoteAndColor();
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState(randomQuoteAndColor());
  }

  render() {
    const { color, quote, author } = this.state;
    return (
      <main className="App">
        <Helmet
          bodyAttributes={{
            style: `background-color : ${color}`,
            class: 'color-transition',
          }}
        />
        <section id="quote-box">
          <Quote quote={quote} author={author} color={color} />
          <ButtonBox
            quote={quote}
            author={author}
            changeQuote={this.changeQuote}
            color={color}
          />
        </section>
        <footer className="footer">
          by <a href="https://zenott.github.com">zenott</a>
        </footer>
      </main>
    );
  }
}

export default App;
