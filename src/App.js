import React, { Component } from 'react';
import './App.css';
import QuoteDiv from './QuoteDiv';
import LowerDiv from './LowerDiv';
import quotes from './quotes.json';
import Helmet from 'react-helmet';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote:'',
      author:'',
      fade:false,
      color:'#dddddd',
    };
    this.changeQuote=this.changeQuote.bind(this);
    this.removeAnimClass=this.removeAnimClass.bind(this);
  }
  changeQuote(){
    let rnd=Math.random();
    let qnum=Math.floor(quotes.quotes.length*rnd);
    const cArr=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let cnum=Math.floor(cArr.length*rnd);
    this.setState({      
      quote: quotes.quotes[qnum].quote,
      author: quotes.quotes[qnum].author,
      fade:true,
      color:cArr[cnum]
    });
  }
  componentDidMount(){
    this.changeQuote();
  }
  removeAnimClass(){
    this.setState({
      fade:false,
    })
  }
  render() {
    return (
      <div className="App">
        <Helmet bodyAttributes={{style:'background-color : '+this.state.color,class:'color-transition'}}/>
        <div id="quote-box">
          <QuoteDiv quote={this.state.quote} author={this.state.author} fade={this.state.fade} color={this.state.color} removeAnimClass={this.removeAnimClass} />
          <LowerDiv quote={this.state.quote} author={this.state.author} changeQuote={this.changeQuote} color={this.state.color} />
        </div>
        <div id="sign">by <a href="https://zenott.github.com">zenott</a></div>
      </div>
    );
  }
}

export default App;
